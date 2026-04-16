import {
  Component,
  ElementRef,
  ViewChild,
  signal,
  computed,
  inject,
  PLATFORM_ID,
  afterNextRender, input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Aspect { width: number; height: number; }
interface Crop   { x: number; y: number; w: number; h: number; }

@Component({
  selector: 'app-focus-image',
  standalone: true,
  templateUrl: './focus-image.component.html',
})
export class FocusImageComponent {
  private readonly platformId = inject(PLATFORM_ID);

  @ViewChild('imageContainer', { static: true }) imageContainer!: ElementRef<HTMLDivElement>;

  imageSrc    = input.required<string>();
  aspectRatio = input.required<Aspect>();
  focus        = input.required<Crop | null>();

  imageWidth  = signal<number | null>(null);
  imageHeight = signal<number | null>(null);

  containerWidth  = signal<number | null>(null);
  containerHeight = signal<number | null>(null);

  imageAspectRatio = computed(() => {
    const w = this.imageWidth(), h = this.imageHeight();
    return w && h ? Number((w / h).toFixed(2)) : null;
  });

  /**
   * Scale factor from image pixels → CSS pixels so the crop fits the container.
   * If you set only width (or only height) on the container, use the matching one.
   */
  scale = computed(() => {
    const cW = this.containerWidth();
    const cH = this.containerHeight();
    const c  = this.focus();

    if (!c || (!cW && !cH)) return 1;

    if (cW && cH) {
      // If both are set, choose the scale that fills the box (no distortion).
      const sx = cW / c.w;
      const sy = cH / c.h;
      return Math.min(sx, sy); // use Math.min to avoid overflow/letterbox
    }
    if (cW) return cW / c.w;
    return cH! / c.h;
  });

  /** Scaled image draw size in CSS px */
  imgDrawWidth  = computed(() => {
    const iw = this.imageWidth();  if (!iw) return null;
    return Math.round(iw * this.scale());
  });
  imgDrawHeight = computed(() => {
    const ih = this.imageHeight(); if (!ih) return null;
    return Math.round(ih * this.scale());
  });

  /** Offsets so that the crop’s top-left aligns with the container’s top-left */
  offsetX = computed(() => Math.round((this.focus()?.x ?? 0) * this.scale()));
  offsetY = computed(() => Math.round((this.focus()?.y ?? 0) * this.scale()));

  /** CSS transform string */
  transform = computed(() => `translate(${-this.offsetX()}px, ${-this.offsetY()}px)`);

  ratioString = computed(() => `${this.aspectRatio().width} / ${this.aspectRatio().height}`);

  constructor() {
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.loadImageMeta();
        this.observeContainerSize();   // 🆕 start observing container
      }
    });
  }

  private loadImageMeta() {
    const img = new Image();
    img.src = this.imageSrc();
    img.onload = () => {
      this.imageWidth.set(img.naturalWidth);
      this.imageHeight.set(img.naturalHeight);
    };
  }

  // 🆕 track container size reactively
  private observeContainerSize() {
    const el = this.imageContainer.nativeElement;
    const update = () => {
      const rect = el.getBoundingClientRect();
      this.containerWidth.set(Math.round(rect.width));
      this.containerHeight.set(Math.round(rect.height));
    };
    update();

    const ResizeObs = (window as any).ResizeObserver as typeof ResizeObserver | undefined;
    if (ResizeObs) {
      const ro = new ResizeObs(update);
      ro.observe(el);
    }
  }
}

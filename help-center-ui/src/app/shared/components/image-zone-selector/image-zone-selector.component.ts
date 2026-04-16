import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  signal,
  input,
  output,
  Inject,
  PLATFORM_ID,
  HostBinding,
  OnDestroy,
  effect,
} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

export interface ImageZoneAspect {
  width: number;
  height: number;
}

export interface ImageZoneChangeEvent {
  file: File | null;                             // <--- changed to allow null
  src: string | null;                            // <--- new: actual image source
  aspect: ImageZoneAspect | null;
  x: number;
  y: number;
  w: number;
  h: number;
  image: { width: number; height: number };
}

type Handle = 'move' | 'nw' | 'ne' | 'sw' | 'se' | 'n' | 'e' | 's' | 'w';

@Component({
  selector: 'app-image-zone-selector',
  standalone: true,
  imports: [],
  templateUrl: './image-zone-selector.component.html',
  styles: [`
    .handle {
      position: absolute;
      background-color: #ffffff;           /* bg-white */

      border-width: 2px;                   /* border-2 */
      border-style: solid;
      border-color: rgb(99 102 241);        /* border-indigo-500 */

      border-radius: 0.375rem;              /* rounded-md (6px) */

      box-shadow:
        0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px -1px rgba(0, 0, 0, 0.1);   /* shadow */
      width: .9rem;
      height: .9rem;
    }

    .cursor-grab {
      cursor: grab;
    }

    .cursor-grabbing {
      cursor: grabbing;
    }
  `],
})
export class ImageZoneSelectorComponent implements OnDestroy {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    effect(() => {
      if (!this.isBrowser) return;

      const f = this.file();
      const src = this.imageSrc();

      if (f) {
        // File mode
        this.applyExternalFile(f);
        return;
      }

      // No file: reset internal crop + URL
      this.clearInternalState();

      // Static src mode
      if (src) {
        this.objectUrl = src;
      }
    });
  }

  private get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  /** Inputs */
  file = input<File | null>(null);
  imageSrc = input<string | null>(null);
  aspect = input<ImageZoneAspect | null>(null); // null = free
  accept = input<string>('image/*');
  defaultHeight = input(200);

  /** Outputs */
  changed = output<ImageZoneChangeEvent>();
  imagePicked = output<File>();
  imageRemoved = output<void>();

  /** DOM refs */
  @ViewChild('stage') stageRef!: ElementRef<HTMLDivElement>;
  @ViewChild('imgEl') imgRef!: ElementRef<HTMLImageElement>;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  /** Host sizing */
  @HostBinding('style.height') hostHeight = '100%';

  @HostBinding('style.min-height.px') get hostMinHeight() {
    return this.defaultHeight();
  }

  /** State */
  imageReady = signal(false);
  dragging = signal(false);
  handle = signal<Handle>('move');
  imgRect = signal({x: 0, y: 0, w: 0, h: 0});
  crop = signal({x: 0, y: 0, w: 0, h: 0});

  private selectedFile: File | null = null;
  private objectUrl: string | null = null;
  private startX = 0;
  private startY = 0;
  private startCrop = {x: 0, y: 0, w: 0, h: 0};

  private readonly MIN = 20;

  /** Lifecycle */
  ngOnDestroy() {
    this.revokeUrl();
    if (this.isBrowser) window.removeEventListener('pointermove', this.onMove);
  }

  /** Getters */
  get displaySrc(): string | null {
    return this.objectUrl;
  }

  private get hasImage(): boolean {
    return !!this.displaySrc;
  }

  private aspectRatio(): number | null {
    const a = this.aspect();
    return a ? a.width / a.height : null;
  }

  /** File picker UX */
  openFileDialog() {
    this.fileInput?.nativeElement.click();
  }

  onFileInputChange(ev: Event) {
    const input = ev.target as HTMLInputElement;
    const f = input.files?.[0];
    if (!f) return;
    this.imagePicked.emit(f);
    this.selectedFile = f;
    this.reset();
    this.revokeUrl();
    this.objectUrl = URL.createObjectURL(f);
    input.value = '';
  }

  removeImage() {
    this.imageRemoved.emit();
    this.selectedFile = null;
    this.clearInternalState();
    this.revokeUrl();
  }

  /** External file */
  private applyExternalFile(f: File) {
    this.selectedFile = f;
    this.reset();
    this.revokeUrl();
    this.objectUrl = this.isBrowser ? URL.createObjectURL(f) : null;
  }

  /** Helpers */
  private revokeUrl() {
    if (this.objectUrl && this.objectUrl.startsWith('blob:')) {
      URL.revokeObjectURL(this.objectUrl);
    }
    this.objectUrl = null;
  }

  private reset() {
    this.imageReady.set(false);
    this.imgRect.set({x: 0, y: 0, w: 0, h: 0});
    this.crop.set({x: 0, y: 0, w: 0, h: 0});
  }

  private clearInternalState() {
    this.reset();
    this.revokeUrl();
  }

  private clamp(v: number, min: number, max: number) {
    return Math.min(Math.max(v, min), max);
  }

  /** Emit on change */
  private _emitPending = false;

  private scheduleEmitChange() {
    if (this._emitPending || !this.isBrowser || !this.hasImage) return;

    this._emitPending = true;
    requestAnimationFrame(() => {
      this._emitPending = false;
      const img = this.imgRef?.nativeElement;
      if (!img) return;
      const nc = this.nativeCrop();
      this.changed.emit({
        file: this.selectedFile,              // may be null in imageSrc-only mode
        src: this.displaySrc,                // objectUrl or external URL
        aspect: this.aspect() ? {...this.aspect()!} : null,
        x: nc.x, y: nc.y, w: nc.w, h: nc.h,
        image: {width: img.naturalWidth, height: img.naturalHeight},
      });
    });
  }

  /** Image load */
  onImageLoad() {
    if (!this.stageRef?.nativeElement || !this.imgRef?.nativeElement) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.computeDisplayedImageRect();
        this.fitInitialCrop();
        this.imageReady.set(true);
        this.scheduleEmitChange();
      });
    });
  }

  @HostListener('window:resize')
  onResize() {
    if (!this.displaySrc) return;
    const prev = this.nativeCrop();
    this.computeDisplayedImageRect();
    if (prev.w && prev.h) {
      const img = this.imgRef.nativeElement;
      const scaleX = this.imgRect().w / img.naturalWidth;
      const scaleY = this.imgRect().h / img.naturalHeight;
      this.crop.set({
        x: prev.x * scaleX, y: prev.y * scaleY,
        w: prev.w * scaleX, h: prev.h * scaleY,
      });
      this.clampCropInside();
    } else {
      this.fitInitialCrop();
    }
    this.scheduleEmitChange();
  }

  private computeDisplayedImageRect() {
    const stage = this.stageRef.nativeElement;
    const img = this.imgRef.nativeElement;
    let sw = stage.clientWidth, sh = stage.clientHeight;
    if (!sw || !sh) {
      const r = stage.getBoundingClientRect();
      sw = r.width;
      sh = 320;
    }
    const iw = img.naturalWidth || 1, ih = img.naturalHeight || 1;
    const sr = sw / sh, ir = iw / ih;
    let dw, dh;
    if (ir > sr) {
      dw = sw;
      dh = sw / ir;
    } else {
      dh = sh;
      dw = sh * ir;
    }
    this.imgRect.set({x: (sw - dw) / 2, y: (sh - dh) / 2, w: dw, h: dh});
  }

  private fitInitialCrop() {
    const r = this.aspectRatio(), {w: iw, h: ih} = this.imgRect();
    if (!iw || !ih) return;
    if (!r) {
      this.crop.set({x: iw * 0.1, y: ih * 0.1, w: iw * 0.8, h: ih * 0.8});
      return;
    }
    const hCover = {w: ih * r, h: ih}, wCover = {w: iw, h: iw / r};
    const fit = (wCover.h <= ih) ? wCover : hCover;
    const w = Math.max(this.MIN, Math.min(fit.w, iw));
    const h = Math.max(this.MIN, Math.min(fit.h, ih));
    this.crop.set({x: (iw - w) / 2, y: (ih - h) / 2, w, h});
  }

  /** Dragging */
  handleDown(ev: PointerEvent, h: Handle) {
    ev.stopPropagation();
    this.startDrag(ev, h);
  }

  startDrag(ev: PointerEvent, h: Handle) {
    // IMPORTANT: work for both file and imageSrc
    if (!this.isBrowser || !this.hasImage) return;

    ev.preventDefault();
    (ev.target as HTMLElement).setPointerCapture(ev.pointerId);
    this.dragging.set(true);
    this.handle.set(h);
    this.startX = ev.clientX;
    this.startY = ev.clientY;
    this.startCrop = {...this.crop()};
    window.addEventListener('pointermove', this.onMove);
    window.addEventListener('pointerup', this.onUp, {once: true});
  }

  private onMove = (ev: PointerEvent) => {
    if (!this.dragging()) return;

    const dx = ev.clientX - this.startX;
    const dy = ev.clientY - this.startY;
    const sc = this.startCrop;
    const iw = this.imgRect().w, ih = this.imgRect().h;
    const free = this.aspectRatio() == null;
    const MIN = this.MIN;

    // MOVE
    if (this.handle() === 'move') {
      const x = this.clamp(sc.x + dx, 0, Math.max(0, iw - sc.w));
      const y = this.clamp(sc.y + dy, 0, Math.max(0, ih - sc.h));
      this.crop.set({x, y, w: sc.w, h: sc.h});
      this.scheduleEmitChange();
      return;
    }

    // SIDES (FREE aspect)
    if (free && (this.handle() === 'n' || this.handle() === 's' || this.handle() === 'w' || this.handle() === 'e')) {
      const {x: sx, y: sy, w: sw, h: sh} = sc;
      let x = sx, y = sy, w = sw, h = sh;

      switch (this.handle()) {
        case 'n': {
          const bottom = sy + sh;
          const top = this.clamp(sy + dy, 0, bottom - MIN);
          y = top;
          h = bottom - top;
          break;
        }
        case 's': {
          const top = sy;
          const bottom = this.clamp(sy + sh + dy, top + MIN, ih);
          y = top;
          h = bottom - top;
          break;
        }
        case 'w': {
          const right = sx + sw;
          const left = this.clamp(sx + dx, 0, right - MIN);
          x = left;
          w = right - left;
          break;
        }
        case 'e': {
          const left = sx;
          const right = this.clamp(sx + sw + dx, left + MIN, iw);
          x = left;
          w = right - left;
          break;
        }
      }

      this.crop.set({x, y, w, h});
      this.scheduleEmitChange();
      return;
    }

    // CORNERS
    if (['nw', 'ne', 'sw', 'se'].includes(this.handle())) {
      const handle = this.handle();
      const ax = (handle === 'nw' || handle === 'sw') ? sc.x + sc.w : sc.x;
      const ay = (handle === 'nw' || handle === 'ne') ? sc.y + sc.h : sc.y;

      let px = (handle === 'nw' || handle === 'sw') ? sc.x + dx : sc.x + sc.w + dx;
      let py = (handle === 'nw' || handle === 'ne') ? sc.y + dy : sc.y + sc.h + dy;

      const r = this.aspectRatio();

      if (r == null) {
        if (px <= ax) {
          px = this.clamp(px, 0, ax - MIN);
        } else {
          px = this.clamp(px, ax + MIN, iw);
        }
        if (py <= ay) {
          py = this.clamp(py, 0, ay - MIN);
        } else {
          py = this.clamp(py, ay + MIN, ih);
        }

        const x = Math.min(ax, px);
        const y = Math.min(ay, py);
        const w = Math.max(MIN, Math.abs(px - ax));
        const h = Math.max(MIN, Math.abs(py - ay));
        this.crop.set({x, y, w, h});
        this.scheduleEmitChange();
        return;
      } else {
        const dirX = (px <= ax) ? -1 : 1;
        const dirY = (py <= ay) ? -1 : 1;

        const maxW = dirX < 0 ? ax - 0 : iw - ax;
        const maxH = dirY < 0 ? ay - 0 : ih - ay;

        const sMax = Math.max(MIN, Math.min(maxW, r * maxH));
        const sMin = MIN;

        const desiredW = Math.abs(px - ax);
        const s = this.clamp(desiredW, sMin, sMax);

        const w = s;
        const h = s / r;

        const x = dirX < 0 ? ax - w : ax;
        const y = dirY < 0 ? ay - h : ay;

        this.crop.set({x, y, w, h});
        this.scheduleEmitChange();
        return;
      }
    }
  };

  private onUp = () => {
    this.dragging.set(false);
    window.removeEventListener('pointermove', this.onMove);
    this.clampCropInside();
    this.scheduleEmitChange();
  };

  private clampCropInside() {
    const {w: iw, h: ih} = this.imgRect();
    let {x, y, w, h} = this.crop();

    x = this.clamp(x, 0, Math.max(0, iw - w));
    y = this.clamp(y, 0, Math.max(0, ih - h));
    w = Math.max(this.MIN, Math.min(w, iw - x));
    h = Math.max(this.MIN, Math.min(h, ih - y));

    this.crop.set({x, y, w, h});
  }

  private nativeCrop() {
    const img = this.imgRef?.nativeElement;
    if (!img || !this.imgRect().w || !this.imgRect().h) return {x: 0, y: 0, w: 0, h: 0};
    const sx = img.naturalWidth / this.imgRect().w;
    const sy = img.naturalHeight / this.imgRect().h;
    const c = this.crop();
    return {
      x: Math.round(c.x * sx),
      y: Math.round(c.y * sy),
      w: Math.round(c.w * sx),
      h: Math.round(c.h * sy)
    };
  }
}

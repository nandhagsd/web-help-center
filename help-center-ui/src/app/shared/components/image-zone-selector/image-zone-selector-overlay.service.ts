import {inject, Injectable, OnDestroy} from '@angular/core';
import {ImageZoneSelectorOverlayComponent} from './image-zone-selector-overlay/image-zone-selector-overlay.component';
import {ImageZoneAspect, ImageZoneChangeEvent} from './image-zone-selector.component';
import {OverlayService} from '@vallift/ngl';


export interface ImageZoneSelectorOpenConfig {
  popupTitle?: string;
  aspect?: ImageZoneAspect | null; // optional, can be null when free crop
  imageFile?: File | null;                     // for newly uploaded image
  imageUrl?: string | null;               // for existing image from section.imageUrl
  imageAlt?: string;               // optional alt text for later use
}

@Injectable({
  providedIn: 'root',
})
export class ImageZoneSelectorOverlayService {
  overlay = inject(OverlayService);

  open(config: ImageZoneSelectorOpenConfig): Promise<ImageZoneChangeEvent | null> {
    const ref = this.overlay.openModal<ImageZoneSelectorOverlayComponent>(
      ImageZoneSelectorOverlayComponent,
      {
        data: {
          popupTitle: config.popupTitle,
          aspect: config.aspect,
          imageFile: config.imageFile,
          imageUrl: config.imageUrl,
          imageAlt: config.imageAlt,
        },
      }
    );

    return new Promise<ImageZoneChangeEvent | null>((resolve) => {
      const sub = ref.closed.subscribe((value: ImageZoneChangeEvent | null) => {
        resolve(value);
        sub.unsubscribe();
      });
    });
  }
}

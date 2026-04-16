import {Component, inject} from '@angular/core';
import {ImageZoneAspect, ImageZoneChangeEvent, ImageZoneSelectorComponent} from '../image-zone-selector.component';
import {BaseOverlayComponent, ButtonComponent} from '@vallift/ngl';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';

@Component({
  selector: 'app-image-zone-selector-overlay',
  imports: [
    ImageZoneSelectorComponent,
    BaseOverlayComponent,
    ButtonComponent
  ],
  templateUrl: './image-zone-selector-overlay.component.html',
  styleUrl: './image-zone-selector-overlay.component.scss',
})
export class ImageZoneSelectorOverlayComponent {

  dialogRef = inject(DialogRef);
  data: {popupTitle?: string, aspect: ImageZoneAspect, imageFile?: File, imageUrl?: string } = inject(DIALOG_DATA);

  private imageSelection?: ImageZoneChangeEvent;

  protected onConfirmClicked() {
    this.dialogRef.close(this.imageSelection);
  }

  protected onChanged($event: ImageZoneChangeEvent) {
    this.imageSelection = $event;
  }
}

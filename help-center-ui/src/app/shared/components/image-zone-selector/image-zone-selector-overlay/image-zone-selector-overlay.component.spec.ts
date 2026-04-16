import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageZoneSelectorOverlayComponent } from './image-zone-selector-overlay.component';

describe('ImageZoneSelectorOverlayComponent', () => {
  let component: ImageZoneSelectorOverlayComponent;
  let fixture: ComponentFixture<ImageZoneSelectorOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageZoneSelectorOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageZoneSelectorOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

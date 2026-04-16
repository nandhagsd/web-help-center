import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageZoneSelectorComponent } from './image-zone-selector.component';

describe('ImageZoneSelectorComponent', () => {
  let component: ImageZoneSelectorComponent;
  let fixture: ComponentFixture<ImageZoneSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageZoneSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageZoneSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

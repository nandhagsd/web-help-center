import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusImageComponent } from './focus-image.component';

describe('CroppedImageComponent', () => {
  let component: FocusImageComponent;
  let fixture: ComponentFixture<FocusImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocusImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

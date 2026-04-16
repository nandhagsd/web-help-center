import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HelpCenterPage } from './help-center-page';

describe('HelpCenterPage', () => {
  let component: HelpCenterPage;
  let fixture: ComponentFixture<HelpCenterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpCenterPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HelpCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

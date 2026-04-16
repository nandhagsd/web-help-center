import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';

import { HelpTopicDetailsPage } from './help-topic-details-page.component';
import { SeoService } from '@core/services/seo.service';

describe('HelpDetailsPage', () => {
  let component: HelpTopicDetailsPage;
  let fixture: ComponentFixture<HelpTopicDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpTopicDetailsPage],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                slug: 'getting-started',
              }),
            },
          },
        },
        {
          provide: SeoService,
          useValue: {
            update: () => undefined,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HelpTopicDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

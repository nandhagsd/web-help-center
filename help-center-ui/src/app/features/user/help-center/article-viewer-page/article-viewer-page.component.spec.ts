import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { ArticleViewerPage } from './article-viewer-page.component';
import { SeoService } from '@core/services/seo.service';

describe('ArticleViewerComponent', () => {
  let component: ArticleViewerPage;
  let fixture: ComponentFixture<ArticleViewerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleViewerPage],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                topicSlug: 'getting-started',
                articleSlug: 'create-your-restaurant-profile',
              }),
            },
            paramMap: of(
              convertToParamMap({
                topicSlug: 'getting-started',
                articleSlug: 'create-your-restaurant-profile',
              }),
            ),
          },
        },
        {
          provide: SeoService,
          useValue: {
            update: () => undefined,
          },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleViewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render structured article sections', () => {
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('Complete your core profile details');
    expect(text).toContain('Restaurant name and location');
  });
});

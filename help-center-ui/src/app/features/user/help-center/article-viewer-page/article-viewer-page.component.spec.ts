import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { provideAngularSvgIcon } from 'angular-svg-icon';

import { ArticleViewerPage } from './article-viewer-page.component';
import { SeoService } from '@core/services/seo.service';

describe('ArticleViewerComponent', () => {
  let component: ArticleViewerPage;
  let fixture: ComponentFixture<ArticleViewerPage>;
  let routeParamMap$: BehaviorSubject<ReturnType<typeof convertToParamMap>>;

  beforeEach(async () => {
    routeParamMap$ = new BehaviorSubject(
      convertToParamMap({
        topicSlug: 'getting-started',
        articleSlug: 'create-your-restaurant-profile',
      }),
    );

    await TestBed.configureTestingModule({
      imports: [ArticleViewerPage],
      providers: [
        provideRouter([]),
        provideAngularSvgIcon(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: routeParamMap$.value,
            },
            paramMap: routeParamMap$.asObservable(),
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

  it('should hide previous and show next on the first article', () => {
    expect(component.previousArticleRef).toBeUndefined();
    expect(component.nextArticleRef).toBeDefined();

    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).not.toContain('Previous:');
    expect(text).toContain('Next:');
  });

  it('should show previous and hide next on the last article', async () => {
    const lastArticle = component.orderedArticleRefs[component.orderedArticleRefs.length - 1];
    routeParamMap$.next(
      convertToParamMap({
        topicSlug: lastArticle.topicSlug,
        articleSlug: lastArticle.articleSlug,
      }),
    );
    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.previousArticleRef).toBeDefined();
    expect(component.nextArticleRef).toBeUndefined();

    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('Previous:');
    expect(text).not.toContain('Next:');
  });
});

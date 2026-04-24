import {Component, OnInit, inject} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {SeoService} from '@core/services/seo.service';
import {AppSvgIconComponent} from '@vallift/ngl';
import {
  getHelpArticlesForTopicSlug,
  getHelpArticleForTopic,
  getHelpTopicBySlug,
  HELP_TOPICS,
  HelpTopic,
  resolveHelpArticleSeo,
} from '@core/data/help-topics.data';
import {HelpArticle} from '@core/data/help-articles/help-articles.model';
import {ArticleSectionType} from '@core/models/articles/article-section-type.enum';
import {MarkdownHtmlPipe} from '@shared/pipes/markdown-html.pipe';

type ArticleRouteRef = {
  topicSlug: string;
  articleSlug: string;
  title: string;
};


@Component({
  selector: 'app-article-page',
  imports: [
    RouterLink,
    MarkdownHtmlPipe,
    AppSvgIconComponent,
  ],
  templateUrl: './article-viewer-page.component.html',
  styleUrl: './article-viewer-page.component.css',
})
export class ArticleViewerPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seoService = inject(SeoService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly ArticleSectionType = ArticleSectionType;

  readonly topicNavigation = HELP_TOPICS.map((topic) => ({
    topic,
    articles: getHelpArticlesForTopicSlug(topic.slug),
  }));

  readonly orderedArticleRefs: ArticleRouteRef[] = this.topicNavigation.flatMap((group) =>
    group.articles.map((article) => ({
      topicSlug: group.topic.slug,
      articleSlug: article.slug,
      title: article.title,
    })),
  );

  topic?: HelpTopic;
  article?: HelpArticle;
  previousArticleRef?: ArticleRouteRef;
  nextArticleRef?: ArticleRouteRef;

  // Multiple groups can stay open on mobile so users can compare sections quickly.
  expandedTopicSlugs = new Set<string>();

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const topicSlug = paramMap.get('topicSlug');
      const articleSlug = paramMap.get('articleSlug');

      this.loadArticle(topicSlug, articleSlug);
    });
  }

  toggleTopicAccordion(topicSlug: string): void {
    if (this.expandedTopicSlugs.has(topicSlug)) {
      this.expandedTopicSlugs.delete(topicSlug);
      return;
    }

    this.expandedTopicSlugs.add(topicSlug);
  }

  isTopicExpanded(topicSlug: string): boolean {
    return this.expandedTopicSlugs.has(topicSlug);
  }

  isActiveTopic(topicSlug: string): boolean {
    return this.topic?.slug === topicSlug;
  }

  isActiveArticle(topicSlug: string, articleSlug: string): boolean {
    return this.topic?.slug === topicSlug && this.article?.slug === articleSlug;
  }

  toSafeYoutubeEmbedUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private loadArticle(
    topicSlug: string | null,
    articleSlug: string | null,
  ): void {

    const topic = getHelpTopicBySlug(topicSlug);
    const article = getHelpArticleForTopic(topicSlug, articleSlug);

    if (!topic || !article) {
      this.router.navigateByUrl('/help');
      return;
    }

    this.topic = topic;
    this.article = article;
    this.expandedTopicSlugs.add(topic.slug);
    this.resolveAdjacentArticles(topic.slug, article.slug);
    this.scrollToTop();

    const seo = resolveHelpArticleSeo(topic, article);

    this.seoService.update({
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      type: 'article',
      url: `https://www.smartdining.co/help/${topic.slug}/${article.slug}`,
      imageUrl: 'https://www.smartdining.co/assets/images/seo/help-center-cover.webp',
    });
  }

  private resolveAdjacentArticles(topicSlug: string, articleSlug: string): void {
    const currentIndex = this.orderedArticleRefs.findIndex(
      (item) => item.topicSlug === topicSlug && item.articleSlug === articleSlug,
    );

    if (currentIndex < 0) {
      this.previousArticleRef = undefined;
      this.nextArticleRef = undefined;
      return;
    }

    this.previousArticleRef = this.orderedArticleRefs[currentIndex - 1];
    this.nextArticleRef = this.orderedArticleRefs[currentIndex + 1];
  }

  private scrollToTop(): void {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      try {
        window.scrollTo(0, 0);
      } catch {
        // Ignore scroll errors in non-browser test environments.
      }
    }
  }
}

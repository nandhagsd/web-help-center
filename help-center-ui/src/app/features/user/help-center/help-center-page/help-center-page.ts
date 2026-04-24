import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Assets} from "@core/generated/assets";
import {getHelpArticlesForTopicSlug, getPopularTopics, HELP_TOPICS} from '@core/data/help-topics.data';
import {HelpArticle} from '@core/data/help-articles/help-articles.model';
import {ArticleSection} from '@core/models/articles/sections.model';
import {ArticleSectionType} from '@core/models/articles/article-section-type.enum';
import {AppSvgIconComponent} from '@vallift/ngl';

type TopicCard = {
  icon: string;
  title: string;
  slug: string;
  articleCount: number;
};

type ArticleIndexItem = {
  topicSlug: string;
  topicTitle: string;
  articleSlug: string;
  articleTitle: string;
  articleSummary: string;
  sectionTexts: string[];
  searchableText: string;
};

type ArticleSuggestion = {
  id: string;
  topicSlug: string;
  topicTitle: string;
  articleSlug: string;
  articleTitle: string;
  matchPreview: string;
  score: number;
};

@Component({
  selector: 'app-help-center-page',
  imports: [
    AppSvgIconComponent
  ],
  templateUrl: './help-center-page.html',
  styleUrl: './help-center-page.css',
})
export class HelpCenterPage {
  constructor(private readonly router: Router) {
  }

  readonly Assets = Assets;

  readonly searchPlaceholder = 'Search reservations, guests, settings...';
  readonly maxSuggestions = 6;

  readonly helpTopics = HELP_TOPICS;

  readonly topicCards: TopicCard[] = this.helpTopics.map((topic) => ({
    icon: topic.icon,
    title: topic.title,
    slug: topic.slug,
    articleCount: getHelpArticlesForTopicSlug(topic.slug).length,
  }));

  readonly popularTopics = getPopularTopics();

  readonly articleIndex: ArticleIndexItem[] = HELP_TOPICS.flatMap((topic) =>
    getHelpArticlesForTopicSlug(topic.slug).map((article) => this.toArticleIndexItem(topic.slug, topic.title, article)),
  );

  searchQuery = '';
  suggestions: ArticleSuggestion[] = [];
  activeSuggestionIndex = -1;

  getArticleCountLabel(count: number): string {
    return `${count} ${count === 1 ? 'article' : 'articles'}`;
  }

  navigateTo(slug: string): void {
    this.router.navigate(['/help', slug]);
  }

  onSearchInput(query: string): void {
    this.searchQuery = query;
    this.suggestions = this.buildSuggestions(query);
    this.activeSuggestionIndex = this.suggestions.length ? 0 : -1;
  }

  onSearchFocus(): void {
    if (!this.searchQuery.trim()) {
      return;
    }

    this.suggestions = this.buildSuggestions(this.searchQuery);
    this.activeSuggestionIndex = this.suggestions.length ? 0 : -1;
  }

  onSearchBlur(): void {
    setTimeout(() => {
      this.suggestions = [];
      this.activeSuggestionIndex = -1;
    }, 120);
  }

  onSearchKeydown(event: KeyboardEvent): void {
    if (!this.suggestions.length) {
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.activeSuggestionIndex = (this.activeSuggestionIndex + 1) % this.suggestions.length;
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.activeSuggestionIndex =
        (this.activeSuggestionIndex - 1 + this.suggestions.length) % this.suggestions.length;
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      const selectedSuggestion = this.suggestions[this.activeSuggestionIndex] ?? this.suggestions[0];
      this.selectSuggestion(selectedSuggestion);
      return;
    }

    if (event.key === 'Escape') {
      this.suggestions = [];
      this.activeSuggestionIndex = -1;
    }
  }

  selectSuggestion(suggestion: ArticleSuggestion): void {
    this.searchQuery = suggestion.articleTitle;
    this.suggestions = [];
    this.activeSuggestionIndex = -1;

    this.router.navigate(['/help', suggestion.topicSlug, suggestion.articleSlug]);
  }

  hasSearchQuery(): boolean {
    return !!this.searchQuery.trim();
  }

  private buildSuggestions(query: string): ArticleSuggestion[] {
    const normalizedQuery = this.normalizeText(query);

    if (!normalizedQuery) {
      return [];
    }

    const queryTokens = normalizedQuery.split(' ').filter(Boolean);

    return this.articleIndex
      .map((item) => {
        const score = this.calculateScore(item, normalizedQuery, queryTokens);

        if (!score) {
          return null;
        }

        return {
          id: `${item.topicSlug}:${item.articleSlug}`,
          topicSlug: item.topicSlug,
          topicTitle: item.topicTitle,
          articleSlug: item.articleSlug,
          articleTitle: item.articleTitle,
          matchPreview: this.resolveMatchPreview(item, queryTokens),
          score,
        } satisfies ArticleSuggestion;
      })
      .filter((item): item is ArticleSuggestion => !!item)
      .sort((a, b) => b.score - a.score)
      .slice(0, this.maxSuggestions);
  }

  private calculateScore(item: ArticleIndexItem, query: string, queryTokens: string[]): number {
    const title = this.normalizeText(item.articleTitle);
    const summary = this.normalizeText(item.articleSummary);
    const topic = this.normalizeText(item.topicTitle);

    const matchesAllTokens = queryTokens.every((token) => item.searchableText.includes(token));

    if (!matchesAllTokens) {
      return 0;
    }

    let score = 0;

    if (title.includes(query)) {
      score += 160;
    }

    if (title.startsWith(query)) {
      score += 40;
    }

    if (summary.includes(query)) {
      score += 100;
    }

    if (topic.includes(query)) {
      score += 70;
    }

    if (item.searchableText.includes(query)) {
      score += 40;
    }

    score += queryTokens.filter((token) => title.includes(token)).length * 18;
    score += queryTokens.filter((token) => summary.includes(token)).length * 12;
    score += queryTokens.filter((token) => topic.includes(token)).length * 8;

    return score;
  }

  private resolveMatchPreview(item: ArticleIndexItem, queryTokens: string[]): string {
    const matchedSection = item.sectionTexts.find((sectionText) => {
      const normalizedSection = this.normalizeText(sectionText);
      return queryTokens.every((token) => normalizedSection.includes(token));
    });

    if (matchedSection) {
      return matchedSection;
    }

    return item.articleSummary;
  }

  private toArticleIndexItem(topicSlug: string, topicTitle: string, article: HelpArticle): ArticleIndexItem {
    const sectionTexts = this.extractSectionTexts(article.sections);

    return {
      topicSlug,
      topicTitle,
      articleSlug: article.slug,
      articleTitle: article.title,
      articleSummary: article.summary,
      sectionTexts,
      searchableText: this.normalizeText([
        topicTitle,
        article.title,
        article.summary,
        ...sectionTexts,
      ].join(' ')),
    };
  }

  private extractSectionTexts(sections: ArticleSection[]): string[] {
    return sections.flatMap((section) => {
      switch (section.type) {
        case ArticleSectionType.HeadingParagraph:
          return [section.heading, section.paragraph];
        case ArticleSectionType.Paragraph:
          return [section.paragraph];
        case ArticleSectionType.Image:
          return [section.imageAlt, section.caption ?? ''];
        case ArticleSectionType.VideoEmbed:
          return [section.heading ?? ''];
        case ArticleSectionType.HeadingBulletedList:
          return [section.heading, ...section.items];
        case ArticleSectionType.BulletedList:
          return section.items;
        case ArticleSectionType.HeadingNumberedList:
          return [section.heading, ...section.items];
        case ArticleSectionType.NumberedList:
          return section.items;
        case ArticleSectionType.quote:
          return [section.quote, section.author ?? '', section.designation ?? ''];
        case ArticleSectionType.Divider:
        default:
          return [];
      }
    }).filter((item) => !!item.trim());
  }

  private normalizeText(text: string): string {
    return text.toLowerCase().replace(/\*\*/g, '').replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  }
}

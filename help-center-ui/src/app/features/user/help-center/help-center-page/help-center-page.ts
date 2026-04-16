import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Assets} from "@core/generated/assets";
import {getHelpArticlesForTopicSlug, getPopularTopics, HELP_TOPICS} from '@core/data/help-topics.data';
import {AppSvgIconComponent} from '@vallift/ngl';

type TopicCard = {
  icon: string;
  title: string;
  slug: string;
  articleCount: number;
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

  readonly helpTopics = HELP_TOPICS;

  readonly topicCards: TopicCard[] = this.helpTopics.map((topic) => ({
    icon: topic.icon,
    title: topic.title,
    slug: topic.slug,
    articleCount: getHelpArticlesForTopicSlug(topic.slug).length,
  }));

  readonly popularTopics = getPopularTopics();

  getArticleCountLabel(count: number): string {
    return `${count} ${count === 1 ? 'article' : 'articles'}`;
  }

  navigateTo(slug: string): void {
    this.router.navigate(['/help', slug]);
  }
}

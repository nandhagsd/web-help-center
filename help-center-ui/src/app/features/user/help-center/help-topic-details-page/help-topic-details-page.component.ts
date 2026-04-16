import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SeoService } from '@core/services/seo.service';
import {
  getHelpArticlesForTopicSlug,
  getHelpTopicBySlug,
  HELP_TOPICS,
  HelpTopic,
} from '@core/data/help-topics.data';
import { HelpArticle } from '@core/data/help-articles/help-articles.model';
import { AppSvgIconComponent } from '@vallift/ngl';
import { Assets } from '@core/generated/assets';


@Component({
  selector: 'app-help-details-page',
  imports: [RouterLink, AppSvgIconComponent],
  templateUrl: './help-topic-details-page.component.html',
  styleUrl: './help-topic-details-page.component.css',
})
export class HelpTopicDetailsPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seoService = inject(SeoService);

  topic?: HelpTopic;
  topicArticles: HelpArticle[] = [];

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    const topic = getHelpTopicBySlug(slug);

    if (!topic) {
      this.router.navigateByUrl('/help');
      return;
    }

    this.topic = topic;
    this.topicArticles = getHelpArticlesForTopicSlug(topic.slug);

    this.seoService.update({
      title: topic.seoTitle,
      description: topic.seoDescription,
      keywords: topic.keywords,
      type: 'article',
      url: `https://www.smartdining.co/help/${topic.slug}`,
      imageUrl: 'https://www.smartdining.co/assets/images/seo/help-center-cover.webp',
    });
  }

  get relatedTopics(): HelpTopic[] {
    if (!this.topic) {
      return [];
    }

    return HELP_TOPICS.filter((item) => item.slug !== this.topic?.slug).slice(0, 3);
  }

  protected readonly Assets = Assets;
}

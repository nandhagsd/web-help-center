import {HelpArticle} from './help-articles.model';
import {ArticleSectionType} from '@core/models/articles/article-section-type.enum';
import { Assets } from '@core/generated/assets';

export const RESTAURANT_SETTINGS_ARTICLES: HelpArticle[] = [
  {
    slug: 'set-up-service-shifts',
    title: 'Set Up Service Shifts',
    summary: 'Create lunch, dinner, and special-event shift windows.',
    sections: [
      {
        id: 'shifts-intro',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Why shifts matter',
        paragraph: 'Service shifts define when guests can book and how capacity is controlled.',
      },
      {
        id: 'shifts-overview',
        type: ArticleSectionType.Paragraph,
        paragraph: 'Use separate shifts for lunch, dinner, and special events so each service has clear timing and capacity rules.',
      },
      {
        id: 'shifts-divider',
        type: ArticleSectionType.Divider
      },
      {
        id: 'shifts-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.dashboardScreenshotPng,
        imageAlt: 'Smart Dining app icon used as a placeholder for shift setup visual',
        caption: 'Tip: Review each shift card and verify start/end windows before publishing.',
      },
      {
        id: 'shifts-video',
        type: ArticleSectionType.VideoEmbed,
        heading: 'Video walkthrough',
        youtubeEmbedUrl: 'https://www.youtube.com/embed/LkEBfqDXVLQ',
      },
      {
        id: 'shifts-fields',
        type: ArticleSectionType.HeadingBulletedList,
        heading: 'Configure for each shift',
        items: [
          '**Start time**',
          '**End time**',
          '**Max reservations**',
        ],
      },
      {
        id: 'shifts-bullets-simple',
        type: ArticleSectionType.BulletedList,
        items: [
          'Keep a 10-15 minute prep buffer between shifts.',
          'Align turn times with table size and service style.',
          'Disable walk-in overlap during high-demand windows.',
        ],
      },
      {
        id: 'shifts-numbered-with-heading',
        type: ArticleSectionType.HeadingNumberedList,
        heading: 'Create a new shift',
        items: [
          'Open **Settings > Service Shifts**.',
          'Choose the service period and select operating days.',
          'Set duration, turn time, and reservation capacity.',
        ],
      },
      {
        id: 'shifts-numbered-simple',
        type: ArticleSectionType.NumberedList,
        items: [
          'Duplicate a shift for event days.',
          'Apply event-specific guest limits.',
          'Publish changes after final validation.',
        ],
      },
    ],
  },
  {
    slug: 'reservation-rule-basics',
    title: 'Reservation Rule Basics',
    summary: 'Control lead time, cancellation windows, and party-size thresholds.',
    seoDescription: 'Understand lead time, cancellation, and party-size reservation rules in Smart Dining.',
    sections: [
      {
        id: 'rules-intro',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Set guardrails for busy service',
        paragraph: 'Reservation rules protect operations during peak periods.',
      },
      {
        id: 'rules-baseline',
        type: ArticleSectionType.HeadingBulletedList,
        heading: 'Recommended baseline',
        items: [
          'Lead time: at least 30 minutes',
          'Cancellation window: 2 hours',
          'Large party threshold: 8+ guests',
        ],
      },
      {
        id: 'rules-review',
        type: ArticleSectionType.Paragraph,
        paragraph: 'Review no-show trends weekly and tune rules incrementally.',
      },
    ],
  },
];


import {HelpArticle} from './help-articles.model';
import {ArticleSectionType} from '@core/models/articles/article-section-type.enum';

export const GUEST_MANAGEMENT_ARTICLES: HelpArticle[] = [
  {
    slug: 'guest-history-overview',
    title: 'Guest History Overview',
    summary: 'Understand visit history, frequency, and last-seen details.',
    sections: [
      {
        id: 'history-intro',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Use timeline context before service',
        paragraph: 'The guest profile timeline helps teams personalize hospitality at check-in.',
      },
      {
        id: 'history-items',
        type: ArticleSectionType.BulletedList,
        items: [
          'Past reservations and outcomes',
          'Preferred table or seating area',
          'Cancellation and no-show patterns',
        ],
      },
      {
        id: 'history-tip',
        type: ArticleSectionType.Paragraph,
        paragraph: 'Review timeline patterns before peak hours to prepare host notes.',
      },
    ],
  },
  {
    slug: 'using-guest-preferences',
    title: 'Using Guest Preferences Effectively',
    summary: 'Capture and apply preferences without over-collecting data.',
    seoTitle: 'Using Guest Preferences Effectively | Smart Dining Help Center',
    seoDescription: 'Capture and apply guest preferences in Smart Dining to improve hospitality experiences.',
    sections: [
      {
        id: 'preferences-intro',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Keep preference notes actionable',
        paragraph: 'Preference notes should stay short, practical, and service-focused.',
      },
      {
        id: 'preferences-examples',
        type: ArticleSectionType.HeadingBulletedList,
        heading: 'Good examples',
        items: [
          '"Prefers quiet corner"',
          '"Allergy: peanuts"',
          '"Birthday month: October"',
        ],
      },
      {
        id: 'preferences-warning',
        type: ArticleSectionType.Paragraph,
        paragraph: 'Avoid storing sensitive personal details unrelated to hospitality workflows.',
      },
    ],
  },
];


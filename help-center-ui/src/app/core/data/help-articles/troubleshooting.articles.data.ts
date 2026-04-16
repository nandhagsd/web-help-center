import {HelpArticle} from './help-articles.model';
import {ArticleSectionType} from '@core/models/articles/article-section-type.enum';

export const TROUBLESHOOTING_ARTICLES: HelpArticle[] = [
  {
    slug: 'booking-not-visible',
    title: 'Booking Not Visible in Shift',
    summary: 'Diagnose why confirmed bookings are not showing in host view.',
    sections: [
      {
        id: 'missing-booking-intro',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Check this sequence first',
        paragraph: 'If a booking is missing, verify each condition in order.',
      },
      {
        id: 'missing-booking-steps',
        type: ArticleSectionType.NumberedList,
        items: [
          'Correct booking date and timezone',
          'Shift window includes booking time',
          'Table capacity is not below guest count',
        ],
      },
      {
        id: 'missing-booking-note',
        type: ArticleSectionType.Paragraph,
        paragraph: 'Most visibility issues are caused by shift mismatch after rule edits.',
      },
    ],
  },
  {
    slug: 'sync-failures-and-retry',
    title: 'Sync Failures and Retry Process',
    summary: 'Recover from temporary sync failures with connected systems.',
    seoTitle: 'Sync Failures and Retry Process | Smart Dining Help Center',
    keywords: ['sync failure', 'retry queue', 'integration outage'],
    sections: [
      {
        id: 'sync-intro',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Retry queue behavior',
        paragraph: 'When an integration sync fails, Smart Dining queues retries automatically.',
      },
      {
        id: 'sync-checks',
        type: ArticleSectionType.HeadingBulletedList,
        heading: 'Open **Integrations > Sync Log** and check',
        items: [
          'Error category (auth, timeout, validation)',
          'Last retry timestamp',
          'Pending queue count',
        ],
      },
      {
        id: 'sync-divider',
        type: ArticleSectionType.Divider,
      },
      {
        id: 'sync-fix',
        type: ArticleSectionType.Paragraph,
        paragraph: 'Resolve root cause first, then trigger a manual retry from the affected batch.',
      },
    ],
  },
];


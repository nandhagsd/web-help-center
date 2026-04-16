import {HelpArticle} from './help-articles.model';
import {ArticleSectionType} from '@core/models/articles/article-section-type.enum';

export const INTEGRATIONS_ARTICLES: HelpArticle[] = [
  {
    slug: 'connect-toast',
    title: 'Connect Toast',
    summary: 'Link Toast POS with Smart Dining in a few guided steps.',
    sections: [
      {
        id: 'toast-intro',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Connection steps',
        paragraph: 'Use the guided flow to link Toast POS with Smart Dining.',
      },
      {
        id: 'toast-steps',
        type: ArticleSectionType.NumberedList,
        items: [
          'Open **Integrations > Toast**.',
          'Authorize with your Toast account.',
          'Select location mapping and sync preferences.',
        ],
      },
      {
        id: 'toast-validate',
        type: ArticleSectionType.Paragraph,
        paragraph: 'Run a test sync and verify a sample reservation appears in logs.',
      },
    ],
  },
  {
    slug: 'connect-square',
    title: 'Connect Square',
    summary: 'Set up Square integration and validate sync behavior.',
    seoTitle: 'Connect Square | Smart Dining Help Center',
    keywords: ['square pos', 'integration setup', 'sync validation'],
    sections: [
      {
        id: 'square-intro',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Square follows the same pattern',
        paragraph: 'After authorization, validate the integration behavior before going live.',
      },
      {
        id: 'square-validate',
        type: ArticleSectionType.HeadingBulletedList,
        heading: 'Validate these items',
        items: [
          'Location mapping',
          'Menu/service alignment',
          'Retry behavior for webhook delays',
        ],
      },
      {
        id: 'square-ownership',
        type: ArticleSectionType.Paragraph,
        paragraph: 'Document who owns integration credentials for future maintenance.',
      },
    ],
  },
];


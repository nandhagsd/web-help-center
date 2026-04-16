import {HelpArticle} from './help-articles.model';
import {ArticleSectionType} from '@core/models/articles/article-section-type.enum';

export const PRIVACY_ACCESS_ARTICLES: HelpArticle[] = [
  {
    slug: 'staff-role-permissions',
    title: 'Staff Role Permissions',
    summary: 'Assign host, manager, and admin access safely.',
    sections: [
      {
        id: 'roles-intro',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Use role-based access',
        paragraph: 'Role-based access limits sensitive actions and keeps daily workflows controlled.',
      },
      {
        id: 'roles-definitions',
        type: ArticleSectionType.BulletedList,
        items: [
          '**Host**: manage seating and guest check-ins',
          '**Manager**: edit shifts and policies',
          '**Admin**: billing, integrations, and user management',
        ],
      },
      {
        id: 'roles-warning',
        type: ArticleSectionType.Paragraph,
        paragraph: 'Avoid sharing admin credentials across multiple staff members.',
      },
    ],
  },
  {
    slug: 'protect-guest-data',
    title: 'Protect Guest Data',
    summary: 'Best practices for guest notes, preferences, and PII handling.',
    seoDescription: 'Apply Smart Dining best practices for secure guest data handling and access control.',
    sections: [
      {
        id: 'privacy-intro',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Keep data handling strict',
        paragraph: 'Guest profiles may contain personal data, so use a minimum-data approach.',
      },
      {
        id: 'privacy-rules',
        type: ArticleSectionType.NumberedList,
        items: [
          'Store only operationally required notes.',
          'Remove outdated sensitive notes regularly.',
          'Restrict export permissions to trusted roles.',
        ],
      },
      {
        id: 'privacy-outcome',
        type: ArticleSectionType.Paragraph,
        paragraph: 'Data hygiene improves both compliance and service quality.',
      },
    ],
  },
];


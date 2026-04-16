import { Assets } from '@core/generated/assets';
import { getHelpArticleBySlugs, getHelpArticlesByTopicSlug } from './help-articles';
import { HelpArticle, ResolvedHelpArticleSeo } from './help-articles/help-articles.model';

export type HelpTopic = {
  icon: string;
  title: string;
  description: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords?: string[];
};

export const HELP_TOPICS: HelpTopic[] = [
  {
    icon: Assets.icons.rocketOutlineSvg,
    title: 'Getting Started',
    description:
      'Set up your restaurant, configure floors, tables, and start managing reservations smoothly.',
    slug: 'getting-started',
    seoTitle: 'Getting Started | Smart Dining Help Center',
    seoDescription:
      'Learn how to set up Smart Dining, configure restaurant basics, and begin managing reservations efficiently.',
    keywords: ['smart dining', 'getting started', 'restaurant setup', 'reservations'],
  },
  {
    icon: Assets.icons.cogOutlineSvg,
    title: 'Restaurant Settings',
    description:
      'Manage shifts, reservation rules, floor setup, and operational preferences for your restaurant.',
    slug: 'restaurant-settings',
    seoTitle: 'Restaurant Settings | Smart Dining Help Center',
    seoDescription:
      'Manage Smart Dining restaurant settings including shifts, reservation rules, floors, and operational preferences.',
    keywords: ['restaurant settings', 'smart dining settings', 'shifts', 'reservation rules'],
  },
  {
    icon: Assets.icons.alertCircleOutlineSvg,
    title: 'Troubleshooting',
    description: 'Resolve common issues related to bookings, sync operations, and system behavior.',
    slug: 'troubleshooting',
    seoTitle: 'Troubleshooting | Smart Dining Help Center',
    seoDescription:
      'Resolve common Smart Dining issues including booking errors, sync failures, and operational troubleshooting.',
    keywords: ['troubleshooting', 'booking errors', 'sync issues', 'smart dining help'],
  },
  {
    icon: Assets.icons.shieldOutlineSvg,
    title: 'Privacy & Access',
    description:
      'Control permissions, staff access, and protect important restaurant and guest data.',
    slug: 'privacy-access',
    seoTitle: 'Privacy & Access | Smart Dining Help Center',
    seoDescription:
      'Understand Smart Dining privacy controls, staff permissions, and secure access management.',
    keywords: ['privacy', 'access', 'permissions', 'staff access'],
  },
  {
    icon: Assets.icons.alertCircleOutlineSvg,
    title: 'Guest Management',
    description:
      'View guest history, preferences, and relationship data to deliver better hospitality.',
    slug: 'guest-management',
    seoTitle: 'Guest Management | Smart Dining Help Center',
    seoDescription:
      'Learn how Smart Dining supports guest history, guest preferences, and personalized guest management workflows.',
    keywords: ['guest management', 'guest history', 'guest preferences', 'hospitality crm'],
  },
  {
    icon: Assets.icons.linkSvg,
    title: 'Integrations',
    description:
      'Connect Smart Dining with systems like Toast, Square, and other restaurant tools.',
    slug: 'integrations',
    seoTitle: 'Integrations | Smart Dining Help Center',
    seoDescription:
      'Connect Smart Dining with Toast, Square, and other restaurant integrations for smooth operations.',
    keywords: ['toast integration', 'square integration', 'pos integration', 'smart dining'],
  },
];

export type PopularTopic = {
  label: string;
  slug: string;
};

export function getHelpTopicBySlug(slug: string | null | undefined): HelpTopic | undefined {
  if (!slug) {
    return undefined;
  }

  return HELP_TOPICS.find((item) => item.slug === slug);
}

export function getPopularTopics(): PopularTopic[] {
  const popularSlugs = ['getting-started', 'guest-management', 'integrations'];

  return popularSlugs
    .map((slug) => {
      const topic = HELP_TOPICS.find((item) => item.slug === slug);

      if (!topic) {
        return null;
      }

      return {
        label: topic.title,
        slug: topic.slug,
      };
    })
    .filter((item): item is PopularTopic => !!item);
}

export function getHelpArticlesForTopicSlug(topicSlug: string | null | undefined): HelpArticle[] {
  if (!topicSlug) {
    return [];
  }

  return getHelpArticlesByTopicSlug(topicSlug);
}

export function getHelpArticleForTopic(
  topicSlug: string | null | undefined,
  articleSlug: string | null | undefined,
): HelpArticle | undefined {
  if (!topicSlug || !articleSlug) {
    return undefined;
  }

  return getHelpArticleBySlugs(topicSlug, articleSlug);
}

export function resolveHelpArticleSeo(
  topic: HelpTopic,
  article: HelpArticle,
): ResolvedHelpArticleSeo {
  return {
    title: article.seoTitle ?? topic.seoTitle,
    description: article.seoDescription ?? topic.seoDescription,
    keywords: article.keywords ?? topic.keywords,
  };
}

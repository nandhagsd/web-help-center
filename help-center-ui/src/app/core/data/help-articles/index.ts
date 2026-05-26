import {HelpArticle} from './help-articles.model';
import {GETTING_STARTED_ARTICLES} from './getting-started.articles.data';
import {GUEST_MANAGEMENT_ARTICLES} from './guest-management.articles.data';
import {INTEGRATIONS_ARTICLES} from './integrations.articles.data';
import {PRIVACY_ACCESS_ARTICLES} from './privacy-access.articles.data';
import {RESTAURANT_SETTINGS_ARTICLES} from './restaurant-settings.articles.data';
import {TROUBLESHOOTING_ARTICLES} from './troubleshooting.articles.data';
import { RESTAURANT_SET_UP_ARTICLES } from '@core/data/help-articles/restaurant-set-up.data';
import { MENU_SETTINGS_ARTICLES } from '@core/data/help-articles/menu-settings-articles.data';
import { FLOOR_SETTINGS_ARTICLES } from '@core/data/help-articles/floor-settings-articles.data';

const HELP_ARTICLES_BY_TOPIC_SLUG: Record<string, HelpArticle[]> = {
  'restaurant-set-up': RESTAURANT_SET_UP_ARTICLES,
  'menu-settings': MENU_SETTINGS_ARTICLES,
  'floor-table-settings': FLOOR_SETTINGS_ARTICLES,
  'getting-started': GETTING_STARTED_ARTICLES,
  'restaurant-settings': RESTAURANT_SETTINGS_ARTICLES,
  troubleshooting: TROUBLESHOOTING_ARTICLES,
  'privacy-access': PRIVACY_ACCESS_ARTICLES,
  'guest-management': GUEST_MANAGEMENT_ARTICLES,
  integrations: INTEGRATIONS_ARTICLES,
};

export function getHelpArticlesByTopicSlug(topicSlug: string): HelpArticle[] {
  return HELP_ARTICLES_BY_TOPIC_SLUG[topicSlug] ?? [];
}

export function getHelpArticleBySlugs(
  topicSlug: string,
  articleSlug: string,
): HelpArticle | undefined {
  return getHelpArticlesByTopicSlug(topicSlug).find((item) => item.slug === articleSlug);
}


import { RenderMode, ServerRoute } from '@angular/ssr';
import { HELP_TOPICS, getHelpArticlesForTopicSlug } from '@core/data/help-topics.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'help/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return HELP_TOPICS.map((topic) => ({
        slug: topic.slug
      }));
    }
  },
  {
    path: 'help/:topicSlug/:articleSlug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return HELP_TOPICS.flatMap((topic) =>
        getHelpArticlesForTopicSlug(topic.slug).map((article) => ({
          topicSlug: topic.slug,
          articleSlug: article.slug
        }))
      );
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

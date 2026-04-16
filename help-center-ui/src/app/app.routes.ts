import {Routes} from '@angular/router';
import {HelpCenterLayout} from './features/user/help-center/help-center-layout/help-center-layout';

export const routes: Routes = [
  {
    path: '',
    component: HelpCenterLayout,
    children: [
      {path: '', redirectTo: 'help', pathMatch: 'full'},
      {path: 'articles', redirectTo: 'help', pathMatch: 'full'},
      {
        path: 'help',
        loadComponent: () =>
          import('./features/user/help-center/help-center-page/help-center-page').then(
            (m) => m.HelpCenterPage,
          ),
      },
      {
        path: 'help/:topicSlug/:articleSlug',
        loadComponent: () =>
          import('./features/user/help-center/article-viewer-page/article-viewer-page.component').then(
            (m) => m.ArticleViewerPage,
          ),
      },
      {
        path: 'help/:slug',
        loadComponent: () =>
          import('./features/user/help-center/help-topic-details-page/help-topic-details-page.component').then(
            (m) => m.HelpTopicDetailsPage,
          ),
      },
    ],
  },
];

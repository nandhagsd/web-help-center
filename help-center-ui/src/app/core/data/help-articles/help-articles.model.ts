import {ArticleSection} from '@core/models/articles/sections.model';

export type HelpArticle = {
  slug: string;
  title: string;
  summary: string;
  sections: ArticleSection[];
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
};

export type ResolvedHelpArticleSeo = {
  title: string;
  description: string;
  keywords?: string[];
};


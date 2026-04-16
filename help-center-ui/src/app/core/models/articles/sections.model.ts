import {ArticleSectionType} from './article-section-type.enum';

export interface ArticleSectionBase {
  id: string;
  type: ArticleSectionType;
}

export interface ParagraphSection extends ArticleSectionBase {
  type: ArticleSectionType.Paragraph;
  paragraph: string; // markdown-enabled
}

export interface HeadingParagraphSection extends ArticleSectionBase {
  type: ArticleSectionType.HeadingParagraph;
  heading: string;
  paragraph: string; // markdown-enabled
}

export interface DividerSection extends ArticleSectionBase {
  type: ArticleSectionType.Divider;
}

export interface ImageSection extends ArticleSectionBase {
  type: ArticleSectionType.Image;
  imageUrl: string;
  imageAlt: string;
  caption?: string; // markdown-enabled
}

export interface VideoEmbedSection extends ArticleSectionBase {
  type: ArticleSectionType.VideoEmbed;
  heading?: string;
  youtubeEmbedUrl: string;
}

export interface HeadingBulletedListSection extends ArticleSectionBase {
  type: ArticleSectionType.HeadingBulletedList;
  heading: string;
  items: string[]; // markdown-enabled
}

export interface BulletedListSection extends ArticleSectionBase {
  type: ArticleSectionType.BulletedList;
  items: string[]; // markdown-enabled
}

export interface HeadingNumberedListSection extends ArticleSectionBase {
  type: ArticleSectionType.HeadingNumberedList;
  heading: string;
  items: string[]; // markdown-enabled
}

export interface NumberedListSection extends ArticleSectionBase {
  type: ArticleSectionType.NumberedList;
  items: string[]; // markdown-enabled
}

export type ArticleSection =
  | HeadingParagraphSection
  | ParagraphSection
  | DividerSection
  | ImageSection
  | VideoEmbedSection
  | HeadingBulletedListSection
  | BulletedListSection
  | HeadingNumberedListSection
  | NumberedListSection;

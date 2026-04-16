import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export type SeoPayload = {
  title: string;
  description: string;
  keywords?: string[];
  url?: string;
  imageUrl?: string;
  type?: 'website' | 'article';
  robots?: string;
};

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  update(payload: SeoPayload): void {
    this.title.setTitle(payload.title);

    this.meta.updateTag({
      name: 'description',
      content: payload.description,
    });

    this.meta.updateTag({
      name: 'robots',
      content: payload.robots ?? 'index, follow',
    });

    if (payload.keywords?.length) {
      this.meta.updateTag({
        name: 'keywords',
        content: payload.keywords.join(', '),
      });
    }

    this.meta.updateTag({
      property: 'og:title',
      content: payload.title,
    });

    this.meta.updateTag({
      property: 'og:description',
      content: payload.description,
    });

    this.meta.updateTag({
      property: 'og:type',
      content: payload.type ?? 'website',
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: payload.title,
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: payload.description,
    });

    if (payload.url) {
      this.meta.updateTag({
        property: 'og:url',
        content: payload.url,
      });

      this.updateCanonicalUrl(payload.url);
    }

    if (payload.imageUrl) {
      this.meta.updateTag({
        property: 'og:image',
        content: payload.imageUrl,
      });

      this.meta.updateTag({
        name: 'twitter:image',
        content: payload.imageUrl,
      });
    }
  }

  private updateCanonicalUrl(url: string): void {
    let linkElement = this.document.head.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;

    if (!linkElement) {
      linkElement = this.document.createElement('link');
      linkElement.setAttribute('rel', 'canonical');
      this.document.head.appendChild(linkElement);
    }

    linkElement.setAttribute('href', url);
  }
}

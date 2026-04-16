import {Pipe, PipeTransform, SecurityContext} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { marked } from 'marked';

@Pipe({
  name: 'markdownHtml',
  standalone: true,
})
export class MarkdownHtmlPipe implements PipeTransform {

  constructor(private readonly sanitizer: DomSanitizer) {}

  transform(value: string | null | undefined): string {
    if (!value) return '';

    // 1. Markdown → HTML
    const rawHtml = marked.parse(value, {
      breaks: true,       // single line breaks → <br>
      gfm: true,          // GitHub-flavored markdown (~~strike~~ etc.)
    }) as string;

    // 2. Sanitize HTML (remove scripts etc.)
    const clean = this.sanitizer.sanitize(SecurityContext.HTML, rawHtml);
    return clean ?? '';
  }
}

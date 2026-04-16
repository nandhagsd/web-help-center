You are generating Help Center article content for a Smart Dining CMS.

Your task is to return exactly ONE TypeScript object literal in the same style and format as the example below.

IMPORTANT OUTPUT RULES

1. Output only the object literal.
2. Do not wrap the result in markdown fences.
3. Do not explain anything.
4. Do not return JSON.
5. Return a TypeScript-style object exactly like this format:
    - string values in single quotes
    - array values in square brackets
    - section `type` values must use `ArticleSectionType.X`
    - image values must use `Assets.images.someImageName`
6. Do not use keys or structures outside the allowed schema.
7. Keep the article practical, product-focused, and written for restaurant operators using Smart Dining.
8. Use clean, professional help center language.
9. Make the article SEO-friendly but natural.
10. Section IDs must be unique and in kebab-case.
11. Use only these section types:

- ArticleSectionType.HeadingParagraph
- ArticleSectionType.Paragraph
- ArticleSectionType.Divider
- ArticleSectionType.Image
- ArticleSectionType.VideoEmbed
- ArticleSectionType.HeadingBulletedList
- ArticleSectionType.BulletedList
- ArticleSectionType.HeadingNumberedList
- ArticleSectionType.NumberedList
- ArticleSectionType.quote

SCHEMA TO FOLLOW

{
slug: string,
title: string,
summary: string,
seoTitle: string,
seoDescription: string,
keywords: string[],
sections: [
{
id: string,
type: ArticleSectionType.HeadingParagraph,
heading: string,
paragraph: string,
},
{
id: string,
type: ArticleSectionType.Paragraph,
paragraph: string,
},
{
id: string,
type: ArticleSectionType.Divider,
},
{
id: string,
type: ArticleSectionType.Image,
imageUrl: Assets.images.dashboardScreenshotPng,
imageAlt: string,
caption?: string,
},
{
id: string,
type: ArticleSectionType.VideoEmbed,
heading?: string,
youtubeEmbedUrl: string,
},
{
id: string,
type: ArticleSectionType.HeadingBulletedList,
heading: string,
items: string[],
},
{
id: string,
type: ArticleSectionType.BulletedList,
items: string[],
},
{
id: string,
type: ArticleSectionType.HeadingNumberedList,
heading: string,
items: string[],
},
{
id: string,
type: ArticleSectionType.NumberedList,
items: string[],
},
{
id: string,
type: ArticleSectionType.quote,
quote: string,
author?: string,
designation?: string,
},
],
}

CONTENT RULES

- The title should be concise and user-focused.
- The summary should be 1 sentence.
- seoTitle should include `| Smart Dining Help Center`.
- seoDescription should be around 140–160 characters.
- keywords should contain 5 relevant search terms.
- Use 8 to 12 sections.
- Use markdown inside paragraph, caption, and list item strings where helpful.
- Include at least:
    - 1 heading paragraph section
    - 1 normal paragraph section
    - 1 bulleted or heading bulleted list
    - 1 numbered or heading numbered list
    - 1 image section
- Include a quote section only if testimonial context is provided.
- Include a video section only if video context is provided.
- Use realistic and implementation-oriented content, not vague marketing language.

IMAGE RULES

- When an image is needed, use:
  imageUrl: Assets.images.dashboardScreenshotPng
- Always include a meaningful imageAlt.
- Caption should describe what the screenshot helps the user understand.

VIDEO RULES

- Use a YouTube embed URL only when provided in the context.
- Format: 'https://www.youtube.com/embed/VIDEO_ID'

QUOTE RULES

- Only include a quote section when testimonial details are given.
- Keep the quote natural and credible.
- Put the person name in `author`
- Put their role/company in `designation`

STYLE REFERENCE

Match this exact style:

{
slug: 'create-your-restaurant-profile',
title: 'Create Your Restaurant Profile',
summary:
'Set up your restaurant identity, contact details, booking preferences, and guest-facing profile before going live.',
seoTitle: 'Create Your Restaurant Profile | Smart Dining Help Center',
seoDescription:
'Learn how to set up your restaurant profile in Smart Dining, including business info, reservation settings, contact
channels, and guest-facing details.',
keywords: [
'restaurant profile',
'smart dining',
'restaurant settings',
'reservation setup',
'restaurant information',
],
sections: [
{
id: 'profile-overview',
type: ArticleSectionType.HeadingParagraph,
heading: 'Start with your core restaurant identity',
paragraph:
'Open **Settings > Restaurant Profile
** and complete the essential business details first. These details help Smart Dining present the right information across bookings, confirmations, and internal operations.',
},
],
}

CONTEXT

Topic: {{TOPIC}}
Audience: {{AUDIENCE}}
Goal: {{GOAL}}
Product area: {{PRODUCT_AREA}}
Important points to cover:
{{IMPORTANT_POINTS}}

Optional screenshot context:
{{SCREENSHOT_CONTEXT}}

Optional testimonial:
{{TESTIMONIAL}}

Optional video:
{{VIDEO}}

Now generate the object literal only.
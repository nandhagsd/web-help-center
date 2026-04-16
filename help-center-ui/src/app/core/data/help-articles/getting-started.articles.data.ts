import { HelpArticle } from './help-articles.model';
import { ArticleSectionType } from '@core/models/articles/article-section-type.enum';
import { Assets } from '@core/generated/assets';

export const GETTING_STARTED_ARTICLES: HelpArticle[] = [
  {
    slug: 'create-your-restaurant-profile',
    title: 'Create Your Restaurant Profile',
    summary:
      'Set up your restaurant identity, contact details, booking preferences, and guest-facing profile before going live.',
    seoTitle: 'Create Your Restaurant Profile | Smart Dining Help Center',
    seoDescription:
      'Learn how to set up your restaurant profile in Smart Dining, including business info, reservation settings, contact channels, and guest-facing details.',
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
          'Open **Settings > Restaurant Profile** and complete the essential business details first. These details help Smart Dining present the right information across bookings, confirmations, and internal operations.',
      },
      {
        id: 'profile-basic-paragraph',
        type: ArticleSectionType.Paragraph,
        paragraph:
          'Your restaurant profile is the foundation for reservations, guest communication, and reporting. Before enabling live reservations, make sure your business name, timezone, operating schedule, and contact channels are accurate.',
      },
      {
        id: 'profile-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.dashboardScreenshotPng,
        imageAlt: 'Restaurant profile settings page in Smart Dining',
        caption:
          'Use the restaurant profile screen to manage identity, reservation settings, and guest-facing business information.',
      },
      {
        id: 'profile-testimonial',
        type: ArticleSectionType.quote,
        quote:
          'Smart Dining took the pressure off reservations and waitlists, letting our team focus on what matters most — the guest experience.',
        author: 'Gerard Boyle',
        designation: 'Owner · DC Oakes Brewhouse & Eatery',
      },
      {
        id: 'profile-checklist',
        type: ArticleSectionType.BulletedList,
        items: [
          '**Restaurant name** exactly as guests should see it',
          '**Address and service location** used for maps and confirmations',
          '**Primary booking phone number** for host team follow-up',
          '**Reservation email address** for notifications and support',
          '**Timezone** to ensure service slots appear correctly',
        ],
      },
      {
        id: 'profile-before-publish',
        type: ArticleSectionType.HeadingBulletedList,
        heading: 'Before publishing your profile',
        items: [
          'Confirm your booking phone number and email are active and monitored.',
          'Check that your timezone matches the restaurant’s physical location.',
          'Review service days and cut-off timings for reservation accuracy.',
          'Make sure guest-facing text reflects your brand tone and service expectations.',
        ],
      },
      {
        id: 'profile-setup-sequence',
        type: ArticleSectionType.HeadingNumberedList,
        heading: 'Recommended setup sequence',
        items: [
          'Enter restaurant identity details such as name, address, and contact information.',
          'Configure reservation preferences such as booking window, turn time, and confirmation flow.',
          'Add guest-facing content like cover image, description, and booking notes.',
          'Review all details from the guest booking experience before going live.',
        ],
      },
      {
        id: 'profile-review-steps',
        type: ArticleSectionType.NumberedList,
        items: [
          'Save the profile.',
          'Open the booking flow as a guest.',
          'Check confirmation messages and branding.',
          'Update anything unclear before enabling reservations.',
        ],
      },
      {
        id: 'profile-divider',
        type: ArticleSectionType.Divider,
      },
      {
        id: 'profile-branding-heading',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Add guest-facing branding details',
        paragraph:
          'Your profile is not only for internal setup. It also influences how your restaurant appears in confirmations, booking flows, and communication touchpoints. Use clean branding assets and concise descriptions to build trust.',
      },
      {
        id: 'profile-video',
        type: ArticleSectionType.VideoEmbed,
        heading: 'Watch: setting up your restaurant profile',
        youtubeEmbedUrl: 'https://www.youtube.com/embed/LkEBfqDXVLQ',
      },
      {
        id: 'profile-final-note',
        type: ArticleSectionType.Paragraph,
        paragraph:
          'Tip: Revisit your restaurant profile whenever service hours, booking policies, or contact channels change. Keeping this information current prevents avoidable guest confusion.',
      },
    ],
  },
  {
    slug: 'configure-floors-and-tables',
    title: 'Configure Floors and Tables',
    summary:
      'Create your floor plan, define table capacities, and improve guest placement accuracy during service.',
    seoTitle: 'Configure Floors and Tables | Smart Dining Help Center',
    seoDescription:
      'Learn how to set up floors, sections, tables, and capacity rules in Smart Dining to improve guest seating and reservation placement.',
    keywords: [
      'floor setup',
      'table setup',
      'restaurant layout',
      'capacity rules',
      'smart dining tables',
    ],
    sections: [
      {
        id: 'floors-intro',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Model your real dining room layout',
        paragraph:
          'Use **Floor Setup** to reflect how your venue actually operates. A clear and accurate layout helps hosts seat guests faster, reduce conflicts, and maintain better service flow during peak times.',
      },
      {
        id: 'floors-importance',
        type: ArticleSectionType.Paragraph,
        paragraph:
          'Each table configuration directly affects reservation availability, host decisions, and operational efficiency. Even small errors in seating limits or unavailable tables can create friction during service.',
      },
      {
        id: 'floors-what-to-define',
        type: ArticleSectionType.HeadingBulletedList,
        heading: 'Define these details for each floor',
        items: [
          '**Floor name** such as Main Hall, Patio, Rooftop, or Private Dining',
          '**Table labels** that match what staff use on-site',
          '**Minimum and maximum covers** for each table',
          '**Special seating rules** such as mergeable tables or restricted tables',
          '**Availability constraints** for maintenance zones or blocked sections',
        ],
      },
      {
        id: 'floors-general-list',
        type: ArticleSectionType.BulletedList,
        items: [
          'Keep naming consistent between Smart Dining and staff communication.',
          'Use realistic table capacities instead of theoretical maximums.',
          'Review merged-table combinations for larger parties.',
          'Disable out-of-service tables instead of deleting historical setup unnecessarily.',
        ],
      },
      {
        id: 'floors-steps',
        type: ArticleSectionType.HeadingNumberedList,
        heading: 'Setup sequence',
        items: [
          'Create each floor or seating area in the same structure your team uses operationally.',
          'Add tables and assign guest capacity rules.',
          'Mark special conditions such as blocked, mergeable, or limited-use tables.',
          'Save and test the reservation flow using common party sizes.',
        ],
      },
      {
        id: 'floors-review-order',
        type: ArticleSectionType.NumberedList,
        items: [
          'Create a sample reservation for 2 guests.',
          'Create another sample reservation for a larger party.',
          'Check whether Smart Dining suggests the expected tables.',
          'Adjust turn time or capacity rules where needed.',
        ],
      },
      {
        id: 'floors-image',
        type: ArticleSectionType.Image,
        imageUrl: 'assets/images/help-center/getting-started/floors-and-tables.webp',
        imageAlt: 'Floor and table configuration screen in Smart Dining',
        caption:
          'A well-structured table map improves host decisions, reservation placement, and service readiness.',
      },
      {
        id: 'floors-divider',
        type: ArticleSectionType.Divider,
      },
      {
        id: 'floors-capacity-heading',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Use realistic capacity rules',
        paragraph:
          'Capacity should reflect how the table performs in real service, not only its physical size. This is especially important for tables that feel crowded at peak times or require flexibility for larger groups.',
      },
      {
        id: 'floors-video',
        type: ArticleSectionType.VideoEmbed,
        heading: 'Walkthrough: floor setup basics',
        youtubeEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: 'floors-impact',
        type: ArticleSectionType.Paragraph,
        paragraph:
          'Accurate floor mapping helps your team reduce manual adjustments, speed up seating, and keep guest flow smoother throughout the shift.',
      },
    ],
  },
];

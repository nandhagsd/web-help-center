import { HelpArticle } from '@core/data/help-articles/help-articles.model';
import { ArticleSectionType } from '@core/models/articles/article-section-type.enum';
import { Assets } from '@core/generated/assets';

export const RESTAURANT_SET_UP: HelpArticle[] = [
  {
    slug: 'create-smartdining-account',
    title: 'Create Your Smart Dining Account',
    summary:
      'Select a plan and complete the onboarding steps to set up your owner and restaurant account.',
    seoTitle: 'Smart Dining Account Setup & Restaurant Subscription | Smart Dining Help Center',
    seoDescription:
      'Learn how to choose a Smart Dining subscription plan and complete the onboarding process, including business details, location setup, and owner account creation.',
    keywords: [
      'account creation',
      'smart dining',
      'restaurant settings',
      'reservation setup',
      'restaurant information',
    ],
    sections: [
      {
        id: 'subscription-overview',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Choose a subscription plan',
        paragraph:
          'From the Smart Dining homepage, click **Pricing** in the top navigation menu. Compare available plans and click **Get Started** to begin onboarding.',
      },
      {
        id: 'subscription-homepage-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.homeScreenshotPng,
        imageAlt: 'Smart Dining homepage with pricing navigation',
      },
      {
        id: 'subscription-plan-checklist',
        type: ArticleSectionType.BulletedList,
        items: [
          '**Compare available plans**',
          '**Choose monthly or yearly billing**',
          '**Review included features**',
          '**Click Get Started** to begin setup',
          '**Contact Sales** for multi-location or enterprise support',
        ],
      },
      {
        id: 'subscription-pricing-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.pricingScreenshotPng,
        imageAlt: 'Smart Dining subscription pricing plans',
        caption: 'Select a subscription plan to start the onboarding process.',
      },
      {
        id: 'subscription-business-setup',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Configure restaurant details',
        paragraph:
          'Complete the onboarding form with your restaurant information, business contact details, address, timezone, and POS system information if applicable.',
      },
      {
        id: 'subscription-onboarding-sequence',
        type: ArticleSectionType.NumberedList,
        items: [
          'Enter your business email',
          'Specify the number of locations',
          'Select your current POS system (if exist)',
          'Enter your company name',
        ],
      },
      {
        id: 'subscription-business-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.signUpBasicDetailsScreenshotPng,
        imageAlt: 'Restaurant business information setup form',
      },
      {
        id: 'subscription-location-list',
        type: ArticleSectionType.NumberedList,
        items: [
          'Restaurant name and business details',
          'Business address and location information',
          'Timezone settings for accurate reservations and notifications',
          'Business contact information',
        ],
      },
      {
        id: 'subscription-location-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.signUpRestaurantLocationScreenshotPng,
        imageAlt: 'Restaurant location and timezone setup form',
      },
      {
        id: 'subscription-owner-account',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Create the owner account',
        paragraph:
          'Create the primary owner account to access the Smart Dining dashboard and manage your restaurant.',
      },
      {
        id: 'subscription-owner-checklist',
        type: ArticleSectionType.NumberedList,
        items: [
          'Owner or administrator name',
          'Business email address',
          'Secure password',
          'Phone number',
          'Accept the Terms of Use and Privacy Policy',
          'Submit the onboarding form',
        ],
      },
      {
        id: 'subscription-owner-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.signUpOwnerDetailsScreenshotPng,
        imageAlt: 'Restaurant owner account creation form',
      },
    ],
  },
  {
    slug: 'create-floor-layout',
    title: 'Create Floors and Tables',
    summary:
      'Learn how to create restaurant floor plans, configure floor settings, and arrange tables and dividers using the floor layout designer.',
    seoTitle: 'Create Restaurant Floor Layouts & Table Plans | Smart Dining Help Center',
    seoDescription:
      'Learn how to create and manage restaurant floor layouts in Smart Dining, including floor creation, table arrangement, walls, dividers, and layout customization.',
    keywords: [
      'floor layouts',
      'restaurant tables',
      'table management',
      'floor plan designer',
      'restaurant seating',
      'smart dining floor setup',
    ],
    sections: [
      {
        id: 'floor-layout-overview',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Access the floor layout designer',
        paragraph:
          'Navigate to **Settings > Floors & Tables** from the left sidebar menu to access the floor layout management page. This section allows you to create restaurant floor plans, manage tables, and customize seating arrangements.',
      },
      {
        id: 'floor-layout-overview-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.floorLayoutScreenshotPng,
        imageAlt: 'Smart Dining floor layout management page',
      },
      {
        id: 'floor-layout-features-list',
        type: ArticleSectionType.BulletedList,
        items: [
          '**Create multiple floor layouts** for different dining areas',
          '**Add square, rectangle, and round tables**',
          '**Configure table capacities** for seating management',
          '**Add walls and dividers** to organize sections',
          '**Align, distribute, rotate, and clone tables** using layout tools',
        ],
      },
      {
        id: 'create-new-floor',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Create a new floor',
        paragraph:
          'Click **New Floor** at the top of the page to create a new restaurant floor layout. Enter the floor name, select the floor type, and configure the layout canvas size before saving.',
      },
      {
        id: 'create-floor-checklist',
        type: ArticleSectionType.NumberedList,
        items: [
          'Enter the floor name for the dining area',
          'Select the floor type from available options',
          'Configure floor width and height for the layout canvas',
          'Save the floor configuration to start designing',
        ],
      },
      {
        id: 'create-floor-modal-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.createFloorScreenshotPng,
        imageAlt: 'Create floor modal with floor configuration settings',
      },
      {
        id: 'floor-layout-design-tools',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Design the seating layout',
        paragraph:
          'After creating a floor, use the table panel on the left side to drag and place tables onto the layout canvas. Use the toolbar options to align, distribute, rotate, and duplicate layout elements.',
      },
      {
        id: 'floor-layout-design-tools-list',
        type: ArticleSectionType.NumberedList,
        items: [
          'Drag and drop tables onto the floor canvas layout',
          'Configure table names and seating capacity using Min Seats and Max Seats',
          'Select table types for different seating arrangements',
          'Use alignment, distribution, and rotation tools for organized layouts',
          'Duplicate or rotate tables using quick action controls',
          'Add walls and dividers to organize dining sections and pathways',
        ],
      },
      {
        id: 'create-table-modal-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.createTableScreenshotPng,
        imageAlt: 'Create table modal with table settings',
      },
    ],
  },
];

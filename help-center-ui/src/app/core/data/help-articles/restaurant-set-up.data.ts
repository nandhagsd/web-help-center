import { HelpArticle } from '@core/data/help-articles/help-articles.model';
import { ArticleSectionType } from '@core/models/articles/article-section-type.enum';
import { Assets } from '@core/generated/assets';

export const RESTAURANT_SET_UP_ARTICLES: HelpArticle[] = [
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
  }
];

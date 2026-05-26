import { HelpArticle } from '@core/data/help-articles/help-articles.model';
import { ArticleSectionType } from '@core/models/articles/article-section-type.enum';
import { Assets } from '@core/generated/assets';

export const FLOOR_SETTINGS_ARTICLES: HelpArticle[] = [
  {
    slug: 'create-restaurant-floors',
    title: 'Create Floor Layout',
    summary: 'Learn how to create and manage restaurant floor layouts in Smart Dining.',
    seoTitle: 'Create Restaurant Floor Layouts | Smart Dining Help Center',
    seoDescription:
      'Learn how to create restaurant floors, configure floor settings, and manage floor layouts.',
    keywords: [
      'restaurant floors',
      'floor layouts',
      'floor management',
      'restaurant floor setup',
      'smart dining floor setup',
      'floor plan designer',
      'restaurant dining areas',
    ],

    sections: [
      {
        id: 'floor-layout-overview',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Access the floor layout designer',
        paragraph:
          'Navigate to **Settings > Floors & Tables** from the left sidebar menu to access the floor layout management page.',
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
          '**Configure floor dimensions** for layout planning',
          '**Organize dining sections** for efficient seating management',
        ],
      },

      {
        id: 'create-new-floor',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Create a new floor',
        paragraph:
          'Click **New Floor** at the top of the page to create a new restaurant floor layout.',
      },

      {
        id: 'create-floor-checklist',
        type: ArticleSectionType.NumberedList,
        items: [
          'Enter the floor name for the dining area',
          'Choose a floor type from the available options',
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
    ],
  },
  {
    slug: 'create-restaurant-tables',
    title: 'Create Floor Tables',
    summary:
      'Learn how to create and arrange restaurant tables using the floor layout designer.',
    seoTitle: 'Create Restaurant Tables & Seating Layouts | Smart Dining Help Center',
    seoDescription:
      'Learn how to create restaurant tables, configure seating capacity, arrange layouts, and organize dining sections.',
    keywords: [
      'restaurant tables',
      'table management',
      'table layout',
      'restaurant seating',
      'table capacity',
      'smart dining tables',
      'restaurant table setup',
      'floor layout designer',
    ],

    sections: [
      {
        id: 'table-layout-overview',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Access table layout tools',
        paragraph:
          'Open an existing restaurant floor from **Settings > Floors & Tables** to start managing tables and seating arrangements.',
      },

      {
        id: 'table-layout-overview-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.floorLayoutScreenshotPng,
        imageAlt: 'Restaurant floor layout designer with table management tools',
      },

      {
        id: 'table-layout-features',
        type: ArticleSectionType.BulletedList,
        items: [
          '**Add square, rectangle, and round tables**',
          '**Configure minimum and maximum seating capacity**',
          '**Align, distribute, rotate, and duplicate tables**',
          '**Add walls and dividers** to organize dining sections',
        ],
      },

      {
        id: 'design-seating-layout',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Design the seating layout',
        paragraph:
          'Use the table panel on the left side to drag and place tables onto the floor canvas layout.',
      },

      {
        id: 'design-seating-layout-steps',
        type: ArticleSectionType.NumberedList,
        items: [
          'Drag and drop tables onto the layout canvas',
          'Configure table names',
          'Set Min Seats and Max Seats values',
          'Select table types for different seating arrangements',
          'Use alignment and distribution tools for organized layouts',
          'Rotate or duplicate tables using quick action controls',
          'Add walls and dividers to organize pathways and dining sections',
        ],
      },

      {
        id: 'create-table-modal-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.createTableScreenshotPng,
        imageAlt: 'Use the Create Table modal to set up table configurations',
      },

      {
        id: 'layout-organization-tools',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Organize the dining layout',
        paragraph:
          'Use layout management tools to maintain a clean and efficient restaurant seating arrangement.',
      },

      {
        id: 'layout-organization-tools-list',
        type: ArticleSectionType.BulletedList,
        items: [
          '**Align tables evenly** across the layout',
          '**Distribute spacing consistently** between seating areas',
          '**Rotate tables** for custom positioning',
          '**Duplicate table layouts** for faster setup',
        ],
      },
    ],
  },
  {
    slug: 'create-table-combinations',
    title: 'Create Table Combinations',
    summary:
      'Learn how to create table combinations by selecting multiple tables, configuring seating capacity, and managing restaurant booking combinations.',
    seoTitle: 'Create Table Combinations & Seating Layouts | Smart Dining Help Center',
    seoDescription:
      'Learn how to create restaurant table combinations by selecting tables, setting seating capacity, and configuring booking combinations for floor plans.',
    keywords: [
      'table combinations',
      'restaurant floor plan',
      'combined tables',
      'table seating',
      'restaurant booking setup',
      'smart dining floor plans',
    ],
    sections: [
      {
        id: 'floor-plan-navigation',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Access floor plans',
        paragraph:
          'Navigate to **Settings > Floors & Tables** from the left sidebar menu to open the floor plan management section. This area allows you to design floor layouts, manage tables, and configure table combinations.',
      },
      {
        id: 'floor-plan-selection-overview',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Select tables for combination',
        paragraph:
          'Open the required floor plan and select the tables that should be combined together. Multiple selected tables can be grouped into a single booking combination.',
      },
      {
        id: 'floor-plan-selection-features',
        type: ArticleSectionType.BulletedList,
        items: [
          '**Select multiple tables** from the floor layout',
          '**Use alignment and distribution tools** for better table organization',
          '**Create combinations** for larger party seating arrangements',
        ],
      },
      {
        id: 'floor-plan-selection-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.tableCombinationPageScreenshotPng,
        imageAlt: 'Floor plan with multiple tables selected for creating a table combination',
      },
      {
        id: 'use-selection-for-combination',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Use selected tables for combination',
        paragraph:
          'After selecting the required tables, click **Use selection for combination** from the properties panel. This opens the combination configuration section where you can define the combination details.',
      },
      {
        id: 'table-combination-configuration',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Configure combination details',
        paragraph:
          'Enter a combination name and define the minimum and maximum seating capacity for the selected table combination.',
      },
      {
        id: 'table-combination-steps',
        type: ArticleSectionType.NumberedList,
        items: [
          'Enter the combination name',
          'Set the minimum seat count',
          'Set the maximum seat count',
          'Click Create Combo to save the table combination',
        ],
      },
      {
        id: 'table-combination-configuration-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.createTableCombinationScreenshotPng,
        imageAlt: 'Create table combination section with combination name and seat configuration',
      },
      {
        id: 'table-combination-benefits',
        type: ArticleSectionType.BulletedList,
        items: [
          '**Manage large group reservations** efficiently',
          '**Combine nearby tables** into one booking arrangement',
          '**Improve seating flexibility** during busy hours',
        ],
      },
    ],
  },
];

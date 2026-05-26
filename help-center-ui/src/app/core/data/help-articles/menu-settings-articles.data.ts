import { HelpArticle } from '@core/data/help-articles/help-articles.model';
import { ArticleSectionType } from '@core/models/articles/article-section-type.enum';
import { Assets } from '@core/generated/assets';

export const MENU_SETTINGS_ARTICLES: HelpArticle[] = [
  {
    slug: 'create-restaurant-menu',
    title: 'Create Restaurant Menu',
    summary: 'Learn how to create and manage restaurant menus in Smart Dining.',
    seoTitle: 'Create Restaurant Menus & Categories | Smart Dining Help Center',
    seoDescription:
      'Learn how to create restaurant menus, organize categories, and configure menu visibility settings in Smart Dining.',
    keywords: [
      'restaurant menu',
      'menu management',
      'menu categories',
      'menu setup',
      'smart dining menus',
      'menu visibility',
      'restaurant menu configuration',
      'dine in menu',
      'pickup menu',
    ],

    sections: [
      {
        id: 'menu-settings-navigation',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Access menu settings',
        paragraph:
          'Navigate to **Settings > Menus & Items** from the left sidebar menu to access the menu management section.',
      },

      {
        id: 'menu-settings-navigation-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.menuPageScreenshotPng,
        imageAlt: 'Menus & Items option selected from the Smart Dining settings sidebar',
      },

      {
        id: 'menu-management-overview',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Manage restaurant menus',
        paragraph: 'Open the **Menus** tab to create and organize restaurant menus.',
      },

      {
        id: 'menu-management-features',
        type: ArticleSectionType.BulletedList,
        items: [
          '**Create and manage multiple menus** for different dining services',
          '**Organize categories and food items** within menu sections',
          '**Manage dine-in, pickup, reservation, and waitlist visibility**',
        ],
      },

      {
        id: 'create-new-menu',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Create a new menu',
        paragraph:
          'Click **Create Menu** from the menu management page to open the menu creation dialog.',
      },

      {
        id: 'menu-creation-steps',
        type: ArticleSectionType.NumberedList,
        items: [
          'Enter the menu name',
          'Add a menu description',
          'Enable visibility options for Dine In, Pickup, Reservation, or Waitlist',
          'Click Create to save the menu',
        ],
      },

      {
        id: 'create-menu-modal-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.createMenuScreenshotPng,
        imageAlt: 'Create menu modal with menu name, description, and visibility settings',
      },
    ],
  },
  {
    slug: 'create-food-items',
    title: 'Create Food Items',
    summary: 'Learn how to create and manage food items in Smart Dining.',
    seoTitle: 'Create Restaurant Food Items & Pricing | Smart Dining Help Center',
    seoDescription:
      'Learn how to create food items, configure pricing, add modifier groups, and manage restaurant menu items in Smart Dining.',
    keywords: [
      'food items',
      'restaurant food items',
      'menu item setup',
      'food pricing',
      'modifier groups',
      'food customization',
      'restaurant menu items',
      'smart dining food items',
    ],

    sections: [
      {
        id: 'create-food-item-overview',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Create a new food item',
        paragraph: 'Click **Food Items > Create Food Item** to open the food item creation form.',
      },

      {
        id: 'food-item-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.foodItemScreenshotPng,
        imageAlt: 'Create and manage food items',
      },

      {
        id: 'basic-food-information',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Add basic food item information',
        paragraph:
          'Enter the food item name, upload a food image, and provide a detailed description.',
      },

      {
        id: 'basic-food-information-steps',
        type: ArticleSectionType.NumberedList,
        items: [
          'Upload a food image',
          'Enter the food item name',
          'Add a food description',
          'Select Vegetarian or Non-Vegetarian',
          'Choose Individual Item or Add-on Item',
        ],
      },

      {
        id: 'basic-food-information-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.foodItemBasicInformationScreenshotPng,
        imageAlt: 'Create Food Item form with image upload and food details',
      },

      {
        id: 'food-item-pricing',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Configure price and size options',
        paragraph: 'Set the pricing structure for the food item.',
      },

      {
        id: 'food-item-pricing-features',
        type: ArticleSectionType.BulletedList,
        items: [
          '**Choose Single Size or Multiple Size** pricing options',
          '**Set the base price** for the food item',
          '**Configure tax percentage and tax name**',
        ],
      },

      {
        id: 'food-item-pricing-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.foodItemPriceSizeScreenshotPng,
        imageAlt: 'Food item pricing section with size options and tax configuration',
      },

      {
        id: 'additional-food-information',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Configure additional information',
        paragraph: 'Add preparation time and spice level preferences.',
      },

      {
        id: 'additional-food-information-list',
        type: ArticleSectionType.BulletedList,
        items: [
          '**Set preparation time** in minutes',
          '**Choose spice level** such as Mild or Hot',
        ],
      },

      {
        id: 'additional-food-information-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.foodItemAdditionalInformationScreenshotPng,
        imageAlt: 'Additional information section with preparation time and spice level settings',
      },

      {
        id: 'modifier-group-customization',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Add modifier group customization',
        paragraph: 'Use modifier groups to allow customers to customize food items.',
      },

      {
        id: 'modifier-group-customization-steps',
        type: ArticleSectionType.NumberedList,
        items: [
          'Open the Customization section',
          'Click Add Modifier Groups',
          'Select or create modifier groups',
          'Save the customization settings',
        ],
      },

      {
        id: 'create-food-item-final-step',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Save the food item',
        paragraph: 'Click **Create Food Item** to save the menu item.',
      },
    ],
  },
  {
    slug: 'create-menu-category',
    title: 'Create Menu Category',
    summary: 'Learn how to create menu categories and organize food items within categories.',
    seoTitle: 'Create Restaurant Menu Categories | Smart Dining Help Center',
    seoDescription:
      'Learn how to create and manage restaurant menu categories, organize food items, and add menu items into categories.',
    keywords: [
      'menu categories',
      'restaurant categories',
      'food categories',
      'menu organization',
      'category management',
      'smart dining categories',
    ],
    sections: [
      {
        id: 'category-navigation',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Access menu categories',
        paragraph:
          'Navigate to **Settings > Menus & Items** from the left sidebar and open the **Categories** tab. This section allows you to create and organize restaurant menu categories.',
      },
      {
        id: 'category-navigation-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.categoryPageScreenshotPng,
        imageAlt: 'Categories tab in Smart Dining with Create Category button',
      },
      {
        id: 'create-category-overview',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Create a new category',
        paragraph:
          'Click **Create Category** to open the category creation dialog. Enter the category name and description to organize related food items under a single category.',
      },
      {
        id: 'create-category-steps',
        type: ArticleSectionType.NumberedList,
        items: [
          'Click Create Category',
          'Enter the category name',
          'Add a short description for the category',
          'Click Create to save the category',
        ],
      },
      {
        id: 'create-category-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.createCategoryScreenshotPng,
        imageAlt: 'Create Category modal with category name and description fields',
      },
      {
        id: 'open-category-items-page',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Open the category items page',
        paragraph:
          'Click the **👁️ Eye icon** from the category actions column to open the category items management page. This page allows you to add or remove food items from the selected category.',
      },
      {
        id: 'open-category-items-page-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.categoryListScreenshotPng,
        imageAlt: 'Category items management page with food items and add item options',
      },
      {
        id: 'add-items-to-category',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Add food items to the category',
        paragraph:
          'Use the food items panel on the right side to search and add menu items into the selected category.',
      },
      {
        id: 'add-items-to-category-list',
        type: ArticleSectionType.BulletedList,
        items: [
          '**Search food items** from the available item list',
          '**Click Add** to include items in the category',
          '**View added items** inside the category section',
          '**Remove items** from the category when required',
        ],
      },
      {
        id: 'empty-category-overview-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.addedCategoryItemsScreenshotPng,
        imageAlt: 'Empty category items page before adding food items',
      },
    ],
  },
  {
    slug: 'create-modifier-group',
    title: 'Create Modifier Group',
    summary: 'Learn how to create and manage modifier groups in Smart Dining.',
    seoTitle: 'Create Modifier Groups & Add-ons | Smart Dining Help Center',
    seoDescription:
      'Learn how to create and manage modifier groups, configure item selection types, and manage add-on food items for menu customization.',
    keywords: [
      'modifier groups',
      'menu customization',
      'add-on items',
      'restaurant modifiers',
      'food item customization',
      'smart dining modifiers',
    ],
    sections: [
      {
        id: 'modifier-group-navigation',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Access modifier groups',
        paragraph:
          'Navigate to **Settings > Menus & Items** from the left sidebar and open the **Modifier Groups** tab. This section allows you to create and manage customizable add-ons and item modifiers for restaurant menu items.',
      },
      {
        id: 'modifier-group-navigation-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.modifierGroupPageScreenshotPng,
        imageAlt: 'Modifier Groups tab in Smart Dining with Create Modifier Group button',
      },
      {
        id: 'modifier-group-important-note',
        type: ArticleSectionType.Paragraph,
        paragraph:
          '**Important: Before creating a modifier group, ensure all modifier items are already created as food items with the sales option set to Add-on Item. Only add-on items can be selected inside modifier groups.**',
      },
      {
        id: 'create-modifier-item',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Create modifier items as add-on items',
        paragraph:
          'Before adding items into a modifier group, you must first create them as food items with the sales option set to **Add-on Item**.',
      },
      {
        id: 'create-modifier-item-steps',
        type: ArticleSectionType.NumberedList,
        items: [
          'Navigate to the Food Items section',
          'Click Create Food Item',
          'Upload an image for the modifier item if required',
          'Enter the modifier item name and description',
          'Select the food type',
          'Choose the sales option as Add-on Item',
          'Enter the base price for the add-on item',
          'If the add-on item is chargeable, enter the required price or enter 0 as the price',
          'Click Create Food Item to save the modifier item',
        ],
      },
      {
        id: 'create-modifier-item-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.createModifierItemScreenshotPng,
        imageAlt: 'Create Food Item with Add-on Item sales option selected for modifier items',
      },
      {
        id: 'create-modifier-group-overview',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Create a new modifier group',
        paragraph:
          'Click **Create Modifier Group** to open the modifier group creation form. Enter the group name, add a description, configure customer selection rules, and add modifier items.',
      },
      {
        id: 'create-modifier-group-steps',
        type: ArticleSectionType.NumberedList,
        items: [
          'Enter the modifier group name',
          'Enable the required selection option if customers must choose from the group',
          'Add a short description for the modifier group',
          'Choose whether the group contains Items or Instructions',
          'Select the selection type such as Multiple Choice, Single Choice, or Fixed Quantity',
        ],
      },
      {
        id: 'create-modifier-group-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.createModifierGroupScreenshotPng,
        imageAlt: 'Create Modifier Group form with name, description, and selection type settings',
      },
      {
        id: 'add-modifier-items',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Add modifier items',
        paragraph:
          'Use the **Add Items** option to search and select add-on food items that should appear inside the modifier group.',
      },
      {
        id: 'add-modifier-items-list',
        type: ArticleSectionType.BulletedList,
        items: [
          '**Search available add-on items** from the item list',
          '**Select items** such as cheese, toppings, or sauces',
          '**Add multiple modifier items** to the group',
          '**Customize customer selection behavior** using selection types',
        ],
      },
      {
        id: 'add-modifier-items-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.addModifiersScreenshotPng,
        imageAlt: 'Add Items modal displaying add-on food items for modifier groups',
      },
      {
        id: 'modifier-items-preview',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Review selected modifier items',
        paragraph:
          'After adding items, the selected modifier items will appear in the modifier group list. You can review, reorder, or remove items before saving the modifier group.',
      },
      {
        id: 'modifier-items-preview-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.addedModifiersOverviewScreenshotPng,
        imageAlt: 'Modifier group preview with selected modifier items and remove options',
      },
      {
        id: 'save-modifier-group',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Save the modifier group',
        paragraph:
          'After configuring the modifier group and adding all required modifier items, click **Create Modifier Group** to save the customization group and make it available for food items.',
      },
    ],
  },
];

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
          'Check that your timezone matches the restaurant\'s physical location.',
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
    slug: 'create-employees',
    title: 'Create Employees',
    summary:
      'Add team members manually, assign the right role, and keep access clean before opening operations.',
    seoTitle: 'Create Employees | Smart Dining Help Center',
    seoDescription:
      'Learn how to manually create employee accounts in Smart Dining, assign roles, and verify access before service.',
    keywords: [
      'create employees',
      'manual employee setup',
      'staff accounts',
      'team access',
      'smart dining users',
    ],
    sections: [
      {
        id: 'employees-overview',
        type: ArticleSectionType.HeadingParagraph,
        heading: 'Create employee accounts before your first shift',
        paragraph:
          'Use **Settings > Employees** to add each team member manually. This keeps account ownership clear and avoids shared logins during live service.',
      },
      {
        id: 'employees-what-to-prepare',
        type: ArticleSectionType.HeadingBulletedList,
        heading: 'Before you start, prepare these details',
        items: [
          '**Full name** used by managers and hosts',
          '**Work email or login identifier** for each employee',
          '**Role** such as Host, Manager, or Admin',
          '**Primary floor or responsibility** if your operation tracks this',
        ],
      },
      {
        id: 'employees-create-steps',
        type: ArticleSectionType.HeadingNumberedList,
        heading: 'Manually create an employee',
        items: [
          'Open **Settings > Employees**.',
          'Select **Add Employee**.',
          'Enter the employee name and login email.',
          'Assign the correct role for daily responsibilities.',
          'Save the employee record and repeat for the remaining team members.',
        ],
      },
      {
        id: 'employees-image',
        type: ArticleSectionType.Image,
        imageUrl: Assets.images.dashboardScreenshotPng,
        imageAlt: 'Employee management screen in Smart Dining',
        caption:
          'Create employee accounts one by one, then verify each role before staff start using the system.',
      },
      {
        id: 'employees-quick-check',
        type: ArticleSectionType.HeadingNumberedList,
        heading: 'Quick access check before service',
        items: [
          'Confirm every active employee appears in the list.',
          'Review role assignments for least-privilege access.',
          'Remove duplicate or unused accounts.',
          'Ask one employee per role to sign in and verify expected permissions.',
        ],
      },
      {
        id: 'employees-common-mistakes',
        type: ArticleSectionType.BulletedList,
        items: [
          'Creating duplicate accounts for the same employee.',
          'Assigning Admin access when Host or Manager access is enough.',
          'Leaving old employee accounts active after role changes or offboarding.',
        ],
      },
      {
        id: 'employees-final-note',
        type: ArticleSectionType.Paragraph,
        paragraph:
          'Tip: Keep employee setup and role review as part of your weekly operations checklist to reduce access issues during peak hours.',
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
  {
    slug: 'create-floors-and-tables',
title: 'Create Floors and Tables',
summary:
  'Set up your restaurant floors and table layout in Smart Dining so reservations, walk-ins, and seating operations run smoothly.',
seoTitle: 'Create Floors and Tables | Smart Dining Help Center',
seoDescription:
  'Learn how to create floors and tables in Smart Dining, organize seating areas, define table capacity, and prepare your restaurant for service.',
keywords: [
'create floors',
'create tables',
'smart dining',
'restaurant floor plan',
'table setup',
],
sections: [
  {
    id: 'floors-and-tables-overview',
type: ArticleSectionType.HeadingParagraph,
  heading: 'Build the seating structure your team will use every day',
paragraph:
  'In Smart Dining, floors represent the physical dining areas in your restaurant, such as Indoor, Outdoor, Rooftop, or Private Dining. Inside each floor, you create tables with the right names, capacities, and positions so your team can manage reservations, walk-ins, and seating with confidence.',
},
{
  id: 'why-floor-setup-matters',
  type: ArticleSectionType.Paragraph,
    paragraph:
'A clear floor and table setup helps Smart Dining assign bookings more accurately, show table availability correctly, and support faster host decisions during service. Before accepting live reservations, make sure every active seating area and service table is configured properly.',
},
{
  id: 'floor-and-table-screen-image',
  type: ArticleSectionType.Image,
    imageUrl: Assets.images.dashboardScreenshotPng,
  imageAlt: 'Smart Dining floor and table management screen showing multiple floors and table entries',
  caption:
    'This screen helps you create dining areas, add tables, and review how your seating structure is organized before going live.',
},
{
  id: 'before-you-start-checklist',
  type: ArticleSectionType.HeadingBulletedList,
    heading: 'Before you start, gather these details',
  items: [
'The list of dining areas you want to manage, such as Main Hall, Patio, or Family Room.',
'The table names or numbers your staff already uses during service.',
'The standard guest capacity for each table, such as 2-seater, 4-seater, or 6-seater.',
'Any special table behavior, such as mergeable tables, outdoor-only tables, or high-demand seating sections.',
],
},
{
  id: 'create-floor-steps',
  type: ArticleSectionType.HeadingNumberedList,
    heading: 'Create a new floor in Smart Dining',
  items: [
'Open Settings > Floors and Tables.',
'Select Add Floor to create a new dining area.',
'Enter a clear floor name that your team can recognize instantly.',
'Save the floor before adding tables under it.',
],
},
{
  id: 'floor-naming-guidance',
  type: ArticleSectionType.Paragraph,
    paragraph:
'Use floor names that match real operations, not internal guesswork. Names like Ground Floor, Terrace, Bar Area, or Garden Seating are easier for hosts and managers to understand during busy service than generic labels such as Floor 1 or Section A.',
},
{
  id: 'create-table-steps',
  type: ArticleSectionType.HeadingNumberedList,
    heading: 'Add tables under each floor',
  items: [
'Open the floor where the table belongs.',
'Select Add Table.',
'Enter the table name or number used by your team.',
'Set the correct seating capacity for that table.',
'Save the table and repeat the process for the remaining tables in the same floor.',
],
},
{
  id: 'table-setup-best-practices',
  type: ArticleSectionType.HeadingBulletedList,
    heading: 'Best practices for table setup',
  items: [
'Keep table names short and operational, such as T1, T2, P-04, or Booth 3.',
'Avoid duplicate table names across the same restaurant to reduce seating confusion.',
'Set realistic capacities based on actual service rules, not maximum squeeze capacity.',
'Review special tables carefully if they are reserved for VIPs, events, or staff-controlled seating.',
],
},
{
  id: 'common-configuration-mistakes',
  type: ArticleSectionType.BulletedList,
    items: [
'Creating floors but forgetting to add active tables.',
'Using inconsistent table naming, such as mixing Table 1, T1, and 01.',
'Assigning the wrong guest capacity, which can affect reservation matching.',
'Leaving unavailable or removed tables active in the system.',
],
},
{
  id: 'final-review-before-live',
  type: ArticleSectionType.HeadingParagraph,
    heading: 'Review your setup before taking bookings',
  paragraph:
    'After creating floors and tables, review the full structure with your host or operations team. Confirm that every floor is active, every table has the correct capacity, and the naming matches what staff uses on the restaurant floor. This final review reduces booking assignment errors and helps Smart Dining reflect real service conditions.',
},
],
}
];

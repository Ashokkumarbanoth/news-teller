# News Teller

News Teller is a modern, multi-language news portal built with Next.js and Tailwind CSS. It is designed to look like a real digital news website, with reusable components, dynamic story pages, category pages, media sections, and editable content stored in a central data file.

This project has been structured so that you can easily change the stories, jobs, translations, and categories without rewriting the layout code.

## Project overview

The app is organized into a few main parts:

- App shell and page routing: `app/`
- Reusable UI and layout blocks: `components/`
- Content and data source: `lib/data.js`
- Translation text: `lib/translations.js`
- Styling and animation setup: `app/globals.css`, `tailwind.config.js`

The project uses:

- Next.js App Router
- React components
- Tailwind CSS for styling
- Static mock content that is easy to replace with real data later

---

## Folder structure and what each file does

### App pages

#### `app/page.jsx`
This is the main homepage. It renders:

- Header
- News ticker
- Featured story hero
- Top stories accordion
- Latest stories grid
- Audio player
- Sidebar widgets
- Jobs section
- Footer

This is the place where the homepage layout is assembled. If you want to change the order of sections or add new blocks, edit this file.

#### `app/layout.jsx`
This is the global layout wrapper for the app. It loads the global CSS and sets the metadata for the site.

Important details:

- It defines the site title and description
- It wraps all pages inside the root HTML/body structure
- It is the correct place to add global metadata, fonts, analytics, or global layout wrappers

#### `app/globals.css`
This file contains the global stylesheet and Tailwind import.

Use it for:

- base resets
- global styles
- CSS variables
- custom body styling

If you want to change typography, spacing base styles, or add custom utility classes, edit here.

---

### Dynamic route pages

These pages render content based on URL parameters.

#### `app/news/[slug]/page.jsx`
This page displays a full article detail view for a story based on its unique slug.

Example URL:

- `/news/hyderabad-smart-mobility-projects`

Everything that belongs to an article (title, summary, body, image, audio/video) is read from the data object and injected into this page.

Edit here if you want to change the article detail layout or add things like author bio, tags, or related stories.

#### `app/category/[slug]/page.jsx`
This page shows all stories belonging to a selected category, like Politics, Business, Sports, etc.

Example URL:

- `/category/sports`

This page reads the category slug and filters the content from the central data file.

#### `app/jobs/page.jsx`
This is the full jobs page. It lists all job openings with title, company, location, salary, and description.

If you want to add a new job type or change the page layout, edit this file.

#### `app/videos/page.jsx`
This page lists all video content items.

Use it to add or change video stories or change how the media section is displayed.

#### `app/podcasts/page.jsx`
This page lists all audio items and renders working audio players.

This is where you would add or edit podcast content and audio presentation.

---

### Component folders

The app is divided into reusable UI blocks for easier maintenance.

#### `components/layout/Header.jsx`
This is the site header.

It contains:

- brand/logo area
- live status badge
- search box
- language switcher
- navigation links
- category tabs

This is the main place to edit the top navigation and header design.

#### `components/layout/Sidebar.jsx`
This is the right sidebar on desktop.

It includes:

- ad placeholder
- jobs preview list
- sports highlights list

Edit this file if you want to add more widgets or change the sidebar content.

#### `components/layout/MobileDrawer.jsx`
This is the slide-in menu for mobile devices.

It is built as a reusable mobile navigation component and can be expanded later with real menu items.

#### `components/layout/NewsTicker.jsx`
This is the scrolling ticker at the top of the site.

It loops through headline items and animates them left-to-right.

If you want to change the headlines, edit `tickerItems` in `lib/data.js`.

#### `components/layout/Footer.jsx`
This renders the footer area with site links and copyright text.

The footer is translated using the `translations` object, so edit `lib/translations.js` for language-specific footer text.

---

### News components

#### `components/news/HeroCard.jsx`
This renders the featured story banner at the top of the homepage.

It displays:

- image
- category chip
- headline
- summary
- author/time metadata

If you want to change the look of the main feature banner, edit this component.

#### `components/news/NewsCard.jsx`
This renders a single article card in the latest stories list.

It includes:

- headline
- summary
- image
- article type label
- author
- read more link
- optional video button

If you want to adjust card styling or add a new action like "Save story" or "Share", edit this file.

#### `components/news/NewsGrid.jsx`
This is a responsive grid wrapper for the list of news cards.

It maps through the article list and renders a card for each item.

#### `components/news/TopStoriesAccordion.jsx`
This is the rotating accordion section at the top of the homepage.

It automatically switches stories every 3 seconds.

You can edit:

- the list of items passed into it
- the timing (currently 3000 milliseconds)
- the open/collapse styling

---

### Jobs components

#### `components/jobs/JobAccordion.jsx`
This handles the expandable jobs accordion.

Each job card can expand/collapse to show more details like location, salary, and description.

Use this file when you want to change accordion behavior or visual design.

#### `components/jobs/JobsPanel.jsx`
This is the full jobs section on the homepage.

It renders the list of jobs and the ad placeholder area.

---

### Media components

#### `components/media/AudioPlayer.jsx`
This renders the podcast/audio player.

It includes a working HTML5 audio element.

Edit here if you want to change:

- audio controls appearance
- default audio source
- progress UI

#### `components/media/VideoModal.jsx`
This is a fullscreen video popup.

It opens when a story card with a video is clicked and plays a video source in a modal.

Use this file if you want to change the modal style or add close button behavior.

---

### UI helper

#### `components/ui/GoogleAdSlot.jsx`
This is a placeholder component for ad spaces.

It keeps reserved space in the layout so the page does not jump when ads are later added.

It is intentionally simple and you can reuse it anywhere an ad placeholder is needed.

---

### Data layer

#### `lib/data.js`
This is the most important file for content editing.

It contains all the central content used by the app:

- categories
- languages
- ticker headlines
- featured story
- all article content
- jobs data
- sports highlights
- helper functions like `getArticleBySlug()` and `getJobBySlug()`

This is the file you should edit first when you want to change content.

Example:

- Add a new news item
- Edit a story title or summary
- Replace the featured story
- Add a new job listing
- Add more headlines to ticker

#### `lib/translations.js`
This file stores all language strings for the app.

It contains:

- English
- Telugu
- Hindi

If you want to add another language or change any label text, edit here.

For example:

- brand name
- search placeholder
- "latest stories" label
- footer text
- navigation labels

---

### Config files

#### `tailwind.config.js`
This config file enables Tailwind and adds custom animation support.

The ticker animation is registered here.

If you want to add custom keyframes or animation utilities, do it here.

#### `next.config.js`
This file configures Next.js for the project.

Currently it allows remote Unsplash images so images can be loaded from the web.

If you add additional image hosts later, update this file.

---

## How to customize the content easily

### 1. Change the homepage stories
Edit `lib/data.js` and modify the `topStories` array.

Each story object includes:

- `title`
- `summary`
- `category`
- `image`
- `author`
- `timestamp`
- `body`
- `audioUrl`
- `videoUrl`

### 2. Add new article pages
To add a new article, create a new object in `topStories` with a unique `slug`.

The app will automatically generate a page at:

`/news/<your-slug>`

### 3. Change categories
Edit the `categories` array in `lib/data.js`.

The category pages use those entries to generate dynamic routes.

### 4. Edit the jobs board
Update the `jobs` array in `lib/data.js`.

Each job should include:

- `slug`
- `title`
- `company`
- `location`
- `type`
- `salary`
- `description`

### 5. Change language text
Edit the objects in `lib/translations.js`.

Add a new language by creating a new key and matching the same text structure.

---

## Important editing rules

### Best place to add content
Always add or edit the main content in `lib/data.js`.

Do not hardcode your article titles or jobs directly into page files unless you want a one-off change.

### Best place to change appearance
Edit the component file that matches the section.

Examples:

- Header: `components/layout/Header.jsx`
- Cards: `components/news/NewsCard.jsx`
- Footer: `components/layout/Footer.jsx`
- Jobs panel: `components/jobs/JobsPanel.jsx`

### Best place to add new routes
Create a new page under `app/` and follow the same route structure.

For example:

- `app/about/page.jsx` → `/about`
- `app/contact/page.jsx` → `/contact`

---

## Common next steps you may want

Once you understand the app structure, you can extend it with:

- real backend data from a CMS or API
- admin dashboard for editing content
- authentication for editors
- database storage for articles and jobs
- image upload support
- search filters
- news categories with real database filtering

---

## Run the project

From the project folder:

```bash
npm install
npm run dev
```

Open the browser at:

```text
http://localhost:3000
```

---

## Summary

This project is built so that the content is centralized and reusable:

- page structure is in `app/`
- reusable UI is in `components/`
- editable content is in `lib/data.js`
- multilingual copy is in `lib/translations.js`

This makes it easy to maintain, customize, and scale the project later.

If you want, I can also add a second README section with a "quick start editing guide" for non-technical users, so you can simply update the data file without touching the component code.

# News Teller

News Teller is a modern digital news platform built with Next.js and Tailwind CSS, designed to deliver a polished editorial experience with dynamic content, multilingual support, media sections, and category-based navigation.

This project demonstrates a clean UI architecture, reusable components, and scalable content structure for a content-driven web application.

## Overview

The application is designed to resemble a professional digital news portal with:

- a featured story hero section
- a scrolling headline ticker
- article cards and news grids
- category pages and dynamic article routes
- audio and video media support
- multilingual interface support
- a jobs and opportunities section
- reusable layout blocks for easy extension

## Tech Stack

- Next.js 16
- React 19
- JavaScript
- Tailwind CSS
- App Router
- HTML5 audio/video support
- Unsplash image integration
- Component-driven architecture

## Key Features

- Responsive editorial homepage
- Dynamic routing for article detail pages
- Category-specific pages
- Automatic rotating top-stories accordion
- English, Telugu, and Hindi language support
- Podcast/audio player integration
- Video modal playback
- Reusable content model for easy updates
- Centralized content management through data files

## Project Structure

```bash
news-teller/
├── app/
│   ├── category/
│   ├── jobs/
│   ├── news/
│   ├── podcasts/
│   ├── videos/
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
├── components/
│   ├── jobs/
│   ├── layout/
│   ├── media/
│   ├── news/
│   └── ui/
├── lib/
│   ├── data.js
│   └── translations.js
├── next.config.js
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
├── jsconfig.json
├── README.md
└── .gitignore
```

## Architecture Summary

### App Layer
- `app/page.jsx` renders the homepage
- `app/layout.jsx` wraps the entire app and sets global metadata
- dynamic routes are handled inside the `app/news`, `app/category`, and related folders

### Component Layer
- `components/layout/` contains the header, footer, sidebar, news ticker, and mobile navigation
- `components/news/` contains reusable story cards and hero content
- `components/jobs/` handles the jobs listing UI
- `components/media/` contains audio and video components
- `components/ui/` contains reusable generic UI helpers such as ad placeholders

### Content Layer
- `lib/data.js` stores the site content, including stories, categories, jobs, and ticker items
- `lib/translations.js` stores localized text for the interface

## Where to Edit Content

### Update stories and jobs
Edit:

- `lib/data.js`

This is the main content source for:

- headline text
- summaries
- category labels
- author names
- timestamps
- jobs listings
- sports highlights

### Update translations
Edit:

- `lib/translations.js`

This controls:

- site branding
- navigation labels
- search placeholder text
- footer text
- language-specific labels

### Update design and UI
Edit the relevant component files in:

- `components/layout/`
- `components/news/`
- `components/jobs/`
- `components/media/`

## Run the Project

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Production Build

```bash
npm run build
```

## Why This Project Stands Out

This project is a strong example of a modern frontend build using:

- scalable app structure
- reusable components
- clean content separation
- responsive UX patterns
- multilingual UI support
- dynamic routing for content-driven pages

It reflects a production-oriented approach to building editorial and content-focused websites with maintainable architecture.

## License

This project is currently set up for personal or project-based use. Add a formal license if it will be shared publicly or deployed professionally.

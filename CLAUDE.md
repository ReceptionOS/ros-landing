# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Gatsby-based landing page for ReceptionOS, a dental clinic management and automation platform. The site is built with React, styled-components, and includes internationalization support for Polish and English languages. The site is deployed on Netlify.

## Development Commands

### Essential Commands

- `npm run develop` or `npm start` - Start development server (runs on http://localhost:8000)
- `npm run build` - Build production bundle
- `npm run serve` - Serve production build locally
- `npm run clean` - Clean Gatsby cache and public directories (run this if experiencing build issues)
- `npm run format` - Format code with Prettier

### Environment Variables

The project uses dotenv with environment-specific files (`.env.development`, `.env.production`). Required variables:

- `GOOGLE_ANALYTICS_TRACKING_ID` - Google Analytics tracking
- `POSTHOG_API_KEY` - PostHog analytics
- `TAG_MANAGER_ID` - Google Tag Manager

## Architecture

### Page Structure

The site is a single-page application with a modular landing page structure:

- **Entry point**: `src/pages/index.js` - imports the Home view and GraphQL query for i18n
- **Main view**: `src/views/home/index.js` - composes all landing page sections in order
- **Section components**: `src/views/home/components/*` - individual landing page sections (Autopilot, AIWave, WriteUs, PriceList, etc.)

### Component Organization

- `src/components/` - Shared/reusable components (Menu, Footer, SEO, Video, Modal, CookieBanner, etc.)
- `src/components/BorderContainer/` - Multiple specialized border container variants for decorative UI elements
- `src/views/` - Page-specific views and their components
- `src/styled.components.js` - Global styled-components (buttons, tiles)

### Internationalization

- Uses `gatsby-plugin-react-i18next` for i18n
- Translation files: `locales/pl/home.json` and `locales/en/home.json`
- Default language: Polish (`pl`)
- Access translations via `const { t } = useTranslation()` and use as `t\`home.section.key\``
- Language routing handled automatically by Gatsby

### Configuration

- `src/config/externalResources.js` - External links (Stripe, social media, legal documents, agent IDs)
- `src/config/pricing.js` - Pricing constants for different service tiers
- `gatsby-config.js` - Gatsby plugins, analytics setup, site metadata
- `gatsby-node.js` - Gatsby Node APIs (currently minimal, defines GraphQL schema)
- `gatsby-browser.js` - Global styles and font imports
- `gatsby-ssr.js` - Server-side rendering configuration

### Styling

- Primary styling: styled-components
- Global CSS: `src/style.css`
- Fonts: Red Hat Display, Montserrat, Inter, Inter Tight (loaded via @fontsource)
- Bootstrap 5.3.2 included (mainly for grid/utilities)
- Responsive breakpoint commonly used: `@media only screen and (max-width: 1130px)`

### Key Dependencies

- **Gatsby 5.13.2** - Static site generator
- **React 18** - UI framework
- **styled-components 6.1.19** - CSS-in-JS
- **gatsby-plugin-react-i18next** - Internationalization
- **gatsby-source-contentful** - CMS integration (configured but may not be actively used)
- **ElevenLabs widget** - Voice AI integration (ElevenWidget component)
- **PostHog & Google Analytics** - Analytics

## Development Notes

### Adding New Landing Page Sections

1. Create component in `src/views/home/components/YourSection/`
2. Import and add to `src/views/home/index.js` in desired order
3. Add translations to `locales/pl/home.json` and `locales/en/home.json`
4. Pass `t` prop from parent for translations

### Working with BorderContainers

There are 12+ BorderContainer variants for different decorative border layouts. Choose the appropriate one based on:

- Number of rows needed (NoRows, 4Rows, etc.)
- Side positioning (Sides, VerticalSides, Top, Bottom, etc.)
- Content placement requirements

### Updating External Resources

Edit `src/config/externalResources.js` for links like:

- Stripe payment URLs
- Social media profiles
- Legal document links
- ElevenLabs agent IDs

### Updating Pricing

Edit `src/config/pricing.js` for pricing tier values used in the PriceList section.

### Common Development Issues

- If builds fail or behave unexpectedly, run `npm run clean` first
- Ensure environment variables are set for analytics/tracking features
- The site uses client-side rendering checks (check for `mounted` state in Home view)
- Font loading happens in `gatsby-browser.js` - changes require restart

## Deployment

Site is configured for Netlify deployment:

- Build command: `gatsby build`
- Publish directory: `public`
- Development command: `gatsby develop` on port 8000
- Uses `@netlify/plugin-gatsby` plugin

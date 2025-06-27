# Contentful & Next.js & NextUI Personal Site Example

If you want to quickly create a personal website using Contentful with minimal software development effort, this guide is for you. Follow these steps to explore the Contentful platform with your own personal site.


## Technologies Used

- [Next.js 13](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)



## General structure

The repository is a Next.js 13+ project that uses Contentful as a CMS. Main directories:

app/ – page routes and API routes. Dynamic blog/category pages, a “xsetup” directory for seeding Contentful spaces, and helpers like providers.tsx.

components/ – React components. It includes reusable UI widgets as well as wrappers that render Contentful content types (e.g. hero banners, CTAs, rich text blocks).

lib/ – library code for Contentful access and shared utilities. lib/contentful/client.ts sets up delivery and preview clients using environment variables

config/ – site configuration, font setup, etc.

json/ – exported Contentful data and themes.json (colors, layout tokens, etc.).

public/ – static assets such as favicon.ico and logo.

get-themes-ctf.cjs – a Node script that fetches theme settings from Contentful and writes icons/themes to public/ and json/themes.json

tailwind.config.js and styles/ – TailwindCSS/NextUI configuration.

## Important features

Environment-driven Contentful client – lib/contentful/client.ts reads Contentful space IDs and tokens from environment variables to create delivery and preview clients

Navigation and layout – the root layout fetches navigation settings from Contentful and selects the font configured in the CMS before rendering the app

Contentful fetch helpers – e.g., lib/contentful/nav-menu.ts retrieves navigation menu entries

Rich text and asset helpers – utilities in lib/contentful/helpers/common.ts convert Contentful entries to React-friendly structures (image URLs, external links, etc.)

Blog comments – server actions interact with Vercel Postgres to create a comments table and insert comments

Space seeding – the xsetup tools (seed-space page and seeder.ts) allow wiping a Contentful space and importing the sample content programmatically

Preview mode – /api/draft enables draft mode for previewing unpublished Contentful entries using a secret token

## Getting started

The README describes required environment variables for Contentful and site deployment
Running npm run build triggers the get-themes-ctf.cjs script before next build

## Theming

TODO

****


## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).

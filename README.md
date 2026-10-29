# Arvind Nataraj Portfolio

A responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Inter, JetBrains Mono, and Lucide React. Includes Home, Experience & Education, Skills, Projects, Contact, and a footer.

## Run locally

From this project directory:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To verify a production build:

```sh
npm run build
npm run lint
npm run start
```

No environment variables or external services are required. The frontend uses Next.js's standard build and is suitable for a Vercel Next.js project. No deployment has been performed.

## How the files fit together

- [app/page.tsx](./app/page.tsx) assembles the sections for `/`.
- [app/layout.tsx](./app/layout.tsx) shares the fonts, navigation, footer, metadata, and theme initialization across the app.
- [app/globals.css](./app/globals.css) defines the theme tokens, responsive styling, smooth scrolling, and reduced-motion behavior.
- [components/](./components) holds reusable cards, section headings, technology tags, actions, and page sections. Most are rendered on the server; the navbar and theme toggle use client-side interaction.
- [data/portfolio.ts](./data/portfolio.ts) contains the editable profile, navigation labels, verified education, placeholder experience, skills, projects, contact destinations, and metadata.

## Updating content

Edit [data/portfolio.ts](./data/portfolio.ts). Leave an unavailable contact destination as `null`, or leave optional project URLs unset. Those actions are displayed as pending, with no fake URLs. Only add verified destinations. For a resume, place the verified PDF in [public/](./public) and set `contactDetails.resume` to its public path, such as `/resume.pdf` after that file actually exists.

Current placeholders:

- Developer illustration; the existing hero panel is intentionally retained.
- Project screenshots; the colored thumbnail panels explicitly say `Screenshot placeholder`.
- Verified experience details.
- Project repository and demo URLs.
- Resume file.

The email address, LinkedIn profile, and GitHub profile were explicitly supplied by Arvind and are configured in the centralized data file.

The main Skills section shows 16 supplied technologies with 48px icons and a responsive 2–8 column grid. Project cards retain their compact amber pills. Icons are served locally; see [icon sources and license](./public/icons/skills/README.md).

## Design values and approximations

The approved dark palette is used exactly: background `#151D39`, alternate sections `#242D49`, cards `#26304E`, text `#F5F7FF`, muted text `#B9C5DC`, lavender `#B8A2FF`, and amber `#FFC45E`. Skill pills use `#1C3048`, `#365E85`, and `#FFC45E`.

Light colors are accessible approximations from the supplied screenshot, not exported Figma tokens. They are documented next to the light palette in [app/globals.css](./app/globals.css). Thumbnail gradients and the contact panel treatment are approximations of the screenshots, not final exported assets.

Dark mode is the first-visit default. The theme toggle writes `portfolio-theme` to localStorage. A small script in the root layout restores a saved light preference before the page paints. Theme variables update every section without changing its content. The toggle still works if storage is blocked, but cannot persist in that case.

## Browser verification checklist

Check at widths 360, 390, 768, 1024, and 1440 pixels in both themes:

- No horizontal overflow, clipped text, or overlapping cards/navigation.
- Projects use one, two, and three columns at mobile, tablet, and desktop widths.
- All five navbar anchors land below the sticky header, and the active indicator follows scrolling.
- The mobile menu opens, closes after a selection, and closes with Escape.
- Tab navigation, the skip link, and focus indicators work.
- Light mode survives refresh; first-time visitors start in dark mode.
- Unconfigured actions are labeled pending and do not navigate.
- Reduced-motion preferences disable smooth scrolling and hover movement.
- The browser console has no errors.

Build and lint checks do not replace these visual and interactive browser checks.

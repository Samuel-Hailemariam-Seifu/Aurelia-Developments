# Aurelia Developments

A cinematic, luxury real estate website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

This project is structured as a polished marketing site for a fictional premium developer brand, with separate pages for developments, company story, and contact inquiries.

## Live project goals

- Present a high-end brand with image-heavy storytelling
- Showcase featured properties and detailed development pages
- Provide a reusable foundation for agencies, freelancers, and portfolio work
- Demonstrate a clean App Router architecture with animated UI sections

## Tech stack

- Next.js 16 (App Router)
- React 18
- TypeScript
- Tailwind CSS 3
- Framer Motion
- Lucide React

## Routes

- `/` - Landing page with hero, featured developments, about, stats, process, testimonials, and CTA
- `/developments` - Full developments listing grid
- `/developments/[id]` - Dynamic detail page per development
- `/about` - Brand story, values, and milestones
- `/contact` - Inquiry form and office information

## Component architecture

### Home page sections

- `Navbar`
- `Hero`
- `FeaturedDevelopments`
- `About`
- `InvestmentHighlights`
- `Process`
- `Testimonials`
- `CTA`
- `Footer`

### Shared page shell

- `PageLayout` is used by inner pages (`about`, `contact`, `developments`, `developments/[id]`) to keep a consistent top navigation, spacing, and footer.

## Styling and design system

- Primary background: `#0E0E0E` (charcoal)
- Primary text: `#F5F5F5` (off-white)
- Secondary text: `#8B8B8B` (warm gray)
- Accent: `#B08D57` (bronze)
- Display font: Playfair Display
- Body/UI font: Inter
- Section spacing token: `py-section` (`7rem`)

Global styles are defined in `app/globals.css`, and theme extensions are in `tailwind.config.ts`.

## Content model (current state)

- Development data is currently hardcoded in page/component files.
- Images are loaded from Unsplash remote URLs.
- `next.config.js` currently allows `images.unsplash.com`.
- Contact form submits to a local handler and logs data to console (no backend integration yet).

## Getting started

### 1) Install dependencies

```bash
npm install
```

### 2) Run the dev server

```bash
npm run dev
```

Open `http://localhost:3000`.

### 3) Build for production

```bash
npm run build
npm start
```

### 4) Lint

```bash
npm run lint
```

## Project structure

```text
.
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── developments/
│   │   ├── [id]/page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── CTA.tsx
│   ├── FeaturedDevelopments.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── InvestmentHighlights.tsx
│   ├── Navbar.tsx
│   ├── PageLayout.tsx
│   ├── Process.tsx
│   └── Testimonials.tsx
├── next.config.js
├── package.json
└── tailwind.config.ts
```

## Notes for customization

- Replace hardcoded development arrays with CMS or database content
- Connect the contact form to an API route, CRM, or email provider
- Swap placeholder contact details and brand copy with your business data
- Consider migrating to `next/font` for self-hosted font loading
- Update Next.js image config from `images.domains` to `images.remotePatterns` (recommended in Next.js 16)

## Deployment

Deploy to any Next.js-compatible platform. Vercel is the fastest path:

1. Push the repository to GitHub
2. Import into Vercel
3. Deploy with default Next.js settings

## Open source and licensing

This repository currently does not include a `LICENSE` file.

If you plan to publish it as open source on YouTube/LinkedIn/GitHub, add a license in the root (for example MIT) so reuse terms are explicit.

## Contributing

Issues and pull requests are welcome for bug fixes, UI improvements, accessibility upgrades, and architecture cleanup.

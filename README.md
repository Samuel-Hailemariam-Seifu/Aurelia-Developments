# AURELIA DEVELOPMENTS - Premium Real Estate Developer Website

A cinematic, architectural website for a luxury real estate developer built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Design Philosophy

- **Cinematic & Architectural**: Full-screen imagery, dramatic layouts, luxury aesthetic
- **Minimal & High-Contrast**: Deep charcoal backgrounds, bronze accents, generous whitespace
- **Image-Dominant**: Large immersive images with hover zoom effects
- **Grid-Based**: Clean geometric layouts with strong visual hierarchy

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (cinematic animations)
- Lucide React (icons)

## Color Palette

- Deep Charcoal: #0E0E0E (background)
- Warm Gray: #8B8B8B (text)
- Off-White: #F5F5F5 (headings)
- Bronze Accent: #B08D57 (highlights)

## Typography

- Serif: Playfair Display (large headings)
- Sans-serif: Inter (body text)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── FeaturedDevelopments.tsx
│   ├── About.tsx
│   ├── InvestmentHighlights.tsx
│   ├── Process.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
└── ...
```

## Features

- Full-screen cinematic hero with parallax effect
- Sticky transparent navbar with scroll effects
- Featured developments grid with hover zoom
- Two-column editorial about section
- Investment highlights statistics
- Horizontal process timeline
- Minimal testimonials section
- CTA section with architectural background
- Multi-column footer

## Design Notes

- Full-screen hero (100vh)
- Large vertical spacing (py-section = 7rem)
- Massive whitespace throughout
- Thin bronze accent dividers
- Image zoom on hover effects
- Subtle parallax animations
- Cinematic, luxury feel

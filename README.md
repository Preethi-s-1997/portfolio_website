# Preethi Suresh Portfolio

A dark, immersive product design portfolio for Preethi Suresh. The site uses oversized editorial typography, parallax motion, sticky case-study storytelling, and an AI Playground section featuring MotivOS and RUX.AI Design.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide icons
- Prisma
- PostHog-ready analytics setup

## Main Files

- `app/page.tsx` - Portfolio homepage
- `app/globals.css` - Global styles, parallax visuals, responsive portfolio styling
- `app/layout.tsx` - App metadata and shared layout
- `components/` - Shared UI components
- `lib/` - Utilities and supporting app code
- `prisma/` - Existing database schema and seed setup

## Portfolio Sections

- Hero introduction with dark parallax art direction
- Selected work case-study panels
- AI Playground with MotivOS and RUX.AI Design
- Method and design principles
- Contact footer

## Local Setup

```bash
npm install
npm run dev
```

The development server usually runs at:

```txt
http://localhost:3000
```

If port `3000` is already in use, Next.js will start on the next available port, such as `3001`.

## Production Build

```bash
npm run build
npm run start
```

## Notes

This project was redesigned from an older API/SaaS starter into a portfolio website. Some legacy routes and backend utilities may still exist in the repository, but the public homepage is now the portfolio experience.

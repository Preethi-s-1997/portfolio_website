# MotivOS

A premium dark-themed quote SaaS and public API for design, creativity, productivity, UX, startup, and work motivation.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
- Vercel
- Stripe-ready billing schema
- PostHog-ready analytics setup

Authentication is intentionally skipped in this initial build. The dashboard uses local development key generation, while the database schema and docs are ready for NextAuth, Google, GitHub, and email login in the next phase.

## Routes

- `/` - Public website
- `/docs` - API documentation
- `/dashboard` - Developer dashboard
- `/admin` - Admin panel shell
- `/api/health` - Operational health check

## API

- `GET /api/v1/quote/today`
- `GET /api/v1/quote/random`
- `GET /api/v1/quotes`
- `GET /api/v1/quotes/category/:category`
- `GET /api/v1/search?q=focus`
- `POST /api/v1/api-key`
- `DELETE /api/v1/api-key`

## Local Setup

```bash
npm install
cp .env.example .env
npm run db:generate
npm run dev
```

## Folder Structure

```txt
app/
  api/
  admin/
  dashboard/
  docs/
components/
  ui/
docs/
lib/
prisma/
```

For PostgreSQL-backed development:

```bash
npm run db:push
npm run db:seed
```

## Deployment

1. Create a Vercel project.
2. Add `DATABASE_URL` and `NEXT_PUBLIC_APP_URL`.
3. Connect a PostgreSQL database.
4. Run `npm run build`.
5. Add Stripe, PostHog, and NextAuth environment variables when those integrations are enabled.

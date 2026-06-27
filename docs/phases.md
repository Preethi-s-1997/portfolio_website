# MotivOS Product Phases

## Phase 1: Product Strategy

MotivOS is positioned as quote infrastructure for designers, founders, developers, and creative professionals. It combines a premium content experience with an API-first SaaS model.

## Phase 2: Information Architecture

- Public website: hero, quote of the day, API preview, categories, features, pricing
- Documentation: authentication, endpoints, examples, rate limits
- Dashboard: API keys, usage, playground, analytics
- Admin: quote library, approvals, scheduling, users, API analytics, revenue
- API: versioned `/api/v1` endpoints

## Phase 3: User Flows

- Visitor views quote of the day, explores categories, opens docs, and starts from dashboard.
- Developer generates a development API key, tests endpoints, and reviews usage.
- Admin reviews quotes, schedules featured content, and monitors business metrics.
- Authentication is deferred for the initial build.

## Phase 4: Database Schema

The Prisma schema includes users, categories, quotes, API keys, analytics events, API requests, plans, and billing accounts. The auth-related user model is present for the next phase, while initial screens remain unauthenticated.

## Phase 5: API Architecture

Routes are versioned under `/api/v1`, return consistent JSON envelopes, and include metadata. The current build uses local quote data for fast startup, with Prisma ready to become the source of truth.

## Phase 6: Design System

The UI uses a premium dark palette:

- Background `#0B0B0D`
- Surface `#111113`
- Card `#17171A`
- Border `#26262A`
- Primary `#FFFFFF`
- Secondary `#A1A1AA`
- Accent `#7C3AED`

Components use compact radii, strong contrast, clear focus states, and Inter typography.

## Phase 7: High Fidelity UI

Implemented screens include the public landing page, documentation, developer dashboard, and admin panel. The style direction is inspired by Linear, Raycast, Vercel, Notion Dark, and Stripe.

## Phase 8: Frontend Code

The app is built with Next.js App Router, React, TypeScript, Tailwind, reusable UI primitives, and responsive layouts.

## Phase 9: Backend Code

The initial backend includes public quote endpoints, search, category filtering, and demo API key generation/revocation endpoints.

## Phase 10: Deployment

Vercel configuration and environment examples are included. PostgreSQL is configured through Prisma using `DATABASE_URL`.

## Phase 11: Testing

Recommended launch checks:

- `npm run lint`
- `npm run build`
- API smoke tests for every `/api/v1` endpoint
- Responsive checks for public, docs, dashboard, and admin pages
- WCAG AA contrast verification

## Phase 12: Launch Strategy

Launch the free API first, publish docs, seed curated categories, and drive early adoption through designer/developer communities. Add auth, Stripe billing, PostHog tracking, and database-backed API key enforcement immediately after the initial no-login product is validated.

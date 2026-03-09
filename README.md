# Leiko Marketing Website

Next.js marketing site with Payload CMS for content management and waitlist signups.

## Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Configure environment variables:
   - `DATABASE_URI` — PostgreSQL connection string (e.g. from Supabase)
   - `PAYLOAD_SECRET` — At least 32 characters
   - `NEXT_PUBLIC_SITE_URL` — Site URL (e.g. `http://localhost:3001`)

3. Install dependencies (from repo root):
   ```bash
   npm install
   ```

## Development

```bash
cd apps/web
npm run dev
```

Runs at [http://localhost:3001](http://localhost:3001).

- Landing page: `/`
- Payload Admin: `/admin` (create first user on first visit)

## Build

```bash
cd apps/web
npm run build
npm run start
```

## Payload Collections

- **Users** — Admin panel authentication
- **Waitlist** — Email signups from "Join the waitlist" forms (public create, admin read)

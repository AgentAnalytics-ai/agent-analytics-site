# Agent Analytics — marketing site

Official marketing site for Agent Analytics: Next.js, TypeScript, and Tailwind, deployed on Vercel.

## Requirements

- Node.js (see `.nvmrc` if present)
- [pnpm](https://pnpm.io/)

## Setup

```bash
pnpm install
cp .env.local.example .env.local
```

Edit `.env.local` with valid values for local development. Required variables are documented in `.env.local.example` and validated in `src/lib/env.ts`.

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command            | Description              |
| ------------------ | ------------------------ |
| `pnpm dev`         | Development server       |
| `pnpm build`       | Production build         |
| `pnpm start`       | Run production build     |
| `pnpm lint`        | ESLint                   |
| `pnpm type-check`  | TypeScript (`tsc`)       |
| `pnpm prettier:check` | Format check          |

## Documentation

- [Deployment](./DEPLOYMENT.md) — Vercel and environment variables
- [Locations](./docs/locations.md) — Adding or editing city pages
- [Security](./SECURITY.md) — Reporting issues and handling secrets

Optional hero background: save a 16:9 still as `public/images/hero/ambient.webp`, then set `NEXT_PUBLIC_SHOW_HERO_AMBIENT=true` in `.env.local` (and Vercel for production). It appears in **dark mode** only, behind the existing gradient orbs.

## Legal

Repository contents are proprietary to the owner unless stated otherwise.

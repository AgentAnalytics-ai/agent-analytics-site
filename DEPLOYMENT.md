# Deployment

Production hosting is intended for [Vercel](https://vercel.com/). Connect the GitHub repository in the Vercel dashboard and set the production branch to `main`.

## Environment variables

Configure secrets in **Vercel → Project → Settings → Environment Variables**, not in the repository. Use the same names as `.env.local.example`. At minimum, production needs the variables required by `src/lib/env.ts` (`DATABASE_URL`, `RESEND_API_KEY`) plus any public URLs your routes expect (for example `NEXT_PUBLIC_SITE_URL` for OG image absolute paths).

For local parity, copy `.env.local.example` to `.env.local` and fill in values.

## Custom domains

Add domains under **Project → Settings → Domains**. Follow Vercel’s DNS instructions for your registrar: [Vercel Domains documentation](https://vercel.com/docs/projects/domains).

## CLI deploy (optional)

```bash
pnpm dlx vercel login
pnpm dlx vercel --prod
```

## CI and branch protection

Enable branch protection on `main` in GitHub (required reviews, no force-push) and attach your chosen checks (lint, typecheck, build) so production deploys stay predictable.

## Security

See [SECURITY.md](./SECURITY.md). Never commit `.env` or `.env.local`. Rotate any credential that was ever committed, even if the file was removed later.

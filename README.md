# Landing Craft — marketing site

The landing for **Landing Craft**, by [propiter](https://github.com/propiter) — built with Landing Craft itself.

- **Live:** https://landing-craft-red.vercel.app
- **The tool:** https://github.com/propiter/landing-craft
- **Stack:** Next.js (App Router) + Tailwind + Motion + Lenis
- **Planning artifacts:** see `landing/` (research, strategy, architecture, copy, design, review)

## Develop

```bash
pnpm install
pnpm dev
```

## Environment

Copy `.env.example` → `.env.local` and fill in:

- `NEXT_PUBLIC_FORM_ENDPOINT` — the lead/contact webhook (n8n, Formspree, etc.). Leads from the
  "get your first landing free" form POST here via the internal `/api/contact` route.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` / `NEXT_PUBLIC_GTM_ID` — analytics (optional).

Set the same vars in the Vercel dashboard for production.

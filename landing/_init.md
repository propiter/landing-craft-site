# Landing Craft — Init Phase

**Generated:** 2026-06-17  
**Project:** `propiter/landing-craft` (the tool's own marketing site)  
**Product:** Landing Craft — an end-to-end AI pipeline that builds high-converting landing pages  
**Language:** English (global audience of founders & developers)

---

## Framework

| Item | Value |
|------|-------|
| Stack | **Next.js 16.2.9** (App Router, TypeScript) |
| Styling | **Tailwind CSS v4** (CSS-first config via `@theme`, no `tailwind.config.ts`) |
| Fonts | Geist Sans + Geist Mono (via `next/font/google`) |
| Package manager | npm 11.6.2 (pnpm 10.32.1 available) |
| Project root | `/home/piter/landing-craft` |

**Tailwind v4 note:** Tokens are defined in `src/app/globals.css` via the `@theme` block. No hardcoded hex/px — all design tokens flow through the Tailwind theme. The `postcss.config.mjs` uses `@tailwindcss/postcss`.

---

## Tooling Readiness

| Tool | Status | Details |
|------|--------|---------|
| Node.js | ✅ Ready | v24.13.0 |
| npm | ✅ Ready | 11.6.2 |
| pnpm | ✅ Ready | 10.32.1 |
| GitHub CLI (`gh`) | ✅ Ready | Authenticated as `propiter` |
| Vercel CLI | ✅ Ready | v54.14.0, authenticated as `propiter` |
| Firecrawl | ✅ Ready | Self-hosted at `firecrawl.lab.whitelabel.lat` (301 response). API key not set — not required for self-hosted. |
| Playwright | ✅ Ready | v1.61.0. Browsers: chromium, firefox, webkit |
| icotool | ✅ Ready | 0.32.3 (for favicon generation) |
| ImageMagick | ⚠️ Not installed | Not critical — Playwright handles rasterization for assets |

---

## Style Profile (from Engram #566)

| Preference | Value |
|------------|-------|
| Animation intensity | **`medium`** (scroll-reactive reveals, card hovers, section transitions) |
| Framework | Next.js + Tailwind — ALWAYS |
| Tokens | No hardcoded values — all via Tailwind theme |
| Motion stack | Motion (declarative) + GSAP (scroll/timeline) + Lenis (smooth scroll) |
| Pro components | Aceternity UI / Magic UI for rich tier |

---

## Preexisting Assets

8 Pulse screenshots from a prior project, available as reference/demo imagery:

```
/home/piter/pulse-hero.png
/home/piter/pulse-mobile.png
/home/piter/pulse-s2.png
/home/piter/pulse-s3.png
/home/piter/pulse-s5.png
/home/piter/pulse-s6.png
/home/piter/pulse-s7.png
/home/piter/pulse-signup.png
```

---

## Project Artifacts

| File | Phase | Status |
|------|-------|--------|
| `landing/_init.md` | Init | ✅ Written |
| `landing/research.md` | Research | ⏳ Pending |
| `landing/strategy.md` | Strategy | ⏳ Pending |
| `landing/architecture.md` | Architecture | ⏳ Pending |
| `landing/copy.md` | Copy | ⏳ Pending |
| `landing/design.md` | Design | ⏳ Pending |
| `landing/review.md` | Review | ⏳ Pending |

---

## Project Ready: ✅ YES

All required tooling is present and authenticated. The Next.js scaffold is in place. The style profile is loaded. The pipeline can proceed to **Phase 0: Research**.

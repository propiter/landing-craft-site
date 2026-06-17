# Landing Craft — Site Architecture

**Date:** June 17, 2026
**Grounded in:** `landing/research.md` + `landing/strategy.md`
**Phase:** Architecture (page map, section plan, SEO targets, data flow)

---

## 0. Artifact Consistency Fix

The `_init.md` describes Landing Craft as "an end-to-end AI pipeline that builds high-converting
landing pages." **This is incorrect per the research.** The validated positioning is: **"a
concierge landing service" — human-operated by propiter.** Landing Craft is NOT an AI builder; it's
positioned AGAINST AI builders. The architecture reflects the corrected positioning throughout.

---

## 1. Page Map — Every Page, Its Job, Its Reason

| # | Page | URL | Title tag | One-line job |
|---|------|-----|-----------|-------------|
| 1 | **Home** | `/` | Landing Craft — Concierge Landing Service. First One Free. | Carry the FULL pitch: confront the AI-generic problem, prove the pain is real, show the human alternative, prove it works, handle objections, capture the lead — all in one scroll. This IS the site for most visitors. |
| 2 | **How It Works** | `/how-it-works` | How Landing Craft Works — 3 Steps, One Human, Real Code | Demystify the concierge process for skeptical visitors who need to understand the flow before committing. Show that research + craft + deployment are real steps, not marketing claims. |
| 3 | **Why It Doesn't Look AI** | `/why-not-ai` | Why AI Landings Look Generic — and How Landing Craft Is Different | Deep-dive the anti-generic differential. This is the MOAT page — evidence, anatomy of AI slop, contrasting principles. For visitors who need intellectual conviction, not just emotional resonance. |
| 4 | **Showcase** | `/showcase` | Landing Craft Showcase — Real Landings, Real Craft | Data-driven gallery of real landings. Visual proof that the output is distinct. Each project is a data point — tagged, filterable, expandable. |
| 5 | **Pricing** | `/pricing` | Landing Craft Pricing — First One Free. Pay Only When You Need More. | Anchor on free. Present Credits and Pro as optional upgrades. Remove all pricing anxiety — the free tier IS the offer. |
| 6 | **FAQ** | `/faq` | Landing Craft FAQ — Real Questions, Real Answers | Handle every objection the research surfaced. Group by theme. Every answer reinforces the positioning. |
| 7 | **Terms** | `/terms` | Terms of Service — Landing Craft | Legal requirement for real launch. Minimal design, no marketing. |
| 8 | **Privacy** | `/privacy` | Privacy Policy — Landing Craft | Legal requirement for real launch. Minimal design, no marketing. |

**Why these 8 and nothing else:**
- No **Blog** yet — content marketing can launch post-MVP. The landing itself IS the SEO asset for now.
- No **About** page — propiter IS the brand. The "human behind it" is woven into every page (first-person voice). A separate About page would dilute that.
- No **Contact** page — the contact form IS the primary CTA, appearing on Home, How It Works, and as a floating CTA. A dedicated contact page would fragment the conversion path.
- **Why Not AI** IS a dedicated page — the research shows this is THE differentiator. The depth needed (anatomy of AI slop, comparative evidence, contrasting principles) exceeds what a Home section can hold. Home gives the emotional gut punch (AI Graveyard section); this page provides the intellectual conviction.

---

## 2. Navigation Structure

### Header (all pages, sticky)
```
[Landing Craft wordmark]     Showcase   How it works   Pricing   [Tell us about your product →]
```
- Logo links to `/`
- Three text links: Showcase, How it works, Pricing
- One CTA button: "Tell us about your product" (opens contact form modal or scrolls to form section)
- Sticky on scroll, background transitions from transparent → solid after hero
- Mobile: hamburger menu, same links + CTA button

### Footer (all pages)
```
[Landing Craft] — A concierge landing service by propiter.

Showcase   ·   How it works   ·   Pricing   ·   FAQ
Terms   ·   Privacy

© 2026 propiter. Built with Next.js. Deployed on Vercel.
```
- Clean, minimal — no social icons unless requested
- GitHub link (github.com/propiter) inline or as subtle icon
- All links functional

### Mobile nav
- Hamburger icon (top-right)
- Slide-in panel from right
- Links: Showcase, How it works, Pricing, FAQ
- CTA button: "Tell us about your product" (full-width, prominent)
- Close on link click or X

---

## 3. Home Page — Section Plan

Every section earns its place with a named conversion job and a unique treatment. Order follows
the strategy's conversion flow, but treatments are designed to be **unexpected, alive, and
non-template**.

### Section 1: Hero — "The Death of Prompting"
- **Job:** ATTENTION + DESIRE — capture the frustrated founder in 3 seconds and make the alternative feel inevitable.
- **Unique treatment:** NOT a gradient + text. A dark, atmospheric background with a **signature animated conceptual graphic** — a flowing, organic "craft line" that starts here and evolves across the page. The line is fluid, warm-toned (amber/gold on dark), not the cold teal/cyan of AI-SaaS. It's a visual metaphor for "craft" — not a code snippet, not a UI mockup, not a dot grid. Massive display type in two lines:
  > **Stop prompting.**
  > **Start launching.**
  Subhead (one sentence, anti-slop): "I research your market, design a signature visual, and ship your Next.js landing — deployed, working, yours. First one's free."
  Two buttons: **"Tell us about your product"** (primary, warm accent) + **"See real work"** (ghost, scrolls to showcase section).
- **Imagery:** The signature craft-line animation (generated or hand-coded SVG + Motion). No mockup, no screenshot, no gradient — the line IS the visual.

### Section 2: Social Proof Strip — "They Said It. We Fixed It."
- **Job:** PROOF (problem validation) — prove that the pain is real by citing REAL competitor reviews, before we even introduce our solution.
- **Unique treatment:** A horizontal marquee/scroll of **competitor review quotes** pulled from Product Hunt. NOT our testimonials — we don't have enough yet. Instead, we weaponize the competitions' own user reviews as evidence the problem exists:
  - *"I spent 400 credits in 2 weeks just fixing bugs the AI created."* — Lovable user, Product Hunt
  - *"It rewrites the entire file, breaks your UI/UX structure."* — Bolt.new user, Product Hunt
  - *"v0 is great for UI but stops at the front-end."* — v0 user, Product Hunt
  - *"You can't edit HTML."* — Durable support response
  Each quote card: text + source + platform icon. The section header: **"Founders have been saying this about AI builders since 2024."** This is confident, confrontational, and truthful. It frames our service as the ANSWER to a proven problem.
- **Imagery:** Quote cards on a subtle warm background. No faces — just the words.

### Section 3: The AI Graveyard — "AI Builders Give You This. We Give You This."
- **Job:** DESIRE (visual differentiation) — make the generic problem tangible and the Landing Craft alternative unmistakable.
- **Unique treatment:** Full-width split comparison with scroll-reveal staging. LEFT SIDE: a 2×2 grid of real AI-builder outputs (Lovable, v0, Bolt, Durable) — all sharing the same dark-navy background, teal accent, dot grid, glassmorphism card, centered hero pattern. Labeled: "AI builders." RIGHT SIDE: one expansive Landing Craft result — warm, spacious, signature visual, real product imagery, varied layout. Labeled: "Landing Craft." The AI grid reveals first on scroll (fade in), then the Landing Craft side slides in from the right with more impact and slight delay — the reveal sequence tells the story.
- **Imagery:** Real screenshots. For the AI side: actual Lovable/v0/Bolt/Durable outputs (sourced or recreated faithfully). For Landing Craft: the Pulse landing or the first showcase project.

### Section 4: How It Works — "You Talk. I Research. You Launch."
- **Job:** DESIRE + OBJECTION (demystify the process) — show that this is NOT a prompt-to-template pipeline. The human steps are visible.
- **Unique treatment:** Horizontal 3-panel layout with scroll-locked reveals. Each panel spans ~viewport width on desktop, revealing fully as the user scrolls into it. The background shifts behind each panel.
  - **Panel 1 — You tell us:** Chat bubble mockup + product brief doc. "Describe your product. I ask a few questions. 15 minutes."
  - **Panel 2 — I research + design:** Competitor teardown snippet → keyword map → design tokens → visual system mockup. "I study your market, your competitors, your audience. Then I design a signature visual system that's YOURS — not a template fill-in."
  - **Panel 3 — You launch:** Terminal → deploy → live URL → GitHub repo → working form. "You get a deployed Next.js site, your own GitHub repo, working forms and analytics. It's yours. No lock-in."
- **Imagery:** Mockups of real research artifacts (teardown doc, keyword spreadsheet, design tokens). Deploy terminal screenshot. The artifacts prove the process is real.

### Section 5: The Difference — "Why Not Just Use Lovable or v0?"
- **Job:** PROOF + DESIRE (competitive positioning) — the direct answer to the comparison question. Every cell maps to a messaging pillar.
- **Unique treatment:** Bento grid, 3 cells with varied sizes (one spans 2 columns on desktop). Staggered scroll-reveal.
  - **Cell 1 (large, 2-col span): "Researched, not templated."** Mockup of a competitor teardown + keyword map + audience profile. "Before I open a code editor, I study your market. AI builders skip this — it's why their output looks like everyone else's."
  - **Cell 2: "Real code. Yours."** GitHub repo screenshot showing standard Next.js structure. "You get a real Next.js site in YOUR GitHub repo. Hire a dev next month? They know exactly what they're looking at. No proprietary editor, no export button that doesn't work."
  - **Cell 3: "Deployed and working — not a mockup."** Animated sequence: form fills → submit → email notification → analytics fire. "Forms send emails. Analytics track. SEO tags are real. Your landing is LIVE — not a preview behind a login wall."
- **Imagery:** GitHub repo screenshot (real structure), research doc mockups, animated form sequence.

### Section 6: What You Get — The Checklist Wall
- **Job:** DESIRE + OBJECTION (reduce anxiety about "what does 'done' look like?") — tangible deliverables, no ambiguity.
- **Unique treatment:** Bold typographic section. NO cards. Large checkmarks (✓) that animate in with a satisfying reveal on scroll. Each line is a deliverable:
  - ✓ Multi-page Next.js site
  - ✓ Working forms that send real emails
  - ✓ Real SEO — JSON-LD, meta tags, sitemap
  - ✓ Your GitHub repo — standard code, not a black box
  - ✓ Deployed on Vercel — live on a URL you can share
  - ✓ Free for your first landing
  The type is large and confident. Background is clean — lets the type do the work. The checkmarks are the only visual flourish — their reveal motion carries the satisfaction.
- **Imagery:** None needed — pure typography.

### Section 7: Proof — Before & After Split
- **Job:** PROOF (transformation evidence) — the most concrete proof possible: here's what it looked like before, here's what it looks like after.
- **Unique treatment:** Full-width interactive **split slider**. LEFT: a real AI-builder output (generic, cramped, obviously AI). RIGHT: the Landing Craft rebuild of the same product (signature, spacious, crafted). The visitor can drag the handle to compare. Below the slider: a testimonial quote (placeholder: "Before Landing Craft, my landing looked like every other SaaS on Product Hunt. After — investors asked who built it." — swap in real quote when available). Data-driven: pulls the #1 showcase project. If no projects exist yet, use the Pulse landing as the "after" and a reconstructed AI-builder equivalent as the "before."
- **Imagery:** Real before/after screenshots. The slider comparison IS the visual.

### Section 8: Pricing — The Free Anchor
- **Job:** ACTION (remove financial objection) + OBJECTION (risk reversal) — the free tier IS the objection handler.
- **Unique treatment:** Single-column, vertical layout. **INVERTED hierarchy:** Free tier is FIRST and LARGEST. Credits and Pro tier are below, more compact. This is deliberately NOT a 3-card side-by-side comparison — that's the template play. The visual says: "Free is the offer. Everything else is optional."
  - **Free ($0):** "Your first landing. Researched, designed, deployed. `*.vercel.app` domain. Working forms, analytics, SEO. Your GitHub repo." + subtle "Start here" marker.
  - **Credits (paid):** "Edits. More landings. Priority queue. Pay-as-you-go."
  - **Pro (paid):** "Custom domain. Ongoing edits. Same-day support."
  The psychology line below each tier distills it: "Risk reversal. You can't lose." / "No subscription. Pay when you need more." / "For founders who are scaling."
- **Imagery:** None — clean typographic layout.

### Section 9: FAQ — Real Objections, Real Answers
- **Job:** OBJECTION (disarm the top 5 reasons a fit buyer wouldn't click).
- **Unique treatment:** Accordion, grouped by theme (Quality, Ownership, Process, Risk). Each question is phrased as the visitor's INTERNAL objection — not a marketing FAQ:
  - "Is this just another AI wrapper?" → "No. I'm a real person. I research your market, design with taste, and write real code. This is not a prompt-to-template pipeline."
  - "What if I hate it — did I waste money?" → "First one's free. You literally cannot lose money. You either get a landing you love, or you walk away with a deployed site at zero cost."
  - "What if I want to leave — am I locked in?" → "No. The code is yours. Standard Next.js in YOUR GitHub repo. Deploy it anywhere. No proprietary editor, no export gate."
  Each answer opens with a direct "Yes." or "No." — no waffling. The full FAQ lives on `/faq`; this section shows the top 4–5 with a link to the full page.
- **Imagery:** None — pure Q&A.

### Section 10: Final CTA — The Concierge Form
- **Job:** ACTION (capture the lead) — this IS the start of the service.
- **Unique treatment:** Full-section form. NOT a button that opens something. The form IS the section. Header: **"Tell us about your product."** Fields: Product name, URL (optional), What it does (textarea, generous), Your email. Submit button: **"Get your free landing."** Below the form: *"I'll review it and respond within 48 hours. No obligation. No credit card. Just a conversation."* Warm, low-pressure, human. The form IS the product interface — filling it out starts the concierge flow.
- **Imagery:** None — the form is the focus.

---

## 4. How It Works Page — Section Plan

### Section 1: Page Hero (simplified)
- **Job:** ATTENTION
- **Treatment:** "How it works." + sub: "3 steps, one human, real code." Compact hero — not the full cinematic treatment of Home. The craft line from Home continues here subtly.

### Section 2: Step 1 — "You tell us about your product."
- **Job:** DESIRE (demystify step 1)
- **Treatment:** Deep-dive into what the intake looks like. Mockup of a product brief form. Sample questions we ask. "15 minutes. That's it." Shows the research brief we produce from the conversation.

### Section 3: Step 2 — "I research your market. Then I design."
- **Job:** PROOF (show the work)
- **Treatment:** Show the actual research ARTIFACTS with mockups: competitor teardown doc, keyword map, audience profile, visual system (color tokens, type scale, spacing). "This is the phase AI builders skip. It's why their output looks generic." Timeline: "2–3 days."

### Section 4: Step 3 — "You receive it. Deployed. Yours."
- **Job:** DESIRE (the payoff)
- **Treatment:** The handoff walkthrough: GitHub repo invite, Vercel deploy link, form test, analytics dashboard. "You own the code. You can deploy it anywhere. Hire a dev next month? They'll know exactly what they're looking at."

### Section 5: FAQ snippet (top 3 process questions)
- **Job:** OBJECTION
- **Treatment:** Same accordion component, filtered to process questions: "How long does it take?" "What do you need from me?" "Can I request changes?"

### Section 6: CTA — Contact form
- **Job:** ACTION
- **Treatment:** Same ContactForm component as Home — identical wiring, consistent experience.

---

## 5. Why It Doesn't Look AI Page — Section Plan

### Section 1: Page Hero
- **Job:** ATTENTION + DESIRE
- **Treatment:** "Why AI landings look the same — and why that matters." Sub: "If your landing looks AI-generated, investors, customers, and peers notice. Here's why AI builders produce the same output, and what craft looks like instead."

### Section 2: The Generic Problem — Evidence
- **Job:** PROOF (validate the problem with data)
- **Treatment:** Real Product Hunt review excerpts, grouped by complaint theme: "Output looks template-y," "Everything looks like shadcn/ui," "I can't make it unique." Each quote sourced and attributed. This is the PROBLEM section — we're showing that this isn't our opinion; it's the market's experience.

### Section 3: Anatomy of an AI Landing — Visual Breakdown
- **Job:** PROOF (make the generic-ness VISIBLE and undeniable)
- **Treatment:** Side-by-side grid of 5 AI-builder outputs (Lovable, v0, Bolt, Framer AI, Durable). Annotated: color palettes (all dark navy + teal/cyan accent), typography (all Inter), layout patterns (all hero→3 cards→CTA), signature tells (dot grid, glassmorphism card, centered everything). The annotations prove the sameness is systematic, not coincidental.

### Section 4: What Craft Looks Like — Contrasting Principles
- **Job:** DESIRE (show the alternative)
- **Treatment:** For each principle (signature visual, market-informed design, scroll-reactive motion, real imagery, intentional whitespace), show a Landing Craft example that BREAKS the AI pattern. Side-by-side with the generic equivalent. This is the SOLUTION section — each principle has a visual counter-example.

### Section 5: The Research Difference
- **Job:** PROOF + DESIRE
- **Treatment:** "AI builders start with a template. I start with your market." Mockup of a real research phase: competitor analysis, keyword mining, audience profiling. Show how RESEARCH decisions flow into DESIGN decisions. "The reason AI output looks generic isn't the model — it's that the model never studied YOUR market."

### Section 6: Side-by-Side Gallery
- **Job:** PROOF (more evidence)
- **Treatment:** 2–3 full-width before/after comparisons (AI-builder output vs Landing Craft rebuild). Data-driven from the showcase array. Each pair has a brief caption about what changed and why.

### Section 7: CTA — "Don't settle for generic."
- **Job:** ACTION
- **Treatment:** ContactForm component. Header: "Don't settle for generic. Tell us about your product." Same component, same wiring.

---

## 6. Showcase Page — Section Plan

### Section 1: Page Hero
- **Job:** ATTENTION
- **Treatment:** "Real landings. Real craft." + sub: "Every landing shown was researched, designed, and deployed by Landing Craft. No templates. No AI autocomplete. Just real work."

### Section 2: Filter bar
- **Job:** DESIRE (help visitors find relevant examples)
- **Treatment:** Tag-based filter: [All] [SaaS] [Indie Hacker] [Agency Client]. Click to filter the grid below. Client-side, instant.

### Section 3: Showcase grid
- **Job:** PROOF + DESIRE
- **Treatment:** Bento-grid layout, data-driven from `src/lib/showcase-data.ts`. Each card: full-bleed project screenshot (dominant), project name, tag badge, one-line description, "Built for [client type]" note. Cards have varied aspect ratios for visual rhythm. Hover: subtle scale + glow. Click: opens lightbox modal with full-size screenshot + project details + live URL link.
- **Imagery:** Real project screenshots — the primary visual element.

### Section 4: Empty state (if no projects yet)
- **Job:** HONESTY (don't fake it)
- **Treatment:** "Your landing could be here." + ContactForm component. "Be the first. Tell us about your product — get it free." This is honest and turns the emptiness into a conversion opportunity.

### Section 5: CTA — "Want yours here?"
- **Job:** ACTION
- **Treatment:** ContactForm component, same as everywhere.

---

## 7. Pricing Page — Section Plan

### Section 1: Page Hero
- **Job:** ATTENTION + OBJECTION
- **Treatment:** "First one's free. Always." + sub: "Pay only when you need more. No subscription. No commitment."

### Section 2: Tier display
- **Job:** DESIRE + ACTION
- **Treatment:** Single-column vertical layout, same inverted hierarchy as Home Pricing section — Free first, largest. Same component. Consistent treatment across Home and Pricing page.

### Section 3: What's included in every landing
- **Job:** OBJECTION (clarify "what do I actually get")
- **Treatment:** The same Checklist component from Home, repeated here for visitors who land directly on Pricing.

### Section 4: Pricing FAQ (top 3)
- **Job:** OBJECTION
- **Treatment:** Accordion: "What does 'free' actually include?" "How do credits work?" "Can I upgrade later?"

### Section 5: CTA
- **Job:** ACTION
- **Treatment:** ContactForm component.

---

## 8. FAQ Page — Section Plan

### Section 1: Page Hero
- **Job:** ATTENTION
- **Treatment:** "Real questions. Real answers." No marketing intro — just the FAQ.

### Section 2: FAQ accordion — grouped
- **Job:** OBJECTION (handle every objection the research surfaced)
- **Treatment:** Accordion component, grouped by theme:
  - **Quality:** "Is this just another AI wrapper?" "How is this different from Lovable?" "What if it looks generic?"
  - **Ownership:** "Do I own the code?" "What if I want to leave?" "Can I hire a dev to work on it later?"
  - **Process:** "How long does it take?" "What do you need from me?" "Can I request changes?"
  - **Risk:** "What if I hate it?" "Is the free landing really free?" "What's the catch?"
  - **Pricing:** "How do credits work?" "What does Pro include?" "Can I cancel anytime?"
  - **Technical:** "Is it really Next.js?" "Can I use my own domain?" "Do forms really work?"
  Every answer: direct, anti-slop, evidence-backed where possible. Data-driven from `src/lib/faq-data.ts`.

### Section 3: CTA
- **Job:** ACTION
- **Treatment:** "Still have questions? Tell us about your product and I'll answer personally." + ContactForm.

---

## 9. Terms & Privacy Pages — Section Plan

Both pages share the same minimal structure:

### Section 1: Page title
- **Job:** IDENTIFICATION
- **Treatment:** "Terms of Service" / "Privacy Policy" — centered, large type, clean.

### Section 2: Legal content
- **Job:** COMPLIANCE
- **Treatment:** Single-column, readable width (max-w-prose), clean typography. No marketing, no CTAs beyond footer. Content is template legal text with `<TERMS TO REVIEW>` / `<PRIVACY TO REVIEW>` placeholders for customization by legal counsel.
- **SEO:** Both pages get `<meta name="robots" content="noindex, follow">` — they exist for compliance, not ranking.

---

## 10. Component Inventory — Shared Components

| Component | File path | Variants | Used on |
|-----------|-----------|----------|---------|
| **Nav** | `src/components/nav.tsx` | Desktop (horizontal), Mobile (slide-in panel) | All pages |
| **Footer** | `src/components/footer.tsx` | — | All pages |
| **CTAButton** | `src/components/cta-button.tsx` | `primary` (filled, warm accent), `ghost` (outlined) | Home hero, final CTA, nav, various |
| **ContactForm** | `src/components/contact-form.tsx` | Inline (section), Modal (floating CTA) | Home final CTA, How It Works, Why Not AI, Showcase, Pricing, FAQ, floating CTA |
| **FloatingCTA** | `src/components/floating-cta.tsx` | Appears after scroll past hero, opens ContactForm in modal | All pages (conditionally) |
| **SectionWrapper** | `src/components/section-wrapper.tsx` | `default`, `narrow`, `full-bleed` | All sections |
| **ShowcaseCard** | `src/components/showcase-card.tsx` | Grid card, Lightbox detail | Showcase, Home proof section |
| **PricingTier** | `src/components/pricing-tier.tsx` | `free` (expanded), `credits`, `pro` | Home pricing, Pricing |
| **FAQAccordion** | `src/components/faq-accordion.tsx` | Single item, Group (with theme headings) | Home FAQ, FAQ page, How It Works, Why Not AI |
| **BeforeAfterSlider** | `src/components/before-after-slider.tsx` | Interactive split comparison | Home proof, Why Not AI |
| **BentoGrid / BentoCell** | `src/components/bento-grid.tsx` | Varied span sizes | Home "The Difference" |
| **ChecklistItem** | `src/components/checklist-item.tsx` | Animated checkmark + text | Home "What You Get," Pricing |
| **TestimonialQuote** | `src/components/testimonial-quote.tsx` | Competitor quote, Client testimonial | Home social proof strip, Home proof |
| **MarqueeStrip** | `src/components/marquee-strip.tsx` | Auto-scroll horizontal band | Home social proof strip |
| **CraftLine** | `src/components/craft-line.tsx` | Signature animated SVG | Home hero, How It Works hero, Why Not AI hero |
| **TimelinePanel** | `src/components/timeline-panel.tsx` | Scroll-locked reveal panel | How It Works |

---

## 11. Data Flow — Static vs Dynamic

### Static data (TypeScript modules, build-time)

| Data file | Exports | Consumed by |
|-----------|---------|-------------|
| `src/lib/showcase-data.ts` | `ShowcaseProject[]` — array of projects with `id, title, slug, tag, clientType, description, imagePath, liveUrl?, repoUrl?, buildDate` | Showcase page, Home proof section, Why Not AI side-by-side gallery |
| `src/lib/pricing-data.ts` | `PricingTier[]` — array of tier objects with `name, price, features[], ctaText, highlight` | Home pricing section, Pricing page |
| `src/lib/faq-data.ts` | `FAQGroup[]` — array of groups with `theme, questions[]` (each: `question, answer`) | Home FAQ section, FAQ page, various FAQ snippets |
| `src/lib/nav-data.ts` | Nav link definitions | Nav component |
| `src/lib/site-config.ts` | Site name, default meta, social URLs | Layout metadata, footer, SEO |

### Dynamic / runtime

| Feature | Mechanism | Details |
|---------|-----------|---------|
| **Contact form submission** | Client component → `POST /api/contact` → server-side `POST` to `NEXT_PUBLIC_FORM_ENDPOINT` | The API route is a thin proxy — reads the endpoint URL from env var, forwards the form payload. This keeps the actual endpoint configurable (could be a Discord webhook, Resend, n8n, etc.) without touching client code. |
| **Showcase filtering** | Client-side, `useState` + `filter()` | Instant — no server round-trip. The showcase array is small enough for client-side filtering. |
| **FAQ accordion** | Client component, `useState` for open/close | Single-item open at a time (accordion pattern). |
| **Before/After slider** | Client component, drag/click interaction | Pure client-side. |
| **Floating CTA** | Appears after scrolling past hero section. Uses Intersection Observer. | Opens ContactForm in a modal. |

### Environment variables
| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_FORM_ENDPOINT` | Yes | URL the `/api/contact` route POSTs to. Abstracts the actual notification backend. |
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical URL for SEO (OpenGraph, JSON-LD, sitemap). Falls back to Vercel's `VERCEL_URL`. |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics 4 measurement ID. Only wired if present. |

---

## 12. URL Structure & Routing

All pages use Next.js App Router file-based routing:

```
src/app/
├── layout.tsx              → Root layout (nav, footer, fonts, metadata)
├── page.tsx                → Home (/)
├── globals.css             → Tailwind theme
├── how-it-works/
│   └── page.tsx            → /how-it-works
├── why-not-ai/
│   └── page.tsx            → /why-not-ai
├── showcase/
│   └── page.tsx            → /showcase
├── pricing/
│   └── page.tsx            → /pricing
├── faq/
│   └── page.tsx            → /faq
├── terms/
│   └── page.tsx            → /terms
├── privacy/
│   └── page.tsx            → /privacy
└── api/
    └── contact/
        └── route.ts        → POST /api/contact
```

**No redirects needed.** All URLs are clean, descriptive, and match the nav labels.

**Canonical URLs:** Every page has a self-referencing `<link rel="canonical">` pointing to its own `NEXT_PUBLIC_SITE_URL + pathname`.

**404 page:** Custom `not-found.tsx` with a link back to Home and the contact form — turns a dead end into a conversion opportunity.

---

## 13. SEO Architecture — Per-Page Keyword Targets

Grounded in `landing/research.md` Section 3 (Keyword & Intent Research).

### Home (`/`)
| Layer | Keywords |
|-------|----------|
| **Primary** | "concierge landing page service", "landing page that doesn't look AI", "custom landing page without agency" |
| **Secondary** | "human made landing page vs AI", "get landing page built for me", "landing page service", "stop prompting AI landing" |
| **Title tag** | Landing Craft — Concierge Landing Service. First One Free. |
| **Meta description** | Your landing, researched and crafted by a human. Shipped as real Next.js code you own — deployed, working, first one free. Not another AI template. |
| **H1** | Stop prompting. Start launching. |

### How It Works (`/how-it-works`)
| Layer | Keywords |
|-------|----------|
| **Primary** | "concierge landing process", "how landing craft works" |
| **Secondary** | "custom landing page workflow", "landing page research process", "how a landing page is built" |
| **Title tag** | How Landing Craft Works — 3 Steps, One Human, Real Code |
| **Meta description** | You tell us about your product. We research your market and design a signature visual. You receive a deployed Next.js landing. 3 steps, one human. |

### Why Not AI (`/why-not-ai`)
| Layer | Keywords |
|-------|----------|
| **Primary** | "why do AI websites look generic", "AI landing page not looking AI", "AI builder generic output fix" |
| **Secondary** | "how to make AI website not look AI", "why AI generated websites look the same", "AI generated website looks bad", "landing page not AI looking" |
| **Title tag** | Why AI Landings Look Generic — and How Landing Craft Is Different |
| **Meta description** | AI builders produce the same dark-navy, teal-accent, dot-grid landing every time. Here's why — and what human-crafted landings look like instead. |

### Showcase (`/showcase`)
| Layer | Keywords |
|-------|----------|
| **Primary** | "landing craft examples", "custom landing page portfolio" |
| **Secondary** | "real code landing page examples", "concierge landing showcase", "landing page that doesn't look like a template" |
| **Title tag** | Landing Craft Showcase — Real Landings, Real Craft |
| **Meta description** | Every landing shown was researched, designed, and deployed by Landing Craft. Real Next.js code, real taste, no templates. |

### Pricing (`/pricing`)
| Layer | Keywords |
|-------|----------|
| **Primary** | "landing page service pricing", "concierge landing cost" |
| **Secondary** | "custom landing page free trial", "landing craft pricing", "landing page service cost 2026" |
| **Title tag** | Landing Craft Pricing — First One Free. Pay Only When You Need More. |
| **Meta description** | First landing free ($0, deployed on *.vercel.app). Credits for edits and more landings. Pro for custom domains and ongoing support. No subscription lock-in. |

### FAQ (`/faq`)
| Layer | Keywords |
|-------|----------|
| **Primary** | "landing craft FAQ", "concierge landing questions" |
| **Secondary** | "is landing craft an AI builder", "do I own my landing page code", "landing craft review" |
| **Title tag** | Landing Craft FAQ — Real Questions, Real Answers |
| **Meta description** | Is this an AI wrapper? Do I own the code? What if I hate it? Real answers to the real questions founders ask before getting a landing built. |

### Terms & Privacy (`/terms`, `/privacy`)
- **Both:** `<meta name="robots" content="noindex, follow">`
- **Title tags:** "Terms of Service — Landing Craft" / "Privacy Policy — Landing Craft"
- **No keyword targeting** — these exist for compliance, not ranking.

### Sitemap structure
- Auto-generated at `/sitemap.xml` (Next.js `sitemap.ts`). All pages except `/terms` and `/privacy` included.
- Priority: Home (1.0), Showcase / How It Works / Why Not AI / Pricing (0.8), FAQ (0.6).
- `robots.txt`: Allows all, points to sitemap.

### JSON-LD
- Home: `Organization` schema (propiter, with sameAs pointing to GitHub)
- Showcase: `ItemList` schema (the project array)
- FAQ: `FAQPage` schema (the question/answer pairs)
- Pricing: `Product` schema (the service offering)
- All pages: `BreadcrumbList` schema

---

## 14. Summary — Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| **8 pages, not more** | Every page earns its place against a named conversion job. No blog (yet), no About (propiter IS the brand), no Contact (the form IS the contact page). |
| **Why Not AI is a dedicated page** | The anti-generic differential is THE moat. It needs depth beyond what a Home section can carry. Home gives the emotional gut punch; this page gives the intellectual conviction. |
| **Home leads with competitor pain, not our promise** | The Social Proof Strip + AI Graveyard sequence confronts the problem FIRST before introducing the solution. This inverts the standard "here's what we do" hero and makes the case undeniable. |
| **Inverted pricing hierarchy** | Free tier is the HERO, not the footnote. This visually communicates "the free offer is real" more powerfully than any copy could. |
| **ContactForm is the ONE CTA component** | Same component, same wiring, 4 placements (Home final, How It Works, floating, various page CTAs). Consistency reduces cognitive load. |
| **Showcase is data-driven from day one** | Even if the array starts with 1 project, the infrastructure scales. Adding a project = adding an object to the array. |
| **API route as thin proxy** | `/api/contact` doesn't contain business logic — it forwards to `NEXT_PUBLIC_FORM_ENDPOINT`. This keeps the backend swappable without touching client or API code. |
| **Legal pages get noindex** | They exist for compliance, not ranking. They should not compete with the marketing pages in search. |

# Landing Craft — Visual Design System

**Date:** June 17, 2026
**Grounded in:** `landing/research.md` + `landing/strategy.md` + `landing/architecture.md`
**References:** `alive-not-generic.md`, `assets.md`, `animation-levels.md`
**Stack:** Next.js 16 + Tailwind v4 (CSS `@theme`, no `tailwind.config.ts`) + TypeScript
**Motion intensity:** `medium` (default per style profile)

---

## 0. Design Brief — The Signature Concept

**Aesthetic direction:** *Warm craft, dark ground.* Three adjectives: **warm**, **intentional**, **human**.

The AI-SaaS default is dark-navy + teal/cyan accent + Inter + dot grid + glassmorphism + centered 3-card layout. We break EVERY one of these. This site lives in the same dark space but with an entirely different emotional temperature — it feels like a warm studio, not a cold server room.

**Reference points:**
- **Linear** — precise, generous whitespace, product-as-hero, subtle scroll reveals
- **Headroom** — warm accent on dark ground, bento grids, real product screenshots, scroll-reactive
- **Vercel** — signature animated conceptual graphic in the hero, mood + motion before a word is read

**Core philosophy:** If the hero could belong to any AI-SaaS landing, it's generic. This site's hero belongs to Land Craft and NO ONE else.

---

## 1. Visual Signature — The Craft Line

### What it is

A fluid, organic, hand-drawn-feeling SVG `<path>` that runs through the site. It's a single continuous line — warm amber-to-gold gradient, variable stroke width (2px → 5px → 2px) — that behaves like calligrapher's ink on warm dark paper. It is the ANTI-template: no two landings would share the same craft-line gesture.

### Where it appears and how it behaves

| Location | Treatment | Motion |
|----------|-----------|--------|
| **Hero** | The craft line sweeps from the bottom-left, rises upward and rightward behind the headline in a confident, elegant curve. It IS the hero visual — no mockup, no gradient, no screenshot. The line IS the image. | GSAP `drawSVG` on page load (1200ms, ease-out-expo). Parallax on scroll — the line drifts slightly as you scroll down, creating depth. |
| **Section dividers** | A subdued horizontal variant of the craft line appears as a section separator — a gentle wave, not a straight line. `opacity: 0.15`, amber-toned. Appears between every 2–3 sections to maintain the motif without overusing it. | Fades in on scroll-in. No draw animation — just presence. |
| **Card accents** | A tiny craft-line flourish (like a calligraphic underscore, 40px wide) appears under key card headings on hover. Used on: The Difference bento cards, Pricing Free tier card, Showcase card hover state. | Draws in on hover (300ms, ease-out-expo). |
| **CTA button hover** | A miniature craft line slides in below the CTA text on hover — 60px wide, warm gold. | Slides in from left (200ms). |
| **Footer** | The craft line completes its journey here — a resolved, grounded form at the bottom of the page. Subtle, small. | Fades in on scroll. |

### What it communicates

- **Hand-crafted, not machine-generated.** The irregular, organic curve is the opposite of the rigid, predictable geometry of AI output.
- **Human presence.** A line drawn by a person. A signature. A mark of the maker (propiter).
- **Warmth on dark ground.** The amber-gold gradient against the warm black background = warmth, not cold.
- **Continuity.** The recurring motif binds the page together — every section belongs to the same story.

### Technical implementation

- One master SVG component `<CraftLine>` with `variant` prop: `hero`, `divider`, `ornament`, `footer`
- The hero variant: an SVG `<path>` with `stroke="url(#craftGradient)"`, `fill="none"`, `stroke-linecap="round"`
- The gradient: `<linearGradient id="craftGradient">` — stops at `#E6A03A` (brand) → `#C5603A` (warm) → `#E6A03A` (brand)
- Variable stroke width achieved via multiple overlapping paths with different stroke widths and opacities, or via a `stroke-width` SVG animation
- GSAP `drawSVG` plugin for the reveal animation (available in GSAP free)
- Generated as a crafted SVG file: `public/images/craft-line-hero.svg` — the build phase renders it inline in the component

---

## 2. Color System

### Design rationale

The AI-SaaS default is **dark navy (#0a0a1a, #0f172a) + teal/cyan accent**. This IS what every Lovable/v0/Bolt output looks like. We escape this by:

1. **Dark ground with WARM undertones** — `#171613` is a very dark brown-black, not navy. It has amber/stone undertones instead of blue undertones.
2. **Warm gold-amber accent** — `#E6A03A` is the anti-teal. It says "craft, warmth, premium" not "cloud, server, AI."
3. **Terracotta secondary** — `#C5603A` adds depth. A burnt-earth warmth that prevents monochrome.
4. **Warm off-white text** — `#F2ECE0` (cream-tinted, not sterile #FFFFFF). Feels like warm paper, not a terminal.
5. **Warm grays** — every neutral has amber/brown undertones, not blue/gray cold undertones.

### Primary palette

| Token | Hex | Role | Usage |
|-------|-----|------|-------|
| `--color-brand` | `#E6A03A` | Primary accent — warm gold | CTAs, craft line, highlights, focus rings |
| `--color-brand-hover` | `#D48F2C` | Accent hover/interaction | Button hover, link hover, active states |
| `--color-brand-subtle` | `rgb(230 160 58 / 0.12)` | Accent at low opacity | Selected states, subtle backgrounds, badges |
| `--color-brand-glow` | `rgb(230 160 58 / 0.25)` | Accent glow | Shadow glows, hover glows, craft line aura |
| `--color-warm` | `#C5603A` | Secondary accent — terracotta | Section markers, decorative elements, warmth depth |

### Neutral palette (warm dark)

| Token | Hex | Role |
|-------|-----|------|
| `--color-bg` | `#171613` | Page background |
| `--color-bg-alt` | `#1E1B16` | Alternating section background |
| `--color-surface` | `#252118` | Card background |
| `--color-surface-raised` | `#2E2920` | Elevated surface (modals, dropdowns, nav scroll state) |
| `--color-surface-hover` | `#322D23` | Surface hover state |

### Text (warm, not sterile)

| Token | Hex | Contrast on `#171613` | Role |
|-------|-----|----------------------|------|
| `--color-ink` | `#F2ECE0` | 14.2:1 (AAA) | Primary text — warm off-white |
| `--color-muted` | `#B0A89A` | 6.8:1 (AA) | Secondary text, body on cards |
| `--color-faint` | `#8A8175` | 4.6:1 (AA large) | Tertiary text, placeholders, captions |
| `--color-ink-inverse` | `#171613` | — | Text on brand/accent backgrounds |

### Borders

| Token | Hex | Role |
|-------|-----|------|
| `--color-border` | `#363129` | Default borders — cards, inputs, dividers |
| `--color-border-subtle` | `#2A2620` | Subtle borders — section separators, inner dividers |
| `--color-border-hover` | `#4A4338` | Border hover state |

### State colors

| Token | Hex | Role |
|-------|-----|------|
| `--color-success` | `#5CB878` | Success — form validation, confirmations. Warm-tinted green. |
| `--color-error` | `#E05555` | Error — form validation, destructive actions |
| `--color-focus` | `#E6A03A` | Focus ring — same as brand (visible, accessible) |

### Color usage rules

- **CTA buttons:** `bg-brand` background + `text-ink-inverse` text → `bg-brand-hover` on hover
- **Ghost buttons:** `border border-border` + `text-ink` → `border-brand` + `text-brand` on hover
- **Cards:** `bg-surface` + `border border-border` → `border-brand/20` + `shadow-card-hover` on hover
- **Section alternation:** `bg-bg` → `bg-bg-alt` → `bg-bg` — every other section gets the alt background
- **The craft line:** always uses the brand-to-warm gradient
- **Links in body text:** `text-brand` with `decoration-brand/30 underline-offset-4`
- **Focus rings:** `ring-2 ring-brand ring-offset-2 ring-offset-bg` — always visible, always brand
- **No cold colors anywhere.** Even the error red is warm-tinted, and the success green leans olive.

---

## 3. Typography

### Font choices with rationale

| Role | Font | Rationale |
|------|------|-----------|
| **Headings** | **Playfair Display** (serif) | The anti-Inter. Elegant, warm, human. Serifs signal "craft," "editorial," "intention" — the opposite of the sans-serif, autocompleted look of AI output. Its italic weight is particularly beautiful for emphasis moments ("*researched* and *crafted*"). |
| **Body** | **DM Sans** (sans-serif) | Clean geometric sans with warmth. NOT Inter (the AI default), NOT system-ui. Has a distinctive lowercase 'g' and 'a'. Pairs beautifully with Playfair Display — the serif/sans contrast creates visual hierarchy. |
| **Mono** | **JetBrains Mono** | For code snippets, terminal mockups, GitHub references. Developer-credible but not overused. |

### Font loading

Via `next/font/google` in `src/app/layout.tsx`:
- Playfair Display: weights 400, 500, 600, 700, with `display: 'swap'` and `variable` axis
- DM Sans: weights 400, 500, 600, with `display: 'swap'` and `variable` axis
- JetBrains Mono: weight 400, with `display: 'swap'`

### Type scale (Tailwind v4 `--text-*` tokens)

| Token | Size (rem/px) | Line-height | Weight | Usage |
|-------|---------------|-------------|--------|-------|
| `text-xs` | 0.75rem (12px) | 1.5 | 500 | Labels, badges, captions, legal fine print |
| `text-sm` | 0.875rem (14px) | 1.6 | 400 | Secondary body, nav links, input text, footer |
| `text-base` | 1rem (16px) | 1.7 | 400 | Body text, accordion answers, card descriptions |
| `text-lg` | 1.125rem (18px) | 1.6 | 400 | Large body, testimonial quotes, FAQ questions |
| `text-xl` | 1.25rem (20px) | 1.5 | 400 | Section subheadings, card titles |
| `text-2xl` | 1.5rem (24px) | 1.3 | 500 | Card headings (The Difference), showcase titles |
| `text-3xl` | 2rem (32px) | 1.2 | 600 (Playfair) | Section headings (default) |
| `text-4xl` | 2.5rem (40px) | 1.15 | 600 (Playfair) | Page-level headings, Pricing "$0" |
| `text-5xl` | 4rem (64px) | 1.05 | 700 (Playfair) | Hero secondary line, large section headers |
| `text-6xl` | 5.5rem (88px) | 1.02 | 700 (Playfair) | Hero primary line ("Stop prompting.") |
| `text-7xl` | 7rem (112px) | 0.95 | 700 (Playfair) | Ultra display — used sparingly for one "statement" moment |
| `text-hero-sub` | 1.25rem (20px) | 1.6 | 400 (DM Sans) | Hero subhead — intentionally smaller for contrast with massive headline |

### Typography rules

- **Headings (h1–h3):** Playfair Display. `tracking-tight` (`letter-spacing: -0.02em`). Slightly tighter for display sizes.
- **Body:** DM Sans. `tracking-normal`. Generous line-height (1.6–1.7) for readability.
- **Emphasis moments:** Use Playfair Display *italic* (`font-display italic`) for 1–3 word emphasis — never bold. Italic says "nuance, craft." Bold says "shouting, template."
- **Anti-slop rule:** NO uppercase labels. NO monospace for headings. NO text-centering as default. Left-aligned with intentional asymmetry.
- **Typography-only sections** (Checklist Wall, FAQ): Let the type breathe. Large headings, generous line-height, no competing visuals.

---

## 4. Spacing & Layout

### Base unit

`--spacing: 0.25rem` (4px). All spacing derived from this unit via Tailwind's scale.

### Section vertical rhythm

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-section` | 8rem (128px) | Default section padding (`py-section`) |
| `--spacing-section-lg` | 10rem (160px) | Hero section (`py-section-lg`) |
| `--spacing-section-sm` | 6rem (96px) | Dense sections: FAQ, Checklist, Footer (`py-section-sm`) |
| `--spacing-section-xs` | 4rem (64px) | Minimal sections: Legal pages, page-level heroes (`py-section-xs`) |

### Container widths

- **Default:** `max-w-7xl` (80rem / 1280px) with `mx-auto` and `px-6 md:px-8 lg:px-12`
- **Narrow (prose sections):** `max-w-3xl` (48rem / 768px) for FAQ answers, legal content, text-heavy sections
- **Wide (bento, showcase):** `max-w-[90rem]` for bento grids that need more breathing room
- **Full-bleed:** No max-width, `px-0` — used for the AI Graveyard split, Before/After slider, Marquee strip

### Grid system

12-column CSS Grid based. Gap: `gap-8` (2rem) between cards/columns. Bento grids use `grid-cols-12` with varied `col-span-*` values:
- Large feature cells: `col-span-7` or `col-span-5`
- Small cells: `col-span-5` or `col-span-4`
- Full-width cells: `col-span-12`

### Section layout patterns (varied — NOT template)

| Section | Width | Layout | Background |
|---------|-------|--------|------------|
| Hero | Full-bleed | Asymmetric split: craft line (left 45%) + typography (right 55%) | `bg-bg` |
| Social Proof Strip | Full-bleed | Horizontal marquee | `bg-bg` (continuous from hero) |
| AI Graveyard | Full-bleed | Split: 2×2 grid (left 50%) + single large (right 50%) | `bg-bg-alt` |
| How It Works | Full-bleed | Horizontal 3-panel with scroll-locked reveals | `bg-bg` |
| The Difference | `max-w-7xl` | Bento grid (12-col), staggered reveals | `bg-bg-alt` |
| What You Get | `max-w-3xl` | Centered typography column — but left-aligned text | `bg-bg` |
| Before & After | Full-bleed | Split slider, full width | `bg-bg-alt` |
| Pricing | `max-w-3xl` | Single-column vertical (inverted hierarchy) | `bg-bg` |
| FAQ | `max-w-3xl` | Accordion list | `bg-bg-alt` |
| Final CTA | `max-w-3xl` | Centered form block | `bg-bg` |
| Footer | `max-w-7xl` | 3-column grid | `bg-bg-alt` |

### What gives it "crafted" feeling

1. **Generous, intentional whitespace.** Sections breathe. `py-section` (128px) is the default — that's a lot of breathing room. Nothing is cramped.
2. **Asymmetry.** The hero is an asymmetric split. Bento cells have varied spans. Not everything is centered.
3. **Varied section widths.** Full-bleed → contained → full-bleed → narrow → contained. The rhythm of width variation is part of the craft. A template would use the same container width for every section.
4. **No 3-card grid repeat.** The only grid with 3 equal items is The Difference bento — but even that uses varied spans, not 3 identical `col-span-4` cards.
5. **The craft line as spatial punctuation.** It marks transitions with an organic gesture, not a `<hr>`.

---

## 5. Component Style Guide

### CTAButton (Primary)

```
Appearance:
  background: var(--color-brand) → #E6A03A
  text: var(--color-ink-inverse) → #171613
  font: font-body, weight-medium (500)
  size: px-8 py-4 (32px × 16px), text-lg on hero; px-6 py-3 (24px × 12px), text-base elsewhere
  border-radius: rounded-lg (0.625rem — slightly rounder than default, not pill)
  border: none
  shadow: none (default)

States:
  hover: bg-brand-hover, scale(1.02), shadow-glow (warm brand glow), craft-line ornament slides in below text
  active: scale(0.98)
  focus: ring-2 ring-brand ring-offset-2 ring-offset-bg
  disabled: opacity-50, cursor-not-allowed, no hover effects

Animation:
  transition: all 0.3s var(--ease-out-expo)
  hover craft line: slides from left, 200ms, ease-out-expo
```

### CTAButton (Ghost / Secondary)

```
Appearance:
  background: transparent
  text: var(--color-ink)
  font: font-body, weight-medium (500)
  size: same as primary
  border-radius: rounded-lg
  border: 1px solid var(--color-border)

States:
  hover: border-brand, text-brand, bg-brand-subtle (very faint warm tint)
  active: scale(0.98)
  focus: ring-2 ring-brand ring-offset-2 ring-offset-bg
  disabled: opacity-40, cursor-not-allowed
```

### SectionWrapper

```
Props:
  width: 'default' | 'narrow' | 'wide' | 'full-bleed'
  background: 'bg' | 'bg-alt' | 'none'

Implementation:
  default: <section class="py-section px-6 md:px-8 lg:px-12 max-w-7xl mx-auto {bgClass}">
  narrow:  <section class="py-section px-6 md:px-8 max-w-3xl mx-auto {bgClass}">
  wide:    <section class="py-section px-6 md:px-8 lg:px-12 max-w-[90rem] mx-auto {bgClass}">
  full-bleed: <section class="py-section {bgClass}"><div class="px-0">...</div></section>

Background alternation pattern down the page:
  bg → bg → bg-alt → bg → bg-alt → bg → bg-alt → bg → bg-alt → bg → bg-alt
  (Hero + Social Proof = continuous bg; AI Graveyard = bg-alt; and so on)
```

### Card

```
Appearance:
  background: var(--color-surface)
  border: 1px solid var(--color-border)
  border-radius: rounded-xl (0.75rem)
  padding: p-6 md:p-8
  shadow: none (flat by default — let the border do the work)

States:
  hover: translateY(-4px), scale(1.01), border-brand/20, shadow-card-hover
  No hover on touch devices (use @media (hover: hover) to scope)

Animation:
  transition: all 0.3s var(--ease-out-expo)
```

### ContactForm

```
Input fields:
  background: var(--color-bg-alt) → #1E1B16
  border: 1px solid var(--color-border)
  border-radius: rounded-lg (0.625rem)
  padding: px-4 py-3
  text: text-ink, font-body, text-base
  placeholder: text-faint, font-body

  States:
    focus: border-brand, ring-2 ring-brand/30, outline-none
    error: border-error, ring-1 ring-error/30
    disabled: opacity-50, cursor-not-allowed

Textarea:
  same as input, plus: min-height: 120px, resize: vertical

Label:
  text-sm, font-medium, text-muted, mb-1.5
  Not uppercase (anti-slop rule)

Submit button:
  CTAButton (primary), full-width on mobile, auto-width on desktop

Form layout:
  Stacked vertically, gap-6 between fields
  Submit button: mt-8
  Below form: text-xs, text-faint — "No obligation. No credit card. I'll respond within 48 hours."
```

### Navigation (Nav)

```
Desktop:
  Position: sticky top-0 z-50
  Initial state: bg-transparent, no border
  Scroll state (>100px): bg-surface-raised/90 backdrop-blur-md, border-b border-border-subtle
  Transition: transition-all duration-300
  Height: h-16 (64px)
  Layout: flex items-center justify-between, px-6 md:px-8 lg:px-12
  Logo: left, links to /
  Nav links: center or right — Showcase, How it Works, Pricing — text-sm, font-body, text-muted
    → hover: text-ink
  CTA: rightmost — CTAButton (primary, compact: px-5 py-2, text-sm)

Mobile (<lg):
  Hamburger: top-right, 44×44px tap target, 3-line icon → X on open
  Panel: slide-in from right, fixed, full-height, w-[300px] max-w-[80vw]
    Background: bg-surface-raised, border-l border-border
    Links: stacked vertically, py-3 px-6, text-base, text-ink
    CTA: full-width at bottom of panel
    Backdrop: bg-black/40, closes on click
  Transition: transform + opacity, 300ms ease-out-expo
```

### Footer

```
Layout: 3-column grid on desktop, stack on mobile
  Col 1: Logo (small) + "A concierge landing service by propiter." (text-sm, text-muted)
          + GitHub link (text-sm, text-faint → hover:text-ink)
  Col 2: Nav links — Showcase · How It Works · Pricing · FAQ (text-sm, text-muted → hover:text-ink)
  Col 3: Empty or small craft-line ornament (subtle, decorative closure)

Separator: Not a hard <hr>. Instead, a small craft-line ornament (40px wide) centered above the footer content, or a subtle gradient line.

Bottom: "© 2026 propiter. Built with Next.js. Deployed on Vercel." — text-xs, text-faint, centered or left-aligned
Padding: py-16
Background: bg-bg-alt
```

### PricingCard (Tier)

```
Free tier (largest, first):
  Card: py-10 px-8 md:px-10, border-brand/20 (subtle warm border), bg-surface
  Price: "Free" in Playfair Display, text-5xl, text-brand, leading-none
  Sub: "$0 — your first landing." in text-sm, text-muted
  Features: list with checkmarks, text-sm, text-muted, mt-6 space-y-3
  Psychology line: "Risk reversal. You can't lose." — text-xs, text-brand, italic, mt-4
  Badge: "Start here" — text-xs, bg-brand-subtle, text-brand, rounded-full, px-3 py-1, positioned top-right

Credits tier (compact):
  Card: py-8 px-6, border-border, bg-surface
  Price: "Credits" in Playfair Display, text-3xl, text-ink
  Sub: "Pay-as-you-go." in text-sm, text-muted
  Features: same style, fewer items
  Psychology line: "No subscription. Pay when you need more."

Pro tier (compact):
  Card: py-8 px-6, border-border, bg-surface
  Price: "Pro" in Playfair Display, text-3xl, text-ink
  Sub: "For founders scaling up." in text-sm, text-muted
  Features: same style
  Psychology line: "Priority support. Same-day response."
```

### ShowcaseCard

```
Grid card:
  Aspect ratio: varied — 4:3, 16:9, or 1:1 depending on grid position
  Layout: full-bleed screenshot fills the card, with subtle browser-chrome frame (just rounded corners + shadow, not a heavy mockup frame)
  Label: positioned bottom-left, fades in on hover — project name in text-sm, font-body, text-ink
  Badge: top-left, small tag — e.g., "SaaS", "Indie Hacker" — text-xs, bg-brand-subtle, text-brand, rounded-full
  Border: border-border
  Border-radius: rounded-xl

States:
  hover: scale(1.02), shadow-card-hover, border-brand/30, label appears
  No hover on touch devices

Lightbox modal (on click):
  Full-size screenshot, project details (name, client type, description, live URL + repo URL links)
  Modal: bg-surface-raised, rounded-2xl, max-w-4xl, centered
  Backdrop: bg-black/60, closes on click
  Close button: top-right, 44×44px tap target
```

### FAQAccordion

```
Each item:
  Border-bottom: 1px solid var(--color-border-subtle)
  Question: py-5 pr-12 (space for chevron), text-lg, font-body, weight-medium, text-ink, cursor-pointer
  Chevron: right-aligned (absolute right-0 top-5), 20×20px, text-muted
    Open state: rotate-180, text-brand
    Transition: transform 0.2s var(--ease-out-expo)
  Answer: pb-5, text-base, font-body, text-muted, leading-relaxed
    Open state: max-height transition, fade in

States:
  hover (question): text-brand (warm shift)
  open (question): text-brand, chevron rotated
  One item open at a time (accordion pattern — opening one closes others)

Group headings (FAQ page only):
  text-xs, font-body, weight-medium, text-faint, uppercase tracking-wide, mb-4
  Separates groups: Quality, Ownership, Process, Risk, Pricing, Technical
```

### MarqueeStrip

```
Container: full-bleed, overflow-hidden, py-8
Track: flex, animate-marquee (CSS animation: translateX from 0 to -50%)
Items: flex-shrink-0, px-4
Item card: bg-surface, border border-border, rounded-lg, p-4, max-w-[320px]
  Quote: text-sm, text-ink, italic, mb-2
  Source: text-xs, text-faint — "— Lovable user, Product Hunt"
Hover: animation pauses (animation-play-state: paused)
Duplicated track: same content twice for seamless loop
```

### BeforeAfterSlider

```
Container: full-bleed, relative, h-[600px] md:h-[700px]
Before side (left): AI-builder output screenshot, full-cover
After side (right): Landing Craft output screenshot, full-cover
Handle: vertical line (2px, bg-brand), with circular grab (24×24px, bg-brand, border-2 border-bg, shadow)
  Position: default at 50%, draggable
  Hover: scale(1.1)
Labels: "Before" (left, text-xs, text-faint, bg-bg/80, px-3 py-1, rounded-full) / "After" (right, same but text-brand)
```

### ChecklistItem

```
Layout: flex items-start gap-4, py-4
Checkmark: inline SVG circle with check path, stroke-brand, 24×24px
  Animate on scroll-in: drawSVG check path (200ms, ease-out-expo), with slight bounce
Text: text-2xl md:text-3xl, font-display (Playfair), text-ink
  "Multi-page Next.js site"
  "Working forms that send real emails"
  etc.

The checkmarks are the ONLY visual flourish — their reveal motion carries the satisfaction. No icons, no cards, no containers. Pure typography + checkmarks.
```

### CraftLine (Signature Component)

```
Props:
  variant: 'hero' | 'divider' | 'ornament' | 'footer'

Hero variant:
  <svg> with viewBox matching the curve's bounding box
  <defs> with <linearGradient> using brand → warm stops
  <path> with stroke="url(#craftGradient)", fill="none", stroke-linecap="round"
  Stroke widths varied: 2px → 5px → 2px via overlapping paths
  Position: absolute or within a container, z-0 (behind content)

Divider variant:
  Horizontal wave, 100% width of container, stroke-width 1.5px
  opacity: 0.15

Ornament variant:
  Small flourish, ~40px wide, stroke-width 2px
  Used as hover accent on cards and CTA button

Footer variant:
  Small resolved form, ~60px wide, centered, stroke-width 2px
```

---

## 6. Imagery & Assets

### Asset philosophy

Every asset either GENERATED (build phase produces it) or PROVIDED (the user swaps it in later with no code change). Nothing ships as a broken `<img>` or a framework default. Nothing is a generic stock photo.

### GENERATE — Build phase produces these

| # | Asset | File path | Description | Method |
|---|-------|-----------|-------------|--------|
| 1 | **Logo / Wordmark** | `public/logo.svg` | A crafted SVG: a minimal geometric "P" mark formed by a continuous warm-gold line (echoing the craft line) + the word "propiter" in Playfair Display. The mark has the same brand-to-warm gradient as the craft line. Swappable — user replaces this file with their own logo, zero code change. | Hand-crafted SVG by build phase |
| 2 | **Favicon (SVG)** | `public/favicon.svg` | The P mark from the logo, isolated. 32×32 viewBox, warm gold gradient. | Derived from logo SVG |
| 3 | **Favicon (ICO)** | `public/favicon.ico` | Multi-size ICO (16, 32, 48) derived from the P mark. | `web-assets` skill: rasterise SVG → ICO via icotool |
| 4 | **Apple Touch Icon** | `public/apple-touch-icon.png` | 180×180, P mark centered on warm-dark background. | `web-assets`: HTML → Playwright screenshot |
| 5 | **PWA Icon 192** | `public/icon-192.png` | 192×192, P mark. | Same method as apple-touch-icon |
| 6 | **PWA Icon 512** | `public/icon-512.png` | 512×512, P mark. | Same method |
| 7 | **OG / Social Card** | `public/og-image.png` | 1200×630. Warm-dark background with the craft line sweeping through. Text: "Landing Craft — Your landing, researched and crafted by a human. First one free." in Playfair Display. | `web-assets`: HTML → Playwright screenshot at 1200×630 |
| 8 | **Craft Line — Hero** | `public/images/craft-line-hero.svg` | The full hero craft line SVG. A sweeping, organic curve from bottom-left to upper-right. Amber-to-gold gradient, variable stroke. ~1200×800 viewBox. | Hand-crafted SVG by build phase |
| 9 | **Craft Line — Divider** | `public/images/craft-line-divider.svg` | Horizontal wave variant. 1200×40 viewBox. 1.5px stroke, 15% opacity. | Derived from hero variant |
| 10 | **Craft Line — Ornament** | `public/images/craft-line-ornament.svg` | Small flourish, 40×16 viewBox. 2px stroke. For card/CTA hover accents. | Derived from hero variant |
| 11 | **AI Graveyard — Mockups (×4)** | `public/images/ai-graveyard/generic-1.jpg` through `generic-4.jpg` | Screenshot-style mockups that faithfully recreate the "generic AI landing" aesthetic: dark-navy backgrounds (#0f172a), teal accents (#0ea5e9, #06b6d4), Inter font, centered hero, dot-grid backgrounds, glassmorphism cards, 3-card-with-icons layout. Each represents a different AI builder style (Lovable, v0, Bolt, Durable). These are INTENTIONALLY generic — they demonstrate the problem. | HTML mockups → Playwright screenshots at 800×600 |
| 12 | **AI Graveyard — Landing Craft Result** | `public/images/ai-graveyard/landing-craft-result.jpg` | A mockup of what a Landing Craft output looks like: warm dark background, Playfair Display headings, the craft line visible, varied layout (not centered 3-cards), real-feeling product imagery. This demonstrates the solution. 800×600. | HTML mockup → Playwright screenshot |
| 13 | **Showcase Placeholder** | `public/images/showcase/placeholder-landing.jpg` | A branded placeholder for the showcase grid — warm dark background with a subtle craft-line element and "Your landing could be here." text. 1200×800. User replaces with real project screenshots. | HTML → Playwright screenshot |
| 14 | **Before Image (Proof section)** | `public/images/before-after/before-generic.jpg` | The "before" side of the proof slider — a generic AI-builder landing. Full-width landscape. 1440×900. | HTML mockup → Playwright screenshot |
| 15 | **After Image (Proof section)** | `public/images/before-after/after-crafted.jpg` | The "after" side — the Landing Craft rebuild. Same dimensions. | HTML mockup → Playwright screenshot |

### PROVIDE — User swaps these in later (no code change)

| # | Asset | File path | Swap instruction |
|---|-------|-----------|-----------------|
| 16 | **Real showcase projects** | `public/images/showcase/project-1.jpg`, `project-2.jpg`, etc. | Replace with 1200×800 screenshots of actual Landing Craft projects. Same filenames, no code change. |
| 17 | **Real before/after** | `public/images/before-after/before-real.jpg`, `after-real.jpg` | Replace the generated mockups with real client before/after comparisons as projects are completed. |
| 18 | **Team/process photos** | `public/images/process/` | Optional — real photos of the research/design process for the How It Works page. Not required for launch. |

### Imagery treatment rules

1. **Screenshots always have context.** Never float a naked screenshot. Frame it with browser chrome (minimal — just the rounded corner shape and a subtle shadow) or place it on a branded surface.
2. **The AI Graveyard mockups must be RECOGNIZABLY generic.** If a visitor who's used Lovable doesn't immediately go "yep, that's exactly what mine looked like," they're not accurate enough.
3. **The Landing Craft result must be RECOGNIZABLY different.** The contrast between the graveyard and the result is THE argument. It must be visually undeniable.
4. **All generated placeholders are BRANDED.** They use the correct colors, the correct fonts, the craft line motif. Even a placeholder says "this is a Landing Craft site."
5. **No stock photography.** No Unsplash. No Pexels. No illustrations of "people pointing at a chart." The only real photos would be propiter's process or actual product screenshots.
6. **`alt` text on every `<img>`.** Descriptive, useful, not keyword-stuffed.
7. **Lazy loading below the fold.** `loading="lazy"` on all images not in the hero.

---

## 7. Motion Plan — Medium Intensity

Per `animation-levels.md`, medium = Lenis smooth scroll + card hover depth + section reveals with movement + stagger + CTA emphasis + one GSAP scroll-scrub moment. All motion respects `prefers-reduced-motion`.

### Stack

- **Motion** (`motion`) — declarative React: `whileInView`, `useScroll`, `useTransform`
- **GSAP** + ScrollTrigger — craft line draw-on animation, scroll-scrub moment
- **Lenis** — smooth momentum scroll (the single biggest "premium feel" upgrade)

### Hero — "The Death of Prompting"

| Element | Animation | Timing |
|---------|-----------|--------|
| **Craft line** | GSAP `drawSVG` — the line draws itself from start to end. `ease: "expo.out"`. Runs on mount. | 1200ms total |
| **Background parallax** | The craft line drifts VERY subtly on scroll — `useScroll` + `useTransform` mapping scroll progress to a small `translateY` (0 → 20px) and slight `rotate` (−1° → 0°). The line feels alive but doesn't distract. | Scroll-linked |
| **Headline line 1** ("Stop prompting.") | `whileInView` — `opacity: 0 → 1`, `y: 20 → 0`. `transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] }`. Starts 200ms after craft line begins drawing. | 600ms, delay 200ms |
| **Headline line 2** ("Start launching.") | Same as line 1, but delay 300ms. | 600ms, delay 500ms |
| **Subhead** | `opacity: 0 → 1`, `y: 20 → 0`. delay 700ms. | 500ms, delay 700ms |
| **CTA buttons** | Staggered: primary first (delay 900ms), ghost second (delay 1000ms). `opacity + y`. | 400ms each |
| **CTA glow pulse** | After all reveals complete, a single soft glow pulse on the primary CTA. `box-shadow` expands and contracts once. Not looping. | 800ms, one-shot |

### Scroll reveals (all sections)

```
Pattern: Motion.div with whileInView, once: true, viewport: { amount: 0.2, margin: '-50px' }

Direction map (varied — not everything from below):
  Cards (left):     opacity: 0, x: -30  →  opacity: 1, x: 0
  Images (right):   opacity: 0, x: 30   →  opacity: 1, x: 0
  Text/headings:    opacity: 0, y: 20   →  opacity: 1, y: 0
  Checklist items:  opacity: 0, y: 15   →  opacity: 1, y: 0 (stagger 80ms)
  FAQ items:        opacity: 0, y: 10   →  opacity: 1, y: 0 (stagger 60ms)
  Pricing cards:    opacity: 0, y: 20   →  opacity: 1, y: 0 (stagger 100ms)
  Footer:           opacity: 0, y: 20   →  opacity: 1, y: 0

Timing:
  duration: 0.5s
  ease: [0.19, 1, 0.22, 1] (ease-out-expo)
  Stagger: 60–100ms between children (via Motion's staggerChildren)
```

### Card hovers

```
transform: translateY(-4px) scale(1.01)
box-shadow: var(--shadow-card) → var(--shadow-card-hover)
border-color: var(--color-border) → var(--color-brand) at 20% opacity
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

Content reveal on hover (optional, not on all cards):
  - Showcase cards: project name label fades in at bottom-left
  - The Difference cards: craft-line ornament appears under heading
  - Pricing Free tier: subtle inner glow intensifies
```

### AI Graveyard reveal sequence (THE dramatic moment)

```
Stage 1 — AI grid (left side, 2×2):
  All 4 mockup cards fade in simultaneously
  Each gets a slight stagger: 50ms
  opacity: 0, scale: 0.95 → opacity: 1, scale: 1
  duration: 400ms each

Pause: 300ms (the visitor absorbs "yes, that IS what AI builders produce")

Stage 2 — Landing Craft result (right side):
  Slides in from the right: x: 60, opacity: 0 → x: 0, opacity: 1
  Slightly larger scale: 0.92 → 1
  duration: 600ms, ease: [0.175, 0.885, 0.32, 1.275] (spring-like, more impact)
  A subtle warm glow appears behind the Landing Craft result

The asymmetry of the reveals (quiet left, confident right) IS the argument.
One-shot. only: 'after' (once: true).
```

### How It Works — scroll-locked panels

```
Desktop only (>1024px):
  The 3 panels are positioned horizontally
  As user scrolls, each panel "locks" and reveals fully before the next one comes in
  GSAP ScrollTrigger: pin the section, scrub through panel reveals
  Each panel slides in from the right, full-opacity when centered
  Panel background shifts subtly (warm tone deepens) as panels progress

Mobile: standard vertical stack with scroll reveals (no pinning)
```

### Navigation

```
Scroll state transition:
  background-color: transparent → var(--color-surface-raised) at 90% opacity + backdrop-blur
  border-bottom: none → 1px solid var(--color-border-subtle)
  Trigger: scroll > 100px
  transition: background-color 0.3s ease, border-color 0.3s ease

NOT hide-on-scroll-down. Nav stays visible at all times.
```

### Lenis smooth scroll

```
Enabled globally.
Config:
  duration: 1.2 (slightly relaxed, not sluggish)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))  // expo out
  smoothWheel: true
  smoothTouch: false (respect device defaults)
Disabled under prefers-reduced-motion.
```

### Number counters (if used in future sections)

```
Example: "X landings built" or "Y founders happy"
Animate from 0 to target on scroll-in
duration: 1500ms, ease-out-expo
One-shot, scroll-triggered
```

### Reduced motion fallback (NON-NEGOTIABLE)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
Plus Motion's `useReducedMotion()` hook:
- All `x`, `y`, `scale` transforms → opacity only (or static final state)
- Lenis disabled
- GSAP animations replaced with `gsap.set()` (immediate final state)
- Card hovers: color/opacity changes only, no transform
- Marquee: static display of first items only
- AI Graveyard: both sides visible immediately, no sequence

---

## 8. Responsive Behavior

### Breakpoints (Tailwind defaults)

| Prefix | Min width | Target device |
|--------|-----------|---------------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

### Hero

```
Desktop (lg+):
  Asymmetric split: craft line (left 45%) + typography block (right 55%)
  Display text: 6xl (88px) for "Stop prompting." / 5xl (64px) for "Start launching."
  Subhead: text-hero-sub (20px)
  Two CTA buttons side by side

Tablet (md–lg):
  Craft line becomes more compact, still visible behind text
  Display text: 5xl (64px) → 4xl (40px)
  CTA buttons may stack vertically at narrower tablet widths

Mobile (<md):
  Craft line becomes a smaller, centered SVG above the headline (120px wide)
  Display text: 3xl (32px), but still Playfair Display — the serif does the work
  Subhead: text-base (16px)
  CTA buttons: stacked vertically, full-width, primary first
  Section padding reduces: py-section-lg → py-section (8rem)
  Hero min-height: auto (natural height), not forced 100vh
```

### Navigation collapse

```
Desktop (lg+): Horizontal nav with all links visible
Tablet (<lg): Hamburger menu, slide-in panel from right
Mobile: Same as tablet
```

### Section grid collapse

```
Bento grids:
  Desktop (lg+): full 12-column grid with varied spans
  Tablet (md–lg): 6-column grid (col-span values halved, min 3)
  Mobile (<md): single column, all items stack

Showcase grid:
  Desktop: 3-column bento with varied aspect ratios
  Tablet: 2-column
  Mobile: 1-column

3-panel layouts (How It Works):
  Desktop: horizontal scroll-locked panels (GSAP pinned)
  Tablet/Mobile: vertical stack with standard scroll reveals
```

### Pricing cards

```
All breakpoints: Single-column vertical (inverted hierarchy — Free first, largest)
Desktop: Cards have generous horizontal padding (px-10)
Mobile: Cards full-width, padding reduces (px-6), Free tier still visually prominent through spacing and border treatment
```

### AI Graveyard

```
Desktop (lg+): Side-by-side split — Left: 2×2 grid (4 mockups), Right: single large result
Tablet (md–lg): Same layout but narrower. 2×2 grid items are smaller.
Mobile (<md): Stacks vertically. 2×2 grid on top (still grid, 2 columns), Landing Craft result below (full width). The sequence becomes: see AI mockups, scroll down, see Landing Craft result. The visual argument still works.
```

### Typography scale adjustment

```
Mobile type scale (compared to desktop):
  text-6xl (88px) → text-4xl (40px) in hero
  text-5xl (64px) → text-3xl (32px)
  text-4xl (40px) → text-2xl (24px)
  text-3xl (32px) → text-xl (20px)
  Body and smaller sizes: unchanged for readability

Use Tailwind's responsive prefix:
  text-4xl md:text-5xl lg:text-6xl
```

### Checklist Wall

```
Desktop: Large type (text-2xl to text-3xl), generous spacing between items
Mobile: text-xl, tighter but still breathing
```

---

## 9. Tailwind v4 `@theme` Block

This block goes in `src/app/globals.css`. It defines every token the build phase needs. The build phase MUST reference these tokens via Tailwind utility classes (e.g., `bg-brand`, `text-ink`, `font-display`) — NO hardcoded hex values, NO inline `style={{}}` tokens in components.

```css
@import "tailwindcss";

@theme {
  /* =============================================
     COLORS — Warm, anti-cold, anti-AI-default
     ============================================= */

  /* Brand accent — warm gold (anti-teal) */
  --color-brand: #E6A03A;
  --color-brand-hover: #D48F2C;
  --color-brand-subtle: rgb(230 160 58 / 0.12);
  --color-brand-glow: rgb(230 160 58 / 0.25);

  /* Secondary accent — terracotta warmth */
  --color-warm: #C5603A;

  /* Backgrounds — warm dark, NOT navy */
  --color-bg: #171613;
  --color-bg-alt: #1E1B16;

  /* Surfaces — cards, modals, elevated elements */
  --color-surface: #252118;
  --color-surface-raised: #2E2920;
  --color-surface-hover: #322D23;

  /* Text — warm off-white, not sterile */
  --color-ink: #F2ECE0;
  --color-muted: #B0A89A;
  --color-faint: #8A8175;
  --color-ink-inverse: #171613;

  /* Borders — warm, not cold gray */
  --color-border: #363129;
  --color-border-subtle: #2A2620;
  --color-border-hover: #4A4338;

  /* States */
  --color-success: #5CB878;
  --color-error: #E05555;
  --color-focus: #E6A03A;

  /* =============================================
     TYPOGRAPHY — Fonts
     ============================================= */

  --font-display: "Playfair Display", ui-serif, Georgia, serif;
  --font-body: "DM Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  /* =============================================
     TYPOGRAPHY — Type scale with line-heights
     ============================================= */

  --text-xs: 0.75rem;
  --text-xs--line-height: 1.5;
  --text-sm: 0.875rem;
  --text-sm--line-height: 1.6;
  --text-base: 1rem;
  --text-base--line-height: 1.7;
  --text-lg: 1.125rem;
  --text-lg--line-height: 1.6;
  --text-xl: 1.25rem;
  --text-xl--line-height: 1.5;
  --text-2xl: 1.5rem;
  --text-2xl--line-height: 1.3;
  --text-3xl: 2rem;
  --text-3xl--line-height: 1.2;
  --text-4xl: 2.5rem;
  --text-4xl--line-height: 1.15;
  --text-5xl: 4rem;
  --text-5xl--line-height: 1.05;
  --text-6xl: 5.5rem;
  --text-6xl--line-height: 1.02;
  --text-7xl: 7rem;
  --text-7xl--line-height: 0.95;

  /* Hero subhead — intentionally small for contrast */
  --text-hero-sub: 1.25rem;
  --text-hero-sub--line-height: 1.6;

  /* =============================================
     TYPOGRAPHY — Letter spacing
     ============================================= */

  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.02em;

  /* =============================================
     SPACING — Base unit + section tokens
     ============================================= */

  --spacing: 0.25rem;
  --spacing-section: 8rem;
  --spacing-section-lg: 10rem;
  --spacing-section-sm: 6rem;
  --spacing-section-xs: 4rem;

  /* =============================================
     BORDER RADIUS
     ============================================= */

  --radius-xs: 0.125rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.625rem;
  --radius-xl: 0.875rem;
  --radius-2xl: 1.25rem;
  --radius-3xl: 1.75rem;
  --radius-4xl: 2.25rem;

  /* =============================================
     SHADOWS — Warm undertone (not cold)
     ============================================= */

  --shadow-card: 0 1px 3px rgb(0 0 0 / 0.4), 0 1px 2px rgb(0 0 0 / 0.3);
  --shadow-card-hover: 0 4px 20px rgb(0 0 0 / 0.5), 0 0 30px rgb(230 160 58 / 0.08);
  --shadow-glow: 0 0 40px rgb(230 160 58 / 0.25);
  --shadow-glow-soft: 0 0 60px rgb(230 160 58 / 0.12);

  /* =============================================
     ANIMATION — Easing curves (Motion + GSAP)
     ============================================= */

  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-in-out-expo: cubic-bezier(0.87, 0, 0.13, 1);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* =============================================
     ANIMATION — Durations (for consistency)
     ============================================= */

  --animate-duration-fast: 150ms;
  --animate-duration-base: 300ms;
  --animate-duration-slow: 600ms;
  --animate-duration-reveal: 500ms;
  --animate-duration-hero: 1200ms;
}
```

---

## 10. Design QA Checklist (pre-build gate)

Before the build phase begins, verify:

- [ ] The hero does NOT use a gradient, dot grid, glassmorphism, or a centered 3-card layout
- [ ] The craft line is the hero's visual — not a UI mockup, not a screenshot, not an illustration
- [ ] The accent color is warm gold (`#E6A03A`), NOT teal, cyan, blue, or purple
- [ ] The background is warm dark (`#171613`), NOT navy (`#0a0a1a` or `#0f172a`)
- [ ] Headings use Playfair Display (serif), NOT Inter (sans-serif AI default)
- [ ] Every color is warm-toned — no cold blues, no sterile whites, no GitHub grays
- [ ] Section layout is varied — full-bleed, contained, narrow, bento, NOT the same container repeating
- [ ] No 3-card-with-icons section anywhere — this is the #1 AI template tell
- [ ] All component styles are defined (CTA, card, form, nav, footer, pricing, showcase, FAQ, slider, marquee, checklist)
- [ ] The AI Graveyard has a dramatic, staged reveal sequence
- [ ] Motion plan covers hero, scroll reveals, hovers, AI Graveyard, nav, and reduced-motion
- [ ] The `@theme` block is production-ready with every token named and valued
- [ ] Asset list distinguishes GENERATE from PROVIDE — nothing ships unbranded or broken
- [ ] The site would pass the 5-bar vibe test: cover the logo, and the hero could NOT belong to any other AI-SaaS

---

## Summary

**Aesthetic direction:** Warm craft, dark ground — warm, intentional, human.
**Accent color:** Warm gold `#E6A03A` (brand).
**Type pairing:** Playfair Display (headings, serif) + DM Sans (body, sans-serif).
**Signature visual:** The craft line — a fluid, hand-drawn, amber-to-gold SVG path that runs through the site.
**Motion intensity:** Medium (Lenis + scroll reveals + card hover depth + GSAP scroll-scrub + CTA glow).
**Key differentiator from AI-SaaS:** Everything the AI builders default to — navy backgrounds, teal accents, Inter font, dot grids, glassmorphism, centered 3-card layouts — we systematically invert or replace.

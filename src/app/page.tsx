import HeroSection from "@/components/hero-section";
import GraveyardSection from "@/components/graveyard-section";
import MotionSection from "@/components/motion/motion-section";
import StaggerChildren from "@/components/motion/stagger-children";
import CTAButton from "@/components/cta-button";
import CraftLine from "@/components/craft-line";
import Card from "@/components/card";
import ContactForm from "@/components/contact-form";
import FAQAccordion from "@/components/faq-accordion";
import PricingCard from "@/components/pricing-card";
import ShowcaseCard from "@/components/showcase-card";
import { pricingTiers } from "@/lib/pricing-data";
import { faqGroups } from "@/lib/faq-data";
import { showcaseEntries } from "@/lib/showcase-data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stop prompting. Start launching.",
  description:
    "I research your market, design a signature visual, and ship your Next.js landing — deployed, working, yours. First one's free. Not an AI template. Not a no-code lock-in. Real craft.",
  alternates: {
    canonical: "/",
  },
};

const marqueeQuotes = [
  {
    quote:
      "I spent 400 credits in two weeks just fixing bugs the AI created.",
    source: "Lovable user, Product Hunt review (2025)",
  },
  {
    quote:
      "It rewrites the entire file, breaks your UI/UX structure, and still fails to fix the original problem.",
    source: "Bolt.new user, Product Hunt review (2025)",
  },
  {
    quote:
      "v0 is great for UI but stops at the front-end. You still have to wire everything up yourself.",
    source: "v0 user, Product Hunt review (2025)",
  },
  {
    quote:
      "Durable is a 'no code' solution. We don't offer extensive options for HTML customization.",
    source: "Durable support response (2025)",
  },
  {
    quote:
      "My landing looks AI-generated and I know investors can tell.",
    source: "Indie hacker, X (2025)",
  },
  {
    quote:
      "It gave me a pretty mockup but the deploy was broken. Forms didn't work. Analytics was a lie.",
    source: "AI builder user, multiple platforms (2025)",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD: Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Landing Craft — Concierge Landing Service",
            serviceType: "Landing Page Design & Development",
            provider: {
              "@type": "Person",
              name: "propiter",
            },
            areaServed: "Worldwide",
            description:
              "Concierge landing page service — human-researched, signature-designed, shipped as real Next.js code you own. First one free.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "First landing free — multi-page Next.js site, deployed",
            },
          }),
        }}
      />
      {/* ============================================
          SECTION 1: Hero — GSAP draw line + Motion stagger
          ============================================ */}
      <HeroSection />

      {/* ============================================
          SECTION 2: Social Proof Strip — "They Said It. We Fixed It."
          ============================================ */}
      <MotionSection
        width="full-bleed"
        background="bg"
        spacing="section-sm"
        direction="up"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-8">
          <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight text-balance">
            Founders have been saying this about AI builders since 2024.
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden py-4">
          <div className="flex animate-marquee">
            {[...marqueeQuotes, ...marqueeQuotes].map((item, i) => (
              <div key={i} className="flex-shrink-0 px-3">
                <div className="bg-surface border border-border rounded-lg p-4 max-w-[320px]">
                  <p className="text-sm text-ink italic mb-2">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="text-xs text-faint">— {item.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mt-6">
          <p className="text-sm text-muted max-w-2xl">
            None of these are our words. They&apos;re real reviews from real users.
            The pattern is the same: generic output, broken on deploy, no way
            out.
          </p>
        </div>

        {/* Craft line divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mt-12">
          <CraftLine variant="divider" />
        </div>
      </MotionSection>

      {/* ============================================
          SECTION 3: AI Graveyard — GSAP ScrollTrigger timeline
          ============================================ */}
      <GraveyardSection />

      {/* ============================================
          SECTION 4: How It Works — "You Talk. I Research. You Launch."
          ============================================ */}
      <MotionSection width="default" background="bg" direction="up" stagger staggerDelay={0.1}>
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-12 text-balance">
          You talk. I research. You launch.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="space-y-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-brand-subtle text-brand font-display text-xl font-semibold">
              1
            </div>
            <h3 className="text-xl font-display text-ink">
              You tell me about your product.
            </h3>
            <p className="text-base text-muted leading-relaxed">
              Fill out a short form. Tell me what it does, who it&apos;s for, what
              you need. I might ask a few follow-up questions. 15 minutes, tops.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-brand-subtle text-brand font-display text-xl font-semibold">
              2
            </div>
            <h3 className="text-xl font-display text-ink">
              I research your market. Then I design.
            </h3>
            <p className="text-base text-muted leading-relaxed">
              I study your competitors, mine your keywords, profile your
              audience. Then I design a signature visual system —
              colors, type, motion, layout — that belongs to YOUR product,
              not a template. This is the step AI builders skip entirely.
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-brand-subtle text-brand font-display text-xl font-semibold">
              3
            </div>
            <h3 className="text-xl font-display text-ink">
              You receive it. Deployed. Working. Yours.
            </h3>
            <p className="text-base text-muted leading-relaxed">
              3–5 business days later, you get a live Next.js site on{" "}
              <code className="text-sm font-mono text-brand bg-surface px-1.5 py-0.5 rounded">
                your-product.vercel.app
              </code>
              . Working forms. Real SEO. Analytics wired. Your own GitHub repo.
              It&apos;s yours to keep, modify, and deploy anywhere.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
          <CTAButton href="#contact-form">Get your first landing — free</CTAButton>
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors duration-200"
          >
            See the full process
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </MotionSection>

      {/* ============================================
          SECTION 5: The Difference — "Why Not Just Use Lovable or v0?"
          ============================================ */}
      <MotionSection width="default" background="bg-alt" direction="up" stagger staggerDelay={0.12}>
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-10 text-balance">
          Why not just use an AI builder? Three reasons.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1 — Large, spans 7 — enters from left */}
          <Card className="md:col-span-7 space-y-4" hover>
            <h3 className="text-2xl font-display text-ink">
              Researched, not templated.
            </h3>
            <p className="text-base text-muted leading-relaxed">
              Before I open a code editor, I study your market. Competitor
              teardown. Keyword mining. Audience profiling.
            </p>
            <p className="text-base text-muted leading-relaxed">
              AI builders skip this entirely. They feed your prompt into a model
              trained on existing landing pages and auto-complete the most
              probable output. That&apos;s why their results all look the same —
              the model is predicting the{" "}
              <em className="italic font-display text-ink">average</em>, not
              designing for{" "}
              <em className="italic font-display text-ink">you</em>.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Your landing should reflect your product, not the most common SaaS
              color palette.
            </p>
          </Card>

          {/* Card 2 — enters from right */}
          <Card className="md:col-span-5 space-y-4" hover>
            <h3 className="text-2xl font-display text-ink">
              Real code. Yours.
            </h3>
            <p className="text-base text-muted leading-relaxed">
              You get a real Next.js site in YOUR GitHub repo. Standard project
              structure. Standard conventions. Standard dependencies.
            </p>
            <p className="text-base text-muted leading-relaxed">
              No proprietary editor. No &quot;export&quot; button that produces
              unmaintainable spaghetti. No platform lock-in.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Hire a dev next month? They&apos;ll know exactly what they&apos;re
              looking at. Deploy it on your own Vercel account? Go ahead.
            </p>
          </Card>

          {/* Card 3 — Full width */}
          <Card className="md:col-span-12 space-y-4" hover>
            <h3 className="text-2xl font-display text-ink">
              Deployed and working. Not a mockup.
            </h3>
            <p className="text-base text-muted leading-relaxed max-w-3xl">
              Forms actually send emails. Analytics actually track. SEO tags are
              real — JSON-LD, Open Graph, meta descriptions, sitemap. Not
              placeholders.
            </p>
            <p className="text-base text-muted leading-relaxed max-w-3xl">
              Your landing is LIVE the day I ship it. Share the URL. Launch on
              Product Hunt. Send it to investors. It works. If something breaks?
              I fix it. You&apos;re talking to the person who built it — not a prompt
              box that burns tokens producing the same broken output.
            </p>
          </Card>
        </div>

        <p className="mt-8 text-sm text-brand italic">
          AI builders aren&apos;t competitors. They&apos;re the reason this service
          exists.
        </p>
      </MotionSection>

      {/* ============================================
          SECTION 6: What You Get — The Checklist Wall
          ============================================ */}
      <MotionSection width="narrow" background="bg" direction="up">
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-10 text-balance">
          Everything you get. No fine print.
        </h2>

        <StaggerChildren staggerDelay={0.08}>
          {[
            "A multi-page Next.js site. Built with the App Router. TypeScript. Your pages, your structure.",
            "Working forms. Emails land in your inbox. Not a mockup. Not a placeholder. Real.",
            "Real SEO. JSON-LD structured data. Open Graph tags. Meta descriptions written for your pages. A sitemap that actually maps your site.",
            "Scroll-reactive motion. Sections reveal as they scroll into view. Cards stagger. Nothing jumps or janks. It feels alive.",
            "Your code. Your repo. Standard Next.js project in a GitHub repo under your account. You own it. You can edit it. You can hire someone to extend it.",
            "Deployed on Vercel. Live URL, ready to share. your-product.vercel.app. Custom domain support on Pro.",
            "Free for your first landing. $0. No credit card. No trial that expires. It's yours.",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E6A03A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <p className="text-xl md:text-2xl font-display text-ink leading-snug">
                {item}
              </p>
            </div>
          ))}
        </StaggerChildren>

        <div className="mt-10">
          <CTAButton href="#contact-form">Get your first landing — free</CTAButton>
        </div>
      </MotionSection>

      {/* ============================================
          SECTION 7: Showcase Teaser
          ============================================ */}
      <MotionSection width="default" background="bg-alt" direction="up">
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-6 text-balance">
          Real landings. Real craft. Not templates.
        </h2>

        {/* Featured: Pulse */}
        <Card className="mb-8 p-0 overflow-hidden" hover>
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-3 aspect-[16/10] md:aspect-auto bg-surface-hover">
              <div
                className="w-full h-full min-h-[240px] bg-cover bg-center"
                style={{ backgroundImage: "url(/images/showcase/pulse-thumb.jpg)" }}
                role="img"
                aria-label="Pulse landing page"
              />
            </div>
            <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
              <span className="inline-flex self-start px-2.5 py-0.5 text-xs font-medium text-brand bg-brand-subtle rounded-full mb-3">
                SaaS
              </span>
              <h3 className="text-2xl font-display text-ink mb-3">Pulse</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                A landing page that lives and breathes. Dark, atmospheric,
                scroll-reactive. Every section has a distinct rhythm. The motion
                isn&apos;t decorative — it guides you through the product story.
                Forms work. Analytics fire. It launched in under 5 days.
              </p>
              <a
                href="https://pulse-nu-two.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover transition-colors duration-200"
              >
                View live
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </Card>

        <p className="text-sm text-muted mb-8">
          More projects coming. Every landing shown here was researched,
          designed, and deployed by Landing Craft. No AI auto-complete. No
          template fill-in. Just real work.
        </p>

        <Link
          href="/showcase"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover transition-colors duration-200"
        >
          See the full showcase
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
      </MotionSection>

      {/* ============================================
          SECTION 8: Pricing Teaser
          ============================================ */}
      <MotionSection width="narrow" background="bg" direction="up">
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-10 text-balance">
          First one&apos;s free. Always.
        </h2>

        <PricingCard {...pricingTiers[0]} ctaHref="#contact-form" />

        <div className="mt-6">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover transition-colors duration-200"
          >
            Full pricing
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </MotionSection>

      {/* ============================================
          SECTION 9: Social Proof Element
          ============================================ */}
      <MotionSection width="narrow" background="bg-alt" direction="up">
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-6 text-balance">
          Built for founders who burned credits on AI builders and got something
          they can&apos;t show investors.
        </h2>

        <div className="space-y-4 text-base text-muted leading-relaxed">
          <p>
            You know the feeling. You prompted the AI 25 times. It still looks
            like every other SaaS landing on Product Hunt. The forms don&apos;t work.
            The deploy broke. You burned 400 credits fixing bugs the AI created.
          </p>
          <p>
            Landing Craft is not another AI builder. It&apos;s a person — propiter —
            who researches your market, designs with taste, and ships real
            Next.js code you own.
          </p>
          <p>
            If you&apos;ve been burned by AI tools, this is your reset. First
            one&apos;s free. You&apos;ve got nothing to lose but the frustration.
          </p>
        </div>
      </MotionSection>

      {/* ============================================
          SECTION 10: FAQ — Top objections
          ============================================ */}
      <MotionSection width="narrow" background="bg" direction="up" stagger staggerDelay={0.06}>
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-10">
          Real questions. Real answers.
        </h2>

        <div className="space-y-8">
          {faqGroups.slice(0, 2).map((group) => (
            <FAQAccordion
              key={group.theme}
              items={group.questions}
              groupTheme={group.theme}
            />
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover transition-colors duration-200"
          >
            All questions
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </MotionSection>

      {/* ============================================
          SECTION 11: Final CTA — The Concierge Form
          ============================================ */}
      <MotionSection
        width="narrow"
        background="bg-alt"
        spacing="section"
        id="contact-form"
        direction="up"
      >
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-4">
          Tell me about your product.
        </h2>
        <p className="text-lg text-muted mb-10 max-w-lg">
          Fill this out. I&apos;ll review it and respond within 48 hours. No
          obligation. No credit card. Just a conversation.
        </p>

        <ContactForm />
      </MotionSection>
    </>
  );
}

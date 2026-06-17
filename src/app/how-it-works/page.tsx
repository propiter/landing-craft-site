import type { Metadata } from "next";
import SectionWrapper from "@/components/section-wrapper";
import CTAButton from "@/components/cta-button";
import ContactForm from "@/components/contact-form";
import FAQAccordion from "@/components/faq-accordion";
import { processFAQItems } from "@/lib/faq-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "You tell us about your product. I research your market and design a signature visual. You receive a deployed Next.js landing. 3 steps, one human. No prompting required.",
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper width="default" background="bg" spacing="section-lg" className="relative overflow-hidden">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[0.95] tracking-tight text-balance">
            From your idea to a live landing.
            <br />
            <span className="text-brand">No prompting required.</span>
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
            Three steps. One human. Real Next.js code at the end. Here&apos;s exactly
            what happens when you tell us about your product.
          </p>
        </div>
      </SectionWrapper>

      {/* Step 1 */}
      <SectionWrapper width="default" background="bg-alt" spacing="section">
        <div className="max-w-3xl">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-subtle text-brand font-display text-lg font-semibold mb-4">
            1
          </span>
          <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-6 text-balance">
            Step 1. You tell me about your product.
          </h2>
          <div className="space-y-4 text-base text-muted leading-relaxed">
            <p>
              Fill out a short form. Tell me what your product does, who it&apos;s
              for, and what you need from your landing. I&apos;ll read it —
              personally. If I have questions, I&apos;ll reach out. A 15-minute call
              if needed. That&apos;s the entire &quot;onboarding.&quot;
            </p>
            <p>
              No discovery workshops. No stakeholder interviews. No scope creep.
              You&apos;re a founder. You know your product better than anyone. My
              job is to listen, then translate that into a landing that converts.
            </p>
          </div>

          <div className="mt-8 p-6 bg-surface border border-border rounded-xl">
            <h3 className="text-lg font-medium text-ink mb-4">
              What I ask for:
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex items-start gap-2">
                <span className="text-brand mt-0.5">—</span>
                Your product name and what it does (one sentence is enough)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-0.5">—</span>
                Who you&apos;re building for (one audience description)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-0.5">—</span>
                Any URL, pitch deck, or doc you already have
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-0.5">—</span>
                What your landing needs to DO — capture emails, schedule demos, explain something complex
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-0.5">—</span>
                Any design references or &quot;definitely not this&quot; examples
              </li>
            </ul>
          </div>

          <p className="mt-4 text-sm text-faint">Timeline: 15–30 minutes, most of it async.</p>
        </div>
      </SectionWrapper>

      {/* Step 2 */}
      <SectionWrapper width="default" background="bg" spacing="section">
        <div className="max-w-3xl">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-subtle text-brand font-display text-lg font-semibold mb-4">
            2
          </span>
          <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-6 text-balance">
            Step 2. I research your market. Then I design. (2–3 days)
          </h2>
          <div className="space-y-4 text-base text-muted leading-relaxed">
            <p>
              This is the phase AI builders skip entirely. It&apos;s also the phase
              that makes everything else work.
            </p>
          </div>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium text-ink mb-2">
                What the research looks like:
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-0.5">—</span>
                  <span>
                    <strong className="text-ink font-medium">Competitor teardown:</strong>{" "}
                    I study the landing pages of your 3 closest competitors. What&apos;s
                    their positioning? Their visual language? What are they doing well
                    — and what gaps are they leaving? Your landing needs to stand OUT,
                    not blend in.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-0.5">—</span>
                  <span>
                    <strong className="text-ink font-medium">Keyword mining:</strong>{" "}
                    I find the terms your audience actually searches for. Not guesswork
                    — real search data. These keywords shape your copy, your page
                    structure, and your SEO.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-0.5">—</span>
                  <span>
                    <strong className="text-ink font-medium">Audience profiling:</strong>{" "}
                    I map who&apos;s visiting, what they already know, what they need to
                    be convinced about, and what makes them click.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-ink mb-2">Then the design:</h3>
              <p className="text-sm text-muted leading-relaxed">
                With the research done, I design a signature visual system: a color
                palette that&apos;s yours — not the shadcn default; a type scale with
                rhythm and contrast; motion principles; layout patterns that match
                YOUR story, not a template&apos;s.
              </p>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Before I write any code, you see the direction. One round of feedback.
                Then I build.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Step 3 */}
      <SectionWrapper width="default" background="bg-alt" spacing="section">
        <div className="max-w-3xl">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-subtle text-brand font-display text-lg font-semibold mb-4">
            3
          </span>
          <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-6 text-balance">
            Step 3. You receive it — deployed and working. (1–2 days)
          </h2>
          <div className="space-y-4 text-base text-muted leading-relaxed">
            <p>
              I ship you a live Next.js site. Not a mockup. Not a PDF. A real,
              deployed landing on <code className="text-sm font-mono text-brand bg-surface px-1.5 py-0.5 rounded">your-product.vercel.app</code>.
              Here&apos;s what you get:
            </p>
          </div>

          <div className="mt-6 p-6 bg-surface border border-border rounded-xl space-y-3">
            <h3 className="text-lg font-medium text-ink mb-2">The handoff:</h3>
            <ul className="space-y-2 text-sm text-muted">
              {[
                "A GitHub repo invite — the code is yours, under your account",
                "A live URL you can share immediately",
                "Working forms (emails actually arrive in your inbox)",
                "Analytics wired (Google Analytics, ready to go)",
                "Real SEO: JSON-LD, meta tags, Open Graph, sitemap",
                "Responsive on mobile, tablet, and desktop",
                "Scroll-reactive motion that feels alive",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E6A03A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-sm text-muted leading-relaxed">
            You look at it. You test it. If something&apos;s off, I fix it. If you
            love it, you keep it. If you want edits later — more pages, a custom
            domain, ongoing updates — there are paid plans for that. But this
            first landing stays free. Forever. Yours.
          </p>
        </div>
      </SectionWrapper>

      {/* FAQ Callout */}
      <SectionWrapper width="narrow" background="bg" spacing="section">
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-10 text-balance">
          Common questions about the process.
        </h2>
        <FAQAccordion items={processFAQItems} />
        <div className="mt-8">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover transition-colors duration-200"
          >
            Full FAQ
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper width="narrow" background="bg-alt" spacing="section" id="contact-form">
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-4 text-balance">
          Ready for a landing that doesn&apos;t look AI-generated?
        </h2>
        <p className="text-lg text-muted mb-10 max-w-lg">
          Tell me about your product. I&apos;ll take it from there. First one&apos;s free.
        </p>
        <ContactForm />
      </SectionWrapper>
    </>
  );
}

import type { Metadata } from "next";
import SectionWrapper from "@/components/section-wrapper";
import PricingCard from "@/components/pricing-card";
import FAQAccordion from "@/components/faq-accordion";
import ContactForm from "@/components/contact-form";
import { pricingTiers } from "@/lib/pricing-data";
import { pricingFAQItems } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Pricing — First landing free",
  description:
    "First landing free ($0, deployed on *.vercel.app). Credits for edits and more landings. Pro for custom domains and ongoing support. No subscription lock-in.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper width="default" background="bg" spacing="section-lg">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[0.95] tracking-tight text-balance">
            First one&apos;s free.
            <br />
            <span className="text-brand">Always.</span>
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
            Pay only when you need more. No subscription. No commitment. No
            credit card to start.
          </p>
        </div>
      </SectionWrapper>

      {/* Tier display — inverted hierarchy */}
      <SectionWrapper width="narrow" background="bg-alt" spacing="section">
        <div className="space-y-8">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </SectionWrapper>

      {/* What's Included */}
      <SectionWrapper width="narrow" background="bg" spacing="section">
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-8 text-balance">
          Every landing includes this.
        </h2>
        <div className="space-y-4">
          {[
            "Multi-page Next.js site",
            "Working forms (emails actually arrive)",
            "Real SEO — JSON-LD, meta tags, Open Graph, sitemap",
            "Scroll-reactive motion",
            "Mobile + tablet + desktop responsive",
            "Analytics wired (Google Analytics ready)",
            "Your GitHub repo — you own the code",
            "Deployed on Vercel — live URL",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E6A03A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-base text-muted">{item}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Pricing FAQ */}
      <SectionWrapper width="narrow" background="bg-alt" spacing="section">
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-8 text-balance">
          Pricing questions.
        </h2>
        <FAQAccordion items={pricingFAQItems} />
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper width="narrow" background="bg" spacing="section" id="contact-form">
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-4 text-balance">
          Start free. Stay because it&apos;s good.
        </h2>
        <p className="text-lg text-muted mb-10 max-w-lg">
          Tell me about your product. First one&apos;s free. No credit card. No catch.
        </p>
        <ContactForm />
      </SectionWrapper>
    </>
  );
}

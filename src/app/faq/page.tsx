import type { Metadata } from "next";
import SectionWrapper from "@/components/section-wrapper";
import FAQAccordion from "@/components/faq-accordion";
import ContactForm from "@/components/contact-form";
import { faqGroups } from "@/lib/faq-data";
import { siteConfig } from "@/lib/site-config";

// Build FAQPage JSON-LD from data
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((group) =>
    group.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    }))
  ),
};

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Is this an AI wrapper? Do I own the code? What if I hate it? Real answers to the real questions founders ask before getting a landing built.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <SectionWrapper width="default" background="bg" spacing="section-lg">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[0.95] tracking-tight text-balance">
            Real questions.
            <br />
            <span className="text-brand">Real answers.</span>
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
            No marketing speak. No dodging. If you have a question that&apos;s not
            here, fill out the form at the bottom and I&apos;ll answer personally.
          </p>
        </div>
      </SectionWrapper>

      {/* FAQ grouped by theme */}
      <SectionWrapper width="narrow" background="bg-alt" spacing="section">
        <div className="space-y-12">
          {faqGroups.map((group) => (
            <FAQAccordion
              key={group.theme}
              items={group.questions}
              groupTheme={group.theme}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper width="narrow" background="bg" spacing="section" id="contact-form">
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-4 text-balance">
          Still have questions?
        </h2>
        <p className="text-lg text-muted mb-10 max-w-lg">
          Tell me about your product and I&apos;ll answer personally. No
          auto-responder. No script. Just me.
        </p>
        <ContactForm />
      </SectionWrapper>
    </>
  );
}

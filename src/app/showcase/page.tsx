import type { Metadata } from "next";
import SectionWrapper from "@/components/section-wrapper";
import ShowcaseCard from "@/components/showcase-card";
import ContactForm from "@/components/contact-form";
import { showcaseEntries } from "@/lib/showcase-data";

export const metadata: Metadata = {
  title: { absolute: "Showcase — Real landings built with Landing Craft" },
  description:
    "Every landing shown was researched, designed, and deployed by Landing Craft. Real Next.js code, real taste, no templates. Click through — they're live.",
  alternates: {
    canonical: "/showcase",
  },
};

export default function ShowcasePage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper width="default" background="bg" spacing="section-lg">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[0.95] tracking-tight text-balance">
            Real landings.
            <br />
            <span className="text-brand">Real craft.</span>
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
            Every landing shown here was researched, designed, and deployed by
            Landing Craft. No templates. No AI autocomplete. No &quot;generate&quot;
            button. Just real work for real products.
          </p>
        </div>
      </SectionWrapper>

      {/* Gallery intro + grid */}
      <SectionWrapper width="default" background="bg-alt" spacing="section">
        <p className="text-base text-muted max-w-2xl mb-10">
          Use the filters to find projects like yours. Each card links to the
          live landing — go ahead, click through. Test the forms. Check the
          responsiveness. Look at the source if you want. There&apos;s nothing hidden
          here.
        </p>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseEntries.map((entry) => (
            <ShowcaseCard key={entry.name} {...entry} />
          ))}
        </div>

        {/* Empty state if fewer than 3 */}
        {showcaseEntries.length < 3 && (
          <div className="mt-16 text-center py-12">
            <h2 className="text-3xl font-display text-ink mb-4 text-balance">
              Your landing could be here.
            </h2>
            <p className="text-base text-muted max-w-md mx-auto mb-8">
              The showcase is new. More projects are on the way. Be one of the
              first — tell me about your product, get your landing free, and
              have it featured here when it&apos;s done.
            </p>
            <ContactForm />
          </div>
        )}
      </SectionWrapper>

      {/* CTA */}
      {showcaseEntries.length >= 3 && (
        <SectionWrapper width="narrow" background="bg" spacing="section" id="contact-form">
          <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-4 text-balance">
            Want yours here?
          </h2>
          <p className="text-lg text-muted mb-10 max-w-lg">
            Tell me about your product. The landing is free. The showcase spot is
            optional. Either way, you walk away with a real, deployed, working
            landing.
          </p>
          <ContactForm />
        </SectionWrapper>
      )}
    </>
  );
}

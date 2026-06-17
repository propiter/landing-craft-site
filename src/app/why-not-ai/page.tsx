import type { Metadata } from "next";
import SectionWrapper from "@/components/section-wrapper";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Why AI Builders Make Generic Landings",
  description:
    "AI builders can't do taste. They produce the same dark-navy, teal-accent, dot-grid landing every time. Here's why — and what human-crafted, researched landings look like instead.",
  alternates: {
    canonical: "/why-not-ai",
  },
};

export default function WhyNotAIPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper width="default" background="bg" spacing="section-lg" className="relative overflow-hidden">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[0.95] tracking-tight text-balance">
            AI builders can&apos;t do taste.
            <br />
            <span className="text-brand">Here&apos;s why.</span>
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
            If your landing looks AI-generated, investors, customers, and peers
            notice. The problem isn&apos;t the AI — it&apos;s that AI skips the one
            thing that makes a landing work: understanding YOUR market. Here&apos;s
            what&apos;s going wrong, and what craft looks like instead.
          </p>
        </div>
      </SectionWrapper>

      {/* The Default Component Problem */}
      <SectionWrapper width="narrow" background="bg-alt" spacing="section">
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-6 text-balance">
          AI builds the average. You need the specific.
        </h2>
        <div className="space-y-4 text-base text-muted leading-relaxed">
          <p>
            AI models are trained on millions of landing pages. When you prompt
            one to &quot;build a SaaS landing,&quot; it doesn&apos;t research your product,
            your competitors, or your audience. It predicts the most statistically
            probable layout — and ships it.
          </p>
          <p>
            The result? A composite of every SaaS landing in the training data.
            Dark navy background. Teal accent. Glassmorphism cards. Centered
            headline in Inter. Dot grid somewhere. Three feature cards stacked
            vertically. A CTA at the bottom.
          </p>
          <p>
            It&apos;s not that AI is &quot;bad at design.&quot; It&apos;s that AI is DESIGNED to
            produce the average. The average works for proving a concept. It does
            not work for standing out, converting skeptical visitors, or
            impressing investors.
          </p>
        </div>
        <p className="mt-6 text-sm text-brand italic">
          Your product isn&apos;t average. Your landing shouldn&apos;t be either.
        </p>
      </SectionWrapper>

      {/* The Lock-in Trap */}
      <SectionWrapper width="narrow" background="bg" spacing="section">
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-6 text-balance">
          You prompt it. It builds. You&apos;re stuck.
        </h2>
        <div className="space-y-6 text-base text-muted leading-relaxed">
          <p>
            Most AI builders give you a nice editor, a live preview, and a
            &quot;deploy&quot; button. What they don&apos;t give you: real, portable, standard
            code that a developer can pick up and work with.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-surface border border-border rounded-lg">
              <h3 className="text-lg font-medium text-ink mb-1">Lovable</h3>
              <p className="text-sm">
                Yes, you can export to GitHub — but the AI-generated code is
                messy, non-standard, and hard to maintain without Lovable as your
                ongoing &quot;CTO.&quot; Try handing it to a real dev. They&apos;ll spend
                more time untangling than building.
              </p>
            </div>
            <div className="p-4 bg-surface border border-border rounded-lg">
              <h3 className="text-lg font-medium text-ink mb-1">v0</h3>
              <p className="text-sm">
                Beautiful shadcn/ui components. Front-end only. You still need to
                wire up your own backend, forms, and infrastructure. It stops
                where the real work begins.
              </p>
            </div>
            <div className="p-4 bg-surface border border-border rounded-lg">
              <h3 className="text-lg font-medium text-ink mb-1">Framer</h3>
              <p className="text-sm">
                Proprietary platform. You can&apos;t export to React or Next.js. Leave
                Framer, lose your site. You&apos;re not buying a landing — you&apos;re
                renting a template inside someone else&apos;s walled garden.
              </p>
            </div>
            <div className="p-4 bg-surface border border-border rounded-lg">
              <h3 className="text-lg font-medium text-ink mb-1">Durable</h3>
              <p className="text-sm">
                Explicitly no-code. &quot;We don&apos;t offer extensive options for HTML
                customization.&quot; You can&apos;t even reach the code to fix things
                yourself.
              </p>
            </div>
          </div>

          <p className="font-medium text-ink">
            Landing Craft gives you standard Next.js. In YOUR GitHub repo. Deploy
            it on Vercel, Netlify, your own server — anywhere. No proprietary
            editor. No lock-in. No &quot;export?&quot; button that doesn&apos;t actually work.
          </p>
        </div>
      </SectionWrapper>

      {/* The Deployment Gap */}
      <SectionWrapper width="narrow" background="bg-alt" spacing="section">
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-6 text-balance">
          Pretty mockup. Broken deploy.
        </h2>
        <div className="space-y-4 text-base text-muted leading-relaxed">
          <p>
            AI builders are great at producing a screenshot. Not so great at
            producing a site that actually functions.
          </p>
          <p>
            Forms that don&apos;t send emails. Analytics that show a dashboard but
            never fire. SEO tags filled with placeholder text. Responsive
            behavior that falls apart on mobile. Scroll animations that hitch,
            jump, and jank.
          </p>
          <p>
            Read the reviews: &quot;I spent 400 credits fixing bugs the AI created.&quot;
            &quot;It rewrites the entire file and breaks your UI/UX structure.&quot; &quot;The
            deploy was broken.&quot; These aren&apos;t edge cases. They&apos;re the default
            experience for anyone trying to get a production-ready site from an
            AI builder.
          </p>
          <p className="font-medium text-ink">
            I test every form, every breakpoint, every scroll reveal BEFORE I
            send you the link. If something&apos;s broken, I fix it. You&apos;re talking
            to the person who built it — not a prompt box that burns credits
            producing the same broken output.
          </p>
        </div>
      </SectionWrapper>

      {/* What We Do Instead */}
      <SectionWrapper width="narrow" background="bg" spacing="section">
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-6 text-balance">
          Research first. Design second. Code third.
        </h2>
        <div className="space-y-6 text-base text-muted leading-relaxed">
          <div>
            <h3 className="text-lg font-medium text-ink mb-2">Research.</h3>
            <p className="text-sm">
              I study your market, your competitors, and your audience before I
              touch a code editor. What are people searching for? What is your
              competition saying? Where are the gaps? This shapes everything
              that follows.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-ink mb-2">Signature visual.</h3>
            <p className="text-sm">
              I design a visual system for YOUR product — not a template fill-in.
              Colors that belong to your brand. Type that has rhythm. Motion that
              tells the story, not just decorates it. The result doesn&apos;t look
              like a SaaS landing. It looks like YOUR landing.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-ink mb-2">Real code. Deployed.</h3>
            <p className="text-sm">
              You get a Next.js site in your own GitHub repo. Standard structure,
              standard conventions. Deployed on Vercel. Working forms. Real SEO.
              Ready to share.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-ink mb-2">Human accountability.</h3>
            <p className="text-sm">
              Something off? You talk to me. I fix it. No prompt box. No credit
              counter ticking. No support ticket that goes to an AI chatbot.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm text-brand italic">
          This isn&apos;t an AI pipeline with a human wrapper. It&apos;s a human service
          that uses AI as a tool — not as a replacement for taste, judgment, and
          accountability.
        </p>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper width="narrow" background="bg-alt" spacing="section" id="contact-form">
        <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-4 text-balance">
          Don&apos;t settle for generic.
        </h2>
        <p className="text-lg text-muted mb-10 max-w-lg">
          Tell me about your product. I&apos;ll build a landing that doesn&apos;t look
          like every other SaaS on Product Hunt. First one&apos;s free.
        </p>
        <ContactForm />
      </SectionWrapper>
    </>
  );
}

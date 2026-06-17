import type { Metadata } from "next";
import SectionWrapper from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service" },
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <SectionWrapper width="narrow" background="bg" spacing="section-xs" className="min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-display text-ink tracking-tight mb-2 text-balance">
        Terms of Service
      </h1>
      <p className="text-sm text-faint mb-12">
        Effective date: June 17, 2026
      </p>

      <div className="prose prose-invert max-w-none space-y-8 text-base text-muted leading-relaxed">
        <section>
          <h2 className="text-xl font-display text-ink mb-3">1. Service Description</h2>
          <p>
            Landing Craft is a concierge landing page service operated by propiter (&quot;I,&quot;
            &quot;me,&quot; &quot;my&quot;). I research your market, design a signature visual system,
            and build a Next.js landing page — deployed and delivered as real code you own.
          </p>
          <p className="mt-2">
            By submitting an intake form, you (&quot;you,&quot; &quot;your,&quot; &quot;the client&quot;) engage my
            services under these terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">2. Free Landing Terms</h2>
          <p>
            <strong>2.1.</strong> Your first landing is provided at no cost ($0). No credit
            card is required.
          </p>
          <p>
            <strong>2.2.</strong> The free landing includes: market research, visual design,
            Next.js development, deployment to a <code className="text-sm font-mono text-brand bg-surface px-1 py-0.5 rounded">*.vercel.app</code> subdomain on Vercel, one round of
            feedback/revisions, and delivery of the source code to your GitHub account.
          </p>
          <p>
            <strong>2.3.</strong> There is no obligation to purchase additional services after
            receiving a free landing.
          </p>
          <p>
            <strong>2.4.</strong> I reserve the right to decline any intake submission for
            any reason. If declined, I will notify you by email within 48 hours.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">3. Paid Services</h2>
          <p>
            <strong>3.1. Credits.</strong> Credits are prepaid units of work. One credit = one
            round of edits to an existing landing, or a quoted number of credits for a new
            landing page. Credits do not expire. Credits are non-refundable once work has
            begun on the associated request.
          </p>
          <p>
            <strong>3.2. Pro.</strong> The Pro tier includes custom domain setup, priority
            support, and ongoing edits. Pro is a one-time fee per project, not a subscription.
          </p>
          <p>
            <strong>3.3.</strong> I will provide a clear scope and timeline before beginning
            any paid work.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">
            4. Intellectual Property &amp; Code Ownership
          </h2>
          <p>
            <strong>4.1.</strong> Upon delivery, you own the source code of your landing
            page. I transfer all rights to the code and design assets created specifically
            for your project to you.
          </p>
          <p>
            <strong>4.2.</strong> I retain the right to reference your landing in my
            portfolio and showcase — only if you have explicitly consented via the showcase
            opt-in on the intake form. If you have not opted in, your landing will not be
            displayed publicly by Landing Craft.
          </p>
          <p>
            <strong>4.3.</strong> Third-party components and libraries used in your landing
            (e.g., React, Next.js, Tailwind CSS, open-source UI components) are subject to
            their respective licenses. Ownership of these dependencies is not transferred;
            your ownership covers the custom code and design created for your project.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">5. Showcase Consent</h2>
          <p>
            <strong>5.1.</strong> During intake, you may opt in to having your landing
            featured in the Landing Craft showcase. This is optional.
          </p>
          <p>
            <strong>5.2.</strong> If you opt in, you grant Landing Craft a non-exclusive,
            worldwide, royalty-free license to display screenshots of your landing, your
            product name, and a brief description on the Landing Craft website and marketing
            materials.
          </p>
          <p>
            <strong>5.3.</strong> You may revoke showcase consent at any time by email. I
            will remove your landing from the showcase within 5 business days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">6. Limitation of Liability</h2>
          <p>
            <strong>6.1.</strong> Landing Craft provides landing page design and development
            services. I make no guarantees about conversion rates, revenue, search rankings,
            or business outcomes resulting from the use of the delivered landing page.
          </p>
          <p>
            <strong>6.2.</strong> To the maximum extent permitted by applicable law, my
            liability for any claim arising from the services is limited to the amount you
            have paid me for the specific service giving rise to the claim.
          </p>
          <p>
            <strong>6.3.</strong> I am not liable for: (a) third-party service outages
            (Vercel, GitHub, email providers); (b) issues arising from modifications you or
            a third party make to the delivered code; (c) domain or DNS configuration issues
            on services outside my direct control.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">7. Termination</h2>
          <p>
            <strong>7.1.</strong> You may discontinue use of my services at any time. Your
            code remains yours.
          </p>
          <p>
            <strong>7.2.</strong> I may terminate a project if: (a) you violate these terms;
            (b) the project scope changes materially without agreement; (c) communication
            breaks down to the point where I cannot deliver the work. In the event of
            termination for paid work, I will refund any unused portion of prepaid credits.
          </p>
          <p>
            <strong>7.3.</strong> Free landings already delivered remain yours regardless
            of termination.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">8. Communication</h2>
          <p>
            <strong>8.1.</strong> Primary communication is via email. I do not provide phone
            support unless arranged explicitly.
          </p>
          <p>
            <strong>8.2.</strong> Response times: Free tier — within 48 hours. Credits tier
            — within 24 hours. Pro tier — same business day.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">9. Governing Law</h2>
          <p>
            <strong>9.1.</strong> These terms are governed by the laws of Argentina. Any
            disputes shall be resolved in the courts of Córdoba, Argentina.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">10. Changes to These Terms</h2>
          <p>
            <strong>10.1.</strong> I may update these terms from time to time. Material
            changes will be communicated by email to active clients and by updating the
            effective date on this page.
          </p>
          <p>
            <strong>10.2.</strong> Continued use of my services after changes constitutes
            acceptance of the updated terms.
          </p>
        </section>

        <p className="text-xs text-faint italic mt-12 pt-8 border-t border-border-subtle">
          Review with a lawyer before launch. The above is a template — adapt sections
          2, 6, and 9 to jurisdiction. Do not publish as-is without legal review.
        </p>
      </div>
    </SectionWrapper>
  );
}

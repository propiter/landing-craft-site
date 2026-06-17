import type { Metadata } from "next";
import SectionWrapper from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy" },
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <SectionWrapper width="narrow" background="bg" spacing="section-xs" className="min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-display text-ink tracking-tight mb-2 text-balance">
        Privacy Policy
      </h1>
      <p className="text-sm text-faint mb-12">
        Effective date: June 17, 2026
      </p>

      <div className="prose prose-invert max-w-none space-y-8 text-base text-muted leading-relaxed">
        <section>
          <h2 className="text-xl font-display text-ink mb-3">1. What I Collect</h2>
          <p>
            Landing Craft is a concierge service. I collect only what I need to do the
            work.
          </p>
          <p className="mt-2">
            <strong>1.1. Intake form.</strong> When you submit the intake form, I collect:
            your name, your email address, your product name, your product URL (optional),
            a description of what you&apos;re building, a description of what you need from
            your landing, and your showcase opt-in preference (optional).
          </p>
          <p>
            <strong>1.2. Communication.</strong> I keep our email correspondence to
            reference project details, feedback, and decisions. I do not use your emails
            for marketing unless you explicitly opt in.
          </p>
          <p>
            <strong>1.3. Analytics.</strong> This website uses Google Analytics 4 (GA4)
            and/or Google Tag Manager. These services collect anonymized usage data: pages
            visited, time on site, referring source, browser type, and device type. I do
            not send personally identifiable information (PII) to Google Analytics.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">2. How I Use Your Data</h2>
          <p>
            <strong>2.1.</strong> Your intake data is used solely to: (a) understand your
            product and needs; (b) communicate with you about your project; (c) deliver the
            landing page you requested.
          </p>
          <p>
            <strong>2.2.</strong> If you opt into the showcase, your product name, a
            screenshot of your landing, and a brief description are displayed on the public
            showcase page. No personal contact information is displayed.
          </p>
          <p>
            <strong>2.3.</strong> Analytics data is used to understand how visitors find and
            use this website — so I can improve it.
          </p>
          <p>
            <strong>2.4.</strong> I do NOT: sell your data, share it with third parties for
            their own marketing, use your data to train AI models, or use your project
            code/data for any purpose other than delivering your landing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">3. Data Retention</h2>
          <p>
            <strong>3.1.</strong> Intake form data and email correspondence: retained
            indefinitely for reference, unless you request deletion.
          </p>
          <p>
            <strong>3.2.</strong> Delivered code: stored in your GitHub repository — you
            control its retention.
          </p>
          <p>
            <strong>3.3.</strong> Google Analytics data: retained per Google&apos;s default
            retention period (26 months for user-level data). I do not modify this default.
          </p>
          <p>
            <strong>3.4.</strong> You may request deletion of your personal data at any time
            by email. I will comply within 14 days, except where I have a legal obligation
            to retain it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">4. Third-Party Services</h2>
          <p>I use these third-party services to operate Landing Craft:</p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="text-left py-2 pr-4 font-medium text-ink">Service</th>
                  <th className="text-left py-2 pr-4 font-medium text-ink">Purpose</th>
                  <th className="text-left py-2 font-medium text-ink">What they receive</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4">Vercel</td>
                  <td className="py-2 pr-4">Hosting and deployment</td>
                  <td className="py-2">Your landing page code and visitor traffic</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4">GitHub</td>
                  <td className="py-2 pr-4">Code repository delivery</td>
                  <td className="py-2">Your landing page source code (under your account)</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4">Google Analytics / Tag Manager</td>
                  <td className="py-2 pr-4">Website analytics</td>
                  <td className="py-2">Anonymized usage data from visitors to this site</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4">n8n / Resend / equivalent</td>
                  <td className="py-2 pr-4">Email delivery from contact forms</td>
                  <td className="py-2">Your form submission data (transmitted to send you a notification)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm">
            Each of these services has its own privacy policy. I encourage you to review them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">5. Cookies</h2>
          <p>
            <strong>5.1.</strong> This website may set cookies via Google Analytics for
            anonymous usage tracking.
          </p>
          <p>
            <strong>5.2.</strong> I do not use third-party advertising cookies, tracking
            pixels for retargeting, or any cookie-based marketing.
          </p>
          <p>
            <strong>5.3.</strong> You can disable cookies in your browser settings. The
            website will remain functional.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">6. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to: access the personal
            data I hold about you, correct inaccurate data, delete your personal data,
            restrict or object to processing, and data portability.
          </p>
          <p className="mt-2">
            To exercise any of these rights, email me. I will respond within 14 days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">7. Children&apos;s Privacy</h2>
          <p>
            Landing Craft is not directed at children under 13. I do not knowingly collect
            data from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">8. Changes to This Policy</h2>
          <p>
            I may update this policy from time to time. Material changes will be
            communicated by email to active clients and by updating the effective date on
            this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-display text-ink mb-3">9. Contact</h2>
          <p>
            For privacy-related inquiries, email:{" "}
            <code className="text-sm font-mono text-brand bg-surface px-1 py-0.5 rounded">
              [EMAIL — set at launch]
            </code>
          </p>
        </section>

        <p className="text-xs text-faint italic mt-12 pt-8 border-t border-border-subtle">
          Review with a lawyer before launch. The above is a template — adapt to
          jurisdiction (GDPR, CCPA, Argentina&apos;s PDPL). Verify third-party service list is
          accurate. Do not publish as-is without legal review.
        </p>
      </div>
    </SectionWrapper>
  );
}

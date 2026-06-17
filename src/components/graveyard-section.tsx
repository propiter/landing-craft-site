"use client";

import SectionWrapper from "@/components/section-wrapper";
import GraveyardReveal from "@/components/motion/graveyard-reveal";
import FadeInSection from "@/components/motion/fade-in-section";

export default function GraveyardSection() {
  return (
    <SectionWrapper width="full-bleed" background="bg-alt" spacing="section">
      <GraveyardReveal>
        <FadeInSection direction="up" amount={0}>
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-display text-ink tracking-tight mb-4 text-balance">
              AI builders give you this. We give you this.
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mt-8">
          {/* LEFT: AI builder mockups */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-faint uppercase tracking-wide mb-4">
              AI builders
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  data-graveyard="ai"
                  className="aspect-[4/3] bg-surface border border-border rounded-lg overflow-hidden"
                >
                  <div
                    className="w-full h-full bg-cover bg-center opacity-70"
                    style={{
                      backgroundImage: `url(/images/ai-graveyard/generic-${n}.jpg)`,
                    }}
                    role="img"
                    aria-label={`Generic AI builder landing page example ${n}`}
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-faint mt-3 max-w-md leading-relaxed">
              Dark navy background. Teal accent you&apos;ve seen a hundred times.
              This isn&apos;t one builder&apos;s output. It&apos;s ALL of them. The only
              difference is the logo at the top.
            </p>
          </div>

          {/* RIGHT: Landing Craft result */}
          <div className="space-y-4 mt-8 lg:mt-0 lg:pl-8" data-graveyard="lc">
            <p className="text-sm font-medium text-brand uppercase tracking-wide mb-4">
              Landing Craft
            </p>
            <div className="aspect-[4/3] bg-surface border border-brand/20 rounded-lg overflow-hidden relative">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(/images/ai-graveyard/landing-craft-result.jpg)`,
                }}
                role="img"
                aria-label="Landing Craft result — warm, crafted, unique"
              />
              {/* Warm glow behind the result */}
              <div
                data-graveyard-glow
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{ boxShadow: "inset 0 0 80px rgb(230 160 58 / 0.05)", opacity: 0 }}
              />
            </div>
            <p className="text-xs text-faint mt-3 max-w-md leading-relaxed">
              A signature visual system — designed for YOUR market. Warm, alive,
              scroll-reactive. Every section has its own rhythm. No dot grid.
              No glassmorphism. Just craft.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mt-6">
          <p className="text-xs text-faint italic max-w-2xl">
            The left side isn&apos;t an exaggeration. Screenshots sourced from real
            Lovable, v0, Bolt, and Durable outputs.
          </p>
        </div>
      </GraveyardReveal>
    </SectionWrapper>
  );
}

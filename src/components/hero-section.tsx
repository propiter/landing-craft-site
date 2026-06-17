"use client";

import { useRef } from "react";
import SectionWrapper from "@/components/section-wrapper";
import CTAButton from "@/components/cta-button";
import GhostButton from "@/components/ghost-button";
import CraftLine from "@/components/craft-line";
import HeroReveal, { HeroRevealChild, CTAGlowPulse } from "@/components/motion/hero-reveal";
import { motion, useScroll, useTransform } from "motion/react";

export default function HeroSection() {
  const craftLineRef = useRef<SVGSVGElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax — the craft line drifts subtly on scroll
  const { scrollY } = useScroll();
  const craftY = useTransform(scrollY, [0, 600], [0, 20]);
  const craftRotate = useTransform(scrollY, [0, 600], [-0.8, 0]);

  return (
    <SectionWrapper
      width="full-bleed"
      background="bg"
      spacing="section-lg"
      className="relative overflow-hidden min-h-[85vh] flex items-center"
    >
      {/* Craft line background — with parallax drift */}
      <motion.div
        ref={heroRef}
        className="absolute inset-0 z-0 opacity-60 overflow-hidden"
        style={{ y: craftY, rotate: craftRotate }}
      >
        <CraftLine ref={craftLineRef} variant="hero" />
      </motion.div>

      {/* Warm glow overlay */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle, #E6A03A 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <HeroReveal craftLineRef={craftLineRef}>
          <div className="max-w-3xl">
            <HeroRevealChild>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-ink leading-[0.95] tracking-tight text-balance">
                Stop prompting.
                <br />
                <span className="text-brand">Start launching.</span>
              </h1>
            </HeroRevealChild>

            <HeroRevealChild>
              <p className="mt-6 md:mt-8 text-hero-sub md:text-xl text-muted max-w-xl leading-relaxed">
                I research your market, design a signature visual, and ship your
                Next.js landing — deployed, working, and yours. First one&apos;s
                free.
              </p>
            </HeroRevealChild>

            <HeroRevealChild>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
                <CTAGlowPulse>
                  <CTAButton href="#contact-form">Get your first landing — free</CTAButton>
                </CTAGlowPulse>
                <GhostButton href="/showcase">See examples</GhostButton>
              </div>
            </HeroRevealChild>

            <HeroRevealChild>
              <p className="mt-6 text-sm text-faint">
                No credit card. No prompting. Just a real landing, built by a real
                person.
              </p>
            </HeroRevealChild>
          </div>
        </HeroReveal>
      </div>
    </SectionWrapper>
  );
}

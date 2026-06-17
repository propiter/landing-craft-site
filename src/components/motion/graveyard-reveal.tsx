"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GraveyardRevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * AI Graveyard — the dramatic reveal sequence.
 *
 * Stage 1: LEFT side (4 AI mockups) — quiet collective fade-in, slight stagger
 * Stage 2: Brief pause (300ms) — the visitor absorbs the point
 * Stage 3: RIGHT side (Landing Craft result) — slides in with impact, scale + glow
 *
 * Triggered by ScrollTrigger when the section enters the viewport.
 * One-shot (`once: true`).
 *
 * Under `prefers-reduced-motion`: both sides visible immediately, no sequence.
 */
export default function GraveyardReveal({
  children,
  className = "",
}: GraveyardRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce) {
      // Show everything immediately at final state
      gsap.set(container.querySelectorAll("[data-graveyard]"), {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        clearProps: "transform,opacity",
      });
      return;
    }

    const aiCards = container.querySelectorAll("[data-graveyard='ai']");
    const lcResult = container.querySelector("[data-graveyard='lc']");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          once: true,
        },
      });

      // Stage 1: AI grid fades in quietly — all 4 staggered
      tl.fromTo(
        aiCards,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.06,
          ease: "power2.out",
        },
      );

      // Pause — the visitor absorbs the point
      // (Achieved by delaying the next tween relative to previous staggered group)
      // We add an explicit delay after all AI cards are done
      tl.to({}, { duration: 0.3 }); // 300ms pause

      // Stage 2: Landing Craft result — dramatic entrance
      if (lcResult) {
        tl.fromTo(
          lcResult,
          { x: 60, opacity: 0, scale: 0.92 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          },
        );

        // Subtle glow behind LC result
        const glowEl = lcResult.querySelector("[data-graveyard-glow]");
        if (glowEl) {
          tl.fromTo(
            glowEl,
            { opacity: 0 },
            { opacity: 1, duration: 0.5 },
            "-=0.3",
          );
        }
      }

      tlRef.current = tl;
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

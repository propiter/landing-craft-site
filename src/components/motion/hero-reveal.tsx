"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import gsap from "gsap";

interface HeroRevealProps {
  children: React.ReactNode;
  /** The SVG element containing the craft line to animate (ref). */
  craftLineRef?: React.RefObject<SVGSVGElement | null>;
}

/**
 * Hero reveal sequence:
 * 1. GSAP draws the craft-line SVG path (stroke-dashoffset) — leads the eye
 * 2. Motion stagger-reveals the headline, subhead, CTAs
 *
 * Under `prefers-reduced-motion`: craft line is static, content appears instantly
 * with a gentle opacity-only fade.
 */
export default function HeroReveal({ children, craftLineRef }: HeroRevealProps) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      // Reduced motion: set SVG paths to final state instantly
      gsap.set(".craft-path", { strokeDashoffset: 0 });
      return;
    }

    // Select all craft-line paths within the SVG
    const paths = craftLineRef?.current?.querySelectorAll("path");
    if (!paths || paths.length === 0) return;

    const ctx = gsap.context(() => {
      paths.forEach((path) => {
        const length = (path as SVGPathElement).getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Stage 1: Draw each path sequentially with slight overlap
      paths.forEach((path, i) => {
        tl.to(
          path,
          {
            strokeDashoffset: 0,
            duration: i === 0 ? 1.2 : 0.6,
            delay: i === 0 ? 0 : 0.1,
          },
          i === 0 ? 0 : "-=0.3",
        );
      });
    }, [craftLineRef]);

    return () => {
      ctx.revert();
    };
  }, [reduce, craftLineRef]);

  // Stagger variants for text content — applied via Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduce ? 0 : 0.15,
        delayChildren: reduce ? 0 : 0.25,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

/**
 * Child of HeroReveal — automatically gets stagger variant treatment.
 */
export function HeroRevealChild({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  const childVariants = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0.2 : 0.6,
        ease: [0.19, 1, 0.22, 1] as const,
      },
    },
  };

  return (
    <motion.div variants={childVariants} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * CTA glow pulse — one-shot CSS keyframe animation after hero reveals.
 * Uses CSS class via `animate-cta-glow` defined in globals.css.
 * The pulse runs once, 2s after page load, then settles.
 */
export function CTAGlowPulse({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <>{children}</>;
  }

  return (
    <div className={`animate-cta-glow ${className}`}>
      {children}
    </div>
  );
}

"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInSectionProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  /** Wrap children in a motion.div with whileInView. Default true. */
  as?: "div" | "section" | "span";
  /** Amount of element visible before triggering (0-1). Default 0.2. */
  amount?: number;
}

/**
 * Wraps content in a scroll-triggered reveal.
 * - Animate ONLY opacity + transform (GPU-composited)
 * - Direction controls which axis the element enters from
 * - Respects `prefers-reduced-motion` — keeps opacity fade, drops movement
 * - `once: true` — does not re-trigger on scroll back
 */
export default function FadeInSection({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  as: Component = "div",
  amount = 0.2,
}: FadeInSectionProps) {
  const reduce = useReducedMotion();

  const directionMap: Record<Direction, { x?: number; y?: number }> = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: -30 },
    right: { x: 30 },
    none: {},
  };

  const move = reduce ? {} : directionMap[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...move,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.19, 1, 0.22, 1] as const, // --ease-out-expo
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

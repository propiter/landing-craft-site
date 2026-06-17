"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { type ReactNode } from "react";

interface StaggerChildrenProps {
  children: ReactNode;
  /** Delay between each child in seconds. Default 0.1 (100ms). */
  staggerDelay?: number;
  /** Duration of each child's animation in seconds. Default 0.5. */
  duration?: number;
  className?: string;
  /** Amount of element visible before triggering (0-1). Default 0.2. */
  amount?: number;
}

/**
 * Wraps a list of children and animates them in one-by-one on scroll.
 * - Uses Motion's `staggerChildren` for the cascade
 * - Each child fades + slides up 20px
 * - Respects `prefers-reduced-motion` — drops movement, keeps opacity
 * - `once: true`
 *
 * Usage:
 * ```jsx
 * <StaggerChildren>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </StaggerChildren>
 * ```
 */
export default function StaggerChildren({
  children,
  staggerDelay = 0.1,
  duration = 0.5,
  className = "",
  amount = 0.2,
}: StaggerChildrenProps) {
  const reduce = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduce ? 0 : staggerDelay,
        delayChildren: 0,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.19, 1, 0.22, 1] as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "-50px" }}
      variants={containerVariants}
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={childVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </motion.div>
  );
}

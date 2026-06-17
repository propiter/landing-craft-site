"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

interface ScaleOnHoverProps {
  children: ReactNode;
  /** Target scale on hover. Default 1.02. */
  scale?: number;
  /** Y translation on hover (pixels). Default -2 (lift). */
  lift?: number;
  className?: string;
}

/**
 * Wraps a card/element in a subtle scale + lift on hover.
 * - Only active on devices with `hover: hover` (no touch sticky)
 * - Respects `prefers-reduced-motion` — no transform, opacity-only border change
 * - Animate ONLY transform (GPU-composited)
 */
export default function ScaleOnHover({
  children,
  scale = 1.02,
  lift = -4,
  className = "",
}: ScaleOnHoverProps) {
  const reduce = useReducedMotion();

  // Under reduced motion, show the element statically (no transform)
  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{
        scale,
        y: lift,
        transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] as const },
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

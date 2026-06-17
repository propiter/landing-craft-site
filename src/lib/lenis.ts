"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Returns true if the user prefers reduced motion.
 * Safe to call during SSR (returns true as fallback).
 */
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * useLenis — mounts a Lenis smooth-scroll instance on the document.
 * Disabled entirely under `prefers-reduced-motion: reduce`.
 * Destroyed on unmount to prevent leaks on route changes.
 */
export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Never initialise on the server
    if (typeof window === "undefined") return;
    // Respect the user's motion preference
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo out
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}

export default useLenis;

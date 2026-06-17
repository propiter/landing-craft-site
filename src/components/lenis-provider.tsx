"use client";

import { useLenis } from "@/lib/lenis";
import { type ReactNode } from "react";

/**
 * Wraps children with Lenis smooth scroll.
 * Client-only — the hook handles SSR safety internally.
 */
export default function LenisProvider({ children }: { children: ReactNode }) {
  useLenis();
  return <>{children}</>;
}

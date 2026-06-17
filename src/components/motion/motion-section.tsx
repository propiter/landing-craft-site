"use client";

import SectionWrapper from "@/components/section-wrapper";
import FadeInSection from "./fade-in-section";
import StaggerChildren from "./stagger-children";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface MotionSectionProps {
  children: ReactNode;
  width?: "default" | "narrow" | "wide" | "full-bleed";
  background?: "bg" | "bg-alt" | "none";
  spacing?: "section" | "section-lg" | "section-sm" | "section-xs";
  id?: string;
  className?: string;
  /** Scroll reveal direction. Default "up". */
  direction?: Direction;
  /** Stagger children within the section. Default false. */
  stagger?: boolean;
  /** Stagger delay between children in seconds. Default 0.1. */
  staggerDelay?: number;
  /** Amount of element visible before triggering (0-1). Default 0.15. */
  amount?: number;
}

/**
 * Combines SectionWrapper + FadeInSection into a single component.
 * Optionally staggers children as they scroll into view.
 *
 * Usage:
 * ```jsx
 * <MotionSection background="bg" direction="up">
 *   <h2>Section title</h2>
 *   <p>Content...</p>
 * </MotionSection>
 *
 * <MotionSection background="bg-alt" stagger staggerDelay={0.08}>
 *   <Card>1</Card>
 *   <Card>2</Card>
 *   <Card>3</Card>
 * </MotionSection>
 * ```
 */
export default function MotionSection({
  children,
  width = "default",
  background = "none",
  spacing = "section",
  id,
  className = "",
  direction = "up",
  stagger = false,
  staggerDelay = 0.1,
  amount = 0.15,
}: MotionSectionProps) {
  const content = stagger ? (
    <StaggerChildren staggerDelay={staggerDelay} amount={amount}>
      {children}
    </StaggerChildren>
  ) : (
    children
  );

  return (
    <FadeInSection direction={direction} amount={amount}>
      <SectionWrapper
        width={width}
        background={background}
        spacing={spacing}
        id={id}
        className={className}
      >
        {content}
      </SectionWrapper>
    </FadeInSection>
  );
}

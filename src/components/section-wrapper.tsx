import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  width?: "default" | "narrow" | "wide" | "full-bleed";
  background?: "bg" | "bg-alt" | "none";
  spacing?: "section" | "section-lg" | "section-sm" | "section-xs";
  id?: string;
  className?: string;
}

const widthClasses: Record<string, string> = {
  default: "max-w-7xl mx-auto px-6 md:px-8 lg:px-12",
  narrow: "max-w-3xl mx-auto px-6 md:px-8",
  wide: "max-w-[90rem] mx-auto px-6 md:px-8 lg:px-12",
  "full-bleed": "px-0",
};

const bgClasses: Record<string, string> = {
  bg: "bg-bg",
  "bg-alt": "bg-bg-alt",
  none: "",
};

const spacingClasses: Record<string, string> = {
  section: "py-section",
  "section-lg": "py-section-lg",
  "section-sm": "py-section-sm",
  "section-xs": "py-section-xs",
};

export default function SectionWrapper({
  children,
  width = "default",
  background = "none",
  spacing = "section",
  id,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${bgClasses[background]} ${spacingClasses[spacing]} ${className}`}
    >
      <div className={widthClasses[width]}>
        {children}
      </div>
    </section>
  );
}

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article";
}

export default function Card({
  children,
  className = "",
  hover = true,
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={`bg-surface border border-border rounded-xl p-6 md:p-8
        ${hover ? "hover:-translate-y-1 hover:scale-[1.01] hover:border-brand/20 hover:shadow-card-hover" : ""}
        transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]
        ${className}`}
    >
      {children}
    </Component>
  );
}

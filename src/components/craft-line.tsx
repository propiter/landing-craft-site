"use client";

import { forwardRef } from "react";

interface CraftLineProps {
  variant?: "hero" | "divider" | "ornament" | "footer";
  className?: string;
}

const CraftLine = forwardRef<SVGSVGElement, CraftLineProps>(
  function CraftLine({ variant = "hero", className = "" }, ref) {
    switch (variant) {
      case "hero":
        return (
          <svg
            ref={ref}
            width="100%"
            height="100%"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className}`}
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="craftGradientHero" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E6A03A" stopOpacity="0.3" />
                <stop offset="30%" stopColor="#E6A03A" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#C5603A" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#E6A03A" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#E6A03A" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {/* Main hand-drawn curve */}
            <path
              className="craft-path"
              d="M-50 850 C200 700, 300 550, 450 420 C600 290, 550 180, 680 120 C750 90, 820 130, 880 60"
              stroke="url(#craftGradientHero)"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
            {/* Thinner echo */}
            <path
              className="craft-path"
              d="M-50 820 C200 670, 300 520, 450 390 C600 260, 550 160, 680 100 C750 70, 820 110, 880 40"
              stroke="url(#craftGradientHero)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.4"
            />
            {/* Accent flourish */}
            <path
              className="craft-path"
              d="M660 140 C670 110, 700 80, 740 90 C770 98, 760 140, 800 130"
              stroke="url(#craftGradientHero)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
          </svg>
        );

      case "divider":
        return (
          <svg
            ref={ref}
            width="100%"
            height="40"
            viewBox="0 0 1200 40"
            fill="none"
            preserveAspectRatio="none"
            className={className}
            aria-hidden="true"
          >
            <path
              d="M0 20 C200 10, 400 30, 600 20 C800 10, 1000 30, 1200 20"
              stroke="#E6A03A"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.15"
            />
          </svg>
        );

      case "ornament":
        return (
          <svg
            ref={ref}
            width="40"
            height="16"
            viewBox="0 0 40 16"
            fill="none"
            className={className}
            aria-hidden="true"
          >
            <path
              d="M2 10c8-4 14-4 18 0s6 4 18 0"
              stroke="#E6A03A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );

      case "footer":
        return (
          <svg
            ref={ref}
            width="60"
            height="12"
            viewBox="0 0 60 12"
            fill="none"
            className={className}
            aria-hidden="true"
          >
            <path
              d="M2 8c10-6 20-6 28 0s10 6 28 0"
              stroke="#E6A03A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );

      default:
        return null;
    }
  },
);

export default CraftLine;

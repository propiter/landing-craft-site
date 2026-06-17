export interface ShowcaseEntry {
  name: string;
  url: string;
  niche: string;
  blurb: string;
  image: string;
}

export const showcaseEntries: ShowcaseEntry[] = [
  {
    name: "Pulse",
    url: "https://pulse-nu-two.vercel.app",
    niche: "SaaS",
    blurb:
      "A bold, motion-rich marketing site for a health analytics platform. Scroll-reactive narrative, custom visuals, real Next.js.",
    image: "/images/showcase/pulse-thumb.jpg",
  },
  {
    name: "Synthex",
    url: "https://example.com/synthex",
    niche: "Indie Hacker",
    blurb:
      "A clean, conversion-focused landing for a developer API product. Research-driven copy, warm visual system, working waitlist form.",
    image: "/images/showcase/placeholder-landing.jpg",
  },
  {
    name: "Meridian",
    url: "https://example.com/meridian",
    niche: "Agency Client",
    blurb:
      "A multi-page marketing site for a boutique design agency. Signature motion, bento-grid portfolio, integrated contact flow.",
    image: "/images/showcase/placeholder-landing.jpg",
  },
];

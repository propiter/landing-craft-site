export const siteConfig = {
  name: "Landing Craft",
  tagline: "Concierge Landing Service",
  description:
    "Stop prompting. Start launching. I research your market, design a signature visual, and ship your Next.js landing — deployed, working, yours. First one's free.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://landing-craft-red.vercel.app",
  ogImage: "/og/og-image.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  author: "propiter",
  github: "https://github.com/propiter",
  locale: "en_US",
  twitter: "@propiter",
} as const;

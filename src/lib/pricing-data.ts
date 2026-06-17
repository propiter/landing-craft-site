export interface PricingTier {
  name: string;
  price: string;
  priceLabel: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  psychology: string;
  isHighlighted: boolean;
  badge?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Your first landing",
    price: "$0",
    priceLabel: "Free",
    description:
      "Everything you need to launch. Researched, designed, and deployed.",
    features: [
      "A multi-page Next.js landing — researched and designed for YOUR product",
      "Deployed on your-product.vercel.app — live and ready to share",
      "Working forms that actually send emails",
      "Real SEO — meta tags, JSON-LD, Open Graph, sitemap",
      "Scroll-reactive motion that feels alive",
      "Responsive on every device",
      "Your own GitHub repo — the code is yours",
      "One round of feedback included",
    ],
    ctaText: "Get your first landing — free",
    ctaHref: "#contact-form",
    psychology:
      "The first landing proves the quality. If it doesn't look crafted, you've lost nothing. If it does, you come back. That's the bet I'm making on my own work.",
    isHighlighted: true,
    badge: "Start here",
  },
  {
    name: "Edits & more landings",
    price: "$199",
    priceLabel: "per credit",
    description:
      "For when you need more. Pay-as-you-go, no subscription.",
    features: [
      "Revisions to your existing landing",
      "Additional landing pages (new products, campaigns, waitlists)",
      "Same quality — researched, designed, deployed",
      "Priority queue for returning clients",
    ],
    ctaText: "Buy credits",
    ctaHref: "#contact-form",
    psychology:
      "No subscription. You buy credits when you need them. They don't expire.",
    isHighlighted: false,
  },
  {
    name: "Custom domain + priority",
    price: "$499",
    priceLabel: "one-time",
    description:
      "For founders who are scaling and need responsiveness.",
    features: [
      "Everything in Free, plus:",
      "Custom domain setup (yourdomain.com)",
      "Priority queue — your work moves to the front",
      "Same-day support response",
      "Private showcase option (your landing stays off the public showcase)",
    ],
    ctaText: "Go Pro",
    ctaHref: "#contact-form",
    psychology: "Priority support. Same-day response.",
    isHighlighted: false,
  },
];

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
    name: "Landing Extra",
    price: "$25",
    priceLabel: "per landing",
    description:
      "Need another landing? Same quality, pay-as-you-go.",
    features: [
      "Additional landing — researched, designed, and deployed",
      "Deployed on your-product.vercel.app",
      "Same quality: real Next.js, working forms, SEO, motion",
      "No subscription, no commitment",
    ],
    ctaText: "Get an extra landing",
    ctaHref: "#contact-form",
    psychology:
      "No subscription. Just $25 when you need another landing. They don't expire.",
    isHighlighted: false,
  },
  {
    name: "Landing Pro",
    price: "$49",
    priceLabel: "per landing",
    description:
      "Your own domain + priority queue. For when you're scaling.",
    features: [
      "Everything in Free, plus:",
      "Custom domain setup (yourdomain.com) — SSL, DNS, the works",
      "Priority queue — your work moves to the front",
      "Same-day support response",
      "Private showcase option (your landing stays off the public showcase)",
    ],
    ctaText: "Go Pro",
    ctaHref: "#contact-form",
    psychology: "Custom domain, priority support. $49, one landing.",
    isHighlighted: false,
  },
];

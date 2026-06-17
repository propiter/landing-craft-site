export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQGroup {
  theme: string;
  questions: FAQItem[];
}

export const faqGroups: FAQGroup[] = [
  {
    theme: "Quality",
    questions: [
      {
        question: "Is this just another AI wrapper?",
        answer:
          "No. I'm a real person. I research your market, design with taste, and write real Next.js code. AI is a tool I use — it's not the service. The service is human judgment applied to your product's landing. This is not a prompt-to-template pipeline.",
      },
      {
        question: "How is this different from Lovable or v0?",
        answer:
          "Three things. (1) Research. Before I open a code editor, I study your market — competitors, keywords, audience. AI builders skip this and auto-complete from training data. That's why their output looks generic. (2) Code you own. You get standard Next.js in YOUR GitHub repo. No proprietary editor, no lock-in, no messy AI-generated code that no real dev can maintain. (3) It works. Forms send emails. Analytics fire. SEO is real. I test everything before I send you the link. If something breaks, I fix it personally.",
      },
      {
        question: "Will my landing look generic?",
        answer:
          "No. I design a signature visual system for YOUR product — pulled from market research, not a template library. No dark-navy + teal + dot-grid defaults. The result doesn't look like a SaaS template. It looks like YOUR landing.",
      },
      {
        question: "What about SEO?",
        answer:
          "Real SEO is included. Not placeholder meta — actual descriptions, Open Graph tags, JSON-LD structured data, and a sitemap that maps your pages. I mine the keywords your audience actually searches for and build your copy around them.",
      },
    ],
  },
  {
    theme: "Ownership",
    questions: [
      {
        question: "Do I own the code?",
        answer:
          "Yes. You get a GitHub repo under your account with a standard Next.js project. It's your code. You can edit it, hire a dev to extend it, deploy it anywhere. No lock-in.",
      },
      {
        question: "What if I want to leave Landing Craft?",
        answer:
          "You take your code and go. It's standard Next.js — any React developer can pick it up. You don't need me to make changes, add pages, or move hosts. The code is yours, period.",
      },
      {
        question: "Can I hire a dev to work on it later?",
        answer:
          "Yes. Any developer familiar with Next.js, TypeScript, and Tailwind will know exactly what they're looking at. Standard project structure, standard conventions, no proprietary anything.",
      },
      {
        question: "What if I want to switch from Vercel to somewhere else?",
        answer:
          "Go ahead. It's just a Next.js site. Deploy it on Netlify, your own server, AWS — wherever you want. I deploy to Vercel because it's the fastest way to get you live, but you're not locked to it.",
      },
    ],
  },
  {
    theme: "Process",
    questions: [
      {
        question: "How long does it take?",
        answer:
          "Most landings ship in 3–5 business days from the moment you fill out the intake form. Complex projects might take a day or two longer. I'll give you a clear timeline when I review your product.",
      },
      {
        question: "What do you need from me?",
        answer:
          "A completed intake form — product name, what it does, who it's for, what you need from your landing. If I have questions, I'll reach out. If you have brand assets (logo, colors, fonts), send them. If not, I design from scratch.",
      },
      {
        question: "Can I request changes?",
        answer:
          "Yes. One round of feedback is included in the free landing. After that, edits go through the Credits plan — pay-as-you-go. No subscription, no commitment. You only pay when you need more work.",
      },
      {
        question: "What if I don't have any design direction?",
        answer:
          "That's fine. Most clients don't. I'll design a visual system based on your market research, your product's personality, and what will convert your audience. You'll see the direction before I build anything.",
      },
    ],
  },
  {
    theme: "Practical",
    questions: [
      {
        question: "Can I use my own domain?",
        answer:
          "Yes, with the Pro plan ($499). I'll set up your custom domain on Vercel — DNS configuration, SSL, the works. If you're technical and want to do it yourself, the code is yours, so you can deploy to your own Vercel account on any domain you own.",
      },
      {
        question: "Do the forms really work?",
        answer:
          "Yes. Forms send real emails to your inbox. I test every form before shipping. If you want integration with a specific tool (Resend, Mailchimp, ConvertKit), I can wire that up — just mention it in your intake form.",
      },
      {
        question: "What if I need something custom?",
        answer:
          "Landing Craft focuses on landing pages — not full applications. But if you need something specific (Stripe checkout, Calendly embed, API integration), mention it in the intake form. If it's within scope for a landing, I'll include it. If not, I'll tell you honestly and point you in the right direction.",
      },
      {
        question: "Do you do copywriting too?",
        answer:
          "Yes. The copy on your landing is part of the service. I write it based on your market research — keywords, audience profile, competitor positioning. If you already have copy you love, I'll use it. If not, I'll write it.",
      },
    ],
  },
  {
    theme: "Legal & Showcase",
    questions: [
      {
        question: "Do you publish my landing in the showcase?",
        answer:
          "Only with your permission. The intake form has a checkbox: \"OK to feature my landing in your showcase.\" Check it if you're fine with it, leave it blank if you're not. No pressure either way.",
      },
      {
        question: "Can I keep my landing private?",
        answer:
          "Yes. Don't check the showcase box. Your landing stays between you and me. The Pro plan also includes a private showcase option by default.",
      },
      {
        question: "What if I don't like the result?",
        answer:
          "First one's free. You literally cannot lose money. If you don't like what I build, you walk away with a real, deployed landing at zero cost. No refund to process because there's no payment to refund. That's the guarantee.",
      },
      {
        question: "Why is the first one free? What's the catch?",
        answer:
          "No catch. The free landing proves the quality. If you love it, you come back for edits, more landings, or Pro. If you don't, you keep the landing anyway. I'm betting on my own work. The free tier IS the sales pitch — the landing itself sells the service better than any copy could.",
      },
    ],
  },
];

export const processFAQItems: FAQItem[] = [
  {
    question: "How long does the whole thing take?",
    answer:
      "Most landings ship in 3–5 business days from the moment you fill out the form. Complex projects might take a day or two longer. I'll give you a clear timeline when I review your product.",
  },
  {
    question: "What if I need changes?",
    answer:
      "The first round of feedback is included in the free landing. After that, edits go through the Credits plan — pay-as-you-go, no subscription. You only pay when you need more.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "A completed intake form. That's it. If I need clarification, I'll reach out. If you have brand assets (logo, colors, fonts), send them. If not, I'll design from scratch.",
  },
  {
    question: "Can I talk to you before committing?",
    answer:
      "Fill out the form. I'll review it and respond within 48 hours — personally. No auto-responder. No sales script. Just me.",
  },
];

export const pricingFAQItems: FAQItem[] = [
  {
    question: "What does \"free\" actually include?",
    answer:
      "A complete, multi-page Next.js landing — researched, designed, and deployed on your-product.vercel.app. Working forms. Real SEO. Motion. Your code. No credit card. No trial expiration. It's yours.",
  },
  {
    question: "How do credits work?",
    answer:
      "One credit = one round of work. Edits to an existing landing? One credit. A whole new landing page? Credits depend on scope — I'll give you a clear quote before I start. Credits don't expire. You buy them when you need them.",
  },
  {
    question: "Can I upgrade from Free later?",
    answer:
      "Yes. Free doesn't lock you into anything. When you need edits, a custom domain, or another landing, buy credits or go Pro. No penalty for starting free.",
  },
  {
    question: "Is there really no catch?",
    answer:
      "The free landing proves the quality. If you love it, you come back for edits, more landings, or Pro. If you don't, you keep the landing anyway. That's the bet I'm making — on my own work.",
  },
];

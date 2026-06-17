export interface NavLink {
  label: string;
  href: string;
  isCta?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "Showcase", href: "/showcase" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
];

export const footerNavLinks: NavLink[] = [
  { label: "Showcase", href: "/showcase" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

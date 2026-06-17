import Link from "next/link";
import CTAButton from "./cta-button";
import Card from "./card";

interface PricingTierProps {
  name: string;
  price: string;
  priceLabel: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  psychology: string;
  isHighlighted?: boolean;
  badge?: string;
}

export default function PricingCard({
  name,
  price,
  priceLabel,
  description,
  features,
  ctaText,
  ctaHref,
  psychology,
  isHighlighted = false,
  badge,
}: PricingTierProps) {
  return (
    <Card
      hover={false}
      className={`relative ${
        isHighlighted
          ? "border-brand/20 py-10 px-6 md:px-10"
          : "py-8 px-6"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 right-6 inline-flex items-center px-3 py-1 text-xs font-medium text-brand bg-brand-subtle rounded-full">
          {badge}
        </span>
      )}

      {/* Price header */}
      <div className="mb-2">
        <h3
          className={`font-display ${
            isHighlighted ? "text-5xl" : "text-3xl"
          } text-brand leading-none`}
        >
          {price}
        </h3>
        <p className="text-sm text-muted mt-1">
          {priceLabel} — {description}
        </p>
      </div>

      {/* Features */}
      <ul className="mt-6 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 mt-0.5 text-brand"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-sm text-muted leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Psychology line */}
      <p className="mt-4 text-xs text-brand italic leading-relaxed">
        {psychology}
      </p>

      {/* CTA */}
      <div className="mt-6">
        <CTAButton href={ctaHref} size="sm" className="w-full sm:w-auto">
          {ctaText}
        </CTAButton>
      </div>
    </Card>
  );
}

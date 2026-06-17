import Link from "next/link";
import Card from "./card";

interface ShowcaseCardProps {
  name: string;
  url: string;
  niche: string;
  blurb: string;
  image: string;
}

export default function ShowcaseCard({
  name,
  url,
  niche,
  blurb,
  image,
}: ShowcaseCardProps) {
  return (
    <Card className="group overflow-hidden p-0" hover>
      {/* Screenshot */}
      <div className="relative aspect-[16/10] bg-surface-hover overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          role="img"
          aria-label={`${name} landing page`}
        />
        {/* Badge */}
        <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-brand bg-brand-subtle rounded-full">
          {niche}
        </span>
      </div>

      {/* Details */}
      <div className="p-5">
        <h3 className="text-xl font-display text-ink mb-1.5 group-hover:text-brand transition-colors duration-200">
          {name}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{blurb}</p>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover transition-colors duration-200"
        >
          View live
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </Link>
      </div>
    </Card>
  );
}

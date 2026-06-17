import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { footerNavLinks, footerLegalLinks } from "@/lib/nav-data";

export default function Footer() {
  return (
    <footer className="py-16 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Craft-line ornament separator */}
        <div className="flex justify-center mb-12">
          <svg width="60" height="12" viewBox="0 0 60 12" fill="none" aria-hidden="true">
            <path
              d="M2 8c10-6 20-6 28 0s10 6 28 0"
              stroke="url(#footerCraftGradient)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="footerCraftGradient" x1="0" y1="8" x2="60" y2="8">
                <stop offset="0" stopColor="#E6A03A" stopOpacity="0" />
                <stop offset="0.25" stopColor="#E6A03A" stopOpacity="0.4" />
                <stop offset="0.5" stopColor="#E6A03A" stopOpacity="0.6" />
                <stop offset="0.75" stopColor="#E6A03A" stopOpacity="0.4" />
                <stop offset="1" stopColor="#E6A03A" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-ink hover:text-brand transition-colors duration-200 mb-3"
            >
              <span className="font-display text-lg font-semibold tracking-tight">
                Landing Craft
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-3">
              A concierge landing service by propiter.
            </p>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-faint hover:text-ink transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              github.com/propiter
            </a>
          </div>

          {/* Column 2: Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <span className="block w-full" />
            {footerLegalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-faint hover:text-muted transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3: Empty — craft-line ornament occupies visually */}
          <div className="hidden md:block" />
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border-subtle">
          <p className="text-xs text-faint">
            &copy; 2026 propiter. Built with Next.js. Deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}

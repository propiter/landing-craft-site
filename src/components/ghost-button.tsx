import Link from "next/link";

export default function GhostButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const isInternal = href.startsWith("/") || href.startsWith("#");

  const baseClasses =
    "inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-medium rounded-lg " +
    "bg-transparent text-ink border border-border " +
    "hover:border-brand hover:text-brand " +
    "active:scale-[0.98] " +
    "transition-all duration-200 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

  if (isInternal) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${className}`}
    >
      {children}
    </a>
  );
}

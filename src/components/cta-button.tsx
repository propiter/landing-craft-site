import Link from "next/link";

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  size?: "default" | "sm";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function CTAButton({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  type,
  disabled = false,
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

  const sizeClasses =
    size === "sm"
      ? "px-5 py-2 text-sm"
      : "px-8 py-4 text-base md:text-lg";

  const variantClasses =
    variant === "primary"
      ? "bg-brand text-ink-inverse hover:bg-brand-hover disabled:opacity-50 disabled:cursor-not-allowed"
      : "bg-transparent text-ink border border-border hover:border-brand hover:text-brand disabled:opacity-40 disabled:cursor-not-allowed";

  const motionClasses =
    variant === "primary"
      ? "hover:scale-[1.02] active:scale-[0.98]"
      : "active:scale-[0.98]";

  // If href is an anchor link on current page or external
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${sizeClasses} ${variantClasses} ${motionClasses} ${className}`}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${motionClasses} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-disabled={disabled}
    >
      {children}
    </a>
  );
}

export function SubmitButton({
  children,
  disabled = false,
  loading = false,
  className = "",
}: {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-medium
        bg-brand text-ink-inverse rounded-lg
        hover:bg-brand-hover hover:scale-[1.02] active:scale-[0.98]
        transition-all duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${className}`}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Sending...
        </span>
      ) : (
        children
      )}
    </button>
  );
}

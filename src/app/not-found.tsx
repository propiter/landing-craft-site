import Link from "next/link";
import SectionWrapper from "@/components/section-wrapper";

export default function NotFound() {
  return (
    <SectionWrapper width="narrow" background="bg" spacing="section-lg" className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="font-display text-6xl md:text-7xl text-brand leading-none mb-4">
        404
      </h1>
      <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-4 text-balance">
        This page doesn&apos;t exist.
      </h2>
      <p className="text-base text-muted max-w-md mb-8 leading-relaxed">
        But your landing could. Tell me about your product and get a real,
        deployed, working landing — free.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/#contact-form"
          className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-medium bg-brand text-ink-inverse rounded-lg hover:bg-brand-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          Get your first landing — free
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-medium bg-transparent text-ink border border-border rounded-lg hover:border-brand hover:text-brand active:scale-[0.98] transition-all duration-200"
        >
          Go home
        </Link>
      </div>
    </SectionWrapper>
  );
}

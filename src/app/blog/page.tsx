import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, blogMetadata } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: blogMetadata.title,
  description: blogMetadata.description,
  openGraph: {
    title: blogMetadata.title,
    description: blogMetadata.description,
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-section">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-ink tracking-tight text-balance">
            Blog
          </h1>
          <p className="text-lg text-muted mt-4 max-w-2xl">
            Thoughts on landing pages, AI builders, design craft, and launching products that don&apos;t look AI-generated.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-bg-alt py-section">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-surface border border-border rounded-xl p-6 md:p-8 hover:border-brand/30 transition-colors duration-200"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <time className="text-xs text-faint">{post.date}</time>
                  <span className="text-xs text-faint">·</span>
                  <span className="text-xs text-faint">{post.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display text-ink tracking-tight mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-brand transition-colors duration-200"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-base text-muted leading-relaxed mb-4">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex px-2.5 py-0.5 text-xs font-medium text-brand bg-brand-subtle rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover transition-colors duration-200"
                >
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

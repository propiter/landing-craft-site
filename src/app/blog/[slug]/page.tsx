import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { siteConfig } from "@/lib/site-config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Landing Craft`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* JSON-LD: BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: siteConfig.author,
            },
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.url}/logo.svg`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${siteConfig.url}/blog/${post.slug}`,
            },
          }),
        }}
      />

      <article className="bg-bg py-section">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <Link
              href="/blog"
              className="text-sm text-muted hover:text-ink transition-colors duration-200"
            >
              ← Back to blog
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-ink tracking-tight text-balance mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-faint">
              <time dateTime={post.date}>{post.date}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex px-2.5 py-0.5 text-xs font-medium text-brand bg-brand-subtle rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Content */}
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* CTA */}
      <section className="bg-bg-alt py-section">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-display text-ink tracking-tight text-balance mb-4">
            Ready to prove it?
          </h2>
          <p className="text-base text-muted max-w-lg mx-auto mb-6">
            First landing is free. Tell me about your product and I&apos;ll show you what concierge quality looks like.
          </p>
          <Link
            href="/#contact-form"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-brand text-ink-inverse rounded-lg hover:bg-brand-hover active:scale-[0.97] transition-all duration-200"
          >
            Get your first landing — free
          </Link>
        </div>
      </section>
    </>
  );
}

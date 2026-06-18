import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import Header from "@/components/nav";
import Footer from "@/components/footer";
import LenisProvider from "@/components/lenis-provider";
import GoogleAnalytics from "@/components/google-analytics";
import CookieBanner from "@/components/cookie-banner";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Your landing, researched and crafted by a human`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Your landing, researched and crafted by a human`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: siteConfig.twitter,
    title: `${siteConfig.name} — Your landing, researched and crafted by a human`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#171613" />
      </head>
      <body className="min-h-screen flex flex-col font-body text-ink bg-bg">
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
              logo: `${siteConfig.url}/logo.svg`,
              description: siteConfig.description,
              founder: {
                "@type": "Person",
                name: siteConfig.author,
              },
              sameAs: [siteConfig.github],
            }),
          }}
        />
        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteConfig.name,
              url: siteConfig.url,
              description: siteConfig.description,
            }),
          }}
        />
        <LenisProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
        <GoogleAnalytics />
        <CookieBanner />
      </body>
    </html>
  );
}

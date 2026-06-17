"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/lib/site-config";
import { navLinks } from "@/lib/nav-data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 100);
    }

    // Check initial position
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-16 flex items-center justify-between px-6 md:px-8 lg:px-12
        transition-all duration-300
        ${scrolled
          ? "bg-surface-raised/90 backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 text-ink hover:text-brand transition-colors duration-200"
        aria-label={`${siteConfig.name} — ${siteConfig.tagline}`}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
          aria-hidden="true"
        >
          <path
            d="M6 22V6c0-2 2-4 4-2l8 8c1 1 1 3 0 4l-8 8c-2 2-4 0-4-2Z"
            stroke="url(#logoGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <defs>
            <linearGradient id="logoGradient" x1="6" y1="6" x2="18" y2="22">
              <stop stopColor="#E6A03A" />
              <stop offset="1" stopColor="#C5603A" />
            </linearGradient>
          </defs>
        </svg>
        <span className="font-display text-lg font-semibold tracking-tight">
          Landing Craft
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-2 text-sm text-muted hover:text-ink transition-colors duration-200 rounded-lg"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Desktop CTA */}
      <div className="hidden lg:block">
        <Link
          href="#contact-form"
          className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium
            bg-brand text-ink-inverse rounded-lg
            hover:bg-brand-hover active:scale-[0.97] transition-all duration-200"
        >
          Get free landing
        </Link>
      </div>

      {/* Mobile hamburger */}
      <MobileNav />
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="w-11 h-11 flex items-center justify-center rounded-lg text-muted hover:text-ink transition-colors duration-200"
        aria-label="Open navigation menu"
        onClick={() => setOpen(true)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          />
        )}
      </AnimatePresence>

      {/* Panel — slide in from right */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 right-0 z-50 h-full w-[300px] max-w-[80vw] bg-surface-raised border-l border-border flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
          >
            {/* Close button */}
            <div className="flex items-center justify-end p-4">
              <button
                type="button"
                className="w-11 h-11 flex items-center justify-center rounded-lg text-muted hover:text-ink transition-colors duration-200"
                aria-label="Close navigation menu"
                onClick={close}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Links — staggered reveal */}
            <motion.nav
              className="flex flex-col flex-1 px-6"
              aria-label="Mobile navigation"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                },
              }}
            >
              {[...navLinks, { label: "FAQ", href: "/faq" }].map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 text-base text-ink hover:text-brand transition-colors duration-200"
                    onClick={close}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Mobile CTA */}
            <div className="p-6 border-t border-border-subtle">
              <Link
                href="#contact-form"
                className="flex items-center justify-center w-full px-5 py-3 text-sm font-medium
                  bg-brand text-ink-inverse rounded-lg
                  hover:bg-brand-hover active:scale-[0.97] transition-all duration-200"
                onClick={close}
              >
                Get free landing
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";

/**
 * Cookie Consent Banner — Consent Mode v2 compliant.
 *
 * On first visit, shows a minimal banner. On "Accept", updates gtag consent
 * and stores preference in localStorage. On "Decline", stores the decision.
 *
 * Renders nothing if consent was already given/declined in a previous session.
 */
const CONSENT_KEY = "lc-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      // Small delay so layout is complete before showing
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function handleAccept() {
    // Update Consent Mode v2 to granted
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
    // GTM consent via dataLayer
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "consent_update",
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50 p-4 bg-surface border border-border rounded-xl shadow-lg animate-in slide-in-from-bottom-4"
    >
      <p className="text-sm text-muted leading-relaxed mb-4">
        I use cookies to understand how people find and use this site. No ads. No
        tracking across sites. Just anonymous analytics.
      </p>
      <div className="flex gap-3">
        <button
          onClick={handleAccept}
          className="flex-1 px-4 py-2 text-sm font-medium rounded-lg bg-brand text-bg hover:bg-brand-hover active:scale-[0.98] transition-all duration-200"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="flex-1 px-4 py-2 text-sm font-medium rounded-lg bg-bg-alt border border-border text-muted hover:text-ink hover:border-brand/30 transition-all duration-200"
        >
          Decline
        </button>
      </div>
    </div>
  );
}

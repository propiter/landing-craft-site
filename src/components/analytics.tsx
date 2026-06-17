"use client";

import { useEffect } from "react";

/**
 * Analytics — Google Analytics 4 + Google Tag Manager loader.
 *
 * Reads NEXT_PUBLIC_GA_MEASUREMENT_ID and NEXT_PUBLIC_GTM_ID from env.
 * If neither is set, renders nothing (no error, no dead stub).
 *
 * CONSENT MODE v2: gtag defaults to 'denied' until the cookie banner grants consent.
 * The cookie banner (CookieBanner) calls window.gtag('consent', 'update', ...)
 * when the user accepts.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  useEffect(() => {
    // GA4 via gtag
    if (gaId) {
      // Inject gtag script
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize gtag with Consent Mode v2 — default denied
      const inline = document.createElement("script");
      inline.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('consent', 'default', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        });
        gtag('config', '${gaId}', {
          'send_page_view': true,
          'anonymize_ip': true
        });
      `;
      document.head.appendChild(inline);
    }

    // Google Tag Manager
    // GTM can load GA4 and other tags — if both GA_ID and GTM_ID are set,
    // prefer GTM; otherwise use standalone GA4.
    if (gtmId && !gaId) {
      const script = document.createElement("script");
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');

        // Consent Mode v2 defaults for GTM
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'analytics_storage': 'denied',
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        });
      `;
      document.head.appendChild(script);

      // GTM noscript iframe
      const noscript = document.createElement("noscript");
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertBefore(noscript, document.body.firstChild);
    }
  }, [gaId, gtmId]);

  // If neither set, render nothing
  if (!gaId && !gtmId) return null;

  // Component itself renders nothing — scripts are injected via useEffect
  return null;
}

/**
 * Conversion event helper — call on primary CTA click.
 * Example: import { trackConversion } from "@/components/analytics";
 *          trackConversion("free_landing_cta");
 */
export function trackConversion(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, params);
  }
  // GTM dataLayer push
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({ event: eventName, ...params });
  }
}

// Analytics event helper — logic lives in lib, the loader is <GoogleAnalytics /> (next/script).
// Fires a conversion/interaction event to GA4 (gtag) and/or GTM (dataLayer).
// Safe no-op on the server and before analytics loads (e.g. before cookie consent).

type EventParams = Record<string, string | number | boolean>;

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: Array<Record<string, unknown>>;
};

export function trackConversion(eventName: string, params?: EventParams): void {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  w.gtag?.("event", eventName, params);
  w.dataLayer?.push({ event: eventName, ...params });
}

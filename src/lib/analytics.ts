type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

let initialized = false;

export function initializeAnalytics(): boolean {
  if (typeof window === "undefined") return false;
  if (initialized) return true;
  const measurementId = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY?.trim();
  if (!measurementId || !/^G-[A-Z0-9]+$/i.test(measurementId)) return false;
  const target = window as AnalyticsWindow;
  target.dataLayer = target.dataLayer || [];
  target.gtag = function (..._args: unknown[]) {
    // Google requires an Arguments object rather than an array.
    target.dataLayer?.push(arguments);
  };
  target.gtag("set", "developer_id.dZjgwMW", true);
  target.gtag("js", new Date());
  target.gtag("config", measurementId, { send_page_view: false });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
  initialized = true;
  return true;
}

// Only allow non-identifying funnel properties. Never send form values or reports.
export function trackEvent(name: "free_check_started" | "contact_submitted" | "booking_completed", properties: { meeting_type?: "phone" | "zoom" } = {}) {
  if (!initializeAnalytics()) return;
  (window as AnalyticsWindow).gtag?.("event", name, properties);
}

export function trackPageView(pathname: string) {
  if (!initializeAnalytics()) return;
  (window as AnalyticsWindow).gtag?.("event", "page_view", {
    page_path: pathname,
    page_location: `${window.location.origin}${pathname}`,
    page_title: document.title,
  });
}
/**
 * Privacy-Compliant Google Analytics 4 (GA4) Suite
 * 
 * Strict Privacy Standards:
 * - NEVER sends customer PII (names, personal phone numbers, messages).
 * - Non-blocking asynchronous event dispatching.
 * - Supports NEXT_PUBLIC_GA_ID or graceful no-op.
 */

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Log page view
 */
export function pageview(url: string) {
  if (typeof window === "undefined" || !window.gtag || !GA_TRACKING_ID) return;
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
    page_location: window.location.href,
  });
}

/**
 * Generic event tracker with safety check
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  if (window.gtag && GA_TRACKING_ID) {
    window.gtag("event", eventName, params);
  } else if (process.env.NODE_ENV === "development") {
    console.log(`[GA4 Event] ${eventName}:`, params);
  }
}

/**
 * 1. Track WhatsApp Click (Contextual CTA)
 * Required by Audit: click_whatsapp, package_name, page_location
 */
export function trackWhatsAppClick(params: {
  packageName?: string;
  pageLocation: string;
  ctaPosition: string;
}) {
  trackEvent("click_whatsapp", {
    package_name: params.packageName || "General Inquiry",
    page_location: params.pageLocation,
    cta_position: params.ctaPosition,
  });
}

/**
 * 2. Track Package View
 */
export function trackPackageView(params: {
  packageName: string;
  price?: string | number;
}) {
  trackEvent("view_package", {
    package_name: params.packageName,
    price: params.price,
  });
}

/**
 * 3. Track Phone Call Click
 */
export function trackCallClick(params: {
  phoneNumber: string;
  pageLocation: string;
}) {
  trackEvent("click_call", {
    phone_number: params.phoneNumber,
    page_location: params.pageLocation,
  });
}

/**
 * 4. Track Map / Waypoint Interaction
 */
export function trackMapClick(params: {
  spotName: string;
  pageLocation: string;
}) {
  trackEvent("click_map", {
    spot_name: params.spotName,
    page_location: params.pageLocation,
  });
}

/**
 * 5. Track Gallery View
 */
export function trackGalleryView(params: {
  photoTitle: string;
}) {
  trackEvent("view_gallery", {
    photo_title: params.photoTitle,
  });
}

/**
 * 6. Track FAQ Open / View
 */
export function trackFaqView(params: {
  question: string;
}) {
  trackEvent("view_faq", {
    question: params.question,
  });
}

/**
 * Shared WhatsApp CTA helpers. All "Connect on WhatsApp" buttons across the
 * site use these so the number lives in exactly one place.
 *
 * International format, digits only (no "+", spaces, or dashes).
 */
export const WHATSAPP_NUMBER = "919983890920";
export const WHATSAPP_MESSAGE =
  "Hi Varion Media — I found you online and I'd like to talk about growing my business.";

export function whatsappHref(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppIcon({
  className = "",
  size = 18,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" aria-hidden className={className}>
      <path d="M16.04 4C9.95 4 5 8.95 5 15.04c0 2.13.6 4.16 1.72 5.94L5 28l7.2-1.66a11 11 0 0 0 3.84.7h.01c6.08 0 11.03-4.95 11.04-11.04C27.09 8.95 22.13 4 16.04 4zm6.43 15.57c-.27.76-1.58 1.46-2.18 1.5-.56.05-1.27.07-2.05-.13-.47-.12-1.08-.34-1.86-.67-3.27-1.41-5.4-4.7-5.57-4.92-.16-.22-1.33-1.77-1.33-3.37 0-1.6.84-2.39 1.14-2.72.3-.33.65-.41.87-.41l.62.01c.2.01.47-.08.73.56.27.65.92 2.25 1 2.41.08.16.13.35.03.57-.11.22-.16.35-.32.54-.16.19-.34.43-.48.57-.16.16-.33.34-.14.66.19.32.84 1.39 1.81 2.25 1.24 1.11 2.29 1.45 2.61 1.61.32.16.51.13.7-.08.19-.22.81-.94 1.02-1.27.21-.32.43-.27.72-.16.3.11 1.89.89 2.21 1.05.32.16.54.24.62.37.08.14.08.78-.19 1.54z" />
    </svg>
  );
}

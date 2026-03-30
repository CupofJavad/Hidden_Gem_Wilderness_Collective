/**
 * Central URLs and env-driven checkout templates for Vite.
 * Set values in `.env` (see `.env.example`). Optional vars fall back to sensible on-site paths.
 */

const env = import.meta.env;

export const siteConfig = {
  brandName: 'Hidden Gem Wilderness Collective',
  gaMeasurementId: (env.VITE_GA_MEASUREMENT_ID as string) || '',
  /** Stripe Customer Portal, Memberful, etc. */
  memberLoginUrl: (env.VITE_MEMBER_LOGIN_URL as string) || '',
  /** Main storefront / cart (Printful, Shopify, etc.) */
  cartUrl: (env.VITE_CART_URL as string) || '',
  /** Stripe Payment Link, Donorbox, etc. */
  donateUrl: (env.VITE_DONATE_URL as string) || '',
  /** Hosted newsletter URL (Mailchimp / Google Form GET link) */
  newsletterSignupUrl: (env.VITE_NEWSLETTER_SIGNUP_URL as string) || '',
  /**
   * Replace {slug} with event slug, e.g. https://buy.stripe.com/...?client_reference_id={slug}
   */
  eventBadgeCheckoutTemplate: (env.VITE_EVENT_BADGE_CHECKOUT_TEMPLATE as string) || '',
  itineraryCheckoutTemplate: (env.VITE_ITINERARY_CHECKOUT_TEMPLATE as string) || '',
  merchCheckoutTemplate: (env.VITE_MERCH_CHECKOUT_TEMPLATE as string) || '',
  membershipCheckoutUrls: {
    free: (env.VITE_MEMBERSHIP_FREE_URL as string) || '/contact?topic=membership&plan=explorer',
    badge: (env.VITE_MEMBERSHIP_BADGE_URL as string) || '',
    insider: (env.VITE_MEMBERSHIP_INSIDER_URL as string) || '',
    patron: (env.VITE_MEMBERSHIP_PATRON_URL as string) || '',
  },
} as const;

function applyTemplate(template: string, vars: Record<string, string>): string {
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    result = result.split(`{${key}}`).join(value);
  }
  return result;
}

export function resolveItineraryCheckoutUrl(slug: string, explicitBuyUrl: string): string {
  if (explicitBuyUrl && explicitBuyUrl !== '#') return explicitBuyUrl;
  if (siteConfig.itineraryCheckoutTemplate) {
    return applyTemplate(siteConfig.itineraryCheckoutTemplate, { slug });
  }
  return `/contact?topic=itinerary&slug=${encodeURIComponent(slug)}`;
}

export function resolveMerchCheckoutUrl(slug: string, explicitBuyUrl: string): string {
  if (explicitBuyUrl && explicitBuyUrl !== '#') return explicitBuyUrl;
  if (siteConfig.merchCheckoutTemplate) {
    return applyTemplate(siteConfig.merchCheckoutTemplate, { slug });
  }
  return `/contact?topic=merch&slug=${encodeURIComponent(slug)}`;
}

export function resolveEventBadgeCheckoutUrl(slug: string): string {
  if (siteConfig.eventBadgeCheckoutTemplate) {
    return applyTemplate(siteConfig.eventBadgeCheckoutTemplate, { slug });
  }
  return `/contact?topic=event&slug=${encodeURIComponent(slug)}`;
}

export function getMemberLoginHref(): string {
  return siteConfig.memberLoginUrl || '/membership#member-account';
}

export function getCartHref(): string {
  return siteConfig.cartUrl || '/merch';
}

export function getDonateHref(): string {
  return siteConfig.donateUrl || '/contact?topic=donation';
}

/** Footer “Join newsletter”: hosted list if set, otherwise anchor to homepage newsletter block. */
export function getFooterNewsletterHref(): string {
  return siteConfig.newsletterSignupUrl || '/#newsletter';
}

export function resolveMembershipTierHref(
  tier: 'free' | 'badge' | 'insider' | 'patron',
): string {
  const direct = siteConfig.membershipCheckoutUrls[tier];
  if (tier === 'free') return siteConfig.membershipCheckoutUrls.free;
  if (direct) return direct;
  return `/contact?topic=membership&plan=${tier}`;
}

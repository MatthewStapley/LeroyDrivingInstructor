// Central place for real business info. Update phone here and it flows
// through the whole site.
//
// Leroy is a service-area driving instructor and does not receive customers
// at a home address, so no street address is published — only the
// Brighton & Hove service area. He does not publish a business email
// either; phone and WhatsApp are the only public contact methods.

export const site = {
  name: "Leroy Driving Instructor",
  tagline: "Manual driving lessons in Brighton & Hove",
  phone: "07725 000856",
  phoneHref: "tel:07725000856",
  whatsappHref: "https://wa.me/447725000856",
  serviceArea: "Brighton & Hove",
  vehicle: "Gunmetal grey Ford Fiesta (manual)",
} as const;

// Every Google Business Profile link/figure lives here — one place to update
// rather than repeating URLs throughout the codebase.
export const google = {
  // Confirmed public Google Business profile — used for "Read Reviews", opens
  // in a new tab.
  profileUrl: "https://share.google/ZhkIgwwkXgLtiNBzk",
  // Confirmed by Leroy in conversation — used for "Leave a Review". Note this
  // currently opens his public profile rather than a direct write-a-review
  // form; swap in the direct write-a-review deep link if/when he supplies one
  // (usually formatted like https://g.page/r/XXXXXXXX/review).
  writeReviewUrl: "https://share.google/uL9JFRjVpRruSa67c",
  // Confirmed live figures for the trust bar.
  rating: 5.0,
  reviewCount: 7,
} as const;

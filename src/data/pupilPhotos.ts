// Browser-facing paths for real pupil photos. These live in public/images
// and are served directly (not run through Astro's image pipeline), so
// every reference is a plain string path in the /images/... form rather
// than an imported ImageMetadata object. Centralised here so the six real
// filenames only appear once.
export const pupilPhotos = {
  pass1: "/images/leroys-pass-1.jpg",
  pass2: "/images/leroys-pass-2.jpg",
  pass3: "/images/leroys-pass-3.jpg",
  benCoxhead: "/images/ben-coxhead-pass.png",
  vikkiPage: "/images/vikki-page-pass.webp",
  kaylaPrior: "/images/kayla-prior-pass.webp",
} as const;

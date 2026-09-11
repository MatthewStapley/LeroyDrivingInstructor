export interface Reason {
  title: string;
  description: string;
}

export const reasons: Reason[] = [
  {
    title: "20+ Years of Experience",
    description:
      "More than two decades teaching learners of every level across Brighton and Hove, from complete beginners to those polishing up before their test.",
  },
  {
    title: "Flexible Lesson Times",
    description:
      "Evenings and weekends available, so lessons fit around work, college or family life — not the other way round.",
  },
  {
    title: "Affordable, Transparent Pricing",
    description:
      "£40 an hour with genuine savings on block bookings. No hidden fees, no surprise add-ons.",
  },
  {
    title: "Local Route Knowledge",
    description:
      "From busy city-centre streets to the coastal roads, lessons prepare you for the exact conditions you'll face on your test.",
  },
  {
    title: "Patient, Student-Friendly Approach",
    description:
      "A calm, supportive teaching style built for nervous beginners and confident learners alike.",
  },
  {
    title: "A Growing Gallery of Passes",
    description:
      "Real pupils, real results — see below who's passed with Leroy so far.",
  },
];

export interface Step {
  title: string;
  description: string;
}

export const howItWorks: Step[] = [
  {
    title: "Get in touch",
    description: "Call or WhatsApp to say hello and share a little about your experience so far.",
  },
  {
    title: "Arrange your first lesson",
    description: "Pick a time that suits — evenings and weekends available — and Leroy will confirm a pickup point near you.",
  },
  {
    title: "Learn at your pace",
    description: "Every lesson is tailored to your level, building steadily from the basics to test-standard driving.",
  },
  {
    title: "Pass with confidence",
    description: "With local test-route knowledge and a calm teaching style, you'll head into test day properly prepared.",
  },
];

// TODO: the complete list of areas/suburbs covered has not been confirmed by
// Leroy yet. Brighton & Hove are the only confirmed locations — do not add
// specific suburbs until he confirms them.
export const areasCovered: { name: string }[] = [{ name: "Brighton" }, { name: "Hove" }];

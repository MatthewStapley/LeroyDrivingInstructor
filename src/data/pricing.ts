// Real prices, pulled from the current live site. `highlighted` gives the
// 10-hour block a visual accent — it is NOT a confirmed "most popular"
// claim, so no such label should be rendered.

export interface PricePlan {
  label: string;
  price: string;
  perUnit?: string;
  description: string;
  highlighted?: boolean;
  savings?: string;
}

export const pricePlans: PricePlan[] = [
  {
    label: "Single Lesson",
    price: "£40",
    perUnit: "per hour",
    description: "Pay as you go. Perfect for trying a first lesson or topping up before your test.",
  },
  {
    label: "10 Hour Block",
    price: "£380",
    description: "Save £20 versus paying hourly — ideal for building consistent progress.",
    highlighted: true,
    savings: "Save £20",
  },
  {
    label: "20 Hour Block",
    price: "£740",
    description: "Best value for learners working toward test-ready confidence.",
    savings: "Save £60",
  },
];

export type Service = {
  slug: string;
  title: string;
  category: string;
  short: string;
  heroImage: string;
  duration: string;
  schedule: string;
  price: string; // "KSh 5,000 per session"
  benefits: string[];
  gallery: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "back-massage",
    title: "Back Massage",
    category: "Massage Therapy",
    short: "Targeted relief for back tension and daily stress.",
    heroImage: "/images/services/aromatherapy.jpg",
    duration: "40 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 2,500 per session",
    benefits: ["Eases back tension", "Improves circulation", "Stress relief", "Better posture comfort"],
    gallery: [],
    faqs: [],
  },
  {
    slug: "swedish-massage",
    title: "Swedish Massage",
    category: "Massage Therapy",
    short: "Gentle full-body massage for deep relaxation.",
    heroImage: "/images/service/radiant-glow-facial.jpg",
    duration: "60 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 3,500 per session",
    benefits: ["Relaxation", "Improved circulation", "Muscle comfort", "Better sleep"],
    gallery: [],
    faqs: [],
  },
  {
    slug: "deep-tissue-massage",
    title: "Deep Tissue Massage",
    category: "Massage Therapy",
    short: "Focused pressure for stubborn knots and tension.",
    heroImage: "/images/services/deep-tissue.jpg",
    duration: "90 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 4,500 per session",
    benefits: ["Releases knots", "Improves mobility", "Post-workout recovery", "Stress reduction"],
    gallery: [],
    faqs: [],
  },
  {
    slug: "aromatherapy",
    title: "Aromatherapy Massage",
    category: "Body & Wellness",
    short: "Essential oils + soothing touch for calm and clarity.",
    heroImage: "/images/services/aromatherapy.jpg",
    duration: "90 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 5,000 per session",
    benefits: ["Reduces stress", "Improves sleep", "Eases tension", "Mood support"],
    gallery: [],
    faqs: [],
  },
  {
    slug: "manicure",
    title: "Signature Manicure",
    category: "Nail Care",
    short: "Clean shaping, cuticle care, and a polished finish.",
    heroImage: "/images/services/manicure.jpg",
    duration: "—",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 1,000 per session",
    benefits: ["Neat finish", "Healthy nails", "Hydration care", "Longer-lasting polish"],
    gallery: [],
    faqs: [],
  },
  {
    slug: "pedicure",
    title: "Signature Pedicure",
    category: "Nail Care",
    short: "Refresh tired feet with smoothing + moisture care.",
    heroImage: "/images/services/hot-stone-therapy.jpg",
    duration: "—",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 1,800 per session",
    benefits: ["Softer feet", "Callus care", "Relaxation", "Polished finish"],
    gallery: [],
    faqs: [],
  },
  {
    slug: "coffee-scrub",
    title: "Coffee Scrub",
    category: "Body Treatment",
    short: "Exfoliating scrub for soft, glowing skin.",
    heroImage: "/public/images/services/deep-tissue.jpg",
    duration: "60 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 3,500 per session",
    benefits: ["Smooth skin", "Improves texture", "Glow boost", "Refreshing feel"],
    gallery: [],
    faqs: [],
  },
  {
    slug: "sea-salt-milk-scrub",
    title: "Sea Salt / Milk Scrub",
    category: "Body Treatment",
    short: "Gentle exfoliation + nourishing finish.",
    heroImage: "/images/services/radiant-glow-facial.jpg",
    duration: "60 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 3,000 per session",
    benefits: ["Softens skin", "Gentle renewal", "Hydration support", "Even tone feel"],
    gallery: [],
    faqs: [],
  },
];
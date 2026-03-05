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
    heroImage: "/images/services/back-massage.jpeg",
    duration: "40 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 2,500 per session",
    benefits: ["Eases back tension", "Improves circulation", "Stress relief", "Better posture comfort"],
    gallery: [
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-oils.jpg",
      "/images/services/radiant-glow-facial.jpg",
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-diffuser.jpg",
      "/images/services/aromatherapy-face.jpg",
    ],
    faqs: [
      {
        q: "Can I choose which essential oil is used during the massage?",
        a: "Yes. Your therapist will offer a selection of oils and help you choose one that suits your mood and wellness goals.",
      },
      {
        q: "Is aromatherapy massage safe for sensitive skin?",
        a: "We use diluted therapeutic-grade oils. If you have allergies or sensitivities, let us know and we will adjust the treatment.",
      },
      {
        q: "How often should I book an aromatherapy massage?",
        a: "For relaxation and stress relief, once every 2–4 weeks is recommended.",
      },
    ],
  },
  {
    slug: "swedish-massage",
    title: "Swedish Massage",
    category: "Massage Therapy",
    short: "Gentle full-body massage for deep relaxation.",
    heroImage: "/images/services/swedish-massage.jpeg",
    duration: "60 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 3,500 per session",
    benefits: ["Relaxation", "Improved circulation", "Muscle comfort", "Better sleep"],
    gallery: [
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-oils.jpg",
      "/images/services/aromatherapy-face.jpg",
      "/images/services/radiant-glow-facial.jpg",
      "/images/gallery/spa-diffuser.jpg",
      "/images/services/aromatherapy-face.jpg",
    ],
    faqs: [
      {
        q: "Can I choose which essential oil is used during the massage?",
        a: "Yes. Your therapist will offer a selection of oils and help you choose one that suits your mood and wellness goals.",
      },
      {
        q: "Is aromatherapy massage safe for sensitive skin?",
        a: "We use diluted therapeutic-grade oils. If you have allergies or sensitivities, let us know and we will adjust the treatment.",
      },
      {
        q: "How often should I book an aromatherapy massage?",
        a: "For relaxation and stress relief, once every 2–4 weeks is recommended.",
      },
    ],
  },
  {
    slug: "deep-tissue-massage",
    title: "Deep Tissue Massage",
    category: "Massage Therapy",
    short: "Focused pressure for stubborn knots and tension.",
    heroImage: "/images/services/deep-tissue.jpeg",
    duration: "90 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 4,500 per session",
    benefits: ["Releases knots", "Improves mobility", "Post-workout recovery", "Stress reduction"],
    gallery: [
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-oils.jpg",
      "/images/services/radiant-glow-facial.jpg",
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-diffuser.jpg",
      "/images/services/aromatherapy-face.jpg",
    ],
    faqs: [
      {
        q: "Can I choose which essential oil is used during the massage?",
        a: "Yes. Your therapist will offer a selection of oils and help you choose one that suits your mood and wellness goals.",
      },
      {
        q: "Is aromatherapy massage safe for sensitive skin?",
        a: "We use diluted therapeutic-grade oils. If you have allergies or sensitivities, let us know and we will adjust the treatment.",
      },
      {
        q: "How often should I book an aromatherapy massage?",
        a: "For relaxation and stress relief, once every 2–4 weeks is recommended.",
      },
    ],
  },
  {
    slug: "aromatherapy",
    title: "Aromatherapy Massage",
    category: "Body & Wellness",
    short: "Essential oils + soothing touch for calm and clarity.",
    heroImage: "/images/services/aromatherapy-face.jpeg",
    duration: "90 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 5,000 per session",
    benefits: ["Reduces stress", "Improves sleep", "Eases tension", "Mood support"],
    gallery: [
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-oils.jpg",
      "/images/services/radiant-glow-facial.jpg",
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-diffuser.jpg",
      "/images/services/aromatherapy-face.jpg",
    ],
    faqs: [
      {
        q: "Can I choose which essential oil is used during the massage?",
        a: "Yes. Your therapist will offer a selection of oils and help you choose one that suits your mood and wellness goals.",
      },
      {
        q: "Is aromatherapy massage safe for sensitive skin?",
        a: "We use diluted therapeutic-grade oils. If you have allergies or sensitivities, let us know and we will adjust the treatment.",
      },
      {
        q: "How often should I book an aromatherapy massage?",
        a: "For relaxation and stress relief, once every 2–4 weeks is recommended.",
      },
    ],
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
    gallery: [
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-oils.jpg",
      "/images/services/radiant-glow-facial.jpg",
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-diffuser.jpg",
      "/images/services/aromatherapy-face.jpg",
    ],
    faqs: [
      {
        q: "Can I choose which essential oil is used during the massage?",
        a: "Yes. Your therapist will offer a selection of oils and help you choose one that suits your mood and wellness goals.",
      },
      {
        q: "Is aromatherapy massage safe for sensitive skin?",
        a: "We use diluted therapeutic-grade oils. If you have allergies or sensitivities, let us know and we will adjust the treatment.",
      },
      {
        q: "How often should I book an aromatherapy massage?",
        a: "For relaxation and stress relief, once every 2–4 weeks is recommended.",
      },
    ],
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
    gallery: [
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-oils.jpg",
      "/images/services/radiant-glow-facial.jpg",
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-diffuser.jpg",
      "/images/services/aromatherapy-face.jpg",
    ],
    faqs: [
      {
        q: "Can I choose which essential oil is used during the massage?",
        a: "Yes. Your therapist will offer a selection of oils and help you choose one that suits your mood and wellness goals.",
      },
      {
        q: "Is aromatherapy massage safe for sensitive skin?",
        a: "We use diluted therapeutic-grade oils. If you have allergies or sensitivities, let us know and we will adjust the treatment.",
      },
      {
        q: "How often should I book an aromatherapy massage?",
        a: "For relaxation and stress relief, once every 2–4 weeks is recommended.",
      },
    ],
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
    gallery: [
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-oils.jpg",
      "/images/services/radiant-glow-facial.jpg",
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-diffuser.jpg",
      "/images/services/aromatherapy-face.jpg",
    ],
    faqs: [
      {
        q: "Can I choose which essential oil is used during the massage?",
        a: "Yes. Your therapist will offer a selection of oils and help you choose one that suits your mood and wellness goals.",
      },
      {
        q: "Is aromatherapy massage safe for sensitive skin?",
        a: "We use diluted therapeutic-grade oils. If you have allergies or sensitivities, let us know and we will adjust the treatment.",
      },
      {
        q: "How often should I book an aromatherapy massage?",
        a: "For relaxation and stress relief, once every 2–4 weeks is recommended.",
      },
    ],
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
    gallery: [
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-oils.jpg",
      "/images/services/radiant-glow-facial.jpg",
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-diffuser.jpg",
      "/images/services/aromatherapy-face.jpg",
    ],
    faqs: [
      {
        q: "Can I choose which essential oil is used during the massage?",
        a: "Yes. Your therapist will offer a selection of oils and help you choose one that suits your mood and wellness goals.",
      },
      {
        q: "Is aromatherapy massage safe for sensitive skin?",
        a: "We use diluted therapeutic-grade oils. If you have allergies or sensitivities, let us know and we will adjust the treatment.",
      },
      {
        q: "How often should I book an aromatherapy massage?",
        a: "For relaxation and stress relief, once every 2–4 weeks is recommended.",
      },
    ],
  },
  {
    slug: "hot-stone-message",
    title: "Hot Stone Message",
    category: "Massage Therapy",
    short: "Gentle exfoliation + nourishing finish.",
    heroImage: "/images/services/bliss-hot-stone-therapy.jpeg",
    duration: "60 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 3,000 per session",
    benefits: ["Softens skin", "Gentle renewal", "Hydration support", "Even tone feel"],
    gallery: [
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-oils.jpg",
      "/images/services/bliss-hot-stone-therapy.jpeg",
      "/images/services/aromatherapy-face.jpg",
      "/images/gallery/spa-diffuser.jpg",
      "/images/services/aromatherapy-face.jpg",
    ],
    faqs: [
      {
        q: "Can I choose which essential oil is used during the massage?",
        a: "Yes. Your therapist will offer a selection of oils and help you choose one that suits your mood and wellness goals.",
      },
      {
        q: "Is aromatherapy massage safe for sensitive skin?",
        a: "We use diluted therapeutic-grade oils. If you have allergies or sensitivities, let us know and we will adjust the treatment.",
      },
      {
        q: "How often should I book an aromatherapy massage?",
        a: "For relaxation and stress relief, once every 2–4 weeks is recommended.",
      },
    ],
  },
];
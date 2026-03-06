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
      "/images/services/back-massage.jpeg",
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
      "/images/services/swedish-massage.jpeg",
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
    slug: "signature-manicure",
    title: "Signature Manicure",
    category: "Nail Care",
    short: "Clean shaping, cuticle care, and a polished finish.",
    heroImage: "/images/services/signature-manicure.jpg",
    duration: "—",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 1,000 per session",
    benefits: ["Neat finish", "Healthy nails", "Hydration care", "Longer-lasting polish"],
    gallery: [
      "/images/services/signature-manicure.jpg",
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
    slug: "signature-pedicure",
    title: "Signature Pedicure",
    category: "Nail Care",
    short: "Refresh tired feet with smoothing + moisture care.",
    heroImage: "/images/services/signature-pedicure.jpg",
    duration: "—",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 1,800 per session",
    benefits: ["Softer feet", "Callus care", "Relaxation", "Polished finish"],
    gallery: [
      "/images/services/signature-pedicure.jpg",
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
    slug: "reflexology",
    title: "Reflexology",
    category: "Massage Therapy",
    short: "Foot pressure therapy that promotes relaxation and improves circulation.",
    heroImage: "/images/services/reflexology.jpeg",
    duration: "45 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 2,500 per session",
    benefits: [
      "Improves circulation",
      "Reduces stress",
      "Balances body energy",
      "Promotes relaxation"
    ],
    gallery: [
      "/images/services/reflexology.jpeg"
    ],
    faqs: [],
  },

  {
    slug: "facial",
    title: "Facial Treatment",
    category: "Skin Care",
    short: "Deep cleansing facial that restores glow and hydration to the skin.",
    heroImage: "/images/services/radiant-glow-facial.jpg",
    duration: "60 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 3,000 per session",
    benefits: [
      "Deep cleans pores",
      "Improves skin glow",
      "Hydrates skin",
      "Reduces dullness"
    ],
    gallery: [
      "/images/services/radiant-glow-facial.jpg"
    ],
    faqs: [],
  },

  {
    slug: "bikini-waxing",
    title: "Bikini Waxing",
    category: "Waxing",
    short: "Professional bikini waxing for smooth and long-lasting results.",
    heroImage: "/images/services/waxing.jpeg",
    duration: "30 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 3,000 per session",
    benefits: [
      "Long lasting smoothness",
      "Reduces hair growth",
      "Cleaner finish",
      "Professional care"
    ],
    gallery: [
      "/images/services/waxing.jpeg"
    ],
    faqs: [],
  },

  {
    slug: "brazilian-waxing",
    title: "Brazilian Waxing",
    category: "Waxing",
    short: "Complete intimate waxing treatment for smooth skin.",
    heroImage: "/images/services/waxing.jpeg",
    duration: "40 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 3,000 per session",
    benefits: [
      "Complete smooth finish",
      "Long lasting results",
      "Professional hygiene",
      "Skin-friendly waxing"
    ],
    gallery: [
      "/images/services/waxing.jpeg"
    ],
    faqs: [],
  },

  {
    slug: "sea-salt-milk-scrub",
    title: "Sea Salt / Milk Scrub",
    category: "Body Treatment",
    short: "Gentle exfoliation + nourishing finish.",
    heroImage: "/images/services/sea-salt-milk-scrub.jpg",
    duration: "60 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 3,000 per session",
    benefits: ["Softens skin", "Gentle renewal", "Hydration support", "Even tone feel"],
    gallery: [
      "/images/services/sea-salt-milk-scrub.jpg",
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
    slug: "sports-massage",
    title: "Sports Massage",
    category: "Massage Therapy",
    short: "Targeted therapy designed for muscle recovery and performance.",
    heroImage: "/images/services/sports-massage.jpeg",
    duration: "60 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 4,000 per session",
    benefits: [
      "Improves flexibility",
      "Speeds muscle recovery",
      "Reduces soreness",
      "Prevents injury"
    ],
    gallery: [
      "/images/services/sports-massage.jpeg"
    ],
    faqs: [],
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
      "/images/services/deep-tissue.jpeg",
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
    slug: "house-call-treatment",
    title: "House Call Treatment",
    category: "Home Spa",
    short: "Relaxing spa therapy delivered to your home or hotel.",
    heroImage: "/images/services/house-call-treatment.jpeg",
    duration: "60 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 5,000 per session",
    benefits: [
      "Spa experience at home",
      "Private treatment",
      "Convenient booking",
      "Personalized relaxation"
    ],
    gallery: [
      "/images/services/house-call-treatment.jpeg",
      "/images/services/home-spa.jpeg",
      "/images/services/sports-massage.jpeg",
      "/images/services/call-house.jpeg"
    ],
    faqs: [],
  },
  {
    slug: "hot-stone-massage",
    title: "Hot Stone Massage",
    category: "Massage Therapy",
    short: "Warm volcanic stones melt deep muscle tension and improve circulation.",
    heroImage: "/images/services/bliss-hot-stone-therapy.jpeg",
    duration: "90 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 6,000 per session",
    benefits: [
      "Deep muscle relaxation",
      "Improves circulation",
      "Relieves tension",
      "Promotes deep calm"
    ],
    gallery: [
      "/images/services/bliss-hot-stone-therapy.jpeg",
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
    slug: "prenatal-postnatal-massage",
    title: "Prenatal / Postnatal Massage",
    category: "Massage Therapy",
    short: "Gentle therapeutic massage designed for expecting and new mothers.",
    heroImage: "/images/services/prenatal-massage.jpeg",
    duration: "60 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 6,000 per session",
    benefits: [
      "Relieves pregnancy discomfort",
      "Improves circulation",
      "Reduces swelling",
      "Promotes relaxation"
    ],
    gallery: [
      "/images/services/prenatal-massage.jpeg"
    ],
    faqs: [],
  },
  {
    slug: "coffee-scrub-massage",
    title: "Coffee Scrub + Massage",
    category: "Body Treatment",
    short: "Exfoliating scrub for soft, glowing skin.",
    heroImage: "/images/services/coffee-scrub-massage.jpeg",
    duration: "90 minutes",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 6,000 per session",
    benefits: ["Smooth skin", "Improves texture", "Boosts circulation", "Glow boost", "Refreshing feel"],
    gallery: [
      "/images/services/coffee-scrub-massage.jpeg",
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
export type Service = {
  slug: string;
  title: string;
  category: string;
  short: string;
  description: string;
  expectations: { title: string; text: string }[];
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
    description: "Back massage focuses on relieving tension and stiffness in the upper, middle, and lower back. Using a combination of kneading, pressure techniques, and soothing strokes, the treatment helps relax tight muscles caused by stress, long hours of sitting, or physical strain.",
    expectations: [
      {
        title: "Short Consultation",
        text: "Your therapist will briefly discuss areas of tension or discomfort in your back and shoulders.",
      },
      {
        title: "Focused Back Massage",
        text: "The session concentrates on the back, neck, and shoulders using relaxing massage techniques.",
      },
      {
        title: "Muscle Release",
        text: "Targeted pressure helps release knots and improve blood circulation.",
      },
      {
        title: "Relaxation Finish",
        text: "The session ends with calming strokes to relax muscles and promote comfort.",
      },
    ],
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
        q: "Is back massage good for desk workers?",
        a: "Yes. It helps relieve stiffness caused by long hours of sitting and improves posture.",
      },
      {
        q: "How long does the session last?",
        a: "The treatment lasts approximately 40 minutes and focuses mainly on the back and shoulders.",
      },
      {
        q: "How often should I get a back massage?",
        a: "For tension relief, once every 2–3 weeks is recommended.",
      },
    ],
  },
  {
    slug: "swedish-massage",
    title: "Swedish Massage",
    category: "Massage Therapy",
    short: "Gentle full-body massage for deep relaxation.",
    description: "Swedish massage is a classic relaxation treatment that uses long flowing strokes, kneading, and gentle pressure to relax the body and calm the mind. It improves circulation while easing muscle tension and promoting overall wellbeing.",
    expectations: [
      {
        title: "Consultation",
        text: "Your therapist checks your comfort level and preferred pressure.",
      },
      {
        title: "Full Body Massage",
        text: "Long flowing strokes are applied across the body to release tension.",
      },
      {
        title: "Muscle Relaxation",
        text: "Gentle kneading helps improve circulation and relax muscles.",
      },
      {
        title: "Calming Finish",
        text: "The session concludes with soothing techniques that promote deep relaxation.",
      },
    ],
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
        q: "Is Swedish massage suitable for first-time spa visitors?",
        a: "Yes. It is gentle and relaxing, making it perfect for first-time massage clients.",
      },
      {
        q: "Will the pressure be strong?",
        a: "The pressure is usually light to moderate, but your therapist can adjust it based on your preference.",
      },
      {
        q: "What should I do after the massage?",
        a: "Drink plenty of water and allow your body time to relax after the session.",
      },
    ],
  },
  {
    slug: "signature-manicure",
    title: "Signature Manicure",
    category: "Nail Care",
    short: "Clean shaping, cuticle care, and a polished finish.",
    description: "Our Signature Manicure focuses on nail health and a beautiful polished finish. The treatment includes nail shaping, cuticle care, gentle exfoliation, and moisturizing hand care, leaving your hands refreshed and well-groomed.",
    expectations: [
      {
        title: "Nail Preparation",
        text: "Your nails are carefully cleaned, trimmed, and shaped to your preferred style.",
      },
      {
        title: "Cuticle Care",
        text: "Cuticles are gently treated and conditioned to promote healthy nail growth.",
      },
      {
        title: "Hand Hydration",
        text: "A nourishing hand treatment restores softness and moisture.",
      },
      {
        title: "Polish Finish",
        text: "Your manicure concludes with a professional polish application for a neat and elegant look.",
      },
    ],
    heroImage: "/images/services/signature-manicure.jpg",
    duration: "—",
    schedule: "Mon–Sat: 9:00AM–8:00PM",
    price: "KSh 2,500 per session",
    benefits: ["Neat finish", "Healthy nails", "Hydration care", "Longer-lasting polish"],
    gallery: [
      "/images/services/signature-manicure.jpg",
    ],
    faqs: [
      {
        q: "How long does a manicure last?",
        a: "A standard manicure can last between 7–10 days depending on care and daily activities.",
      },
      {
        q: "Can I choose my nail color?",
        a: "Yes, you can choose from a variety of nail polish shades available at the spa.",
      },
      {
        q: "Is the manicure safe for sensitive nails?",
        a: "Yes. Our therapists use gentle techniques and quality products suitable for most nail types.",
      },
    ],
  },
  {
    slug: "signature-pedicure",
    title: "Signature Pedicure",
    category: "Nail Care",
    short: "Refresh tired feet with smoothing + moisture care.",
    description: "The Signature Pedicure refreshes and revitalizes your feet with soothing care. This treatment includes nail shaping, callus care, exfoliation, and a relaxing foot massage to leave your feet soft, smooth, and refreshed.",
    expectations: [
      {
        title: "Foot Soak",
        text: "Your feet are soaked in warm water to relax muscles and soften the skin.",
      },
      {
        title: "Callus & Nail Care",
        text: "Nails are trimmed and shaped while rough skin and calluses are gently smoothed.",
      },
      {
        title: "Exfoliation & Massage",
        text: "A gentle scrub and relaxing massage improve circulation and soften the skin.",
      },
      {
        title: "Polish Finish",
        text: "Your pedicure ends with a professional polish application for a polished appearance.",
      },
    ],
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
        q: "How often should I get a pedicure?",
        a: "Most clients schedule pedicures every 3–4 weeks to maintain healthy and smooth feet.",
      },
      {
        q: "Is pedicure suitable for tired feet?",
        a: "Yes. The treatment includes massage and exfoliation that help relax and refresh tired feet.",
      },
      {
        q: "Can I bring my own nail polish?",
        a: "Yes, you are welcome to bring your preferred polish if desired.",
      },
    ],
  },
  {
    slug: "reflexology",
    title: "Reflexology",
    category: "Massage Therapy",
    short: "Foot pressure therapy that promotes relaxation and improves circulation.",
    description: "Reflexology focuses on applying pressure to specific points on the feet that correspond to different areas of the body. This treatment promotes relaxation, improves circulation, and supports overall wellbeing.",
    expectations: [
      {
        title: "Consultation",
        text: "Your therapist discusses areas of discomfort or tension.",
      },
      {
        title: "Foot Pressure Therapy",
        text: "Specific reflex points on the feet are stimulated using gentle pressure techniques.",
      },
      {
        title: "Relaxation Techniques",
        text: "The session includes soothing foot massage to enhance relaxation.",
      },
      {
        title: "Rest & Recovery",
        text: "The session concludes with calming techniques to promote balance and relaxation.",
      },
    ],
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
    faqs: [
      {
        q: "What is reflexology used for?",
        a: "Reflexology helps reduce stress, improve circulation, and promote relaxation through targeted foot pressure therapy.",
      },
      {
        q: "Is reflexology painful?",
        a: "No. The pressure is gentle and adjusted according to your comfort level.",
      },
      {
        q: "How long does reflexology take?",
        a: "A typical reflexology session lasts around 45 minutes.",
      },
    ],
  },
  {
    slug: "facial",
    title: "Facial Treatment",
    category: "Skin Care",
    short: "Deep cleansing facial that restores glow and hydration to the skin.",
    description: "Our facial treatment deeply cleanses the skin while restoring hydration and natural glow. The treatment includes cleansing, exfoliation, mask application, and facial massage tailored to your skin type.",
    expectations: [
      {
        title: "Skin Assessment",
        text: "Your therapist evaluates your skin type and concerns.",
      },
      {
        title: "Deep Cleansing",
        text: "The skin is cleansed to remove impurities and excess oil.",
      },
      {
        title: "Exfoliation & Mask",
        text: "Exfoliation removes dead skin while a mask nourishes and restores balance.",
      },
      {
        title: "Facial Massage",
        text: "A relaxing facial massage improves circulation and promotes glow.",
      },
    ],
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
    faqs: [
      {
        q: "Is the facial suitable for sensitive skin?",
        a: "Yes. Our therapists customize products based on your skin type and sensitivity.",
      },
      {
        q: "How often should I get a facial?",
        a: "Most clients benefit from a facial every 4–6 weeks.",
      },
      {
        q: "Will my skin look brighter after the treatment?",
        a: "Yes. Facials help improve skin texture and restore natural glow.",
      },
    ],
  },
  {
    slug: "bikini-waxing",
    title: "Bikini Waxing",
    category: "Waxing",
    short: "Professional bikini waxing for smooth and long-lasting results.",
    description: "Bikini waxing removes unwanted hair along the bikini line to leave the skin smooth, clean, and well-groomed. Our professional waxing service is performed with high-quality wax and gentle techniques to minimize discomfort and achieve long-lasting results.",
    expectations: [
      {
        title: "Preparation",
        text: "Your therapist prepares the skin and ensures the area is clean before the waxing process begins.",
      },
      {
        title: "Professional Wax Application",
        text: "Warm wax is carefully applied and removed to effectively remove unwanted hair along the bikini line.",
      },
      {
        title: "Soothing Treatment",
        text: "A calming lotion or oil is applied after waxing to soothe the skin and reduce irritation.",
      },
      {
        title: "Aftercare Guidance",
        text: "Your therapist provides tips to keep the skin smooth and avoid irritation after the treatment.",
      },
    ],
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
    faqs: [
      {
        q: "How long should hair be before waxing?",
        a: "Hair should be about ¼ inch long for the best waxing results.",
      },
      {
        q: "Is bikini waxing painful?",
        a: "Some discomfort may occur, but our professional techniques help minimize pain.",
      },
      {
        q: "How long do the results last?",
        a: "Results typically last between 3–4 weeks depending on hair growth.",
      },
    ],
  },
  {
    slug: "brazilian-waxing",
    title: "Brazilian Waxing",
    category: "Waxing",
    short: "Complete intimate waxing treatment for smooth skin.",
    description: "Brazilian waxing removes hair from the entire intimate area, leaving the skin completely smooth. Our experienced therapists ensure the treatment is performed hygienically and professionally while minimizing discomfort.",
    expectations: [
      {
        title: "Consultation",
        text: "Your therapist explains the process and ensures you feel comfortable before the treatment begins.",
      },
      {
        title: "Waxing Treatment",
        text: "Warm wax is applied and removed in sections to remove hair from the intimate area.",
      },
      {
        title: "Skin Soothing",
        text: "A calming product is applied to reduce redness and irritation.",
      },
      {
        title: "Aftercare Advice",
        text: "You will receive guidance on how to care for the skin after waxing.",
      },
    ],
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
    faqs: [
      {
        q: "What is the difference between bikini and Brazilian waxing?",
        a: "Bikini waxing removes hair along the bikini line, while Brazilian waxing removes hair from the entire intimate area.",
      },
      {
        q: "How often should I get a Brazilian wax?",
        a: "Most clients return every 4–6 weeks depending on hair growth.",
      },
      {
        q: "How should I prepare for a Brazilian wax?",
        a: "Ensure hair is at least ¼ inch long and avoid applying lotions or oils before the treatment.",
      },
    ],
  },
  {
    slug: "sea-salt-milk-scrub",
    title: "Sea Salt / Milk Scrub",
    category: "Body Treatment",
    short: "Gentle exfoliation + nourishing finish.",
    description: "The Sea Salt and Milk Scrub treatment gently exfoliates the skin while nourishing it with natural ingredients. The scrub removes dead skin cells and restores softness, leaving the body refreshed, smooth, and glowing.",
    expectations: [
      {
        title: "Skin Preparation",
        text: "Your therapist prepares the skin to ensure a comfortable exfoliation experience.",
      },
      {
        title: "Body Exfoliation",
        text: "A sea salt and milk scrub is applied to gently remove dead skin cells and improve skin texture.",
      },
      {
        title: "Rinse & Hydration",
        text: "After exfoliation, the skin is rinsed and moisturized to lock in hydration.",
      },
      {
        title: "Relaxing Finish",
        text: "The treatment concludes with nourishing products that leave the skin soft and refreshed.",
      },
    ],
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
        q: "What does a body scrub do?",
        a: "Body scrubs remove dead skin cells and improve skin texture, leaving the skin smooth and refreshed.",
      },
      {
        q: "Is the scrub suitable for sensitive skin?",
        a: "Yes. The treatment is gentle and can be adjusted depending on your skin sensitivity.",
      },
      {
        q: "How often should I get a body scrub?",
        a: "Most people benefit from body exfoliation once every 3–4 weeks.",
      },
    ],
  },
  {
    slug: "sports-massage",
    title: "Sports Massage",
    category: "Massage Therapy",
    short: "Targeted therapy designed for muscle recovery and performance.",
    description: "Sports massage is designed for active individuals and athletes who need muscle recovery, flexibility improvement, and injury prevention. The treatment uses targeted techniques to release tension and restore mobility.",
    expectations: [
      {
        title: "Muscle Assessment",
        text: "Your therapist evaluates areas of muscle tightness or strain.",
      },
      {
        title: "Targeted Muscle Therapy",
        text: "Deep and focused massage techniques are applied to relieve tension.",
      },
      {
        title: "Stretching & Mobility",
        text: "Gentle stretching may be incorporated to improve flexibility.",
      },
      {
        title: "Recovery Finish",
        text: "The session ends with relaxing techniques to promote recovery.",
      },
    ],
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
    faqs: [
      {
        q: "Who should get a sports massage?",
        a: "Sports massage is ideal for athletes, gym-goers, or anyone experiencing muscle fatigue from physical activity.",
      },
      {
        q: "Is sports massage painful?",
        a: "It can involve deeper pressure, but the therapist adjusts intensity based on your comfort.",
      },
      {
        q: "How often should I get a sports massage?",
        a: "Athletes often benefit from sessions every 2–4 weeks depending on activity levels.",
      },
    ],
  },

  {
    slug: "deep-tissue-massage",
    title: "Deep Tissue Massage",
    category: "Massage Therapy",
    short: "Focused pressure for stubborn knots and tension.",
    description: "Deep tissue massage targets deeper layers of muscle and connective tissue to release chronic tension and stubborn knots. The therapy uses firm pressure and slow strokes to relieve pain and improve mobility.",
    expectations: [
      {
        title: "Consultation",
        text: "Your therapist identifies areas of chronic tension or discomfort.",
      },
      {
        title: "Deep Muscle Work",
        text: "Firm pressure is applied to reach deeper muscle layers and release knots.",
      },
      {
        title: "Targeted Therapy",
        text: "Specific problem areas receive focused treatment to relieve pain.",
      },
      {
        title: "Relaxation Finish",
        text: "The session ends with calming techniques to relax the muscles.",
      },
    ],
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
        q: "Is deep tissue massage painful?",
        a: "The pressure can be intense but should never be painful. Your therapist will adjust the pressure to your comfort level.",
      },
      {
        q: "Who should get deep tissue massage?",
        a: "It is ideal for people with chronic muscle tension, athletes, or those recovering from muscle strain.",
      },
      {
        q: "What should I do after the massage?",
        a: "Drink water and allow your body to rest to help muscles recover.",
      },
    ],
  },
  {
    slug: "aromatherapy",
    title: "Aromatherapy Massage",
    category: "Body & Wellness",
    short: "Essential oils + soothing touch for calm and clarity.",
    description: "Aromatherapy massage combines therapeutic essential oils with soothing massage techniques to relax the body, calm the mind, and improve overall wellbeing.",
    expectations: [
      {
        title: "Consultation & Oil Selection",
        text: "Your therapist begins with a brief consultation to understand your needs and selects essential oils suited to your mood and wellness goals.",
      },
      {
        title: "Gentle Body Massage",
        text: "Slow, flowing massage strokes help relieve tension, promote circulation, and encourage deep relaxation.",
      },
      {
        title: "Aromatherapy Integration",
        text: "As oils are absorbed into the skin, their aromas support emotional balance and mental clarity.",
      },
      {
        title: "Finishing Touch",
        text: "Your session concludes with calming techniques and warm towels to seal the benefits.",
      },
    ],
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
    description: "Our House Call Treatment brings the Blissful Quins Spa experience directly to your home, hotel, or private space. Enjoy professional spa therapy in the comfort of your own environment while our therapist provides a personalized relaxation session.",
    expectations: [
      {
        title: "Booking & Preparation",
        text: "Once your appointment is confirmed, our therapist travels to your location with the necessary spa equipment.",
      },
      {
        title: "Setup & Consultation",
        text: "A short consultation helps the therapist understand your preferences before setting up the treatment area.",
      },
      {
        title: "Personalized Treatment",
        text: "You receive a relaxing spa treatment tailored to your comfort and wellness needs.",
      },
      {
        title: "Relaxation Finish",
        text: "The session concludes with calming techniques so you can fully enjoy the spa experience at home.",
      },
    ],
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
    faqs: [
      {
        q: "What areas do you cover for house call treatments?",
        a: "House call services are available within our service area. Please contact us to confirm availability in your location.",
      },
      {
        q: "Do I need to prepare anything before the therapist arrives?",
        a: "We recommend having a comfortable and quiet space where the therapist can set up the treatment area.",
      },
      {
        q: "Can I choose the type of massage for a house call?",
        a: "Yes, depending on availability you can choose from selected spa treatments offered for home sessions.",
      },
    ],
  },
  {
    slug: "hot-stone-massage",
    title: "Hot Stone Massage",
    category: "Massage Therapy",
    short: "Warm volcanic stones melt deep muscle tension and improve circulation.",
    description: "Hot Stone Massage combines traditional massage techniques with warm volcanic stones placed on key points of the body. The heat from the stones penetrates deep into muscles, helping to release tension, improve circulation, and promote deep relaxation.",
    expectations: [
      {
        title: "Consultation",
        text: "Your therapist discusses any areas of tension or discomfort before the treatment begins.",
      },
      {
        title: "Stone Placement",
        text: "Warm stones are placed on specific points of the body to relax muscles.",
      },
      {
        title: "Massage Therapy",
        text: "The therapist uses the stones along with massage techniques to ease tension and improve circulation.",
      },
      {
        title: "Deep Relaxation Finish",
        text: "The treatment concludes with soothing techniques that promote deep calm.",
      },
    ],
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
        q: "Are the stones very hot?",
        a: "No. The stones are warmed to a comfortable temperature and carefully tested before being applied.",
      },
      {
        q: "Who should avoid hot stone massage?",
        a: "Clients with certain medical conditions should consult with their therapist before booking the treatment.",
      },
      {
        q: "What makes hot stone massage different?",
        a: "The heat from the stones allows muscles to relax faster, making the massage deeper and more effective.",
      },
    ],
  },
  {
    slug: "prenatal-postnatal-massage",
    title: "Prenatal / Postnatal Massage",
    category: "Massage Therapy",
    short: "Gentle therapeutic massage designed for expecting and new mothers.",
    description: "Prenatal and Postnatal Massage is designed to support mothers during and after pregnancy. The gentle massage techniques help reduce muscle tension, improve circulation, and promote relaxation while ensuring comfort and safety.",
    expectations: [
      {
        title: "Consultation",
        text: "Your therapist reviews your comfort level and pregnancy stage before the treatment.",
      },
      {
        title: "Comfortable Positioning",
        text: "Special positioning techniques ensure comfort and safety throughout the session.",
      },
      {
        title: "Gentle Massage",
        text: "Soft and relaxing techniques help reduce tension and improve circulation.",
      },
      {
        title: "Relaxation & Recovery",
        text: "The session concludes with calming techniques to promote overall wellbeing.",
      },
    ],
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
    faqs: [
      {
        q: "Is prenatal massage safe during pregnancy?",
        a: "Yes, when performed by trained therapists using techniques designed for expecting mothers.",
      },
      {
        q: "When can I start prenatal massage?",
        a: "Most therapists recommend starting after the first trimester, but always consult your healthcare provider.",
      },
      {
        q: "Is postnatal massage helpful after delivery?",
        a: "Yes. It can help relax muscles, reduce stress, and support recovery after childbirth.",
      },
    ],
  },
  {
    slug: "coffee-scrub-massage",
    title: "Coffee Scrub + Massage",
    category: "Body Treatment",
    short: "Exfoliating scrub for soft, glowing skin.",
    description: "The Coffee Scrub + Massage treatment combines natural exfoliation with relaxing massage techniques. Coffee-based scrubs gently remove dead skin cells while stimulating circulation, leaving the skin smooth, refreshed, and glowing.",
    expectations: [
      {
        title: "Body Preparation",
        text: "Your therapist prepares the skin before applying the coffee scrub treatment.",
      },
      {
        title: "Coffee Scrub Exfoliation",
        text: "The scrub removes dead skin cells and improves skin texture.",
      },
      {
        title: "Relaxing Massage",
        text: "A soothing massage follows to improve circulation and relaxation.",
      },
      {
        title: "Hydration Finish",
        text: "Moisturizing products are applied to nourish and protect the skin.",
      },
    ],
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
        q: "What are the benefits of a coffee scrub?",
        a: "Coffee scrubs exfoliate the skin, improve circulation, and leave the skin smoother and brighter.",
      },
      {
        q: "Is the scrub suitable for all skin types?",
        a: "Yes, but your therapist can adjust the treatment depending on your skin sensitivity.",
      },
      {
        q: "How often should I get a body scrub?",
        a: "Most people benefit from body scrubs once every 3–4 weeks.",
      },
    ],
  },
];
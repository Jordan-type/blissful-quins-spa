export type Testimonial = { 
  name: string; 
  role?: string; 
  quote: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "The aromatherapy massage at Beauva is pure heaven. I came in feeling anxious and left in a complete state of calm. The scents, the space, everything was perfection. It was the first time I truly felt like I could breathe again\u2014peaceful, grounded, and light.",
    name: "Amelia Dermot",
    role: "Wellness Seeker",
    avatar: "AD",
  },
  {
    quote: "This treatment helped melt away a week of stress. The lavender oil worked wonders, and the therapist was incredibly gentle and intuitive. I felt both physically relaxed and emotionally recharged, like I had pressed reset on my entire week.",
    name: "Sofia Willings",
    role: "Busy Professional",
    avatar: "SW",
  },
  {
    quote: "Beauva has become my go-to for aromatherapy. Every button for wellness, every soft music note, every scent was carefully cared for. A truly holistic experience that goes beyond just a massage.",
    name: "Jenna Cole",
    role: "First-Time Visitor",
    avatar: "JC",
  },
  {
    quote: "I have been to countless spas, but nothing compares to the hot stone therapy here. The warmth melted through every knot in my shoulders. I left feeling lighter than I have in years. Truly transformative.",
    name: "Marcus Rivera",
    role: "Returning Client",
    avatar: "MR",
  },
  {
    quote: "The signature manicure was such a treat. From the hand massage to the flawless polish, every detail was perfect. My nails have never looked this good, and the experience was so relaxing I almost fell asleep.",
    name: "Priya Sharma",
    role: "Beauty Enthusiast",
    avatar: "PS",
  },
];
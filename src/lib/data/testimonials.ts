export type Testimonial = { 
  name: string; 
  role?: string; 
  quote: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ashlee Tuttleman",
    role: "Client",
    quote: "WORLD CLASS massage from Quinn. She is a real professional that knows what she's doing. I came for tight neck and left feeling completely relaxed. Highly recommended!",
    avatar: "AT",
  },
  {
    name: "Sylvain M",
    role: "Client",
    quote: "Probably one of the best massages I have ever had — relaxing and strong at the same time. Very professional! I am full of energy now.",
    avatar: "SM",
  },
  {
    name: "Johnpaul Kimathi",
    role: "Client",
    quote: "Very professional service. The therapist knows exactly how to release tension and help you relax.",
    avatar: "JK",
  },
  {
    name: "Moritz Klämt",
    role: "Client",
    quote: "Great skills, very professional service. One of the best massages I ever had. Quin knows very well what she is doing.",
    avatar: "MK",
  },
  {
    name: "Kilian Vincke",
    role: "Local Guide",
    quote: "Quinter made all the difference during my stay in Nairobi. She listens to your needs and brings you to the next level of relaxation. I booked her again for my next visit.",
    avatar: "KV",
  },
];
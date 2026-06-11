export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "AbiskarAI built our landing page in under 2 weeks and our lead conversion rate tripled in the first month. The attention to speed and design was unlike any agency we've worked with.",
    name: "James Okafor",
    role: "Founder",
    company: "Stackbloom",
    initials: "JO",
  },
  {
    quote:
      "The WhatsApp bot they built handles 80% of our inbound queries automatically. Our team now spends time on actual clients instead of answering the same 10 questions all day.",
    name: "Priya Sharma",
    role: "Operations Lead",
    company: "FinRoute",
    initials: "PS",
  },
  {
    quote:
      "We were drowning in document processing. Their AI agent now handles 200+ docs a day with 96% accuracy. We saved 8 hours of manual work immediately from day one.",
    name: "Marcus Webb",
    role: "CTO",
    company: "DocSynth",
    initials: "MW",
  },
  {
    quote:
      "From our first call to a live deployed app — 11 days. I've never seen a technical team move that fast without cutting corners. The code quality is genuinely solid.",
    name: "Aisha Nkrumah",
    role: "Product Manager",
    company: "Relaybase",
    initials: "AN",
  },
];

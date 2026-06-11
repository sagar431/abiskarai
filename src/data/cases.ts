export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  problem: string;
  solution: string[];
  stack: string[];
  results: { label: string; value: string }[];
  links?: { label: string; href: string }[];
  /** Card visuals — picked for the home/work grid */
  card: {
    bg: string;
    ratio: string;
    label: string;
    pill: "light" | "dark";
    pillLabel: string;
    image?: string;
  };
  cover: { ratio: string; label: string; bg?: string; image?: string };
};

export const cases: CaseStudy[] = [
  {
    slug: "vibe-app-builder",
    title: "Vibe — AI App Builder",
    tagline: "A 6-agent pipeline that turns a prompt or screenshot into a deployable Next.js app.",
    category: "Full-Stack AI Product",
    problem:
      "Founders kept asking how to ship a working web app from a one-line idea. Existing AI builders gave broken React, no real deployments, and no way to iterate on a real codebase.",
    solution: [
      "Designed a 6-phase agent pipeline: design analyser → creative director → planner → code agent → validator → deploy.",
      "Wired live E2B sandboxes so generated code runs and previews in real time, side-by-side with the source.",
      "Connected Inngest for durable orchestration and Netlify for one-click deploys with full project history.",
    ],
    stack: [
      "Next.js 15",
      "TypeScript",
      "Gemini",
      "OpenAI",
      "Anthropic",
      "E2B",
      "Inngest",
      "Prisma",
      "tRPC",
      "Clerk",
      "Netlify",
    ],
    results: [
      { label: "Pipeline stages", value: "6 agents" },
      { label: "LLM providers", value: "3 — Gemini, OpenAI, Anthropic" },
      { label: "Output", value: "Full Next.js app, deployed" },
    ],
    links: [
      { label: "Watch demo", href: "https://www.youtube.com/watch?v=96WNW_1TPZ4" },
    ],
    card: {
      bg: "#1a1d2e",
      ratio: "329 / 246",
      label: "Vibe — demo",
      pill: "light",
      pillLabel: "Learn more",
      image: "/media/work/vibe-card.webp",
    },
    cover: {
      ratio: "16 / 9",
      label: "Vibe — cover",
      bg: "#1a1d2e",
      image: "/media/work/vibe-cover.webp",
    },
  },
  {
    slug: "whatsapp-lead-bot",
    title: "WhatsApp Lead Qualification Bot",
    tagline: "Automated 80% of inbound conversations and books calls in under 2 seconds.",
    category: "AI Agents & Automation",
    problem:
      "A growing service business was losing leads to slow replies. The team answered the same questions every day and missed messages on weekends.",
    solution: [
      "Built a WhatsApp Business API bot that qualifies leads with a short branching dialog and books discovery calls.",
      "Integrated with the CRM to log every conversation and trigger follow-up sequences automatically.",
      "Tuned an OpenAI-backed FAQ layer so the bot answers in the brand voice with sub-2s latency.",
    ],
    stack: ["WhatsApp Business API", "OpenAI", "Node.js", "PostgreSQL", "n8n"],
    results: [
      { label: "Conversations automated", value: "80%" },
      { label: "Response time", value: "<2 seconds" },
      { label: "Availability", value: "24 / 7" },
    ],
    card: {
      bg: "#6b6b6b",
      ratio: "1 / 1",
      label: "WhatsApp bot — demo",
      pill: "dark",
      pillLabel: "View case study",
      image: "/media/work/whatsapp-card.webp",
    },
    cover: {
      ratio: "16 / 9",
      label: "WhatsApp bot — cover",
      bg: "#2a2f3a",
      image: "/media/work/whatsapp-cover.webp",
    },
  },
  {
    slug: "document-ai-agent",
    title: "Document Processing AI Agent",
    tagline: "Reads, classifies, and extracts structured data from 200+ documents per day at 96% accuracy.",
    category: "AI Agents & Automation",
    problem:
      "An ops team was spending 8 hours a day keying invoices, contracts, and reports into spreadsheets. Errors compounded down the chain.",
    solution: [
      "Built a LangChain + GPT-4o agent that ingests PDFs and images, classifies the document type, and extracts structured fields.",
      "Validated extractions against a JSON schema and routed exceptions to a human-in-the-loop queue.",
      "Exposed a FastAPI endpoint so downstream tools pull clean structured data on demand.",
    ],
    stack: ["LangChain", "GPT-4o", "FastAPI", "Python", "PostgreSQL"],
    results: [
      { label: "Documents per day", value: "200+" },
      { label: "Extraction accuracy", value: "96%" },
      { label: "Manual effort saved", value: "~8 hrs/day" },
    ],
    card: {
      bg: "#2a2a2a",
      ratio: "329 / 246",
      label: "Document AI — demo",
      pill: "light",
      pillLabel: "Learn more",
      image: "/media/work/document-ai-card.webp",
    },
    cover: {
      ratio: "16 / 9",
      label: "Document AI — cover",
      bg: "#2a2a2a",
      image: "/media/work/document-ai-cover.webp",
    },
  },
  {
    slug: "business-landing-page",
    title: "Conversion-focused Landing Page",
    tagline: "Tripled inbound leads in the first month, launched in two weeks.",
    category: "Full-Stack AI Product",
    problem:
      "A service business had a slow, generic site that wasn't converting visitors into calls. Their best traffic was leaving without a single message.",
    solution: [
      "Rewrote the offer page from the value prop down — clear hero, proof, services, FAQ, contact.",
      "Engineered the Next.js build for 100/100 Lighthouse on mobile and desktop.",
      "Wired analytics, lead capture, and a WhatsApp deep-link CTA so every section had a path to talk.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    results: [
      { label: "Conversion rate", value: "3× increase" },
      { label: "Lighthouse score", value: "100 / 100" },
      { label: "Time to launch", value: "2 weeks" },
    ],
    card: {
      bg: "#1f2a44",
      ratio: "1 / 1",
      label: "Landing page — demo",
      pill: "dark",
      pillLabel: "View case study",
      image: "/media/work/landing-card.webp",
    },
    cover: {
      ratio: "16 / 9",
      label: "Landing — cover",
      bg: "#1f2a44",
      image: "/media/work/landing-cover.webp",
    },
  },
];

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}

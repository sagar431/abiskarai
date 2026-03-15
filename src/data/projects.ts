export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "vibe-app-builder",
    title: "Vibe — AI App Builder",
    tagline: "Full-stack platform that generates production Next.js apps from a prompt.",
    description:
      "Built a complete AI-powered development platform where a 6-agent pipeline — design analyser, creative director, planner, code agent, validator — collaborates inside live E2B sandboxes to turn a text description or screenshot into a deployable Next.js application.",
    highlights: [
      "6-phase multi-agent pipeline from design brief to running Next.js app",
      "Live E2B sandbox execution with real-time code and preview side-by-side",
      "Deployed to Netlify with full project history, file explorer, and iteration loop",
    ],
    techStack: ["Next.js 15", "TypeScript", "Gemini", "E2B", "Inngest", "Prisma", "tRPC", "Clerk", "Netlify"],
    metrics: [
      { label: "Pipeline stages", value: "6 agents" },
      { label: "LLM providers", value: "3 (Gemini, OpenAI, Anthropic)" },
      { label: "Output", value: "Full Next.js app" },
    ],
    links: [
      { label: "Watch demo", href: "https://www.youtube.com/watch?v=96WNW_1TPZ4" },
    ],
  },
  {
    slug: "business-landing-page",
    title: "Business Landing Page",
    tagline: "Conversion-focused landing page that tripled inbound leads.",
    description:
      "Designed and built a modern, fast-loading landing page for a service business — fully optimised for conversions and launched in under two weeks.",
    highlights: [
      "3× increase in conversion rate within the first month",
      "Perfect Lighthouse performance score on mobile and desktop",
      "Launched in 2 weeks from brief to live deployment",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "Framer Motion"],
    metrics: [
      { label: "Conversion rate", value: "3× increase" },
      { label: "Time to launch", value: "2 weeks" },
      { label: "Lighthouse score", value: "100 / 100" },
    ],
    links: [],
  },
  {
    slug: "whatsapp-lead-qualification-bot",
    title: "WhatsApp Lead Qualification Bot",
    tagline: "Automated 80% of customer conversations within the first week.",
    description:
      "Built a WhatsApp bot that qualifies inbound leads, answers FAQs, and books discovery calls automatically — freeing the sales team to focus on high-intent prospects.",
    highlights: [
      "80% of conversations handled end-to-end without human intervention",
      "Integrates with CRM to log leads and trigger follow-up sequences",
      "Responds in under 2 seconds, 24 hours a day, 7 days a week",
    ],
    techStack: ["WhatsApp Business API", "OpenAI", "Node.js", "PostgreSQL"],
    metrics: [
      { label: "Conversations automated", value: "80%" },
      { label: "Response time", value: "<2 seconds" },
      { label: "Availability", value: "24 / 7" },
    ],
    links: [],
  },
  {
    slug: "document-processing-ai-agent",
    title: "Document Processing AI Agent",
    tagline: "Processes 200+ documents per day with 96% extraction accuracy.",
    description:
      "Built an AI agent that reads, classifies, and extracts structured data from unstructured business documents — invoices, contracts, and reports — eliminating hours of manual data entry.",
    highlights: [
      "Processes over 200 documents per day fully automatically",
      "96% field-extraction accuracy across varied document formats",
      "Outputs structured JSON to downstream tools via REST API",
    ],
    techStack: ["LangChain", "GPT-4o", "FastAPI", "Python", "PostgreSQL"],
    metrics: [
      { label: "Documents per day", value: "200+" },
      { label: "Extraction accuracy", value: "96%" },
      { label: "Manual effort saved", value: "~8 hrs/day" },
    ],
    links: [],
  },
];

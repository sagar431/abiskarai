export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
  starts: string;
};

export const services: Service[] = [
  {
    slug: "landing-pages-and-digital-presence",
    title: "Landing Pages & Digital Presence",
    tagline: "Fast, modern websites and landing pages that represent your brand and convert.",
    description:
      "We design and build fast, modern websites and landing pages that represent your brand professionally — optimised for conversions and ready to go live in weeks, not months.",
    outcomes: [
      "Live in 1–2 weeks from brief to launch",
      "Built for conversions, not just looks",
      "Fast, mobile-first, and SEO-ready",
    ],
    deliverables: [
      "Conversion-focused landing page or multi-page site",
      "Responsive, accessible, high-performance build",
      "Analytics, lead capture, and WhatsApp CTA wiring",
      "All assets and credentials handed over at launch",
    ],
    starts: "from $500 – $1,500",
  },
  {
    slug: "whatsapp-bot-integration",
    title: "WhatsApp Bot Integration",
    tagline: "Automate customer conversations — FAQs, lead qualification, and bookings.",
    description:
      "Automate your customer conversations with a WhatsApp bot that answers FAQs, qualifies leads, books appointments, and follows up — all without you lifting a finger. We handle the full WhatsApp Business API application and onboarding.",
    outcomes: [
      "Automate up to 80% of inbound conversations",
      "Reply in seconds, 24 / 7",
      "Free your team from repetitive questions",
    ],
    deliverables: [
      "WhatsApp Business API setup and approval",
      "Lead-qualification and booking flows",
      "CRM integration and follow-up sequences",
      "FAQ layer tuned to your brand voice",
    ],
    starts: "from $800 – $2,000",
  },
  {
    slug: "custom-ai-agents",
    title: "Custom AI Agents",
    tagline: "Agents that process documents, answer enquiries, and act across your tools.",
    description:
      "We build AI agents that handle your repetitive internal tasks: processing documents, responding to enquiries, extracting data, and triggering actions across the tools you already use — automatically.",
    outcomes: [
      "Process 200+ documents a day at 96% accuracy",
      "Eliminate hours of manual data entry",
      "Reliable automations, not flaky demos",
    ],
    deliverables: [
      "Document ingestion and structured extraction",
      "Workflow automation across your stack",
      "Integrations: Sheets, Notion, Airtable, Slack, HubSpot",
      "Monitoring, logs, and human-in-the-loop fallbacks",
    ],
    starts: "from $1,500 upwards",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

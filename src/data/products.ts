export type Product = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: "Web" | "WhatsApp" | "Agent" | "Builder";
  demoType: "video" | "link";
  demoUrl: string;
  /** Optional custom thumbnail (drop in via Codex). Falls back to a placeholder. */
  poster?: string;
};

export const products: Product[] = [
  {
    slug: "ai-website-generator",
    category: "Web",
    title: "AI Website Generator",
    tagline: "Generate a full landing page from a single prompt in seconds.",
    description:
      "Watch our AI generate a complete, styled business website from a text description — ready to deploy with no manual coding required.",
    demoType: "video",
    demoUrl: "https://www.youtube.com/embed/G6M5bEBRdNQ",
    poster: "/media/products/ai-website-generator.webp",
  },
  {
    slug: "deep-research-assistant",
    category: "Agent",
    title: "Deep Research Assistant",
    tagline: "Automated research reports synthesised from 50+ sources.",
    description:
      "An AI agent that searches, reads, and synthesises information from dozens of sources to produce structured research reports — in minutes, not hours.",
    demoType: "video",
    demoUrl: "https://www.youtube.com/embed/-t_KgPFuAxs",
    poster: "/media/products/deep-research-assistant.webp",
  },
  {
    slug: "vibe-app-builder",
    category: "Builder",
    title: "Vibe — AI App Builder",
    tagline: "Describe your app. Watch it get built live in a sandbox.",
    description:
      "A full-stack platform where a 6-agent AI pipeline — designer, creative director, planner, coder, validator — collaborates in real time to generate complete Next.js applications from a single prompt or screenshot.",
    demoType: "video",
    demoUrl: "https://www.youtube.com/embed/96WNW_1TPZ4",
    poster: "/media/products/vibe-app-builder.webp",
  },
  {
    slug: "mlops-agent",
    category: "Agent",
    title: "MLOps Automation Agent",
    tagline: "Automates Dockerisation, MLflow tracking, DVC versioning and CI/CD.",
    description:
      "Watch the agent take a raw ML project and fully set up a production-grade pipeline — configuration, experiment tracking, versioning, and deployment — without any manual steps.",
    demoType: "video",
    demoUrl: "https://www.youtube.com/embed/yYLG49bwOMM",
    poster: "/media/products/mlops-agent.webp",
  },
];

/** Pull the YouTube video id out of an embed URL. */
export function youTubeId(embedUrl: string): string | null {
  const match = embedUrl.match(/embed\/([^?/]+)/);
  return match ? match[1] : null;
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

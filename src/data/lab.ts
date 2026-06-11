export type LabEntry = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readingTime: string;
  status: "published" | "draft";
};

export const labEntries: LabEntry[] = [
  {
    slug: "kv-cache-explained",
    title: "KV cache, explained without the buzzwords",
    category: "Inference",
    excerpt:
      "Why KV cache is the single biggest lever on LLM cost and latency, and what changes when you enable it on your own models.",
    date: "2026-04-20",
    readingTime: "9 min read",
    status: "draft",
  },
  {
    slug: "agent-architectures-i-actually-ship",
    title: "Agent architectures I actually ship",
    category: "Agents",
    excerpt:
      "A field guide to the three agent shapes I keep reaching for in production — task graphs, ReAct loops, and supervisor + worker pools.",
    date: "2026-03-12",
    readingTime: "11 min read",
    status: "draft",
  },
  {
    slug: "vibe-behind-the-scenes",
    title: "Vibe — behind the scenes of a 6-agent app builder",
    category: "Build log",
    excerpt:
      "How the design analyser, planner, and code agent talk to each other, and why E2B sandboxes were the unlock that made it ship.",
    date: "2026-02-08",
    readingTime: "14 min read",
    status: "draft",
  },
  {
    slug: "whatsapp-bots-that-actually-convert",
    title: "WhatsApp bots that actually convert",
    category: "Field notes",
    excerpt:
      "Patterns from shipping a bot that automated 80% of conversations — qualifying questions, fallback scripts, and the small UX details that change the close rate.",
    date: "2026-01-15",
    readingTime: "7 min read",
    status: "draft",
  },
];

export function getLabEntry(slug: string) {
  return labEntries.find((e) => e.slug === slug);
}

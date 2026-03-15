const items = [
  { label: "Next.js" },
  { label: "OpenAI GPT-4o" },
  { label: "LangChain" },
  { label: "WhatsApp API" },
  { label: "Vercel" },
  { label: "TypeScript" },
  { label: "Tailwind CSS" },
  { label: "FastAPI" },
  { label: "E2B Sandboxes" },
  { label: "Gemini" },
  { label: "Inngest" },
  { label: "PostgreSQL" },
  { label: "Framer Motion" },
  { label: "Clerk Auth" },
  { label: "Prisma ORM" },
  { label: "Netlify" },
];

// Duplicate for seamless loop
const track = [...items, ...items];

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.05] py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="marquee-track flex gap-8">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-2 text-sm font-medium text-white/30 transition-colors hover:text-white/60"
          >
            <span className="h-1 w-1 rounded-full bg-primary-500/60" />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

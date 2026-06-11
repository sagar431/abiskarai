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
    <div className="relative overflow-hidden border-y border-slate-100 bg-slate-50/50 py-4 dark:border-slate-800 dark:bg-slate-900/30">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-[#0a0a0a]" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-[#0a0a0a]" />

      <div className="marquee-track flex gap-8">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-slate-600 dark:text-slate-600 dark:hover:text-slate-300"
          >
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

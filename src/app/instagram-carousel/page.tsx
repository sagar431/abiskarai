import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  Check,
  Globe2,
  MessageCircle,
  Phone,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Instagram Carousel Template",
  description:
    "A reusable Instagram carousel template for AbiskarAI service ads.",
};

const contactNumber = "9337736575";

const slides = [
  {
    label: "AI Growth Systems",
    title: "More leads. Faster replies. Less manual work.",
    body: "We create digital systems that help customers find you, message you, and get answers quickly.",
    tag: "Swipe for the offer",
    icon: Rocket,
    mood: "hero",
  },
  {
    label: "For Busy Businesses",
    title: "Your next customer should not wait for a reply.",
    body: "Missed calls, slow replies, and no follow-up can quietly lose real money every week.",
    tag: "Fix the response gap",
    icon: Zap,
    mood: "mint",
  },
  {
    label: "Website Design",
    title: "A modern website that turns visitors into enquiries.",
    body: "Clean landing pages for your service, brand, pricing, proof, and contact flow.",
    tag: "Look professional online",
    icon: Globe2,
    mood: "coral",
  },
  {
    label: "WhatsApp Automation",
    title: "A bot that answers, qualifies, and follows up.",
    body: "Customers get instant answers while you focus on running the business.",
    tag: "Never miss a warm lead",
    icon: MessageCircle,
    mood: "blue",
  },
  {
    label: "Custom AI Agents",
    title: "Automate the repetitive work inside your business.",
    body: "Documents, enquiries, reports, research, data entry, and repeat workflows can be handled by AI.",
    tag: "Save hours every week",
    icon: Bot,
    mood: "mint",
  },
  {
    label: "Why Choose Us",
    title: "We build practical systems, not confusing demos.",
    body: "You get clear advice, fast prototypes, real testing, and solutions made around your business.",
    tag: "Simple to use. Built to work.",
    icon: Check,
    mood: "coral",
  },
  {
    label: "Book Your Build",
    title: "Ready to grow with AI automation?",
    body: "Call or WhatsApp us and tell us what you want to automate first.",
    tag: contactNumber,
    icon: Phone,
    mood: "cta",
  },
];

const moodStyles = {
  hero: {
    frame: "bg-[#101828] text-white",
    wash:
      "bg-[radial-gradient(circle_at_78%_18%,rgba(20,184,166,0.55),transparent_32%),linear-gradient(135deg,rgba(16,24,40,0.86),rgba(17,24,39,0.72)_48%,rgba(255,112,67,0.36))]",
    chip: "bg-white text-[#101828]",
    accent: "bg-[#c7ff5e]",
  },
  mint: {
    frame: "bg-[#ecfff8] text-[#06251e]",
    wash:
      "bg-[linear-gradient(135deg,rgba(236,255,248,0.9),rgba(183,255,225,0.84)_45%,rgba(89,214,255,0.5))]",
    chip: "bg-[#06251e] text-white",
    accent: "bg-[#00c48c]",
  },
  coral: {
    frame: "bg-[#fff4eb] text-[#2b150e]",
    wash:
      "bg-[linear-gradient(135deg,rgba(255,244,235,0.9),rgba(255,177,126,0.72)_46%,rgba(255,96,110,0.42))]",
    chip: "bg-[#2b150e] text-white",
    accent: "bg-[#ff6b4a]",
  },
  blue: {
    frame: "bg-[#eef7ff] text-[#061b34]",
    wash:
      "bg-[linear-gradient(135deg,rgba(238,247,255,0.92),rgba(132,213,255,0.74)_46%,rgba(115,92,255,0.36))]",
    chip: "bg-[#061b34] text-white",
    accent: "bg-[#4cc9ff]",
  },
  cta: {
    frame: "bg-[#161123] text-white",
    wash:
      "bg-[radial-gradient(circle_at_74%_20%,rgba(199,255,94,0.46),transparent_32%),linear-gradient(135deg,rgba(22,17,35,0.92),rgba(74,29,91,0.74)_52%,rgba(255,107,74,0.46))]",
    chip: "bg-[#c7ff5e] text-[#161123]",
    accent: "bg-[#ff6b4a]",
  },
} as const;

function SlideCard({
  slide,
  index,
  exportMode = false,
}: {
  slide: (typeof slides)[number];
  index: number;
  exportMode?: boolean;
}) {
  const Icon = slide.icon;
  const style = moodStyles[slide.mood as keyof typeof moodStyles];
  const isCta = slide.mood === "cta";

  return (
    <article
      className={`ig-slide relative overflow-hidden [container-type:inline-size] ${style.frame} ${
        exportMode
          ? "fixed left-0 top-0 h-[1125px] w-[1080px] max-w-none"
          : "aspect-square w-full max-w-[1080px]"
      }`}
      aria-label={`Instagram carousel slide ${index + 1}`}
    >
      <div className="absolute inset-0 bg-[url('/instagram/abiskarai-bright-carousel-bg.png')] bg-cover bg-center opacity-80" />
      <div className={`absolute inset-0 ${style.wash}`} />
      <div className="absolute -right-[10cqw] -top-[10cqw] size-[38cqw] rounded-full bg-white/30 blur-2xl" />
      <div className="absolute -bottom-[12cqw] -left-[12cqw] size-[42cqw] rounded-full bg-white/28 blur-2xl" />

      <div className="relative z-10 flex h-full flex-col justify-between p-[clamp(42px,7cqw,78px)]">
        <div className="flex items-center justify-between">
          <div className={`inline-flex items-center gap-3 rounded-full px-[3.6cqw] py-[1.7cqw] text-[clamp(12px,1.8cqw,18px)] font-black uppercase tracking-[0.08em] ${style.chip}`}>
            <Sparkles className="size-[1em]" />
            {slide.label}
          </div>
          <p className="font-mono text-[clamp(12px,1.7cqw,18px)] font-bold uppercase opacity-65">
            {String(index + 1).padStart(2, "0")} / 07
          </p>
        </div>

        <div className="grid gap-[4cqw]">
          <div
            className={`flex size-[clamp(70px,11cqw,116px)] items-center justify-center rounded-[28%] ${style.chip} shadow-[0_18px_60px_rgba(0,0,0,0.18)]`}
          >
            <Icon className="size-[52%]" strokeWidth={2.2} />
          </div>

          <h1 className="max-w-[84cqw] text-[clamp(44px,8.2cqw,92px)] font-black leading-[0.9] tracking-[-0.045em]">
            {slide.title}
          </h1>

          <p className="max-w-[74cqw] text-[clamp(20px,3.3cqw,35px)] font-semibold leading-[1.08] opacity-75">
            {slide.body}
          </p>
        </div>

        <div className="flex items-center justify-between gap-5 border-t border-current/14 pt-[3.6cqw]">
          <p
            className={`font-black ${
              isCta
                ? "text-[clamp(26px,5cqw,54px)] tracking-[-0.02em]"
                : "text-[clamp(13px,2cqw,20px)] uppercase tracking-[0.12em] opacity-70"
            }`}
          >
            {slide.tag}
          </p>
          <div className={`flex size-[clamp(48px,7cqw,76px)] shrink-0 items-center justify-center rounded-full ${style.accent} text-[#101828] shadow-[0_16px_44px_rgba(0,0,0,0.2)]`}>
            <ArrowRight className="size-[48%]" strokeWidth={2.4} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default async function InstagramCarouselPage({
  searchParams,
}: {
  searchParams?: Promise<{ export?: string; slide?: string }>;
}) {
  const params = await searchParams;
  const exportSlide = Number(params?.slide ?? 1) - 1;
  const slideIndex = Math.min(Math.max(exportSlide, 0), slides.length - 1);
  const isExport = params?.export === "1";

  if (isExport) {
    return (
      <>
        <style>{`
          body:has(.ig-export-single) header {
            display: none;
          }

          body:has(.ig-export-single) nextjs-portal,
          body:has(.ig-export-single) [data-nextjs-toast],
          body:has(.ig-export-single) [data-nextjs-dialog-overlay] {
            display: none !important;
          }

          html:has(.ig-export-single),
          body:has(.ig-export-single) {
            width: 1080px;
            min-width: 1080px;
            height: 1080px;
            min-height: 1080px;
            margin: 0;
            overflow: hidden;
            background: #ffffff;
          }

          body:has(.ig-export-single) .ig-export-single,
          body:has(.ig-export-single) .ig-slide {
            width: 1080px !important;
            height: 1125px !important;
            max-width: none !important;
            min-height: 1125px !important;
          }
        `}</style>
        <main className="ig-export-single h-screen w-screen overflow-hidden bg-white">
          <SlideCard
            slide={slides[slideIndex]}
            index={slideIndex}
            exportMode
          />
        </main>
      </>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9fb] px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl text-[#101828]">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#667085]">
            Fresh Ad Creative / Carousel
          </p>
          <h1 className="mt-4 text-4xl font-black leading-none tracking-[-0.055em] sm:text-6xl">
            Instagram carousel PNGs
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-medium text-[#667085]">
            Bright campaign style for AbiskarAI with contact number {contactNumber}.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {slides.map((slide, index) => (
            <SlideCard
              key={`${slide.label}-${slide.title}`}
              slide={slide}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

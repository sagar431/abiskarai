import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/axion/PageHeader";
import { SiteFooter } from "@/components/axion/SiteFooter";
import { AxionFinalCTA } from "@/components/AxionFinalCTA";
import { SectionBadge } from "@/components/axion/atoms";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sagar Kumar Pallai — Civil engineer turned AI/ML builder. The story behind AbiskarAI: builders, not wrappers.",
};

const principles = [
  {
    title: "Builder, not wrapper",
    body: "I write the agent loop, the orchestrator, the eval harness, and the deploy step. No black-box SaaS in the critical path.",
  },
  {
    title: "Ship in weeks",
    body: "Working prototype within 2 weeks. The first version is small enough to keep, big enough to validate the bet.",
  },
  {
    title: "Plain English",
    body: "If I can't explain the system to a non-technical founder over a cup of tea, the system isn't done yet.",
  },
];

const timeline = [
  {
    period: "2021 — 2022",
    title: "Civil Engineering, then a hard pivot",
    body: "Graduated in civil, then spent a year teaching myself ML from scratch — papers, PyTorch, Kaggle. The transition wasn't comfortable, it was deliberate.",
  },
  {
    period: "2022 — 2023",
    title: "ZS / Vuram — production ML and automation",
    body: "Worked on enterprise data and automation projects. Learned how AI ships in real businesses where uptime and cost matter more than benchmarks.",
  },
  {
    period: "2023 — 2024",
    title: "MS in Computer Science",
    body: "Deeper into multimodal ML, agent systems, and MLOps. Started building agentic workflows on top of what I'd learned in industry.",
  },
  {
    period: "2024 — now",
    title: "AbiskarAI",
    body: "Building AI products end-to-end for founders and small teams: WhatsApp bots, document AI, Vibe-style multi-agent products, and creative AI for ads.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative w-full">
      <PageHeader
        badgeNumber="03"
        badgeLabel="About"
        title={
          <>
            <span className="hidden sm:block" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}>
              Civil engineer
              <br />
              turned AI builder.
            </span>
            <span className="sm:hidden">Civil engineer turned AI builder.</span>
          </>
        }
        description="I'm Sagar — the person behind AbiskarAI. I went from civil engineering to AI/ML the long way: papers, side projects, ZS / Vuram, an MS in CS. Now I build AI products from scratch for people who want to ship."
      />

      {/* Portrait + intro */}
      <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Image
                src="/media/about/portrait-sagar.webp"
                alt="Sagar Kumar Pallai, founder of AbiskarAI"
                fill
                sizes="(min-width:1024px) 36vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <SectionBadge number="A" label="Builder, not wrapper" />
              <p className="text-[16px] leading-[1.7] text-gray-800 sm:text-[18px]">
                Most "AI agencies" stitch GPT calls and call it a product. I came up the other way — fundamentals first, then frameworks. I write the agent loop, the orchestrator, the eval harness, and the deploy step. That's the only way I know how to build something a founder can actually trust in production.
              </p>
              <p className="text-[16px] leading-[1.7] text-gray-800 sm:text-[18px]">
                AbiskarAI is the studio I built to ship those products for other people. WhatsApp bots that close leads, document AI that saves a back-office team eight hours a day, multi-agent systems like Vibe that turn a prompt into a deployed Next.js app, and creative AI for the ads that bring people in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative w-full bg-[#F5F5F5] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 sm:mb-14">
            <SectionBadge number="B" label="How I work" borderClass="border-gray-300" />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3 lg:gap-7">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white p-6 sm:p-7 lg:p-8"
              >
                <span className="text-[12px] uppercase tracking-[0.18em] text-gray-400">
                  0{i + 1}
                </span>
                <h3 className="mt-6 text-[20px] font-medium leading-[1.18] text-gray-900 sm:text-[22px]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-gray-700 sm:text-[15px]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 sm:mb-14">
            <SectionBadge number="C" label="The path" />
          </div>
          <ol className="relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            {timeline.map((t) => (
              <li
                key={t.title}
                className="rounded-2xl border border-gray-200 p-6 sm:p-8"
              >
                <div className="text-[12px] uppercase tracking-[0.18em] text-gray-400">
                  {t.period}
                </div>
                <h3 className="mt-3 text-[20px] font-medium leading-[1.18] text-gray-900 sm:text-[22px]">
                  {t.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-gray-700 sm:text-[15px]">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <AxionFinalCTA />
      <SiteFooter />
    </main>
  );
}

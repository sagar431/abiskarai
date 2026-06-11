import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/axion/PageHeader";
import { SiteFooter } from "@/components/axion/SiteFooter";
import { AxionFinalCTA } from "@/components/AxionFinalCTA";
import { AxionFAQ } from "@/components/AxionFAQ";
import { OrangeButton, SectionBadge } from "@/components/axion/atoms";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three lanes from AbiskarAI: landing pages and digital presence, WhatsApp bot integration, and custom AI agents.",
};

const process = [
  {
    step: "01",
    title: "Discovery Call",
    detail:
      "We learn about your business challenges and identify where AI can make the biggest impact on your bottom line.",
  },
  {
    step: "02",
    title: "Build & Test",
    detail:
      "We create a working prototype tailored to your needs and test it with real data to ensure it delivers results.",
  },
  {
    step: "03",
    title: "Launch & Optimize",
    detail:
      "We deploy your solution, train your team, and keep improving it based on feedback and performance metrics.",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative w-full">
      <PageHeader
        badgeNumber="02"
        badgeLabel="Services"
        title={
          <>
            <span className="hidden sm:block" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}>
              What we
              <br />
              do for you.
            </span>
            <span className="sm:hidden">What we do for you.</span>
          </>
        }
        description="Three things, done properly: websites that convert, WhatsApp bots that qualify and book, and AI agents that take the repetitive work off your plate. Pick what fits or write to me and I'll point you to the right one."
      />

      <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="flex flex-col gap-16 px-5 sm:gap-20 sm:px-8 lg:gap-28 lg:px-12">
            {services.map((s, i) => (
              <article
                key={s.slug}
                id={s.slug}
                className="grid scroll-mt-24 grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20"
              >
                <div className="flex flex-col gap-5">
                  <SectionBadge number={`0${i + 1}`} label={s.title} />
                  <h2
                    className="font-medium text-gray-900"
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                      lineHeight: 1.15,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.tagline}
                  </h2>
                  <p className="text-[14px] leading-[1.7] text-gray-700 sm:text-[15px]">
                    {s.description}
                  </p>
                  <div className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-[12px] font-medium text-gray-700 sm:text-[13px]">
                    {s.starts}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <div className="mb-3 text-[12px] uppercase tracking-[0.18em] text-gray-400">
                      Outcomes
                    </div>
                    <ul className="flex flex-col gap-3">
                      {s.outcomes.map((o) => (
                        <li
                          key={o}
                          className="flex gap-3 text-[14px] leading-[1.6] text-gray-800 sm:text-[15px]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#F26522]" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="mb-3 text-[12px] uppercase tracking-[0.18em] text-gray-400">
                      Deliverables
                    </div>
                    <ul className="flex flex-col gap-3">
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex gap-3 text-[14px] leading-[1.6] text-gray-800 sm:text-[15px]"
                        >
                          <ArrowRight size={14} className="mt-1 flex-none text-gray-400" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="sm:col-span-2 mt-2">
                    <OrangeButton href="/contact" label="Talk about your project" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative w-full bg-[#F5F5F5] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 sm:mb-14">
            <SectionBadge number="→" label="How we work" borderClass="border-gray-300" />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3 lg:gap-7">
            {process.map((p) => (
              <div key={p.step} className="rounded-2xl bg-white p-6 sm:p-7 lg:p-8">
                <span className="text-[12px] uppercase tracking-[0.18em] text-gray-400">
                  {p.step}
                </span>
                <h3 className="mt-6 text-[20px] font-medium leading-[1.18] text-gray-900 sm:text-[22px]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-gray-700 sm:text-[15px]">
                  {p.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AxionFAQ bg="#ffffff" badgeBorder="border-gray-200" />

      <AxionFinalCTA />
      <SiteFooter />
    </main>
  );
}

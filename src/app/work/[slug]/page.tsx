import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cases, getCase } from "@/data/cases";
import { PageHeader } from "@/components/axion/PageHeader";
import { SiteFooter } from "@/components/axion/SiteFooter";
import { AxionFinalCTA } from "@/components/AxionFinalCTA";
import { MediaPlaceholder, OrangeButton, SectionBadge } from "@/components/axion/atoms";
import { CaseCard } from "@/components/axion/CaseCard";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return { title: "Case study not found" };
  return {
    title: c.title,
    description: c.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return notFound();

  const others = cases.filter((x) => x.slug !== c.slug).slice(0, 2);

  return (
    <main className="relative w-full">
      <PageHeader
        badgeNumber="01"
        badgeLabel={c.category}
        title={
          <>
            <span className="hidden sm:block" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}>
              {c.title}
            </span>
            <span className="sm:hidden">{c.title}</span>
          </>
        }
        description={c.tagline}
      />

      {/* Cover */}
      <section className="relative w-full bg-white pt-10 sm:pt-12 lg:pt-16">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <MediaPlaceholder
            bg={c.cover.bg ?? "#1a1d2e"}
            ratio={c.cover.ratio}
            label={c.cover.label}
            className="rounded-2xl"
          >
            {c.cover.image ? (
              <Image
                src={c.cover.image}
                alt={c.cover.label}
                fill
                sizes="(min-width:1024px) 92vw, 100vw"
                className="object-cover"
              />
            ) : null}
          </MediaPlaceholder>
        </div>
      </section>

      {/* Body */}
      <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            {/* Sidebar */}
            <aside className="flex flex-col gap-10">
              <div>
                <div className="mb-3 text-[12px] uppercase tracking-[0.18em] text-gray-400">
                  Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-gray-200 px-3 py-1 text-[12px] text-gray-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 text-[12px] uppercase tracking-[0.18em] text-gray-400">
                  Results
                </div>
                <ul className="flex flex-col gap-4">
                  {c.results.map((r) => (
                    <li key={r.label}>
                      <div
                        className="font-medium text-gray-900"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          letterSpacing: "-0.02em",
                          lineHeight: 1,
                        }}
                      >
                        {r.value}
                      </div>
                      <div className="mt-1 text-[13px] text-gray-600">{r.label}</div>
                    </li>
                  ))}
                </ul>
              </div>

              {c.links && c.links.length > 0 ? (
                <div>
                  <div className="mb-3 text-[12px] uppercase tracking-[0.18em] text-gray-400">
                    Links
                  </div>
                  <ul className="flex flex-col gap-2">
                    {c.links.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-[14px] font-medium text-gray-900 underline-offset-4 hover:underline"
                        >
                          {l.label}
                          <ArrowRight size={14} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </aside>

            {/* Main */}
            <div className="flex flex-col gap-12">
              <div>
                <SectionBadge number="A" label="The problem" />
                <p className="mt-6 text-[16px] leading-[1.7] text-gray-800 sm:text-[18px]">
                  {c.problem}
                </p>
              </div>

              <div>
                <SectionBadge number="B" label="The solution" />
                <ul className="mt-6 flex flex-col gap-4">
                  {c.solution.map((s, i) => (
                    <li
                      key={i}
                      className="flex gap-4 text-[16px] leading-[1.7] text-gray-800 sm:text-[18px]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#F26522]" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SectionBadge number="C" label="Outcome" />
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {c.results.map((r) => (
                    <div
                      key={r.label}
                      className="rounded-2xl border border-gray-200 p-5"
                    >
                      <div
                        className="font-medium text-gray-900"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          letterSpacing: "-0.02em",
                          lineHeight: 1,
                        }}
                      >
                        {r.value}
                      </div>
                      <div className="mt-2 text-[13px] text-gray-600">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <OrangeButton href="/contact" label="Start a similar project" />
            </div>
          </div>
        </div>
      </section>

      {/* More work */}
      {others.length > 0 ? (
        <section className="relative w-full bg-[#F5F5F5] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="mb-10 px-5 sm:mb-14 sm:px-8 lg:mb-16 lg:px-12 flex items-end justify-between">
              <div className="text-[13px] uppercase tracking-[0.18em] text-gray-500">
                More work
              </div>
              <Link
                href="/work"
                className="text-[13px] font-medium text-gray-900 underline-offset-4 hover:underline sm:text-[14px]"
              >
                See all →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 px-5 sm:gap-6 sm:px-8 md:grid-cols-2 lg:gap-7 lg:px-12">
              {others.map((o) => (
                <CaseCard key={o.slug} caseStudy={o} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <AxionFinalCTA />
      <SiteFooter />
    </main>
  );
}

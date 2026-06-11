"use client";

import Link from "next/link";
import { cases } from "@/data/cases";
import { CaseCard } from "./axion/CaseCard";
import { HeadingHero, SectionBadge } from "./axion/atoms";

export function AxionCases() {
  const featured = cases.slice(0, 2);

  return (
    <section
      id="projects"
      className="relative w-full bg-[#F5F5F5] pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-6 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <SectionBadge number="2" label="Featured client work" borderClass="border-gray-300" />
        </div>

        <div className="px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 lg:mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <HeadingHero>
            <span className="block sm:hidden" style={{ fontSize: "clamp(1.75rem, 7vw, 4.2rem)" }}>
              Our projects
            </span>
            <span className="hidden sm:block" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}>
              Our projects
            </span>
          </HeadingHero>

          <Link
            href="/work"
            className="text-[13px] font-medium text-gray-900 underline-offset-4 hover:underline sm:text-[14px]"
          >
            See all work →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 px-5 sm:gap-6 sm:px-8 md:grid-cols-2 lg:gap-7 lg:px-12">
          {featured.map((c) => (
            <CaseCard key={c.slug} caseStudy={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AxionCases;

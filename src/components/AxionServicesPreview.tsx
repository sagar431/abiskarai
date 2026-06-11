"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { HeadingHero, SectionBadge } from "./axion/atoms";

export function AxionServicesPreview() {
  return (
    <section className="relative w-full bg-white pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-24 lg:pb-24">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-6 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <SectionBadge number="3" label="What we do" />
        </div>

        <div className="px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 lg:mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <HeadingHero>
            <span className="block sm:hidden" style={{ fontSize: "clamp(1.75rem, 7vw, 4.2rem)" }}>
              What we
              <br /> do for you.
            </span>
            <span className="hidden sm:block" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}>
              What we
              <br />
              do for you.
            </span>
          </HeadingHero>
          <Link
            href="/services"
            className="text-[13px] font-medium text-gray-900 underline-offset-4 hover:underline sm:text-[14px]"
          >
            All services →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 px-5 sm:gap-6 sm:px-8 md:grid-cols-3 lg:gap-7 lg:px-12">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group relative flex flex-col rounded-2xl border border-gray-200 p-6 transition-colors duration-300 hover:border-gray-900 sm:p-7 lg:p-8"
            >
              <span className="text-[12px] uppercase tracking-[0.18em] text-gray-400">
                0{i + 1}
              </span>
              <h3 className="mt-6 text-[20px] font-medium leading-[1.18] text-gray-900 sm:text-[22px]">
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-gray-600">{s.tagline}</p>
              <span className="mt-8 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-all duration-300 group-hover:bg-[#F26522] group-hover:text-white">
                <ArrowRight size={14} className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

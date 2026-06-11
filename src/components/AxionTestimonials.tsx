"use client";

import { SectionBadge } from "./axion/atoms";
import { testimonials } from "@/data/testimonials";

export function AxionTestimonials() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-6 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <SectionBadge number="4" label="What clients say" />
        </div>

        <div className="px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 lg:mb-16">
          <h2
            className="font-medium text-gray-900"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3.2rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            Teams that shipped with us.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 px-5 sm:gap-6 sm:px-8 md:grid-cols-2 lg:gap-7 lg:px-12">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-gray-200 p-6 sm:p-8"
            >
              <blockquote className="text-[16px] leading-[1.6] text-gray-800 sm:text-[18px]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[13px] font-semibold text-white">
                  {t.initials}
                </span>
                <span className="flex flex-col">
                  <span className="text-[14px] font-semibold text-gray-900">{t.name}</span>
                  <span className="text-[12px] text-gray-500">
                    {t.role} · {t.company}
                  </span>
                </span>
                <span className="ml-auto flex gap-0.5 text-[#F26522]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

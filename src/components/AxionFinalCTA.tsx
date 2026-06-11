"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROLL_EASE, TextRoll } from "./axion/atoms";

export function AxionFinalCTA() {
  return (
    <section className="relative w-full bg-[#F5F5F5] pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-gray-900 p-8 sm:p-12 lg:p-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-[13px] uppercase tracking-[0.18em] text-white/50">
                Booking Q1 2026
              </span>
              <h2
                className="mt-4 font-medium text-white"
                style={{
                  fontSize: "clamp(1.75rem, 5vw, 3.6rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Have a project that needs to ship fast and work in production?
              </h2>
              <p className="mt-5 text-[15px] leading-[1.6] text-white/70 sm:text-[16px]">
                Tell me what you're building. I reply within a working day with a clear scope, timeline, and price — usually a working prototype in 2 weeks.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#F26522] pl-5 pr-2 py-2 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-[#e05a1a] sm:pl-6 sm:text-[14px]"
              >
                <TextRoll>Start a project</TextRoll>
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#F26522] transition-transform duration-500 group-hover:-rotate-45 sm:h-8 sm:w-8"
                  style={{ transitionTimingFunction: ROLL_EASE }}
                >
                  <ArrowRight size={14} />
                </span>
              </Link>

              <a
                href="https://wa.me/919337736575"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 pl-5 pr-2 py-2 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-white hover:text-gray-900 sm:pl-6 sm:text-[14px]"
              >
                <TextRoll>Message on WhatsApp</TextRoll>
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-900 transition-transform duration-500 group-hover:-rotate-45 sm:h-8 sm:w-8"
                  style={{ transitionTimingFunction: ROLL_EASE }}
                >
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

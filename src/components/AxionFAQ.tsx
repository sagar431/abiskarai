"use client";

import { useState } from "react";
import { SectionBadge } from "./axion/atoms";
import { faqs } from "@/data/faq";

export function AxionFAQ({
  bg = "#F5F5F5",
  badgeBorder = "border-gray-300",
}: {
  bg?: string;
  badgeBorder?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full py-16 sm:py-20 lg:py-24" style={{ background: bg }}>
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-10 sm:mb-14">
          <SectionBadge number="?" label="Questions we get asked" borderClass={badgeBorder} />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <h2
            className="font-medium text-gray-900"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            Everything you need to know before reaching out.
          </h2>

          <div className="flex flex-col">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-medium text-gray-900 sm:text-[16px]">
                      {f.q}
                    </span>
                    <span
                      className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gray-900 text-white transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pr-10 text-[14px] leading-[1.7] text-gray-600 sm:text-[15px]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

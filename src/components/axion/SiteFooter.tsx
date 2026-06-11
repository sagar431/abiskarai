"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROLL_EASE, TextRoll } from "./atoms";

const footerNav = [
  {
    title: "Studio",
    links: [
      { label: "Work", href: "/work" },
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "About", href: "/about" },
      { label: "Lab", href: "/lab" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Email", href: "mailto:sagar@abiskarai.com" },
      { label: "WhatsApp", href: "https://wa.me/919337736575" },
      { label: "Calendly", href: "https://calendly.com/abiskarai/15min" },
      { label: "GitHub", href: "https://github.com/sagarpallai" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand block */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[11px] font-bold tracking-tight text-gray-900">
                AI
              </span>
              <span className="text-[14px] tracking-wide">AbiskarAI</span>
            </div>
            <p
              className="font-medium"
              style={{
                fontSize: "clamp(1.25rem, 2.6vw, 2rem)",
                lineHeight: 1.18,
                letterSpacing: "-0.02em",
              }}
            >
              AI systems that automate your busywork, so you can focus on growth.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#F26522] pl-5 pr-2 py-2 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-[#e05a1a] sm:pl-6 sm:text-[14px]"
            >
              <TextRoll>Start a project</TextRoll>
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#F26522] transition-transform duration-500 group-hover:-rotate-45 sm:h-8 sm:w-8"
                style={{ transitionTimingFunction: ROLL_EASE }}
              >
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <div className="mb-5 text-[12px] uppercase tracking-[0.18em] text-white/50">
                {col.title}
              </div>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => {
                  const isExternal = l.href.startsWith("http") || l.href.startsWith("mailto:");
                  return (
                    <li key={l.label}>
                      {isExternal ? (
                        <a
                          href={l.href}
                          target={l.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="text-[14px] text-white/80 transition-colors hover:text-white"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          href={l.href}
                          className="text-[14px] text-white/80 transition-colors hover:text-white"
                        >
                          {l.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-white/50 sm:flex-row sm:items-center">
          <span>© {year} AbiskarAI · Built from scratch in India.</span>
          <span>Bhubaneswar, IN · sagar@abiskarai.com</span>
        </div>
      </div>
    </footer>
  );
}

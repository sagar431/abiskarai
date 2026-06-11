"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Clock, Menu, X } from "lucide-react";
import { ROLL_EASE, TextRoll } from "./atoms";

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Lab", href: "/lab" },
  { label: "Contact", href: "/contact" },
];

function useLocalClock() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const tick = () => {
      const now = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(now);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

type Props = {
  /** When true the nav uses no max-width container padding (used inside Hero where its parent already constrains). */
  inline?: boolean;
  /** Path to send the CTA / dark CTA. Defaults to /contact. */
  ctaHref?: string;
};

export function SiteNav({ inline = false, ctaHref = "/contact" }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const time = useLocalClock();
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const wrapperClass = inline
    ? "mx-auto w-full max-w-[1440px] p-2 sm:p-3"
    : "mx-auto w-full max-w-[1440px] p-2 sm:p-3";

  return (
    <>
      <div className={wrapperClass}>
        <nav
          className="flex items-center justify-between rounded-full bg-white"
          style={{ padding: "5px" }}
        >
          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              href="/"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold tracking-tight text-white sm:h-10 sm:w-10 sm:text-[11px]"
              aria-label="AbiskarAI"
            >
              AI
            </Link>
            <ul className="hidden items-center gap-6 pl-1 md:flex">
              {navLinks.map((l) => {
                const active =
                  pathname === l.href || pathname?.startsWith(l.href + "/");
                return (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className={`text-[14px] transition-colors duration-300 ${
                        active
                          ? "text-gray-900"
                          : "text-gray-900 hover:text-gray-500"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <span className="hidden text-[13px] text-gray-600 lg:inline">
              Taking on projects for Q1 2026
            </span>
            <span className="hidden items-center gap-1.5 text-[13px] text-gray-600 md:inline-flex">
              <Clock size={14} />
              {time ? `${time} in India` : "—:— in India"}
            </span>

            <Link
              href={ctaHref}
              className="group hidden items-center gap-2 rounded-full bg-gray-900 pl-5 pr-2 py-2 text-[13px] font-medium text-white md:inline-flex"
            >
              <TextRoll>Book a strategy call</TextRoll>
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-900 transition-transform duration-500 group-hover:-rotate-45"
                style={{ transitionTimingFunction: ROLL_EASE }}
              >
                <ArrowRight size={14} />
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((s) => !s)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="absolute inset-0 bg-black/60"
        />
        <div
          className={`absolute inset-x-0 bottom-0 mx-3 mb-3 rounded-2xl bg-white p-6 transition-transform duration-500 ${
            menuOpen ? "translate-y-0" : "translate-y-full"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)" }}
        >
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-[13px] text-gray-600">
            <Clock size={14} />
            {time ? `${time} in India` : "—:— in India"}
          </div>

          <ul className="flex flex-col gap-2 mb-8">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 text-[28px] font-medium leading-[32px] text-gray-900"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={ctaHref}
            onClick={() => setMenuOpen(false)}
            className="group inline-flex w-full items-center justify-between rounded-full bg-gray-900 pl-5 pr-2 py-2 text-[14px] font-medium text-white"
          >
            <TextRoll>Start a project</TextRoll>
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-900 transition-transform duration-500 group-hover:-rotate-45"
              style={{ transitionTimingFunction: ROLL_EASE }}
            >
              <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

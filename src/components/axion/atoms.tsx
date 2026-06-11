"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export const ROLL_EASE = "cubic-bezier(0.25,0.1,0.25,1)";

export function TextRoll({ children }: { children: string }) {
  return (
    <span className="relative flex h-[20px] flex-col overflow-hidden">
      <span
        className="flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2"
        style={{ transitionTimingFunction: ROLL_EASE }}
      >
        <span className="flex h-[20px] items-center leading-none">{children}</span>
        <span className="flex h-[20px] items-center leading-none">{children}</span>
      </span>
    </span>
  );
}

type ButtonProps = {
  href: string;
  label: string;
  external?: boolean;
};

export function OrangeButton({ href, label, external }: ButtonProps) {
  const className =
    "group inline-flex items-center gap-2 self-start rounded-full bg-[#F26522] pl-5 pr-2 py-2 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-[#e05a1a] sm:pl-6 sm:text-[14px]";
  const inner = (
    <>
      <TextRoll>{label}</TextRoll>
      <span
        className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#F26522] transition-transform duration-500 group-hover:-rotate-45 sm:h-8 sm:w-8"
        style={{ transitionTimingFunction: ROLL_EASE }}
      >
        <ArrowRight size={14} />
      </span>
    </>
  );
  return external ? (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

export function DarkButton({ href, label, external }: ButtonProps) {
  const className =
    "group inline-flex items-center gap-2 self-start rounded-full bg-gray-900 pl-5 pr-2 py-2 text-[13px] font-medium text-white sm:pl-6 sm:text-[14px]";
  const inner = (
    <>
      <TextRoll>{label}</TextRoll>
      <span
        className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-900 transition-transform duration-500 group-hover:-rotate-45 sm:h-8 sm:w-8"
        style={{ transitionTimingFunction: ROLL_EASE }}
      >
        <ArrowRight size={14} />
      </span>
    </>
  );
  return external ? (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

export function SectionBadge({
  number,
  label,
  borderClass = "border-gray-200",
}: {
  number: string;
  label: string;
  borderClass?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[12px]">
        {number}
      </span>
      <span
        className={`rounded-full border ${borderClass} px-3 py-1 text-[12px] font-medium sm:px-4 sm:py-1.5 sm:text-[13px]`}
      >
        {label}
      </span>
    </div>
  );
}

export function ImagePlaceholder({
  className = "",
  ratio,
  label,
}: {
  className?: string;
  ratio: string;
  label: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden border border-dashed border-gray-300 bg-gray-100 ${className}`}
      style={{ aspectRatio: ratio }}
      data-image-placeholder={label}
    >
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <span className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
          {label}
        </span>
      </div>
    </div>
  );
}

export function MediaPlaceholder({
  bg,
  ratio,
  label,
  className = "",
  children,
}: {
  bg: string;
  ratio: string;
  label: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`group relative cursor-pointer overflow-hidden rounded-2xl ${className}`}
      style={{ aspectRatio: ratio, background: bg }}
      data-media-placeholder={label}
    >
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <span className="text-[11px] uppercase tracking-[0.18em] text-white/40">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

export function HeadingHero({ children }: { children: ReactNode }) {
  return (
    <h1
      className="font-medium text-gray-900"
      style={{
        lineHeight: 1.08,
        letterSpacing: "-0.03em",
        fontSize: "clamp(1.75rem, 7vw, 4.2rem)",
      }}
    >
      {children}
    </h1>
  );
}

export function HeadingSection({ children }: { children: ReactNode }) {
  return (
    <h2
      className="font-medium text-gray-900"
      style={{
        fontSize: "clamp(1.5rem, 4vw, 3.2rem)",
        lineHeight: 1.12,
        letterSpacing: "-0.02em",
      }}
    >
      {children}
    </h2>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/data/cases";
import { MediaPlaceholder } from "./atoms";

function LinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export function CaseCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const c = caseStudy;
  const isLight = c.card.pill === "light";
  const pillWidth = isLight ? "group-hover:w-[148px]" : "group-hover:w-[168px]";
  const pillBg = isLight ? "bg-white text-gray-900" : "bg-gray-900 text-white";

  return (
    <Link href={`/work/${c.slug}`} className="block">
      <MediaPlaceholder bg={c.card.bg} ratio={c.card.ratio} label={c.card.label}>
        {c.card.image ? (
          <Image
            src={c.card.image}
            alt={c.card.label}
            fill
            sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
            className="absolute inset-0 object-cover"
          />
        ) : null}
        <div
          className={`absolute bottom-4 left-4 flex h-9 w-9 items-center overflow-hidden rounded-full transition-all duration-300 ease-in-out ${pillBg} ${pillWidth}`}
        >
          <span className="flex h-9 w-9 flex-none items-center justify-center">
            {isLight ? (
              <LinkIcon className="-rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0" />
            ) : (
              <ArrowRight
                size={14}
                className="-rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0"
              />
            )}
          </span>
          <span className="whitespace-nowrap pr-4 text-[13px] font-medium opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100">
            {c.card.pillLabel}
          </span>
        </div>
      </MediaPlaceholder>
      <p className="mt-4 text-[13px] leading-relaxed text-gray-600 sm:text-[14px]">
        {c.tagline}
      </p>
      <h3 className="mt-1 text-[14px] font-semibold text-gray-900 sm:text-[15px]">
        {c.title}
      </h3>
    </Link>
  );
}

"use client";

import { SiteNav } from "./SiteNav";
import { HeadingHero, SectionBadge } from "./atoms";

type Props = {
  badgeNumber: string;
  badgeLabel: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  bg?: string;
};

export function PageHeader({
  badgeNumber,
  badgeLabel,
  title,
  description,
  bg = "#EFEFEF",
}: Props) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: bg }}
    >
      <SiteNav />

      <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="mb-8 sm:mb-10">
          <SectionBadge number={badgeNumber} label={badgeLabel} />
        </div>
        <HeadingHero>{title}</HeadingHero>
        {description ? (
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.6] text-gray-700 sm:text-[17px]">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}

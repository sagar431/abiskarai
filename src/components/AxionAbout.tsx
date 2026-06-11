"use client";

import Image from "next/image";
import {
  HeadingSection,
  OrangeButton,
  SectionBadge,
} from "./axion/atoms";

export function AxionAbout() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-white pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-32 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-6 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <SectionBadge number="1" label="Introducing AbiskarAI" />
        </div>

        <div className="px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16 lg:mb-28">
          <HeadingSection>
            We build AI systems that automate your
            <br />
            busywork, so you can focus on growth.
          </HeadingSection>
        </div>

        {/* Mobile / tablet */}
        <div className="lg:hidden px-5 sm:px-8">
          <div className="flex flex-col gap-6">
            <p className="text-[15px] font-medium leading-[1.6] text-gray-900 sm:text-[17px]">
              Professional websites, WhatsApp automation, and custom AI agents — built fast, built reliably, and explained in plain English. Working prototypes in weeks, not months.
            </p>
            <OrangeButton href="/about" label="About AbiskarAI" />

            <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <div
                className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl sm:w-[45%]"
                style={{ aspectRatio: "438 / 346" }}
              >
                <Image
                  src="/media/home/studio-1.webp"
                  alt="AbiskarAI workspace - sketch and tools"
                  fill
                  sizes="(min-width:1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div
                className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl sm:w-[55%]"
                style={{ aspectRatio: "900 / 600" }}
              >
                <Image
                  src="/media/home/studio-2.webp"
                  alt="AbiskarAI studio workspace"
                  fill
                  sizes="(min-width:1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 px-12 xl:gap-8">
          <div className="self-end">
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ aspectRatio: "438 / 346" }}
            >
              <Image
                src="/media/home/studio-1.webp"
                alt="AbiskarAI workspace - sketch and tools"
                fill
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-end gap-6 self-start">
            <p className="whitespace-nowrap text-[16px] font-medium leading-[1.65] text-gray-900 sm:text-[18px]">
              Professional websites, WhatsApp automation, and custom
              <br />
              AI agents — built fast, built reliably, and explained in
              <br />
              plain English. Working prototypes in weeks, not months.
            </p>
            <OrangeButton href="/about" label="About AbiskarAI" />
          </div>

          <div className="self-end">
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ aspectRatio: "3 / 2" }}
            >
              <Image
                src="/media/home/studio-2.webp"
                alt="AbiskarAI studio workspace"
                fill
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AxionAbout;

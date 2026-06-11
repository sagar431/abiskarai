"use client";

import {
  Shader,
  Swirl,
  ChromaFlow,
  FlutedGlass,
  FilmGrain,
} from "shaders/react";

import { SiteNav } from "./axion/SiteNav";
import { HeadingHero, OrangeButton } from "./axion/atoms";

const partnerSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#E8704E]"
    aria-hidden="true"
  >
    <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
  </svg>
);

export function AxionHero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#EFEFEF]">
      {/* Shader background */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <Shader
          className="h-full w-full"
          style={{ position: "absolute", inset: 0 }}
        >
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#ff5f03"
            leftColor="#ff5f03"
            rightColor="#ff5f03"
            upColor="#ff5f03"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      </div>

      {/* Foreground */}
      <div className="relative z-20 flex min-h-[100svh] flex-col">
        <SiteNav />

        <div className="flex flex-1 flex-col">
          <div className="flex-1" />
          <div className="mx-auto w-full max-w-[1440px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
            <div className="mb-5 text-[13px] tracking-wide text-gray-900 sm:mb-8 sm:text-[14px]">
              AbiskarAI
            </div>

            <HeadingHero>
              <span
                className="hidden sm:block"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}
              >
                Websites, WhatsApp bots
                <br />
                &amp; AI agents
                <br />
                for your business.
              </span>
              <span className="sm:hidden">
                Websites, WhatsApp bots &amp; AI agents for your business.
              </span>
            </HeadingHero>

            <p className="mt-5 max-w-xl text-[14px] leading-[1.6] text-gray-700 sm:mt-6 sm:text-[16px]">
              We build professional websites, WhatsApp automation, and AI agents that help businesses get found, respond faster, and turn inquiries into real workflows.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5">
              <OrangeButton href="/contact" label="Start a project" />

              <div
                className="inline-flex items-center gap-2 rounded-[4px] bg-white px-3 py-1.5 transition-shadow duration-300"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.08)";
                }}
              >
                {partnerSvg}
                <span className="text-[13px] font-medium text-gray-900 sm:text-[14px]">
                  2-week launch timeline
                </span>
                <span className="rounded bg-gray-900 px-1.5 py-0.5 text-[10px] text-white sm:px-2 sm:text-[11px]">
                  Live in weeks
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AxionHero;

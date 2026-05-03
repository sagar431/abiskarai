"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, type CSSProperties } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: CSSProperties;
}

export const WordsPullUp = ({
  text,
  className = "",
  showAsterisk = false,
  style,
}: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast ? (
              <span className="absolute -right-[0.28em] top-[0.64em] text-[0.31em]">*</span>
            ) : null}
          </motion.span>
        );
      })}
    </div>
  );
};

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: CSSProperties;
}

export const WordsPullUpMultiStyle = ({
  segments,
  className = "",
  style,
}: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

export function PrismaHero() {
  return (
    <section className="w-full bg-background p-2 sm:p-5 lg:p-7">
      <div className="relative min-h-[calc(100svh-120px)] w-full overflow-hidden rounded-2xl bg-[#050505] sm:min-h-[calc(100vh-2.5rem)] md:rounded-[2rem] lg:min-h-[calc(100vh-3.5rem)]">
        {/* Spotlight effect */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.45] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_30%,rgba(225,224,204,0.12),transparent_25%),linear-gradient(180deg,rgba(5,5,5,0.28),rgba(5,5,5,0.72)_58%,rgba(5,5,5,0.94))]" />

        {/* 3D Spline Scene - desktop only */}
        <div className="absolute right-0 top-0 hidden h-full w-[55%] lg:block">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* Mobile robot image — lightweight static version */}
        <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-8 sm:pt-12 lg:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[45vh] w-[80%] max-w-[320px] sm:h-[50vh] sm:max-w-[400px]"
          >
            {/* Glow behind robot */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(225,224,204,0.08)_0%,transparent_70%)] blur-2xl" />
            {/* Robot SVG silhouette */}
            <svg
              viewBox="0 0 200 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full drop-shadow-[0_0_40px_rgba(225,224,204,0.12)]"
            >
              {/* Head */}
              <ellipse cx="100" cy="55" rx="38" ry="42" fill="#1a1a1a" stroke="rgba(225,224,204,0.15)" strokeWidth="1" />
              <ellipse cx="100" cy="50" rx="30" ry="28" fill="#111" stroke="rgba(225,224,204,0.1)" strokeWidth="0.5" />
              {/* Eyes */}
              <ellipse cx="86" cy="48" rx="8" ry="5" fill="rgba(225,224,204,0.5)" />
              <ellipse cx="114" cy="48" rx="8" ry="5" fill="rgba(225,224,204,0.5)" />
              {/* Visor line */}
              <path d="M72 48 Q100 58 128 48" stroke="rgba(225,224,204,0.2)" strokeWidth="0.5" fill="none" />
              {/* Neck */}
              <rect x="92" y="95" width="16" height="14" rx="3" fill="#1a1a1a" stroke="rgba(225,224,204,0.1)" strokeWidth="0.5" />
              {/* Torso */}
              <path d="M60 110 Q60 105 70 105 L130 105 Q140 105 140 110 L145 190 Q145 200 135 200 L65 200 Q55 200 55 190 Z" fill="#1a1a1a" stroke="rgba(225,224,204,0.12)" strokeWidth="1" />
              {/* Chest plate */}
              <rect x="78" y="120" width="44" height="50" rx="8" fill="#111" stroke="rgba(225,224,204,0.08)" strokeWidth="0.5" />
              <circle cx="100" cy="145" r="12" fill="none" stroke="rgba(225,224,204,0.15)" strokeWidth="1" />
              <circle cx="100" cy="145" r="4" fill="rgba(225,224,204,0.3)" />
              {/* Left arm */}
              <path d="M60 115 L38 118 Q30 119 28 126 L22 170 Q20 178 26 180 L34 180 Q40 180 40 174 L48 135 L55 130" fill="#1a1a1a" stroke="rgba(225,224,204,0.1)" strokeWidth="1" />
              {/* Right arm */}
              <path d="M140 115 L162 118 Q170 119 172 126 L178 170 Q180 178 174 180 L166 180 Q160 180 160 174 L152 135 L145 130" fill="#1a1a1a" stroke="rgba(225,224,204,0.1)" strokeWidth="1" />
              {/* Left leg */}
              <path d="M70 198 L68 250 Q67 260 74 260 L86 260 Q92 260 92 254 L88 198" fill="#1a1a1a" stroke="rgba(225,224,204,0.1)" strokeWidth="1" />
              {/* Right leg */}
              <path d="M112 198 L114 250 Q115 260 122 260 L134 260 Q140 260 140 254 L136 198" fill="#1a1a1a" stroke="rgba(225,224,204,0.1)" strokeWidth="1" />
            </svg>
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[calc(100svh-120px)] flex-col justify-end px-5 pb-6 sm:min-h-[calc(100vh-2.5rem)] sm:px-8 sm:pb-8 md:px-10 md:pb-10 lg:min-h-[calc(100vh-3.5rem)] lg:w-[50%] lg:justify-end">
          {/* Service tags — hidden on mobile */}
          <div className="mb-4 hidden gap-8 font-mono text-xs uppercase tracking-[0.12em] text-primary/45 sm:flex sm:mb-6">
            <span>Websites</span>
            <span>WhatsApp Bots</span>
            <span>AI Agents</span>
            <span>2026</span>
          </div>

          {/* Mobile service tags — compact */}
          <div className="mb-3 flex flex-wrap gap-2 sm:hidden">
            {["Websites", "WhatsApp Bots", "AI Agents"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/15 bg-primary/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="font-black leading-[0.85] tracking-[-0.06em] text-[16vw] sm:text-[20vw] md:text-[18vw] lg:text-[10vw] xl:text-[9vw]"
            style={{ color: "#E1E0CC" }}
          >
            <WordsPullUp text="Abiskar AI" showAsterisk />
          </h1>

          <div className="mt-4 flex flex-col gap-4 sm:mt-6 lg:mt-8">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md text-sm leading-relaxed text-primary/65 sm:text-base md:text-lg md:leading-snug"
            >
              We build professional websites, WhatsApp automation, and AI agents that help
              businesses get found, respond faster, and turn inquiries into real workflows.
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group inline-flex items-center gap-2 self-start rounded-full bg-primary py-1.5 pl-5 pr-1.5 text-sm font-bold text-black transition-all hover:gap-3 sm:text-base"
            >
              Book a strategy call
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                <ArrowRight className="h-4 w-4 text-primary" />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

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

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Systems", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function PrismaHero() {
  return (
    <section className="min-h-screen w-full bg-background p-3 sm:p-5 lg:p-7">
      <div className="relative min-h-[calc(100vh-1.5rem)] w-full overflow-hidden rounded-2xl bg-[#050505] md:min-h-[calc(100vh-2.5rem)] md:rounded-[2rem] lg:min-h-[calc(100vh-3.5rem)]">
        {/* Spotlight effect */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.45] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_30%,rgba(225,224,204,0.12),transparent_25%),linear-gradient(180deg,rgba(5,5,5,0.28),rgba(5,5,5,0.72)_58%,rgba(5,5,5,0.94))]" />

        {/* 3D Spline Scene - desktop only (skipped on mobile for performance) */}
        <div className="absolute right-0 top-0 hidden h-full w-[55%] lg:block">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* Logo */}
        <div className="absolute left-6 top-6 z-20 flex items-center gap-3 text-primary sm:left-10 sm:top-9">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 font-mono text-xs font-bold">
            AI
          </div>
          <span className="text-xl font-bold tracking-[-0.04em] sm:text-2xl">AbiskarAI</span>
        </div>

        {/* Navigation */}
        <nav className="absolute left-1/2 top-0 z-20 hidden -translate-x-1/2 md:block">
          <div className="flex items-center gap-8 rounded-b-3xl bg-black px-8 py-4 lg:gap-14">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-primary/75 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Left content — all text stays on the left half, away from the 3D scene */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end px-5 pb-5 sm:px-8 md:px-10 lg:w-[50%]">
          <div className="mb-6 hidden gap-8 font-mono text-xs uppercase tracking-[0.12em] text-primary/45 sm:flex">
            <span>Websites</span>
            <span>WhatsApp Bots</span>
            <span>AI Agents</span>
            <span>2026</span>
          </div>

          <h1
            className="font-black leading-[0.82] tracking-[-0.075em] text-[27vw] sm:text-[23vw] md:text-[18vw] lg:text-[10vw] xl:text-[9vw]"
            style={{ color: "#E1E0CC" }}
          >
            <WordsPullUp text="Abiskar AI" showAsterisk />
          </h1>

          <div className="mt-6 flex flex-col gap-5 lg:mt-8">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md text-sm leading-snug text-primary/70 sm:text-base md:text-lg"
            >
              We build professional websites, WhatsApp automation, and AI agents that help
              businesses get found, respond faster, and turn inquiries into real workflows.
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group inline-flex items-center gap-2 self-start rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-bold text-black transition-all hover:gap-3 sm:text-base"
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

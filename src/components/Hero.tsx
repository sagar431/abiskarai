"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MouseSpotlight } from "./MouseSpotlight";
import { SpotlightCard } from "./SpotlightCard";

const heroStats = [
  { label: "Web", description: "Landing pages that convert visitors" },
  { label: "Automate", description: "Workflows that run while you sleep" },
  { label: "Agents", description: "AI that handles your repetitive work" },
];

const headingWords = ["Your", "digital", "presence,", "powered", "by", "AI."];

const container = {
  hidden: { opacity: 0 },
  visible: (_i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  }),
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100,
    },
  },
};

export function Hero() {
  return (
    <section className="relative py-16 sm:py-28 lg:py-36 overflow-hidden">
      <MouseSpotlight />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass-shell relative w-full max-w-full overflow-hidden px-6 py-10 sm:px-12 sm:py-16">
          {/* Simplified glows for mobile */}
          <div
            className="glass-glow glass-glow--primary animate-float-slow hidden sm:block"
            style={{ top: "-22%", left: "-12%", width: "24rem", height: "24rem" }}
            aria-hidden="true"
          />
          <div
            className="glass-glow glass-glow--accent animate-float-slow hidden sm:block"
            style={{
              bottom: "-25%",
              right: "-18%",
              width: "28rem",
              height: "28rem",
              animationDelay: "6s",
            }}
            aria-hidden="true"
          />

          <div className="relative space-y-8 sm:space-y-12 lg:space-y-14">
            <div className="flex flex-col gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="glass-pill w-fit text-[11px] sm:text-xs font-medium text-primary-100/90 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
                  </span>
                  AVAILABLE FOR NEW PROJECTS
                </div>

                <motion.h1
                  className="section-heading max-w-4xl text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {headingWords.map((word, index) => (
                    <motion.span
                      key={index}
                      variants={child}
                      className={index >= 4 ? "text-primary-400" : ""}
                      style={{ display: "inline-block", marginRight: "0.25em" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
              </motion.div>

              <motion.p
                className="max-w-2xl text-lg leading-relaxed text-muted sm:text-lg lg:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                We build conversion-focused websites, deploy automation bots that respond 24/7, and create AI agents that handle your busiest workflows. From first impression to full automation — we handle it all.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-3 pt-4 sm:gap-4 lg:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Link
                  href="#products"
                  className="glass-button inline-flex items-center justify-center text-sm sm:text-sm font-semibold px-5 py-3 sm:px-6 sm:py-3.5"
                >
                  View Work
                </Link>
                <Link
                  href="#contact"
                  className="glass-outline inline-flex text-sm sm:text-sm font-semibold px-5 py-3 sm:px-6 sm:py-3.5"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>

            <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="h-full"
                >
                  <SpotlightCard className="h-full rounded-[20px] p-5 sm:rounded-[24px] sm:p-6">
                    <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.label}</div>
                    <div className="mt-2 text-xs sm:text-sm text-muted">{stat.description}</div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



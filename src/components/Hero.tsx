"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const heroStats = [
  { label: "Fast", description: "Prototypes in weeks, not months" },
  { label: "Reliable", description: "Production-grade AI systems" },
  { label: "Clear", description: "No jargon, just results" },
];

export function Hero() {
  return (
    <section className="relative py-28 sm:py-36">
      <div
        className="absolute inset-x-0 top-[-160px] -z-10 flex justify-center"
        aria-hidden="true"
      >
        <div className="glass-ring h-[420px] w-[420px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass-shell relative w-full max-w-full overflow-hidden px-6 py-10 sm:px-12 sm:py-16">
          <div className="glass-mesh" aria-hidden="true" />
          <div
            className="glass-glow glass-glow--primary animate-float-slow"
            style={{ top: "-22%", left: "-12%", width: "24rem", height: "24rem" }}
            aria-hidden="true"
          />
          <div
            className="glass-glow glass-glow--accent animate-float-slow"
            style={{
              bottom: "-25%",
              right: "-18%",
              width: "28rem",
              height: "28rem",
              animationDelay: "6s",
            }}
            aria-hidden="true"
          />
          <div
            className="glass-glow glass-glow--muted"
            style={{
              top: "45%",
              left: "50%",
              width: "18rem",
              height: "18rem",
              transform: "translate(-50%, -50%)",
              opacity: 0.6,
            }}
            aria-hidden="true"
          />
          <div className="glass-noise" style={{ opacity: 0.12 }} aria-hidden="true" />

          <div className="relative space-y-12 sm:space-y-14">
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="glass-pill w-fit text-xs font-medium text-primary-100/90">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
                </span>
                Available for new projects
              </div>

              <h1 className="section-heading max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-transparent sm:text-6xl lg:text-7xl bg-gradient-to-r from-white via-white/80 to-primary-200/80 bg-clip-text">
                Build AI agents that ship.
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                We help businesses automate repetitive tasks, respond faster to customers, and save hours every day using AI. Real products. Real execution. Zero fluff.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 sm:gap-6">
                <Link
                  href="#projects"
                  className="glass-button inline-flex items-center justify-center text-sm font-semibold"
                >
                  View Work
                </Link>
                <Link
                  href="#contact"
                  className="glass-outline inline-flex text-sm font-semibold"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card rounded-[24px] p-6"
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <div className="text-3xl font-bold text-gradient">{stat.label}</div>
                  <div className="mt-2 text-sm text-muted">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



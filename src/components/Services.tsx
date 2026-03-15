"use client";

import { motion } from "framer-motion";
import { agency } from "@/data/agency";

const servicesMeta = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden="true">
        <rect x="2" y="6" width="36" height="26" rx="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 13h36" stroke="currentColor" strokeWidth="2"/>
        <circle cx="8" cy="9.5" r="1.5" fill="currentColor"/>
        <circle cx="14" cy="9.5" r="1.5" fill="currentColor"/>
        <path d="M10 22l4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    outcomes: ["Live in weeks, not months", "Mobile-first & fast", "Optimised to convert"],
    accent: "from-blue-500/20 to-transparent",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden="true">
        <path d="M20 4C11.163 4 4 10.268 4 18c0 3.85 1.7 7.35 4.5 9.95L7 36l8.4-2.8C17.2 33.7 18.57 34 20 34c8.837 0 16-6.268 16-14S28.837 4 20 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 18h12M14 23h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    outcomes: ["Replies in under 2 seconds", "Handles FAQs & bookings", "Works 24 / 7 automatically"],
    accent: "from-green-500/20 to-transparent",
    glow: "group-hover:shadow-green-500/10",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10" aria-hidden="true">
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="8" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="32" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="8" cy="30" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="32" cy="30" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M11 12l6 6M29 12l-6 6M11 28l6-6M29 28l-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    outcomes: ["Processes docs automatically", "Triggers actions across tools", "Learns your workflows"],
    accent: "from-primary-500/20 to-transparent",
    glow: "group-hover:shadow-primary-500/10",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section header */}
        <div className="mb-16 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-500">
              What We Do
            </p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              Three services.<br />
              <span className="text-gradient">Infinite impact.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted sm:text-right">
            Everything your business needs to show up, automate, and grow — under one roof.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {agency.services.map((service, index) => {
            const meta = servicesMeta[index];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-[28px] border border-white/5 bg-white/[0.03] p-8 shadow-xl transition-shadow duration-500 ${meta.glow}`}
              >
                {/* Background gradient blob */}
                <div
                  className={`pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br ${meta.accent} blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100`}
                />

                {/* Large watermark number */}
                <div className="pointer-events-none absolute -bottom-4 -right-2 select-none text-[7rem] font-black leading-none text-white/[0.03]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="relative mb-6 text-white/40 transition-colors duration-300 group-hover:text-primary-500">
                  {meta.icon}
                </div>

                {/* Title */}
                <h3 className="relative mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary-400">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative mb-6 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                {/* Outcome pills */}
                <ul className="relative space-y-2">
                  {meta.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center gap-2 text-xs text-white/50">
                      <span className="h-1 w-1 flex-shrink-0 rounded-full bg-primary-500" />
                      {outcome}
                    </li>
                  ))}
                </ul>

                {/* Bottom animated line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary-500 to-primary-400 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

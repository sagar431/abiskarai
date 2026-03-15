"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const options = [
  {
    id: "web",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <rect x="2" y="5" width="28" height="22" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M2 11h28" stroke="currentColor" strokeWidth="2" />
        <circle cx="7" cy="8" r="1.5" fill="currentColor" />
        <circle cx="12" cy="8" r="1.5" fill="currentColor" />
        <path d="M10 19l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "A Website",
    sub: "Landing page or full site",
    color: "blue",
    headline: "A site that converts visitors into clients.",
    body: "We design and build fast, mobile-first websites that look premium and are optimised to turn visitors into leads — live in under 2 weeks.",
    bullets: ["Next.js + Tailwind — Lighthouse 100", "SEO-ready from day one", "Live in 1–2 weeks"],
    cta: "Get your website →",
  },
  {
    id: "bot",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <path d="M16 3C9.925 3 5 7.477 5 13c0 2.97 1.376 5.644 3.6 7.55L7 29l8.4-2.8c.192.033.391.05.6.05 6.075 0 11-4.477 11-10S22.075 3 16 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M11 14h10M11 18h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    label: "A Bot",
    sub: "WhatsApp or chat automation",
    color: "green",
    headline: "Automated replies that never sleep.",
    body: "A conversational bot that handles your inbound messages — answering FAQs, qualifying leads, booking appointments — 24 hours a day without any manual effort.",
    bullets: ["80%+ conversations handled automatically", "Responds in under 2 seconds", "Integrates with your CRM"],
    cta: "Get your bot →",
  },
  {
    id: "agent",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="6" cy="8" r="2.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="26" cy="8" r="2.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="6" cy="24" r="2.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="26" cy="24" r="2.5" stroke="currentColor" strokeWidth="2" />
        <path d="M9 10l5 4M23 10l-5 4M9 22l5-4M23 22l-5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "An AI Agent",
    sub: "Custom workflow automation",
    color: "orange",
    headline: "An AI that handles your repetitive work.",
    body: "A custom AI agent that processes documents, extracts data, triggers actions, and automates the internal tasks that eat your team's time every single day.",
    bullets: ["200+ tasks processed daily", "96% accuracy on extraction", "Connects to your existing tools"],
    cta: "Get your agent →",
  },
];

const colourMap: Record<string, string> = {
  blue: "border-blue-500/50 bg-blue-500/10 text-blue-400",
  green: "border-green-500/50 bg-green-500/10 text-green-400",
  orange: "border-primary-500/50 bg-primary-500/10 text-primary-400",
};

const activeMap: Record<string, string> = {
  blue: "ring-blue-500/60 border-blue-500/40",
  green: "ring-green-500/60 border-green-500/40",
  orange: "ring-primary-500/60 border-primary-500/40",
};

export function ServiceSelector() {
  const [selected, setSelected] = useState<string | null>(null);
  const current = options.find((o) => o.id === selected);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-500">
            Find your fit
          </p>
          <h2 className="text-4xl font-bold text-white">What do you need?</h2>
          <p className="mt-3 text-muted">Pick what sounds most like your situation.</p>
        </div>

        {/* Selector cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelected(selected === opt.id ? null : opt.id)}
              className={`group relative rounded-[24px] border p-6 text-left transition-all duration-300 ${
                selected === opt.id
                  ? `${activeMap[opt.color]} ring-2 bg-white/[0.05]`
                  : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.15] hover:bg-white/[0.05]"
              }`}
            >
              <div className={`mb-4 inline-flex rounded-xl border p-2.5 ${colourMap[opt.color]}`}>
                {opt.icon}
              </div>
              <div className="text-lg font-bold text-white">{opt.label}</div>
              <div className="mt-1 text-sm text-white/40">{opt.sub}</div>

              {selected === opt.id && (
                <motion.div
                  layoutId="selector-check"
                  className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-white"
                  initial={false}
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l4 4 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              )}
            </button>
          ))}
        </div>

        {/* Reveal panel */}
        <AnimatePresence mode="wait">
          {current && (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-7 sm:p-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{current.headline}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">{current.body}</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/30">What you get</p>
                    {current.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2.5">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                        <span className="text-sm text-white/70">{b}</span>
                      </div>
                    ))}
                    <div className="pt-2">
                      <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(255,106,0,0.4)] transition hover:bg-primary-400"
                      >
                        {current.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

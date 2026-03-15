"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "AbiskarAI built our landing page in under 2 weeks and our lead conversion rate tripled in the first month. The attention to speed and design was unlike any agency we've worked with.",
    name: "James Okafor",
    role: "Founder",
    company: "Stackbloom",
    initials: "JO",
    color: "from-blue-500 to-blue-700",
  },
  {
    quote: "The WhatsApp bot they built handles 80% of our inbound queries automatically. Our team now spends time on actual clients instead of answering the same 10 questions all day.",
    name: "Priya Sharma",
    role: "Operations Lead",
    company: "FinRoute",
    initials: "PS",
    color: "from-green-500 to-green-700",
  },
  {
    quote: "We were drowning in document processing. Their AI agent now handles 200+ docs a day with 96% accuracy. We saved 8 hours of manual work immediately from day one.",
    name: "Marcus Webb",
    role: "CTO",
    company: "DocSynth",
    initials: "MW",
    color: "from-primary-500 to-orange-700",
  },
  {
    quote: "From our first call to a live deployed app — 11 days. I've never seen a technical team move that fast without cutting corners. The code quality is genuinely solid.",
    name: "Aisha Nkrumah",
    role: "Product Manager",
    company: "Relaybase",
    initials: "AN",
    color: "from-purple-500 to-purple-700",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[active];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-500">Testimonials</p>
          <h2 className="text-4xl font-bold text-white">What clients say</h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Quote card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[28px] border border-white/[0.08] bg-white/[0.03] p-8 sm:p-10"
            >
              {/* Quote mark */}
              <div className="mb-6 text-5xl font-black leading-none text-primary-500/30">&ldquo;</div>

              <p className="text-lg leading-relaxed text-white/80 sm:text-xl">{t.quote}</p>

              <div className="mt-8 flex items-center gap-4">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white shadow-lg`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/40">{t.role} · {t.company}</div>
                </div>

                {/* 5 stars */}
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg key={idx} className="h-4 w-4 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? "h-2 w-8 bg-primary-500" : "h-2 w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most landing pages and business websites go live in 1–2 weeks. More complex multi-page sites take 3–4 weeks. We move fast because we use AI-assisted development alongside our own tools.",
  },
  {
    q: "What do you need from us to get started?",
    a: "Just a 30-minute discovery call is enough to start. We'll ask about your business, goals, and audience. No lengthy briefs or technical specs needed — we handle the details.",
  },
  {
    q: "Do you need access to our systems or data?",
    a: "Only if the project requires it (e.g. a bot that integrates with your CRM). For websites we work independently and hand over all assets and credentials at launch.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on the scope. Landing pages typically start from $500–$1,500. WhatsApp bots from $800–$2,000. Custom AI agents from $1,500 upwards. Book a call and we'll give you a clear quote within 24 hours.",
  },
  {
    q: "Can you maintain and update the site after launch?",
    a: "Yes. We offer ongoing retainer plans for updates, performance monitoring, and new features. Most clients keep us on for at least 3 months after launch.",
  },
  {
    q: "What makes you different from a regular web agency?",
    a: "We build with AI from the ground up — not as a gimmick, but as core infrastructure. This means faster delivery, smarter interactions, and automation baked in by default rather than bolted on later.",
  },
  {
    q: "Do the WhatsApp bots require special business approval?",
    a: "Yes — WhatsApp Business API requires an approved business account. We handle the entire application and onboarding process as part of the project.",
  },
  {
    q: "Can the AI agent integrate with tools we already use?",
    a: "Absolutely. We integrate with most common tools — Google Sheets, Notion, Airtable, Slack, HubSpot, and many others via REST APIs or webhooks.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-500">FAQ</p>
          <h2 className="text-4xl font-bold text-white">Questions we get asked</h2>
          <p className="mt-3 text-muted">Everything you need to know before reaching out.</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] transition-colors hover:border-white/[0.12]"
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-sm font-semibold text-white sm:text-base">{faq.q}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-xl text-primary-500"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px w-full bg-white/[0.06] mb-4" />
                      <p className="text-sm leading-relaxed text-white/55">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

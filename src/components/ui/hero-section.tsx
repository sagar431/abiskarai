'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-20 pt-16 dark:bg-[#0a0a0a] md:pb-32 md:pt-24">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial fade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Announcement pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-slate-600">
            <span className="text-sm text-slate-600 dark:text-slate-300">We build AI-powered business systems</span>
            <span className="flex items-center gap-1 text-sm font-medium text-slate-900 dark:text-white">
              Learn more
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-4xl text-center text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-7xl"
        >
          Websites, WhatsApp Bots & AI Agents for your business
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg"
        >
          We build professional websites, WhatsApp automation, and AI agents that help
          businesses get found, respond faster, and turn inquiries into real workflows.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-black hover:shadow-xl dark:bg-white dark:text-black dark:shadow-white/10 dark:hover:bg-slate-100"
          >
            Book a Strategy Call
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            View Services
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 dark:text-slate-500 sm:gap-10"
        >
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            2 week launch timeline
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            24/7 automated replies
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            AI workflow agents
          </span>
        </motion.div>
      </div>
    </section>
  );
}

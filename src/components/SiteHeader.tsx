"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#projects", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-[100] border-b border-slate-100 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-[#0a0a0a]/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="group relative z-[101] flex items-center gap-2.5 text-slate-900 dark:text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-900 font-mono text-[10px] font-bold text-white dark:border-slate-700 dark:bg-white dark:text-black">
            AI
          </div>
          <span className="text-lg font-bold tracking-[-0.04em]">AbiskarAI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-100 bg-white/80 px-2 py-1.5 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 md:inline-flex">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.label}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-slate-50 dark:bg-slate-800"
                  layoutId="navbar-indicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Theme Toggle */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-black dark:bg-white dark:text-black dark:hover:bg-slate-200"
          >
            Hire Us
          </Link>
        </div>

        {/* Mobile: Theme Toggle + Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="relative z-[101] flex h-10 w-10 flex-col items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-7 w-7 text-slate-900 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="h-0.5 w-6 bg-slate-900 dark:bg-white" />
                <span className="h-0.5 w-4 bg-slate-400 dark:bg-slate-500" />
                <span className="h-0.5 w-6 bg-slate-900 dark:bg-white" />
              </div>
            )}
          </button>
        </div>

        {/* Mobile Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[99] bg-white dark:bg-[#0a0a0a] md:hidden"
            >
              <div className="flex h-full flex-col items-center justify-center">
                <nav className="flex flex-col items-center gap-10 text-center">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="text-3xl font-bold text-slate-900 transition hover:text-slate-500 dark:text-white dark:hover:text-slate-400"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-16 py-4 text-lg font-bold text-white transition hover:bg-black dark:bg-white dark:text-black dark:hover:bg-slate-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Hire Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

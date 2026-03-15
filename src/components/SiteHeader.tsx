"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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

  // Lock body scroll when mobile menu is open
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
    <header className="glass-header sticky top-0 z-[100]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="group relative z-[101] text-lg font-bold text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-primary-500 transition group-hover:text-primary-400">
              Abis
            </span>
            karAI
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <nav className="glass-nav hidden items-center gap-2 md:inline-flex">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="glass-nav-item relative text-sm font-medium"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.label}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500"
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

        {/* Desktop CTA */}
        <motion.div 
          className="hidden md:block"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="#contact"
            className="glass-button rounded-md px-4 py-2 text-sm font-semibold text-white"
          >
            Hire Us
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          className="relative z-[101] flex h-10 w-10 flex-col items-center justify-center md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="h-8 w-8 text-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-6 bg-foreground" />
              <span className="h-0.5 w-6 bg-foreground" />
              <span className="h-0.5 w-6 bg-foreground" />
            </div>
          )}
        </button>

        {/* Mobile Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[99] bg-[#0a0a0f] md:hidden"
            >
              <div className="flex h-full flex-col items-center justify-center">
                <nav className="flex flex-col items-center gap-12 text-center">
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
                        className="text-4xl font-bold text-white transition hover:text-primary-500"
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
                    className="inline-flex items-center justify-center rounded-full bg-primary-500 px-20 py-4 text-lg font-bold text-white shadow-[0_0_30px_rgba(255,106,0,0.4)] transition hover:bg-primary-600 hover:shadow-[0_0_40px_rgba(255,106,0,0.6)]"
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

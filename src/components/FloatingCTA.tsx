"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-24 right-6 z-[150] md:bottom-8 md:right-8"
        >
          <Link
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-primary-500 px-5 py-3 text-sm font-bold text-white shadow-[0_0_24px_rgba(255,106,0,0.5)] transition hover:bg-primary-400 hover:shadow-[0_0_32px_rgba(255,106,0,0.7)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Book a free call
            <span className="transition group-hover:translate-x-0.5">→</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

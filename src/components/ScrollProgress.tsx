"use client";

import { useScroll, motion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[300] h-[2px] origin-left bg-gradient-to-r from-slate-400 to-slate-900 dark:from-slate-600 dark:to-white"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

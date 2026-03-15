"use client";

import { useScroll, motion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[300] h-[2px] origin-left bg-gradient-to-r from-primary-500 to-primary-300"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

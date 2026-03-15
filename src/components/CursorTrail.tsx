"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorTrail() {
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 22, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 22, mass: 0.4 });

  useEffect(() => {
    // Only on pointer devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-500/30"
        style={{ left: springX, top: springY }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(255,106,0,0.8)]"
        style={{ left: mouseX, top: mouseY }}
      />
    </>
  );
}

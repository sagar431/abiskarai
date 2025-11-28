"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.65,
      easing: (t) => 1 - Math.pow(1 - t, 3.2),
      lerp: 0.08,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Use a more efficient RAF loop
    let rafId: number;
    let lastTime = 0;

    function raf(time: number) {
      // Throttle to ~120fps max for efficiency
      if (time - lastTime > 8) {
        lenis.raf(time);
        lastTime = time;
      }
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const handleScrollState = () => {
      document.body.classList.add("is-scrolling");
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        document.body.classList.remove("is-scrolling");
      }, 160);
    };

    // Add/remove is-scrolling class for performance tweaks
    lenis.on("scroll", handleScrollState);

    // Handle anchor links smoothly
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            lenis.scrollTo(element as HTMLElement, { offset: -80 });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      document.body.classList.remove("is-scrolling");
      lenis.off("scroll", handleScrollState);
      lenis.destroy();
    };
  }, []);

  return null;
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CoverflowCarouselProps {
  items: React.ReactNode[];
  activeIndex: number;
  onActiveChange: (index: number) => void;
  cardWidth?: number;
  containerHeight?: number;
}

export function CoverflowCarousel({
  items,
  activeIndex,
  onActiveChange,
  cardWidth = 480,
  containerHeight = 460,
}: CoverflowCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardW, setCardW] = useState(cardWidth);
  const pointerStart = useRef(0);

  // Responsive card width
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setCardW(Math.min(cardWidth, w - 32));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [cardWidth]);

  const goTo = (i: number) =>
    onActiveChange(Math.max(0, Math.min(items.length - 1, i)));

  const getCardProps = (offset: number) => {
    const abs = Math.abs(offset);
    if (abs > 2) return null;

    const SPREAD = cardW * 0.54;
    const ROTATION = 46;

    return {
      x: offset * SPREAD,
      rotateY: offset * -ROTATION,
      scale: 1 - abs * 0.16,
      opacity: abs === 0 ? 1 : abs === 1 ? 0.72 : 0.32,
      zIndex: 20 - abs * 6,
      brightness: abs === 0 ? 1 : abs === 1 ? 0.6 : 0.3,
    };
  };

  return (
    <div className="select-none" ref={containerRef}>
      {/* 3D Stage */}
      <div
        className="relative mx-auto"
        style={{ perspective: "1400px", height: containerHeight, overflow: "visible" }}
        onPointerDown={(e) => { pointerStart.current = e.clientX; }}
        onPointerUp={(e) => {
          const delta = pointerStart.current - e.clientX;
          if (delta > 60) goTo(activeIndex + 1);
          else if (delta < -60) goTo(activeIndex - 1);
        }}
      >
        {items.map((item, i) => {
          const offset = i - activeIndex;
          const props = getCardProps(offset);
          if (!props) return null;

          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-0"
              style={{
                width: cardW,
                marginLeft: -cardW / 2,
                zIndex: props.zIndex,
                cursor: offset !== 0 ? "pointer" : "default",
                transformStyle: "preserve-3d",
              }}
              animate={{
                x: props.x,
                rotateY: props.rotateY,
                scale: props.scale,
                opacity: props.opacity,
                filter: `brightness(${props.brightness})`,
              }}
              transition={{ type: "spring", stiffness: 270, damping: 28, mass: 0.85 }}
              onClick={() => { if (offset !== 0) goTo(i); }}
            >
              {item}
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition hover:border-primary-500/60 hover:text-primary-400 disabled:opacity-20"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "h-2 w-8 bg-primary-500 shadow-[0_0_8px_rgba(255,106,0,0.6)]"
                  : "h-2 w-2 bg-white/15 hover:bg-white/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === items.length - 1}
          aria-label="Next"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition hover:border-primary-500/60 hover:text-primary-400 disabled:opacity-20"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

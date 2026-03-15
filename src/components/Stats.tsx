"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 200, suffix: "+", label: "Documents processed daily", description: "Via our AI agent pipeline" },
  { value: 80, suffix: "%", label: "Conversations automated", description: "Without human intervention" },
  { value: 2, suffix: " wks", label: "Average delivery time", description: "From brief to live" },
  { value: 24, suffix: "/7", label: "Bot uptime", description: "Always on, always replying" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-primary-500/10 to-primary-500/5" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="text-gradient">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <div className="mt-2 text-sm font-semibold text-white/80">{stat.label}</div>
              <div className="mt-1 text-xs text-white/40">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

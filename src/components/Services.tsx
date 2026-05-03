"use client";

import { agency } from "@/data/agency";

const labels = ["Website", "Bot", "Agents"];

function GlowingServiceCard({
  service,
  index,
  isFeature,
}: {
  service: { title: string; description: string };
  index: number;
  isFeature: boolean;
}) {
  return (
    <div className={`glow-outer${isFeature ? " glow-featured" : ""}`}>
      <div className="glow-dot" />
      <div
        className={`glow-card flex min-h-[390px] flex-col justify-between p-8 ${
          isFeature
            ? "bg-primary text-black"
            : "bg-[#11100d] text-primary"
        }`}
      >
        <div className="glow-ray" />
        <p
          className={`relative z-10 font-mono text-xs uppercase tracking-[0.12em] ${
            isFeature ? "text-black/55" : "text-primary/45"
          }`}
        >
          {String(index + 1).padStart(2, "0")} / {labels[index]}
        </p>
        <div className="relative z-10">
          <h3 className="text-4xl font-black leading-none tracking-[-0.055em]">
            {service.title}
          </h3>
          <p
            className={`mt-6 text-base leading-relaxed ${
              isFeature ? "text-black/65" : "text-primary/60"
            }`}
          >
            {service.description}
          </p>
        </div>
        <div className="glow-line topl" />
        <div className="glow-line leftl" />
        <div className="glow-line bottoml" />
        <div className="glow-line rightl" />
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="px-3 py-20 sm:px-5 lg:px-7">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-primary/45">
            Services / Systems
          </p>
          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.07em] text-primary sm:text-7xl lg:text-8xl">
            Three pieces, designed as one business presence.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {agency.services.map((service, index) => (
            <GlowingServiceCard
              key={service.title}
              service={service}
              index={index}
              isFeature={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

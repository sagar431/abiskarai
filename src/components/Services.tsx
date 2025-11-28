import { agency } from "@/data/agency";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Three Core Services"
          description="End-to-end AI engineering from strategy to production deployment."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {agency.services.map((service, index) => (
            <article
              key={service.title}
              className="glass-card group space-y-5 rounded-[24px] p-8 transition-transform duration-500 hover:-translate-y-1"
            >
              {/* Number */}
              <div className="text-sm font-mono text-primary-500">
                [{String(index + 1).padStart(2, '0')}]
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary-500 transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted">
                {service.description}
              </p>

              {/* Divider */}
              <div className="h-px w-12 bg-gradient-to-r from-primary-500 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



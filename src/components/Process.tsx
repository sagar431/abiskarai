import { agency } from "@/data/agency";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="How We Work"
          title="Our Process"
          description="A clear, iterative approach from discovery to deployment."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {agency.process.map((phase) => (
            <article
              key={phase.step}
              className="glass-card group space-y-5 rounded-[24px] border-l-[3px] border-primary-500/35 p-8 transition-transform duration-500 hover:-translate-y-1 hover:border-primary-500/70"
            >
              <span className="text-sm font-mono text-primary-500">
                {phase.step}
              </span>
              <h3 className="text-xl font-bold text-foreground">
                {phase.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{phase.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



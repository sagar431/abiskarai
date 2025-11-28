import { SectionHeading } from "./SectionHeading";

export function Demo() {
  return (
    <section id="demo" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Live Demo"
          title="Autonomous Research AI Agent"
          description="Watch our AI agent in action - intelligent research, reasoning, and autonomous task execution."
        />

        <div className="mt-12">
          <div className="glass-card relative mx-auto max-w-5xl overflow-hidden rounded-2xl p-2 sm:p-4 shadow-2xl">
            <div className="relative overflow-hidden rounded-xl pb-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/RZYxHs6w0Qg"
                title="Autonomous Research AI Agent Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-sm text-muted">
              See how our autonomous AI agent conducts research, analyzes data, and delivers actionable insights with minimal human intervention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

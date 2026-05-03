import { agency } from "@/data/agency";

export function Process() {
  return (
    <section id="process" className="px-3 py-20 sm:px-5 lg:px-7">
      <div className="mx-auto grid max-w-7xl gap-12 text-primary lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-primary/45">
            Process
          </p>
          <h2 className="max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.07em] sm:text-7xl">
            From idea to live system.
          </h2>
        </div>

        <div className="border-t border-primary/15 lg:col-span-7">
          {agency.process.map((phase) => (
            <article
              key={phase.step}
              className="grid gap-5 border-b border-primary/15 py-8 sm:grid-cols-[3rem_1fr]"
            >
              <span className="font-mono text-sm text-primary/40">{phase.step}</span>
              <div>
                <h3 className="text-3xl font-black leading-none tracking-[-0.055em]">
                  {phase.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary/55">
                  {phase.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

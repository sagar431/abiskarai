const stats = [
  { value: "2 wks", label: "typical launch timeline" },
  { value: "24/7", label: "automated customer replies" },
  { value: "AI", label: "workflow agents behind the scenes" },
];

export function Stats() {
  return (
    <section className="px-3 py-10 sm:px-5 lg:px-7">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 border-y border-primary/15 py-12 text-primary lg:flex-row lg:items-center lg:justify-between">
        <h2 className="max-w-sm text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-5xl">
          A complete online front office.
        </h2>
        <div className="grid gap-8 sm:grid-cols-3 lg:min-w-[620px]">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl font-black tracking-[-0.06em] sm:text-6xl">{stat.value}</div>
              <p className="mt-2 max-w-36 text-sm leading-tight text-primary/45">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

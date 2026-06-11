type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="flex max-w-3xl flex-col gap-4">
      {eyebrow ? (
        <span className="text-xs font-mono uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="section-heading text-4xl font-black leading-[0.95] tracking-[-0.06em] text-slate-900 dark:text-white sm:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}

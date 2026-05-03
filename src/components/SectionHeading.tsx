type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="flex max-w-3xl flex-col gap-4">
      {eyebrow ? (
        <span className="text-xs font-mono uppercase tracking-[0.14em] text-primary/45">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="section-heading text-4xl font-black leading-[0.95] tracking-[-0.06em] text-primary sm:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-primary/55">{description}</p>
      ) : null}
    </div>
  );
}










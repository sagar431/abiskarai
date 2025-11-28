type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="flex max-w-3xl flex-col gap-4">
      {eyebrow ? (
        <span className="text-xs font-mono uppercase tracking-wider text-primary-500">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="section-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}











type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: string;
};

export default function SectionHeading({ title, eyebrow, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-strong)]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-[-0.035em] text-[var(--color-ink)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-7 text-[var(--color-muted)] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

type SectionHeadingProps = {
  number: string;
  title: string;
};

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="flex items-baseline gap-2.5">
      <span className="font-mono text-xs text-amber-500">{number}</span>
      <h3 className="font-display text-xl font-bold uppercase tracking-wider text-stone-950">
        {title}
      </h3>
      <div className="h-px flex-1 bg-stone-300" />
    </div>
  );
}

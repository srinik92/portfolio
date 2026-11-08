export default function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="text-accent font-mono text-base">{number}.</span>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground whitespace-nowrap">
        {title}
      </h2>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  );
}

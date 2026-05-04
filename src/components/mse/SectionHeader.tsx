interface Props {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-6 border-b-2 border-accent/40 pb-3">
      <h2 className="font-serif-display text-2xl font-semibold text-foreground md:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 font-serif-body text-sm text-foreground/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}

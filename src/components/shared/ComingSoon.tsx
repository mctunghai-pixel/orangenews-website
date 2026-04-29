import Link from "next/link";

interface ComingSoonProps {
  title: string;
  description: string;
  badge?: string;
}

export function ComingSoon({
  title,
  description,
  badge = "Тун удахгүй",
}: ComingSoonProps) {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 md:py-20">
      <Link
        href="/"
        className="mb-12 inline-flex items-center gap-1 font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
      >
        ← Нүүр хуудас руу буцах
      </Link>

      <div className="text-center">
        <span className="inline-block border border-accent/40 px-3 py-1 font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-accent">
          {badge}
        </span>

        <h1 className="mt-6 font-serif-display text-[28px] md:text-[40px] font-bold leading-tight">
          {title}
        </h1>

        <p className="mt-6 font-serif-body text-[16px] md:text-[17px] leading-[1.8] text-muted">
          {description}
        </p>

        <a
          href="mailto:info@orangenews.mn"
          className="mt-8 inline-block font-sans text-[14px] text-accent hover:underline"
        >
          info@orangenews.mn
        </a>
      </div>
    </main>
  );
}

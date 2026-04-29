import Link from "next/link";
import type { Article } from "@/lib/types";

interface ArticleNavigationProps {
  prev: Article | null;
  next: Article | null;
}

export function ArticleNavigation({ prev, next }: ArticleNavigationProps) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Нийтлэлийн навигаци"
      className="mt-16 grid gap-6 border-t border-foreground/10 pt-8 md:grid-cols-2"
    >
      {prev ? (
        <Link
          href={`/articles/${prev.slug}`}
          className="group block"
        >
          <div className="font-sans text-[10px] md:text-[11px] uppercase tracking-wider text-muted">
            ← Өмнөх нийтлэл
          </div>
          <div className="mt-2 font-serif-display text-[16px] md:text-[18px] font-bold leading-tight text-foreground transition-colors group-hover:text-accent">
            {prev.headline}
          </div>
        </Link>
      ) : (
        <div aria-hidden />
      )}

      {next ? (
        <Link
          href={`/articles/${next.slug}`}
          className="group block md:text-right"
        >
          <div className="font-sans text-[10px] md:text-[11px] uppercase tracking-wider text-muted">
            Дараагийн нийтлэл →
          </div>
          <div className="mt-2 font-serif-display text-[16px] md:text-[18px] font-bold leading-tight text-foreground transition-colors group-hover:text-accent">
            {next.headline}
          </div>
        </Link>
      ) : (
        <div aria-hidden />
      )}
    </nav>
  );
}

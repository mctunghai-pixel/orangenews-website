import Link from "next/link";
import type { Article } from "@/lib/types";

interface BreakingStripProps {
  article: Article | null;
}

export function BreakingStrip({ article }: BreakingStripProps) {
  if (!article) return null;

  return (
    <aside
      aria-label="Чухал мэдээ"
      className="border-y border-breaking-border bg-breaking"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-2 md:px-6 md:py-2.5">
        <Link
          href={`/articles/${article.slug}`}
          className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity"
        >
          <span className="whitespace-nowrap font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-accent">
            Чухал
          </span>
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent animate-pulse-dot"
            aria-hidden
          />
          <p className="min-w-0 truncate font-serif-body text-[12px] md:text-[13px] leading-snug text-foreground">
            <span className="font-semibold">{article.headline}</span>
            <span className="hidden text-muted md:inline"> — {article.excerpt}</span>
          </p>
        </Link>
      </div>
    </aside>
  );
}

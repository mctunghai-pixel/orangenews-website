import Link from "next/link";
import type { Article } from "@/lib/types";

interface SecondaryArticlesProps {
  articles: Article[];
}

export function SecondaryArticles({ articles }: SecondaryArticlesProps) {
  return (
    <section
      aria-labelledby="secondary-heading"
      className="border-t border-foreground pt-4"
    >
      <div className="mb-4 flex items-center gap-3">
        <h2
          id="secondary-heading"
          className="font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-wider text-foreground"
        >
          Санхүүгийн эхний хуудас
        </h2>
        <span className="inline-flex items-center gap-1 bg-auto-bg px-1.5 py-0.5 font-sans text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-up">
          <span className="inline-block h-1 w-1 rounded-full bg-up animate-pulse-dot" aria-hidden />
          Авто
        </span>
      </div>

      <ol className="divide-y divide-border border-b border-border">
        {articles.map((article, idx) => (
          <li key={article.id}>
            <Link
              href={`/articles/${article.slug}`}
              className="group -mx-2 flex items-start gap-3 px-2 py-4 transition-colors hover:bg-breaking"
            >
              <span className="w-5 shrink-0 pt-1 font-mono text-[11px] md:text-[12px] text-muted tabular-nums">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-accent">
                  {article.category}
                </span>
                <h3 className="mt-1 font-serif-display text-[16px] md:text-[17px] font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
                  {article.headline}
                </h3>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="font-mono text-[10px] md:text-[11px] text-muted tabular-nums">
                    {article.timeAgo}
                  </span>
                  <span className="text-muted">·</span>
                  <span className="font-mono text-[10px] md:text-[11px] text-muted tabular-nums">
                    {article.readTime} мин
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

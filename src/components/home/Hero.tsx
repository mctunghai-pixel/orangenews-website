import Link from "next/link";
import { Clock } from "lucide-react";
import type { Article, MarketInstrument } from "@/lib/types";
import { LineChart } from "@/components/charts/LineChart";
import { formatChangePct } from "@/lib/format-market";

interface HeroProps {
  article: Article;
  marketInstrument: MarketInstrument;
}

export function Hero({ article, marketInstrument }: HeroProps) {
  return (
    <article className="flex flex-col">
      <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-foreground">
        <LineChart
          points={marketInstrument.history1m}
          tone="accent"
          ariaLabel={`${marketInstrument.symbol} 30 хоногийн хөдөлгөөн`}
          gradientId="hero-chart-grad"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground via-foreground/70 to-transparent p-4 md:p-6">
          <div className="flex items-center gap-2">
            <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-accent">
              {article.category}
            </span>
            <span className="font-mono text-[9px] md:text-[10px] text-background/70">
              •
            </span>
            <span className="font-mono text-[9px] md:text-[10px] text-background/70 tabular-nums">
              {marketInstrument.symbol} ·{" "}
              {formatChangePct(marketInstrument.changePct)}
            </span>
          </div>
        </div>
      </div>

      <div className="pt-4 md:pt-5">
        <h1 className="font-serif-display text-[26px] md:text-[34px] lg:text-[44px] font-bold leading-[1.1] tracking-tight">
          <Link
            href={`/articles/${article.slug}`}
            className="hover:text-accent transition-colors"
          >
            {article.headline}
          </Link>
        </h1>
        <p className="mt-3 max-w-3xl font-serif-body text-[14px] md:text-[15.5px] lg:text-[16px] leading-relaxed text-muted">
          {article.excerpt}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="font-sans text-[11px] md:text-[12px] font-semibold text-foreground">
            {article.source}
          </span>
          <span className="text-muted">·</span>
          <span className="font-mono text-[10px] md:text-[11px] text-muted tabular-nums">
            {article.timeAgo}
          </span>
          <span className="text-muted">·</span>
          <span className="inline-flex items-center gap-1 font-mono text-[10px] md:text-[11px] text-muted tabular-nums">
            <Clock className="h-3 w-3" aria-hidden />
            {article.readTime} мин
          </span>
          <span className="inline-flex items-center gap-1 bg-auto-bg px-2 py-0.5 font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-up">
            <span className="inline-block h-1 w-1 rounded-full bg-up animate-pulse-dot" aria-hidden />
            Авто
          </span>
        </div>
      </div>
    </article>
  );
}

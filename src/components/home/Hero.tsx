import { Clock } from "lucide-react";
import { hero, categoryLabels } from "@/lib/mock-data";

function ChartSvg({ points }: { points: number[] }) {
  const width = 640;
  const height = 240;
  const padding = 12;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const stepX = (width - padding * 2) / (points.length - 1);

  const coords = points.map((p, i) => {
    const x = padding + i * stepX;
    const y = height - padding - ((p - min) / range) * (height - padding * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  const linePath = `M ${coords.join(" L ")}`;
  const areaPath = `${linePath} L ${width - padding},${height - padding} L ${padding},${height - padding} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-full w-full"
      preserveAspectRatio="none"
      role="img"
      aria-label="S&P 500 өнөөдрийн хөдөлгөөн"
    >
      <defs>
        <linearGradient id="hero-chart-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF6B1A" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#FF6B1A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#hero-chart-grad)" />
      <path
        d={linePath}
        fill="none"
        stroke="#FF6B1A"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <article className="flex flex-col">
      <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-foreground">
        <ChartSvg points={hero.chartPoints} />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground via-foreground/70 to-transparent p-4 md:p-6">
          <div className="flex items-center gap-2">
            <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-accent">
              {categoryLabels[hero.category]}
            </span>
            <span className="font-mono text-[9px] md:text-[10px] text-background/70">
              •
            </span>
            <span className="font-mono text-[9px] md:text-[10px] text-background/70 tabular-nums">
              S&amp;P 500 · +0.42%
            </span>
          </div>
        </div>
      </div>

      <div className="pt-4 md:pt-5">
        <h1 className="font-serif-display text-[26px] md:text-[34px] lg:text-[44px] font-bold leading-[1.1] tracking-tight">
          <a href="#" className="hover:text-accent transition-colors">
            {hero.headline}
          </a>
        </h1>
        <p className="mt-3 max-w-3xl font-serif-body text-[14px] md:text-[15.5px] lg:text-[16px] leading-relaxed text-muted">
          {hero.summary}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="font-sans text-[11px] md:text-[12px] font-semibold text-foreground">
            {hero.source}
          </span>
          <span className="text-muted">·</span>
          <span className="font-mono text-[10px] md:text-[11px] text-muted tabular-nums">
            {hero.timeAgo}
          </span>
          <span className="text-muted">·</span>
          <span className="inline-flex items-center gap-1 font-mono text-[10px] md:text-[11px] text-muted tabular-nums">
            <Clock className="h-3 w-3" aria-hidden />
            {hero.readTime}
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

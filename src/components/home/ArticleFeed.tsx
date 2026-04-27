import { Bookmark, Share2 } from "lucide-react";
import Link from "next/link";
import { type ArticlePattern } from "@/lib/mock-data";
import type { Article } from "@/lib/types";

interface ArticleFeedProps {
  articles: Article[];
  /** undefined = default "Сүүлийн мэдээ" + АВТО badge; null = no header; string = custom header (no badge) */
  heading?: string | null;
}

function PatternSvg({ pattern }: { pattern: ArticlePattern }) {
  const common = {
    viewBox: "0 0 400 250",
    className: "h-full w-full",
    preserveAspectRatio: "none" as const,
  };
  const orange = "#FF6B1A";

  switch (pattern) {
    case "chart":
      return (
        <svg {...common} role="img" aria-hidden>
          <rect width="400" height="250" fill="#0A0A0A" />
          <polyline
            points="20,200 60,180 100,190 140,150 180,160 220,120 260,130 300,90 340,100 380,60"
            fill="none"
            stroke={orange}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <polyline
            points="20,220 60,215 100,218 140,205 180,210 220,195 260,200 300,180 340,185 380,165"
            fill="none"
            stroke="#525252"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "circuit":
      return (
        <svg {...common} role="img" aria-hidden>
          <rect width="400" height="250" fill="#0A0A0A" />
          <g stroke={orange} strokeWidth="1.5" fill="none">
            <path d="M40 50 L120 50 L120 120 L240 120 L240 60 L360 60" />
            <path d="M40 180 L180 180 L180 210 L300 210" />
          </g>
          <g fill={orange}>
            <circle cx="40" cy="50" r="4" />
            <circle cx="360" cy="60" r="4" />
            <circle cx="240" cy="120" r="3" />
            <circle cx="180" cy="180" r="3" />
            <circle cx="300" cy="210" r="4" />
          </g>
        </svg>
      );
    case "spark":
      return (
        <svg {...common} role="img" aria-hidden>
          <rect width="400" height="250" fill="#0A0A0A" />
          <g fill={orange}>
            <rect x="30" y="140" width="8" height="60" />
            <rect x="60" y="120" width="8" height="80" />
            <rect x="90" y="100" width="8" height="100" />
            <rect x="120" y="130" width="8" height="70" />
            <rect x="150" y="90" width="8" height="110" />
            <rect x="180" y="110" width="8" height="90" />
            <rect x="210" y="70" width="8" height="130" />
            <rect x="240" y="95" width="8" height="105" />
            <rect x="270" y="75" width="8" height="125" />
            <rect x="300" y="60" width="8" height="140" />
            <rect x="330" y="50" width="8" height="150" />
            <rect x="360" y="40" width="8" height="160" />
          </g>
        </svg>
      );
    case "pulse":
      return (
        <svg {...common} role="img" aria-hidden>
          <rect width="400" height="250" fill="#0A0A0A" />
          <circle cx="200" cy="125" r="20" fill="none" stroke={orange} strokeWidth="2" />
          <circle cx="200" cy="125" r="45" fill="none" stroke={orange} strokeWidth="1.5" opacity="0.6" />
          <circle cx="200" cy="125" r="75" fill="none" stroke={orange} strokeWidth="1" opacity="0.35" />
          <circle cx="200" cy="125" r="110" fill="none" stroke={orange} strokeWidth="1" opacity="0.15" />
        </svg>
      );
    case "cube":
      return (
        <svg {...common} role="img" aria-hidden>
          <rect width="400" height="250" fill="#0A0A0A" />
          <g fill="none" stroke={orange} strokeWidth="1.5">
            <polygon points="200,40 310,100 310,200 200,260 90,200 90,100" />
            <line x1="200" y1="40" x2="200" y2="150" />
            <line x1="90" y1="100" x2="200" y2="150" />
            <line x1="310" y1="100" x2="200" y2="150" />
          </g>
        </svg>
      );
    case "coin":
      return (
        <svg {...common} role="img" aria-hidden>
          <rect width="400" height="250" fill="#0A0A0A" />
          <circle cx="200" cy="125" r="70" fill="none" stroke={orange} strokeWidth="2.5" />
          <text
            x="200"
            y="148"
            textAnchor="middle"
            fontSize="64"
            fontFamily="Georgia, serif"
            fill={orange}
            fontWeight="bold"
          >
            Ξ
          </text>
        </svg>
      );
  }
}

export function ArticleFeed({ articles, heading }: ArticleFeedProps) {
  const showHeader = heading !== null;
  const headingText = heading === undefined ? "Сүүлийн мэдээ" : heading;
  const showAutoBadge = heading === undefined;

  return (
    <section
      {...(showHeader
        ? { "aria-labelledby": "feed-heading" }
        : { "aria-label": "Нийтлэлүүд" })}
    >
      {showHeader && (
        <div className="flex items-center gap-3 border-b-2 border-foreground pb-2">
          <h2
            id="feed-heading"
            className="font-serif-display text-[18px] md:text-[22px] font-bold"
          >
            {headingText}
          </h2>
          {showAutoBadge && (
            <span className="inline-flex items-center gap-1 bg-auto-bg px-1.5 py-0.5 font-sans text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-up">
              <span className="inline-block h-1 w-1 rounded-full bg-up animate-pulse-dot" aria-hidden />
              Авто
            </span>
          )}
        </div>
      )}

      <div className={`grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:gap-x-8 md:gap-y-10 ${showHeader ? "mt-6" : ""}`}>
        {articles.map((article) => (
          <article key={article.id} className="flex flex-col">
            <div className="mb-3 aspect-[16/9] overflow-hidden bg-foreground">
              <PatternSvg pattern={article.pattern} />
            </div>
            <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-accent">
              {article.category}
            </span>
            <h3 className="mt-2 font-serif-display text-[18px] md:text-[21px] font-bold leading-snug">
              <Link
                href={`/articles/${article.slug}`}
                className="hover:text-accent transition-colors"
              >
                {article.headline}
              </Link>
            </h3>
            <p className="mt-2 line-clamp-3 font-serif-body text-[13px] md:text-[14px] leading-relaxed text-muted">
              {article.excerpt}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-sans text-[11px] font-semibold text-foreground">
                  {article.source}
                </span>
                <span className="text-muted">·</span>
                <span className="font-mono text-[10px] md:text-[11px] text-muted tabular-nums">
                  {article.timeAgo}
                </span>
              </div>
              <div className="flex items-center gap-0.5">
                <button
                  type="button"
                  aria-label="Хадгалах"
                  className="flex h-11 w-11 items-center justify-center text-muted hover:text-accent transition-colors"
                >
                  <Bookmark className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="button"
                  aria-label="Хуваалцах"
                  className="flex h-11 w-11 items-center justify-center text-muted hover:text-accent transition-colors"
                >
                  <Share2 className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { MarketInstrument } from "@/lib/types";
import { formatPrice, formatChangePct } from "@/lib/format-market";

function formatClock(date: Date): string {
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

interface TickerBarProps {
  items: MarketInstrument[];
}

export function TickerBar({ items }: TickerBarProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const loop = [...items, ...items];

  return (
    <div
      role="region"
      aria-label="Зах зээлийн шууд мэдээлэл"
      className="bg-foreground text-background border-b border-background/10"
    >
      <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-4 md:px-6">
        <div className="flex items-center gap-2 py-1.5 md:py-2 shrink-0 border-r border-background/15 pr-3">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot"
            aria-hidden
          />
          <span className="font-sans text-[9px] md:text-[10px] font-semibold uppercase tracking-wider">
            Шууд
          </span>
          <span
            className="font-mono text-[9px] md:text-[10px] text-background/70 tabular-nums"
            suppressHydrationWarning
          >
            {now ? formatClock(now) : "--:--:--"}
          </span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="flex w-max animate-ticker-mobile md:animate-ticker-desktop hover:[animation-play-state:paused]">
            {loop.map((item, idx) => {
              const up = item.changePct >= 0;
              return (
                <Link
                  key={`${item.slug}-${idx}`}
                  href={`/markets/${item.slug}`}
                  className="flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 whitespace-nowrap hover:bg-background/10 transition-colors duration-150"
                >
                  <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wide">
                    {item.symbol}
                  </span>
                  <span className="font-mono text-[10px] md:text-[11px] text-background/80 tabular-nums">
                    {formatPrice(item)}
                  </span>
                  <span
                    className={`font-mono text-[10px] md:text-[11px] tabular-nums ${up ? "text-up" : "text-down"}`}
                  >
                    {formatChangePct(item.changePct)}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

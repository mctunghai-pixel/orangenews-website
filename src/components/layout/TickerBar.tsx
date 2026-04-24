"use client";

import { useEffect, useState } from "react";
import { ticker } from "@/lib/mock-data";

function formatClock(date: Date): string {
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

export function TickerBar() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [...ticker, ...ticker];

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
            {items.map((item, idx) => {
              const up = item.change >= 0;
              return (
                <div
                  key={`${item.symbol}-${idx}`}
                  className="flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 whitespace-nowrap"
                >
                  <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wide">
                    {item.symbol}
                  </span>
                  <span className="font-mono text-[10px] md:text-[11px] text-background/80 tabular-nums">
                    {item.value}
                  </span>
                  <span
                    className={`font-mono text-[10px] md:text-[11px] tabular-nums ${up ? "text-up" : "text-down"}`}
                  >
                    {up ? "+" : ""}
                    {item.change.toFixed(2)}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

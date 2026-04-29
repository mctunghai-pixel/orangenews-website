"use client";

import { useState } from "react";
import type { MarketInstrument } from "@/lib/types";
import { LineChart } from "@/components/charts/LineChart";

type Timeframe = "1w" | "1m";

interface MarketChartProps {
  instrument: MarketInstrument;
}

const TABS: Array<{ key: Timeframe; label: string }> = [
  { key: "1w", label: "1W" },
  { key: "1m", label: "1M" },
];

export function MarketChart({ instrument }: MarketChartProps) {
  const [tf, setTf] = useState<Timeframe>("1w");
  const points = tf === "1w" ? instrument.history1w : instrument.history1m;
  const tone = instrument.changePct >= 0 ? "up" : "down";

  return (
    <section aria-label="Үнийн хөдөлгөөний график">
      <div role="tablist" className="flex gap-1 border-b border-foreground/10">
        {TABS.map((tab) => {
          const active = tab.key === tf;
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={active}
              onClick={() => setTf(tab.key)}
              className={`font-sans text-[11px] md:text-[12px] uppercase tracking-wider px-4 py-2 transition-colors ${
                active
                  ? "text-foreground border-b-2 border-accent -mb-px"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="aspect-[16/9] mt-4 bg-foreground/[0.02] rounded">
        <LineChart
          points={points}
          tone={tone}
          ariaLabel={`${instrument.symbol} ${tf.toUpperCase()}`}
          gradientId={`market-chart-${instrument.slug}-${tf}`}
        />
      </div>
    </section>
  );
}

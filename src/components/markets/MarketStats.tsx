import type { MarketInstrument } from "@/lib/types";
import { formatValue, formatLargeNumber } from "@/lib/format-market";

interface MarketStatsProps {
  instrument: MarketInstrument;
}

export function MarketStats({ instrument }: MarketStatsProps) {
  const stats: Array<{ label: string; value: string }> = [];
  const { asset } = instrument;

  if (instrument.dayHigh !== undefined)
    stats.push({ label: "Өдрийн дээд", value: formatValue(instrument.dayHigh, asset) });
  if (instrument.dayLow !== undefined)
    stats.push({ label: "Өдрийн доод", value: formatValue(instrument.dayLow, asset) });
  if (instrument.prevClose !== undefined)
    stats.push({ label: "Өмнөх хаалт", value: formatValue(instrument.prevClose, asset) });
  if (instrument.high52w !== undefined)
    stats.push({ label: "52 долоо хоногийн дээд", value: formatValue(instrument.high52w, asset) });
  if (instrument.low52w !== undefined)
    stats.push({ label: "52 долоо хоногийн доод", value: formatValue(instrument.low52w, asset) });
  if (instrument.volume24h !== undefined)
    stats.push({ label: "24 цагийн гүйлгээ", value: formatLargeNumber(instrument.volume24h) });
  if (instrument.marketCap !== undefined)
    stats.push({ label: "Зах зээлийн үнэлгээ", value: formatLargeNumber(instrument.marketCap) });

  if (stats.length === 0) return null;

  return (
    <section
      aria-label="Статистик"
      className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-5"
    >
      {stats.map((s) => (
        <div key={s.label}>
          <div className="font-sans text-[10px] md:text-[11px] uppercase tracking-wider text-muted">
            {s.label}
          </div>
          <div className="mt-1 font-mono text-[16px] md:text-[18px] tabular-nums">
            {s.value}
          </div>
        </div>
      ))}
    </section>
  );
}

import type { AssetClass, MarketInstrument } from "@/lib/types";
import { LineChart } from "@/components/charts/LineChart";
import {
  formatPrice,
  formatChangePct,
  formatValue,
  formatLastUpdated,
} from "@/lib/format-market";

const ASSET_LABEL: Record<AssetClass, string> = {
  index: "Индекс",
  crypto: "Крипто",
  fx: "Валют",
  commodity: "Түүхий эд",
};

interface MarketHeroProps {
  instrument: MarketInstrument;
}

export function MarketHero({ instrument }: MarketHeroProps) {
  const up = instrument.changePct >= 0;
  const tone = up ? "up" : "down";
  const sign = up ? "+" : "−";
  const changeAbsFormatted =
    sign + formatValue(Math.abs(instrument.change), instrument.asset);

  return (
    <header className="border-b border-foreground/10 pb-8">
      <div className="font-sans text-[10px] md:text-[11px] uppercase tracking-wider text-muted">
        {ASSET_LABEL[instrument.asset]}
      </div>

      <h1 className="mt-2 font-serif-display text-[44px] md:text-[64px] font-bold leading-none tracking-tight">
        {instrument.symbol}
      </h1>
      <p className="mt-1 font-sans text-[13px] md:text-[14px] text-muted">
        {instrument.name}
      </p>

      <div className="mt-6 flex flex-wrap items-end gap-x-8 gap-y-4">
        <div>
          <div className="font-mono text-[36px] md:text-[48px] font-bold leading-none tabular-nums">
            {formatPrice(instrument)}
          </div>
          <div
            className={`mt-2 font-mono text-[14px] md:text-[16px] tabular-nums ${
              up ? "text-up" : "text-down"
            }`}
          >
            {changeAbsFormatted} · {formatChangePct(instrument.changePct)}
          </div>
        </div>

        <div className="h-[60px] w-[200px] md:w-[240px]">
          <LineChart
            points={instrument.history1w}
            tone={tone}
            ariaLabel={`${instrument.symbol} долоо хоногийн чиг хандлага`}
            gradientId={`hero-spark-${instrument.slug}`}
          />
        </div>
      </div>

      {instrument.lastUpdated && (
        <p className="mt-4 font-sans text-[11px] md:text-[12px] text-muted">
          Сүүлд шинэчлэгдсэн: {formatLastUpdated(instrument.lastUpdated)}
        </p>
      )}
    </header>
  );
}

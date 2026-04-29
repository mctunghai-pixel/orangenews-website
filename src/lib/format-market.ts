// =============================================================================
// Market Display Formatters
// =============================================================================
// Pure functions for rendering MarketInstrument values. Bloomberg convention:
// $ prefix only for crypto + commodity (not indices/FX). Crypto >= $1000 omits
// decimals (matches existing TickerBar visual: "$68,420", "$3,812").
// =============================================================================

import type { MarketInstrument } from "./types";

/** Format price for ticker/hero display, asset-class aware. */
export function formatPrice(instrument: MarketInstrument): string {
  const { price, asset } = instrument;
  const showDollar = asset === "crypto" || asset === "commodity";
  const decimals = asset === "crypto" && price >= 1000 ? 0 : 2;
  const formatted = price.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return showDollar ? `$${formatted}` : formatted;
}

/** Format percent change with explicit sign — e.g. "+0.42%", "-1.27%" */
export function formatChangePct(pct: number): string {
  const sign = pct >= 0 ? "+" : "";
  return `${sign}${pct.toFixed(2)}%`;
}

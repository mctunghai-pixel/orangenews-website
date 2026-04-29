// =============================================================================
// Market Display Formatters
// =============================================================================
// Pure functions for rendering MarketInstrument values. Bloomberg convention:
// $ prefix only for crypto + commodity (not indices/FX). Crypto >= $1000 omits
// decimals (matches existing TickerBar visual: "$68,420", "$3,812").
// =============================================================================

import type { AssetClass, MarketInstrument } from "./types";

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

/** Format an arbitrary value with the same asset-class rules as formatPrice. */
export function formatValue(value: number, asset: AssetClass): string {
  const showDollar = asset === "crypto" || asset === "commodity";
  const decimals = asset === "crypto" && value >= 1000 ? 0 : 2;
  const formatted = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return showDollar ? `$${formatted}` : formatted;
}

/** Compact large-number formatter — "$28.54B", "$1.35T" — for volume / market cap */
export function formatLargeNumber(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  return `$${n.toLocaleString("en-US")}`;
}

/** Format percent change with explicit sign — e.g. "+0.42%", "-1.27%" */
export function formatChangePct(pct: number): string {
  const sign = pct >= 0 ? "+" : "";
  return `${sign}${pct.toFixed(2)}%`;
}

/** Mongolian Cyrillic relative time — mirrors timeAgoMongolian in fetch-orange-news. */
export function formatLastUpdated(iso: string): string {
  const then = new Date(iso);
  const diffMs = Date.now() - then.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return "Сая";
  if (diffMin < 60) return `${diffMin} минутын өмнө`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr} цагийн өмнө`;
  return then.toLocaleDateString("mn-MN");
}

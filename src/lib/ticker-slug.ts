// =============================================================================
// Ticker Slug ↔ MarketInstrument display mapping
// =============================================================================
// Single source of truth for /markets/[ticker] routes + TickerBar links.
// Each canonical lowercase slug maps to the instrument's display attributes.
// Mirror pattern: category-slug.ts (Phase 3 Step 3B).
// =============================================================================

import type { AssetClass } from "./types";

export const TICKER_SLUG_MAP = {
  spx:    { display: "S&P 500", name: "S&P 500 Index",      asset: "index" },
  dji:    { display: "DOW",     name: "Dow Jones",          asset: "index" },
  ixic:   { display: "NASDAQ",  name: "Nasdaq Composite",   asset: "index" },
  btc:    { display: "BTC",     name: "Bitcoin",            asset: "crypto" },
  eth:    { display: "ETH",     name: "Ethereum",           asset: "crypto" },
  mntusd: { display: "USD/MNT", name: "АНУ-ын доллар Монгол төгрөгөөр", asset: "fx" },
  xau:    { display: "GOLD",    name: "Gold",               asset: "commodity" },
  cl:     { display: "OIL WTI", name: "Crude Oil WTI",      asset: "commodity" },
} as const satisfies Record<
  string,
  { display: string; name: string; asset: AssetClass }
>;

export type TickerSlug = keyof typeof TICKER_SLUG_MAP;

export const TICKER_SLUGS = Object.keys(TICKER_SLUG_MAP) as TickerSlug[];

export function isValidTickerSlug(s: string): s is TickerSlug {
  return s in TICKER_SLUG_MAP;
}

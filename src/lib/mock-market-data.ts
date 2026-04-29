// =============================================================================
// Mock Market Data — fallback for fetchMarketData
// =============================================================================
// Realistic snapshot of 8 instruments (3 indexes, 2 crypto, 1 fx, 2 commodities).
// History generated via deterministic sine wave around target price — last point
// always exactly equals current price for visual consistency with TickerBar/Hero.
// Volatility tuned per asset class: indices 2%, crypto 10%, fx 1%, commodities 3%.
// =============================================================================

import type { AssetClass, MarketInstrument } from "./types";
import type { TickerSlug } from "./ticker-slug";

/** Per-asset-class volatility for `wave()` history generation */
export const VOLATILITY = {
  index: 0.02,
  crypto: 0.10,
  fx: 0.01,
  commodity: 0.03,
} as const satisfies Record<AssetClass, number>;

/** Deterministic sine wave ending exactly at `target`.
 * Phase (2.7π + 0.3) chosen so no in-loop sample lands on sin≈0 for either
 * 7- or 30-day windows — avoids visually flat end-of-chart artifact. */
export function wave(target: number, days: number, volatility = 0.02): number[] {
  const out: number[] = [];
  for (let i = 0; i < days - 1; i++) {
    const t = (i / (days - 1)) * Math.PI * 2.7 + 0.3;
    const offset = Math.sin(t) * volatility;
    out.push(Number((target * (1 + offset)).toFixed(2)));
  }
  out.push(target);
  return out;
}

export const MOCK_MARKET_DATA: Record<TickerSlug, MarketInstrument> = {
  spx: {
    slug: "spx",
    symbol: "S&P 500",
    name: "S&P 500 Index",
    asset: "index",
    price: 6852.34,
    change: 28.71,
    changePct: 0.42,
    history1w: wave(6852.34, 7, VOLATILITY.index),
    history1m: wave(6852.34, 30, VOLATILITY.index),
    high52w: 6905.20,
    low52w: 5198.40,
    dayHigh: 6878.10,
    dayLow: 6815.42,
    prevClose: 6823.63,
  },
  dji: {
    slug: "dji",
    symbol: "DOW",
    name: "Dow Jones",
    asset: "index",
    price: 39214.55,
    change: -47.10,
    changePct: -0.12,
    history1w: wave(39214.55, 7, VOLATILITY.index),
    history1m: wave(39214.55, 30, VOLATILITY.index),
    high52w: 39889.05,
    low52w: 32327.20,
    dayHigh: 39301.42,
    dayLow: 39150.18,
    prevClose: 39261.65,
  },
  ixic: {
    slug: "ixic",
    symbol: "NASDAQ",
    name: "Nasdaq Composite",
    asset: "index",
    price: 16891.44,
    change: 130.74,
    changePct: 0.78,
    history1w: wave(16891.44, 7, VOLATILITY.index),
    history1m: wave(16891.44, 30, VOLATILITY.index),
    high52w: 16996.15,
    low52w: 12543.86,
    dayHigh: 16920.31,
    dayLow: 16785.22,
    prevClose: 16760.70,
  },
  btc: {
    slug: "btc",
    symbol: "BTC",
    name: "Bitcoin",
    asset: "crypto",
    price: 68420.0,
    change: 1236.40,
    changePct: 1.84,
    history1w: wave(68420.0, 7, VOLATILITY.crypto),
    history1m: wave(68420.0, 30, VOLATILITY.crypto),
    high52w: 73750,
    low52w: 25180,
    volume24h: 28_540_000_000,
    marketCap: 1_348_000_000_000,
  },
  eth: {
    slug: "eth",
    symbol: "ETH",
    name: "Ethereum",
    asset: "crypto",
    price: 3812.0,
    change: 86.07,
    changePct: 2.31,
    history1w: wave(3812.0, 7, VOLATILITY.crypto),
    history1m: wave(3812.0, 30, VOLATILITY.crypto),
    high52w: 4093,
    low52w: 1532,
    volume24h: 14_220_000_000,
    marketCap: 458_000_000_000,
  },
  mntusd: {
    slug: "mntusd",
    symbol: "USD/MNT",
    name: "АНУ-ын доллар Монгол төгрөгөөр",
    asset: "fx",
    price: 3475.0,
    change: -2.78,
    changePct: -0.08,
    history1w: wave(3475.0, 7, VOLATILITY.fx),
    history1m: wave(3475.0, 30, VOLATILITY.fx),
    prevClose: 3477.78,
  },
  xau: {
    slug: "xau",
    symbol: "GOLD",
    name: "Gold",
    asset: "commodity",
    price: 2381.50,
    change: 13.26,
    changePct: 0.56,
    history1w: wave(2381.50, 7, VOLATILITY.commodity),
    history1m: wave(2381.50, 30, VOLATILITY.commodity),
    high52w: 2431.00,
    low52w: 1810.50,
    prevClose: 2368.24,
  },
  cl: {
    slug: "cl",
    symbol: "OIL WTI",
    name: "Crude Oil WTI",
    asset: "commodity",
    price: 81.70,
    change: -0.41,
    changePct: -0.50,
    history1w: wave(81.70, 7, VOLATILITY.commodity),
    history1m: wave(81.70, 30, VOLATILITY.commodity),
    high52w: 95.03,
    low52w: 67.21,
    prevClose: 82.11,
  },
};

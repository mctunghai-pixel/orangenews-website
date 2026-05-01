// =============================================================================
// Orange News — Live Market Data Fetcher
// =============================================================================
// Fetch market_data.json from automation repo (when available), normalize to
// MarketInstrument records. Falls back to mock data on any error.
//
// Stage 1 (current): GitHub URL likely 404 → mock fallback → website renders mock
// Stage 2 (future):  Pipeline pushes market_data.json → live data autopilot
// =============================================================================

import type { AssetClass, MarketDataResult, MarketInstrument } from "./types";
import { MOCK_MARKET_DATA } from "./mock-market-data";
import { isValidTickerSlug } from "./ticker-slug";

const REVALIDATE_SECONDS = 1800; // 30 min ISR

const MARKET_DATA_URL =
  process.env.MARKET_DATA_URL ??
  "https://raw.githubusercontent.com/mctunghai-pixel/orange-news-automation/main/market_data.json";

const OPTIONAL_NUMBER_KEYS = [
  "high52w",
  "low52w",
  "dayHigh",
  "dayLow",
  "prevClose",
  "volume24h",
  "marketCap",
] as const satisfies readonly (keyof MarketInstrument)[];

/** Resolve asset class from frontend (`asset`) or backend (`assetClass`) shape. */
function resolveAsset(raw: Record<string, unknown>): AssetClass | null {
  const candidate = (raw.asset ?? raw.assetClass) as unknown;
  if (candidate === "index" || candidate === "crypto" || candidate === "commodity" || candidate === "fx") {
    return candidate;
  }
  if (candidate === "forex") return "fx"; // backend uses "forex"; frontend canonical is "fx"
  return null;
}

/** Flatten history shape: backend `[{date, close}]` → `number[]`; pass-through if already numeric. */
function flattenHistory(h: unknown): number[] | null {
  if (!Array.isArray(h)) return null;
  if (h.length === 0) return [];
  if (typeof h[0] === "number") return h.filter((n): n is number => typeof n === "number");
  if (typeof h[0] === "object" && h[0] !== null && "close" in (h[0] as object)) {
    return h
      .map((p) => (p as { close: unknown }).close)
      .filter((n): n is number => typeof n === "number");
  }
  return null;
}

/**
 * Normalize a backend record into the frontend `MarketInstrument` shape.
 * Tolerant of both backend (`assetClass` + `[{date,close}]` history) and
 * canonical frontend (`asset` + `number[]` history) shapes — idempotent.
 * Returns `null` if required fields are missing or malformed.
 */
function normalizeBackendInstrument(v: unknown): MarketInstrument | null {
  if (typeof v !== "object" || v === null) return null;
  const o = v as Record<string, unknown>;

  const asset = resolveAsset(o);
  if (!asset) return null;

  const history1w = flattenHistory(o.history1w);
  const history1m = flattenHistory(o.history1m);
  if (!history1w || !history1m) return null;

  if (
    typeof o.slug !== "string" ||
    typeof o.symbol !== "string" ||
    typeof o.name !== "string" ||
    typeof o.price !== "number" ||
    typeof o.change !== "number" ||
    typeof o.changePct !== "number"
  ) {
    return null;
  }

  const out: MarketInstrument = {
    slug: o.slug,
    symbol: o.symbol,
    name: o.name,
    asset,
    price: o.price,
    change: o.change,
    changePct: o.changePct,
    history1w,
    history1m,
  };

  for (const k of OPTIONAL_NUMBER_KEYS) {
    if (typeof o[k] === "number") out[k] = o[k] as number;
  }
  if (typeof o.lastUpdated === "string") out.lastUpdated = o.lastUpdated;

  return out;
}

/** Build mock fallback result with fresh `lastUpdated` timestamp on each instrument */
function getMockResult(error?: string): MarketDataResult {
  const now = new Date();
  const nowIso = now.toISOString();
  const instruments: Record<string, MarketInstrument> = {};
  for (const [slug, instrument] of Object.entries(MOCK_MARKET_DATA)) {
    instruments[slug] = { ...instrument, lastUpdated: nowIso };
  }
  return {
    instruments,
    source: "mock",
    fetchedAt: now,
    ...(error ? { error } : {}),
  };
}

/**
 * Fetch live market data. Falls back to mock on any error.
 * Filters payload to known TICKER_SLUGS only — ignores unknown keys silently.
 */
export async function fetchMarketData(): Promise<MarketDataResult> {
  try {
    const res = await fetch(MARKET_DATA_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);

    const raw = (await res.json()) as Record<string, unknown>;

    const instruments: Record<string, MarketInstrument> = {};
    for (const [key, value] of Object.entries(raw)) {
      if (!isValidTickerSlug(key)) continue;
      const normalized = normalizeBackendInstrument(value);
      if (normalized) instruments[key] = normalized;
    }

    if (Object.keys(instruments).length === 0) {
      throw new Error("No valid instruments in payload");
    }

    return {
      instruments,
      source: "live",
      fetchedAt: new Date(),
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return getMockResult(message);
  }
}

/** Get a single instrument by slug — used by /markets/[ticker] route */
export async function getMarketInstrument(
  slug: string,
): Promise<MarketInstrument | null> {
  if (!isValidTickerSlug(slug)) return null;
  const { instruments } = await fetchMarketData();
  return instruments[slug] ?? null;
}

// =============================================================================
// Orange News — Live Market Data Fetcher
// =============================================================================
// Fetch market_data.json from automation repo (when available), normalize to
// MarketInstrument records. Falls back to mock data on any error.
//
// Stage 1 (current): GitHub URL likely 404 → mock fallback → website renders mock
// Stage 2 (future):  Pipeline pushes market_data.json → live data autopilot
// =============================================================================

import type { MarketDataResult, MarketInstrument } from "./types";
import { MOCK_MARKET_DATA } from "./mock-market-data";
import { isValidTickerSlug } from "./ticker-slug";

const REVALIDATE_SECONDS = 1800; // 30 min ISR

const MARKET_DATA_URL =
  process.env.MARKET_DATA_URL ??
  "https://raw.githubusercontent.com/mctunghai-pixel/orange-news-automation/main/market_data.json";

/** Lightweight runtime validation — defends against schema drift */
function isValidInstrument(v: unknown): v is MarketInstrument {
  if (typeof v !== "object" || v === null) return false;
  const o = v as Record<string, unknown>;
  return (
    typeof o.slug === "string" &&
    typeof o.symbol === "string" &&
    typeof o.price === "number" &&
    typeof o.changePct === "number" &&
    Array.isArray(o.history1w) &&
    Array.isArray(o.history1m)
  );
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
      if (isValidTickerSlug(key) && isValidInstrument(value)) {
        instruments[key] = value;
      }
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

// =============================================================================
// TickerBarLoader — server wrapper that fetches market data and renders TickerBar
// =============================================================================
// Loader pattern: server-side fetch isolated from client interactivity (clock,
// scroll animation). Preserves TICKER_SLUG_MAP order; defensively filters out
// any missing instruments so partial live payloads still render correctly.
// =============================================================================

import { fetchMarketData } from "@/lib/fetch-market-data";
import { TICKER_SLUGS } from "@/lib/ticker-slug";
import { TickerBar } from "./TickerBar";

export async function TickerBarLoader() {
  const { instruments } = await fetchMarketData();
  const items = TICKER_SLUGS.map((slug) => instruments[slug]).filter(
    (item) => item !== undefined,
  );
  return <TickerBar items={items} />;
}

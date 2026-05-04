// =============================================================================
// Orange News — Live MSE Data Fetcher
// =============================================================================
// Fetches mse_data.json from the orange-news-automation backend (cron-refreshed
// twice daily on weekdays). Mirrors the fetch-market-data.ts envelope: ISR
// revalidate, mock fallback on any error, env-overridable URL.
//
// Backend contract: docs/mse_phase6.2_endpoint.md in the automation repo.
// Schema canonical: 8 datasets (marquee, stock_*, comex_trade, *_list).
// =============================================================================

import type {
  MseComexTrade,
  MseDataResult,
  MseDirection,
  MseListedCompany,
  MseMarqueeRow,
  MseStockAmount,
  MseStockMover,
  MseTop20Member,
} from "./types";
import { MOCK_MSE_DATA } from "./mock-mse-data";

const REVALIDATE_SECONDS = 1800; // 30 min ISR — matches fetch-market-data.ts

const MSE_DATA_URL =
  process.env.MSE_DATA_URL ??
  "https://raw.githubusercontent.com/mctunghai-pixel/orange-news-automation/main/mse_data.json";

function isDirection(v: unknown): v is MseDirection {
  return v === "up" || v === "down" || v === "flat";
}

function asObject(v: unknown): Record<string, unknown> | null {
  return typeof v === "object" && v !== null ? (v as Record<string, unknown>) : null;
}

function normalizeMarquee(arr: unknown): MseMarqueeRow[] {
  if (!Array.isArray(arr)) return [];
  const out: MseMarqueeRow[] = [];
  for (const v of arr) {
    const o = asObject(v);
    if (!o) continue;
    if (
      typeof o.symbol !== "string" ||
      typeof o.price !== "number" ||
      typeof o.change_pct !== "number" ||
      typeof o.change_abs !== "number" ||
      !isDirection(o.direction)
    ) continue;
    out.push({
      symbol: o.symbol,
      price: o.price,
      changePct: o.change_pct,
      changeAbs: o.change_abs,
      direction: o.direction,
    });
  }
  return out;
}

function normalizeStockMovers(arr: unknown): MseStockMover[] {
  if (!Array.isArray(arr)) return [];
  const out: MseStockMover[] = [];
  for (const v of arr) {
    const o = asObject(v);
    if (!o) continue;
    if (
      typeof o.symbol !== "string" ||
      typeof o.name !== "string" ||
      typeof o.code !== "number" ||
      typeof o.price !== "number" ||
      typeof o.change_pct !== "number" ||
      typeof o.change_abs !== "number" ||
      !isDirection(o.direction)
    ) continue;
    out.push({
      symbol: o.symbol,
      name: o.name,
      code: o.code,
      logoUrl: typeof o.logo_url === "string" ? o.logo_url : "",
      price: o.price,
      changePct: o.change_pct,
      changeAbs: o.change_abs,
      direction: o.direction,
    });
  }
  return out;
}

function normalizeStockAmount(arr: unknown): MseStockAmount[] {
  if (!Array.isArray(arr)) return [];
  const out: MseStockAmount[] = [];
  for (const v of arr) {
    const o = asObject(v);
    if (!o) continue;
    if (
      typeof o.symbol !== "string" ||
      typeof o.name !== "string" ||
      typeof o.code !== "number" ||
      typeof o.amount_mnt !== "number" ||
      typeof o.change_pct !== "number" ||
      typeof o.change_abs !== "number" ||
      !isDirection(o.direction)
    ) continue;
    out.push({
      symbol: o.symbol,
      name: o.name,
      code: o.code,
      logoUrl: typeof o.logo_url === "string" ? o.logo_url : "",
      amountMnt: o.amount_mnt,
      changePct: o.change_pct,
      changeAbs: o.change_abs,
      direction: o.direction,
    });
  }
  return out;
}

function normalizeComexTrade(arr: unknown): MseComexTrade[] {
  if (!Array.isArray(arr)) return [];
  const out: MseComexTrade[] = [];
  for (const v of arr) {
    const o = asObject(v);
    if (!o) continue;
    if (
      typeof o.id !== "number" ||
      typeof o.main_type !== "string" ||
      typeof o.category !== "string" ||
      typeof o.seller !== "string" ||
      typeof o.started_at !== "string" ||
      typeof o.min_price !== "number" ||
      typeof o.price !== "number" ||
      typeof o.currency !== "string" ||
      typeof o.change_abs !== "number" ||
      typeof o.change_pct !== "number" ||
      !isDirection(o.direction)
    ) continue;
    out.push({
      id: o.id,
      mainType: o.main_type,
      category: o.category,
      seller: o.seller,
      startedAt: o.started_at,
      minPrice: o.min_price,
      price: o.price,
      currency: o.currency,
      changeAbs: o.change_abs,
      changePct: o.change_pct,
      direction: o.direction,
    });
  }
  return out;
}

function normalizeDirectoryRow(v: unknown): MseTop20Member | null {
  const o = asObject(v);
  if (!o) return null;
  if (
    typeof o.row !== "number" ||
    typeof o.symbol !== "string" ||
    typeof o.name !== "string" ||
    typeof o.code !== "number"
  ) return null;
  return { row: o.row, symbol: o.symbol, name: o.name, code: o.code };
}

function normalizeTop20(arr: unknown): MseTop20Member[] {
  if (!Array.isArray(arr)) return [];
  const out: MseTop20Member[] = [];
  for (const v of arr) {
    const r = normalizeDirectoryRow(v);
    if (r) out.push(r);
  }
  return out;
}

function normalizeListedCompany(arr: unknown): MseListedCompany[] {
  // Same shape as Top20Member but distinct semantic — A/B board listing.
  return normalizeTop20(arr);
}

/** Build mock fallback result with a fresh fetchedAt timestamp. */
function getMockResult(error?: string): MseDataResult {
  return {
    ...MOCK_MSE_DATA,
    source: "mock",
    fetchedAt: new Date(),
    ...(error ? { error } : {}),
  };
}

/**
 * Fetch live MSE data. Falls back to mock on any error.
 * Sanity check: marquee must contain at least one row — empty payload
 * is treated as a fetch failure (mse.mn returned a stale-action-ID
 * homepage shell or the cron wrote an empty datasets file).
 */
export async function fetchMseData(): Promise<MseDataResult> {
  try {
    const res = await fetch(MSE_DATA_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);

    const raw = (await res.json()) as Record<string, unknown>;

    const marquee = normalizeMarquee(raw.marquee);
    if (marquee.length === 0) {
      throw new Error("No valid marquee rows in payload");
    }

    const result: MseDataResult = {
      marquee,
      stockAmount: normalizeStockAmount(raw.stock_amount),
      stockUp: normalizeStockMovers(raw.stock_up),
      stockDown: normalizeStockMovers(raw.stock_down),
      comexTrade: normalizeComexTrade(raw.comex_trade),
      mseAList: normalizeListedCompany(raw.mseA_list),
      mseBList: normalizeListedCompany(raw.mseB_list),
      top20List: normalizeTop20(raw.top20_list),
      source: "live",
      fetchedAt: new Date(),
    };

    // Join marquee prices into directory + amount datasets by symbol.
    // Marquee remains the single source of truth for live prices; rows
    // whose symbol is absent from marquee fall back to null.
    const priceBySymbol = new Map<string, number>();
    for (const r of result.marquee) priceBySymbol.set(r.symbol, r.price);
    const attach = <T extends { symbol: string }>(rows: T[]): (T & { price: number | null })[] =>
      rows.map((r) => ({ ...r, price: priceBySymbol.get(r.symbol) ?? null }));
    result.top20List = attach(result.top20List);
    result.mseAList = attach(result.mseAList);
    result.mseBList = attach(result.mseBList);
    result.stockAmount = attach(result.stockAmount);

    if (typeof raw.fetched_at_mnt === "string") result.fetchedAtMnt = raw.fetched_at_mnt;
    if (typeof raw.action_id_used === "string") result.actionIdUsed = raw.action_id_used;
    if (typeof raw.rediscovered === "boolean") result.rediscovered = raw.rediscovered;
    if (Array.isArray(raw.errors)) {
      const errs = raw.errors.filter((e): e is string => typeof e === "string");
      if (errs.length > 0) result.errors = errs;
    }

    return result;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return getMockResult(message);
  }
}

// =============================================================================
// Orange News — TypeScript Type Definitions
// =============================================================================
// Author: Azurise AI Master Architect
// Purpose: Type-safe shape for Orange News content from automation repo
// =============================================================================

// -----------------------------------------------------------------------------
// 1. Raw types — direct mirror of translated_posts.json structure
// -----------------------------------------------------------------------------

export type RawCategory =
  | "AI"
  | "tech"
  | "finance"
  | "crypto"
  | "business"
  | "economy"
  | "mongolia"
  | "market_watch";

export type PostType = "news" | "market_watch";

/** Direct mirror of a single post from translated_posts.json */
export interface OrangeNewsPost {
  category: RawCategory;
  badge: string;
  headline: string;
  image_caption?: string;
  post_text: string;
  body_only?: string;
  full_post: string;
  dynamic_hashtag?: string;
  key_numbers?: string[];
  hashtags: string[];
  original_url: string;
  original_title: string;
  url?: string;
  source: string;
  score: number;
  type: PostType;
  is_market_watch: boolean;
  use_market_watch_image?: boolean;
  image_path?: string;
}

// -----------------------------------------------------------------------------
// 2. Normalized types for website components
// -----------------------------------------------------------------------------

/** UI-friendly category labels in Mongolian Cyrillic */
export type DisplayCategory =
  | "САНХҮҮ"
  | "ТЕХНОЛОГИ"
  | "ЭДИЙН ЗАСАГ"
  | "КРИПТО"
  | "AI"
  | "БИЗНЕС"
  | "МОНГОЛ"
  | "САНАЛ БОДОЛ";

/** Visual pattern variants — matches mock-data.ts existing patterns */
export type ArticlePattern =
  | "chart"
  | "circuit"
  | "spark"
  | "pulse"
  | "cube"
  | "coin";

/** Normalized article — consumed by Hero, SecondaryArticles, ArticleFeed */
export interface Article {
  id: string;
  slug: string;
  category: DisplayCategory;
  headline: string;
  excerpt: string;
  body: string;
  source: string;
  sourceUrl: string;
  publishedAt: Date;
  timeAgo: string;
  readTime: number;
  score: number;
  pattern: ArticlePattern;
  hashtags: string[];
  isMarketWatch: boolean;
}

// -----------------------------------------------------------------------------
// 3. Article fetcher response
// -----------------------------------------------------------------------------

export interface FetchOrangeNewsResult {
  articles: Article[];
  source: "live" | "mock";
  fetchedAt: Date;
  error?: string;
}

// -----------------------------------------------------------------------------
// 4. Market data types — for /markets/[ticker] routes + TickerBar
// -----------------------------------------------------------------------------

export type AssetClass = "index" | "crypto" | "fx" | "commodity";

/** Single market instrument — keyed by canonical lowercase slug */
export interface MarketInstrument {
  slug: string;        // URL-safe: "spx", "btc", "mntusd"
  symbol: string;      // Display: "S&P 500", "BTC", "MNT/USD"
  name: string;        // Long form: "S&P 500 Index", "Bitcoin"
  asset: AssetClass;
  price: number;       // Current price
  change: number;      // Absolute change today
  changePct: number;   // Percent change today
  history1w: number[]; // 7 closes (oldest first, most recent last)
  history1m: number[]; // 30 closes
  // Optional stats — populated when known, undefined otherwise
  high52w?: number;
  low52w?: number;
  dayHigh?: number;
  dayLow?: number;
  prevClose?: number;
  volume24h?: number;  // crypto/stock specific
  marketCap?: number;  // crypto specific
  lastUpdated?: string; // ISO 8601 timestamp — when backend pushed this snapshot
}

export interface MarketDataResult {
  instruments: Record<string, MarketInstrument>; // keyed by slug
  source: "live" | "mock";
  fetchedAt: Date;
  error?: string;
}

// -----------------------------------------------------------------------------
// 5. MSE (Mongolian Stock Exchange) data types — Phase 6.2 backend
// -----------------------------------------------------------------------------
// Canonical shape: docs/mse_phase6.2_endpoint.md in orange-news-automation.
// 8 datasets fetched twice daily via cron from mse.mn Server Actions.
// Field names normalized at the boundary in fetch-mse-data.ts:
//   change_pct  → changePct   |  change_abs → changeAbs
//   amount_mnt  → amountMnt   |  logo_url   → logoUrl
//   main_type   → mainType    |  started_at → startedAt
//   min_price   → minPrice
// -----------------------------------------------------------------------------

export type MseDirection = "up" | "down" | "flat";

/** Marquee ribbon row — broadest price coverage (61 symbols). */
export interface MseMarqueeRow {
  symbol: string;
  price: number;
  changePct: number;
  changeAbs: number;
  direction: MseDirection;
}

/** Common shape across stock_up / stock_down / stock_amount datasets. */
export interface MseStockRow {
  symbol: string;
  name: string;
  code: number;
  logoUrl: string;
  changePct: number;
  changeAbs: number;
  direction: MseDirection;
}

/** Top gainer / top loser row (stock_up + stock_down). */
export interface MseStockMover extends MseStockRow {
  price: number;
}

/** Most-active-by-amount row (stock_amount, MNT volume). */
export interface MseStockAmount extends MseStockRow {
  amountMnt: number;
  /** Joined from marquee at fetch time; null when symbol absent from marquee. */
  price?: number | null;
}

/** Mining / commodity exchange (Comex) trade record. */
export interface MseComexTrade {
  id: number;
  mainType: string;   // e.g. "Нүүрс" (Coal)
  category: string;   // sub-classification
  seller: string;
  startedAt: string;  // ISO 8601 with Asia/Ulaanbaatar offset
  minPrice: number;
  price: number;
  currency: string;   // "CNY" | "USD" | "MNT" | etc.
  changeAbs: number;
  changePct: number;
  direction: MseDirection;
}

/** Top-20 index member — directory row. Price joined from marquee at fetch time. */
export interface MseTop20Member {
  row: number;
  symbol: string;
  name: string;
  code: number;
  /** Joined from marquee at fetch time; null when symbol absent from marquee. */
  price?: number | null;
}

/** A-board / B-board listed company — directory row. Price joined from marquee at fetch time. */
export interface MseListedCompany {
  row: number;
  symbol: string;
  name: string;
  code: number;
  /** Joined from marquee at fetch time; null when symbol absent from marquee. */
  price?: number | null;
}

/** Aggregate fetcher result (mirrors MarketDataResult envelope). */
export interface MseDataResult {
  marquee: MseMarqueeRow[];
  stockAmount: MseStockAmount[];
  stockUp: MseStockMover[];
  stockDown: MseStockMover[];
  comexTrade: MseComexTrade[];
  mseAList: MseListedCompany[];
  mseBList: MseListedCompany[];
  top20List: MseTop20Member[];
  source: "live" | "mock";
  fetchedAt: Date;
  fetchedAtMnt?: string;   // ISO 8601 +08:00 from backend
  actionIdUsed?: string;   // backend operator visibility
  rediscovered?: boolean;  // backend operator visibility
  errors?: string[];       // per-dataset failures from backend
  error?: string;          // frontend fetch error (mock-fallback reason)
}

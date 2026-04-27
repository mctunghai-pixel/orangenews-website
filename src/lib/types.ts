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
// 3. Fetcher response types
// -----------------------------------------------------------------------------

export interface FetchOrangeNewsResult {
  articles: Article[];
  source: "live" | "mock";
  fetchedAt: Date;
  error?: string;
}

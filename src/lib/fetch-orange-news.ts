// =============================================================================
// Orange News — Live Data Fetcher
// =============================================================================
// Author: Azurise AI Master Architect
// Purpose: Fetch translated_posts.json from automation repo, normalize to
//          Article[] for website components. Falls back to mock data on error.
// =============================================================================

import type {
  Article,
  ArticlePattern,
  DisplayCategory,
  FetchOrangeNewsResult,
  OrangeNewsPost,
  RawCategory,
} from "./types";
import { feedArticles } from "./mock-data";
import type { FeedArticle } from "./mock-data";
import { slugify } from "./slug";

// -----------------------------------------------------------------------------
// 1. Constants
// -----------------------------------------------------------------------------

/** GitHub raw URL — translated_posts.json from orange-news-automation repo */
const ORANGE_NEWS_JSON_URL =
  "https://raw.githubusercontent.com/mctunghai-pixel/orange-news-automation/main/translated_posts.json";

/** ISR revalidation interval — 30 minutes (Vercel free tier friendly) */
const REVALIDATE_SECONDS = 1800;

/** Average reading speed in words per minute (Mongolian Cyrillic) */
const WORDS_PER_MINUTE = 200;

// -----------------------------------------------------------------------------
// 2. Category mapping — RawCategory → DisplayCategory
// -----------------------------------------------------------------------------

const CATEGORY_MAP: Record<RawCategory, DisplayCategory> = {
  AI: "AI",
  tech: "ТЕХНОЛОГИ",
  finance: "САНХҮҮ",
  crypto: "КРИПТО",
  business: "БИЗНЕС",
  economy: "ЭДИЙН ЗАСАГ",
  market_watch: "САНХҮҮ", // fallback (filtered out anyway)
};

function mapCategory(raw: RawCategory): DisplayCategory {
  return CATEGORY_MAP[raw] ?? "САНХҮҮ";
}

// -----------------------------------------------------------------------------
// 3. Mock data category mapping — Category → DisplayCategory (adapter)
// -----------------------------------------------------------------------------

const MOCK_CATEGORY_MAP: Record<string, DisplayCategory> = {
  MARKETS: "САНХҮҮ",
  TECH: "ТЕХНОЛОГИ",
  CRYPTO: "КРИПТО",
  MACRO: "ЭДИЙН ЗАСАГ",
  BUSINESS: "БИЗНЕС",
  MONGOLIA: "МОНГОЛ",
};

function mapMockCategory(cat: string): DisplayCategory {
  return MOCK_CATEGORY_MAP[cat] ?? "САНХҮҮ";
}

// -----------------------------------------------------------------------------
// 4. Pattern selection — pick visual variant based on category + index
// -----------------------------------------------------------------------------

const PATTERN_BY_CATEGORY: Record<DisplayCategory, ArticlePattern> = {
  САНХҮҮ: "chart",
  ТЕХНОЛОГИ: "circuit",
  "ЭДИЙН ЗАСАГ": "pulse",
  КРИПТО: "coin",
  AI: "spark",
  БИЗНЕС: "cube",
  МОНГОЛ: "pulse",
  "САНАЛ БОДОЛ": "spark",
};

function pickPattern(category: DisplayCategory): ArticlePattern {
  return PATTERN_BY_CATEGORY[category] ?? "chart";
}

// -----------------------------------------------------------------------------
// 5. Helper utilities
// -----------------------------------------------------------------------------

/** Generate stable ID from URL or fallback to index */
function generateId(url: string | undefined, idx: number): string {
  if (url) {
    // Use last segment of URL path as ID seed
    const segments = url.split("/").filter(Boolean);
    const last = segments[segments.length - 1] || "";
    if (last.length > 0) {
      return `live-${idx}-${last.substring(0, 24).replace(/[^a-z0-9]/gi, "")}`;
    }
  }
  return `live-${idx}`;
}

/** Convert Date to Mongolian Cyrillic relative time */
function timeAgoMongolian(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);

  if (diffMin < 1) return "Сая";
  if (diffMin < 60) return `${diffMin} минутын өмнө`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr} цагийн өмнө`;
  const diffDay = Math.floor(diffHr / 24);
  if (diffDay === 1) return "Өчигдөр";
  if (diffDay < 7) return `${diffDay} өдрийн өмнө`;
  return date.toLocaleDateString("mn-MN");
}

/** Estimate read time in minutes based on body word count */
function estimateReadTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

// -----------------------------------------------------------------------------
// 6. Mappers
// -----------------------------------------------------------------------------

/** Map raw OrangeNewsPost (from JSON) → normalized Article */
function mapPost(post: OrangeNewsPost, idx: number): Article {
  const category = mapCategory(post.category);
  const body = post.body_only || post.full_post || post.post_text || "";
  const sourceUrl = post.url || post.original_url || "https://www.orangenews.mn";
  const publishedAt = new Date(); // JSON has no timestamp; use fetch time

  return {
    id: generateId(sourceUrl, idx),
    slug: slugify(post.original_title || post.headline || `post-${idx}`),
    category,
    headline: post.headline || post.original_title || "Untitled",
    excerpt: post.post_text?.substring(0, 200) || "",
    body,
    source: post.source || "Orange News",
    sourceUrl,
    publishedAt,
    timeAgo: timeAgoMongolian(publishedAt),
    readTime: estimateReadTime(body),
    score: post.score ?? 0,
    pattern: pickPattern(category),
    hashtags: post.hashtags || [],
  };
}

/** Adapter: FeedArticle (mock) → Article (for fallback consistency) */
function feedArticleToArticle(fa: FeedArticle, idx: number): Article {
  const category = mapMockCategory(fa.category);
  return {
    id: fa.id || `mock-${idx}`,
    slug: slugify(fa.headline || `mock-${idx}`),
    category,
    headline: fa.headline,
    excerpt: fa.excerpt,
    body: fa.excerpt, // mock has no body, use excerpt
    source: fa.source,
    sourceUrl: "https://www.orangenews.mn",
    publishedAt: new Date(),
    timeAgo: fa.timeAgo,
    readTime: 3,
    score: 10 - idx,
    pattern: fa.pattern,
    hashtags: [],
  };
}

/** Build full mock fallback Article[] from feedArticles */
function getMockArticles(): Article[] {
  return feedArticles.map(feedArticleToArticle);
}

// -----------------------------------------------------------------------------
// 7. Main fetcher
// -----------------------------------------------------------------------------

/**
 * Fetch live news from automation repo. Falls back to mock data on any error.
 *
 * Phase 1: GitHub URL returns 404 (translated_posts.json not pushed yet)
 *          → catch block → mock fallback → website displays mock content
 * Phase 2: After enabling JSON push from automation repo
 *          → fetch succeeds → live Article[] returned
 */
export async function fetchOrangeNews(): Promise<FetchOrangeNewsResult> {
  const fetchedAt = new Date();

  try {
    const response = await fetch(ORANGE_NEWS_JSON_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const rawData = (await response.json()) as OrangeNewsPost[];

    if (!Array.isArray(rawData)) {
      throw new Error("Invalid JSON: expected array");
    }

    // Filter out market_watch posts (handled by dedicated MarketWatch widget)
    const newsPosts = rawData.filter((p) => p.type === "news");

    // Map raw posts → normalized Articles
    const articles = newsPosts
      .map((post, idx) => mapPost(post, idx))
      .sort((a, b) => b.score - a.score);

    return {
      articles,
      source: "live",
      fetchedAt,
    };
  } catch (error) {
    // Phase 1 expected behavior: fall back to mock
    const message = error instanceof Error ? error.message : String(error);
    return {
      articles: getMockArticles(),
      source: "mock",
      fetchedAt,
      error: message,
    };
  }
}

/** Get a single article by its slug - used by /articles/[slug] route */
export async function getPostBySlug(slug: string): Promise<Article | null> {
  const { articles } = await fetchOrangeNews();
  return articles.find((a) => a.slug === slug) ?? null;
}

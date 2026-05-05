// =============================================================================
// Orange News — Live Data Fetcher
// =============================================================================
// Author: Azurise AI Master Architect
// Purpose: Fetch translated_posts.json from automation repo, normalize to
//          Article[] for website components. Falls back to mock data on error.
// =============================================================================

import type {
  ArchiveDay,
  ArchiveIndexEntry,
  Article,
  ArticlePattern,
  DisplayCategory,
  FetchOrangeNewsOptions,
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

/** GitHub raw base URL for the daily archive (Phase 7.1). */
const ARCHIVE_BASE_URL =
  "https://raw.githubusercontent.com/mctunghai-pixel/orange-news-automation/main/archive";

/** Index manifest URL — `[{date, count}]` sorted desc by date. */
const ARCHIVE_INDEX_URL = `${ARCHIVE_BASE_URL}/index.json`;

/** Per-day snapshot URL builder. */
function archiveDayUrl(date: string): string {
  return `${ARCHIVE_BASE_URL}/posts_${date}.json`;
}

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
  mongolia: "МОНГОЛ",
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

/** Map raw OrangeNewsPost (from JSON) → normalized Article.
 *  publishedAt: when archive lookup is in play, callers pass the per-day
 *  snapshot date. Today-only path falls back to fetch time. */
function mapPost(post: OrangeNewsPost, idx: number, publishedAt: Date = new Date()): Article {
  const category = mapCategory(post.category);
  const body = post.body_only || post.full_post || post.post_text || "";
  const sourceUrl = post.url || post.original_url || "https://www.orangenews.mn";

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
    isMarketWatch: post.is_market_watch === true || post.type === "market_watch",
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
    isMarketWatch: false,
  };
}

/** Build full mock fallback Article[] from feedArticles */
function getMockArticles(): Article[] {
  return feedArticles.map(feedArticleToArticle);
}

// -----------------------------------------------------------------------------
// 7. Archive helpers (Phase 7.1)
// -----------------------------------------------------------------------------

/** Treat YYYY-MM-DD as start-of-day UTC — preserves date-bucket semantics
 *  across timezones for `Article.publishedAt` derived from archive metadata. */
function archiveDateToDate(date: string): Date {
  return new Date(`${date}T00:00:00Z`);
}

/** Fetch archive/index.json — sorted desc by date, throws on any failure. */
async function fetchArchiveIndex(): Promise<ArchiveIndexEntry[]> {
  const res = await fetch(ARCHIVE_INDEX_URL, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) throw new Error(`archive index HTTP ${res.status} ${res.statusText}`);
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("archive index: expected array");
  return data as ArchiveIndexEntry[];
}

/** Fetch a single per-day archive file. */
async function fetchArchiveDay(date: string): Promise<ArchiveDay> {
  const res = await fetch(archiveDayUrl(date), {
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) throw new Error(`archive ${date} HTTP ${res.status} ${res.statusText}`);
  const data = await res.json();
  if (!data || !Array.isArray(data.posts)) {
    throw new Error(`archive ${date}: invalid shape`);
  }
  return data as ArchiveDay;
}

// -----------------------------------------------------------------------------
// 8. Main fetcher
// -----------------------------------------------------------------------------

/**
 * Fetch live news from automation repo. Falls back to mock data on any error.
 *
 * Default behavior (no opts): reads today's `translated_posts.json` at HEAD —
 * preserves the original homepage feed contract.
 *
 * Archive mode (`opts.archiveDays = N`): fetches the index manifest, walks the
 * top-N most recent dates, unions their news posts, and sorts by score desc.
 * Used by /articles/[slug] (via getPostBySlug) and /rss.xml.
 */
export async function fetchOrangeNews(
  opts?: FetchOrangeNewsOptions,
): Promise<FetchOrangeNewsResult> {
  const fetchedAt = new Date();
  const archiveDays = opts?.archiveDays && opts.archiveDays > 0 ? opts.archiveDays : 0;

  try {
    type Bucket = { posts: OrangeNewsPost[]; publishedAt: Date };
    let buckets: Bucket[];

    if (archiveDays > 0) {
      const index = await fetchArchiveIndex();
      const wanted = index.slice(0, archiveDays);
      const days = await Promise.all(
        wanted.map((entry) => fetchArchiveDay(entry.date).catch(() => null)),
      );
      buckets = days
        .filter((d): d is ArchiveDay => d !== null)
        .map((d) => ({ posts: d.posts, publishedAt: archiveDateToDate(d.date) }));
      if (buckets.length === 0) throw new Error("archive: no days fetched");
    } else {
      const response = await fetch(ORANGE_NEWS_JSON_URL, {
        next: { revalidate: REVALIDATE_SECONDS },
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }
      const rawData = await response.json();
      if (!Array.isArray(rawData)) throw new Error("Invalid JSON: expected array");
      buckets = [{ posts: rawData as OrangeNewsPost[], publishedAt: fetchedAt }];
    }

    // Filter market_watch (handled by dedicated widget) + map across buckets.
    // Global idx ensures unique IDs across multi-day unions.
    const articles: Article[] = [];
    let globalIdx = 0;
    for (const bucket of buckets) {
      const newsPosts = bucket.posts.filter((p) => p.type === "news");
      for (const post of newsPosts) {
        articles.push(mapPost(post, globalIdx++, bucket.publishedAt));
      }
    }
    articles.sort((a, b) => b.score - a.score);

    return { articles, source: "live", fetchedAt };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      articles: getMockArticles(),
      source: "mock",
      fetchedAt,
      error: message,
    };
  }
}

/**
 * Get a single article by its slug — used by /articles/[slug] route.
 *
 * Strategy: today's HEAD first (fast, hot path). On miss, walk archive index
 * desc and search per-day files until found or exhausted. Returns null on
 * total miss (route maps null → notFound() → 404).
 */
export async function getPostBySlug(slug: string): Promise<Article | null> {
  const today = await fetchOrangeNews();
  const found = today.articles.find((a) => a.slug === slug);
  if (found) return found;

  try {
    const index = await fetchArchiveIndex();
    for (const entry of index) {
      try {
        const day = await fetchArchiveDay(entry.date);
        const dayDate = archiveDateToDate(day.date);
        const newsPosts = day.posts.filter((p) => p.type === "news");
        for (let i = 0; i < newsPosts.length; i++) {
          const article = mapPost(newsPosts[i], i, dayDate);
          if (article.slug === slug) return article;
        }
      } catch {
        // Skip unreadable day, try next.
      }
    }
  } catch {
    // Index unavailable (network down, 404). Fall through to null.
  }

  return null;
}

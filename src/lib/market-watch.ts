// =============================================================================
// Market Watch — daily financial briefing data layer
// =============================================================================
// Fetches Orange News' daily Market Watch post from translated_posts.json
// (typically index 0). Detection signals match fb_poster_live.py:find_market_watch
// (3-OR: is_market_watch flag, type, category). Returns null if not found or
// fetch fails — caller renders empty state.
//
// Image URL points to date-stamped GitHub raw asset (post_00_YYYYMMDD.png) which
// may 404 if the backend pipeline hasn't committed today's image yet. Caller
// should wire fallbackImageUrl (static thumbnail) via onError handler.
// =============================================================================

const ORANGE_NEWS_JSON_URL =
  "https://raw.githubusercontent.com/mctunghai-pixel/orange-news-automation/main/translated_posts.json";

const REVALIDATE_SECONDS = 1800;

const IMAGE_BASE =
  "https://raw.githubusercontent.com/mctunghai-pixel/orange-news-automation/main/assets/generated";

const FALLBACK_IMAGE_URL =
  "https://raw.githubusercontent.com/mctunghai-pixel/orange-news-automation/main/assets/market_watch_thumbnail.png";

export interface MarketWatch {
  date: string; // "2026.04.29" raw dotted format
  dateDisplay: string; // "2026 оны 4 сарын 29" Mongolian display
  dateCompact: string; // "20260429" filename format
  body: string; // post_text content (excludes Facebook footer)
  imageUrl: string; // Date-stamped GitHub raw URL (may 404)
  fallbackImageUrl: string; // Static thumbnail (always available)
  hashtags: string[];
}

interface RawPost {
  category?: string;
  type?: string;
  is_market_watch?: boolean;
  use_market_watch_image?: boolean;
  badge?: string;
  post_text?: string;
  full_post?: string;
  image_caption?: string;
  original_title?: string;
  hashtags?: string[];
}

function isMarketWatchPost(p: RawPost): boolean {
  return (
    p.is_market_watch === true ||
    p.type === "market_watch" ||
    p.category === "market_watch"
  );
}

function extractDate(post: RawPost): {
  raw: string;
  compact: string;
  display: string;
} {
  // Look for YYYY.MM.DD pattern in image_caption or original_title
  const source = post.image_caption ?? post.original_title ?? "";
  const match = source.match(/(\d{4})\.(\d{2})\.(\d{2})/);

  const today = new Date();
  const year = match?.[1] ?? String(today.getFullYear());
  const month = match?.[2] ?? String(today.getMonth() + 1).padStart(2, "0");
  const day = match?.[3] ?? String(today.getDate()).padStart(2, "0");

  return {
    raw: `${year}.${month}.${day}`,
    compact: `${year}${month}${day}`,
    display: `${year} оны ${parseInt(month, 10)} сарын ${parseInt(day, 10)}`,
  };
}

/** Fetch the latest Market Watch post — returns null on error or missing data. */
export async function getMarketWatch(): Promise<MarketWatch | null> {
  try {
    const res = await fetch(ORANGE_NEWS_JSON_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;

    const posts = (await res.json()) as unknown;
    if (!Array.isArray(posts)) return null;

    const mw = (posts as RawPost[]).find(isMarketWatchPost);
    if (!mw) return null;

    const date = extractDate(mw);
    // Prefer post_text (clean body); full_post includes Facebook footer
    const body = mw.post_text ?? mw.full_post ?? "";
    if (!body.trim()) return null;

    return {
      date: date.raw,
      dateDisplay: date.display,
      dateCompact: date.compact,
      body,
      imageUrl: `${IMAGE_BASE}/post_00_${date.compact}.png`,
      fallbackImageUrl: FALLBACK_IMAGE_URL,
      hashtags: mw.hashtags ?? [],
    };
  } catch {
    return null;
  }
}

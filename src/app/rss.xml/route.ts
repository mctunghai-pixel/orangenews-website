// =============================================================================
// RSS 2.0 feed route — /rss.xml
// =============================================================================
// Server-side route handler that emits RSS 2.0 XML for Orange News articles.
// Pulls top 20 by score (news-only filter), wraps Cyrillic content in CDATA,
// formats pubDate per RFC 822. Cached for 1 hour to balance freshness/cost.
// =============================================================================

import { fetchOrangeNews } from "@/lib/fetch-orange-news";

export const revalidate = 3600; // 1 hour ISR

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://orangenews-website.vercel.app");

const FEED_TITLE = "Orange News";
const FEED_DESCRIPTION =
  "Bloomberg-style Mongolian financial news — санхүү, технологи, эдийн засаг";
const FEED_LANGUAGE = "mn";

/** Escape XML special chars in attribute / text contexts (NOT inside CDATA). */
function xmlEscape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Wrap content in CDATA, escaping any inner ]]> sequence by splitting it. */
function cdata(s: string): string {
  return `<![CDATA[${s.replace(/\]\]>/g, "]]]]><![CDATA[>")}]]>`;
}

/** RFC 822 date — required by RSS 2.0 spec for pubDate / lastBuildDate. */
function rfc822(date: Date): string {
  return date.toUTCString();
}

/** Truncate to N chars on word boundary, append ellipsis if truncated. */
function truncateForDescription(s: string, max = 300): string {
  const trimmed = s.trim().replace(/\s+/g, " ");
  if (trimmed.length <= max) return trimmed;
  const slice = trimmed.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(" ");
  return (lastSpace > 0 ? slice.slice(0, lastSpace) : slice) + "…";
}

export async function GET() {
  const { articles } = await fetchOrangeNews();

  const items = articles
    .filter((a) => !a.isMarketWatch)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20);

  const buildDate = rfc822(new Date());

  const itemsXml = items
    .map((a) => {
      const link = `${SITE_URL}/articles/${a.slug}`;
      const description = truncateForDescription(a.body || a.excerpt || "");
      const pubDate = rfc822(
        a.publishedAt instanceof Date ? a.publishedAt : new Date(a.publishedAt),
      );
      return `    <item>
      <title>${cdata(a.headline)}</title>
      <link>${xmlEscape(link)}</link>
      <guid isPermaLink="true">${xmlEscape(link)}</guid>
      <description>${cdata(description)}</description>
      <category>${cdata(a.category)}</category>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${cdata(FEED_TITLE)}</title>
    <link>${xmlEscape(SITE_URL)}</link>
    <description>${cdata(FEED_DESCRIPTION)}</description>
    <language>${FEED_LANGUAGE}</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${xmlEscape(`${SITE_URL}/rss.xml`)}" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

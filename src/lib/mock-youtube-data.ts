// =============================================================================
// Mock YouTube video feed — Phase 7.3 frontend fallback
// =============================================================================
// Used by fetch-youtube.ts when the live youtube_data.json fetch fails (404,
// network outage, malformed payload, etc.). Mirrors the production schema so
// the homepage "Шууд үзэх" section renders something plausible offline.
//
// Six entries — two from each of three flagship channels — keeps the homepage
// 6-card grid populated without any single channel dominating the fallback.
// =============================================================================

import type { YouTubeVideo } from "./types";

const MOCK_FETCHED_AT = new Date("2026-05-06T10:00:00Z");

export const mockYouTubeVideos: YouTubeVideo[] = [
  {
    id: "mock-bb-1",
    title: "Bloomberg Daybreak Europe: Market Open Coverage",
    description:
      "Live coverage of European market open with Anna Edwards and Mark Cudmore. Today's focus: ECB rate path, energy markets, and the latest from earnings season.",
    channelId: "UCIALMKvObZNtJ6AmdCLP7Lg",
    channelTitle: "Bloomberg Television",
    publishedAt: new Date("2026-05-06T05:00:00Z"),
    thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    durationSeconds: 2745,
    durationIso: "PT45M45S",
    watchUrl: "https://www.youtube.com/watch?v=mock-bb-1",
    mongoliaRelevant: false,
  },
  {
    id: "mock-cnbc-1",
    title: "Squawk Box: Fed Decision Day Preview",
    description:
      "Andrew Ross Sorkin and the Squawk Box team set up the Fed's policy decision with strategists from Goldman Sachs and Morgan Stanley.",
    channelId: "UCvJJ_dzjViJCoLf5uKUTwoA",
    channelTitle: "CNBC",
    publishedAt: new Date("2026-05-06T04:30:00Z"),
    thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    durationSeconds: 1830,
    durationIso: "PT30M30S",
    watchUrl: "https://www.youtube.com/watch?v=mock-cnbc-1",
    mongoliaRelevant: false,
  },
  {
    id: "mock-wb-1",
    title: "Mongolia Economic Update: Spring 2026 Outlook",
    description:
      "World Bank country economist presents the latest macroeconomic outlook for Mongolia, covering mining export trends, fiscal policy, and inflation risks.",
    channelId: "UCE9mrcoX-oE-2f1BL-iPPoQ",
    channelTitle: "World Bank Group",
    publishedAt: new Date("2026-05-05T14:00:00Z"),
    thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    durationSeconds: 1525,
    durationIso: "PT25M25S",
    watchUrl: "https://www.youtube.com/watch?v=mock-wb-1",
    mongoliaRelevant: true,
  },
  {
    id: "mock-bb-2",
    title: "Markets in Minutes: Asian Session Wrap",
    description:
      "End-of-day summary of Asian market movers, with focus on Tokyo, Hong Kong, and Singapore. Covers the Nikkei, Hang Seng, and key currency pairs.",
    channelId: "UCIALMKvObZNtJ6AmdCLP7Lg",
    channelTitle: "Bloomberg Television",
    publishedAt: new Date("2026-05-05T10:00:00Z"),
    thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    durationSeconds: 615,
    durationIso: "PT10M15S",
    watchUrl: "https://www.youtube.com/watch?v=mock-bb-2",
    mongoliaRelevant: false,
  },
  {
    id: "mock-cnbc-2",
    title: "Mad Money: Cramer's Take on Tech Earnings Beat",
    description:
      "Jim Cramer breaks down the latest tech sector earnings, with stock picks across semiconductors, cloud, and AI infrastructure plays.",
    channelId: "UCvJJ_dzjViJCoLf5uKUTwoA",
    channelTitle: "CNBC",
    publishedAt: new Date("2026-05-05T22:00:00Z"),
    thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    durationSeconds: 2440,
    durationIso: "PT40M40S",
    watchUrl: "https://www.youtube.com/watch?v=mock-cnbc-2",
    mongoliaRelevant: false,
  },
  {
    id: "mock-wb-2",
    title: "Climate Finance for Emerging Markets: Panel Discussion",
    description:
      "World Bank IFC panel on mobilizing climate finance in emerging markets. Speakers from MIGA, GCF, and bilateral development finance institutions.",
    channelId: "UCE9mrcoX-oE-2f1BL-iPPoQ",
    channelTitle: "World Bank Group",
    publishedAt: new Date("2026-05-04T16:30:00Z"),
    thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    durationSeconds: 3215,
    durationIso: "PT53M35S",
    watchUrl: "https://www.youtube.com/watch?v=mock-wb-2",
    mongoliaRelevant: false,
  },
];

export const mockFetchedAt = MOCK_FETCHED_AT;

// =============================================================================
// Orange News — YouTube Video Feed Fetcher (Phase 7.3 Checkpoint B)
// =============================================================================
// Author: Azurise AI Master Architect
// Purpose: Fetch youtube_data.json from automation repo, normalize the raw
//          snake_case shape into the YouTubeVideo[] consumed by the homepage
//          "Шууд үзэх" section + future /video archive route. Mock fallback
//          on any error so the homepage never renders an empty section.
// =============================================================================

import type {
  FetchYouTubeResult,
  RawYouTubeData,
  RawYouTubeVideo,
  YouTubeVideo,
} from "./types";
import { mockYouTubeVideos } from "./mock-youtube-data";

// -----------------------------------------------------------------------------
// 1. Constants
// -----------------------------------------------------------------------------

/** GitHub raw URL — youtube_data.json from orange-news-automation repo. */
const YOUTUBE_DATA_URL =
  "https://raw.githubusercontent.com/mctunghai-pixel/orange-news-automation/main/youtube_data.json";

/** ISR revalidation interval — 30 minutes (matches the existing news fetcher).
 *  Backend cron is 2-hourly so this is over-provisioned, but keeps cadence
 *  consistent across all live-data routes. */
const REVALIDATE_SECONDS = 1800;

// -----------------------------------------------------------------------------
// 2. Mappers
// -----------------------------------------------------------------------------

/** Convert backend snake_case video → frontend camelCase normalized shape. */
function mapVideo(raw: RawYouTubeVideo): YouTubeVideo {
  return {
    id: raw.id,
    title: raw.title,
    description: raw.description,
    channelId: raw.channel_id,
    channelTitle: raw.channel_title,
    publishedAt: new Date(raw.published_at),
    thumbnailUrl: raw.thumbnail_url,
    durationSeconds: raw.duration_seconds,
    durationIso: raw.duration_iso,
    watchUrl: raw.watch_url,
    mongoliaRelevant: raw.mongolia_relevant,
  };
}

// -----------------------------------------------------------------------------
// 3. Main fetcher
// -----------------------------------------------------------------------------

/**
 * Fetch the curated YouTube video feed from the automation repo. Falls back to
 * mock data on any error. Backend writes youtube_data.json every 2 hours via
 * GHA cron (`.github/workflows/youtube_update.yml`); the array is already
 * filtered (>3 min, deny-list applied) and sorted recency-desc before publish.
 *
 * Consumers (homepage card grid, /video archive route) take their own slice
 * — this fetcher does no slicing or further filtering.
 */
export async function fetchYouTube(): Promise<FetchYouTubeResult> {
  const fetchedAt = new Date();

  try {
    const response = await fetch(YOUTUBE_DATA_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const raw = (await response.json()) as RawYouTubeData;

    if (!raw || !Array.isArray(raw.videos)) {
      throw new Error("Invalid youtube_data.json: expected videos array");
    }

    const videos = raw.videos.map(mapVideo);

    return {
      videos,
      source: "live",
      fetchedAt,
      fetchedAtMnt: raw.fetched_at_mnt,
      channelsProcessed: raw.channels_processed,
      errors: raw.errors,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      videos: mockYouTubeVideos,
      source: "mock",
      fetchedAt,
      error: message,
    };
  }
}

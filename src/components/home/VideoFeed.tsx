// =============================================================================
// VideoFeed — Phase 7.3 Checkpoint C
// =============================================================================
// Replaces the hardcoded LiveEvent placeholder card with a dynamic stack of
// up to 6 video cards from the curated YouTube feed (Bloomberg Television,
// WSJ, Reuters, Financial Times, CNBC, World Bank Group). Lives in the
// homepage right-rail aside (col-span-4 on lg) alongside MostRead +
// Newsletter.
//
// Per Phase 7.3 locked decisions: thumbnail + duration + title + channel
// badge; "Watch on YouTube" click-out CTA (no iframe embed — page weight +
// autoplay + cookie + GDPR concerns). Backend already filters >3min and
// applies the deny-list, so this consumer just slices the top N by recency.
// =============================================================================

import { ExternalLink, Radio } from "lucide-react";
import { fetchYouTube } from "@/lib/fetch-youtube";
import type { YouTubeVideo } from "@/lib/types";

const MAX_VIDEOS = 6;

/** Format a seconds count as a YouTube-style M:SS or H:MM:SS string. */
function formatDuration(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  const mm = minutes.toString().padStart(hours > 0 ? 2 : 1, "0");
  const ss = seconds.toString().padStart(2, "0");
  return hours > 0 ? `${hours}:${mm}:${ss}` : `${mm}:${ss}`;
}

function VideoCard({ video }: { video: YouTubeVideo }) {
  const duration = formatDuration(video.durationSeconds);
  return (
    <li>
      <a
        href={video.watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block py-3 transition-colors hover:bg-breaking"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-foreground/5">
          {video.thumbnailUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={video.thumbnailUrl}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
            />
          ) : null}
          <span className="absolute bottom-1.5 right-1.5 rounded-sm bg-foreground/85 px-1.5 py-0.5 font-mono text-[10px] font-semibold tabular-nums text-background">
            {duration}
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-accent">
            {video.channelTitle}
          </span>
          {video.mongoliaRelevant && (
            <span className="font-sans text-[9px] font-semibold uppercase tracking-wider text-up">
              МОНГОЛ
            </span>
          )}
        </div>
        <h3 className="mt-1 line-clamp-2 font-serif-display text-[14px] md:text-[15px] font-bold leading-snug text-foreground group-hover:text-accent">
          {video.title}
        </h3>
      </a>
    </li>
  );
}

export async function VideoFeed() {
  const { videos, source } = await fetchYouTube();
  const items = videos.slice(0, MAX_VIDEOS);

  if (items.length === 0) return null;

  return (
    <section
      aria-labelledby="video-feed-heading"
      className="mt-8"
    >
      <div className="flex items-center gap-3 border-b-2 border-foreground pb-2">
        <h2
          id="video-feed-heading"
          className="font-serif-display text-[18px] md:text-[20px] font-bold"
        >
          Шууд үзэх
        </h2>
        <span className="inline-flex items-center gap-1 bg-accent px-1.5 py-0.5 font-sans text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-background">
          <Radio className="h-2.5 w-2.5" aria-hidden />
          Видео
        </span>
      </div>
      <ol className="divide-y divide-border border-b border-border">
        {items.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </ol>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-wider text-foreground hover:text-accent"
      >
        YouTube-руу үсрэх
        <ExternalLink className="h-3 w-3" aria-hidden />
      </a>
      {source === "mock" && (
        <p className="mt-2 font-mono text-[10px] text-muted">
          Жагсаалт түр зуурын — амьд эх үүсвэртэй холбогдож чадсангүй.
        </p>
      )}
    </section>
  );
}

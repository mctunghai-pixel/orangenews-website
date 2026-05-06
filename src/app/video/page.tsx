// =============================================================================
// /video — Phase 7.3 Checkpoint D
// =============================================================================
// Full archive view for the curated YouTube video feed. Server component;
// channel filter via ?channel=UC... query param (locked decision: channel-
// filter only for v1, no date / topic filters).
//
// Layout: 1 column on mobile (<md), 2 cols on md, 3 cols on lg+. Filter row
// is a horizontal scroll on mobile, single line on md+. Each card mirrors the
// homepage VideoFeed card style — thumbnail with duration overlay, channel
// badge, optional МОНГОЛ accent, 2-line clamped title — but ungrouped (no
// outer <ol> + dividers, since the grid layout provides visual separation).
// =============================================================================

import Link from "next/link";
import type { Metadata } from "next";
import { ExternalLink, Radio } from "lucide-react";
import { fetchYouTube } from "@/lib/fetch-youtube";
import type { YouTubeVideo } from "@/lib/types";

export const metadata: Metadata = {
  title: "Видео архив — Orange News",
  description:
    "Bloomberg Television, WSJ, Reuters, Financial Times, CNBC, World Bank — санхүүгийн шууд видео архив.",
};

interface PageProps {
  searchParams: Promise<{ channel?: string }>;
}

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
    <a
      href={video.watchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block transition-colors hover:bg-breaking"
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
        <span className="absolute bottom-2 right-2 rounded-sm bg-foreground/85 px-1.5 py-0.5 font-mono text-[11px] font-semibold tabular-nums text-background">
          {duration}
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2 px-1">
        <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-accent">
          {video.channelTitle}
        </span>
        {video.mongoliaRelevant && (
          <span className="font-sans text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-up">
            МОНГОЛ
          </span>
        )}
      </div>
      <h3 className="mt-1 line-clamp-2 px-1 pb-3 font-serif-display text-[15px] md:text-[16px] font-bold leading-snug text-foreground group-hover:text-accent">
        {video.title}
      </h3>
    </a>
  );
}

interface ChannelMeta {
  id: string;
  title: string;
  count: number;
}

function deriveChannels(videos: YouTubeVideo[]): ChannelMeta[] {
  const map = new Map<string, ChannelMeta>();
  for (const v of videos) {
    const existing = map.get(v.channelId);
    if (existing) {
      existing.count += 1;
    } else {
      map.set(v.channelId, { id: v.channelId, title: v.channelTitle, count: 1 });
    }
  }
  return Array.from(map.values()).sort((a, b) => a.title.localeCompare(b.title));
}

function FilterChip({
  href,
  label,
  count,
  active,
}: {
  href: string;
  label: string;
  count: number;
  active: boolean;
}) {
  const base =
    "shrink-0 inline-flex items-center gap-2 border px-3 py-1.5 font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-wider transition-colors";
  const cls = active
    ? `${base} border-foreground bg-foreground text-background`
    : `${base} border-border text-foreground hover:border-foreground hover:text-accent`;
  return (
    <Link href={href} className={cls}>
      {label}
      <span className="font-mono tabular-nums opacity-70">{count}</span>
    </Link>
  );
}

export default async function VideoPage({ searchParams }: PageProps) {
  const { channel: channelFilter } = await searchParams;
  const { videos, source, fetchedAtMnt } = await fetchYouTube();

  const channels = deriveChannels(videos);
  const filtered = channelFilter
    ? videos.filter((v) => v.channelId === channelFilter)
    : videos;

  const activeChannelTitle = channelFilter
    ? channels.find((c) => c.id === channelFilter)?.title
    : undefined;

  return (
    <main className="mx-auto w-full max-w-[1400px] flex-1 px-4 pt-6 pb-12 md:px-6 md:pt-8 md:pb-16">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
      >
        ← Нүүр хуудас руу буцах
      </Link>

      <header className="mb-8 border-b-2 border-foreground pb-3">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-serif-display text-[28px] md:text-[40px] font-bold leading-tight">
            Видео архив
          </h1>
          <span className="inline-flex items-center gap-1 bg-accent px-2 py-0.5 font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-background">
            <Radio className="h-2.5 w-2.5" aria-hidden />
            Шууд
          </span>
        </div>
        <p className="mt-2 font-sans text-[12px] md:text-[13px] text-muted">
          {filtered.length} видео
          {activeChannelTitle && <> · {activeChannelTitle}</>}
          {fetchedAtMnt && (
            <span className="ml-2 font-mono text-muted/70">
              ({fetchedAtMnt.slice(0, 16).replace("T", " ")})
            </span>
          )}
        </p>
      </header>

      {channels.length > 0 && (
        <nav
          aria-label="Channel filter"
          className="mb-8 flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-x-visible"
        >
          <FilterChip
            href="/video"
            label="Бүгд"
            count={videos.length}
            active={!channelFilter}
          />
          {channels.map((c) => (
            <FilterChip
              key={c.id}
              href={`/video?channel=${encodeURIComponent(c.id)}`}
              label={c.title}
              count={c.count}
              active={channelFilter === c.id}
            />
          ))}
        </nav>
      )}

      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-serif-body text-[16px] text-muted">
            {channelFilter
              ? "Энэ сувгаас одоогоор видео байхгүй байна."
              : "Видео жагсаалт хоосон байна."}
          </p>
          {channelFilter && (
            <Link
              href="/video"
              className="mt-4 inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold uppercase tracking-wider text-accent hover:underline"
            >
              Бүх видео харах
            </Link>
          )}
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {filtered.map((v) => (
            <li key={v.id}>
              <VideoCard video={v} />
            </li>
          ))}
        </ul>
      )}

      <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
        >
          YouTube-руу үсрэх
          <ExternalLink className="h-3 w-3" aria-hidden />
        </a>
        {source === "mock" && (
          <p className="font-mono text-[10px] text-muted">
            Жагсаалт түр зуурын — амьд эх үүсвэртэй холбогдож чадсангүй.
          </p>
        )}
      </footer>
    </main>
  );
}

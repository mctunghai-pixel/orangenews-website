import { breaking } from "@/lib/mock-data";

export function BreakingStrip() {
  if (!breaking) return null;

  return (
    <aside
      aria-label="Чухал мэдээ"
      className="border-y border-breaking-border bg-breaking"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-2 md:px-6 md:py-2.5">
        <div className="flex items-center gap-2 md:gap-3">
          <span className="whitespace-nowrap font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-accent">
            Чухал
          </span>
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent animate-pulse-dot"
            aria-hidden
          />
          <p className="min-w-0 truncate font-serif-body text-[12px] md:text-[13px] leading-snug text-foreground">
            <span className="font-semibold">{breaking.headline}</span>
            <span className="hidden text-muted md:inline"> — {breaking.summary}</span>
          </p>
        </div>
      </div>
    </aside>
  );
}

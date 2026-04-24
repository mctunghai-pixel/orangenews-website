import { Play, Radio } from "lucide-react";
import { liveEvent } from "@/lib/mock-data";

export function LiveEvent() {
  return (
    <section
      aria-labelledby="live-heading"
      className="mt-6 border border-border p-5"
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="inline-flex items-center gap-1 bg-accent px-2 py-0.5 font-sans text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-background">
          <Radio className="h-2.5 w-2.5" aria-hidden />
          Шууд
        </span>
        <span className="font-mono text-[10px] md:text-[11px] text-muted tabular-nums">
          {liveEvent.scheduledFor}
        </span>
      </div>
      <h3
        id="live-heading"
        className="font-serif-display text-[16px] md:text-[17px] font-bold leading-snug text-foreground"
      >
        {liveEvent.title}
      </h3>
      <p className="mt-1.5 font-serif-body text-[12px] md:text-[13px] leading-relaxed text-muted">
        {liveEvent.description}
      </p>
      <a
        href="#"
        className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center gap-2 bg-foreground px-4 font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-wider text-background transition-colors hover:bg-accent"
      >
        <Play className="h-3 w-3" aria-hidden />
        Шууд үзэх
      </a>
    </section>
  );
}

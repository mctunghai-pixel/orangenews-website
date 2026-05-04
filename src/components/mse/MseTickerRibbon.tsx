import type { MseDirection, MseMarqueeRow } from "@/lib/types";

interface Props {
  rows: MseMarqueeRow[];
}

const PRICE_FMT = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatPct(n: number): string {
  const sign = n > 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}%`;
}

function changeClass(pct: number): string {
  if (pct > 0) return "text-up";
  if (pct < 0) return "text-down";
  return "text-background/50";
}

function arrow(direction: MseDirection): string {
  if (direction === "up") return "↑";
  if (direction === "down") return "↓";
  return "→";
}

export function MseTickerRibbon({ rows }: Props) {
  if (rows.length === 0) return null;

  // Items duplicated 2× so translateX(-50%) yields a seamless loop.
  const looped = [...rows, ...rows];

  return (
    <div
      role="marquee"
      aria-label="MSE үнийн зурвас"
      className="sticky top-[var(--header-height)] z-20 w-full overflow-hidden border-y border-border bg-foreground py-2 text-background motion-reduce:overflow-x-auto"
    >
      <ul className="flex w-max items-center gap-8 whitespace-nowrap animate-ticker-mobile motion-reduce:animate-none md:animate-ticker-desktop">
        {looped.map((r, i) => (
          <li
            key={`${r.symbol}-${i}`}
            className="inline-flex items-center gap-2 font-mono text-xs"
          >
            <span className="font-medium tracking-wide">{r.symbol}</span>
            <span className="tabular-nums text-background/80">
              {PRICE_FMT.format(r.price)}
            </span>
            <span className={`tabular-nums ${changeClass(r.changePct)}`}>
              {arrow(r.direction)} {formatPct(r.changePct)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Aravt News logo mark — 10 bars in a market-chart rhythm (аравт = 10).
// Mirrors brand_card.logo_mark() in the automation repo (Visual Standard v2).
const HEIGHTS = [0.34, 0.52, 0.42, 0.64, 0.5, 0.72, 0.6, 0.8, 0.7, 1.0];
export const BRAND_NAVY = "#08142B";
export const BRAND_GOLD = "#D4AF37";

export function BrandMark({ size = 24, className }: { size?: number; className?: string }) {
  const S = 100;
  const m = 20;
  const gap = 2.6;
  const bw = (S - 2 * m - 9 * gap) / 10;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${S} ${S}`} className={className} aria-hidden>
      <rect x="1.5" y="1.5" width="97" height="97" rx="20" fill={BRAND_NAVY} stroke={BRAND_GOLD} strokeWidth="3" />
      {HEIGHTS.map((h, i) => {
        const bh = (S - 2 * m) * h;
        return (
          <rect
            key={i}
            x={m + i * (bw + gap)}
            y={S - m - bh}
            width={bw}
            height={bh}
            fill={i === 9 ? BRAND_GOLD : "#FFFFFF"}
          />
        );
      })}
    </svg>
  );
}

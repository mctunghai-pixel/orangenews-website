// =============================================================================
// LineChart — reusable SVG line + area gradient
// =============================================================================
// Extracted from Hero.tsx (Phase 3) and parameterized for reuse across Hero,
// MarketHero (sparkline) and MarketChart (full-size). Tone prop drives stroke
// + gradient color (accent for brand, up/down for directional financial UI).
// =============================================================================

// TODO(Phase 5): migrate hardcoded hex to globals.css design tokens
//   (e.g. --color-success, --color-danger) once theme system is finalized.
const CHART_TONES = {
  accent: "#FF6B1A",
  up: "#16A34A",
  down: "#DC2626",
} as const;

export type ChartTone = keyof typeof CHART_TONES;

interface LineChartProps {
  points: number[];
  tone?: ChartTone;
  width?: number;
  height?: number;
  className?: string;
  ariaLabel?: string;
  /** Unique gradient id — required when multiple charts render on the same page. */
  gradientId?: string;
}

export function LineChart({
  points,
  tone = "accent",
  width = 640,
  height = 240,
  className = "h-full w-full",
  ariaLabel = "Үнийн хөдөлгөөн",
  gradientId = "linechart-grad",
}: LineChartProps) {
  if (points.length < 2) return null;

  const padding = 12;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const stepX = (width - padding * 2) / (points.length - 1);

  const coords = points.map((p, i) => {
    const x = padding + i * stepX;
    const y = height - padding - ((p - min) / range) * (height - padding * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  const linePath = `M ${coords.join(" L ")}`;
  const areaPath = `${linePath} L ${width - padding},${height - padding} L ${padding},${height - padding} Z`;
  const color = CHART_TONES[tone];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio="none"
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradientId})`} />
      <path
        d={linePath}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

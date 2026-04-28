// =============================================================================
// Orange News — Open Graph Image Generator (shared helper)
// =============================================================================
// Edge-runtime helper for OG share images. Three exports — homepage, article,
// category — each returning an ImageResponse. Fonts are bundled via the
// webpack/turbopack asset URL pattern (subset Noto Sans, Cyrillic + Latin).
// =============================================================================

import { ImageResponse } from "next/og";
import type { ReactNode } from "react";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Mirrors src/app/globals.css @theme color tokens
const COLORS = {
  bg: "#FFFFFF",
  text: "#0A0A0A",
  muted: "#525252",
  border: "#E5E5E5",
  accent: "#FF6B1A",
} as const;

const MAX_HEADLINE_CHARS = 100;

function truncate(s: string, max = MAX_HEADLINE_CHARS): string {
  const trimmed = s.trim();
  if (!trimmed) return "Untitled";
  if (trimmed.length <= max) return trimmed;
  return trimmed.slice(0, max - 1).trimEnd() + "…";
}

async function loadFonts() {
  const [bold, regular] = await Promise.all([
    fetch(new URL("./fonts/NotoSans-Bold.subset.ttf", import.meta.url)).then(
      (r) => r.arrayBuffer(),
    ),
    fetch(new URL("./fonts/NotoSans-Regular.subset.ttf", import.meta.url)).then(
      (r) => r.arrayBuffer(),
    ),
  ]);
  return [
    { name: "Noto Sans", data: bold, weight: 700 as const, style: "normal" as const },
    { name: "Noto Sans", data: regular, weight: 400 as const, style: "normal" as const },
  ];
}

function OgFrame({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: COLORS.bg,
        color: COLORS.text,
        display: "flex",
        flexDirection: "column",
        fontFamily: "Noto Sans",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "56px 72px 0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 4,
              color: COLORS.accent,
            }}
          >
            ORANGE
          </span>
          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 4,
              color: COLORS.text,
              marginLeft: 14,
            }}
          >
            NEWS
          </span>
        </div>
        <div style={{ width: 96, height: 4, background: COLORS.accent }} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "0 72px",
          justifyContent: "center",
        }}
      >
        {children}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 72px 56px",
          fontSize: 22,
          color: COLORS.muted,
          borderTop: `1px solid ${COLORS.border}`,
        }}
      >
        <span>orangenews.mn</span>
        <div
          style={{
            display: "flex",
            width: 12,
            height: 12,
            borderRadius: 999,
            background: COLORS.accent,
          }}
        />
      </div>
    </div>
  );
}

export async function renderHomepageOg() {
  return new ImageResponse(
    (
      <OgFrame>
        <span
          style={{
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.1,
            color: COLORS.text,
          }}
        >
          Монгол Улсын
        </span>
        <span
          style={{
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.1,
            color: COLORS.text,
            marginTop: 8,
          }}
        >
          санхүүгийн мэдээ
        </span>
      </OgFrame>
    ),
    { ...OG_SIZE, fonts: await loadFonts() },
  );
}

export async function renderArticleOg(opts: {
  category: string;
  headline: string;
}) {
  const headline = truncate(opts.headline);
  return new ImageResponse(
    (
      <OgFrame>
        <span
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: COLORS.accent,
            letterSpacing: 3,
            marginBottom: 28,
          }}
        >
          {opts.category.toUpperCase()}
        </span>
        <span
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            color: COLORS.text,
          }}
        >
          {headline}
        </span>
      </OgFrame>
    ),
    { ...OG_SIZE, fonts: await loadFonts() },
  );
}

export async function renderCategoryOg(opts: {
  category: string;
  count: number;
}) {
  return new ImageResponse(
    (
      <OgFrame>
        <span
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: COLORS.muted,
            letterSpacing: 3,
            marginBottom: 24,
          }}
        >
          АНГИЛАЛ
        </span>
        <span
          style={{
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.05,
            color: COLORS.text,
          }}
        >
          {opts.category}
        </span>
        <span
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: COLORS.muted,
            marginTop: 24,
          }}
        >
          {opts.count} нийтлэл
        </span>
      </OgFrame>
    ),
    { ...OG_SIZE, fonts: await loadFonts() },
  );
}

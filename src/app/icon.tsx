import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

const NAVY = "#08142B";
const GOLD = "#D4AF37";
// Aravt News mark (Visual Standard v2): 5 bars at icon size for legibility.
const HEIGHTS = [0.42, 0.66, 0.52, 0.78, 1.0];

function Mark({ px }: { px: number }) {
  const m = px * 0.2;
  const gap = px * 0.06;
  const bw = (px - 2 * m - 4 * gap) / 5;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: NAVY,
        border: `${Math.max(2, Math.round(px / 40))}px solid ${GOLD}`,
        borderRadius: px * 0.2,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom: m,
        gap,
      }}
    >
      {HEIGHTS.map((h, i) => (
        <div
          key={i}
          style={{ width: bw, height: (px - 2 * m) * h, background: i === 4 ? GOLD : "#FFFFFF" }}
        />
      ))}
    </div>
  );
}

export default function Icon() {
  return new ImageResponse(<Mark px={512} />, { ...size });
}

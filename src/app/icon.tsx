import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

const BG = "#0A0A0A";
const ACCENT = "#FF6B1A";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: BG,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "60%",
            height: "60%",
            borderRadius: "50%",
            background: ACCENT,
          }}
        />
      </div>
    ),
    { ...size },
  );
}

import { renderHomepageOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Orange News — Монгол Улсын санхүүгийн мэдээ";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderHomepageOg();
}

import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Podcast — Aravt News",
  description: "Aravt News Podcast — финансын топик-уудаар Mongolian аудио content тун удахгүй.",
};

export default function PodcastPage() {
  return (
    <ComingSoon
      title="Aravt News Podcast"
      description="Финансын топик-уудаар Mongolian аудио content тун удахгүй эхэлнэ. Шинэ боломжуудыг хүлээн авахын тулд info@aravtnews.com хаягаар бүртгүүлэхийг хүсэж байна."
    />
  );
}

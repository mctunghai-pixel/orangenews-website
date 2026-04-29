import type { Metadata } from "next";
import { ComingSoon } from "@/components/shared/ComingSoon";

export const metadata: Metadata = {
  title: "Podcast — Orange News",
  description: "Orange News Podcast — финансын топик-уудаар Mongolian аудио content тун удахгүй.",
};

export default function PodcastPage() {
  return (
    <ComingSoon
      title="Orange News Podcast"
      description="Финансын топик-уудаар Mongolian аудио content тун удахгүй эхэлнэ. Шинэ боломжуудыг хүлээн авахын тулд info@orangenews.mn хаягаар бүртгүүлэхийг хүсэж байна."
    />
  );
}

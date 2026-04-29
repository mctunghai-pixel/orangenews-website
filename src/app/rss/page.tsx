import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RSS Feed — Orange News",
  description:
    "Orange News RSS feed: бүх ангилалын шинэ нийтлэлүүдийг RSS reader, news aggregator-аар шууд хүлээн авах боломж.",
};

const RSS_URL = "https://orangenews-website.vercel.app/rss.xml";

export default function RssInfoPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
      >
        ← Нүүр хуудас руу буцах
      </Link>

      <h1 className="font-serif-display text-[28px] md:text-[40px] font-bold leading-tight">
        Orange News RSS Feed
      </h1>
      <p className="mt-3 font-serif-body text-[16px] md:text-[17px] leading-[1.8] text-muted">
        Манай мэдээллийн урсгалыг шууд татаж аваарай.
      </p>

      <p className="mt-8 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        RSS (Really Simple Syndication) технологи нь та бидний шинэ нийтлэлүүдийг
        RSS reader, эсвэл өөрийн вэбсайт, аппликейшн дотроо шууд хүлээн авах
        боломжийг олгоно. Бусад мэдээллийн сайтууд, news aggregator-ууд, болон
        хувь хүмүүс манай контентыг эх сурвалж байдлаар ашиглах боломжтой.
      </p>

      <h3 className="mt-10 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Манай RSS холбоос
      </h3>
      <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center">
        <code className="flex-1 border border-border bg-foreground/[0.02] px-4 py-3 font-mono text-[13px] text-foreground break-all">
          {RSS_URL}
        </code>
        <a
          href="/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-accent px-6 py-3 font-sans text-[12px] font-semibold uppercase tracking-wider text-accent hover:bg-accent hover:text-background transition-colors text-center"
        >
          Feed нээх
        </a>
      </div>

      <h3 className="mt-10 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Үйлчилгээний онцлог
      </h3>
      <ul className="mt-4 list-disc pl-6 font-serif-body text-[16px] md:text-[17px] leading-[1.8] space-y-2">
        <li>RSS 2.0 стандартад нийцсэн</li>
        <li>Бүх категорийн нийтлэлүүд</li>
        <li>Гарчиг, товч агуулга, эх линк</li>
        <li>Автомат шинэчлэлт (1 цаг тутамд)</li>
      </ul>

      <h3 className="mt-10 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Хөгжүүлэгчдэд
      </h3>
      <p className="mt-4 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Манай RSS feed нь нээлттэй тул өөрийн төсөлдөө чөлөөтэй ашиглах
        боломжтой. Атрибут (attribution) ба эх сурвалжийн холбоосыг үлдээхийг
        хүсэж байна.
      </p>
    </main>
  );
}

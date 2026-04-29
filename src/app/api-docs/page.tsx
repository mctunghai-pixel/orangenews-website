import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer API — Orange News",
  description:
    "Orange News API: зах зээлийн дата, нийтлэлийн архив, real-time индексүүдэд RESTful endpoint-аар хандах боломж.",
};

export default function ApiDocsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
      >
        ← Нүүр хуудас руу буцах
      </Link>

      <h1 className="font-serif-display text-[28px] md:text-[40px] font-bold leading-tight">
        Orange News Developer API
      </h1>
      <p className="mt-3 font-serif-body text-[16px] md:text-[17px] leading-[1.8] text-muted">
        Манай зах зээлийн дата болон мэдээллийн санд программчлалын аргаар
        хандаарай.
      </p>

      <p className="mt-8 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Орчин үеийн санхүүгийн платформ, финтек app, бизнес intelligence
        solution-уудад зориулсан Orange News API нь манай зах зээлийн дата,
        нийтлэлийн архив, болон real-time индексүүдийг RESTful endpoint-аар
        хүргэх боломжийг олгоно.
      </p>

      <h3 className="mt-10 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        API боломжууд
      </h3>
      <ul className="mt-4 list-disc pl-6 font-serif-body text-[16px] md:text-[17px] leading-[1.8] space-y-2">
        <li>
          <strong>Markets endpoint</strong>: 8+ instrument-ийн real-time үнэ,
          түүхэн дата (1W, 1M timeframe)
        </li>
        <li>
          <strong>Articles endpoint</strong>: Бүх нийтлэлд категори, ticker tag,
          metadata-аар хайлт
        </li>
        <li>
          <strong>Newsletter content</strong>: Өдрийн тойм агуулга structured
          JSON-аар
        </li>
        <li>
          <strong>Webhook</strong>: Шинэ нийтлэл, market alerts-ийг push
          notification
        </li>
      </ul>

      <h3 className="mt-10 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Технологи
      </h3>
      <ul className="mt-4 list-disc pl-6 font-serif-body text-[16px] md:text-[17px] leading-[1.8] space-y-2">
        <li>RESTful API (JSON response)</li>
        <li>API key authentication</li>
        <li>Rate limiting (Free / Pro / Enterprise tiers)</li>
        <li>99.9% uptime SLA</li>
      </ul>

      <h3 className="mt-10 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Эрт хандах эрхийг авах
      </h3>
      <p className="mt-4 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Developer API access тун удахгүй нээгдэнэ. Эрт хандах эрхийг авахын
        тулд{" "}
        <a
          href="mailto:info@orangenews.mn"
          className="text-accent hover:underline"
        >
          info@orangenews.mn
        </a>{" "}
        хаягаар хүсэлтээ илгээнэ үү.
      </p>

      <form
        className="mt-6 flex flex-col gap-3 md:flex-row md:items-center"
        aria-label="Developer API early access (тун удахгүй)"
      >
        <input
          type="email"
          placeholder="имэйл хаяг"
          disabled
          aria-disabled="true"
          className="flex-1 border border-border bg-foreground/[0.02] px-4 py-3 font-serif-body text-[14px] text-muted placeholder:text-muted/60 focus:outline-none cursor-not-allowed"
        />
        <button
          type="button"
          disabled
          aria-disabled="true"
          title="Тун удахгүй"
          className="border border-border bg-foreground/[0.02] px-6 py-3 font-sans text-[12px] font-semibold uppercase tracking-wider text-muted cursor-not-allowed"
        >
          Эрт хандах
        </button>
      </form>
      <p className="mt-2 font-sans text-[11px] text-muted uppercase tracking-wider">
        Тун удахгүй
      </p>
    </main>
  );
}

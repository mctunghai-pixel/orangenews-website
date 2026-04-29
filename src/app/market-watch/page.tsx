import Link from "next/link";
import type { Metadata } from "next";
import { getMarketWatch } from "@/lib/market-watch";
import { MarketWatchImage } from "@/components/markets/MarketWatchImage";

export const metadata: Metadata = {
  title: "Market Watch — Orange News",
  description:
    "Орчин үеийн зах зээлийн өдрийн тойм. Валют, индекс, крипто, түүхий эдийн өнөөдрийн хөдөлгөөн өглөө бүр 8:00 цагт.",
};

export default async function MarketWatchPage() {
  const mw = await getMarketWatch();

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
      >
        ← Нүүр хуудас руу буцах
      </Link>

      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-accent">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot"
            aria-hidden
          />
          Market Watch
        </span>
        {mw && (
          <span className="font-mono text-[11px] md:text-[12px] text-muted tabular-nums">
            {mw.dateDisplay}
          </span>
        )}
      </div>

      <h1 className="mt-3 font-serif-display text-[28px] md:text-[40px] font-bold leading-tight">
        Зах зээлийн өдрийн тойм
      </h1>

      {!mw ? (
        <div className="mt-12 border border-border bg-foreground/[0.02] p-8 text-center">
          <p className="font-serif-body text-[16px] md:text-[17px] leading-[1.8] text-muted">
            Өнөөдрийн зах зээлийн өдрийн тойм тун удахгүй гарна. Өглөөний 8:00
            цагт шинэчлэгдэнэ.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-6 overflow-hidden border border-border bg-foreground/[0.02]">
            <MarketWatchImage
              primarySrc={mw.imageUrl}
              fallbackSrc={mw.fallbackImageUrl}
              alt={`Market Watch ${mw.dateDisplay}`}
              className="block h-auto w-full"
            />
          </div>

          <article className="mt-8 whitespace-pre-line font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
            {mw.body}
          </article>

          {mw.hashtags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              {mw.hashtags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-foreground/5 px-2 py-1 font-sans text-[11px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
}

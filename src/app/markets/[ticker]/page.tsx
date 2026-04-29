import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidTickerSlug } from "@/lib/ticker-slug";
import { getMarketInstrument } from "@/lib/fetch-market-data";
import { MarketHero } from "@/components/markets/MarketHero";
import { MarketChart } from "@/components/markets/MarketChart";
import { MarketStats } from "@/components/markets/MarketStats";

interface PageProps {
  params: Promise<{ ticker: string }>;
}

export default async function MarketDetailPage({ params }: PageProps) {
  const { ticker } = await params;
  if (!isValidTickerSlug(ticker)) notFound();

  const instrument = await getMarketInstrument(ticker);
  if (!instrument) notFound();

  return (
    <main className="mx-auto w-full max-w-[1100px] flex-1 px-4 pt-6 pb-12 md:px-6 md:pt-8 md:pb-16">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
      >
        ← Нүүр хуудас руу буцах
      </Link>

      <MarketHero instrument={instrument} />

      <div className="mt-10 md:mt-12">
        <MarketChart instrument={instrument} />
      </div>

      <div className="mt-10 md:mt-14">
        <MarketStats instrument={instrument} />
      </div>
    </main>
  );
}

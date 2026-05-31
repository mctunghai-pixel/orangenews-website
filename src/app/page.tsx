import { BreakingStrip } from "@/components/home/BreakingStrip";
import { Hero } from "@/components/home/Hero";
import { SecondaryArticles } from "@/components/home/SecondaryArticles";
import { MarketSnapshot } from "@/components/home/MarketSnapshot";
import { ArticleFeed } from "@/components/home/ArticleFeed";
import { MostRead } from "@/components/home/MostRead";
import { Newsletter } from "@/components/home/Newsletter";
import { VideoFeed } from "@/components/home/VideoFeed";
import { fetchOrangeNews } from "@/lib/fetch-orange-news";
import { fetchMarketData } from "@/lib/fetch-market-data";
import { fetchMseData } from "@/lib/fetch-mse-data";
import type { MarketInstrument } from "@/lib/types";

export default async function Home() {
  const [{ articles }, { instruments: marketInstruments }, mseData] =
    await Promise.all([
      fetchOrangeNews(),
      fetchMarketData(),
      fetchMseData(),
    ]);

  // Plan A: synthesize MSE TOP-20 from mse.mn marquee (source of truth) and
  // inject into instruments map. Replaces the previous market_data.json
  // msetop20 path, which never reached the cell anyway — `msetop20` was
  // missing from TICKER_SLUG_MAP, so fetchMarketData() filtered it out.
  const mseIndex = mseData.marquee.find((r) => r.symbol === "MSE");
  const instruments: Record<string, MarketInstrument> = mseIndex
    ? {
        ...marketInstruments,
        msetop20: {
          slug: "msetop20",
          symbol: "MSE",
          name: "MSE TOP-20",
          asset: "index",
          price: mseIndex.price,
          change: mseIndex.changeAbs,
          changePct: mseIndex.changePct,
          history1w: [],
          history1m: [],
        },
      }
    : marketInstruments;

  const spx = instruments.spx;

  // Filter news-only (exclude market watch) and sort by score desc
  const newsArticles = articles
    .filter((a) => !a.isMarketWatch)
    .sort((a, b) => b.score - a.score);

  const breakingArticle = newsArticles[0] ?? null;
  const heroArticle = newsArticles[1] ?? newsArticles[0] ?? null;
  const secondaryList = newsArticles.slice(2, 6);

  // Homepage "Сүүлийн мэдээ" feed: target an even 10 cards so the 2-column grid
  // always fills cleanly (an odd count leaves a trailing empty slot). When today
  // has fewer than 10 news, top up from the most recent archived days — scoped to
  // this feed only; Hero/Breaking/Secondary keep the today-only feed contract.
  const FEED_TARGET = 10;
  let feedArticles = newsArticles.slice(0, FEED_TARGET);
  if (feedArticles.length < FEED_TARGET) {
    const recent = await fetchOrangeNews({ archiveDays: 3 });
    if (recent.source === "live") {
      const seen = new Set(feedArticles.map((a) => a.slug));
      feedArticles = [
        ...feedArticles,
        ...recent.articles.filter((a) => !seen.has(a.slug)),
      ].slice(0, FEED_TARGET);
    }
  }

  return (
    <>
      <BreakingStrip article={breakingArticle} />
      <main className="mx-auto w-full max-w-[1400px] flex-1 px-4 pt-6 pb-12 md:px-6 md:pt-8 md:pb-16">
        <div
          className="grid animate-fade-up grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10"
          style={{ animationDelay: "0.05s", animationFillMode: "both" }}
        >
          <div className="lg:col-span-8">
            {heroArticle && spx && (
              <Hero article={heroArticle} marketInstrument={spx} />
            )}
          </div>
          <div className="lg:col-span-4">
            <SecondaryArticles articles={secondaryList} />
          </div>
        </div>

        <div
          className="mt-10 animate-fade-up md:mt-12"
          style={{ animationDelay: "0.15s", animationFillMode: "both" }}
        >
          <MarketSnapshot instruments={instruments} />
        </div>

        <div
          className="mt-10 grid animate-fade-up grid-cols-1 gap-8 md:mt-12 lg:grid-cols-12 lg:gap-10"
          style={{ animationDelay: "0.25s", animationFillMode: "both" }}
        >
          <div className="lg:col-span-8">
            <ArticleFeed articles={feedArticles} />
          </div>
          <aside className="lg:col-span-4">
            <MostRead />
            <Newsletter />
            <VideoFeed />
          </aside>
        </div>
      </main>
    </>
  );
}

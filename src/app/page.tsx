import { TickerBar } from "@/components/layout/TickerBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BreakingStrip } from "@/components/home/BreakingStrip";
import { Hero } from "@/components/home/Hero";
import { SecondaryArticles } from "@/components/home/SecondaryArticles";
import { MarketWatch } from "@/components/home/MarketWatch";
import { ArticleFeed } from "@/components/home/ArticleFeed";
import { MostRead } from "@/components/home/MostRead";
import { Newsletter } from "@/components/home/Newsletter";
import { LiveEvent } from "@/components/home/LiveEvent";
import { fetchOrangeNews } from "@/lib/fetch-orange-news";

export default async function Home() {
  const { articles } = await fetchOrangeNews();

  // Filter news-only (exclude market watch) and sort by score desc
  const newsArticles = articles
    .filter((a) => !a.isMarketWatch)
    .sort((a, b) => b.score - a.score);

  const breakingArticle = newsArticles[0] ?? null;
  const heroArticle = newsArticles[1] ?? newsArticles[0] ?? null;
  const secondaryList = newsArticles.slice(2, 6);

  return (
    <>
      <TickerBar />
      <Header />
      <BreakingStrip article={breakingArticle} />
      <main className="mx-auto w-full max-w-[1400px] flex-1 px-4 pt-6 pb-12 md:px-6 md:pt-8 md:pb-16">
        <div
          className="grid animate-fade-up grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10"
          style={{ animationDelay: "0.05s", animationFillMode: "both" }}
        >
          <div className="lg:col-span-8">
            {heroArticle && <Hero article={heroArticle} />}
          </div>
          <div className="lg:col-span-4">
            <SecondaryArticles articles={secondaryList} />
          </div>
        </div>

        <div
          className="mt-10 animate-fade-up md:mt-12"
          style={{ animationDelay: "0.15s", animationFillMode: "both" }}
        >
          <MarketWatch />
        </div>

        <div
          className="mt-10 grid animate-fade-up grid-cols-1 gap-8 md:mt-12 lg:grid-cols-12 lg:gap-10"
          style={{ animationDelay: "0.25s", animationFillMode: "both" }}
        >
          <div className="lg:col-span-8">
            <ArticleFeed articles={articles} />
          </div>
          <aside className="lg:col-span-4">
            <MostRead />
            <Newsletter />
            <LiveEvent />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

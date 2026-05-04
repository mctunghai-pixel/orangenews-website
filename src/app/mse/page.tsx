import { fetchMseData } from "@/lib/fetch-mse-data";
import { MseTickerRibbon } from "@/components/mse/MseTickerRibbon";
import { SectionHeader } from "@/components/mse/SectionHeader";
import { MseTop20Members } from "@/components/mse/MseTop20Members";
import { MseStockMovers } from "@/components/mse/MseStockMovers";
import { MseStockAmount } from "@/components/mse/MseStockAmount";
import { MseMiningTrades } from "@/components/mse/MseMiningTrades";
import { MseListedCompanies } from "@/components/mse/MseListedCompanies";

export default async function MsePage() {
  const data = await fetchMseData();
  const updatedLabel = data.fetchedAtMnt ?? data.fetchedAt.toISOString();

  return (
    <main>
      <MseTickerRibbon rows={data.marquee} />

      <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-6">
        <header className="mb-12">
          <h1 className="font-serif-display text-3xl font-bold text-foreground md:text-4xl">
            MSE — Монголын хөрөнгийн бирж
          </h1>
          <p className="mt-2 font-serif-body text-sm text-foreground/70">
            Шууд өгөгдөл · Сүүлд шинэчлэгдсэн: {updatedLabel}
            {data.source === "mock" && " · (Mock fallback)"}
          </p>
        </header>

        <section id="top20" className="py-8">
          <SectionHeader title="Топ-20 индекс" />
          <MseTop20Members rows={data.top20List} />
        </section>

        <section
          id="movers"
          className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2"
        >
          <div>
            <SectionHeader title="Өсөгчид" />
            <MseStockMovers rows={data.stockUp} />
          </div>
          <div>
            <SectionHeader title="Бууруулагчид" />
            <MseStockMovers rows={data.stockDown} />
          </div>
        </section>

        <section id="amount" className="py-8">
          <SectionHeader
            title="Идэвхтэй худалдаа"
            subtitle="Өнөөдрийн хэмжээ (MNT)"
          />
          <MseStockAmount rows={data.stockAmount} />
        </section>

        <section id="mining" className="py-8">
          <SectionHeader title="Уул уурхайн бүтээгдэхүүн" />
          <MseMiningTrades rows={data.comexTrade} />
        </section>

        <section id="listings" className="py-8">
          <SectionHeader title="Бүртгэлтэй компаниуд" />
          <MseListedCompanies aList={data.mseAList} bList={data.mseBList} />
        </section>

        <footer className="mt-16 border-t border-border py-8 font-serif-body text-sm text-foreground/70">
          <p>
            Эх сурвалж:{" "}
            <a
              href="https://mse.mn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:text-accent-hover hover:underline"
            >
              Монголын хөрөнгийн бирж (mse.mn)
            </a>
          </p>
          <p className="mt-1">Сүүлд шинэчлэгдсэн: {updatedLabel}</p>
        </footer>
      </div>
    </main>
  );
}

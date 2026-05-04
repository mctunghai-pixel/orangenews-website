import { fetchMseData } from "@/lib/fetch-mse-data";
import { MseTickerRibbon } from "@/components/mse/MseTickerRibbon";
import { MseTop20Members } from "@/components/mse/MseTop20Members";
import { MseStockMovers } from "@/components/mse/MseStockMovers";
import { MseStockAmount } from "@/components/mse/MseStockAmount";
import { MseMiningTrades } from "@/components/mse/MseMiningTrades";
import { MseListedCompanies } from "@/components/mse/MseListedCompanies";

export default async function MsePage() {
  const data = await fetchMseData();

  return (
    <main>
      <h1>MSE — Монголын хөрөнгийн бирж</h1>
      <p>
        Source: {data.source} | Fetched: {data.fetchedAt.toISOString()}
        {data.error ? ` | Fetch note: ${data.error}` : ""}
      </p>

      <MseTickerRibbon rows={data.marquee} />
      <MseTop20Members rows={data.top20List} />
      <MseStockMovers ups={data.stockUp} downs={data.stockDown} />
      <MseStockAmount rows={data.stockAmount} />
      <MseMiningTrades rows={data.comexTrade} />
      <MseListedCompanies aList={data.mseAList} bList={data.mseBList} />

      <footer>
        <p>Last updated: {data.fetchedAtMnt ?? data.fetchedAt.toISOString()}</p>
        <p>Эх сурвалж: Монголын хөрөнгийн бирж (mse.mn)</p>
      </footer>
    </main>
  );
}

import type { MseStockAmount as MseStockAmountRow } from "@/lib/types";

interface Props {
  rows: MseStockAmountRow[];
}

const TH_BASE =
  "px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wider text-foreground/60";
const TD_NUM = "px-4 py-2.5 text-right font-mono tabular-nums text-foreground/60";

const AMOUNT_FMT = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
const DEC_FMT = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const PRICE_FMT = DEC_FMT;

function formatPct(n: number): string {
  const sign = n > 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}%`;
}

function formatAbs(n: number): string {
  const sign = n > 0 ? "+" : "";
  return `${sign}${DEC_FMT.format(n)}`;
}

export function MseStockAmount({ rows }: Props) {
  return (
    <div className="overflow-hidden rounded-md border border-border">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-foreground/5">
            <th className={`${TH_BASE} text-right`}>#</th>
            <th className={`${TH_BASE} text-left`}>Ticker</th>
            <th className={`${TH_BASE} text-left`}>Name</th>
            <th className={`${TH_BASE} text-right`}>Code</th>
            <th className={`${TH_BASE} text-right`}>Price</th>
            <th className={`${TH_BASE} text-right`}>Amount (MNT)</th>
            <th className={`${TH_BASE} text-right`}>±%</th>
            <th className={`${TH_BASE} text-right`}>±Abs</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={r.code}
              className="border-b border-border transition-colors last:border-b-0 hover:bg-muted/10"
            >
              <td className={TD_NUM}>{i + 1}</td>
              <td className="px-4 py-2.5 text-left font-mono font-semibold text-foreground">
                {r.symbol}
              </td>
              <td className="px-4 py-2.5 text-left font-serif-body text-foreground">
                {r.name}
              </td>
              <td className={TD_NUM}>{r.code}</td>
              <td className={TD_NUM}>
                {r.price != null ? PRICE_FMT.format(r.price) : "—"}
              </td>
              <td className="px-4 py-2.5 text-right font-mono font-semibold tabular-nums text-foreground">
                {AMOUNT_FMT.format(r.amountMnt)}
              </td>
              <td className={TD_NUM}>{formatPct(r.changePct)}</td>
              <td className={TD_NUM}>{formatAbs(r.changeAbs)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

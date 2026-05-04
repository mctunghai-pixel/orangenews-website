import type { MseStockMover } from "@/lib/types";

interface Props {
  rows: MseStockMover[];
  direction: "up" | "down";
}

const TH_BASE =
  "px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wider text-foreground/60";
const TD_NUM = "px-4 py-2.5 text-right font-mono tabular-nums text-foreground/60";

const NUM_FMT = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatPct(n: number): string {
  const sign = n > 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}%`;
}

function formatAbs(n: number): string {
  const sign = n > 0 ? "+" : "";
  return `${sign}${NUM_FMT.format(n)}`;
}

export function MseStockMovers({ rows, direction }: Props) {
  const signalClass = direction === "up" ? "text-up" : "text-down";

  return (
    <div className="overflow-hidden rounded-md border border-border">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-foreground/5">
            <th className={`${TH_BASE} text-right`}>#</th>
            <th className={`${TH_BASE} text-left`}>Ticker</th>
            <th className={`${TH_BASE} text-left`}>Name</th>
            <th className={`${TH_BASE} text-right`}>Price</th>
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
              <td className="px-4 py-2.5 text-right font-mono tabular-nums text-foreground">
                {NUM_FMT.format(r.price)}
              </td>
              <td
                className={`px-4 py-2.5 text-right font-mono font-semibold tabular-nums ${signalClass}`}
              >
                {formatPct(r.changePct)}
              </td>
              <td
                className={`px-4 py-2.5 text-right font-mono tabular-nums ${signalClass}`}
              >
                {formatAbs(r.changeAbs)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

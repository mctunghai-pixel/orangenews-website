import type { MseComexTrade } from "@/lib/types";

interface Props {
  rows: MseComexTrade[];
}

const TH_BASE =
  "px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wider text-foreground/60";
const TD_NUM = "px-4 py-2.5 text-right font-mono tabular-nums text-foreground/60";

const PRICE_FMT = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatPct(n: number): string {
  const sign = n > 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}%`;
}

function changeClass(pct: number): string {
  if (pct > 0) return "text-up";
  if (pct < 0) return "text-down";
  return "text-foreground/60";
}

/** "2026-05-01T12:00:00" → "2026.05.01 12:00" (Mongolian-friendly ISO-like). */
function formatDate(iso: string): string {
  const [date, time] = iso.split("T");
  if (!date) return iso;
  const dot = date.replace(/-/g, ".");
  const hhmm = time?.slice(0, 5) ?? "";
  return hhmm ? `${dot} ${hhmm}` : dot;
}

export function MseMiningTrades({ rows }: Props) {
  return (
    <div className="overflow-x-auto rounded-md border border-border">
      <table className="w-full border-collapse whitespace-nowrap text-sm">
        <thead>
          <tr className="bg-foreground/5">
            <th className={`${TH_BASE} text-right`}>#</th>
            <th className={`${TH_BASE} text-left`}>Category</th>
            <th className={`${TH_BASE} text-left`}>Seller</th>
            <th className={`${TH_BASE} text-left`}>Date</th>
            <th className={`${TH_BASE} text-right`}>Price</th>
            <th className={`${TH_BASE} text-left`}>Currency</th>
            <th className={`${TH_BASE} text-right`}>±%</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={r.id}
              className="border-b border-border transition-colors last:border-b-0 hover:bg-muted/10"
            >
              <td className={TD_NUM}>{i + 1}</td>
              <td className="px-4 py-2.5 text-left font-serif-body text-foreground">
                {r.category}
              </td>
              <td className="px-4 py-2.5 text-left font-serif-body text-foreground">
                {r.seller}
              </td>
              <td className="px-4 py-2.5 text-left font-mono tabular-nums text-foreground/60">
                {formatDate(r.startedAt)}
              </td>
              <td className="px-4 py-2.5 text-right font-mono font-semibold tabular-nums text-foreground">
                {PRICE_FMT.format(r.price)}
              </td>
              <td className="px-4 py-2.5 text-left font-mono uppercase text-foreground/60">
                {r.currency}
              </td>
              <td
                className={`px-4 py-2.5 text-right font-mono font-semibold tabular-nums ${changeClass(r.changePct)}`}
              >
                {formatPct(r.changePct)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

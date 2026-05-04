import type { MseListedCompany } from "@/lib/types";

interface Props {
  aList: MseListedCompany[];
  bList: MseListedCompany[];
}

const TH_BASE =
  "px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wider text-foreground/60";
const TD_NUM = "px-4 py-2.5 text-right font-mono tabular-nums text-foreground/60";

const PRICE_FMT = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function CompanyTable({
  heading,
  rows,
}: {
  heading: string;
  rows: MseListedCompany[];
}) {
  return (
    <div>
      <h3 className="mb-2 font-sans text-xs font-semibold uppercase tracking-wider text-foreground">
        {heading}{" "}
        <span className="text-foreground/60">({rows.length})</span>
      </h3>
      <div className="overflow-hidden rounded-md border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-foreground/5">
              <th className={`${TH_BASE} text-right`}>#</th>
              <th className={`${TH_BASE} text-left`}>Ticker</th>
              <th className={`${TH_BASE} text-left`}>Name</th>
              <th className={`${TH_BASE} text-right`}>Code</th>
              <th className={`${TH_BASE} text-right`}>Price</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.code}
                className="border-b border-border transition-colors last:border-b-0 hover:bg-muted/10"
              >
                <td className={TD_NUM}>{r.row}</td>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function MseListedCompanies({ aList, bList }: Props) {
  return (
    <div className="space-y-8">
      <CompanyTable heading="A-board" rows={aList} />
      <CompanyTable heading="B-board" rows={bList} />
    </div>
  );
}

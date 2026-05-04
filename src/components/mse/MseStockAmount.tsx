import type { MseStockAmount as MseStockAmountRow } from "@/lib/types";

interface Props {
  rows: MseStockAmountRow[];
}

export function MseStockAmount({ rows }: Props) {
  return (
    <section>
      <h2>MseStockAmount ({rows.length} rows)</h2>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Code</th>
            <th>Amount (MNT)</th>
            <th>Δ %</th>
            <th>Δ abs</th>
            <th>Direction</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.code}>
              <td>{r.symbol}</td>
              <td>{r.name}</td>
              <td>{r.code}</td>
              <td>{r.amountMnt}</td>
              <td>{r.changePct}</td>
              <td>{r.changeAbs}</td>
              <td>{r.direction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

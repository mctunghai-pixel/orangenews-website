import type { MseStockMover } from "@/lib/types";

interface Props {
  ups: MseStockMover[];
  downs: MseStockMover[];
}

function MoverTable({ heading, rows }: { heading: string; rows: MseStockMover[] }) {
  return (
    <div>
      <h3>{heading} ({rows.length})</h3>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Code</th>
            <th>Price</th>
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
              <td>{r.price}</td>
              <td>{r.changePct}</td>
              <td>{r.changeAbs}</td>
              <td>{r.direction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MseStockMovers({ ups, downs }: Props) {
  return (
    <section>
      <h2>MseStockMovers</h2>
      <MoverTable heading="Stock Up (gainers)" rows={ups} />
      <MoverTable heading="Stock Down (losers)" rows={downs} />
    </section>
  );
}

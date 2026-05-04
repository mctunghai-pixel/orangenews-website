import type { MseStockMover } from "@/lib/types";

interface Props {
  rows: MseStockMover[];
}

export function MseStockMovers({ rows }: Props) {
  return (
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
  );
}

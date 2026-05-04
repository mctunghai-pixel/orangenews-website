import type { MseComexTrade } from "@/lib/types";

interface Props {
  rows: MseComexTrade[];
}

export function MseMiningTrades({ rows }: Props) {
  return (
    <section>
      <h2>MseMiningTrades ({rows.length} rows)</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Main Type</th>
            <th>Category</th>
            <th>Seller</th>
            <th>Started At</th>
            <th>Min Price</th>
            <th>Price</th>
            <th>Currency</th>
            <th>Δ %</th>
            <th>Δ abs</th>
            <th>Direction</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.mainType}</td>
              <td>{r.category}</td>
              <td>{r.seller}</td>
              <td>{r.startedAt}</td>
              <td>{r.minPrice}</td>
              <td>{r.price}</td>
              <td>{r.currency}</td>
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

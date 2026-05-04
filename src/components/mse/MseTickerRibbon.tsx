import type { MseMarqueeRow } from "@/lib/types";

interface Props {
  rows: MseMarqueeRow[];
}

export function MseTickerRibbon({ rows }: Props) {
  return (
    <section>
      <h2>MseTickerRibbon ({rows.length} rows)</h2>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Δ %</th>
            <th>Δ abs</th>
            <th>Direction</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.symbol}>
              <td>{r.symbol}</td>
              <td>{r.price}</td>
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

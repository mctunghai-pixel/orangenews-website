import type { MseTop20Member } from "@/lib/types";

interface Props {
  rows: MseTop20Member[];
}

export function MseTop20Members({ rows }: Props) {
  return (
    <section>
      <h2>MseTop20Members ({rows.length} rows)</h2>
      <table>
        <thead>
          <tr>
            <th>Row</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.code}>
              <td>{r.row}</td>
              <td>{r.symbol}</td>
              <td>{r.name}</td>
              <td>{r.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

import type { MseListedCompany } from "@/lib/types";

interface Props {
  aList: MseListedCompany[];
  bList: MseListedCompany[];
}

function CompanyTable({ heading, rows }: { heading: string; rows: MseListedCompany[] }) {
  return (
    <div>
      <h3>{heading} ({rows.length})</h3>
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
    </div>
  );
}

export function MseListedCompanies({ aList, bList }: Props) {
  return (
    <section>
      <h2>MseListedCompanies</h2>
      <CompanyTable heading="A-board" rows={aList} />
      <CompanyTable heading="B-board" rows={bList} />
    </section>
  );
}

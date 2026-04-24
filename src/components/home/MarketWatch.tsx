import { markets } from "@/lib/mock-data";

const cellBorders = [
  "border-r border-b border-border lg:border-b-0",
  "border-b border-border lg:border-r lg:border-b-0",
  "border-r border-border",
  "",
];

export function MarketWatch() {
  return (
    <section aria-labelledby="markets-heading">
      <div className="mb-4 flex items-baseline justify-between border-b-2 border-foreground pb-2">
        <h2
          id="markets-heading"
          className="font-serif-display text-[18px] md:text-[22px] font-bold"
        >
          Зах зээлийн хараа
        </h2>
        <span className="font-mono text-[10px] md:text-[11px] text-muted tabular-nums">
          Шинэчлэгдсэн · 1 минутын өмнө
        </span>
      </div>

      <div className="grid grid-cols-2 border border-border lg:grid-cols-4">
        {markets.map((cat, catIdx) => (
          <div
            key={cat.title}
            className={`p-3 md:p-4 ${cellBorders[catIdx] ?? ""}`}
          >
            <h3 className="mb-3 font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-muted">
              {cat.title}
            </h3>
            <ul className="space-y-2">
              {cat.items.map((item) => {
                const up = item.change >= 0;
                return (
                  <li
                    key={item.label}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="truncate font-sans text-[12px] md:text-[13px] font-medium text-foreground">
                      {item.label}
                    </span>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="font-mono text-[11px] md:text-[12px] text-foreground tabular-nums">
                        {item.value}
                      </span>
                      <span
                        className={`w-14 text-right font-mono text-[10px] md:text-[11px] tabular-nums ${up ? "text-up" : "text-down"}`}
                      >
                        {up ? "+" : ""}
                        {item.change.toFixed(2)}%
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

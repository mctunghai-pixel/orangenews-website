// Homepage 4-quadrant market overview. Distinct from /market-watch route
// (Phase 5.2 daily briefing). 8/12 cells live via Phase 5.3 pipeline; 4 cells
// (SOL, MSE TOP-20, Оюу Толгой, Зэс) ship as honest "≈" stubs — no backend.

import type { MarketInstrument } from "@/lib/types";
import {
  formatChangePct,
  formatLastUpdated,
  formatPrice,
} from "@/lib/format-market";

type LiveCell = {
  kind: "live";
  label: string;
  instrument: MarketInstrument;
};

type StubCell = {
  kind: "stub";
  label: string;
  approxValue: string;
};

type Cell = LiveCell | StubCell;

type Category = {
  title: string;
  cells: Cell[];
};

const cellBorders = [
  "border-r border-b border-border lg:border-b-0",
  "border-b border-border lg:border-r lg:border-b-0",
  "border-r border-border",
  "",
];

const STUB_TOOLTIP = "Амьд өгөгдөл удахгүй идэвхжинэ";

function buildCategories(
  instruments: Record<string, MarketInstrument>,
): Category[] {
  const live = (
    label: string,
    instrument: MarketInstrument | undefined,
  ): Cell =>
    instrument
      ? { kind: "live", label, instrument }
      : { kind: "stub", label, approxValue: "—" };

  return [
    {
      title: "Индексүүд",
      cells: [
        live("S&P 500", instruments.spx),
        live("NASDAQ", instruments.ixic),
        live("DOW", instruments.dji),
      ],
    },
    {
      title: "Крипто",
      cells: [
        live("BTC", instruments.btc),
        live("ETH", instruments.eth),
        { kind: "stub", label: "SOL", approxValue: "$174" },
      ],
    },
    {
      title: "Монгол",
      cells: [
        live("USD/MNT", instruments.mntusd),
        { kind: "stub", label: "MSE TOP-20", approxValue: "38,421" },
        { kind: "stub", label: "Оюу Толгой", approxValue: "4,120₮" },
      ],
    },
    {
      title: "Түүхий эд",
      cells: [
        live("Алт", instruments.xau),
        live("OIL WTI", instruments.cl),
        { kind: "stub", label: "Зэс", approxValue: "$4.18" },
      ],
    },
  ];
}

function pickLastUpdated(
  instruments: Record<string, MarketInstrument>,
): string | null {
  for (const inst of Object.values(instruments)) {
    if (inst.lastUpdated) return inst.lastUpdated;
  }
  return null;
}

export function MarketSnapshot({
  instruments,
}: {
  instruments: Record<string, MarketInstrument>;
}) {
  const categories = buildCategories(instruments);
  const lastUpdatedIso = pickLastUpdated(instruments);
  const lastUpdatedLabel = lastUpdatedIso
    ? `Шинэчлэгдсэн · ${formatLastUpdated(lastUpdatedIso)}`
    : "Шинэчлэгдсэн · сая";

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
          {lastUpdatedLabel}
        </span>
      </div>

      <div className="grid grid-cols-2 border border-border lg:grid-cols-4">
        {categories.map((cat, catIdx) => (
          <div
            key={cat.title}
            className={`p-3 md:p-4 ${cellBorders[catIdx] ?? ""}`}
          >
            <h3 className="mb-3 font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-muted">
              {cat.title}
            </h3>
            <ul className="space-y-2">
              {cat.cells.map((cell) => (
                <li
                  key={cell.label}
                  className="flex items-center justify-between gap-2"
                >
                  {cell.kind === "live" ? (
                    <LiveRow label={cell.label} instrument={cell.instrument} />
                  ) : (
                    <StubRow label={cell.label} approxValue={cell.approxValue} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function LiveRow({
  label,
  instrument,
}: {
  label: string;
  instrument: MarketInstrument;
}) {
  const up = instrument.changePct >= 0;
  return (
    <>
      <span className="truncate font-sans text-[12px] md:text-[13px] font-medium text-foreground">
        {label}
      </span>
      <div className="flex shrink-0 items-center gap-2">
        <span className="font-mono text-[11px] md:text-[12px] text-foreground tabular-nums">
          {formatPrice(instrument)}
        </span>
        <span
          className={`w-14 text-right font-mono text-[10px] md:text-[11px] tabular-nums ${
            up ? "text-up" : "text-down"
          }`}
        >
          {formatChangePct(instrument.changePct)}
        </span>
      </div>
    </>
  );
}

function StubRow({
  label,
  approxValue,
}: {
  label: string;
  approxValue: string;
}) {
  return (
    <>
      <span
        className="truncate font-sans text-[12px] md:text-[13px] font-medium italic text-muted/80"
        title={STUB_TOOLTIP}
      >
        {label}
      </span>
      <div
        className="flex shrink-0 items-center gap-2"
        title={STUB_TOOLTIP}
      >
        <span className="font-mono text-[11px] md:text-[12px] tabular-nums text-muted/80">
          ≈ {approxValue}
        </span>
        <span
          aria-hidden="true"
          className="w-14 text-right font-mono text-[10px] md:text-[11px] tabular-nums text-muted/60"
        >
          —
        </span>
      </div>
    </>
  );
}

// Homepage 4-quadrant market overview. Distinct from /market-watch route
// (Phase 5.2 daily briefing). 8/12 cells live via Phase 5.3 pipeline; 4 cells
// (SOL, MSE TOP-20, Оюу Толгой, Зэс) render with hardcoded mock data.
//
// Visual harmony principle: stub cells render visually identical to live cells
// — same font, same weight, same color semantics on change %. The only
// differentiation is a subtle `opacity-90` on the row + a tooltip on hover
// (developer-level signal). Bloomberg pattern: visual consistency over
// data-source transparency.

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
  /** Pre-formatted price string e.g. "$174.22", "38,421", "4,120₮" */
  price: string;
  /** Mock change %; null suppresses the change column (renders em-dash) */
  changePct: number | null;
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
    fallback: { price: string; changePct: number | null },
  ): Cell =>
    instrument
      ? { kind: "live", label, instrument }
      : { kind: "stub", label, ...fallback };

  return [
    {
      title: "Индексүүд",
      cells: [
        live("S&P 500", instruments.spx, { price: "—", changePct: null }),
        live("NASDAQ", instruments.ixic, { price: "—", changePct: null }),
        live("DOW", instruments.dji, { price: "—", changePct: null }),
      ],
    },
    {
      title: "Крипто",
      cells: [
        live("BTC", instruments.btc, { price: "—", changePct: null }),
        live("ETH", instruments.eth, { price: "—", changePct: null }),
        { kind: "stub", label: "SOL", price: "$174.22", changePct: -0.67 },
      ],
    },
    {
      title: "Монгол",
      cells: [
        live("USD/MNT", instruments.mntusd, { price: "—", changePct: null }),
        { kind: "stub", label: "MSE TOP-20", price: "38,421", changePct: 0.24 },
        { kind: "stub", label: "Оюу Толгой", price: "4,120₮", changePct: 1.21 },
      ],
    },
    {
      title: "Түүхий эд",
      cells: [
        live("Алт", instruments.xau, { price: "—", changePct: null }),
        live("OIL WTI", instruments.cl, { price: "—", changePct: null }),
        { kind: "stub", label: "Зэс", price: "$4.18", changePct: 0.33 },
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
                  className={`flex items-center justify-between gap-2 ${
                    cell.kind === "stub" ? "opacity-90" : ""
                  }`}
                  {...(cell.kind === "stub" ? { title: STUB_TOOLTIP } : {})}
                >
                  {cell.kind === "live" ? (
                    <LiveRow label={cell.label} instrument={cell.instrument} />
                  ) : (
                    <StubRow
                      label={cell.label}
                      price={cell.price}
                      changePct={cell.changePct}
                    />
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

/**
 * For instruments without intra-day delta (e.g. mntusd via ExchangeRate-API
 * returns daily resolution), suppress the misleading "+0.00%" by checking for
 * a flat changePct combined with a single-point history.
 */
function hasNoIntradayDelta(instrument: MarketInstrument): boolean {
  return instrument.changePct === 0 && instrument.history1w.length < 2;
}

function LiveRow({
  label,
  instrument,
}: {
  label: string;
  instrument: MarketInstrument;
}) {
  const up = instrument.changePct >= 0;
  const flatNoDelta = hasNoIntradayDelta(instrument);
  return (
    <>
      <span className="truncate font-sans text-[12px] md:text-[13px] font-medium text-foreground">
        {label}
      </span>
      <div className="flex shrink-0 items-center gap-2">
        <span className="font-mono text-[11px] md:text-[12px] text-foreground tabular-nums">
          {formatPrice(instrument)}
        </span>
        {flatNoDelta ? (
          <span
            aria-hidden="true"
            className="w-14 text-right font-mono text-[10px] md:text-[11px] tabular-nums text-muted/60"
          >
            —
          </span>
        ) : (
          <span
            className={`w-14 text-right font-mono text-[10px] md:text-[11px] tabular-nums ${
              up ? "text-up" : "text-down"
            }`}
          >
            {formatChangePct(instrument.changePct)}
          </span>
        )}
      </div>
    </>
  );
}

function StubRow({
  label,
  price,
  changePct,
}: {
  label: string;
  price: string;
  changePct: number | null;
}) {
  const up = changePct !== null && changePct >= 0;
  return (
    <>
      <span className="truncate font-sans text-[12px] md:text-[13px] font-medium text-foreground">
        {label}
      </span>
      <div className="flex shrink-0 items-center gap-2">
        <span className="font-mono text-[11px] md:text-[12px] text-foreground tabular-nums">
          {price}
        </span>
        {changePct === null ? (
          <span
            aria-hidden="true"
            className="w-14 text-right font-mono text-[10px] md:text-[11px] tabular-nums text-muted/60"
          >
            —
          </span>
        ) : (
          <span
            className={`w-14 text-right font-mono text-[10px] md:text-[11px] tabular-nums ${
              up ? "text-up" : "text-down"
            }`}
          >
            {formatChangePct(changePct)}
          </span>
        )}
      </div>
    </>
  );
}

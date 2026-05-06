@AGENTS.md

# Orange News Website — Project State

## Current phase: Phase 7.1 — COMPLETE ✅ (article archive: per-day snapshots + 7-day RSS window + archive-aware /articles/[slug], shipped 2026-05-05)

See `Phase 7.1 — COMPLETE` section below. Phase 6.2 + Phase 5 + Phase 4 retained as reference. Phase 6.1 / 6.3 / 6.4 remain backlog. Phase 7.2 reservation (subscribe layer) + Phase 7.1.x deferrals (date-filter UI, /category widening) listed at end.

---

## Phase 4 — TRULY COMPLETE ✅ (100%, all 4 steps shipped)

| Step | Commit | Description |
|---|---|---|
| 1a | `b70e15e` | OG helper + bundled fonts (Noto Sans Cyrillic+Latin subset, ~92KB) |
| 1b | `6ab992f` | opengraph-image routes (3 segments) + Twitter card metadata + env-aware `metadataBase` |
| 2a | `59e42a8` | Market data layer (types, slug map, fetcher, mock data) |
| 2b | `6445941` | TickerBar wired to live data + clickable links to `/markets/{slug}` |
| 2c | `2239f75` | `/markets/[ticker]` detail page (Hero + tabbed Chart + Stats grid) |
| 2d-1 | `0b446c6` | Hero LineChart reuse + real SPX 30-day data wiring |
| 2d-2 | `da1976c` | MNT/USD → USD/MNT (Bloomberg FX convention fix) |
| 3.1 | `a76d81b` | tsconfig: exclude backups directory from TS compilation |
| 3.2 | `e4a3294` | Article previous/next navigation |
| 3.3 | `8797d06` | Footer enrichment with /markets/* links |
| 4.1 | `90f783c` | Wire categories footer to `/category/{slug}` routes |
| 4.2 | `bfee925` | ComingSoon component + 5 company pages (about/team/partnership/careers/contact) |
| 4.3 | `8dcaa43` | LegalPageLayout + 5 legal pages (terms/privacy/cookies/data-sources/impressum) |
| 4.4 | `f975426` | 5 product pages (newsletter/rss/podcast/app/api-docs) |
| 4.5 | `7e87c1e` | RSS feed route + footer final wire (all 20+ hrefs) |

20 production commits + 1 polish + 3 docs. All deployed to https://orangenews-website.vercel.app.

**Pending external manual test** (Step 1): Facebook Sharing Debugger — https://developers.facebook.com/tools/debug/ — verifies the Facebook scraper picks up the OG image.

See `test_phase4.txt` for the regression endpoint list.

---

## Architectural decisions (Phase 4 Step 1)

### 1. Font subsetting toolchain (`scripts/subset-fonts.sh`)
- Source: `notofonts/notosans` upstream — path `fonts/ttf/hinted/instance_ttf/` (post-2024 restructure)
- Unicode coverage: `U+0020-007E` (Latin), `U+00A0-00FF` (Latin-1 Sup), `U+0400-04FF` (Cyrillic), general punct
- Output: `src/lib/fonts/NotoSans-{Bold,Regular}.subset.ttf` — ~46KB each (~92KB total)
- ~87% size reduction vs full Noto Sans, comfortably under Vercel edge 1MB bundle cap (~9% of budget)
- Repeatable: `bash scripts/subset-fonts.sh` regenerates from upstream
- Deps: `pip3 install --user fonttools brotli`

### 2. Env-aware `metadataBase` pattern (`src/app/layout.tsx`)
- Resolution chain: `NEXT_PUBLIC_SITE_URL` → `VERCEL_URL` → `localhost:3000`
- **Migration-ready**: setting `NEXT_PUBLIC_SITE_URL=https://orangenews.mn` in Vercel env after Hostinger migration → 0 code change
- Preview deployments use correct URL via `VERCEL_URL`
- Local dev falls back to `http://localhost:3000` — OG images render correctly during `npm run dev`

### 3. `<OgFrame>` shared chrome pattern (`src/lib/og-image.tsx`)
- 3 named exports: `renderHomepageOg()`, `renderArticleOg()`, `renderCategoryOg()`
- Each variant emits children into shared frame (header brand + accent bar, footer divider + dot)
- Adding a new variant = 1 named export, zero chrome duplication
- Edge-runtime font loading: `fetch(new URL("./fonts/...", import.meta.url))` — webpack/turbopack bundles assets at build time, no `node:fs` API needed
- Color tokens mirror `globals.css` `@theme` directives — single palette source of truth

### 4. OG route graceful fallbacks
- Invalid article slug → `renderArticleOg({ headline: "Нийтлэл олдсонгүй" })`
- Invalid category slug → `renderHomepageOg()`
- **Never `notFound()` in OG routes** — scrapers need an image, not a 404
- Empty headline → `truncate()` returns `"Untitled"` (matches `mapPost` fallback in `fetch-orange-news.ts`)

### 5. File-convention metadata wiring
- Next.js auto-injects `<meta property="og:image">` from any `opengraph-image.tsx` in route segment
- `twitter: { card: "summary_large_image" }` in root metadata → Twitter renders OG image
- Per-route file exports `runtime = "edge"`, `alt`, `size`, `contentType` — Next handles the rest
- Twitter `site` handle deferred — add when `@orangenews_mn` registered

---

## Architectural decisions (Phase 4 Step 2)

### 1. Mock-first data approach (Stage 1)
- `mock-market-data.ts` is the rendering source of truth until backend pipeline pushes `market_data.json`
- `fetchMarketData()` tries GitHub raw URL → falls back to mock on any error (404 expected pre-Stage 2)
- **Pragmatic engineering**: UI layer not blocked on backend; pipeline integration is a separate Phase 5+ concern
- Auto-promotes to live data when `market_data.json` appears at `MARKET_DATA_URL` — zero code change required
- Env override: `process.env.MARKET_DATA_URL` for testing alternate sources

### 2. Loader pattern — server fetch + client render separation (`TickerBarLoader.tsx`)
- Server async wrapper performs the fetch, passes data to inner client component as a typed prop
- Client component (`TickerBar.tsx`) keeps `useEffect` for live clock + scroll animation interactivity
- Reusable architectural primitive — future `SearchLoader`, `MostReadLoader`, etc. can adopt the same shape
- Layout (`app/layout.tsx`) stays a thin chrome composition; data fetching co-located with component

### 3. Asset-class differentiated price formatting (`format-market.ts`)
- Bloomberg convention: `$` prefix for **crypto + commodity only** (BTC, ETH, GOLD, OIL WTI)
- Indices and FX render bare numbers (S&P 500 `6,852.34`, USD/MNT `3,475.00`)
- Crypto ≥ $1,000 omits decimals (`$68,420`, `$3,812`); below threshold keeps 2 decimals (`$0.42`)
- Single helper `formatValue(n, asset)` shared between TickerBar (`formatPrice`) and Stats grid

### 4. Hardcoded `CHART_TONES` with `TODO(Phase 5)` migration marker
- `LineChart.tsx` uses literal hex (`#FF6B1A` / `#16A34A` / `#DC2626`) for stroke + gradient color
- Comment in source flags Phase 5 task: migrate to `globals.css` design tokens (`--color-up`, `--color-down`)
- Step 2C scope discipline — color-token migration deferred to avoid scope drift

### 5. Brand vs directional chart tone (Hero vs MarketChart)
- **Hero (homepage decoration)**: `tone="accent"` — orange brand color regardless of market direction
- **MarketChart (detail page)**: `tone={changePct >= 0 ? "up" : "down"}` — green/red directional
- **MarketHero sparkline (detail page)**: matches MarketChart directional tone
- Bloomberg/WSJ pattern: hero is identity, detail is information

### 6. URL backward compatibility on display-field correction (USD/MNT fix)
- Bloomberg convention: higher-value currency is the base — quote `USD/MNT 3,475` not `MNT/USD 3,475`
- Step 2D-2 fixed `symbol` + `name` display fields in mock data + slug map
- **Slug `/markets/mntusd` URL preserved** — bookmarks remain valid
- Pattern: when correcting label data, keep URL slug stable; rename display fields only

---

## Architectural decisions (Phase 4 Step 3)

### 1. Quick polish bundle — 3 atomic sub-tasks instead of 1 large feature
- Step 3 packaged tsconfig hygiene + article navigation + footer enrichment as 3 small commits
- Trade-off: 3 commit hashes in history vs. 1 large multi-file commit
- **Wins**: independent revert capability per concern, clearer Conventional Commits semantics (`chore:` for tsconfig vs. `feat:` for navigation/footer), faster reviewer scan time
- Pattern emerges as the "polish bundle" alternative to the bigger feature steps (Steps 1, 2)

### 2. Article navigation order: score-desc (matches homepage display)
- `ArticleNavigation.tsx` derives prev/next from same sorted list as homepage Hero/SecondaryArticles
- Reading "next article" follows the same ranking the user just scrolled through — no semantic mismatch
- Alternative considered (chronological by `publishedAt`) rejected: mock data has identical timestamps, would produce undefined ordering
- Edge case: `isMarketWatch` articles return `idx === -1` from `findIndex()`, both prev+next become null, component renders nothing — graceful

### 3. Single fetch via `fetchOrangeNews` (replaces `getPostBySlug` redundancy)
- Article detail page now does 1 fetch + array `find/filter/sort`, not 2 (was implicit double-fetch via getPostBySlug → also calls fetchOrangeNews internally)
- Same ISR cache slot serves the article + the navigation list
- `getPostBySlug` helper retained in `fetch-orange-news.ts` for any future single-article callers, but page-level usage now direct

### 4. Conditional `<Link>` vs `<a>` based on `href.startsWith("/")` (Footer)
- Internal hrefs (`/markets/spx`) get Next.js `<Link>` — automatic prefetch on hover, client-side transition
- External / stub hrefs (`#`, future `https://...`) use plain `<a>` — no prefetch overhead
- Single render branch: `link.href.startsWith("/") ? <Link> : <a>` — minimal cognitive cost
- Sets pattern for any future footer wiring (Phase 5 search/category links can adopt same shape)

### 5. Footer grid: arbitrary 14-column to preserve brand width
- Adding 5th nav column (Зах зээл) would have forced brand block to col-span-2 (≈233px) — too narrow for description + social icons
- Solution: `lg:grid-cols-[repeat(14,minmax(0,1fr))]` arbitrary value — brand stays col-span-4 (≈400px), 5 nav cols at col-span-2 each (5 × 2 = 10), total 14
- Tailwind v4 arbitrary-value support — no config changes, no design-system breakage
- Trade-off: deviates from project's `lg:grid-cols-12` convention. Acceptable given the alternative was a cramped brand block.

---

## Architectural decisions (Phase 4 Step 4)

### 1. `LegalPageLayout` extraction — 4-of-5 reuse pattern
- 4 legal pages share H1 + effective date + intro + structured body chrome
- Extracted to `src/components/legal/LegalPageLayout.tsx` (~63 lines)
- Body uses Tailwind descendant selectors (`[&_h2]:`, `[&_p]:`, etc.) — pages emit minimal markup, layout handles typography
- `/legal/impressum` opted out — has section-by-section "process pending" disclosure that doesn't fit the schema; uses direct JSX

### 2. `ComingSoon` shared component at `src/components/shared/`
- 3 routes use it: `/careers` (Компани), `/podcast` + `/app` (Бүтээгдэхүүн)
- Centered max-w-2xl layout, "Тун удахгүй" badge, title + description + email CTA
- Path chosen: `shared/` (not `legal/`) — used across multiple feature areas, generic UI primitive
- Single source of truth for "page exists, feature not yet" state — change all 3 by editing 1 component

### 3. RSS 2.0 feed at `/rss.xml` (Next.js Route Handler)
- Top 20 articles, score-desc, news-only filter (matches homepage)
- **CDATA-wrapped Cyrillic** content (title, description, category) — XML-safe handling of `< > & ' "` and Mongolian text
- RFC 822 pubDate + lastBuildDate via `Date.toUTCString()`
- `<atom:link rel="self">` for feed self-discovery (RSS aggregators look for it)
- 300-char word-boundary description truncation with ellipsis
- ISR `revalidate = 3600` + explicit `Cache-Control: max-age=3600, s-maxage=3600`
- `Content-Type: application/rss+xml; charset=utf-8` header

### 4. Trademark-safe brand positioning (`/about` page)
- Removed direct "Bloomberg comparison" wording from vision statement
- Replaced with "Mongolian-first anchor" phrasing: "Монгол хэлээр санхүүгийн дэлхийн жишигт нийцсэн чанартай мэдээллийг хүргэх анхдагч платформ"
- Bloomberg/Reuters references **kept** in `/team` ("Bloomberg, Reuters стандартад нийцсэн редакцийн дүрэм" — industry standard) and `/legal/data-sources` (legitimate source attribution with external link)
- Pattern: distinguish brand mimicry (avoid) from industry standards reference (acceptable)

### 5. Footer split-commit strategy (4-1 + 4-5)
- Commit 4-1 wired only Сэдвүүд (categories) at start of Step 4
- Commits 4-2/4-3/4-4 created pages without touching Footer
- Commit 4-5 wired remaining 14 links once all destination pages existed
- **Wins**: each commit can be reverted independently; categories work immediately while company/legal/products pages are still being built
- Implementation: `git restore` to revert Footer to HEAD, apply Сэдвүүд-only edit, commit; then write fully-wired version for later commit

### 6. Disabled signup forms with explicit "Тун удахгүй" labeling
- `/newsletter` and `/api-docs` ship with full marketing content + a visible-but-disabled signup form
- Pattern: `<input disabled aria-disabled>` + `<button disabled title="Тун удахгүй">` + `<p>Тун удахгүй</p>` micro-label below
- Honest UX: shows the future shape without false promises; CTA email link `info@orangenews.mn` provides the working alternative
- Better than ComingSoon for these routes because the marketing content (features, technology) is ready even if the signup pipeline is not

---

## Phase 5 — COMPLETE ✅ (100%)

| Step | Commit | Description |
|---|---|---|
| 5.1 | `bd8ff68` | AI articles in Технологи category alias |
| 5.2-1 | `820b2a4` | Market Watch data layer + `getMarketWatch` helper |
| 5.2-2 | `886d77a` | `/market-watch` route + Header pulse-dot navigation |
| brand | `dd0f4f1` | Footer tagline alignment with brand-independent positioning |
| 5.3-1 | `9823686` (backend) | JSON writer matching frontend schema (orange-news-automation) |
| 5.3-2 | `fa214a1` (backend) | GitHub Actions cron for `market_data.json` |
| 5.3-data | `4dce6c7` (backend) | First GHA bot auto-commit (verified) |
| 5.followup | `10d3e8f` | MarketSnapshot homepage section live-data wire (rename + 8 cells live, 4 honest stubs) |

Cross-repo phase: 5 frontend commits + 3 backend commits. Backend lives in `orange-news-automation` repo. Real-time market data pipeline now active at `$0/month`.

See `test_phase5.txt` for the regression endpoint list.

---

## Architectural decisions (Phase 5)

### Step 5.1: Category alias map
- `"ТЕХНОЛОГИ" → ["ТЕХНОЛОГИ", "AI"]` in `CATEGORY_ALIASES`
- Frontend filter logic uses `matchValues.includes()` to expand the category match set
- Backend taxonomy unchanged (no `orange-news-automation` repo touched) — pure frontend mapping
- `/category/ai` still functional for power-user URL access — both routes coexist
- Bloomberg pattern: AI as Tech sub-category rather than separate top-level

### Step 5.2: Market Watch website integration
- URL: `/market-watch` — dedicated route, not a category alias
- 3-signal Market Watch detection (mirrors `fb_poster_live.py` heuristic from automation repo)
- Image hosting: GitHub raw URL with date-stamped filename
- Smart fallback chain: `post_00_YYYYMMDD.png` → `market_watch_thumbnail.png`
- Header navigation: leftmost prominent placement with pulse-dot animation
- Mobile drawer: same prominent placement, first item with pulse-dot
- Empty state copy: "Өнөөдрийн зах зээлийн өдрийн тойм тун удахгүй гарна"
- Body source priority: `post_text` first (clean), `full_post` fallback
- Forward compatibility: when daily images commit, primary URL wins automatically

### Step 5.3: Real-time market data pipeline (cross-repo)
- Backend repo: `orange-news-automation` (separate from frontend)
- File: `market_data.json` at repo root (canonical filename)
- Cron: `*/30 * * * *` — 30-min frequency (free-tier conservation)
- Schema: exact match to `MarketInstrument` type — no transformation layer needed
- Auto-commit pattern with `[skip ci]` tag to prevent CI loops
- GHA bot identity for auto-commits (audit trail)
- CDN cache: 5-min lag acceptable for non-trading-floor consumers
- Frontend auto-promotion: mock fallback bypassed when `market_data.json` exists at raw URL
- Free APIs only: yfinance + CoinGecko + Binance + Mongolbank ($0/month total)
- `mntusd` via ExchangeRate-API (Mongolbank XML parse complexity vs free reliability tradeoff)

### Brand consistency
- "Mongolian Bloomberg" framing removed throughout site
- `/about` + Footer + brand identity now use "анхдагч платформ" (pioneer positioning)
- Trademark-safe brand independence — Bloomberg/Reuters references retained only as industry standards (`/team`, `/legal/data-sources`)

### Followup: homepage MarketSnapshot wiring (`10d3e8f`)
- Caught post-Phase-5.3: homepage "Зах зээлийн хараа" section still rendered hardcoded mock (SPX 5,247.18, BTC $68,420) while TickerBar + `/markets/[ticker]` flowed live data
- File renamed: `src/components/home/MarketWatch.tsx` → `MarketSnapshot.tsx` to resolve naming collision with the Phase 5.2 `/market-watch` route — the homepage 4-quadrant grid is a *snapshot*, the route is the daily *briefing*
- 8 of 12 cells wired to live `instruments` (passed through from `page.tsx` — zero extra fetch)
- 4 cells without backend coverage (SOL, MSE TOP-20, Оюу Толгой, Зэс) ship as honest stubs: italic muted label + `≈` prefix + em-dash change + `title="Амьд өгөгдөл удахгүй идэвхжинэ"` tooltip
- Discriminated-union `Cell = LiveCell | StubCell` → exhaustive render branches
- Defensive: missing instrument auto-degrades to `≈ —` stub (no runtime crash if backend trims an instrument)
- `markets` export in `mock-data.ts` flagged `@deprecated` for Phase 6 removal — kept in place to avoid mid-phase breaking removals
- Pattern reuse: same "honest disabled state" approach as Phase 4.6 disabled signup forms — show what will exist, mark clearly that it isn't live yet

---

## Phase 6.2 — COMPLETE ✅ (Plan C — /mse Bloomberg-grade MSE route)

Day 4 marathon (2026-05-04). 13 commits, 8 mse.mn datasets, 6 polished components, full directional color semantics, sticky responsive ticker, Plan A migration of homepage MSE TOP-20 cell.

| Step | Commit | Description |
|---|---|---|
| 1 | `ac6d341` | Foundation: `fetchMseData` + 8 MSE types + Header MSE tab |
| 2 | `e548663` | `/mse` skeleton + 6 raw components rendering live data |
| 3.1+3.2 | `ebf20c5` | `MseTickerRibbon` (Bloomberg marquee) + `SectionHeader` helper + page restructure |
| 3.3 | `8a23d2c` | `MseTop20Members` table polish |
| 3.4 | `d632d7a` | `MseStockMovers` gainers/losers polish |
| 3.5 | `2a5ae26` | `MseStockAmount` volume table polish |
| 3.6 | `57ceb5b` | `MseMiningTrades` commodity table polish |
| 3.7 | `d2ddada` | `MseListedCompanies` directory polish |
| 3.8 | `28b02a5` | Footer MSE link + Movers section header copy (Өсөгчид→Өсөлттэй, Бууруулагчид→Бууралттай) |
| 3.9.1 | `4afe6bb` | Ticker speed slowdown (120s/180s) |
| 3.9.2 | `4b62733` | Price column join across Top20 / mseAList / mseBList / stockAmount |
| hotfix | `f4553cd` | Split ticker var families: `--animate-ticker-*` (TickerBar) vs `--animate-mse-ticker-*` (MseTickerRibbon) |
| hotfix | `68e5d53` | Homepage Newsletter honest-UX (mirror `/newsletter` Phase 4.4.6 disabled-form pattern) |
| 4.1 | `7f067eb` | MarketSnapshot Plan A — synthesize `instruments.msetop20` from mse.mn marquee; replace 3 fake-value stubs (SOL/Оюу Толгой/Зэс) with honest em-dash |

**Plan B vs Plan C (decision retained for reference):**
- **Plan B** (originally drafted in Phase 6.2 backlog): separate `/stocks/mongolia` route, TradingView embed fallback, deferred `mongolia_stocks` payload addition to `market_data.json`
- **Plan C** (chosen, shipped): full `/mse` route via direct mse.mn Server Actions integration. 8 datasets (`marquee`, `stock_amount`, `stock_up`, `stock_down`, `comex_trade`, `mseA_list`, `mseB_list`, `top20_list`), no TradingView dep, source-of-truth pricing.

**Routes shipped:**
- `/mse` — full Bloomberg-grade landing page
- Header tab "MSE" between Монгол and Санал бодол
- Footer link "MSE" first in "Зах зээл" column
- Homepage `MarketSnapshot` MSE TOP-20 cell wired live (was silently em-dash since `58e3e22` due to `TICKER_SLUG_MAP` whitelist filter dropping the backend's market_data.json#msetop20 entry)

### Architectural decisions (Phase 6.2)

#### 1. Sibling fetcher pattern — `src/lib/fetch-mse-data.ts`
- Mirrors `fetch-market-data.ts` envelope: ISR 30 min revalidate, mock fallback, env override (`MSE_DATA_URL`)
- 7 internal normalizers (marquee/stockMovers/stockAmount/comexTrade/top20/listedCompany/direction-guard)
- Field naming normalized at boundary: `change_pct → changePct`, `amount_mnt → amountMnt`, `started_at → startedAt`, `min_price → minPrice`, `logo_url → logoUrl`
- Sanity check: empty marquee → throw → mock fallback (catches stale-action-ID upstream failures)

#### 2. `--header-height` CSS var — single source of truth for chrome dimensions
- `globals.css @theme`: `--header-height: 68px;` (mobile, derived from `py-3 + h-11 button`); 76px desktop via `@media (min-width: 768px)`
- Consumed by: `Header.tsx` (`h-[var(--header-height)]` on inner grid div) AND `MseTickerRibbon.tsx` (`sticky top-[var(--header-height)] z-20`)
- Future Header redesign updates one line; sticky offsets auto-adjust. Zero magic numbers in components.

#### 3. Ticker var split — separate animation tokens per surface
- `--animate-ticker-mobile/-desktop` (60s/90s) → `TickerBar` (12 items × 2 = 24/cycle, 0.4 items/sec — original feel)
- `--animate-mse-ticker-mobile/-desktop` (120s/180s) → `MseTickerRibbon` (61 items × 2 = 122/cycle, 1.0 items/sec — Bloomberg-pace)
- Why split: shared var + 5× item-count delta produced wrong pace on whichever surface didn't drive the choice. Day 4 hotfix `f4553cd` introduced the split after initial unified slowdown unintentionally degraded TickerBar UX.

#### 4. Marquee→directory price join — `Map<symbol, price>`
- `fetch-mse-data.ts` builds `priceBySymbol = new Map(marquee.map(r => [r.symbol, r.price]))` after individual normalizers
- Attaches `price?: number | null` to top20/mseAList/mseBList/stockAmount rows via immutable `map+spread` (idempotent, React-idiom)
- B-board has ~40% missing coverage (illiquid stocks not in marquee) → render `—` fallback
- Marquee remains the single source of truth for live MSE prices; directory rows are name+code lookup tables enriched with prices at fetch time

#### 5. Per-row vs section-uniform direction coloring
- `MseStockMovers`: section-uniform via `direction: "up" | "down"` prop — uniform `text-up` / `text-down` regardless of individual row sign
- `MseTickerRibbon` + `MseMiningTrades`: per-row via `changeClass(pct)` helper (heterogeneous rows in one table)
- `MseStockAmount`: muted `±%` / `±Abs` (`text-foreground/60`) — Amount is the headline, change is contextual

#### 6. Synthesize-and-inject — Plan A migration in `src/app/page.tsx`
- `fetchMseData()` joined into existing `Promise.all(fetchOrangeNews, fetchMarketData)`
- MSE marquee `MSE` row → synthesized `MarketInstrument` (with empty `history1w`/`history1m`) → spread into `instruments` map at key `msetop20`
- Bypasses `TICKER_SLUG_MAP` whitelist filter (which silently dropped `market_data.json#msetop20` since 58e3e22)
- Graceful fallback chain: live MSE marquee → mock MSE marquee → original `marketInstruments.msetop20` (filtered = undefined) → `live()` helper degrades to em-dash. Net behavior never worse than today.

#### 7. Manual ISO slice for date formatting (`MseMiningTrades.formatDate`)
- `"2026-05-01T12:00:00" → "2026.05.01 12:00"` via `split("T") + replace + slice`
- NOT `Intl.DateTimeFormat` — backend's `started_at` lacks TZ offset; auto-parsers would impose viewer's TZ (Vercel edge = UTC, browser = MNT) producing inconsistent display
- Slice respects backend's published value verbatim. Real localized formatting deferred to future i18n pass.

#### 8. Honest empty-state stubs (mirrors Phase 4.4.6 disabled-form pattern)
- `MarketSnapshot` 3 unfilled cells (SOL/Оюу Толгой/Зэс): `price: "—"`, `changePct: null`
- Replaced earlier hardcoded fake values (`$174.22` / `4,120₮` / `$4.18`) — visually muted, "Амьд өгөгдөл удахгүй идэвхжинэ" tooltip
- Same Bloomberg-pattern visual harmony retained — no decoration, just neutral em-dash
- Reasoning: SOL needs CoinGecko backend (orange-news-automation), Rio Tinto needs LSE/NYSE addition, copper needs commodity feed. All 3 are Phase 7+ scope.

#### 9. Bloomberg-grade typography table system (TH_BASE / TD_NUM)
- Card wrapper: `rounded-md border border-border overflow-hidden` (Mining: `overflow-x-auto` for column-dense scroll on mobile)
- Headers: `font-sans text-xs uppercase tracking-wider font-semibold text-foreground/60` (sans for labels; mono reserved for body data)
- Body numerics: `TD_NUM = "px-4 py-2.5 text-right font-mono tabular-nums text-foreground/60"`
- Symbol column: `font-mono font-semibold text-foreground` (neutral, not accent — symbol is data not action; matches mse.mn convention)
- Names: `font-serif-body` (Merriweather, Mongolian Cyrillic-friendly)
- No zebra; only `border-b border-border last:border-b-0` between rows
- `hover:bg-muted/10` (subtle, ambient, not buzzy)
- TH_BASE + TD_NUM constants declared locally per component (not extracted to shared utility — YAGNI; consolidation deferred to housekeeping commit)

#### 10. Action-ID rotation tolerance (backend `orange-news-automation` repo)
- mse.mn Server Actions hash rotates ~1-3 months per Next.js redeploy
- `mse_data_fetcher.py`: stale-action detection via `Content-Type != "x-component"` (NOT 4xx — mse.mn returns 200+homepage HTML when action stale)
- Auto-rediscovery: scan `/_next/static/chunks/*.js` for action-ID pattern (high-confidence regex), brute-force probe fallback
- Logged to `errors[]` in `mse_data.json` for operator visibility
- See `docs/mse_phase6.2_endpoint.md` in `orange-news-automation` repo for full mechanics + 28-dataset enumeration (8 in MVP, 20 reserved for Phase 6.3+)

#### 11. PRICE_FMT formatter — local declaration accepted, shared extraction deferred
- `Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })` declared locally in 3 components (Top20, ListedCompanies, StockAmount aliases existing DEC_FMT)
- Locale `en-US` consistent with TickerRibbon + Movers; comma separator universally readable in financial contexts
- Future Mongolian locale (`mn-MN`, space separator: `162 901 009`) deferred to i18n pass
- DRY refactor (extract to `src/lib/formatters.ts`) flagged for a later housekeeping commit

#### 12. Honest UX hotfix on homepage Newsletter (`68e5d53`)
- Before: form looked functional (`type="email"` enabled, "Бүртгүүлэх" CTA, "Spam үгүй" copy) but had NO submit handler → silently deceptive
- After: matches `/newsletter` Phase 4.4.6 pattern — `disabled aria-disabled="true"`, `title="Тун удахгүй"`, "Бүртгэл удахгүй нээгдэнэ" copy + `mailto:info@orangenews.mn` fallback
- Real Resend Audiences integration → Phase 7.2

---

## Phase 6 — Backlog (DETAILED SCOPE)

Phase 6 emphasis: **Mongolian-first content depth + domestic equities**. The Phase 5 pipeline brought global market data to parity with Bloomberg-style coverage; Phase 6 builds the home-market story (MSE, mining, FDI) that justifies the "Mongolian-first anchor" positioning from `/about`. Phase 6.2 SHIPPED above; 6.1 / 6.3 / 6.4 remain.

### Phase 6.1: Mongolian content expansion (~2 hours)
**Priority: HIGH** — immediate user value, no API research needed, mostly backend.

**Backend** (`orange-news-automation` repo):
- Add Mongolian RSS feeds to `orange_rss_collector.py`:
  - Montsame (state news agency): `https://montsame.mn/rss` — verify endpoint live
  - Mongolbank: research RSS availability (may need scrape fallback)
  - iKon.mn, Gogo.mn, news.mn — business / economy sections specifically
  - Mining sector: targeted feeds (gogo.mn/business, mining-specific outlets)
  - Foreign investment news sources (FDI focus)
- Topic quota update: Mongolia 2–3 posts/day (currently 1)
- Source attribution preserved in `orange_translator.py` (don't overwrite original byline)
- Test new feeds against `classify_topic()` to confirm they land in Mongolia category, not Other

**Frontend** (this repo):
- Verify `/category/mongol` renders new articles (no code change expected if backend pipeline works)
- Optional: `featured: true` flag in article schema → Header pinned banner for high-priority Mongolia content

**Acceptance:** `/category/mongol` shows 5+ fresh Mongolian articles per day, mix of state news + business + mining.

### Phase 6.2: MSE stocks section — ✅ SHIPPED via Plan C (see `Phase 6.2 — COMPLETE` above)

**Status:** Realized 2026-05-04 as Plan C (`/mse` route + 8 mse.mn datasets) instead of the originally drafted Plan B (`/stocks/mongolia` + TradingView embed). The Plan B description that lived in this section has been retired — refer to the `Phase 6.2 — COMPLETE` block above for the full architectural record (12 architectural decisions, 13 commits, route + Header + Footer + MarketSnapshot integrations).

Notable differences between Plan B (drafted) and Plan C (shipped):
- Plan B assumed no MSE API → TradingView fallback. Plan C discovered mse.mn's Next.js Server Actions endpoint (see `docs/mse_phase6.2_endpoint.md` in automation repo) — direct integration, no TradingView dep.
- Plan B route was `/stocks/mongolia`. Plan C route is `/mse` (broader scope: index + companies + commodities + movers, not just stocks).
- Plan B contemplated extending `market_data.json` with `mongolia_stocks`. Plan C added `mse_data.json` as a separate file (sibling fetcher pattern), preserving market_data.json's clean global-instruments shape.
- Plan B planned `assetClass: "equity"` extension. Plan C kept the existing AssetClass union unchanged; MSE TOP-20 synthesizes as `asset: "index"`.

### Phase 6.3: Mining + foreign investment focus (~1 hour)
**Priority: LOW** — content tagging refinement.

**Backend:**
- Topic tagging extension: "Уул уурхай" (mining) as recognized subcategory in `classify_topic()`
- "Гадаад хөрөнгө оруулалт" (FDI) tag
- Classification logic: keyword + source-domain combined heuristic (mining-domain article + mining keywords → high confidence)

**Frontend:**
- Decision: dedicated `/category/mining` route OR tag-filter UI on `/category/mongol` page
- If dedicated: add to `CATEGORY_SLUG_MAP` + `CATEGORY_ALIASES`, mirror existing pattern from Phase 5.1 AI alias
- If filter UI: chip-row component above article feed, query-string driven

**Acceptance:** Mining + FDI articles surfaceable as a distinct stream, either via URL or filter.

### Phase 6.4: Existing deferred items (carry-over from prior backlogs)

**User-facing features:**
- Search functionality (Header search button currently inert)
- Bookmark feature (localStorage + Header bookmark icon)
- Article ticker tagging → related news on `/markets/[ticker]`
- Individual US stocks: NVDA, AAPL, TSLA (requires paid API — CoinGecko free tier doesn't cover equities)
- Additional chart timeframes: 3M, 1Y (requires backend ≥252-day daily depth)
- Live news feed widget on `/market-watch`

**Infrastructure / migration:**
- Hostinger → orangenews.mn domain migration (set `NEXT_PUBLIC_SITE_URL` post-cutover)
- Cancel Hostinger subscription post-migration
- Vercel cron for `translated_posts.json` (currently manual git push from automation repo)
- Real Impressum business registration details (post legal entity registration)
- Real address + phone for Contact page
- Newsletter Mailchimp integration (replace disabled signup form)

**Channel expansion:**
- Mobile app (iOS / Android)
- Podcast platform integration

**Code hygiene / refactor:**
- `CHART_TONES` → `globals.css` design tokens (`--color-up`, `--color-down`)
- `formatPrice` DRY refactor (call `formatValue()` internally)
- Remove `markets` export from `mock-data.ts` (already `@deprecated` since Phase 5.followup-1)
- Component testing setup (Vitest + Testing Library)
- Lighthouse performance audit
- Accessibility (WCAG AA) audit
- Backend canonicalization: rename `assetClass` → `asset`, `"forex"` → `"fx"`, history shape → `number[]` in `orange-news-automation` so the frontend normalizer (Phase 5.followup-2) can be retired

---

## Phase 7 — Reservations (next sessions)

### Phase 7.1 — Article archive — ✅ COMPLETE (Day 5, shipped 2026-05-05)
**Status:** Shipped as MVP + RSS scope. Backend per-day snapshots + index manifest live; frontend fetcher does archive lookup; RSS feed expanded to 7-day window; `/articles/[slug]` resolves archived slugs via archive-search fallback.

**Problem solved:** `fetchOrangeNews()` formerly read `translated_posts.json` at HEAD; the daily pipeline overwrote it, so yesterday's articles vanished from `/articles/[slug]`, `/category/[cat]`, and `/rss.xml` once today's pipeline ran. Routes existed and worked — only the data layer was daily-replaced.

**Backend (`orange-news-automation`, commit `31930e0`):**
- `archive_writer.py` snapshots `translated_posts.json` → `archive/posts_{YYYY-MM-DD}.json` (wrapped: `{date, generated_at, source, posts[]}`) and upserts `archive/index.json` (sorted desc by date). Idempotent; mtime guard prevents stale snapshots if Phase 2 (translator) failed.
- New Phase 3.5 step in `orange_news.yml` + `market_watch_live.yml`, both `if: always()`. Phase 4 commit step extended to stage `archive/`.
- `.gitignore` `!archive/` + `!archive/*.json` allowlist past the existing `*.json` blanket — without this every archive write would have been silently dropped by git.
- See `docs/archive_phase7.1.md` in the backend repo for full schema + workflow integration notes.

**Frontend (this repo, commits `1acda86` → `59a21db` → `4022c61`):**
- `lib/fetch-orange-news.ts`: new `fetchArchiveIndex` + `fetchArchiveDay(date)` helpers (raw GitHub URLs, same 30-min ISR window as today feed). `fetchOrangeNews({archiveDays: N})` opt-in unions the most recent N dates by score desc; no-arg call preserves today-only behavior. `getPostBySlug(slug)` checks today first then walks archive desc. `mapPost()` threads per-day `publishedAt` from archive metadata. Cross-bucket `globalIdx` prevents `generateId` collisions.
- `lib/types.ts`: `FetchOrangeNewsOptions`, `ArchiveIndexEntry`, `ArchiveDay`.
- `app/rss.xml/route.ts`: `fetchOrangeNews({archiveDays: 7})`. Top-20-by-score + 1h ISR preserved. Window as `RSS_ARCHIVE_WINDOW_DAYS` constant.
- `app/articles/[slug]/page.tsx`: `getPostBySlug(slug)` for resolution, `fetchOrangeNews({archiveDays: 7})` for prev/next nav. Caught during Checkpoint D verification — earlier checkpoints had the helper but had not wired it into the route.

**Verification (D):** Stub server with fabricated 2-day archive served via `python3 -m http.server`. Today fast-path 200, yesterday archive-fallback 200 (body confirmed to render the stub headline), nonexistent slug 404. Production-URL re-test against the live 1-day archive: today 200, fabricated yesterday 404 (correct — real archive has no Day 4), nonexistent 404.

**Migration policy:** Fresh start from 2026-05-05. Apr 23 – May 3 articles intentionally not migrated.

**Deferred to Phase 7.1.x:**
- Date-filter UI on `/category/[cat]` — design decision postponed until 7+ days of archive accumulate so we can observe what users want. No pagination convention exists in the repo today; the design needs its own pass.
- `app/category/[cat]/page.tsx` widening to consume `archiveDays`. Category route still calls today-only `fetchOrangeNews()`. The explicit acceptance line (`/category/finance shows N days × 10 posts`) is partially met via `/articles/[slug]` resolution + RSS expansion; the category page itself is a follow-up.

---

### Phase 7.2 — Subscribe + admin layer (Day 6+)
**Status:** RESERVED — UX placeholder shipped (honest disabled forms with `mailto:info@orangenews.mn` fallback), persistence pending.

**Goal:** capture homepage Newsletter form + `/newsletter` form emails for marketing communication.

**Recommended stack:** [Resend](https://resend.com)
- **Resend Audiences** = built-in mailing list (capture + send from one tool, no separate Mailchimp / Sendinblue / Brevo account)
- Free tier: 3K emails/month, 100 contacts (sufficient for early-stage list)
- Official Next 16 SDK (`resend` npm package) + `@react-email/components` for HTML email templates

**Implementation steps:**
1. `npm install resend @react-email/components`
2. Create `src/app/api/subscribe/route.ts` Server Action — accept email, validate, call `resend.contacts.create({ audienceId, email })`
3. Add double opt-in confirmation email (GDPR-friendly, also reduces spam/bot signups)
4. Wire homepage `Newsletter.tsx` form + `/newsletter` page form to the new endpoint (un-disable inputs, add submit handler with loading + success state)
5. Admin export: use Resend dashboard directly (CSV download), OR add `src/app/api/admin/subscribers/route.ts` with auth gate
6. Set `RESEND_API_KEY` + `RESEND_AUDIENCE_ID` env vars in Vercel project settings

**Acceptance:**
- Homepage form: enter email → "Confirmation email sent" inline feedback
- User receives confirm email with verify link (double opt-in)
- After confirm: contact appears in Resend Audience dashboard
- Admin can export CSV via Resend UI or our admin endpoint
- Both Newsletter.tsx + /newsletter page submit successfully (single endpoint, two surfaces)

**Honest-UX hotfix shipped during Phase 6.2:** commit `68e5d53` — Newsletter.tsx form was silently deceptive (no submit handler, fake "Spam үгүй" copy implying it worked). Now matches the `/newsletter` page's Phase 4.4.6 disabled-form pattern. Phase 7.2 will un-disable both forms once backend persistence ships.

---

### Phase 7.3 — "Шууд үзэх" video aggregation (Day 7+)
**Status:** RESERVED — feature requires architectural decisions before implementation. 4-6 hour fresh-mind session, not a hotfix.

**Founder's request (Day 6):** the homepage "Шууд үзэх" section currently shows a hardcoded placeholder card (Fed press conference). Make it dynamic — surface real Live + Recent video content from major financial news channels, refreshed automatically.

**Open architectural decisions (lock before implementation):**

1. **Source strategy — YouTube Data API v3 vs YouTube RSS feeds.**
   - **API:** real-time `liveBroadcastContent=live`, search by channel, full metadata. Quota: 10,000 units/day free tier; `search.list` = 100 units/call; `videos.list` = 1 unit/call. Polling cost is real.
   - **RSS:** per-channel `https://www.youtube.com/feeds/videos.xml?channel_id=UCxxx`. Free, no quota, but no live-stream signal — only "recently uploaded" video metadata.
   - **Hybrid:** RSS for the "Recent" feed (cheap), API for "Live" detection (expensive only when needed).

2. **Channel selection.** Founder mentioned Bloomberg / WSJ / Reuters / World Bank / FT. Need final list with channel IDs (UC...). Some have multiple channels (Bloomberg Television vs Bloomberg Markets vs Bloomberg Quicktake) — pick one each or aggregate?

3. **Editorial curation rules.** Auto-include everything? Score-rank by view count / recency / channel weight? Manually curate via an allowlist of video IDs? Filter out non-finance content (sports, politics-only, opinion)?

4. **Auto-refresh cadence.** Live signal: every 5 min? 15 min? Recent feed: hourly? Daily? Cron path mirrors `mse_update.yml` — backend writes a JSON, frontend reads via raw GitHub URL with ISR.

5. **UX — embed vs link-out.** YouTube `<iframe>` embed in the section (heavier page weight, autoplay + cookie + GDPR concerns) vs thumbnail + click-out to youtube.com (lighter, less engagement).

**Implementation surface (preliminary):**
- Backend (`orange-news-automation`): new `youtube_fetcher.py` + new `.github/workflows/youtube_update.yml`. Writes `youtube_data.json` (or per-source files mirroring the archive pattern).
- Frontend (this repo): new `lib/fetch-youtube.ts` consumer + types. Replace the hardcoded "Шууд үзэх" card on the homepage with a dynamic component reading from the live feed. Mock fallback similar to `fetch-orange-news.ts` for offline / fetch-failure states.

**Acceptance (preliminary, refine when scope is locked):**
- Homepage "Шууд үзэх" section shows real Live broadcast(s) when any tracked channel is live, falls back to most-recent video otherwise.
- Video metadata refreshes within the chosen cadence without manual intervention.
- No regression on existing homepage rendering when `youtube_data.json` is unavailable (mock fallback path).

**DO NOT touch the "Шууд үзэх" section before the architectural decisions above are locked.** The current hardcoded card is the documented placeholder for this phase.

---

## Completed phases

### Phase 3 — COMPLETE ✅

| Step | Commit | Description |
|---|---|---|
| 1 | `5d16d87` | Article detail route + clickable cards (`/articles/[slug]`) |
| 2 | `ed66b58` | Wire Hero, SecondaryArticles, BreakingStrip + `isMarketWatch` flag |
| 3A | `bf60ff3` | Layout refactor — hoist TickerBar/Header/Footer to root layout |
| 3B | `1b503fb` | Category dynamic routing (`/category/[cat]`) + nav links wired |

#### Architectural decisions (Phase 3)

**1. `app/layout.tsx` is the single source of shared chrome**
- `TickerBar`, `Header`, `Footer` mounted once in root layout
- All routes (current and future) inherit chrome automatically — no per-page imports
- Discovered & fixed Step 1 oversight: `/articles/[slug]` had no chrome

**2. `CATEGORY_SLUG_MAP` — single source of truth (`lib/category-slug.ts`)**
- 8 entries: URL slug ↔ `DisplayCategory` (Cyrillic)
- `as const satisfies Record<string, DisplayCategory>` enforces value-set membership at compile time (catches typos / drift)
- Imported by `/category/[cat]` route + `Header` nav — adding a new category = one edit

**3. `ArticleFeed` is a reusable presentation layer**
- `heading?: string | null` controls header section:
  - `undefined` → `"Сүүлийн мэдээ"` + АВТО badge (homepage default, backward-compatible)
  - `null` → no header section (category page case)
  - `string` → custom heading without badge (future use)
- Aria attribute swap: `aria-labelledby="feed-heading"` when header exists, `aria-label="Нийтлэлүүд"` otherwise

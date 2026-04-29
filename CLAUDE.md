@AGENTS.md

# Orange News Website — Project State

## Current phase: Phase 4 — IN PROGRESS (Step 2/3, ~90%)

| Step | Commit | Description |
|---|---|---|
| 1a | `b70e15e` | OG helper + bundled fonts (Noto Sans Cyrillic+Latin subset, ~92KB) |
| 1b | `6ab992f` | opengraph-image routes (3 segments) + Twitter card metadata + env-aware `metadataBase` |
| 2a | `59e42a8` | Market data layer (types, slug map, fetcher, mock data) |
| 2b | `6445941` | TickerBar wired to live data + clickable links to `/markets/{slug}` |
| 2c | `2239f75` | `/markets/[ticker]` detail page (Hero + tabbed Chart + Stats grid) |
| 2d-1 | `0b446c6` | Hero LineChart reuse + real SPX 30-day data wiring |
| 2d-2 | `da1976c` | MNT/USD → USD/MNT (Bloomberg FX convention fix) |
| 3 | _TBD_ | _scope to be defined_ |

Steps 1+2 production-verified on https://orangenews-website.vercel.app — see `test_phase4.txt` for regression endpoints.

**Pending manual test** (Step 1): Facebook Sharing Debugger — https://developers.facebook.com/tools/debug/ — verifies the Facebook scraper picks up the OG image. Target: `/articles/deepseek-v4-arrives-with-near-state-of-the-art-intelligence-1pucju`.

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

## Phase 4 — remaining

- **Step 3** (TBD): scope undefined. Candidates from backlog:
  - Search wiring (Header search button currently inert)
  - Bookmark feature (localStorage + Header bookmark icon)
  - Hostinger migration evaluation
  - `tsconfig.json` exclude `backups/` (TS noise cleanup)

### Backlog (cross-step)
- Vercel cron migration for `translated_posts.json` updates (Stage 2 backend pipeline)
- Phase 5: migrate `CHART_TONES` to `globals.css` tokens
- Phase 5: refactor `formatPrice(instrument)` to call `formatValue(price, asset)` (DRY)
- Phase 5: ticker tagging on articles → related news on `/markets/[ticker]` detail page
- Phase 5: 1D / 1Y timeframe tabs (requires backend intraday + 252-day depth)

See `test_phase4.txt` for regression endpoint list.

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

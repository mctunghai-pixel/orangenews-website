@AGENTS.md

# Orange News Website — Project State

## Current phase: Phase 5 — COMPLETE ✅ (100%, cross-repo: frontend + backend pipeline)

See `Phase 5 — COMPLETE` section below. Phase 4 retained as reference.

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

## Phase 6 — Backlog (not yet scoped)

### User-facing features
- Search functionality (Header search button currently inert)
- Bookmark feature (localStorage + Header bookmark icon)
- Article ticker tagging → related news on `/markets/[ticker]`
- Individual stocks support: NVDA, AAPL, TSLA
- Additional chart timeframes: 3M, 1Y
- Live news feed widget on `/market-watch`

### Infrastructure / migration
- Hostinger → orangenews.mn domain migration
- Cancel Hostinger subscription
- Vercel cron for `translated_posts.json`
- Real Impressum business registration details
- Real address + phone for Contact page
- Newsletter Mailchimp integration

### Channel expansion
- Mobile app (iOS / Android)
- Podcast platform integration

### Code hygiene / refactor
- `CHART_TONES` → `globals.css` design tokens
- `formatPrice` DRY refactor
- Component testing setup
- Lighthouse performance audit
- Accessibility (WCAG AA) audit

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

@AGENTS.md

# Orange News Website — Project State

## Current phase: Phase 4 — IN PROGRESS (Step 1/3, 33%)

| Step | Commit | Description |
|---|---|---|
| 1a | `b70e15e` | OG helper + bundled fonts (Noto Sans Cyrillic+Latin subset, ~92KB) |
| 1b | `6ab992f` | opengraph-image routes (3 segments) + Twitter card metadata + env-aware `metadataBase` |
| 2 | _pending_ | MarketWatch detail page (`/markets/[ticker]`) |
| 3 | _TBD_ | _scope to be defined_ |

Step 1 production-verified on https://orangenews-website.vercel.app — 5 OG endpoints (homepage, article, category, article-fallback, category-fallback) all rendering 1200x630 PNG with Mongolian Cyrillic.

**Pending manual test**: Facebook Sharing Debugger — https://developers.facebook.com/tools/debug/ — verifies the Facebook scraper picks up the OG image. Target URL: `/articles/deepseek-v4-arrives-with-near-state-of-the-art-intelligence-1pucju`.

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

## Phase 4 — remaining

- **Step 2** (next): MarketWatch detail page (`/markets/[ticker]`) — plan pending
- **Step 3** (TBD): scope undefined

### Backlog (not yet scoped into a step)
- Hostinger migration evaluation
- Vercel cron migration for `translated_posts.json` updates
- Search wiring (Header search button currently inert)
- Bookmark feature (localStorage + Header bookmark icon)
- `tsconfig.json` exclude `backups/` (TS noise cleanup)

See `test_phase3.txt` for the regression endpoint list.

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

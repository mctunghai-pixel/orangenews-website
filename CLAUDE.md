@AGENTS.md

# Orange News Website — Project State

## Current phase: Phase 3 — COMPLETE ✅

| Step | Commit | Description |
|---|---|---|
| 1 | `5d16d87` | Article detail route + clickable cards (`/articles/[slug]`) |
| 2 | `ed66b58` | Wire Hero, SecondaryArticles, BreakingStrip + `isMarketWatch` flag |
| 3A | `bf60ff3` | Layout refactor — hoist TickerBar/Header/Footer to root layout |
| 3B | `1b503fb` | Category dynamic routing (`/category/[cat]`) + nav links wired |

All steps deployed to https://orangenews-website.vercel.app

---

## Architectural decisions (Phase 3)

### 1. `app/layout.tsx` is the single source of shared chrome
- `TickerBar`, `Header`, `Footer` mounted once in root layout
- All routes (current and future) inherit chrome automatically — no per-page imports
- Discovered & fixed Step 1 oversight: `/articles/[slug]` had no chrome

### 2. `CATEGORY_SLUG_MAP` — single source of truth (`lib/category-slug.ts`)
- 8 entries: URL slug ↔ `DisplayCategory` (Cyrillic)
- `as const satisfies Record<string, DisplayCategory>` enforces value-set membership at compile time (catches typos / drift)
- Imported by `/category/[cat]` route + `Header` nav — adding a new category = one edit

### 3. `ArticleFeed` is a reusable presentation layer
- `heading?: string | null` controls header section:
  - `undefined` → `"Сүүлийн мэдээ"` + АВТО badge (homepage default, backward-compatible)
  - `null` → no header section (category page case)
  - `string` → custom heading without badge (future use)
- Aria attribute swap: `aria-labelledby="feed-heading"` when header exists, `aria-label="Нийтлэлүүд"` otherwise

---

## Phase 4 — pending priorities (decision needed)

- Hostinger migration evaluation
- OG image generation per article
- Vercel cron migration for `translated_posts.json` updates
- Search wiring (Header search button currently inert)
- Bookmark feature (localStorage + Header bookmark icon)
- MarketWatch detail page (`/markets/[ticker]`)

See `test_phase3.txt` for the regression endpoint list.

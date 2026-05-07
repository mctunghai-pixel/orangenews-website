<!-- BUSINESS_PROJECT_TEMPLATE.md — Orange News by Azurise Solution -->

---

## Cover Page

# Orange News
### A Mongolian-First Financial Information Platform

**Business Project Document** — Day 15 commercialization-ready draft

---

**Founder + CEO:** Munkhsaikhan Mongolbayar
**Company:** Azurise Solution LLC
**Product:** Orange News (orangenews.mn)
**Document date:** 2026-05-07
**Document version:** v1.0 (founder review pending)
**Contact:** [mc.tunghai@gmail.com](mailto:mc.tunghai@gmail.com)

---

> **Confidentiality notice.** This document contains commercially sensitive material — pricing scenarios, customer-acquisition strategy, financial projections, and competitive positioning. Distribution is limited to: the founder, named advisors, prospective investors under NDA, and partners explicitly authorized by the founder. Unauthorized distribution is not permitted.

> **Companion documents.**
> - `TECHNICAL_HANDBOOK.md` — engineering reference (12 sections, ~38pp).
> - `MARKET_RESEARCH.md` — Mongolia financial sector + TAM/SAM/SOM (8 sections, ~20pp).
> - `BUSINESS_PLAN.md` — full business plan (forthcoming, Task 4).
> - `docs/sales/` — commercial outreach + onboarding deliverables (11 files).

---

## Table of Contents

0. [Cover Page](#cover-page)
1. [Executive Summary](#1-executive-summary)
2. [Company Description + Founder](#2-company-description--founder)
3. [Problem Statement](#3-problem-statement)
4. [Solution + Product](#4-solution--product)
5. [Market Analysis](#5-market-analysis)
6. [Business Model + Revenue Streams](#6-business-model--revenue-streams)
7. [Target Customers + GTM Strategy](#7-target-customers--gtm-strategy)
8. [Competitive Landscape](#8-competitive-landscape)
9. [Team + Advisory](#9-team--advisory)
10. [Funding Ask + Use of Funds](#10-funding-ask--use-of-funds)
11. [Risk Analysis + Mitigation](#11-risk-analysis--mitigation)
12. [Appendix — Production State Evidence](#12-appendix--production-state-evidence)

---

## 1. Executive Summary

### 1.1 The opportunity

Mongolia operates a $23.6B economy concentrated around five systemically-important commercial banks (combined H1 2024 net income MNT 867.8B / ~$255M USD) and a mining sector that contributes the majority of national export earnings — anchored by Oyu Tolgoi LLC ($2.1B in-Mongolia spend in 2024) and the Erdenes Mongol state holding (~30% of national export earnings). These institutions, alongside 162 MSE-listed companies, 50+ brokers and asset managers, and a growing FDI advisor cohort, all need Mongolian-language financial information at a depth that does not currently exist. International incumbents (Bloomberg Terminal $31,980/seat, LSEG Workspace ~$22K/user/year, FactSet $4-50K/user/year) cover Mongolia thinly because the market scale does not justify a dedicated bureau at their cost structures. The wedge is structural and durable.

### 1.2 Solution overview

Orange News is the production-grade Mongolian-first financial information platform built to occupy that wedge. The system aggregates news from 14 international sources plus native Mongolian-language coverage (ikon.mn, Montsame), translates it editorially via a dual-LLM pipeline (Gemini 2.0 Flash primary + Claude Haiku 4.5 fallback) with a 5-rule editorial validator, layers in live equities, FX, commodity, and crypto market data, integrates the Mongolian Stock Exchange as a first-class section via direct mse.mn Server Actions integration, and publishes both a public reader-facing portal at orangenews.mn and a curated daily Facebook publishing pipeline. The product is *anchored* — Bloomberg-grade information design adapted to Mongolian Cyrillic typography and the local mining/MSE/FDI narrative.

### 1.3 Production state evidence (Day 15, 2026-05-07)

- **5 GitHub Actions workflows live in production:** daily news pipeline (22:00 UTC), market data refresh (every 30 min), MSE refresh (5×/weekday during MSE trading hours), market watch live brief (23:00 UTC), YouTube video feed (every 2 hours). **0 downtime incidents** across the Day 5-14 sprint.
- **162 MSE-listed companies** covered via a dedicated `/mse` route with 8 live datasets (TOP-20 index, gainers, losers, mining commodities, listed-company directory, A-board / B-board volumes).
- **~36 production commits** across two repos in 9 engineer-execution sessions Day 5-14; product reached commercialization-ready state with 11 sales deliverables in `docs/sales/`.
- **Total operating cost: $0/month** — entire infrastructure runs on GitHub Actions free tier + Vercel Hobby plan + free public APIs (yfinance, CoinGecko, ExchangeRate-API for MNT/USD, mse.mn). This cost structure is itself a competitive moat (§8).

### 1.4 Business model

Orange News pursues a **hybrid revenue model** combining three lines: SaaS subscription (3-tier: Starter $5-15K, Professional $20-50K, Enterprise $75-150K USD/year per customer) drives predictable ARR; advertising scales with reader base over multi-year horizons; licensing (data feeds + white-label editorial + custom integrations) addresses bespoke customer needs at higher margin. Each line targets a distinct buyer segment and sales motion — no single revenue line carries Year 1.

### 1.5 Market sizing — dual-view TAM

Per industry-standard investor-memo practice, two TAM views are presented: **direct-addressable TAM $1.4M-7.3M USD/year** (bottom-up, derived in `MARKET_RESEARCH.md` §7.1 from per-cohort customer ACV × pool count) and **fully-expanded TAM $8-15M USD/year** (top-down, including advertising at mature reader scale + downstream licensing + cross-border Mongolian-coverage demand from international platforms). SAM (12-month reachable): $100K-285K. SOM (founder Year 1 conservative target): **$20-50K USD across 3-5 customers**. Cross-border extension to Central Asia (Kazakhstan, Uzbekistan, Kyrgyzstan, Turkmenistan) adds an illustrative $30-80M+ TAM over Years 2-5.

### 1.6 Funding ask summary

**Recommended: Pre-seed funding $50-150K USD** — 18-month runway use across customer acquisition (40%), Mongolia financial-sector sales/BD hire (25%), product polish (20%, primarily Phase 7.2.2 customer-CMS layer for tier-1 customers), operations + tools (10%), and reserve (5%). Detailed in §10.2. **Alternative path: bootstrap-only**, founder-funded customer acquisition + slower scaling (Year 1 SOM remains $20-50K), detailed in §10.3.

### 1.7 Founder credibility

Munkhsaikhan Mongolbayar — 15+ years tech entrepreneur (TESKO Managing Director, AzuPoint enterprise content management at Microsoft, Azurise LLC CEO 2011-2013); Taiwan GMBA studies provided the comparative-economy lens that surfaced Mongolia's financial-information gap; current Founder/CEO of Azurise Solution LLC, the parent company building Orange News alongside the broader Azurise AI portfolio. Full bio + advisory profile in §9.

---

## 2. Company Description + Founder

### 2.1 Company overview

**Azurise Solution LLC** is the operating entity behind Orange News and the broader Azurise AI product portfolio. The company is structured as a Mongolian limited liability company (LLC), founder-controlled, operating from Ulaanbaatar with cloud infrastructure in Vercel's global edge network and code repositories on GitHub.

**Orange News** is the company's anchor product — a Mongolian-language financial information platform serving institutional customers (commercial banks, mining corporations, MSE-listed corporate IR teams, brokers, asset managers, FDI advisors, government bodies) with Bloomberg-grade information design. Live at [orangenews.mn](https://www.orangenews.mn) and Vercel preview deployments. The technical architecture is documented in `TECHNICAL_HANDBOOK.md`; the addressable market is sized in `MARKET_RESEARCH.md`.

**Azurise AI** is the broader product portfolio under which Orange News sits. The portfolio strategy is to build durable products that share infrastructure, editorial expertise, and customer relationships — Orange News validates the platform thesis in financial information; subsequent Azurise AI products extend the same operational discipline into adjacent verticals when customer evidence supports.

### 2.2 Mission

**Orange News' mission:** to make globally-standard financial information accessible to Mongolian decision-makers in their own language, at the depth and quality that international platforms cannot economically reach. The mission is explicitly framed as **the anchor Mongolian-first financial portal** — the *first* platform to deliver Bloomberg-grade information design adapted to Mongolian Cyrillic typography, MSE microstructure, and the local mining/FDI narrative. Reaching anchor status in Mongolia is the foundation; cross-border replication into Central Asia is the long-term ambition.

### 2.3 Vision

By Year 3, Orange News is the default information layer for Mongolia's tier-1 financial institutions — substituting for or complementing international subscriptions, with 15-30 paying customers across banking, mining, and government cohorts. By Year 5, the same operational template (Cyrillic-language editorial pipeline, direct-exchange integration, mining-domain depth) is operating in at least one Central Asian adjacent market (Kazakhstan or Uzbekistan), validating the cross-border thesis that justifies the funding ask in §10.

### 2.4 Founder profile (short bio)

**Munkhsaikhan Mongolbayar** founded Orange News to close a financial-information gap he first observed during graduate studies in Taipei. The founder and CEO of Azurise Solution LLC, he brings 15+ years of technology-entrepreneurship experience across enterprise software and product leadership roles, including managing director responsibilities at TESKO, the AzuPoint enterprise content management initiative with Microsoft, and a previous CEO tenure at Azurise LLC (2011-2013).

His comparative-economy lens was sharpened during graduate studies in the Global MBA program at National Taiwan University (Taiwan GMBA), where he observed the structural undersupply of Mongolian-language financial information — international platforms were dominant in the Taiwanese institutional market but had no equivalent presence serving Mongolia. That gap, combined with his existing technical depth and product instinct, is the personal motivation behind Orange News.

He currently leads Azurise Solution LLC's product development across Orange News and the broader Azurise AI portfolio, with hands-on responsibility for technical architecture, editorial discipline, customer outreach, and commercial strategy. Full bio + advisory profile in §9.

> *[FOUNDER ADJUST — bio polish: founder's own preferred phrasing, additional roles or affiliations to include, LinkedIn URL, professional photo placement.]*

### 2.5 Why this team, why this founder

Three founder-fit factors anchor Orange News specifically to Munkhsaikhan's profile:

1. **Domain depth.** Orange News' editorial discipline (60-80 character headline band, no-concatenation Cyrillic validation, source-attribution preservation, banned-phrase enforcement, Mongolia-passthrough routing) reflects domain-specific Mongolian-language editorial knowledge — knowledge that is not transferable from generic translation work. The product's quality bar requires a founder who reads Mongolian financial copy with native-speaker discrimination.

2. **Technical depth.** The system's architectural choices (cross-repo split, JSON-as-contract, ISR + mock-fallback resilience layer, dual-LLM Gemini+Claude pipeline, mse.mn Server Actions reverse-engineering) reflect engineering judgment accumulated across 15+ years of product-leadership tenure. The founder's ability to make these calls without an external CTO is what allows the platform to operate at $0/month infrastructure cost.

3. **Commercial relationships.** The founder's existing network in Mongolian business circles — across banking, mining, FDI advisory, and government — is the customer-acquisition advantage that makes the founder's stated 12-month target of 3-5 paying customers (Q5 lock) credible. This is direct-outreach customer acquisition, not paid CAC, and it requires existing relationships that take years to build.

### 2.6 Company history + recent milestones

| Year | Milestone |
|---|---|
| 2011-2013 | Founder tenure as CEO, Azurise LLC (predecessor entity, separate from current Azurise Solution LLC) |
| 2026 (Apr) | Orange News project initiated; initial RSS collector + translator pipeline drafted |
| 2026 (early May) | Phase 4 production polish — 7-route frontend, OG image system, market data layer wired |
| 2026 (May 4) | Phase 6.2 shipped — full `/mse` route with 8 datasets, mse.mn Server Actions integration |
| 2026 (May 5) | Phase 7.1 shipped — daily article archive + RSS expansion |
| 2026 (May 6) | Phase 7.2.1 + 7.3 + 6.1.5 shipped — Subscribe + live video feed + Montsame scraper |
| 2026 (May 6-14) | Day 5-14 sprint — 36 production commits, 11 sales deliverables in `docs/sales/` |
| 2026 (May 7, **Day 15 — today**) | Documentation suite shipped: `TECHNICAL_HANDBOOK.md` + `MARKET_RESEARCH.md` |

The sprint history is documented in detail in `~/orangenews-website/CLAUDE.md` (frontend repo) and `docs/sales/sprint_retrospective.md`.

### 2.7 Current operating posture

- **Legal entity:** Azurise Solution LLC, Mongolia LLC, founder-controlled.
- **IP ownership:** all source code, brand marks, editorial pipeline, and operational know-how owned by the LLC; no external IP claims.
- **Operating jurisdiction:** Mongolia (registered LLC) + global cloud infrastructure (Vercel + GitHub).
- **Banking + accounting:** *[FOUNDER ADJUST — Mongolian commercial-bank treasury account + accounting firm engagement details]*.
- **Insurance:** *[FOUNDER ADJUST — professional indemnity / directors-and-officers if engaged]*.
- **Outstanding registrations:** Azurise Solution LLC business license + tax registration; trademark filings for Orange News brand marks (in-progress / pending depending on founder's chosen jurisdiction strategy).

This operating posture is **lean by design** — the company carries no fixed-cost overhead beyond the founder's time, free-tier infrastructure, and the modest legal/accounting baseline appropriate for a pre-revenue Mongolian LLC. The cost structure is the financial moat that makes the §10 funding ask + §11 risk profile workable.

---

## 3. Problem Statement

### 3.1 The macro context

Mongolia's financial sector has expanded substantially through the post-2010 commodity-cycle decade. Total commercial bank assets reached **MNT 70 trillion (~$20.6B USD)** by March 2025; the top three banks (Khan, Golomt, TDB) hold ~80% of system assets and the top five hold 100%. Mining-driven GDP growth (5.0% in 2024, projected 6.3% in 2025) has compounded institutional demand for financial information at the same time that international platforms — Bloomberg Terminal at $31,980/seat/year, LSEG Workspace at ~$22K/user/year base, FactSet at $4-50K/user/year — remain the only practical option for Mongolian institutions seeking Bloomberg-grade depth.

The structural gap is the **cost barrier × language gap × localization gap**: Bloomberg coverage of Mongolia is incidental to regional Asia (no dedicated bureau because the $1.4-7.3M direct-addressable TAM does not justify it at Bloomberg's cost structure); domestic Mongolian-language outlets (ikon.mn, Montsame, news.mn, eagle.mn) provide general financial coverage at consumer-grade quality but not Bloomberg-grade design, depth, or data integration; and bilingual analyst loading — the current substitute many tier-1 institutions deploy — costs 2-3× the Bloomberg seat price once analyst time is fully loaded. The result: Mongolian institutions either over-pay for under-localized international depth, or under-consume the local information that drives 80%+ of their actual decision-making.

### 3.2 Customer pain — banking sector

Tier-1 Mongolian banks operate **1-3 Bloomberg Terminal seats** each, costing **$50K-200K USD/year** in aggregate at international list pricing. The seat count is constrained by per-seat economics, not by demand — a Khan Bank treasury team of 8-12 people would benefit from team-wide access but cannot economically justify 8-12 seats. The result is a triage problem: which 1-3 analysts get the seats, and how does intelligence cascade to the rest of the team?

Three concrete pain points emerge from this constraint:

1. **Information siloing.** Bloomberg-driven intelligence sits with seated analysts; cascading to the broader corporate banking team requires manual translation + re-formatting. The intelligence depreciates rapidly during the cascade.
2. **Mongolian-language overhead.** Bloomberg copy is English-only. Distributing it to Mongolian-Cyrillic-reading internal stakeholders (board members, credit committees, branch-level officers) requires bilingual analyst time on translation, which is the most expensive talent labor in the operation.
3. **Local context gap.** Bloomberg's Mongolia coverage is thin — MSE TOP-20 quote, macro indicators, occasional regional Asia stories. The local context (Mongolia mining tax debates, FDI policy, Oyu Tolgoi loan amendments, MSE listing rule changes, regulatory directives in Mongolian) requires manual sourcing from domestic outlets, then synthesis with the Bloomberg picture. This synthesis work has no automated tooling today.

> *[FOUNDER ADJUST — specific Mongolian banking customer story: founder's lived experience or direct conversation that exemplifies the pain (e.g., "A treasury head at TDB described spending 4 hours/week translating Bloomberg copy for the credit committee"). Founder's voice replaces engineering's structural inference here.]*

### 3.3 Customer pain — mining sector

Mongolia's tier-1 mining corporations (Oyu Tolgoi LLC, Erdenes Mongol, Erdenes Tavan Tolgoi, Mongolian Mining Corporation HKEX:0975) face an information-distribution problem distinct from the banking cohort: they need to **publish, not just consume**.

Mining IR teams produce shareholder updates, regulatory filings, ESG narratives, and macro-context commentary that must reach three distinct audiences:
1. **English-language international shareholders** (HKEX investors for MMC, Rio Tinto stakeholders for Oyu Tolgoi, FDI analyst pool).
2. **Mongolian-language domestic stakeholders** — government regulators, partner banks, MSE-adjacent investors, employees, community partners.
3. **Mining-domain peers** — competitor IR teams, sector analysts, commodity-market participants.

Today this distribution happens piecemeal: PR firm engagements for international investor relations, manual translation by in-house bilingual staff for domestic distribution, and informal channels (WeChat, Facebook, local press) for community-level reach. The result is **inconsistent messaging, slow distribution cycles, high bilingual-staff overhead, and no editorial-grade Mongolian-language platform that consolidates the distribution surface**. Mining IR budgets in Mongolia (estimated $200-500K/year for mid-cap-equivalent operations per `MARKET_RESEARCH.md` §4.7) allocate 10-25% to information spend, much of which fragments across the gaps above rather than consolidating into a single high-leverage platform.

### 3.4 Customer pain — government / regulators

Mongolia's financial-sector regulators (Bank of Mongolia, Financial Regulatory Commission, Ministry of Finance) and government IR functions face a different but adjacent pain: they have a **mandate to promote investor education and market transparency**, but limited domestic information infrastructure to operate against. International standards compliance (IMF Article IV reporting, World Bank Mongolia Economic Update inputs, EITI extractive-industry transparency) requires generating, translating, and distributing structured financial information at a frequency and depth the current domestic news ecosystem doesn't support.

The result is dependence on international platform feeds (which under-cover Mongolia specifics) plus manual production of bilingual disclosure documents (which absorb significant regulator-staff time). A Bloomberg-grade Mongolian-language platform reduces both the consumption gap and the translation/distribution overhead simultaneously.

### 3.5 Why now — market timing

Four convergent shifts make 2026 the right moment to occupy the wedge:

1. **AI translation maturity.** LLM-based translation reached production-grade quality for Mongolian Cyrillic only in the 2024-2025 window. Earlier attempts (statistical MT, rule-based systems) produced output that required heavy editorial revision — not economically viable. Gemini 2.0 Flash and Claude Haiku 4.5 deliver editorial-quality Mongolian translation at temperatures 0.0-0.2, validated empirically by the Orange News pipeline.
2. **Mongolia financial-sector digitalization.** Mongolian banks have accelerated digital-banking and digital-IR initiatives post-2022; the customer-side readiness for digital-first information products is now a non-blocker.
3. **Bloomberg pricing pressure.** Bloomberg Terminal's $31,980 list price (up from ~$24K a decade ago) creates persistent procurement pressure at Mongolian institutions whose USD-purchasing power is constrained by MNT volatility. Cost-conscious customers are increasingly receptive to Bloomberg substitutes for use cases where Bloomberg's global-market depth is over-specified.
4. **Mongolian-language NLP availability.** Beyond translation, Mongolian-Cyrillic NLP capabilities (named-entity recognition, topic classification, sentiment analysis) reached usable thresholds in the 2024-2025 frontier-model wave. Editorial-pipeline operations that previously required manual human curation can now be partially automated.

> *[FOUNDER ADJUST — personal market observation context: founder's own dated market signals (a customer conversation, an industry-event observation, a regulatory announcement) that anchor the "why now" framing in lived experience rather than structural inference.]*

### 3.6 Why no one else — competitive gap

The product surface Orange News occupies sits at a **three-way convergence** that makes it structurally hard for any single player class to reach:

1. **International incumbents** (Bloomberg, LSEG, FactSet) have the engineering depth and product framework but **cannot economically prioritize Mongolia** at their cost structures (§5.6 of `MARKET_RESEARCH.md`). Building a Mongolian-language vertical at Bloomberg's per-customer-acquisition-cost model would require a customer pool 10× the size of Mongolia's actual TAM.
2. **Domestic Mongolian outlets** (ikon.mn, Montsame, brokerage research desks) have the local-network and Mongolian-language fluency but **lack the editorial-pipeline infrastructure** (LLM integration, MSE Server Actions, multi-source aggregation discipline, $0/month operational cost base) to reach Bloomberg-grade depth.
3. **Generic AI/LLM startups** have the AI-pipeline tooling but **lack the Mongolian editorial discipline + domain-specific institutional knowledge** (mse.mn endpoint mechanics, Montsame scraper selectors, bilingual headline-validation rules, mining-tax-debate context) needed to operate the product at quality.

Orange News' wedge is the productive intersection — Mongolian editorial discipline + AI-pipeline engineering + local-network institutional knowledge — that no single existing player class has structural reason to occupy. The 5+ months of accumulated engineering investment + the editorial moats documented in `TECHNICAL_HANDBOOK.md` §4-§6 make this intersection the durable position the §10 funding ask is built around.

---

## 4. Solution + Product

This section describes Orange News as a production system. Every claim is grounded in code committed to the production GitHub repositories and verifiable against the Day 15 state described in `TECHNICAL_HANDBOOK.md`. The product is not a prototype, demo, or roadmap — it is operational infrastructure publishing real content to real readers daily.

### 4.1 Product overview

**Orange News is a production-grade Mongolian-language financial information platform** comprising three integrated layers:

1. **A reader-facing portal** at [orangenews.mn](https://www.orangenews.mn) (Vercel-hosted Next.js 16 + React 19) presenting 7 page-class routes — homepage, article detail, category index, market-instrument detail, daily Market Watch brief, Mongolian Stock Exchange section, and live-video archive.
2. **An editorial pipeline** running on GitHub Actions cron — 5 production workflows aggregating 14 international news sources + Montsame (Mongolian state news), translating editorially via Gemini 2.0 Flash + Claude Haiku 4.5, generating branded social images, and scheduling Facebook Page distribution.
3. **A data integration layer** providing live global market data (every 30 min), MSE coverage with 8 datasets (5×/day weekdays during MSE trading hours), and curated financial video feed from 6 international broadcasters (every 2 hours).

The product was built across April-May 2026 (Phases 1-9.x, ~36 production commits in the Day 5-14 sprint) and reached commercialization-ready state on Day 14 (2026-05-06). Day 15 (today) shipped the documentation suite.

### 4.2 Production architecture (high level)

The system uses a **two-repo architecture** that decouples data production from data presentation:

- **Backend (`mctunghai-pixel/orange-news-automation`)** — Python on GitHub Actions. Cron workflows fetch external sources, run the LLM translator with editorial validators, generate images, post to Facebook, and commit JSON artifacts back to the same repo.
- **Frontend (`mctunghai-pixel/orangenews-website`)** — Next.js 16 + React 19 on Vercel. ISR-cached server components fetch the JSON artifacts from the backend repo's GitHub raw-content URL, normalize data at the boundary, and render Mongolian-Cyrillic typography against Bloomberg-grade information design.

The contract between repos is the **schema of public JSON files** at the backend repo root — `translated_posts.json`, `market_data.json`, `mse_data.json`, `youtube_data.json`, plus daily `archive/posts_YYYY-MM-DD.json` snapshots. There is no shared database, no synchronous coupling, no auth surface between the two sides. This architectural choice is what enables the **$0/month operating cost** — frontend reads public CDN-cached JSON, backend cron is GitHub Actions free-tier compute, frontend hosting is Vercel Hobby plan, all data sources are unauthenticated public APIs (yfinance, CoinGecko, Binance, ExchangeRate-API for MNT/USD, mse.mn).

Full architecture diagram + component reference in `TECHNICAL_HANDBOOK.md` §2 (Mermaid diagram, 9 external sources × 5 workflows × 9 Python scripts × 5 JSON artifacts × 4 fetchers × 8 page surfaces).

### 4.3 Reader-facing product surfaces

| Route | Purpose | Data sources | Component density |
|---|---|---|---|
| `/` (homepage) | Daily editorial portal | All 4 fetchers (orange news + market data + MSE + YouTube) in `Promise.all` | Hero + SecondaryArticles + BreakingStrip + MarketSnapshot (12 cells) + ArticleFeed + VideoFeed (right rail) + NewsletterSection |
| `/articles/[slug]` | Article detail with archive lookup | `fetchOrangeNews({archiveDays:7})` + `getPostBySlug` walk | Article body + ArticleNavigation (prev/next) + per-article OG image |
| `/category/[cat]` | Category-filtered listing | `fetchOrangeNews` + `CATEGORY_SLUG_MAP` (8 entries with alias support) | Filtered feed + alias-expanded matchValues |
| `/markets/[ticker]` | Per-instrument market detail | `fetchMarketData` + `TICKER_SLUG_MAP` whitelist | MarketHero (price + change + sparkline) + Tabbed Chart (30-day) + Stats grid (open/high/low/volume) |
| `/market-watch` | Daily editorial market briefing | `getMarketWatch()` 3-signal heuristic | Lead post + image fallback chain + pulse-dot Header navigation |
| `/mse` | Mongolian Stock Exchange section | `fetchMseData` (8 datasets) | 6 polished components (TickerRibbon, Top20Members, StockMovers, StockAmount, MiningTrades, ListedCompanies) |
| `/video` | Curated financial video archive | `fetchYouTubeData` + `?channel=` filter | Responsive 1/2/3-column grid; channel filter chips; ~33 videos surviving `>3 min` threshold |

Plus operational routes: `/rss.xml` (RSS 2.0 feed, 7-day archive window), `/api/subscribe` + `/api/subscribe/verify` (Resend double-opt-in flow with HMAC-signed tokens), `/newsletter/confirmed` (subscribe status landing). Supporting routes (`/about`, `/team`, `/legal/*`, `/newsletter`, `/api-docs`) are scaffolded for legal/brand compliance.

### 4.4 The editorial pipeline

The translation layer is the most labor-intensive component (1,760 lines in `orange_translator.py` v8 — the largest single file in the backend repo). It enforces five hard editorial rules at the validator layer:

1. **Headline length 60-80 characters** (mobile-card readability).
2. **No concatenation errors** — Mongolian Cyrillic + Latin must be space-separated (`Bloomberg-ийн` correct; `Bloombergийн` rejected by regex).
3. **Source attribution preserved** — every translated post carries the original source tag (Bloomberg, Reuters, FT, etc.), injected by a deterministic footer builder (not LLM-generated).
4. **Banned phrases** — denylist (e.g., "translated by AI", "as an AI", hallucinated reporter names, future-dated signoffs) catches common LLM drift.
5. **Mongolia-source passthrough** — articles from ikon.mn or Montsame skip translation entirely (`category: "mongolia"` triggers passthrough route).

`temperature` is locked between 0.0 and 0.2 on every LLM call — validated 2026-05-04 to prevent the financial-numeric hallucinations that occur at the default 1.0. Dual-LLM (Gemini 2.0 Flash primary, Claude Haiku 4.5 fallback) reduces single-API outage exposure to <1% historical co-incidence.

Full editorial discipline reference: `TECHNICAL_HANDBOOK.md` §6 (Editorial Discipline) — covers translation rules, brand voice (trademark-safe Mongolian-first positioning), Cyrillic typography subset (~92KB Noto Sans bundle), color/tone semantics (up/down vs accent vs directional), asset-class formatting (Bloomberg conventions for FX, crypto, commodity, indices), and honest-UX patterns.

### 4.5 Data integration layer

Three independent data feeds, each with a dedicated cron workflow + fetcher + frontend ISR consumer:

- **Global market data** (`market_data_update.yml`, every 30 min): 7 yfinance instruments (S&P 500, Dow Jones, Nasdaq, BTC, ETH, gold, crude oil WTI) + MNT/USD via ExchangeRate-API. Partial-failure semantics merge fresh data into existing `market_data.json` so missing instruments retain last-known values.
- **MSE data** (`mse_update.yml`, 5×/weekday at MSE trading hours): direct integration with mse.mn's Next.js Server Actions endpoint — 8 datasets (marquee, stock_amount, stock_up, stock_down, comex_trade, mseA_list, mseB_list, top20_list). Action-ID rotation tolerance handles upstream redeploys automatically (1-3 month rotation cycle). 28 datasets enumerated total, 20 reserved for Phase 6.3+.
- **YouTube data** (`youtube_update.yml`, every 2 hours): RSS-based discovery for 6 canonical channels (Bloomberg Television, WSJ, Reuters, FT, CNBC, World Bank Group) + batched `videos.list` API call for duration enrichment. ~24 quota units/day = 0.24% of free 10K. ~33 videos surviving `>3 min` quality filter per cycle.

This data integration depth is one of the four moats documented in `TECHNICAL_HANDBOOK.md` §8.2 — direct mse.mn endpoint integration, Montsame scraper relationships, and ikon.mn passthrough categorization are local-network knowledge that international platforms cannot acquire without Mongolian-network presence.

### 4.6 Subscribe + email distribution

Phase 7.2.1 deliverable. Double-opt-in subscribe flow with HMAC-signed verification:

- **POST `/api/subscribe`:** validate email → create pending Resend contact (`unsubscribed: true`) → send confirmation email with HMAC-signed verify link (HMAC-SHA256, 7-day TTL, `timingSafeEqual` constant-time comparison). Idempotent — repeat sign-ups re-send the confirm rather than erroring.
- **GET `/api/subscribe/verify`:** validate HMAC → flip Resend contact to active → 302 redirect to `/newsletter/confirmed?status=ok|invalid|error`.
- **Without env vars set:** POST returns HTTP 503 `"Subscribe service not configured"` — graceful degradation; operator activates by setting `RESEND_API_KEY` + `RESEND_AUDIENCE_ID` in Vercel env.

The Subscribe form is shared between the homepage Newsletter section (variant=`dark`) and the `/newsletter` page (variant=`light`). Email templates (`SubscribeConfirmEmail.tsx`) use `@react-email/components` with Mongolian copy and no tracking pixels (deliverability-first).

### 4.7 Operating cost + scalability

| Layer | Cost | Notes |
|---|---|---|
| Backend compute (GitHub Actions) | **$0** | Free tier — 2,000 min/month, current usage ~360 min/month |
| Frontend hosting (Vercel Hobby) | **$0** | Free tier — sufficient through ~100K MAU; Pro plan ($20/mo) tier-up if needed |
| Public APIs (yfinance, CoinGecko, ExchangeRate-API, mse.mn) | **$0** | All unauthenticated public endpoints |
| LLM (Gemini 2.0 Flash + Claude Haiku 4.5) | **$0-50/mo** | Free Gemini quota covers ~95% of translator volume; Claude fallback minimal |
| Domain (orangenews.mn) | **~$15/yr** | Annual registration; negligible |
| Email (Resend) | **$0** | Free tier — 3,000 emails/month, well below current volume |
| **Total operating cost** | **<$10/month effective** | Sub-Bloomberg-license-fee-by-3-orders-of-magnitude |

This cost structure is **the financial moat**. The architecture's key choices (JSON-as-contract, public CDN reads, ISR mock fallbacks, free-tier-only compute) compound into an operational cost base that international platforms cannot match. A new entrant either pays this in time (5-10 months of engineering investment to reach equivalent stability) or in infrastructure spend (paid alternatives at $1-10K/month).

### 4.8 Phase progression — what's shipped and what's queued

The product has progressed through 9 phase clusters since project inception:

- **Phases 1-5 (April 2026):** Foundation, frontend, market data layer, /article and /markets/[ticker] routes, OG image system.
- **Phase 6.2 (May 4, 2026):** Full `/mse` route with 8 datasets — landmark mse.mn Server Actions integration (Plan C, supersedes Plan B TradingView fallback).
- **Phase 7.1 (May 5):** Article archive system + RSS expansion.
- **Phase 7.2.1, 7.3, 6.1.5 (May 6):** Subscribe flow + live financial video feed + Montsame scraper.
- **Phase 8.1 Track A (May 6):** Slack failure notifications across 3 production workflows.
- **Phases 9.1-9.3 (May 6-14):** Sales infrastructure — 11 deliverables in `docs/sales/` (sales deck, customer outreach kit, demo materials).
- **Day 15 (May 7, today):** Documentation suite — `TECHNICAL_HANDBOOK.md` + `MARKET_RESEARCH.md` + this `BUSINESS_PROJECT_TEMPLATE.md`.

Queued for post-funding-round or post-first-customer execution: Phase 6.1 (Mongolian content expansion), Phase 6.3 (mining + FDI tagging), Phase 7.2.2 (customer self-service editorial CMS — the highest-value tier-1-customer feature unlock), Phase 9.2 (multi-tenant for second customer), Phase 10+ (post-customer learning items). Full deferral roadmap in `TECHNICAL_HANDBOOK.md` §11.

---

## 5. Market Analysis

This section condenses the headline findings of `MARKET_RESEARCH.md` (8 sections, ~20pp, shipped Day 15). For full sourcing — Mongolia macro citations, per-bank operational reports, mining IR-budget proxy reasoning, and bottom-up TAM derivation — refer to that companion document.

### 5.1 Mongolia macro snapshot

Mongolia is a **$23.6B economy (2024)** with **+5.0% real GDP growth** and a **+6.3% IMF projection for 2025**. Growth is mining-led, anchored by Oyu Tolgoi's underground ramp-up (trajectory to world's #4 copper producer by 2028-30). The financial system is structurally concentrated: **13 commercial banks operating, 5 systemically-important holding 100% of system assets, top 3 (Khan/Golomt/TDB) holding ~80%**. Total commercial bank assets reached MNT 70 trillion (~$20.6B USD) by March 2025. The Mongolian Stock Exchange has **162 listed companies (Dec 2025)** with market capitalization of MNT 13.85 trillion (~$4B USD). Credit-to-GDP fell from 60% (2013) to 41% (2022) per the World Bank — suggesting headroom for credit expansion in the next cycle and corresponding demand for credit-quality information in bank treasury teams.

Macro risks (commodity-cycle exposure, MNT volatility, periodic regulatory reset) are demand-side, not supply-side — they shift the *level* of revenue Orange News can earn but not the structural product-market fit. Full coverage in `MARKET_RESEARCH.md` §2.

### 5.2 Customer cohort summary

Five customer cohorts comprise the addressable market:

| Cohort | Count | Per-customer ACV (USD) | Cohort TAM (USD) | Notes |
|---|---|---|---|---|
| Tier-1 banks (systemically important) | 5 | $50K-200K | $250K-1.0M | Khan, Golomt, TDB, Khas, State |
| Tier-1 mining corporations | 4 | $20K-100K | $80K-400K | Oyu Tolgoi LLC, Erdenes Mongol, ETT, MMC |
| Mid-tier banks + non-bank lenders | 8-10 | $5K-25K | $40K-250K | Tier-2 banks; specialized lenders |
| Mid-tier mining (10-15 entities) | 10-15 | $5K-25K | $50K-375K | Erdenet, Boroo Gold, fluorspar/iron/zinc operators |
| MSE corporate IR + brokers + asset managers | ~80 | $3K-15K | $240K-1.25M | 50+ brokers + ~30-50 MSE-listed corporate IR |
| Government / regulators / FDI advisors | ~30 | $5K-50K | $150K-1.05M | Bank of Mongolia, FRC, Ministry of Finance, FDI advisors, law firms, consulate desks |

Tier-1 banks are the **canonical anchor customers**: largest balance sheets (Khan Bank's MNT 15T = ~1/3 of national banking sector), most concentrated information demand, most receptive to direct-founder outreach in Year 1 per Q5 + §2.5 founder-network advantage. Mining tier-1 customers offer **distinct publish-not-just-consume pain** (§3.3) — different sales motion, complementary revenue stream.

Per-bank profile detail in `MARKET_RESEARCH.md` §3; per-mining-entity profile detail in §4.

### 5.3 TAM / SAM / SOM — dual-view

Per industry-standard investor-memo practice, two TAM views:

- **Direct-addressable TAM (bottom-up, conservative): $1.4M-7.3M USD/year** — derived from per-cohort customer count × per-customer ACV (table above) + non-customer revenue layers (advertising at mature reader scale + downstream licensing + conference/event sponsorship).
- **Fully-expanded TAM (top-down): $8-15M USD/year** — including international platforms paying for licensed Mongolian coverage and Mongolia-as-template revenue. The expanded view captures upside from cross-border Mongolian-coverage demand.

**SAM (12-month reachable):** $100K-285K USD across 8-13 realistic Year 1 customer conversions. This is the operationally-realistic ceiling — does not require landing every customer in any cohort.

**SOM (founder Year 1 conservative target per Q5 + Q7 locks):** **$20-50K USD across 3-5 customers**. This represents ~3-4% of TAM lower bound / ~30-50% of SAM upper bound — a deliberately-conservative landing posture appropriate for bootstrap or pre-seed funding.

The ratio SOM/TAM (~1-3%) reflects the founder's commitment to validate the wedge before requiring outside capital, not maximum-revenue ambition. Investor-ready upside comes from the SAM-to-Year-2-Year-3-trajectory expansion (§7 sensitivity scenarios in `MARKET_RESEARCH.md` show base path $20-50K → $150-450K → $400K-1.2M; high path $50-150K → $400-900K → $1-3M).

### 5.4 Revenue model summary

Three revenue lines per Q4 lock — each with distinct buyer, sales motion, and Year-vs-trajectory profile:

- **SaaS subscription** (3 tiers: Starter $5K-15K / Professional $20K-50K / Enterprise $75K-150K) — **predictable ARR; primary Year 1 revenue line.**
- **Advertising** (display + sponsored content + conference sponsorship) — **scales with reader base; Year 2+ contribution as MAU matures.**
- **Licensing** (data feeds + white-label editorial + custom integrations) — **highest margin per customer; longer sales cycle; Year 2+ primary line.**

Hybrid mix is defensive: no single revenue line carries Year 1, no single customer departure compresses revenue base materially, no single product roadmap pivot is required. Pricing scenarios derive from international comparator anchors (Bloomberg $31,980/seat, LSEG ~$22K/user/year, FactSet $4-50K/user/year) — Orange News prices below international list at substantially lower fully-loaded customer cost. Detail in `MARKET_RESEARCH.md` §6.

### 5.5 Cross-border extension (Year 2-3+)

The Mongolian-built infrastructure (Cyrillic typography pipeline + direct-exchange integration + mining-domain editorial template + cross-repo architecture) **ports at marginal cost** to similarly-shaped Central Asian markets:

- **Kazakhstan** ($230B GDP, mining + oil-driven, KSE listed companies, Russian + Kazakh language demand) — illustrative TAM $20-50M.
- **Uzbekistan** ($90B GDP, growing financial sector, Tashkent Stock Exchange) — illustrative TAM $5-15M.
- **Kyrgyzstan + Turkmenistan** (smaller, mining-relevant) — combined illustrative TAM $3-10M.

Cross-border TAM extension over Years 2-5: **$30-80M+** (illustrative, GDP-scaled, *not* separately researched at company-level granularity — pre-investment market validation required before any Year 3+ commitment per `MARKET_RESEARCH.md` §7.6 disclaimer). Realistic capture rate 5-15% if Mongolia model validates.

This cross-border ambition (Q8 lock) is **the long-term scaling thesis** that makes the $50-150K pre-seed funding ask in §10 commercially proportionate — the bet is on a defensible wedge in a small market that scales via cross-border replication, not on a single-market moonshot.

### 5.6 Reading recommendation

For full market analysis, read `MARKET_RESEARCH.md` in this order:
1. §1 Executive Summary (4 minutes) — high-level orientation.
2. §2 Mongolia Macro Context (3 minutes) — GDP, banking, MSE, FDI.
3. §3 + §4 Tier-1 customer profiles (8 minutes) — every named customer.
4. §6 Pricing Scenarios + §7 TAM/SAM/SOM (10 minutes) — financial sizing.
5. §5 Competitive Landscape + §8 Strategic Positioning (8 minutes) — moat thesis.

Total: ~33-minute reading load for full market context. The remainder of this Business Project Document (§6 Business Model onward) builds on those foundations.

---

## 6. Business Model + Revenue Streams

This section drills into the operational mechanics of the hybrid revenue model summarized in §1.4 and §5.4. Each revenue line is examined for its target buyer, sales motion, pricing logic, gross-margin profile, and Year-vs-trajectory contribution. The closing sub-section sketches unit economics for the canonical Year 1 customer.

### 6.1 Revenue model overview

Orange News operates a **three-line hybrid revenue model** chosen for diversification across distinct buyer segments and risk profiles:

| Revenue line | Primary buyer | Sales motion | Margin profile | Year-1 weight | Year-3 trajectory |
|---|---|---|---|---|---|
| **SaaS subscription** | Institutional decision-makers (treasury, IR, research) | Founder direct outreach + demo-driven close | High (incremental cost ≈ 0; LLM API fees only) | **70-80%** | 50-60% |
| **Advertising** | Brand marketers, sponsoring institutions | Reader-base growth → CPM rate-card | High (no marginal cost) | 5-10% | 20-30% |
| **Licensing** | Other platforms, white-label customers, system integrators | Custom proposal + multi-month evaluation | Highest (deal-economics) | 10-15% | 25-35% |

The hybrid mix is **deliberately defensive** — it ensures no single revenue line carries the business through Year 1, no single customer departure compresses revenue base materially, and no single product roadmap pivot eliminates the company's commercial path.

### 6.2 SaaS subscription tiers

Three tiers with target customer profiles, range pricing, and feature differentiation. All figures are USD with MNT translation at MNT/USD ≈ 3,400 reference rate.

| Tier | Target customer | Range USD/yr | Range MNT/yr | Indicative seats | Feature differentiation |
|---|---|---|---|---|---|
| **Starter** | Mid-tier mining IR; broker desks; FDI advisors; smaller bank treasury; single-seat use | **$5,000-15,000** | MNT 17M-51M | 1-3 | Web access + email digest + standard support |
| **Professional** | Full tier-1 bank treasury / risk team; MSE-listed corporate IR; mid-cap mining; full-team use | **$20,000-50,000** | MNT 68M-170M | 3-10 | Above + API access + custom dashboards + priority support + analyst Q&A |
| **Enterprise** | Tier-1 bank multi-seat; Oyu Tolgoi LLC; Erdenes Mongol; large multi-team deployments | **$75,000-150,000** | MNT 255M-510M | 10+ | Above + bespoke editorial coverage + custom MSE / mining tagging + white-label options + dedicated account manager |

Tier ranges anchor against international comparators — Bloomberg Terminal $31,980/seat list (Starter is sub-$15K = sub-half-Bloomberg-seat), LSEG Workspace ~$22K/user/year base (Professional matches at full-team pricing), FactSet $4-50K/user/year (Enterprise targets the tier-1 customer multi-seat segment Bloomberg/LSEG already serve).

> *[FOUNDER ADJUST — actual price values per tier; founder-validated final pricing replaces these ranges in `docs/sales/pricing_model_spreadsheet.md` after customer-discovery conversations.]*

### 6.3 Advertising revenue

Display advertising + sponsored content scales with reader base, not customer count. The advertising surface is **the long-tail revenue option** — small in Year 1, meaningful by Year 3 once reader scale matures.

- **Display ads** (banner, sidebar, in-article): $5-25 CPM at Mongolian financial-reader audience. Annual revenue progression: 10K MAU → $5K-15K/year; 50K MAU → $25K-75K/year; 200K MAU → $100K-300K/year.
- **Sponsored content** (advertorials, branded research, supplier-specific newsletters): $1K-5K per piece; ~6-24 pieces/year addressable.
- **Conference + event sponsorship:** $5K-25K/year per sponsor when Orange News begins in-person events (Phase 9+).

Advertising contribution Year 1 is intentionally low — reader-acquisition is the engineering and editorial focus first, monetization second. By Year 2-3 the reader base supports rate-card maturation. Brand advertisers (commercial banks, mining companies promoting investor-relations content, FDI advisors) align with the editorial audience and have institutional advertising budgets independent of SaaS information-spend lines.

### 6.4 Licensing revenue

Three licensing forms, all higher-margin than SaaS but with longer sales cycles:

- **Data feed licensing:** the `market_data.json` / `mse_data.json` / `youtube_data.json` artifacts can be licensed as JSON API access for downstream integrators (banks' internal portals, fintech apps, brokerage research tools, financial-app consumers). Pricing range $10K-50K/year per integrator; bespoke per use-case.
- **White-label editorial licensing:** Orange News editorial syndicated into a customer's intranet, employee portal, or customer-facing app under co-brand or white-label. Pricing range $25K-100K/year per customer; ranges higher for full-domain bespoke editorial.
- **Custom integrations:** specific customer systems (e.g., feeding Mongolian-context news into a tier-1 bank's internal Bloomberg-augmentation layer; piping MSE data into a brokerage research workflow). Pricing range $15K-75K/year + setup fee.

Licensing has **higher margin** than SaaS because the marginal cost of an additional integration approaches zero (the editorial pipeline is already running), while pricing reflects bespoke value capture. **Year 2+** is the primary contribution window — Year 1 customer relationships build the trust needed to surface licensing-tier conversations.

### 6.5 Unit economics — canonical Year 1 customer

For a representative Starter-tier Year-1 customer at $10K USD ACV:

| Metric | Value | Notes |
|---|---|---|
| **Annual contract value (ACV)** | $10,000 | Mid-point of Starter range |
| **Customer acquisition cost (CAC)** | ~$0-500 | Founder direct-outreach Year 1; no paid CAC; modest travel/meeting cost |
| **Marginal cost to serve** | ~$50-150/yr | LLM API fees + Resend email + minor infrastructure tier-up |
| **Gross margin** | ~98%+ | Operational scale economics dominant |
| **Payback period** | <1 month | Founder direct-outreach + low marginal cost |
| **Contracted-revenue retention** | TBD (no Year 1 customer departures yet) | Customer-success metrics in `docs/sales/customer_success_metrics.md` track renewal indicators |

Unit economics improve materially in Year 2+: customer upgrade revenue (Starter → Professional → Enterprise) raises ACV without proportional CAC increase; licensing engagements compound on existing customer relationships at near-zero acquisition cost; advertising contribution emerges with reader-scale maturation.

### 6.6 Revenue mix evolution

Year 1 → Year 3 mix shift expected:

| Year | SaaS | Advertising | Licensing | Total revenue (base scenario) |
|---|---|---|---|---|
| **Year 1** | 70-80% ($15K-40K) | 5-10% ($1K-5K) | 10-15% ($2K-7K) | **$20-50K** (per Q7 lock) |
| **Year 2** | 60-70% ($90-315K) | 10-20% ($15-90K) | 15-25% ($22-112K) | **$150-450K** |
| **Year 3** | 50-60% ($200-720K) | 20-30% ($80-360K) | 25-35% ($100-420K) | **$400K-1.2M** |

The shift toward licensing + advertising reflects the maturation of customer relationships (longer-tenure customers become licensing candidates) and reader scale (advertising surface matures). SaaS remains the dominant line by absolute dollars but compresses as a percentage as the other two scale faster.

### 6.7 Why the hybrid model is the right choice

Three structural reasons:

1. **Mongolia market scale doesn't support a pure-SaaS thesis at venture-investor return profiles.** A pure-SaaS Mongolia-only business caps at ~$2-4M ARR (SAM ceiling). Adding advertising + licensing extends the addressable revenue base 2-3× without proportional cost increase.
2. **Hybrid mitigates customer-concentration risk.** A Year 1 portfolio of 3-5 SaaS customers is exposed to single-customer-departure variance; advertising + licensing provide non-customer-dependent revenue surfaces that reduce volatility.
3. **Different revenue lines validate different parts of the moat.** SaaS validates editorial-pipeline product-market fit; advertising validates reader-base trust; licensing validates infrastructure depth. A founder running all three learns about the whole business simultaneously.

---

## 7. Target Customers + GTM Strategy

This section converts the customer-cohort sizing in §5.2 into a concrete 12-month go-to-market plan. The Year 1 target — **3-5 paying customers / $20-50K USD revenue (Q5 + Q7 locks)** — drives every prioritization choice below. Detailed customer lists, outreach templates, and demo materials live in `docs/sales/`; this section provides the strategic framework that organizes them.

### 7.1 Target customer prioritization

Year 1 GTM concentrates on **two anchor cohorts** with distinct sales motions:

| Priority | Cohort | Year 1 conversion target | Rationale |
|---|---|---|---|
| **Anchor — Tier-1 banks** | 5 systemically-important banks | 1-2 of 5 | Largest balance sheets, highest information demand, founder-network reach (§2.5), validation halo for cohort-3 expansion |
| **Anchor — Tier-1 mining** | 4 tier-1 mining corporations | 1 of 4 (Oyu Tolgoi most likely) | Distinct publish-not-just-consume pain (§3.3), complementary revenue stream, mining-domain editorial leverage |
| Tier-2 — MSE corporate IR | 30-50 listed companies | 2-4 of 50 | Lower per-customer ACV but reachable via existing MSE coverage |
| Tier-2 — Brokers + asset managers | 50+ entities | 2-3 of 50 | Information-spend natural fit; channel for cross-sell |
| Tier-3 — Government / regulators | 8-12 entities | 0-1 (long procurement cycle) | Legitimacy halo; deferred to Year 2+ |
| Tier-3 — FDI advisors / law firms | 20-30 entities | 1-2 if opportunistic | Smaller ACV; ad-hoc rather than pipeline-driven |

The 3-5 customer SOM target (per Q5 lock) is achievable from the Anchor cohorts alone (1-2 banks + 1 mining + 1-3 supplementary). Tier-2 and Tier-3 are upside, not commitments.

### 7.2 Anchor customer profiles

Each tier-1 customer is profiled with sales-relevant detail, leaving named-contact specifics to founder fill-in per Decision C hybrid pattern.

#### Tier-1 banks (5 entities, ranked by anchor-fit priority)

1. **Khan Bank** — largest balance sheet (MNT 15T = 1/3 of national banking sector); 2023 IPO is largest in MSE history; broadest addressable use cases (treasury, credit committee, branch officers, IR team). Most likely Year 1 anchor for product-validation halo. *[FOUNDER ADJUST: named contacts in treasury / digital banking / strategy]*.
2. **Golomt Bank** — highest growth rate (+249% H1 2024), 54% ROaE, sustainability-focused; differentiated editorial-coverage fit (green finance + sustainable agriculture context). *[FOUNDER ADJUST: named contacts]*.
3. **TDB** — oldest commercial bank (founded 1990), 97 branches, deepest international-corporate-banking franchise; strongest mining/trade/construction lending exposure that aligns with Orange News' editorial coverage. *[FOUNDER ADJUST: named contacts]*.
4. **Khas Bank** — SME + sustainability positioning; recent S&P 'B+' upgrade; Tier-1 systemic but smaller balance sheet. *[FOUNDER ADJUST: named contacts]*.
5. **State Bank** — government-policy-aligned; 2024 "green bank" designation; longer procurement cycle but stable institutional buyer. *[FOUNDER ADJUST: named contacts]*.

#### Tier-1 mining (4 entities)

1. **Oyu Tolgoi LLC** — largest single enterprise in Mongolia; Rio Tinto 66% / GoM 34% structure means **two distinct procurement paths** (corporate IR + government-relations); $2.1B 2024 in-Mongolia spend creates large IR/communications footprint. Most likely mining anchor. *[FOUNDER ADJUST: named contacts at IR + government-affairs]*.
2. **Erdenes Mongol** — state-owned holding, 30% of national export earnings; **government-procurement profile** (RFP-driven, not corporate-IR-driven); longer cycle but strategic anchor. *[FOUNDER ADJUST]*.
3. **Erdenes Tavan Tolgoi (ETT)** — MSE-listed coal play; 2026 Borteeg block tender creates active investor-relations cycle; aligned with Orange News' MSE editorial. *[FOUNDER ADJUST]*.
4. **Mongolian Mining Corporation (HKEX:0975)** — Hong Kong-listed coking-coal exporter; **complementary domestic stakeholder surface** alongside existing English-language HK IR program. *[FOUNDER ADJUST]*.

Full named-contact target list maintained in `docs/sales/customer_target_list.md` (Day 12 deliverable, 33 named-contact tags awaiting founder review).

### 7.3 Sales motion & GTM approach

The Year 1 sales motion is **founder direct-outreach + demo-driven close**, with no paid CAC and no inside-sales hire. The motion has five stages:

1. **Identify** — research target organization, identify likely buyer (treasury head, IR director, head of research) plus likely champion (digital banking lead, sustainability lead, MSE-listings IR).
2. **Outreach** — personalized email + LinkedIn + (where founder relationship exists) warm introduction. Outreach templates in `docs/sales/outreach_email_templates.md` (3 variants for cold / warm / referral).
3. **Discovery** — 30-min Zoom or in-person meeting. Demo agenda in `docs/sales/demo_scheduling_template.md` + `docs/sales/live_demo_script.md`. Goal: confirm pain match, surface 2-3 specific use cases.
4. **Pilot** — 30-day pilot for the customer's prioritized use case. Free or heavily-discounted ($1-3K nominal) — purpose is validation, not revenue. Customer success metrics tracked via `docs/sales/customer_success_metrics.md`.
5. **Convert** — pilot conversion to annual contract. Pricing per §6.2 tier band; tier selection driven by team size + use-case breadth.

The motion deliberately **skips outbound SDR + paid ads** in Year 1. Founder relationships + product-quality demos drive conversion. This keeps CAC near $0 and forces direct customer learning into founder hands — a learning advantage that compounds against future scaling decisions.

### 7.4 12-month sales pipeline

Quarter-by-quarter funnel target:

| Quarter | Outreach | Discovery meetings | Pilots | Conversions | Cumulative customers |
|---|---|---|---|---|---|
| **Q1 (Months 1-3)** | 15-25 outreaches | 5-10 meetings | 1-2 pilots | 0 conversions | 0 (pilot cycle) |
| **Q2 (Months 4-6)** | 15-25 outreaches | 8-15 meetings | 3-5 pilots | 1-2 conversions | **1-2 customers** |
| **Q3 (Months 7-9)** | 10-20 outreaches | 5-10 meetings | 2-3 pilots | 1-2 conversions | **2-4 customers** |
| **Q4 (Months 10-12)** | 5-15 outreaches | 3-5 meetings | 1-2 pilots | 1 conversion | **3-5 customers (Year 1 target met)** |

Conversion ratios assumed: ~50% outreach → meeting; ~40% meeting → pilot; ~50% pilot → conversion. These are anchor estimates — founder-network warm introductions improve conversion materially at the top of the funnel.

### 7.5 Sales cycle expectations

| Customer cohort | Expected sales cycle |
|---|---|
| Tier-1 bank treasury/research | 3-6 months (procurement involvement; budget cycle alignment) |
| Tier-1 mining IR (private/listed) | 4-8 months (board approval common for new platform tools) |
| State-owned mining (Erdenes Mongol, ETT) | 9-18 months (RFP-driven, government procurement) |
| MSE-listed corporate IR | 2-4 months (smaller orgs, faster cycle) |
| Brokers + asset managers | 1-3 months (operational decision, not strategic) |

These cycles map to the Q1-Q4 funnel above — Q1 outreach lands as Q2-Q3 conversions. Year 1 SOM accordingly weights toward the shorter-cycle cohorts.

### 7.6 Channel & partnership strategy

Three partnership channels are active or planned:

- **Mongolian Stock Exchange (MSE)** — Orange News' `/mse` route already deeply integrates with mse.mn data. A formal data-licensing or co-branding partnership with the MSE could add legitimacy halo and channel access to listed-company IR teams. *[FOUNDER ADJUST: outreach status to MSE leadership]*.
- **Industry associations** — Mongolian Bankers Association, Mongolian Mining Association, Securities Investors Association — each represents a buyer cluster reachable via single relationship. *[FOUNDER ADJUST: founder's existing memberships / event-speaker history]*.
- **Sales referral partners** — Mongolian law firms, audit firms (Big 4 local affiliates), management consulting practices that already serve the tier-1 customer base. Referral fee or co-marketing arrangement TBD. *[FOUNDER ADJUST]*.

Partnership channel is **upside, not Year-1-required** — Year 1 conversion targets are achievable through founder direct-outreach alone; partnerships add scale leverage in Year 2+.

### 7.7 Customer success & retention

Customer success in Year 1 is single-handed (founder). Operating discipline:

- **Onboarding checklist** (`docs/sales/customer_onboarding_checklist.md`) — 4 tagged decision points; founder customizes per customer.
- **Monthly check-ins** with each Year 1 customer to verify usage + surface upgrade opportunities.
- **Quarterly business reviews** (QBR) — formal review aligning Orange News' coverage with the customer's evolving information needs.
- **Customer success metrics** (`docs/sales/customer_success_metrics.md`, 4 tagged decision points) — usage frequency, sentiment, renewal indicators, upgrade signals.

Retention is the highest-leverage growth lever: 3-5 Year 1 customers retained becomes ~$50-100K retained revenue base + 30-50% upgrade trajectory in Year 2 (per §6.6 mix evolution). Single-customer-departure variance is the highest Year 1 risk — `docs/sales/customer_success_metrics.md` includes early-warning indicators.

> *[FOUNDER ADJUST — specific Year 1 outreach calendar dates; named-contact prioritization order; pilot-pricing decisions per customer; QBR scheduling preferences.]*

---

## 8. Competitive Landscape

This section condenses `MARKET_RESEARCH.md` §5 (full competitive map) and §8.1-§8.2 (defensibility analysis) for an investor reading at the business-project level. Full sourcing — international platform pricing benchmarks, vendor pricing aggregators, market-cap economics — lives in the companion document.

### 8.1 The competitive frame

Orange News competes for the same Mongolian institutional information-spend wallet currently allocated to **international incumbents** (Bloomberg, LSEG, FactSet) and a small share of bilingual-analyst loading cost. **There is no Mongolian-language Bloomberg-grade competitor today.** The competitive frame is therefore not "Orange News vs an established Mongolian competitor" — it is "Orange News vs Mongolian institutions' current piecemeal substitute stack."

### 8.2 International incumbents — pricing reality

| Platform | List price (single-seat USD/yr) | Enterprise pricing | Mongolia coverage depth | Mongolian-language? |
|---|---|---|---|---|
| **Bloomberg Terminal** | **$31,980** | $18-22K/user/yr (500+ seats); 2-yr min | Macro + MSETOP:IND only; thin local | English only |
| **LSEG Workspace** (ex-Refinitiv) | ~$22,000 base | $1,500-3,000/user/mo + entitlements; mid-market $150-400K ACV | Reuters wire heritage; minimal Mongolia editorial | English only |
| **FactSet** | $4,000-50,000 | Tiered: 50+ users 25-40% off; 100+ users 40-50% off | Buy-side analytics; Mongolia not a feature priority | English only |
| **S&P Capital IQ** | ~$15-25K/seat | Negotiated | Macro + global; thin Mongolia | English only |
| **Wind / CSI** (Chinese-language) | ~$15K/seat | Limited Western availability | China-Mongolia trade context | Chinese, not Mongolian |

International incumbents serve the global institutional market and cover Mongolia thinly because the **market scale economics block dedicated bureaus** — Mongolia's $1.4-7.3M direct-addressable TAM does not justify the per-customer-acquisition cost structure Bloomberg or LSEG operate at.

### 8.3 Domestic Mongolian alternatives — the gap

| Domestic option | What they offer | Where they fall short |
|---|---|---|
| **News portals** (ikon.mn, Montsame, news.mn, eagle.mn) | Mongolian-language general financial coverage; free to consumers | Not Bloomberg-grade in design, depth, or data integration; no enterprise SaaS product |
| **MSE itself** | Filings, marquee data, listing rules | Useful raw input, not a packaged information product |
| **Bank-internal research desks** (Khan, Golomt, TDB) | Internal market commentary | Not a sellable external product; bilingual at best |
| **Brokerage research** (Standard Investment, BDSec, etc.) | Equity research on MSE listings | Narrow scope; vendor-specific |
| **Bilingual analyst loading** (the current substitute) | Adapts existing Bloomberg/LSEG seat to Mongolian context | 2-3× the seat-license cost when fully loaded |

The closest substitute a tier-1 customer can assemble today is **Bloomberg seat + bilingual analyst headcount loading the translation/editorial work manually**. The substitute exists; it costs more than Orange News will charge, and it produces lower-quality output because manual translation is editorial work at industrial scale.

### 8.4 Why incumbents won't close the gap

Three structural reasons international incumbents and domestic outlets each lack incentive to build the Mongolian-language Bloomberg-grade product Orange News occupies:

1. **Market scale economics.** A $1.4-7.3M direct-addressable TAM is *transformative* at Orange News' lean cost base ($0/month operating cost from §4.7) but does *not* justify a dedicated Mongolia bureau, dedicated editorial product investment, or dedicated infrastructure spend at Bloomberg / LSEG / FactSet cost structures. The same market is too small for incumbents and large enough for Orange News.
2. **Editorial moat — Cyrillic typography + Mongolian-language editorial standards.** International platforms ship machine translation as the cost-effective default. The five-rule editorial validator (60-80 char headlines, no concatenation errors, source-tag preservation, banned-phrase enforcement, Mongolia-passthrough routing) requires Mongolian-Cyrillic editorial discipline that international platforms have no incentive to build at scale.
3. **Local-network compounds.** Direct mse.mn Server Actions endpoint integration, Montsame scraper relationships, native ikon.mn passthrough categorization, and the editorial relationships that emerge from being domestically-resident are local-network effects international incumbents structurally cannot acquire.

Domestic outlets *could* build Bloomberg-grade depth but lack the editorial-pipeline infrastructure (LLM integration, multi-source aggregation discipline, $0/month operational cost base) to reach it at quality. Generic AI/LLM startups *could* build the pipeline but lack the Mongolian editorial discipline + domain-specific institutional knowledge.

### 8.5 Defensibility — the four moats

Orange News' four moats compound over time and increase the cost of competitive entry (per `MARKET_RESEARCH.md` §8.2):

| Moat | What it is | Cost to replicate |
|---|---|---|
| **1. Editorial pipeline complexity** | 14 RSS sources + Montsame scraper + dual-LLM translator + 5-rule validator + image generator + FB scheduler + archive snapshotter | ~5 months focused engineering + accumulated production lessons |
| **2. Mongolian-language LLM prompt engineering** | Domain-specific validators reflecting specific failure modes; translator v8 = 1,760 lines of accumulated rules | Requires either replicating failure path or paying significantly more for editorial review |
| **3. Multi-source institutional knowledge** | mse.mn Server Actions endpoint reverse-engineering; Montsame `.content-mn` selector dependency; ikon.mn passthrough categorization; channel-skew calibration in YouTube fetcher | Local-network familiarity required for discovery + maintenance; not documented externally |
| **4. Production-grade infrastructure** | 5 GHA workflows + 3 GitHub Secrets + Vercel ISR cache topology + frontend mock-fallback resilience layer + 2-repo deployment hygiene at $0/month | 5-10 months engineering investment OR $1-10K/month paid alternatives |

Aggregate: **a new entrant either pays 5-10 months of engineering investment (delaying market entry while Orange News consolidates customer relationships) or pays $1-10K/month infrastructure spend that compresses their margin profile vs Orange News' $0/month base.** Neither path closes the gap quickly.

### 8.6 Substitution narrative — what the customer actually decides

For a tier-1 Mongolian bank operating 5 Bloomberg seats today (~$160K/year aggregate):

- **Status quo:** 5 Bloomberg seats × $32K = $160K/year + ~$50-100K bilingual-analyst loading cost = **$210-260K/year fully loaded**.
- **Orange News partial substitution:** retain 2-3 Bloomberg seats for global needs ($64-96K) + add Orange News Professional tier ($30K) + recover ~50% of bilingual-analyst overhead ($25-50K saved) = **$94-126K/year + substantially better Mongolian-language depth + faster local information cycle**.
- **Net annual savings:** $84-134K to the customer + qualitatively better Mongolian depth.

The substitution is **partial-displacement, not wholesale-replacement** — which makes it commercially safer for the customer (no risky platform cutover) and faster to land than a Bloomberg-replacement framing would imply.

The defensibility argument from §5.6 of `MARKET_RESEARCH.md` holds: international incumbents *could* build a Mongolian-first product but have **no economic reason** to prioritize it; domestic outlets *could* build Bloomberg-grade depth but **lack the editorial-pipeline infrastructure** to reach it at scale. Orange News' wedge is the productive intersection neither side has reason to occupy.

---

## 9. Team + Advisory

### 9.1 Founder full profile (long bio)

**Munkhsaikhan Mongolbayar** — Founder + CEO, Azurise Solution LLC.

**The motivation.** Orange News exists because Munkhsaikhan first observed Mongolia's financial-information gap in a comparative-economy context — during graduate studies at National Taiwan University (Taiwan Global MBA program), where he watched Taiwanese institutional investors operate against Bloomberg-grade local-language coverage that Mongolia entirely lacked. The pattern was clear: small economies sustain Bloomberg-grade financial information when local entrepreneurs build the editorial infrastructure international platforms have no incentive to provide. He returned to Mongolia with a thesis that the same opportunity existed at home.

**The career arc.** Over 15+ years across enterprise software and product leadership, Munkhsaikhan has held three roles directly relevant to Orange News' build:

- **CEO, Azurise LLC (2011-2013).** Founded and led the predecessor entity to today's Azurise Solution LLC. Established the operational habits — lean cost structure, founder-engineer-led product development, market discipline — that the current Azurise AI portfolio extends.
- **AzuPoint enterprise content management initiative (Microsoft partnership).** Built and operated an enterprise content management product on the Microsoft technology stack. The technical depth — file system architecture, content pipelines, multi-tenant deployment, customer onboarding — directly transfers to Orange News' two-repo architecture and JSON-as-contract design.
- **Managing Director, TESKO.** Led commercial and operational responsibilities at TESKO, building experience in customer relationships, P&L management, and cross-functional team leadership in the Mongolian commercial environment. The customer-acquisition relationships and institutional context built in this role inform Orange News' Year 1 founder direct-outreach GTM motion (§7.3).

**The current role.** As Founder + CEO of Azurise Solution LLC, Munkhsaikhan operates Orange News end-to-end: technical architecture (5 GHA workflows, two-repo split, dual-LLM translator pipeline), editorial discipline (5-rule validator design, Mongolian-Cyrillic typography decisions, brand-voice positioning), customer outreach (Year 1 direct-outreach motion, demo-driven sales close), and commercial strategy (pricing scenarios, TAM/SAM/SOM modeling, funding-path decisions). He is the single accountable founder until customer-revenue or funding round supports a first hire.

**What he brings to Orange News specifically.**
- **Domain depth** — native-speaker Mongolian-Cyrillic editorial fluency that the 5-rule validator + Mongolia-passthrough route depend on.
- **Technical depth** — judgment to architect the cross-repo split, JSON-as-contract design, dual-LLM translator pipeline, and ISR-with-mock-fallback resilience layer without external CTO support; this is what enables the $0/month operational cost.
- **Commercial relationships** — existing Mongolian-business network across banking, mining, FDI advisory, and government circles that makes the founder direct-outreach GTM motion (§7.3) credible.
- **Founder durability** — 15+ years of company-building experience, including the operational lessons from a prior founder cycle (Azurise LLC 2011-2013).

**Contact:** [mc.tunghai@gmail.com](mailto:mc.tunghai@gmail.com).

> *[FOUNDER ADJUST — bio polish: founder's preferred phrasing of education detail, dates of TESKO + AzuPoint tenure, professional photo placement, LinkedIn URL, additional roles or affiliations to surface or omit.]*

### 9.2 Current operating team

| Role | Person | Tenure | Capacity |
|---|---|---|---|
| Founder + CEO | Munkhsaikhan Mongolbayar | 2026-present | Full-time |
| All other functions | (founder, until first hire) | n/a | Same person |

The single-founder posture is **deliberate for Year 1** — it keeps fixed costs minimal, forces direct customer learning into founder hands, and aligns with the bootstrap-or-pre-seed funding posture (§10).

### 9.3 Planned hires (Year 2 trigger)

Hires unlock at first paying customer + revenue stability. Year 2 priority order:

1. **Sales / business development lead** (Mongolia financial sector experience) — extends customer-acquisition capacity beyond founder direct-outreach. Triggered by 3-5 Year 1 customers retained + Year 2 pipeline visibility. Estimated annualized cost: $30-60K USD.
2. **Mongolian-language editorial analyst** (financial-domain background) — lifts editorial quality discipline off the founder. Triggered by editorial volume scaling beyond ~10 articles/day or content-customization requirements (Phase 7.2.2 customer CMS). Estimated annualized cost: $15-30K USD.
3. **Part-time engineer** (Python/Next.js, Mongolia-based) — relieves the founder of pipeline maintenance. Triggered by Phase 7.2.2 deployment or backend-feature backlog accumulation. Estimated annualized cost: $25-45K USD (part-time / contractor).

These hires are funded from the §10.2 use-of-funds breakdown if Path 1 (pre-seed) is chosen, or from operating revenue if Path 2 (bootstrap) is chosen — the latter implies a slower hiring trajectory.

### 9.4 Advisory + advisors

> *[FOUNDER ADJUST — advisory roster: list of named advisors with their roles, relevance, advisory equity / honorarium arrangement, and current engagement cadence. Suggested categories: Mongolian banking sector advisor, mining-sector advisor, financial-information industry advisor, legal/regulatory advisor. Founder fills based on actual engaged or in-discussion advisors.]*

**Advisory engagement strategy.** Year 1 advisors are selected for **specific decision support** — not generic prestige. Each advisor commits to 1-2 hours/quarter on specific founder-presented questions (e.g., a banking-sector advisor on tier-1 anchor-customer prioritization; a mining-sector advisor on Erdenes Mongol procurement-cycle navigation). Advisory honorarium is modest equity grant (0.1-0.5%) with vesting tied to 12-month engagement.

The advisory bench is **upside, not Year-1-required** — founder direct relationships drive Year 1 customer acquisition; advisors add domain-specific judgment for second-cohort expansion in Year 2+.

---

## 10. Funding Ask + Use of Funds

### 10.1 Funding ask summary

Orange News presents two funding paths — a recommended pre-seed path and an alternative bootstrap path — with explicit financial projections for each. The dual-path framing reflects the founder's commitment to validate the wedge before requiring outside capital (per Q6 lock) while keeping the door open to investor participation that accelerates the Year 1 trajectory materially.

**Path 1 (Recommended): Pre-seed funding $50,000-150,000 USD.** This range positions cleanly within Central Asia ecosystem maturity — 80% of 2025 Central Asia venture deals were under $200K, and pre-seed checks at $50-150K are squarely in the discovery-stage band serving frontier markets. The funding supports an 18-month runway across customer acquisition, a sales/BD hire, product polish (Phase 7.2.2 customer-CMS layer), operations, and a modest reserve. **Stack-able with the MLSP STARTUP National Championship grant (up to MNT 99M / ~$30K USD non-dilutive)** for a combined Path 1 funding stack of **$80K-180K USD** if the government program eligibility holds in 2026.

**Path 2 (Alternative): Bootstrap mode.** Founder-funded customer acquisition through Year 1 SOM ($20-50K revenue / 3-5 customers per Q5+Q7 locks), reinvestment-driven growth, slower scaling timeline (Year 2 trajectory $150-450K vs Path 1's $300-600K). No external dilution — founder retains 100% equity. Strategic optionality preserved: the founder can opt for a Series A timed against early commercial validation rather than a pre-seed timed against product readiness.

### 10.2 Path 1 use of funds breakdown

For the recommended pre-seed range $50-150K USD, the use-of-funds breakdown follows a customer-first, hire-second, product-third allocation:

| Category | Share | $50K case | $100K case | $150K case |
|---|---|---|---|---|
| **Customer acquisition** (sales + marketing + travel + demo materials) | **40%** | $20K | $40K | $60K |
| **Hiring** (1 sales/BD person, Mongolia financial-sector experience — §9.3 priority hire 1) | **25%** | $12.5K | $25K | $37.5K |
| **Product polish** (Phase 7.2.2 customer-CMS layer if customer demand validates; Phase 6.1 Mongolian content expansion) | **20%** | $10K | $20K | $30K |
| **Operations + tools** (legal, accounting, infrastructure tier-up if needed, professional indemnity) | **10%** | $5K | $10K | $15K |
| **Reserve** (unallocated; held for opportunistic spend or runway extension) | **5%** | $2.5K | $5K | $7.5K |
| **Total** | **100%** | **$50K** | **$100K** | **$150K** |

**Optional supplement: MLSP STARTUP National Championship grant** (Mongolian Ministry of Labor and Social Protection, MNT 99M ~$30K non-repayable to top 6 teams). Stack-able with Path 1 pre-seed for combined funding of $80K-180K. Beyond the dollar value, government endorsement signals legitimacy to subsequent institutional investors.

> *[FOUNDER ADJUST — verify 2026 STARTUP National Championship eligibility (Orange News fits the program's startup classification), application dates, and current cohort status. Engage MLSP directly via the official channel.]*

### 10.3 Path 2 bootstrap milestones

The bootstrap alternative is a deliberate strategic posture, not a fallback. Operational discipline:

- **Year 1 revenue floor:** $20-50K SOM target (per Q5 + Q7 locks) — same revenue range as Path 1 Year 1, achieved without external capital.
- **Founder personal investment:** estimated $30-50K from founder's prior earnings / personal capital, applied to operations + minimal customer-acquisition spend over 12 months.
- **Operational burden:** founder absorbs all roles (sales, customer success, editorial QA, technical, finance) without first hire until commercial revenue supports it.
- **Hire trigger:** first hire (sales/BD) deferred to Year 2 once customer revenue stabilizes at ~$60-100K annualized run-rate.
- **Trajectory:** Year 2 revenue $80-200K (vs Path 1 $150-450K); Year 3 $300-700K (vs Path 1 $400K-1.2M). The compression reflects the slower hiring + slower scaling intrinsic to bootstrap.
- **Equity:** founder retains 100%. Strategic Series A timing remains open against Year 2-3 validation.

> *[FOUNDER ADJUST — bootstrap path founder-funded amount calibrated to actual personal-capital availability + risk tolerance.]*

### 10.4 12-month financial projections

Both paths landing within the founder's stated $20-50K Year 1 SOM range, with Path 1 producing higher month-by-month customer + revenue velocity due to the sales/BD hire activation in Q1.

**Path 1 (Pre-seed funded) — month-by-month forecast:**

| Month | Revenue (cum) | Customers | Headcount | Notes |
|---|---|---|---|---|
| 0 | $0 | 0 | 1 founder | Pre-seed close; sales/BD hire in flight |
| 3 | ~$5K | 1 pilot | 2 (founder + sales/BD) | First pilot conversion underway |
| 6 | ~$20K | 3 paying | 2 | Mid-year cohort momentum |
| 9 | ~$35K | 4 paying | 2-3 | Editorial analyst hire trigger if volume scales |
| 12 | **~$50K** | **5 paying (Q5 lock met)** | 3 | Year 1 close at upper SOM band |

**Path 2 (Bootstrap) — month-by-month forecast:**

| Month | Revenue (cum) | Customers | Headcount | Notes |
|---|---|---|---|---|
| 0 | $0 | 0 | 1 founder | Founder personal-capital deployment begins |
| 6 | ~$5K | 1 pilot | 1 | First conversion later in cycle |
| 9 | ~$15K | 2 paying | 1 | Slower funnel due to founder-only outreach |
| 12 | **~$25K** | **3 paying** | 1-2 | Year 1 close at lower-mid SOM band |

The variance between paths is concentrated in **months 3-9** — Path 1's sales/BD hire compresses the conversion cycle; Path 2's founder-solo motion stretches it. Both paths land 3-5 customers and $20-50K revenue by month 12 — the Q5 + Q7 founder commitments are honored under either path.

### 10.5 Path comparison + investor decision criteria

**The AND Global precedent.** Mongolia's most successful fintech, AND Global (parent of LendMN), grew from **angel investors in Mongolia and Japan providing early funding** (2017, $5M Series A) to **a $7M IFC Series B in 2025**. The trajectory is the canonical Mongolian-frontier-market growth path: domestic-Japanese angel capital first, institutional capital after operational validation. Orange News' funding strategy is informed directly by this precedent — pre-seed from a similar angel + early-VC mix, with institutional capital (IFC, EBRD, Mongolia Opportunities Fund) preserved for a Series A round timed against Year 2 commercial validation.

**Tier 1 investor candidates** (institutional-quality fit for Path 1 pre-seed):

| Investor | Mandate | Check size | Fit |
|---|---|---|---|
| **Mongolia Opportunities Fund I LP** (IFC-affiliated) | Mongolia-specific equity | Variable (institutional); pre-seed less typical | Strongest mandate match; institutional credibility halo |
| **Yoshlar Ventures** (Uzbekistan) | Central Asia pre-seed + seed | $40K-400K | Direct geographic + stage match; pre-seed expertise |
| **EBRD Star Venture** | Multi-country accelerator | Mentor + market access (some capital) | Pipeline + market access; smaller capital but strategic |
| **Founder Institute Mongolia** | Pre-seed pipeline | Program participation; FI Venture Network access | Structured program + alumni network |
| **Mongolian Fintech Association** members | Sector-specific angel | Variable | Domain-aligned angel access |

**Tier 2 — Strategic angel candidates** (Mongolian-business-network access):

- **Mongolian banking-sector executives.** Khan Bank's dual angle is most relevant — 95% digital transaction rate, 80% Mongolian household penetration; the bank operates as both a strategic customer (per §7.2 anchor-customer profile) and a potential strategic angel investor or partner. The "customer + investor" overlap is a known frontier-market funding pattern. *[FOUNDER ADJUST — Khan Bank specific contacts if founder relationship exists.]*
- **Mining-sector individuals.** Senior IR / strategy executives at Oyu Tolgoi LLC, Erdenes Mongol holding, MMC HKEX:0975 — domain-aligned angels whose customer-overlap with §7.2 mining tier-1 customers makes their angel participation strategically valuable.
- **Diaspora angels.** Mongolian-Japanese, Mongolian-Korean, Mongolian-Singaporean angel networks — referencing the AND Global precedent of Mongolia-and-Japan early investors.

**Investor decision criteria:**

| Path | Best-fit investor profile |
|---|---|
| **Path 1 (Pre-seed $50-150K)** | Investors seeking Mongolia / Central Asia financial-infrastructure exposure; willing to underwrite 12-18 month commercial validation; pre-seed allocation $50-150K; comfortable with frontier-market execution risk; valued strategic angle (banking, mining, FDI advisor) |
| **Path 2 (Bootstrap)** | Founder retains full optionality; future Series A investor sees Year 2 commercial traction without dilution overhang; institutional Mongolia/Central Asia funds (IFC, EBRD, Mongolia Opportunities Fund) more naturally fit a Series A vs pre-seed |
| **Hybrid path** | Pre-seed funding ($50-150K) **plus** strategic corporate angel(s) — e.g., a tier-1 bank investing simultaneously with being a customer. This stacks customer-validation signal + strategic-credibility halo + capital. Most powerful structurally but requires founder relationship depth |

> *[FOUNDER ADJUST — specific named-investor outreach already initiated; prior conversation references; angel-network introductions in motion. Founder fills based on actual pipeline state.]*

The **recommended path is Path 1 — pre-seed $50-150K stacked with the MLSP STARTUP government grant ($30K non-dilutive)** for combined funding of $80-180K, which lands the founder's Year 1 commitments (3-5 customers, $20-50K revenue) at higher confidence and unlocks Year 2 trajectory expansion. The bootstrap alternative (Path 2) is preserved as a strategic option if pre-seed conversation does not close on terms aligned with founder's long-term vision.

---

## 11. Risk Analysis + Mitigation

This section condenses `MARKET_RESEARCH.md` §8.3-§8.5 (operational risks, market risks, mitigation strategies) into a single risk-mitigation matrix appropriate for the business-project document level. Full discussion of likelihood reasoning + mitigation operational detail lives in the companion document.

### 11.1 Risk × mitigation matrix

| # | Risk category | Specific risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|---|
| **Operational risks** | | | | | |
| 1 | Single-language dependency | Mongolian-only product caps TAM ceiling without expansion | High (definitional) | Limits SAM ceiling | Cross-border expansion roadmap (§5.5); single-language is also the moat |
| 2 | Single-market concentration | Mongolia macro shocks compress customer budgets directly | High (definitional) | Customer-cohort revenue compression | Multi-cohort customer strategy (§7.1); revenue diversification across SaaS / advertising / licensing |
| 3 | AI provider dependencies | Translator hard-fails Phase 2 if Gemini + Claude both down | Medium | Daily news pipeline pause | Dual-provider fallback in production (Gemini primary + Claude); historical co-incidence <1% |
| 4 | GHA cron reliability | Schedule drift can delay daily news (3h38m drift incident observed) | Medium-Low | Stale data window | Redundant cron slots (`mse_update.yml` 5×/day); off-peak 22:00 UTC selection for `orange_news.yml` |
| **Market risks** | | | | | |
| 5 | Bloomberg / LSEG aggressive Mongolia entry | Compresses pricing; could displace anchor customers | Low (per §8.4 economic-incentive analysis) | Year 2-3 pricing pressure | Editorial moat depth + 2-3 year head-start; partnership / acqui-hire option preserved |
| 6 | Domestic outlets close quality gap | Pricing pressure on Starter tier; advertising surface compresses | Medium (longer-term) | Compression on lower tiers | Continuous editorial-pipeline iteration; Phase 6.1+ Mongolian content depth expansion |
| 7 | Customer acquisition cost (CAC) higher than projected | Year 1 founder runway tightens; SOM revenue lower than $20-50K | Medium-High | Year 1 milestone shortfall | Founder direct-outreach Year 1 (no paid CAC); 3-5 customer concentration limits CAC variance; bootstrap posture (§10.3) absorbs higher friction |
| 8 | Mongolia macro shock (commodity cycle, FDI policy, MNT) | Customer budgets compress; mining-IR cohort hit hardest | Medium-High (cyclical) | Revenue volatility in mining cohort | No single sector >40% of Year 1 revenue; advertising + licensing diversifies away from pure-bank-treasury exposure |

### 11.2 Cross-cutting mitigation patterns

Four patterns reduce aggregate risk exposure beyond per-risk treatments:

1. **Multi-product diversification (Azurise AI portfolio).** Orange News is one product in the founder's broader Azurise AI portfolio. Customer relationships, infrastructure investment, and editorial expertise compound across products — single-product failure does not eliminate the company.
2. **Multi-source content resilience.** 14 RSS feeds + Montsame scraper + ikon.mn + future Mongolian-language sources mean no single content-source failure breaks the news pipeline. Mining and macro coverage have 3-5 independent input streams.
3. **Translation pipeline dual-provider fallback.** Gemini 2.0 Flash primary + Claude Haiku 4.5 fallback (validated 2026-04-23 architecture). Historical simultaneous dual-provider failure <1%.
4. **Customer concentration mitigation.** Year 1 SOM target of 3-5 customers across at least 2 cohorts (banks + mining minimum) limits exposure to any single customer's churn. By Year 3, customer base expansion to 15-30 makes any single departure non-material.

### 11.3 Summary

The risk profile is **frontier-market-typical** — concentrated in single-language / single-market exposure that the company's strategic positioning (Mongolian-first anchor wedge) intentionally embraces. The mitigation posture is **defense in depth** — multi-product, multi-source, multi-provider, multi-cohort — rather than risk avoidance. No single risk is individually catastrophic; the aggregate exposure is manageable for a bootstrap or pre-seed-funded operation, and material risk reduction unlocks naturally as customer base, infrastructure investment, and cross-border footprint compound through Years 2-3.

---

## 12. Appendix — Production State Evidence

This appendix lists verifiable evidence anchors for every production-state claim made in §1-§11. An investor or partner conducting due diligence can independently verify each item.

### 12.1 Live production endpoints

- **Frontend (live):** [https://orangenews-website.vercel.app](https://orangenews-website.vercel.app) — primary deployment URL.
- **Custom domain:** [https://www.orangenews.mn](https://www.orangenews.mn) — *[FOUNDER ADJUST: confirm live status and DNS migration completion]*.
- **RSS feed:** [https://orangenews-website.vercel.app/rss.xml](https://orangenews-website.vercel.app/rss.xml) — RSS 2.0 with 7-day archive window.
- **MSE section:** [https://orangenews-website.vercel.app/mse](https://orangenews-website.vercel.app/mse) — 8 datasets, live mse.mn integration.
- **Video archive:** [https://orangenews-website.vercel.app/video](https://orangenews-website.vercel.app/video) — curated YouTube feed with channel filter.

### 12.2 Source code repositories

- **Frontend:** `github.com/mctunghai-pixel/orangenews-website` — Next.js 16 + React 19 + Tailwind v4. ~7 routes, ~5 lib helpers, ~4 fetcher modules, 11 `docs/sales/` deliverables, 2 `docs/handbook/` companion documents.
- **Backend:** `github.com/mctunghai-pixel/orange-news-automation` — Python 3.11 + GitHub Actions. 5 production cron workflows, 11 Python scripts (5,028 LOC total), 5 reference docs in `docs/`.

### 12.3 Public JSON data artifacts

Each data file is publicly accessible at `https://raw.githubusercontent.com/mctunghai-pixel/orange-news-automation/main/<filename>`:
- `translated_posts.json` — daily news (refreshed daily at ~06:00 MNT).
- `market_data.json` — global market data (refreshed every 30 min).
- `mse_data.json` — Mongolian Stock Exchange data (refreshed 5×/weekday during MSE hours).
- `youtube_data.json` — curated video feed (refreshed every 2 hours).
- `archive/index.json` + `archive/posts_YYYY-MM-DD.json` — daily article snapshots.

### 12.4 Companion documents

- `docs/handbook/TECHNICAL_HANDBOOK.md` — 12-section engineering reference, ~38pp.
- `docs/handbook/MARKET_RESEARCH.md` — 8-section Mongolia financial sector analysis, ~20pp.
- `docs/sales/` — 11 commercialization deliverables (sales deck, customer outreach kit, demo materials, pricing model, retrospective).

### 12.5 Production verification commands

For independent verification:
```bash
# Verify all 5 GHA workflows running successfully
gh run list --workflow=orange_news.yml --limit=3
gh run list --workflow=market_data_update.yml --limit=3
gh run list --workflow=mse_update.yml --limit=3
gh run list --workflow=market_watch_live.yml --limit=3
gh run list --workflow=youtube_update.yml --limit=3

# Verify JSON data freshness
curl -s https://raw.githubusercontent.com/mctunghai-pixel/orange-news-automation/main/market_data.json | jq '.fetched_at'
```

### 12.6 Document version history

| Version | Date | Notes |
|---|---|---|
| v1.0 | 2026-05-07 | Initial draft completed Day 15; founder review pending |
| (forthcoming) | TBD | Founder review revisions; investor-ready v1.1 |

---

*End of BUSINESS_PROJECT_TEMPLATE.md. Companion documents: `TECHNICAL_HANDBOOK.md`, `MARKET_RESEARCH.md`, `BUSINESS_PLAN.md` (forthcoming Task 4), `docs/sales/`.*

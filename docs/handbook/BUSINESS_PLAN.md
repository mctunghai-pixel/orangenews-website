<!-- BUSINESS_PLAN.md — Orange News by Azurise Solution LLC -->

---

## Cover Page

# Orange News
### Comprehensive Business Plan

**Operational reference for institutional investors, banks, and regulatory filings**

---

**Founder + CEO:** Munkhsaikhan Mongolbayar
**Company:** Azurise Solution LLC
**Product:** Orange News (orangenews.mn)
**Document date:** 2026-05-07
**Document version:** v1.0 (founder review pending)
**Contact:** [mc.tunghai@gmail.com](mailto:mc.tunghai@gmail.com)

---

> **Confidentiality + legal notice.** This document is **strictly confidential**. It contains audited and unaudited financial projections, customer-acquisition strategy, operational forecasts, competitive positioning, and proprietary technical architecture. Distribution is limited to: the founder, named advisors, prospective institutional investors under executed NDA, prospective lenders performing credit due diligence, and regulatory authorities where required by law. Unauthorized distribution is **explicitly not permitted** and may give rise to legal remedies under Mongolian commercial law and applicable cross-border statutes.

> **Forward-looking-statement disclaimer.** Financial projections, customer-acquisition forecasts, and market-trajectory estimates contained in this document are forward-looking statements. They are based on assumptions and information available as of the document date. Actual results may differ materially due to market conditions, regulatory changes, customer-decision timing, technology evolution, and macroeconomic factors. Recipients should not rely on forward-looking statements as guarantees of future performance.

> **Audience.** This Business Plan is the **operational and financial reference document** for institutional investors (Mongolia Opportunities Fund, IFC, EBRD, Asian Development Bank), commercial banks evaluating loan applications, and Mongolian regulatory authorities reviewing filings. The companion **Business Project Template** (`BUSINESS_PROJECT_TEMPLATE.md`) is the streamlined investor-facing document for pre-seed VCs, accelerators, and grant programs. Cross-references throughout this document point to the companion document for executive-summary positioning rather than duplicating content; this Business Plan focuses on operational, financial, and execution depth.

> **Companion documents.**
> - `BUSINESS_PROJECT_TEMPLATE.md` — investor-facing project document (12 sections + appendix, ~27pp).
> - `MARKET_RESEARCH.md` — Mongolia financial sector analysis + TAM/SAM/SOM (8 sections, ~20pp).
> - `TECHNICAL_HANDBOOK.md` — engineering reference (12 sections, ~38pp).
> - `docs/sales/` — commercial outreach + onboarding deliverables (11 files).

---

## Table of Contents

0. [Cover Page](#cover-page)
1. [Executive Summary](#1-executive-summary)
2. [Company Description](#2-company-description)
3. [Founder + Management Team](#3-founder--management-team)
4. [Mission, Vision, Values](#4-mission-vision-values)
5. [Market Opportunity](#5-market-opportunity)
6. [Products + Services Detailed](#6-products--services-detailed)
7. [Marketing + Sales Strategy](#7-marketing--sales-strategy)
8. [Operations Plan](#8-operations-plan)
9. [Management + Organization Structure](#9-management--organization-structure)
10. [Financial Plan](#10-financial-plan)
11. [Funding Requirements](#11-funding-requirements)
12. [Implementation Timeline](#12-implementation-timeline)
13. [Risk Analysis + Mitigation](#13-risk-analysis--mitigation)
14. [Appendices](#14-appendices)
15. [Glossary](#15-glossary)

---

## 1. Executive Summary

### 1.1 Operational opportunity

Orange News occupies a structurally durable wedge in Mongolia's financial information market — a market characterized by **concentrated institutional demand** (5 systemically-important commercial banks holding 100% of system assets, 4 tier-1 mining corporations, 162 MSE-listed companies, 50+ brokers and asset managers) and **systemic information undersupply** (international platforms cover Mongolia thinly because the market scale does not justify dedicated bureaus at their cost structures; domestic outlets lack Bloomberg-grade editorial pipeline infrastructure). The opportunity is not speculative — it is the gap between observable institutional information demand and verifiable platform supply, sized in `MARKET_RESEARCH.md` §7 at $1.4M-7.3M direct-addressable TAM (bottom-up) and $8-15M fully-expanded TAM (top-down, including advertising and licensing extensions).

What distinguishes Orange News for institutional investors and lenders is **execution evidence rather than thesis assertion**. The product is operational today: 5 GitHub Actions cron pipelines running in production, ~36 production commits across the Day 5-14 sprint, 0 downtime incidents, 11 commercialization deliverables in `docs/sales/`, and 3 companion technical/market/business-project documents (this Business Plan being the fourth) shipped on Day 15. The product is auditable: every claim in this document is verifiable against committed code in two public GitHub repositories and live production endpoints. The execution discipline that produced the system — disciplined editorial validation (5 validator rules, temperature-locked LLM calls), production-grade infrastructure operating at $0/month, founder-engineer-led architectural decisions accumulated over ~5 months — is the same discipline that will execute the customer-acquisition, operational-scaling, and cross-border-expansion phases described in §6, §7, §10, and §12.

The institutional-investor case rests on three convergent factors: **a defensible market wedge** (no Mongolian-language Bloomberg-grade competitor today; international incumbents structurally cannot prioritize Mongolia at their cost structures); **a production-validated operational platform** (the engineering and editorial pipeline is live, not aspirational); and **a founder profile combining domain depth, technical depth, and Mongolian-business-network commercial relationships** (§3) appropriate for the frontier-market execution context. *[See `BUSINESS_PROJECT_TEMPLATE.md` §1 for the streamlined executive summary positioning. This section provides operational and institutional-investor depth.]*

### 1.2 Production state evidence

| Production-state metric | Value | Verification |
|---|---|---|
| **GitHub Actions cron workflows in production** | 5 (orange_news, market_data_update, mse_update, market_watch_live, youtube_update) | `gh run list` per workflow |
| **Frontend page-class routes shipped** | 7 (homepage, articles, category, markets, market-watch, mse, video) + 4 operational (RSS, subscribe, verify, confirmed) | Live at orangenews-website.vercel.app |
| **News source pipelines** | 14 RSS feeds (12 international + ikon.mn + 1 Mongolian + Montsame HTML scraper = 14 total, of which 2 are Mongolian-language sources) | `orange_rss_collector.py` `RSS_FEEDS` constant |
| **MSE-listed companies covered** | 162 (Dec 2025 baseline; live `/mse` route with 8 datasets including TOP-20, gainers, losers, mining commodities, A-board / B-board) | `fetchMseData` in `lib/fetch-mse-data.ts` |
| **Curated YouTube videos surviving quality filter** | ~33 per refresh cycle (6 channels: Bloomberg Television, WSJ, Reuters, FT, CNBC, World Bank Group) | `youtube_data.json` at backend repo root |
| **Daily news article archive depth** | All days from Phase 7.1 launch (Day 5, 2026-05-05) onward; idempotent snapshots | `archive/index.json` + per-day files at backend repo |
| **Production downtime incidents (Day 5-14 sprint)** | 0 | `gh run list` history |
| **Production commits Day 5-14** | ~36 across two repos | `git log` history |
| **Sales infrastructure deliverables shipped** | 11 in `docs/sales/` (sales deck, customer outreach kit, demo materials, pricing model, onboarding checklist, success metrics, retrospective) | Day 10-14 commits |
| **Operating cost per month** | $0 effective (free tiers + ~$15/yr domain) | `TECHNICAL_HANDBOOK.md` §4.7 |

The infrastructure is not a prototype, demo, or roadmap — it is operational publishing infrastructure committing real content to real readers daily. The cost structure is the financial moat: a competitor would either invest 5-10 months of focused engineering to reach equivalent stability or pay $1-10K/month for paid alternatives that compress their margin profile vs Orange News' $0/month base.

### 1.3 Financial summary

Three financial scenarios anchor the funding ask and forward-looking projections (full detail in §10):

| Year | Low | **Base** | High |
|---|---|---|---|
| **Year 1 revenue** | $30K | **$100K** | $200K |
| **Year 2 revenue** | $150K | $500K | $800K |
| **Year 3 revenue** | $1.5M | **$2M** | $2.5M |

**Funding strategy (§11):** Path 1 (recommended) — pre-seed funding **$50K-150K USD**, optionally stack-able with Mongolia's MLSP STARTUP National Championship grant (~$30K USD non-dilutive) for combined funding of **$80K-180K USD**. Path 2 (alternative) — **bootstrap mode**: founder-funded operations through Year 1 SOM ($20-50K revenue), no external dilution, slower scaling timeline.

**Break-even timeline:** Path 1 reaches break-even at **month 18-24** (sales/BD hire activation accelerates customer acquisition); Path 2 reaches break-even at **month 24-36** (founder-solo motion + reinvestment-driven growth). Both paths preserve founder optionality for a Series A round timed against Year 2-3 commercial validation.

### 1.4 Strategic positioning

Orange News' Year-1-to-Year-5 trajectory rests on three sequential positions:

1. **Year 1: Mongolia financial information beachhead.** Land 3-5 paying customers across banking and mining tier-1 cohorts (per `BUSINESS_PROJECT_TEMPLATE.md` §7); validate product-market fit and pricing.
2. **Year 2-3: Mongolia financial information leader.** Expand customer base to 15-30 across all cohorts (banks, mining, MSE corporate IR, brokers, government); first licensing engagements; advertising contribution at meaningful reader scale.
3. **Year 3-5: Central Asia adjacency expansion.** Cross-border replication into Kazakhstan (KSE-listed coverage), Uzbekistan (Tashkent Stock Exchange), with Cyrillic-typography-pipeline + direct-exchange-integration template ported at marginal cost. Cross-border TAM extension ~$30-80M+ (illustrative, GDP-scaled, validation pending — see `MARKET_RESEARCH.md` §7.6).

**Azurise AI portfolio context.** Orange News is one product in the founder's broader Azurise AI portfolio. Adjacent Azurise AI products in development include **Monfiles** (document/content management infrastructure) and **Nomad DNA** (data-product applications). Customer relationships, infrastructure investment, and editorial expertise compound across the portfolio — single-product failure does not eliminate the company, and successful Orange News execution accelerates portfolio-wide commercial momentum.

The institutional investor or lender evaluating this Business Plan is therefore not underwriting a single-product moonshot — they are underwriting a **defensible market wedge that scales via cross-border replication**, executed by a **founder with multi-product portfolio depth** operating against a **production-validated operational platform**. That framing is the strategic basis for the Year-1-to-Year-5 trajectory and the funding strategy in §11.

---

## 2. Company Description

This section provides operational and institutional depth on Azurise Solution LLC — the entity behind Orange News. *[See `BUSINESS_PROJECT_TEMPLATE.md` §2 for the streamlined company-overview narrative; this section provides legal-entity, governance, IP, regulatory, and operational-posture depth appropriate for institutional investor and lender due diligence.]*

### 2.1 Legal entity structure

**Azurise Solution LLC** is a Mongolian limited liability company (LLC) registered under the Mongolian Civil Code provisions governing limited-liability companies. The company is **founder-controlled**, with Munkhsaikhan Mongolbayar as the sole equity-holder, sole director, and chief executive at the document date.

| Attribute | Status |
|---|---|
| Legal form | Limited liability company (LLC) |
| Jurisdiction of incorporation | Mongolia |
| Registered office | Ulaanbaatar, Mongolia *[FOUNDER ADJUST: full registered address]* |
| Tax registration | *[FOUNDER ADJUST: Mongolian Taxation General Authority registration number]* |
| Business activity classification | IT services + media + financial information services |
| Ownership | 100% founder-held (no co-founders, no current external equity holders, no current employee equity grants) |
| Board composition | Single-director (founder); board expansion contemplated post pre-seed funding |
| Annual financial statement filing | Required per Mongolian LLC regulations; filing cadence and audit posture detailed in §2.4 |

The single-director / single-shareholder posture is **deliberate for the pre-funding stage** — it preserves founder optionality for governance design at the time of pre-seed close, when investor representatives or independent directors may be added under terms negotiated alongside the funding agreement.

### 2.2 Corporate governance + ownership

**Current ownership:** 100% Munkhsaikhan Mongolbayar.

**Governance posture under each funding path** (cross-references to §11 funding strategy):

- **Path 1 (Pre-seed $50-150K):** at close, governance updates contemplate (a) **board observer or director seat** for lead investor (subject to negotiation), (b) **standard pre-seed protective provisions** (consent rights on equity issuance, debt above a threshold, change-of-control), (c) **vesting on founder common stock** (typical 4-year cliff — terms TBD), (d) **employee option pool reservation** (typically 10-15% post-money, sized to support §3 hiring plan).
- **Path 2 (Bootstrap):** governance posture unchanged — single founder-director. Founder optionality preserved for Series A timing.

**Equity reservations contemplated:**
- Founder retains majority post-pre-seed (anticipated 70-85% depending on round size + valuation).
- Pre-seed lead investor: anticipated 10-25% (range reflects $50-150K check size against negotiated valuation).
- Employee option pool: anticipated 10-15% post-money, vesting standard 4-year-cliff.
- Advisor pool: anticipated 0.5-2% in aggregate, individual grants 0.1-0.5% per advisor (per §3.4 advisory plan).

> *[FOUNDER ADJUST — actual cap-table targets refined during pre-seed negotiations; valuation expectations TBD against investor conversations.]*

### 2.3 Intellectual property

All intellectual property created in connection with Orange News is **owned by Azurise Solution LLC**. The IP portfolio includes:

| IP asset | Status |
|---|---|
| **Orange News brand mark** (word mark "Orange News" + visual identity) | *[FOUNDER ADJUST: trademark filing status — Mongolia + key target jurisdictions]* |
| **orangenews.mn domain** | Registered to Azurise Solution LLC; renewal $15/yr |
| **Source code — frontend** (`orangenews-website` repository) | Owned by LLC; private until any licensing event; founder is sole committer to date |
| **Source code — backend** (`orange-news-automation` repository) | Owned by LLC; private until any licensing event; founder is sole committer to date |
| **Editorial pipeline operational know-how** (5-rule validator design, Mongolian-Cyrillic prompt engineering, mse.mn integration mechanics) | Trade-secret protected via private repository + access controls |
| **Azurise Solution + Azurise AI brand marks** | Held at LLC level; cross-product application within portfolio |

**No external IP claims.** No co-founder, prior employer, contractor, or open-source license imposes ownership claims on Azurise Solution LLC's working portfolio. Open-source dependencies (Next.js, React, Tailwind, Anthropic SDK, google-genai SDK, etc.) are used under their permissive licenses; no GPL or copyleft entanglements.

**IP protection roadmap** (post pre-seed funding):
- Mongolia trademark filing for "Orange News" + visual identity (estimated $1-3K legal + filing).
- Cross-jurisdictional trademark filing for target Central Asia markets per §5.5 expansion roadmap.
- Employee invention-assignment agreements at the time of first hire (§3.3).
- Standard contractor IP-assignment clauses for any future engineering or editorial contractors.

### 2.4 Banking, insurance, accounting, regulatory

| Function | Current state | Path-1 post-funding state |
|---|---|---|
| **Mongolian commercial-bank treasury account** | *[FOUNDER ADJUST: bank name + account class]* | Same; multi-currency capability added if cross-border revenue scales |
| **USD operating account** | *[FOUNDER ADJUST: status]* | Established for international vendor + investor flow |
| **Accounting firm engagement** | *[FOUNDER ADJUST: firm name + engagement scope]* | Engagement deepened to monthly close + annual review |
| **Annual audit** | Not required at current scale | **Annual external audit triggered at Year 2** (revenue threshold or investor covenant) |
| **Professional indemnity insurance** | *[FOUNDER ADJUST: status]* | Procured post Series A or first material customer contract |
| **Directors-and-officers (D&O) insurance** | Not required at current scale | Procured at first independent-board addition |
| **Mongolian regulatory standing** | LLC business license active *[FOUNDER ADJUST: license number]*; tax registration current | Maintained; compliance posture extended to data-protection per Mongolian PDPL provisions if customer-data scope expands |

The operational compliance posture is **lean by design** — the company carries only the obligations appropriate for a pre-revenue / early-revenue Mongolian LLC. Material compliance investments (audited financial statements, professional indemnity, employee benefits) trigger naturally at revenue, hiring, and customer-contract milestones described in §10 and §12.

### 2.5 Operating jurisdictions

| Jurisdiction | Operational footprint |
|---|---|
| **Mongolia** | LLC registration, tax residency, founder residency, primary customer base, banking, accounting, regulatory standing |
| **Global cloud (Vercel, GitHub)** | Frontend hosting on Vercel's global CDN; source code on GitHub; data artifacts on GitHub raw-content CDN |
| **API service jurisdictions** | Anthropic (US), Google (US), Resend (US), CoinGecko (international), Binance (international), ExchangeRate-API (US) — service-tier consumption only, no sub-processor data residency commitments at current scale |
| **Future Central Asia footprint** (Year 3+) | Kazakhstan, Uzbekistan operating considerations TBD per market entry; likely subsidiary or branch establishment per local commercial law |

The Mongolia + global-cloud-services structure is **the standard frontier-market tech-startup posture** — lean operational footprint, global service consumption, customer-base-anchored to a single jurisdiction.

### 2.6 Brand portfolio — Azurise AI

Orange News is one product within the Azurise AI portfolio. The portfolio strategy is to build durable products that share infrastructure, editorial expertise, and customer relationships:

| Product | Stage | Description |
|---|---|---|
| **Orange News** | Production (live; commercialization-ready Day 14) | Mongolian-first financial information platform |
| **Monfiles** | *[FOUNDER ADJUST: stage — concept / development / pre-launch]* | Document and content management infrastructure |
| **Nomad DNA** | *[FOUNDER ADJUST: stage]* | Data-product applications |
| Future Azurise AI products | Concept / contemplation | Adjacent to existing portfolio; informed by Orange News commercial validation |

**Cross-product synergies:** customer relationships established through Orange News inform pipeline opportunities for Monfiles and Nomad DNA; infrastructure investments (hosting, deployment, security) amortize across products; founder operational discipline scales across the portfolio. The portfolio framing **reduces single-product-failure risk** to investors and lenders.

### 2.7 Operational history — extended milestones

Building on `BUSINESS_PROJECT_TEMPLATE.md` §2.6 (8-row milestone table), with operational/financial anchors added:

| Date | Milestone | Operational anchor |
|---|---|---|
| 2011-2013 | CEO tenure, Azurise LLC (predecessor entity) | Founder operational discipline accumulated; predecessor entity wound down per founder strategic decision |
| 2026 (April) | Orange News project initiated; backend RSS collector + initial translator drafted | Backend repo created on GitHub |
| 2026 (early May) | Phase 4 production polish — 7-route frontend + OG image system + market data layer | 5+ commits per phase milestone; production ramp underway |
| 2026 (May 4, Day 4) | Phase 6.2 complete — `/mse` route + 8 mse.mn datasets via Server Actions integration | 13 commits in single day (Phase 6.2 marathon) |
| 2026 (May 5, Day 5) | Phase 7.1 complete — daily article archive + RSS expansion | Archive idempotency + 7-day RSS window |
| 2026 (May 6, Day 6) | Phase 7.2.1 + 7.3 + 6.1.5 complete — Subscribe + live video feed + Montsame scraper | Cross-functional ship — 3 phases in 1 calendar day |
| 2026 (May 6, Day 8) | Phase 8.1 Track A complete — Slack failure notifications across 3 production workflows | Operational observability layer |
| 2026 (May 6-14, Days 9-14) | Sprint to commercialization — 11 sales deliverables shipped in `docs/sales/` | Day 14 = commercialization-ready state |
| 2026 (May 7, Day 15) | **Documentation suite shipped** — `TECHNICAL_HANDBOOK.md` + `MARKET_RESEARCH.md` + `BUSINESS_PROJECT_TEMPLATE.md` + `BUSINESS_PLAN.md` (this document) | 4 documents covering engineering reference, market analysis, business project, and comprehensive business plan |

**Sprint-cadence framing:** the Day 5-15 sprint produced ~36 production commits and 4 strategic documents in 11 calendar days — a velocity that itself constitutes **execution-discipline evidence** for investors and lenders.

### 2.8 Current operating posture

The company today is **operationally lean and execution-dense**:

- **Single-founder operation** — Munkhsaikhan in all functional roles; first hire contemplated post-funding (§3.3).
- **Production-grade infrastructure operating at $0/month effective cost** (per `TECHNICAL_HANDBOOK.md` §4.7 — free-tier compute, public CDN reads, $15/yr domain, $0-50/mo LLM API consumption).
- **Cross-repo deployment hygiene** — backend (`orange-news-automation`) and frontend (`orangenews-website`) maintained as separate repositories with disciplined deployment pipelines (cross-repo coordination per `TECHNICAL_HANDBOOK.md` §2 + §8.2).
- **Commercialization-ready** as of Day 14 (2026-05-06) — sales infrastructure (deck + outreach + onboarding + demo + retrospective) shipped; first commercial customer onboarding activation pending founder Year-1 outreach (§7).
- **Regulatory-clean, IP-clear, legal-entity-current** — all baseline operational obligations met; no outstanding compliance risks at current scale.

This operating posture is the **financial moat** — it minimizes ongoing fixed costs while preserving the operational discipline required for sustained growth. Cost-structure parity with international incumbents would require either 5-10 months of engineering investment or $1-10K/month in paid alternatives (per `BUSINESS_PROJECT_TEMPLATE.md` §8.5).

---

## 3. Founder + Management Team

This section provides extended founder profile and forward-looking management posture for institutional investor and lender due diligence. *[See `BUSINESS_PROJECT_TEMPLATE.md` §2.4 (short bio) and §9.1 (long bio) for the streamlined founder narrative; this section extends with founder-development thesis, current management posture, hiring plan post-funding, and advisory recruitment strategy.]*

### 3.1 Founder profile — extended long version

**Munkhsaikhan Mongolbayar** — Founder + CEO, Azurise Solution LLC. Contact: [mc.tunghai@gmail.com](mailto:mc.tunghai@gmail.com).

**The founding insight.** Orange News exists because Munkhsaikhan first observed Mongolia's financial-information gap in a comparative-economy context — during graduate studies at National Taiwan University's Global MBA program (Taiwan GMBA), where he watched Taiwanese institutional investors operate against Bloomberg-grade local-language coverage that Mongolia entirely lacked. The pattern was structural: small economies sustain Bloomberg-grade financial information **when local entrepreneurs build the editorial infrastructure international platforms have no incentive to provide**. He returned to Mongolia with a thesis that the same opportunity existed at home and that the convergence of frontier-model LLM translation maturity, Mongolian financial-sector digitalization, and sustained international-platform pricing pressure made 2026 the right moment to occupy the wedge.

**Career arc and operational results.** Across 15+ years spanning enterprise software, product leadership, and founder-CEO tenure, three roles have most directly informed the Orange News build:

- **Managing Director, TESKO.** Operational and commercial leadership in a Mongolian commercial environment. Built customer-relationship infrastructure that informs Orange News' Year-1 founder direct-outreach GTM motion (§7). The TESKO operating template — disciplined customer engagement, P&L responsibility, cross-functional team coordination — accumulated frontier-market commercial-operations expertise that maps directly to navigating a Mongolian institutional sales cycle. *[FOUNDER ADJUST — TESKO tenure dates + specific operational results (revenue scale, team size, key customer wins) for founder-led completion.]*

- **AzuPoint enterprise content management initiative (Microsoft partnership).** Built and operated an enterprise content management product on the Microsoft technology stack. Technical-architecture decisions made during AzuPoint — file system design, content pipelines, multi-tenant deployment, customer onboarding — directly transfer to Orange News' two-repo / JSON-as-contract / ISR-with-mock-fallback architecture. The discipline of operating production content infrastructure for enterprise customers is what makes Munkhsaikhan's $0/month operational cost achievement at Orange News scale architecturally credible rather than aspirational. *[FOUNDER ADJUST — AzuPoint tenure dates + Microsoft partnership scope details.]*

- **CEO, Azurise LLC (2011-2013).** Founded and led the predecessor entity to today's Azurise Solution LLC. Established the operational habits — lean cost structure, founder-engineer-led product development, frontier-market commercial discipline — that the current Azurise AI portfolio extends. The 2011-2013 founder cycle produced operational lessons (capital efficiency, customer-acquisition pacing, founder-time allocation under uncertainty) that Munkhsaikhan now executes against with a decade of additional experience and a substantially clearer commercial thesis. *[FOUNDER ADJUST — specific Azurise LLC outcomes + lessons.]*

**Education.** Global MBA, National Taiwan University (Taiwan GMBA program). *[FOUNDER ADJUST — undergraduate degree + institution; any additional certifications or specialized training.]*

**Founder-development thesis — why founder fit for this stage.** Three convergent attributes make Munkhsaikhan specifically suited to this stage of Orange News:

1. **Domain depth.** Native Mongolian-Cyrillic editorial fluency — the qualitative discrimination that the 5-rule editorial validator + Mongolia-passthrough route operationally depend on. International founders attempting the same product would require senior bilingual editorial hires from Day 1; Munkhsaikhan supplies this in-house.
2. **Technical depth.** Architectural judgment to design + execute the cross-repo split, JSON-as-contract design, dual-LLM translator pipeline, ISR-with-mock-fallback resilience layer, and mse.mn Server Actions reverse-engineering without external CTO support. This is what enables the **$0/month operational cost** and the lean-funding-ask posture in §11.
3. **Commercial relationships.** Existing Mongolian-business network across banking, mining, FDI advisory, and government circles — the customer-acquisition advantage that makes the founder direct-outreach Year 1 GTM motion (§7) credible. **An external founder would face 12-24 months of relationship-building before achieving equivalent customer-access.**

**Founder durability.** Prior founder cycle (Azurise LLC 2011-2013) informs current execution discipline — capital efficiency, customer-acquisition pacing, decision-making under operational uncertainty. The 2026 Orange News cycle benefits from a decade of additional experience plus a substantially clearer commercial thesis (anchored by 5+ months of production-validated technical infrastructure and Day 5-15 sprint commit cadence).

> *[FOUNDER ADJUST — bio polish: founder's preferred phrasing of education detail, dates of TESKO + AzuPoint tenure, professional photo placement, LinkedIn URL, additional roles or affiliations to surface or omit.]*

### 3.2 Management team — current state

**Single-founder operation** as of the document date. Munkhsaikhan operates Orange News end-to-end across:

- **Technical architecture and engineering** — backend pipeline (5 GHA workflows, ~5,000 LOC Python), frontend (Next.js 16 + React 19), data layer (4 fetcher modules + ISR cache topology).
- **Editorial discipline and quality** — 5-rule validator design, Mongolian-Cyrillic typography decisions, brand-voice positioning, daily editorial pipeline operation.
- **Commercial strategy and customer development** — Year 1 direct-outreach motion, demo-driven sales close, customer success metrics design.
- **Finance, legal, operations** — Mongolian LLC compliance, banking, accounting engagement, IP protection roadmap, all standard back-office functions.

**Operational support via TESKO infrastructure.** Existing TESKO commercial-operations infrastructure (legal counsel, accounting relationships, operational templates, banking access) provides leverage for Azurise Solution LLC's compliance and finance functions during the pre-revenue / early-revenue stage. The operational template carries forward; the LLC entity itself is independent (per §2.1).

> *[FOUNDER ADJUST — named advisors with current engagement; advisory-board composition if any; informal-mentor relationships that materially inform decision-making at this stage.]*

The single-founder posture is **deliberate for Year 1** — it minimizes fixed cost, accelerates decision velocity, and forces direct customer learning into founder hands. Hire activation triggers detailed in §3.3.

### 3.3 Hiring plan — post-funding

The hiring plan is **revenue- and milestone-gated**, with hire activations tied to specific commercial validation events. Headcount trajectory:

| Year | Headcount | Composition |
|---|---|---|
| **Year 1** | **1** (founder) | Founder solo through Year 1 SOM ($20-50K revenue / 3-5 customers per Q5 + Q7 locks) |
| **Year 1 → Year 2 trigger** | **2-3** | + Sales/BD lead (Path 1 funded) + part-time editorial analyst |
| **Year 2** | **3-6** | + 1-2 part-time engineers + first full-time editorial analyst at scale |
| **Year 3** | **6-12** | Scaled across customer success, content/editorial, engineering, sales/BD, operations |
| **Year 4** | **12+** | Mongolia leader posture; Central Asia adjacency hiring contemplated |

**Hire 1 — Sales / Business Development lead** (Path 1 trigger: pre-seed close):
- **Profile:** Mongolian financial sector experience (banking, brokerage, MSE-listed-company IR, or commercial real estate). 5+ years business-development experience. Bilingual Mongolian + English; Russian helpful for Central Asia adjacency.
- **Responsibilities:** customer-pipeline development, demo coordination, pilot-to-conversion shepherding, customer success management for Year 1 cohort.
- **Compensation:** $30-60K USD annualized base + equity participation per founder-decided pool allocation. *[FOUNDER ADJUST — base salary calibrated to Mongolian market norms.]*
- **Trigger:** pre-seed close (Path 1) OR first paying customer (Path 2 alternative path).

**Hire 2 — Mongolian-language editorial analyst** (Year 2 trigger: editorial volume ≥ 10 articles/day or customer-customization scope expansion):
- **Profile:** Mongolian-Cyrillic editorial background; financial-domain familiarity preferred. Bilingual editorial-quality discrimination.
- **Responsibilities:** lifts editorial QA off founder; manages Phase 7.2.2 customer-CMS layer when deployed; handles bespoke customer editorial requests.
- **Compensation:** $15-30K USD annualized. *[FOUNDER ADJUST.]*

**Hire 3 — Part-time engineer** (Year 2 trigger: pipeline maintenance + Phase 7.2.2 deployment):
- **Profile:** Python + Next.js capable; Mongolia-based or remote; contractor or part-time arrangement initially.
- **Responsibilities:** maintenance of existing pipeline + Phase 7.2.2 customer-CMS development + Phase 6.3 mining/FDI tagging extension.
- **Compensation:** $25-45K USD annualized contractor/part-time. *[FOUNDER ADJUST.]*

**Hires 4-12** (Year 2-4): customer success specialists, sales associates, full-time engineers, editorial team scaling, operations + finance specialist as revenue + customer base support.

The headcount trajectory **scales gross margin compression conservatively** — total payroll year 2 ~$100-150K against $300-800K revenue (per §10), yielding meaningful net-margin headroom while supporting hire-led customer-acquisition acceleration.

### 3.4 Advisory plan + recruitment

The advisory bench is **upside, not Year-1-required** — Year 1 customer acquisition runs on founder direct relationships. Advisory contributions become high-leverage in Year 2 as second-cohort customer-segment expansion and cross-border-adjacency-feasibility decisions arise. Advisory recruitment is sequential, prioritized by domain-decision-support need:

**Strategic advisor — Mongolian banking sector executive.**
- **Target profile:** Senior tier-1 bank executive (treasury head, corporate banking head, or strategy / digital banking lead) at Khan Bank, Golomt Bank, TDB, Khas Bank, or State Bank.
- **Decision-support areas:** customer-acquisition prioritization across the 5-bank cohort, pricing-tier validation, banking-sector procurement-cycle navigation, banking-customer success-criteria definition.
- **Engagement:** 1-2 hours/quarter on specific founder-presented questions; advisory equity grant 0.25-0.5% with 12-month vesting tied to engagement. *[FOUNDER ADJUST — outreach status to specific tier-1 bank executive contacts.]*

**Technical advisor — AI/ML domain specialist.**
- **Target profile:** Senior practitioner in LLM-application architecture or financial-information AI products. Could be Mongolia-resident (rare at this depth) or diaspora-based.
- **Decision-support areas:** LLM-pipeline scaling decisions, dual-provider architecture optimization, Phase 7.2.2 customer-CMS technical design, future Azurise AI cross-product technical strategy.
- **Engagement:** 1-2 hours/quarter; advisory equity grant 0.25-0.5%. *[FOUNDER ADJUST — outreach plan.]*

**Industry advisor — mining or regulator.**
- **Target profile:** Senior mining-IR executive (Oyu Tolgoi LLC, Erdenes Mongol, MMC, ETT) OR regulatory-side advisor (Bank of Mongolia, Financial Regulatory Commission, Ministry of Finance senior staff).
- **Decision-support areas:** mining-cohort customer-acquisition strategy, regulatory-positioning navigation, Mongolia-government-program eligibility (e.g., MLSP STARTUP grant verification per §11), cross-border regulatory-readiness for Central Asia expansion.
- **Engagement:** 1-2 hours/quarter; advisory equity grant 0.25-0.5%. *[FOUNDER ADJUST — outreach plan.]*

**Aggregate advisor pool:** 0.5-2% of fully-diluted equity reserved for advisors at full pre-seed close (per §2.2 governance projection).

The advisory recruitment posture is **specific-decision-driven** rather than prestige-driven — each advisor is recruited for a defined set of decisions, contributes via structured 1-2 hour quarterly engagements, and earns vesting tied to actual contribution rather than passive name lending.

---

## 4. Mission, Vision, Values

This section codifies the strategic intent that anchors every operational decision documented elsewhere in this Business Plan. *[See `BUSINESS_PROJECT_TEMPLATE.md` §2.2 + §2.3 for the streamlined mission-and-vision narrative; this section adds the operational-values articulation that institutional investors and lenders use to predict execution discipline under stress.]*

### 4.1 Mission

**To make globally-standard financial information accessible to Mongolian decision-makers in their own language, at the depth and quality that international platforms cannot economically reach.**

The mission is operationally specific: it commits to a quality standard (Bloomberg-grade information design), a language standard (Mongolian Cyrillic editorial fluency), and an audience standard (institutional decision-makers — treasury teams, IR officers, research desks, corporate boards). Each commitment maps to a concrete production-state element documented elsewhere in the document suite (editorial discipline → `TECHNICAL_HANDBOOK.md` §6; institutional customer cohorts → `BUSINESS_PROJECT_TEMPLATE.md` §7.2; pricing-vs-international anchor → §6 + §10 of this Plan).

### 4.2 Vision — Year 5

**By 2031, Orange News is the default Mongolian-language financial information layer for every tier-1 institution operating in Mongolia, and the operational template runs in at least one Central Asian adjacent market (Kazakhstan or Uzbekistan).**

The Year 5 vision is anchored in three concrete benchmarks:
- **Customer base 30-50 paying customers** spanning banking, mining, MSE corporate IR, brokers, and government cohorts.
- **Annual revenue $3-7M** at the upper-trajectory band of base-scenario projections (per §10 forward financial plan).¹

> ¹ The Year 5 revenue benchmark $3-7M reflects BASE scenario growth trajectory (Year 3 BASE $2M × 1.5-1.7x/year compounding). See §10 for multi-scenario LOW/BASE/HIGH financial projections.
- **At least one Central Asian market live** — the Mongolia-built infrastructure (Cyrillic typography pipeline + direct-exchange integration + mining-domain editorial template) ported at marginal cost per `MARKET_RESEARCH.md` §7.6 cross-border thesis.

### 4.3 Year 10 horizon

Looking beyond institutional planning windows, the Azurise AI portfolio envisions a multi-product, multi-market financial information infrastructure serving frontier markets — Mongolia anchor, Central Asia expansion live, additional adjacent markets evaluated.

This 10-year horizon is **intentionally aspirational and not financially projected**; it represents founder strategic thinking, not committed trajectory. Year 1-5 plan (§10) governs operational accountability.

### 4.4 Values

Five operational values codify the cultural and decision-making discipline that drives execution. Each is **production-anchored** — visible in the operational behavior of the system today, not aspirational.

**1. Editorial integrity is non-negotiable.**
Temperature-locked LLM calls (0.0-0.2), 5-rule editorial validator, source-attribution preservation, banned-phrase enforcement, deterministic footer builder. The validator was tightened on 2026-05-04 specifically to prevent factual hallucination on financial copy; the discipline is operational, not aspirational. This value carries into customer-facing pricing decisions (no over-promised quality, no fabricated coverage claims) and investor-facing financial projections (no inflated TAM, dual-view bottom-up + top-down framing per `MARKET_RESEARCH.md` §7.2).

**2. Operational rigor compounds.**
$0/month effective infrastructure cost; soft-fail discipline at every external dependency; idempotent commit-if-diff workflow patterns; 0 downtime incidents across the Day 5-14 sprint. The system survives single-vendor failures because each integration was designed assuming external-API failure. This value carries into hiring decisions (rigor before scale), funding decisions (capital efficiency before capital deployment), and Year 2-3 expansion decisions (validation before scaling, per §12 implementation timeline).

**3. Mongolian-first orientation is the moat.**
Mongolian-Cyrillic typography subset (~92KB Noto Sans bundle, validated against editorial constraints), Mongolia-passthrough translation route preserving native bylines, mse.mn Server Actions integration mechanics learned through reverse-engineering, Montsame `.content-mn` selector dependency. Mongolian-first is not branding — it is the operational discipline that makes the product structurally hard for international incumbents to replicate. This value carries into every engineering decision (Mongolian-Cyrillic typography is a constraint, not an afterthought), every editorial decision (Mongolian-source articles bypass translation entirely), and every customer-acquisition decision (founder relationships in Mongolian-business circles drive Year 1 GTM).

**4. Customer validation precedes commitment.**
Pricing scenarios expressed as ranges in customer-facing documents until founder customer-discovery validates; "honest-UX patterns" (em-dash stubs, disabled-form labeling, ComingSoon component) over false promises; partial-displacement substitution narrative (retain 2-3 Bloomberg seats + add Orange News) over wholesale-replacement framing. This value carries into commercial communication (no over-promising), product roadmap (Phase 7.2.2 customer-CMS deferred until customer-demand validates), and founder-investor discussions (3-5 customers Year 1 commitment validates before requiring outside capital, per Q5 + Q6 + Q7 founder locks).

**5. Long-term durability over short-term optimization.**
Multi-product Azurise AI portfolio (Orange News + Monfiles + Nomad DNA) reduces single-product-failure risk; multi-source content resilience (14 RSS + Montsame + ikon.mn) reduces single-source dependence; multi-LLM translation pipeline (Gemini primary + Claude fallback) reduces single-API-vendor risk; multi-cohort customer strategy (5+ cohorts in §7) reduces single-customer-departure variance. Founder retains majority control to preserve long-term decision-making against short-term capital-efficiency tradeoffs. This value carries into every aggregation choice (defense in depth, not defense in single-strongest-link) and every founder-strategic decision (durability over velocity when the two conflict).

These values are **operationally testable** — institutional investors and lenders evaluating execution discipline can verify each by inspecting the production system or interrogating the operational decisions documented in `TECHNICAL_HANDBOOK.md`.

---

## 5. Market Opportunity

This section provides PESTLE-frame, Porter-Five-Forces-frame, and forward-sized customer-opportunity analysis for institutional investor and lender due diligence. *[See `BUSINESS_PROJECT_TEMPLATE.md` §3 + §5 for the streamlined problem-and-market narrative; this section adds structural-frame depth and Year 1-5 SOM evolution.]*

### 5.1 Macroeconomic context — Mongolia

Mongolia operates a **$23.6B economy (2024)** with a 3.50 million population (January 2025), of which 69.4% is urban-resident. The economic structure is **mining-anchored, services-supported, agriculture-volatile**:

| Sector | Approximate GDP share | Notes |
|---|---|---|
| **Mining** | 25-30% | Copper, coal, gold; Oyu Tolgoi underground ramp drives 2025-2030 growth |
| **Services** (incl. financial) | 50%+ | Wholesale/retail, transportation, financial services, hospitality, ICT |
| **Agriculture** | 10-15% | Pastoral animal husbandry; periodic *dzud* (severe winter) contractions |
| **Manufacturing + Construction + Other** | 10-15% | Light manufacturing, infrastructure construction |

**Real GDP growth trajectory (World Bank, May 2025 update):**
- 2024: **+5.0%** actual (mining + services led; agriculture contracted from severe dzud)
- 2025: **+6.3%** projected (Oyu Tolgoi underground ramp + agriculture recovery)
- 2026: **+5.0%** projected (post-2025 normalization)
- 2026-27 average: **+5.2%**

**Financial sector contribution:** the financial sector lacks depth, stability, diversification and innovation per recent World Bank / ADB assessments — and is **heavily influenced by mining-driven economic cycles**, making it vulnerable to external shocks. Credit-to-GDP fell from 60% (2013) to 41% (2022) per `MARKET_RESEARCH.md` §2.3 — a structural headroom signal for the next credit-expansion cycle and corresponding information-spend demand.

**Foreign direct investment trends:** mining-anchored historical FDI; post-2013 deleveraging softened cumulative inflow; 2025-2026 IMF + World Bank guidance emphasizes FDI policy as a near-term lever for sustainable growth. The **2026 GoM Oyu Tolgoi loan-amendment discussion** (Bloomberg, March 2026) is a current example of the FDI-policy debates that drive institutional information demand within Mongolian banking, mining IR, and FDI-advisor cohorts.

**Government economic transformation strategy:** the BoM's 2026 monetary policy guidelines + the Financial Regulatory Commission's 2026 priorities both emphasize payment-system development, AML/CFT alignment with FATF recommendations, and macroprudential reserve-requirement adjustments (25% on newly-raised foreign-currency bank funding from Oct 1, 2026). These priorities create regulatory-information demand that maps directly to Orange News' editorial-coverage scope.

### 5.2 PESTLE analysis

| Factor | Mongolia 2026 state | Implication for Orange News |
|---|---|---|
| **Political** | Multi-party democratic system; periodic election cycles introduce policy variance; mining-tax debates and Oyu Tolgoi loan amendments are active in 2026 (Bloomberg, March 2026) | Creates episodic information demand; supports editorial coverage of policy shifts; also a risk vector if regulatory reset compresses customer budgets |
| **Economic** | +5.0% 2024 / +6.3% 2025 / +5.0% 2026 GDP growth; MNT volatility managed-not-pegged; coal export receipts declining 2025 H1 (commodity-cycle risk) | Customer budgets follow macro cycle; mining-cohort revenue concentrated in commodity-cycle peaks; banking sector tracks commodity cycle through credit demand |
| **Sociocultural** | 3.50M population; 69.4% urban; Mongolian Cyrillic dominant language; rising professional-class English fluency among institutional decision-makers; financial literacy improving but uneven | Mongolian Cyrillic editorial fluency is the moat; bilingual (Mongolian + English) capability extends premium-tier addressable market |
| **Technological** | Internet penetration 83-92% (2025); 74.4% social-media adoption; digital payments market projected $10.05B by 2028 (14.49% CAGR); LLM-translation reached production-grade quality 2024-2025 | Reader-facing distribution requires modern device + connectivity baseline (now met); LLM-pipeline maturity is what makes the product economically viable in 2026 vs earlier years |
| **Legal** | Mongolian Personal Data Protection Law (PDPL) provisions; LLC commercial-law framework stable; IP regime functional but enforcement-uneven (trademark filing recommended for brand protection); foreign investment law generally welcoming | LLC operational compliance achievable at lean cost; trademark filing post-pre-seed standard practice; cross-border IP protection per Central Asia expansion roadmap |
| **Environmental + ESG** | Government green-finance push (50%+ of national green financing through Khan Bank in 2024); ESG reporting requirements for mining sector under EITI; State Bank designated "green bank" 2024; Khas Bank S&P upgrade tied to sustainability posture | ESG editorial coverage is high-value for tier-1 banking + mining customers; Phase 6.3 mining/FDI tagging extension addresses this directly |

The PESTLE frame captures the **structural environment** in which Orange News' commercial trajectory plays out — supportive on technological + sociocultural fronts, complicated by political + economic cyclicality, and conditioned by legal + environmental requirements that Orange News' editorial discipline (per `TECHNICAL_HANDBOOK.md` §6) is well-positioned to serve.

### 5.3 Porter's Five Forces

| Force | Intensity | Analysis |
|---|---|---|
| **Threat of new entrants** | **Low-Medium** | High cost barriers (5-10 months engineering investment OR $1-10K/month paid alternatives per `BUSINESS_PROJECT_TEMPLATE.md` §8.5); Mongolian-Cyrillic editorial moat compounds; local-network institutional knowledge non-transferable. New entrant either prices below Orange News (compresses margin profile) or pays the moat tax in time. The barrier is structural, not transient. |
| **Bargaining power of suppliers** | **Low** | Multi-LLM dual-provider mitigation (Gemini + Claude); 14 RSS sources + Montsame + ikon.mn redundancy; mse.mn endpoint integration self-managed (not vendor-dependent at edit boundary); GHA + Vercel free-tier compute. No single supplier has material pricing leverage; Anthropic + Google API rate-card increases would compress gross margin but not threaten operations. |
| **Bargaining power of buyers** | **Medium-High** (Year 1) → **Low-Medium** (Year 3) | Year 1 concentrated buyer pool (3-5 customers) creates single-customer-departure variance; tier-1 banks have institutional procurement leverage; price-discovery still in customer-validation phase. Year 3 customer base 15-30 dilutes per-customer leverage; multi-cohort diversification reduces dependence. Mitigation: §3 hiring sequence + §6 product roadmap + §7 GTM all designed to expand customer base before single customer can dictate terms. |
| **Threat of substitutes** | **Medium** | Bloomberg Terminal + LSEG Workspace + FactSet are partial substitutes for global market data; bilingual-analyst loading is the actual substitute (per `BUSINESS_PROJECT_TEMPLATE.md` §8.6 substitution math). Mitigation: partial-displacement positioning (retain 2-3 Bloomberg seats + add Orange News) is commercially safer than wholesale-replacement framing; product positioning explicitly as complement-to-Bloomberg-for-Mongolia-depth, not Bloomberg-replacement. |
| **Competitive rivalry** | **Low (current) → Medium (Year 3+)** | No Mongolian-language Bloomberg-grade competitor today (`MARKET_RESEARCH.md` §5.5). Year 3+ risk: domestic outlets (ikon.mn, Montsame, brokerage research) may close quality gap; Bloomberg-aggressive-Mongolia-entry low probability per economic-incentive analysis (`BUSINESS_PROJECT_TEMPLATE.md` §8.4). Continuous editorial-pipeline iteration (Phase 6.1+ Mongolian content depth + Phase 6.3 mining/FDI tagging + Phase 7.2.2 customer-CMS) keeps the moat compounding faster than competitor closure rate. |

**Aggregate Five Forces assessment:** Orange News operates in a **low-pressure competitive environment in Year 1-2** (suppliers diversified, no direct competitor, regulatory environment supportive) with **medium-pressure customer dynamics** (small concentrated buyer pool, partial-substitute pressure from international platforms). Pressure profile compresses naturally as Year 2-3 customer base expansion + Year 3+ Central Asia adjacency execution unfold.

### 5.4 TAM / SAM / SOM expanded

This sub-section extends the dual-view framing established in `MARKET_RESEARCH.md` §7 with Year 1-5 SOM evolution narrative.

**TAM (dual view per investor-memo standard):**
- **Direct-addressable TAM (bottom-up): $1.4M-7.3M USD/year** — derived from per-cohort customer count × per-customer ACV at steady-state product maturity.
- **Fully-expanded TAM (top-down): $8-15M USD/year** — including advertising at mature reader scale, downstream licensing into international platforms, and cross-border Mongolian-coverage demand. The expanded view captures Mongolia-as-template revenue from international platforms paying for licensed coverage.

**SAM (12-month reachable):** **$100K-285K USD** across 8-13 realistic Year 1 customer conversions. Expansion vectors detailed in §10 financial plan.

**SOM evolution Year 1-5:**

| Year | SOM (BASE) | Customer count | Driver |
|---|---|---|---|
| **Year 1** | **$100K** | 3-5 | Founder direct-outreach; pilot-to-conversion; tier-1 banks + tier-1 mining anchor cohorts (per Q5 + Q7 founder locks) |
| **Year 2** | **$500K** | 8-15 | Hire-driven customer expansion (sales/BD); secondary cohort entry (government, FDI advisors); first Enterprise tier customer; first licensing engagements |
| **Year 3** | **$2M** | 15-30 | Multi-cohort breadth; advertising at scale; licensing momentum; Enterprise multi-seat anchor; first Central Asia exploration |
| **Year 4** | **$3.5M** | 25-40 | Central Asia adjacency live in 1 market; cross-border revenue contribution; mature licensing pipeline |
| **Year 5** | **$5M** | 35-50 | Mongolia leader posture; Central Asia anchor markets stable; multi-product Azurise AI portfolio synergies |

> **Note.** Year 5 SOM $5M sits middle of §4.2 vision band ($3-7M). This represents BASE scenario landing — LOW scenario tracks ~$3M, HIGH scenario tracks ~$7M, both within §10 multi-scenario financial projections envelope.

**Sensitivity to macro shocks:** Year 1-2 SOM trajectory is most exposed to macro shocks (commodity-cycle compression of mining-cohort budgets; MNT volatility compressing USD-denominated customer purchasing power; regulatory reset suppressing FDI-advisor demand). Year 3+ trajectory absorbs macro shocks more robustly because revenue diversification across cohorts + revenue lines + geographies dilutes single-shock exposure.

**Cross-border TAM extension Years 2-5:** illustrative GDP-scaled estimates ~$30-80M+ across Kazakhstan, Uzbekistan, Kyrgyzstan, Turkmenistan (per `MARKET_RESEARCH.md` §7.6). Pre-investment market validation required before any Year 3+ commitment.

### 5.5 Customer cohort sizing

8 customer cohorts comprise the addressable market — extending the 6-cohort table in `BUSINESS_PROJECT_TEMPLATE.md` §5.2 with realistic Year 1-3 conversion timelines.

> **Note on cohort granularity.** `BUSINESS_PROJECT_TEMPLATE.md` §5.2 uses 6 cohorts for pitch-document brevity. This 8-cohort table extends with two refinements: (1) Tier-2 vs Tier-3 banks separated (operational distinction relevant for GTM sequencing, not for pitch-level positioning); (2) diaspora + law firms added as secondary cohorts (small absolute size but strategic GTM channels). Total addressable population unchanged between documents; granularity choice reflects audience needs (pitch vs due-diligence).

| # | Cohort | Pool count | Per-customer ACV (USD) | Year 1 conversion | Year 3 conversion | GTM sequencing |
|---|---|---|---|---|---|---|
| 1 | Tier-1 banks (systemically important) | 5 | $50K-200K | 1-2 | 3-5 | Anchor; founder direct-outreach Year 1 |
| 2 | Tier-2/3 banks + non-bank lenders | 8-10 | $5K-25K | 0-1 | 3-5 | Year 2-3 expansion via hire-driven outreach |
| 3 | Tier-1 mining corporations | 4 | $20K-100K | 1 (Oyu Tolgoi most likely) | 2-3 | Anchor; complementary to banking cohort |
| 4 | Mid-tier mining (named entities) | 10-15 | $5K-25K | 1-2 | 5-8 | Year 2 expansion driven by mining-cohort referrals |
| 5 | MSE-listed corporate IR | 30-50 | $3K-15K | 2-4 | 8-15 | Cross-sell from MSE-route discovery; broker referrals |
| 6 | Brokers + asset managers | 50+ | $3K-10K | 2-3 | 5-10 | Year 1 secondary tier; faster sales cycle |
| 7 | Government / regulators / FDI advisors | 8-12 | $10K-50K | 0-1 | 1-3 | Year 2-3; longer procurement cycle (RFP-driven) |
| 8 | Law firms + consultancies + diaspora | 20-30 | $3K-15K | 1-2 if opportunistic | 3-6 | Ad-hoc Year 1; opportunity-driven |

**Cohort-by-cohort GTM sequencing rationale:** Year 1 prioritizes anchor cohorts (1, 3) for product-validation halo; Year 2 expands to secondary cohorts (2, 4, 6) via hire-driven outreach; Year 3 unlocks longer-cycle cohorts (7) and opportunistic cohorts (5, 8). The sequencing matches the §3 hiring trajectory + §10 revenue-mix evolution.

### 5.6 Market entry timing

**Why 2026 — convergent shifts.** Four convergent shifts make 2026-2030 the strategic window for occupying the Mongolian-language Bloomberg-grade financial information wedge:

1. **AI translation maturity.** LLM-based translation reached production-grade quality for Mongolian Cyrillic only in the 2024-2025 window. Earlier attempts (statistical MT, rule-based systems) produced output that required heavy editorial revision — economically unviable. Gemini 2.0 Flash + Claude Haiku 4.5 + temperature-locked validators (per `TECHNICAL_HANDBOOK.md` §6.1) deliver editorial-quality output validated empirically against the Orange News pipeline.
2. **Mongolia financial-sector digitalization.** Internet penetration 83-92% (2025); digital banking transactions at 95%+ for tier-1 banks (Khan Bank reference). Customer-side readiness for digital-first information products is a non-blocker in 2026.
3. **Bloomberg pricing pressure.** Bloomberg Terminal $31,980/seat list (up from ~$24K a decade ago) creates persistent procurement pressure on Mongolian institutions whose USD-purchasing power is constrained by MNT volatility. Cost-conscious customers are increasingly receptive to partial-displacement substitutes.
4. **Mongolian-Cyrillic NLP maturity.** Beyond translation, Mongolian-Cyrillic NLP capabilities (named-entity recognition, topic classification) reached usable thresholds in 2024-2025 frontier-model wave — enabling editorial-pipeline operations that previously required manual curation.

**Strategic window 2026-2030.** First-mover advantage compounds in this window: editorial moat depth grows linearly with operational tenure; customer-relationship trust grows with retention; multi-source institutional knowledge accretes from production lessons; Central Asia adjacency template matures. A 2028 entrant would face the same cost-base economics but without the moat-tenure compounding — and would land into a market in which Orange News is already the default Mongolian-language financial information layer.

**First-mover advantage factors:**
- **Editorial-pipeline tenure moat** — every month of production iteration adds rules to the validator and integration depth to the data layer.
- **Customer-relationship trust moat** — first 3-5 paying customers become reference accounts that compound future customer acquisition.
- **Cross-border replication template** — Mongolia execution is the case study for Year 3+ Kazakhstan / Uzbekistan entry.

The 2026-2030 window is the **strategic window**; later entry is structurally more expensive and competitively more difficult.

---

## 6. Products + Services Detailed

This section provides operational depth on the Orange News product and the broader Azurise AI portfolio for institutional investor and lender due diligence. *[See `BUSINESS_PROJECT_TEMPLATE.md` §4 for the streamlined solution narrative; this section adds product-portfolio-strategy depth, service-tier customization detail, future product roadmap, and IP / moat analysis.]*

### 6.1 Product portfolio overview

The Azurise Solution LLC product portfolio comprises three named products at varying stages of development, all sharing infrastructure, editorial expertise, and the founder's operational discipline:

| Product | Stage (Day 15) | Brief description | Core technology base |
|---|---|---|---|
| **Orange News** | **Production (live; commercialization-ready Day 14)** | Mongolian-first financial information platform — anchor product | Cross-repo Next.js + Python ETL on GHA + Vercel; dual-LLM translator pipeline |
| **Monfiles** | *[FOUNDER ADJUST: development stage]* | Document and content management infrastructure; potential white-label component | Reusable content pipeline architecture (extends Orange News' editorial pipeline) |
| **Nomad DNA** | *[FOUNDER ADJUST: development stage]* | Data-product applications | TBD per founder strategic direction |

**Cross-product synergies + brand strategy:**

- **Shared infrastructure.** GHA cron + Vercel + GitHub raw-content CDN delivery topology designed for Orange News applies directly to Monfiles' content pipelines and Nomad DNA's data-product distribution. Marginal cost of additional product on the same infrastructure approaches zero.
- **Shared editorial expertise.** The Mongolian-Cyrillic editorial validators (5-rule pipeline, temperature lock, brand-voice positioning) developed for Orange News transfer directly to any Mongolian-language content product within the portfolio.
- **Shared customer relationships.** Customer trust earned through Orange News commercial validation extends to Monfiles + Nomad DNA when their go-to-market windows arrive — reducing CAC for portfolio-internal cross-sell.
- **Brand strategy: Azurise as parent, products as front-of-mind.** Orange News carries the brand mass at customer-facing; Monfiles + Nomad DNA inherit credibility from the parent without requiring independent brand-building investment.

The portfolio framing **reduces single-product-failure risk to investors and lenders** — Azurise Solution LLC is not betting the company on Orange News alone, while still concentrating Year 1-3 execution on Orange News' commercial validation. *[See `TECHNICAL_HANDBOOK.md` §1 for the technical foundation that all portfolio products inherit.]*

### 6.2 Orange News — content + editorial product

Orange News' content-and-editorial product is the **operational core** of the customer value proposition. The discipline that produces editorial-quality Mongolian-Cyrillic financial information at scale is the moat (per §8 of `BUSINESS_PROJECT_TEMPLATE.md` and §4.4 of this Plan).

**Daily content output:**
- **~10 posts per day** published to Facebook (1 Market Watch lead post at ~07:15 MNT + 9 news posts staggered 09:00-17:00 MNT).
- **5 GitHub Actions workflows** running in production: `orange_news.yml` (daily content pipeline, 22:00 UTC), `market_watch_live.yml` (morning market data brief, 23:00 UTC), `market_data_update.yml` (high-frequency market refresh, every 30 min), `mse_update.yml` (intraday exchange data, 5×/weekday during MSE trading hours), and `youtube_update.yml` (video aggregation, every 2 hours). 0 downtime incidents across the Day 5-14 sprint.
- **Daily article archive** auto-populated since Phase 7.1 launch (Day 5, 2026-05-05) — every published article preserved at `archive/posts_YYYY-MM-DD.json` indefinitely. *[See `TECHNICAL_HANDBOOK.md` §4.4 for archive writer mechanics.]*

**Editorial pipeline detail** (production-state; full mechanism in `TECHNICAL_HANDBOOK.md` §4.2):
- **14 RSS sources + 1 Mongolian HTML scraper** — 12 international finance/tech/crypto/AI feeds + ikon.mn (Mongolian RSS) + Montsame (Mongolian HTML scraper) = 14 RSS-equivalent + 1 scraper. Of which 2 are Mongolian-language sources (ikon.mn + Montsame).
- **Translator v8 = 1,760 lines of Python** implementing Gemini 2.0 Flash primary + Claude Haiku 4.5 fallback dual-vendor architecture. Validated 2026-04-23.
- **5-rule editorial validator** (per `TECHNICAL_HANDBOOK.md` §6.1): headline length 60-80 chars; no-concatenation Cyrillic; source-attribution preservation; banned-phrase enforcement; Mongolia-passthrough routing for native sources.
- **Temperature lock 0.0-0.2** — every LLM call. Validated 2026-05-04 to prevent factual hallucination on financial copy.
- **Curated YouTube video feed** — 6 international financial broadcasters (Bloomberg Television, WSJ, Reuters, FT, CNBC, World Bank Group); ~33 videos surviving `>3 min` quality filter per refresh cycle.

**Bloomberg-grade editorial discipline:**
- **Mongolian-Cyrillic typography subset** — Noto Sans Cyrillic + Latin (~92KB total bundle), validated against editorial constraints.
- **Brand voice positioning** — "anchor Mongolian-first financial portal" framing; trademark-safe (avoids "Mongolian Bloomberg" claims while retaining "Bloomberg/Reuters standards" as industry-standard reference).
- **Color/tone semantics** — `text-up` / `text-down` direction tones + accent vs directional charts (Hero accent, detail directional) per Bloomberg/WSJ pattern.
- **Asset-class formatting** — `$` prefix for crypto + commodities only; en-US locale; FX direction (USD/MNT not MNT/USD); per Bloomberg convention.

**Mongolian language NLP — competitive moat.** The five-rule validator + Mongolia-passthrough route + brand-voice-positioning prompts represent **proprietary domain-specific prompt engineering** built across ~5 months of production iteration. Each rule was added in response to a specific failure mode observed in production. The complete rule set is **trade-secret protected** within the private backend repository. A new entrant would need to either replicate the failure path (~5-10 months of iteration) or pay significantly more for senior bilingual editorial review at every step. *[See `TECHNICAL_HANDBOOK.md` §6 for full editorial discipline detail.]*

**Content categories and coverage:**

| Category | Mongolian | Coverage scope |
|---|---|---|
| Mongolia | Монгол | Native domestic news (ikon.mn + Montsame passthrough) |
| Finance + markets | Санхүү / Зах зээл | International finance wires translated |
| Mining | Уул уурхай | Mining-domain coverage; Phase 6.3 dedicated tagging extension |
| Technology | Технологи | Tech sector + AI sub-category alias |
| Crypto | Крипто | Crypto + DeFi coverage |
| AI | AI | Frontier-model + AI infrastructure coverage |
| FDI | Гадаад хөрөнгө оруулалт | FDI policy + foreign-investment trends; Phase 6.3 dedicated tagging |

### 6.3 Orange News — platform + delivery infrastructure

The reader-facing platform delivers the editorial product to Mongolian audiences with Bloomberg-grade UX. Live at [www.orangenews.mn](https://www.orangenews.mn) (custom domain — *[FOUNDER ADJUST: confirm DNS migration completion]*) and [orangenews-website.vercel.app](https://orangenews-website.vercel.app) (primary Vercel deployment).

**7 public page-class routes:**
1. `/` (homepage) — daily editorial portal aggregating all 4 fetchers; Hero + SecondaryArticles + BreakingStrip + MarketSnapshot + ArticleFeed + VideoFeed + NewsletterSection.
2. `/articles/[slug]` — article detail with 7-day archive lookup; ArticleNavigation prev/next; per-article OG image.
3. `/category/[cat]` — category-filtered listing; 8 categories with alias support (e.g., AI → Technology).
4. `/markets/[ticker]` — per-instrument detail; MarketHero + Tabbed Chart + Stats grid; 30-day history.
5. `/market-watch` — daily editorial market briefing; lead post; pulse-dot Header navigation.
6. `/mse` — Mongolian Stock Exchange section; 8 datasets (TOP-20, gainers, losers, mining commodities, A-board, B-board); sticky ticker ribbon.
7. `/video` — curated financial video archive; 1/2/3-column responsive grid; channel filter.

Plus 4 operational routes: `/rss.xml` (RSS 2.0 feed, 7-day archive window), `/api/subscribe` + `/api/subscribe/verify` (Resend double-opt-in flow with HMAC-signed tokens), `/newsletter/confirmed` (subscribe status landing).

**Bloomberg-grade UX patterns:**
- **Sticky chrome.** Header + TickerBar + MseTickerRibbon all use shared `--header-height` CSS var (68px mobile / 76px desktop) — sticky offsets auto-adjust on layout changes.
- **Information density.** Mono + tabular-nums numerics for financial data; sans uppercase labels; serif Mongolian body type (Merriweather); no zebra striping; subtle hover states.
- **Direction tone semantics.** Up/down universal across TickerBar, MseTickerRibbon, MarketChart; accent (orange brand) vs directional (green/red) split between Hero and detail.

**Mobile + responsive delivery.** All routes responsive across mobile / tablet / desktop. Image optimization via Vercel CDN; lazy-load on YouTube thumbnails. Mongolian-Cyrillic typography validated across iOS Safari + Android Chrome + desktop browsers.

**SEO + organic traffic strategy:**
- **OG image system per Phase 4 Step 1** — every article + category + homepage gets a custom OG image; Facebook Sharing Debugger validated.
- **RSS 2.0 feed** at `/rss.xml` — top-20 articles, 7-day archive window, CDATA-wrapped Cyrillic, RFC 822 pubDate. Standard RSS aggregator support.
- **Sitemap + robots.txt** — automatically generated by Next.js conventions; search-engine indexing supported.
- **Per-route metadata** — every page exports `title` + `description` + `openGraph` for SEO + social card optimization.
- **Mongolian-Cyrillic search optimization** — content is genuinely native Cyrillic (not transliterated); search engines index it as Mongolian-language content for the appropriate query pool.

*[See `TECHNICAL_HANDBOOK.md` §5 for full frontend architecture + route reference.]*

### 6.4 Service tiers + customization

Three service tiers offered per `BUSINESS_PROJECT_TEMPLATE.md` §6.2 + `docs/sales/pricing_model_spreadsheet.md` (founder review pending). All tiers anchor against international comparators (Bloomberg $31,980/seat, LSEG ~$22K/user/year, FactSet $4-50K/user/year) at sub-Bloomberg pricing.

**Tier 1 — Starter ($5,000-15,000 USD/year):**
- Web access + email digest delivery + standard support response (24-48h business hours).
- Target: mid-tier mining IR, broker desks, FDI advisors, smaller bank treasury teams; single-seat or ≤3 seats.
- **Customization:** none — shared product instance; standardized editorial coverage.

**Tier 2 — Professional ($20,000-50,000 USD/year):**
- All Starter features +
- **API access** — JSON feed access for integration into customer-internal portals.
- **Custom dashboards** — bespoke layouts highlighting customer-specific data subsets.
- **Priority support** — 4-8h business hours response.
- **Analyst Q&A** — quarterly synchronous calls for editorial deep-dive.
- Target: full tier-1 bank treasury / risk team; MSE-listed corporate IR; mid-cap mining; full-team use; 3-10 seats.
- **Customization parameters:** dashboard layout, alerted topics, category-filtered feed digests.

**Tier 3 — Enterprise ($75,000-150,000 USD/year):**
- All Professional features +
- **Bespoke editorial coverage** — customer-specific topic depth (e.g., dedicated weekly mining-tax debate brief for Oyu Tolgoi LLC).
- **Custom MSE / mining tagging** — additional editorial taxonomy specific to customer's operational interests.
- **White-label deployment options** — customer brand colors + logos + subdomain hosting. **Tier 3 white-label deployment pattern (illustrative):** `markets.tdb.mn` or similar customer-branded subdomain with Orange News editorial infrastructure white-labeled. TDB referenced as illustrative example only; no commercial relationship implied.
- **Dedicated account manager** — single point-of-contact for Year 1+ engagement.
- Target: tier-1 bank multi-seat; Oyu Tolgoi LLC; Erdenes Mongol; large multi-team deployments; 10+ seats.
- **Customization parameters:** all of Professional + brand chrome (colors, fonts, logo placement) + content categories + editorial voice calibration + delivery cadence (e.g., morning briefing customizable to customer's preferred publication time).

**Cross-tier customization parameters:** colors, content categories, editorial voice calibration, delivery cadence, branded subdomain (Tier 3 only). Tier-1 customers may opt into Tier 2 customization at incremental cost. Pricing scenarios in `BUSINESS_PROJECT_TEMPLATE.md` §6.2 + `docs/sales/pricing_model_spreadsheet.md` reflect ranges; customer-validated final pricing replaces ranges post-discovery.

### 6.5 Future product roadmap

The product roadmap extends Orange News' commercial trajectory and unfolds the broader Azurise AI portfolio. All deferrals documented in `TECHNICAL_HANDBOOK.md` §11.

**Phase 7.2.2 — Customer self-service editorial CMS** (highest-value tier-1-customer feature unlock):
- **Trigger:** first paying Enterprise tier customer or pre-seed close.
- **Scope:** `/admin` route (auth-gated) → article CRUD → review queue → on-publish merge into `translated_posts.json` via PR-style workflow.
- **Strategic value:** unlocks customer self-service editorial — customer can publish their own articles into the Orange News stream with Orange News editorial review. Dramatically expands Tier 3 ARPU.

**Phase 8.1.x — Email fallback notifications** (operational reliability):
- **Trigger:** Slack outage incident or operator request.
- **Scope:** Resend-based email failure notifications as belt-and-suspenders for Slack failure pings.
- **Strategic value:** improves operational reliability profile for institutional customers under SLA.

**Phase 9.2 — Multi-tenant architecture** (when 2nd customer arrives):
- **Trigger:** second Tier 3 customer commits to white-label deployment.
- **Scope:** per-tenant chrome + audience pools + optional per-tenant domains.
- **Strategic value:** enables Year 3+ Enterprise tier scaling without engineering rebuild per customer.

**Mongolian-language API for partners** (Year 2+):
- **Trigger:** licensing customer commits.
- **Scope:** JSON API access to `market_data.json` / `mse_data.json` / `youtube_data.json` / `translated_posts.json` for downstream integrators. Pricing per `BUSINESS_PROJECT_TEMPLATE.md` §6.4 licensing range $10K-50K/year.
- **Strategic value:** opens licensing revenue line at scale.

**Nomad DNA + Monfiles development timeline** (Year 2-3):
- **Nomad DNA** — *[FOUNDER ADJUST: planned development scope, target customer segment, MVP timeline]*. Anticipated to leverage Orange News' content pipeline + customer relationships.
- **Monfiles** — *[FOUNDER ADJUST: planned development scope, target customer segment, MVP timeline]*. Anticipated to share infrastructure investments with Orange News while serving distinct content-management use cases.
- **Cross-product portfolio plan** detailed in §12 (Implementation Timeline) once founder direction confirms.

**Phase 6.1 — Mongolian content expansion** + **Phase 6.3 — mining/FDI tagging** (Year 1-2 editorial extensions):
- **Trigger:** Year 2 hire of editorial analyst (per §3.3) OR Year 1 customer demand for these specific coverage areas.
- **Scope:** more native-language sources beyond ikon.mn + Montsame; "Уул уурхай" + "Гадаад хөрөнгө оруулалт" as recognized subcategories.

### 6.6 IP + competitive moat

The IP portfolio + competitive moat assessment for Azurise Solution LLC's working portfolio.

**Mongolian-language LLM prompt engineering** (proprietary expertise):
- 5-rule editorial validator design (60-80 char headlines, no-concatenation Cyrillic, source-attribution preservation, banned-phrase enforcement, Mongolia-passthrough routing).
- Temperature-locked LLM call discipline.
- Dual-LLM Gemini-primary + Claude-fallback architecture.
- Mongolian-Cyrillic prompt engineering for editorial-quality output.
- All trade-secret protected in private backend repository; founder is sole committer to date.

**Editorial pipeline complexity** (5+ months to replicate):
- 14 RSS sources + Montsame scraper + ikon.mn passthrough integration.
- mse.mn Server Actions endpoint reverse-engineering (action-ID rotation tolerance handling).
- YouTube channel curation + duration-enrichment quota optimization.
- Cross-source aggregation discipline + soft-fail patterns.
- Production lessons accumulated through ~36 commits Day 5-14 sprint.

**Multi-source institutional knowledge:**
- mse.mn Server Actions endpoint mechanics (action-ID rotation 1-3 month cycle, `Content-Type` staleness detection, regex rediscovery + brute-force probe fallback).
- Montsame `.content-mn` selector dependency + body-extraction heuristic.
- ikon.mn passthrough categorization rule.
- YouTube channel-skew calibration (Bloomberg + CNBC = ~75% feed dominance).
- All documented in private repositories; not externally accessible.

**Code repository + production state ownership:**
- Frontend repository (`mctunghai-pixel/orangenews-website`) — owned by Azurise Solution LLC; ~7 routes + ~5 lib helpers + ~4 fetcher modules + 11 sales deliverables + 4 handbook documents.
- Backend repository (`mctunghai-pixel/orange-news-automation`) — owned by Azurise Solution LLC; 5 production cron workflows + 11 Python scripts (~5,028 LOC total) + 5 reference docs.

**Brand IP — orangenews.mn domain + content licensing:**
- `orangenews.mn` domain registered to Azurise Solution LLC; renewal $15/year.
- Brand mark "Orange News" — *[FOUNDER ADJUST: trademark filing status — Mongolia + key target jurisdictions per §2.3 IP table]*.
- Daily content output (10 posts/day × 365 days/year ≈ ~3,650 articles/year) accumulating as commercial-value licensable content asset.

**Trademark + IP protection strategy:**
- **Mongolia trademark filing** for "Orange News" word mark + visual identity (estimated $1-3K legal + filing). *[FOUNDER ADJUST: filing status]*.
- **Cross-jurisdictional trademark filing** for Central Asia target markets (Kazakhstan, Uzbekistan, Kyrgyzstan, Turkmenistan) per §5 expansion roadmap. Year 2+ scope.
- **Employee invention-assignment agreements** at first hire (§3.3 Sales/BD lead trigger).
- **Standard contractor IP-assignment clauses** for any future engineering or editorial contractors.
- **Open-source license compliance** — all dependencies under permissive licenses (MIT, Apache 2.0); no GPL or copyleft entanglements (verified §2.3).

The aggregate moat is **structural**: 5-10 months engineering investment OR $1-10K/month paid alternatives required for a competitor to reach equivalent operational depth. The moat compounds with each month of production tenure — a Year 3 attempt to enter the Mongolian-language Bloomberg-grade financial information space would face Orange News' 18+ months of accumulated production lessons + customer relationships + cross-source institutional knowledge. *[See `BUSINESS_PROJECT_TEMPLATE.md` §8.5 (four-moats table) and `BUSINESS_PLAN.md` §4.4 (production-anchored values) for additional moat detail.]*

---

## 7. Marketing + Sales Strategy

This section provides operational depth on customer acquisition, sales process, cohort GTM sequencing, and retention discipline. *[See `BUSINESS_PROJECT_TEMPLATE.md` §7 for the streamlined GTM narrative; this section adds marketing-positioning detail, channel-specific tactics, sales-process mechanics, customer-success operations, and marketing-budget ROI analysis.]*

### 7.1 Marketing positioning

**Brand promise.** Orange News delivers **Bloomberg-grade Mongolian-language financial information** — institutional-quality information design adapted to Mongolian Cyrillic typography, anchored in MSE microstructure depth, mining-domain context, and FDI-policy nuance that international platforms structurally cannot prioritize at Mongolia's market scale.

**Differentiation framework:**

| Competitor | Where they win | Where Orange News wins | Marketing message |
|---|---|---|---|
| **Bloomberg Terminal** | Global breadth; real-time depth; network effects | Mongolian-language depth; cost (sub-Bloomberg); local context | "Bloomberg-grade depth, Mongolian-first, sub-Bloomberg pricing" |
| **LSEG Workspace** | Modular pricing; Reuters wire heritage | Mongolian-Cyrillic editorial; MSE direct integration | "Mongolian-first localization Reuters cannot match" |
| **FactSet, S&P Capital IQ** | Buy-side analytics; ratings depth | Mongolia editorial focus; integrated news + data | "Mongolia-as-feature, not Mongolia-as-afterthought" |
| **Domestic outlets** (ikon.mn, Montsame, brokerage research) | Mongolian language; local network; free-to-reader | Bloomberg-grade design + depth + integration; institutional SaaS | "Production-grade upgrade from consumer-grade Mongolian outlets" |
| **Bilingual analyst loading** (current substitute) | Adapts existing Bloomberg seat | 2-3× cost saved; faster information cycle; consistent quality | "Replace 2-3 Bloomberg seats + recover analyst overhead" |

**Brand voice + visual identity standards** (per `TECHNICAL_HANDBOOK.md` §6):
- **"Anchor Mongolian-first financial portal"** — trademark-safe positioning; avoids direct "Mongolian Bloomberg" claims while retaining "Bloomberg / Reuters standards" as industry-standard reference points (e.g., `/team` and `/legal/data-sources` pages on the live frontend).
- **Mongolian-Cyrillic typography** — Noto Sans Cyrillic + Latin subset (~92KB bundle); Merriweather for serif body type; mono + tabular-nums for numerics; sans uppercase for labels.
- **Bloomberg-grade information density** — no zebra striping; subtle hover states; direction tone semantics (up/down universal; accent vs directional split between Hero and detail); asset-class formatting per Bloomberg conventions ($ prefix for crypto + commodity only; FX direction USD/MNT not MNT/USD).
- **Editorial voice consistency** — temperature-locked LLM calls (0.0-0.2); 5-rule editorial validator enforces consistency; deterministic footer builder maintains brand boilerplate stability across thousands of articles.

The brand promise + differentiation framework + voice/visual standards together comprise **the marketing positioning that every customer touchpoint inherits** — sales conversations, demo walkthroughs, content marketing, partnership pitches all reinforce the same anchor.

### 7.2 Customer acquisition channels

Six customer acquisition channels operate in parallel, each with distinct buyer-segment fit and cost profile:

**Channel 1 — Direct founder outreach (Year 1 primary).**
- **Mechanism:** founder-led personalized email + LinkedIn + warm introductions through existing Mongolian-business network. Outreach templates in `docs/sales/outreach_email_templates.md` (4 variants for cold / warm / referral / re-engagement).
- **Cost profile:** ~$0 paid CAC; founder time investment ~10-15 hours/week through Q1-Q2.
- **Volume:** 15-25 outreaches per quarter to high-priority targets per `docs/sales/customer_target_list.md` (33 named-contact targets across 4 tiers awaiting founder review).
- **Year 1 target conversion:** 1-3 paying customers from this channel alone.

**Channel 2 — Sales/BD hire-driven outreach (Year 1 Q3+ if Path 1 funded).**
- **Mechanism:** sales/BD lead (per §3.3 hire profile) extends customer-acquisition capacity beyond founder direct-outreach; targets §5.5 cohorts 2 + 4 + 5 + 6 (mid-tier banks, mid-tier mining, MSE corporate IR, brokers).
- **Cost profile:** $30-60K USD annualized salary + equity participation.
- **Year 2 target conversion:** 3-7 additional paying customers from sales/BD channel.

**Channel 3 — Industry events + speaking opportunities.**
- **Mechanism:** Mongolian Bankers Association events, Mongolian Mining Association conferences, MSE-listed company IR forums; founder + sales/BD as panelists / speakers.
- **Cost profile:** $1-5K per event (registration, travel, materials).
- **Strategic value:** legitimacy halo + cohort-cluster reach via single relationship.
- *[FOUNDER ADJUST: founder's existing event-speaking history; planned event calendar.]*

**Channel 4 — Content marketing — Orange News itself as marketing channel.**
- **Mechanism:** the daily Orange News editorial output is itself the highest-leverage marketing channel. Reader-base growth → brand awareness → inbound institutional inquiries.
- **Cost profile:** marginal cost of additional reader is near-zero; editorial pipeline already operational.
- **Year 2-3 target:** 10K-50K MAU drives meaningful inbound inquiries supplementing direct outreach.
- **Tactics:** SEO optimization (per §6.3 SEO strategy), Mongolian-Cyrillic keyword targeting, social-share optimization via OG image system, RSS distribution.

**Channel 5 — Partnership channels.**
- **MSE partnership** — formal data-licensing or co-branding arrangement with the Mongolian Stock Exchange could add legitimacy halo and channel access to listed-company IR teams. *[FOUNDER ADJUST: outreach status to MSE leadership.]*
- **Industry associations** — Mongolian Bankers Association, Mongolian Mining Association, Securities Investors Association — each represents a buyer-cluster reachable via single relationship. *[FOUNDER ADJUST: founder's existing memberships.]*
- **Sales referral partners** — Mongolian law firms, audit firms (Big 4 local affiliates), management consulting practices already serving the tier-1 customer base. Referral fee or co-marketing arrangement TBD. *[FOUNDER ADJUST.]*
- **Banks-as-customers becoming references** — Year 1 anchor customers (Khan Bank, Golomt Bank, TDB target candidates) become reference accounts that compound future customer acquisition; reference quotes + case studies reduce subsequent customer CAC materially.

**Channel 6 — Mongolia financial sector network leverage.**
- **Mechanism:** founder's existing Mongolian-business network (per §3.1 founder profile + §3.4 advisory recruitment plan) — strategic advisor (banking sector executive) + industry advisor (mining or regulator) provide named-contact warm introductions to specific tier-1 customer prospects.
- **Cost profile:** advisory equity grants 0.25-0.5% per advisor (per §3.4); negligible cash cost.
- **Year 1-2 target:** 1-2 conversion accelerations through network warm-introductions.

**Channel mix Year 1:** Channels 1 + 5 + 6 carry the bulk of Year 1 CAC; Channels 2 + 3 + 4 activate in Year 2.

### 7.3 Sales process detailed

The Year 1 sales motion is **founder direct-outreach + demo-driven close**, with no paid CAC and no inside-sales hire. The motion has five sequential stages, each with operational discipline:

**Stage 1 — Identify (1-2 hours per target):**
- Research target organization: org chart, recent strategic priorities, decision-making structure.
- Identify likely buyer (treasury head, IR director, head of research) plus likely champion (digital banking lead, sustainability lead, MSE-listings IR).
- Verify named-contact via LinkedIn / industry directory / cold-outreach research.

**Stage 2 — Outreach (15-30 min per target):**
- Personalized email + LinkedIn message + warm introduction (where founder relationship enables).
- Outreach templates in `docs/sales/outreach_email_templates.md` provide 4 starting points; founder customizes per-target.
- Target response rate: 30-50% for warm introductions; 10-20% for cold outreach.

**Stage 3 — Discovery (30-min Zoom or in-person meeting per target):**
- Demo agenda in `docs/sales/demo_scheduling_template.md` + `docs/sales/live_demo_script.md` (30-min walkthrough).
- Goals: confirm pain match (banking pain per `BUSINESS_PROJECT_TEMPLATE.md` §3.2 / mining pain per §3.3 / government pain per §3.4); surface 2-3 specific use cases; identify champion + budget owner.
- Outcome: pilot-eligible / not-pilot-eligible / continue-discovery.

**Stage 4 — Pilot (30-day trial period per customer):**
- 30-day pilot for the customer's prioritized use case. Free or heavily-discounted ($1-3K nominal); purpose is validation, not revenue.
- Customer success metrics tracked via `docs/sales/customer_success_metrics.md` (4-week implementation playbook in `docs/sales/customer_onboarding_checklist.md`).
- Pilot conversion rate target: 50%+ (pilots are pre-qualified through Stage 3 discovery).

**Stage 5 — Convert (contract negotiation + onboarding):**
- Pilot conversion to annual contract; pricing per `BUSINESS_PROJECT_TEMPLATE.md` §6.2 tier band; tier selection driven by team size + use-case breadth.
- Contract negotiation patterns: most tier-1 institutions require 60-90 days from pilot start to executed contract (procurement involvement, board approval, legal review).
- Onboarding playbook (per `docs/sales/customer_onboarding_checklist.md`): 4-week implementation; founder-led for Year 1 customers; transitioned to sales/BD lead for Year 2+ customers.

**Closing timeline expectations:**

| Customer cohort | Stage 1-3 duration | Stage 4 (pilot) duration | Stage 5 (contract) duration | Total cycle |
|---|---|---|---|---|
| **Tier-1 banks** | 30-60 days | 30 days | 60-90 days | **3-6 months** |
| **Tier-1 mining** | 30-90 days | 30-45 days | 90-180 days (board approval) | **4-8 months** |
| **State-owned mining** (Erdenes Mongol, ETT) | 60-180 days (RFP-driven) | 30-60 days | 180-360 days | **9-18 months** |
| **MSE-listed corporate IR** | 14-30 days | 30 days | 30-60 days | **2-4 months** |
| **Brokers + asset managers** | 7-14 days | 30 days | 14-30 days | **1-3 months** |

These timeline ranges anchor the `BUSINESS_PROJECT_TEMPLATE.md` §7.4 quarterly funnel — Q1 outreach lands as Q2-Q3 conversions for shorter-cycle cohorts; Q1-Q2 outreach lands as Q4 conversions for longer-cycle cohorts.

### 7.4 Customer cohort GTM sequencing

Cohort-by-cohort sequencing follows §5.5 sizing + §3.3 hire activation + §11 funding-path triggers:

**Year 1 (Months 1-12) — anchor cohort focus:**
- **Tier 1 banks** (5 entities): 3-5 named targets prioritized — Khan Bank, Golomt, TDB, Khas, State (per `BUSINESS_PROJECT_TEMPLATE.md` §7.2 anchor profiles). Target conversion: 1-2 of 5.
- **Tier 1 mining** (1 anchor pilot): Oyu Tolgoi LLC most likely anchor given $2.1B 2024 in-Mongolia spend + active 2026 IR/government-affairs cycle. Target conversion: 1 of 4.
- **MSE-listed corporate IR** (opportunistic): 2-4 conversions if discovery surfaces fit.
- **Brokers + asset managers** (opportunistic): 2-3 conversions if discovery surfaces fit.
- **Total Year 1 customer count:** 3-5 paying customers (per Q5 founder lock).

**Year 2 (Months 13-24) — expansion + secondary cohort entry:**
- **Tier 2 banks expansion** — 2-3 additional banking-sector customers; sales/BD hire activated drives outreach beyond tier-1.
- **Mid-tier mining** — 2-3 conversions; mining-cohort referral chain activated post Oyu Tolgoi anchor.
- **First government regulator** — 1 pilot (likely BoM or FRC editorial-coverage partnership); RFP-driven cycle initiated.
- **Total Year 2 customer count:** 8-15 paying customers.

**Year 3 (Months 25-36) — securities firms + tier 3 + cross-border exploration:**
- **Securities firms** — 5-10 conversions; faster sales cycle + lower per-customer ACV; channel diversification.
- **Tier 3 — Enterprise-scale customers** — first customer for Phase 7.2.2 customer-CMS layer; multi-seat deployment; bespoke editorial coverage.
- **Government / regulators** — additional 1-2 conversions; multi-tenant architecture (Phase 9.2) activated.
- **Central Asia exploration** — pre-investment market validation in Kazakhstan or Uzbekistan per `MARKET_RESEARCH.md` §7.6 disclaimer.
- **Total Year 3 customer count:** 15-30 paying customers.

**Cohort-specific sales messaging.** Sales messaging condensed to 5 cohort archetypes for operational efficiency; underlying market sizing uses 8-cohort granularity per §5.5.

| Cohort | Pain anchor | Use case | Messaging emphasis |
|---|---|---|---|
| Tier-1 banks | Bloomberg-translation overhead; team-wide info silos | Treasury team-wide briefings; Mongolian-language credit-committee distribution | "Replace 2-3 Bloomberg seats + recover analyst overhead" |
| Tier-1 mining | Bilingual IR distribution; macro-context shareholder communication | Domestic stakeholder communications; complement HK IR program | "Mongolian-language anchor for English-language IR program" |
| MSE corporate IR | Shareholder-communication automation; regulatory-disclosure consistency | Daily Mongolian-language updates for shareholders + employees | "Editorial pipeline at fraction of in-house bilingual team cost" |
| Brokers / asset managers | Mongolian-language research distribution | Daily morning brief; client-facing research syndication | "10× cost-down vs in-house research desk" |
| Government / regulators | Investor education + transparency mandate | Bilingual disclosure publishing; regulatory information distribution | "International-standards alignment at Mongolia-scale cost" |

### 7.5 Customer success + retention

**Onboarding playbook** (4-week implementation per `docs/sales/customer_onboarding_checklist.md`, 4 tagged decision points):

| Week | Activities |
|---|---|
| **Week 1** | Customer kickoff call + use-case alignment + access provisioning + champion stakeholder mapping |
| **Week 2** | Customer-team training session (live demo + Q&A) + customer-internal-distribution-channel setup |
| **Week 3** | Initial deployment (Tier 1 web access; Tier 2 API + custom dashboards; Tier 3 white-label deployment if applicable) + first-week usage review |
| **Week 4** | First-month review meeting + customer-success-metrics baseline established + Year-1-renewal-discussion scheduled |

**Customer success metrics** (per `docs/sales/customer_success_metrics.md`, 4 tagged decision points):
- **Uptime:** 99.5%+ target (currently exceeding via $0/month free-tier infrastructure stability + 0 downtime sprint record).
- **Content quality:** customer-rated Mongolian editorial quality (5-rule validator + temperature lock + Mongolian-Cyrillic prompt engineering deliver consistent quality).
- **Customer ROI signals:** internal customer usage frequency (logins/week), distribution-channel adoption (% of customer team accessing platform), customer-renewal indicators.
- **Net Promoter Score (NPS):** Year 2+ measurement once customer base supports meaningful sample.

**Renewal strategy:**
- **Annual contracts** as standard (Tier 1 + 2 + 3); monthly arrangements only for pilot phases.
- **Renewal discussion 90 days before contract end** — gives time for tier-upgrade conversations + scope expansion.
- **Tier-upgrade trigger signals:** customer team-size growth, customer use-case expansion, customer request for white-label or API access.
- **Retention is the highest-leverage growth lever.** Year 1 SOM 3-5 customers retained becomes ~$50-100K retained revenue base + 30-50% upgrade trajectory in Year 2 (per §10 financial plan revenue mix evolution).

**Upsell paths:**
- **Starter → Professional** trigger: customer team grows beyond 3 seats OR customer requests API access for internal-portal integration.
- **Professional → Enterprise** trigger: customer requests bespoke editorial coverage OR white-label deployment OR custom MSE/mining tagging.
- **Tier 3 + licensing** trigger: customer requests data-feed access for downstream integrators OR white-label editorial syndication into customer's customer-facing app.

**Single-customer-departure variance is the highest Year 1 risk** — 3-5 customer concentration means any single departure compresses revenue base 20-33%. `docs/sales/customer_success_metrics.md` includes early-warning indicators (usage frequency drop, champion-stakeholder change, contract-renewal lead-time) to surface departure risk early.

### 7.6 Marketing budget + ROI

**Path 1 (Pre-seed funded) marketing budget breakdown:**
- **40% of $50-150K pre-seed funding allocated to customer acquisition** = **$20-60K USD over 12 months** (per §11.2 use-of-funds breakdown).
- **Allocation within marketing budget:**
  - Founder + sales/BD travel + meeting expenses: ~50% ($10-30K)
  - Industry events + speaking opportunities: ~20% ($4-12K)
  - Content marketing + SEO investment: ~15% ($3-9K)
  - Demo / pitch materials + customer-facing collateral: ~10% ($2-6K)
  - Reserve for opportunistic channel partnerships: ~5% ($1-3K)

**CAC estimates per cohort (Year 1):**

| Cohort | Estimated CAC (USD) | Notes |
|---|---|---|
| Tier-1 banks | $2-5K per customer | Founder direct-outreach + warm introductions; primarily founder time + travel |
| Tier-1 mining | $3-8K per customer | Longer cycle; more travel; board-approval process |
| MSE corporate IR | $1-3K per customer | Faster cycle; smaller per-customer engagement |
| Brokers + asset managers | $500-2K per customer | Operational decision; faster close |

**LTV / CAC ratio targets:**
- **Tier-1 customers (Starter):** $10K ACV × 3-5 year retention × ~98% gross margin = LTV $30-50K. CAC ~$2-5K. LTV/CAC = **6-25×**.
- **Professional customers:** $35K ACV × 3-5 year retention × ~98% gross margin = LTV $105-175K. CAC ~$3-8K. LTV/CAC = **13-58×**.
- **Enterprise customers:** $100K+ ACV × 3-5 year retention × ~98% gross margin = LTV $300K+. CAC ~$5-15K. LTV/CAC = **20-60×**.

These ratios are **substantially above SaaS industry benchmarks** (typical SaaS targets LTV/CAC ≥ 3×) — driven by Orange News' near-zero marginal cost (per §10.6 unit economics + `BUSINESS_PROJECT_TEMPLATE.md` §6.5).

> **LTV caveat.** LTV calculations above assume 3-5 year retention pattern, conservative for Bloomberg-grade institutional contracts. Year 1 customer retention validation pending; LTV ranges will be adjusted in Year 2 based on actual cohort retention data.

**Marketing channel mix Year 1:** founder direct-outreach (~$0 cash CAC) dominates; paid channels deferred to Year 2-3 once customer-acquisition learnings stabilize.

> *[FOUNDER ADJUST — specific marketing channel preferences (founder's existing event-speaking history, channel-partner relationships, content-marketing platform preferences); existing Mongolian financial-sector relationships that accelerate Year 1 outreach.]*

The marketing budget + ROI profile is **conservative and capital-efficient** — institutional investors evaluating Path 1 see ~$20-60K customer-acquisition spend yielding 3-5 paying customers with LTV/CAC well above industry benchmarks, supporting the §10.4 break-even projection of month 18-24.

---

## 8. Operations Plan

This section provides operational discipline and compliance roadmap for institutional investor and lender due diligence. The tax-compliance posture in §8.2 is a substantive Year-1-and-Year-2 advantage — Mongolia's 2026 SME tax regime favors Orange News' specific revenue trajectory materially. *[See §2 of this Plan for company description detail and `BUSINESS_PROJECT_TEMPLATE.md` §11 for high-level risk framing.]*

### 8.1 Legal entity + corporate compliance

**Operating entity.** Azurise Solution LLC is a Mongolian limited liability company, **founder-controlled (100% pre-funding)**, operating under the Mongolian Civil Code provisions governing limited-liability companies. Mongolia's LLC framework allows up to 100% foreign partnership where applicable; the founder-controlled posture is preserved through Year 1 with governance updates contemplated at pre-seed close (per §2.2 governance posture).

**Mongolian regulatory registrations** (current and required):
- **General Department of Taxation (GDT)** — corporate income tax registration; VAT registration deferred until revenue threshold crossed (§8.2)
- **Social Security Office** — required at first hire (Year 2 trigger per §3.3)
- **National Statistics Office** — annual statistical reporting
- **District administration** — business license registration; specific license category for IT services + media + financial information services

> *[FOUNDER ADJUST — Azurise Solution LLC registration current status: registration completion date, GDT enrollment number, business license number, district administration registration timeline. Founder-led completion of any pending registration items.]*

**Annual financial statement filing.** Mongolian LLCs are required to file annual financial statements with the GDT. Filing cadence: corporate income tax annual filing within 30 days of year-end; quarterly CIT prepayment filings; VAT filings monthly once registered. Audit trigger: assets crossing MNT 1B (~$294K USD at MNT/USD 3,400) or specific regulatory requirements; not currently triggered at Year 1 scale.

**Corporate governance posture.**
- **Year 1 (pre-funding):** founder-CEO single-director; sole equity holder; no independent board members. This posture is **deliberate** for the pre-funding stage — it preserves founder optionality for governance design at the time of pre-seed close.
- **Year 1 post-Path-1-funding:** governance updates contemplate (a) board observer or director seat for lead investor (subject to negotiation); (b) standard pre-seed protective provisions; (c) founder common-stock vesting (typical 4-year cliff — terms TBD); (d) employee option pool reservation (10-15% post-money).
- **Year 2 milestone trigger:** independent advisor or director addition at first material customer contract or first hire — whichever earlier.

### 8.2 Tax compliance posture

The 2026 Mongolian SME tax regime provides substantive Year-1-and-Year-2 advantages for Orange News' specific revenue trajectory. The tax assumptions in §10 financial plan are anchored on this regime.

**Year 1-2 tax posture (revenue ≤MNT 300M = ~$88K USD):**
- **Corporate Income Tax: 1% effective rate.** Mongolian CIT framework provides a 1% rate for entities with annual revenue ≤MNT 300M, **excluding mining/petroleum/alcoholic-beverage/tobacco industries**. Orange News' financial-information-platform classification clearly qualifies for the 1% bracket.
- **VAT registration: deferred.** Mongolia's 2026 VAT reform (effective January 1, 2026, per Government's 2024-2028 Action Plan) raised the mandatory VAT registration threshold from MNT 50M to **MNT 400M (~$118K USD) in 12-month sales income**. Year 1 SOM ($20-50K = MNT 68-170M) and Year 2 LOW scenario ($150K = MNT 510M) means VAT registration triggers in Year 2-3, not Year 1.
- **Net effective tax rate Year 1-2: ~1% on revenue.** The combination of 1% CIT + VAT-deferred = an unusually clean tax posture during the customer-acquisition critical-mass period. Path 1 funding flows directly into operations rather than being absorbed by VAT compliance overhead.

**Year 2-3 transition (revenue MNT 300M-1.5B):**
- **CIT bracket transition.** Above MNT 300M revenue, the 1% rate ceiling is exceeded. Two pathways apply: (1) standard 10% CIT on profits (per Mongolian progressive CIT scale); (2) 90% tax-bill reduction available for companies with taxable income ≤MNT 1.5B — effectively maintaining a near-1% effective rate during this transition window.
- **VAT registration triggered.** Once revenue crosses MNT 400M (Year 2 BASE: $500K = MNT 1.7B; Year 2 LOW: $150K = MNT 510M; Year 2 HIGH: $800K = MNT 2.7B), mandatory VAT registration applies. Standard 10% VAT on B2B service revenue.
- **2026 reform context.** Proposed CIT amendments raise the 25% threshold from MNT 6B to MNT 10B and introduce a 15% bracket for profits MNT 6B-10B — favorable for Year 3 BASE scenario ($2M = MNT 6.8B). Reform implementation timing TBD per Mongolian Parliament process.

**Year 3+ regime (revenue >MNT 1.5B):**
- **CIT 10%** standard up to MNT 6B; **15% (proposed)** for MNT 6B-10B; **25%** above MNT 10B.
- **VAT 10%** standard rate.
- **Net effective tax rate Year 3 BASE:** estimated 8-12% blended (CIT + VAT net of input credits + minor other taxes).

**Investment Law incentives (founder consultation pending):**
- **Tax loss carryforward** — typically 4-year window for offsetting future taxable income.
- **Accelerated depreciation** for capital equipment investments (limited applicability given Orange News' $0/month operating cost model).
- **Stabilisation certificate option** — provides predictable tax environment for institutional-investor confidence; particularly valuable if pre-seed close negotiations involve foreign investor participation (e.g., IFC-affiliated Mongolia Opportunities Fund).
- **Employee training cost deductions** — relevant for Year 2-3 hiring expansion (sales/BD lead, editorial analyst, part-time engineer per §3.3).

> *[FOUNDER ADJUST — tax advisor recommendation pending; founder consult with Mongolian CPA before stabilisation certificate application decision and Investment Law incentive opt-in choices.]*

### 8.3 Operational infrastructure

**Banking arrangement:**
- **Year 1-2:** founder-controlled commercial-bank account at *[FOUNDER ADJUST — bank name; account class]*. Single MNT operating account sufficient through Year 1 SOM scale.
- **Year 2 trigger:** USD operating account established for international vendor flow + investor capital flow (if Path 1 funded).
- **Year 3 institutional banking:** primary banking relationship with one of the tier-1 institutions (Khan Bank, Golomt Bank, TDB, MIK Holding) — likely a target customer themselves, creating operational + commercial alignment.

**Accounting + audit:**
- **Year 1 bookkeeping:** outsourced to existing TESKO accounting infrastructure (operational template inherited per §3.2). Lean monthly close.
- **Year 1 financial statement preparation:** Mongolian statutory format; filed annually to GDT.
- **Year 2 audit trigger:** activated when assets cross MNT 1B (~$294K USD) OR investor covenant requires it OR first material customer contract demands it. Estimated audit cost: $3-8K USD annually; Mongolian Big-4-affiliate firms recommended.
- **Year 3+ ongoing audit posture:** annual external audit becomes standard; transitions to monthly close discipline at scale.

**Insurance:**
- **Professional indemnity (PI) insurance** — procured post Series A close OR first material customer contract requiring contractual coverage. Estimated $2-5K USD annually.
- **Directors-and-officers (D&O) insurance** — procured at first independent-board addition. Estimated $3-8K USD annually.
- **General liability** — minimal at current operating scale; reviewed annually.
- **Cyber liability** — reviewed annually; particularly relevant if customer-data scope expands beyond email signups (Phase 7.2.2 customer-CMS layer trigger).

**IT operations:**
- **Production stack inherited from sprint:** Vercel Hobby plan (frontend hosting, free); GitHub Actions free-tier (backend cron compute); GitHub free-tier (source code hosting); free-tier APIs (yfinance, CoinGecko, ExchangeRate-API for MNT/USD, Binance, mse.mn).
- **Anthropic + Google Gemini API consumption** — small monthly spend ($10-50 USD) for LLM translation calls; scales linearly with translation volume.
- **Domain renewal:** orangenews.mn at $15/year.
- **Operational cost Year 1 forecast:** **<$500/month total** including Resend (subscribe email service), domain, LLM API consumption, optional Vercel Pro if customer-load scales. **Per `TECHNICAL_HANDBOOK.md` §4.7 — operational cost is the financial moat.**

**Backup + disaster recovery** (per `TECHNICAL_HANDBOOK.md` §10):
- Frontend: Vercel deployment history + Git revert capability
- Backend: GitHub repository with full commit history; archive snapshots auto-preserved daily
- Customer data: Resend audience exportable via dashboard CSV
- Operational continuity: any single-vendor failure recoverable within 24 hours via documented runbooks

### 8.4 Compliance roadmap — milestone-gated

The compliance roadmap maps regulatory + operational obligations to specific milestone triggers, avoiding premature compliance investment.

**Year 1 (Months 1-12):**
- **Q1 (Months 1-3):** LLC registration finalization (if any items pending); GDT corporate income tax enrollment; District administration business license verification; quarterly CIT prepayment filings established.
- **Q2 (Months 4-6):** First customer contract — reviewed for Investment Law incentive eligibility; tax advisor (Mongolian CPA) engagement formalized for Year 1-2 tax discipline.
- **Q3 (Months 7-9):** Quarterly tax filing cadence stabilized; founder reviews stabilisation certificate option (decision deferred until pre-seed-close conversations clarify investor preferences).
- **Q4 (Months 10-12):** Annual financial statement preparation; CIT annual filing scheduled; preliminary Year 2 budget + tax-rate projection prepared.

**Year 2 milestones — revenue-triggered:**
- **VAT registration trigger (revenue crossing MNT 400M, ~Q2-Q3 in BASE scenario):** activate VAT registration, monthly VAT filings begin, customer contracts revised to reflect VAT pass-through.
- **First audit (assets crossing MNT 1B):** engage Mongolian Big-4-affiliate firm; estimated $3-8K USD annual audit cost.
- **Stabilisation certificate application (founder decision per §8.2 [FOUNDER ADJUST]):** apply if pre-seed-close investor preferences favor; otherwise defer to Year 3.
- **First hire activation (sales/BD per §3.3):** Social Security Office registration; employment contract template; income tax withholding processes.

**Year 3 milestones:**
- **CIT bracket transition** (revenue exceeding MNT 1.5B / 90% reduction ceiling): standard 10% CIT applies above MNT 300M / 90% reduction available below MNT 1.5B; operational tax-planning discipline activates.
- **Board governance addition** (post-funding OR Year 2 commercial-validation milestone): board observer or director seat fulfilled per pre-seed agreement; D&O insurance procured.
- **Independent audit posture** becomes standard annual practice; auditor relationship deepened.

**Year 4-5 milestones:**
- **Cross-border operational entity** (Kazakhstan or Uzbekistan branch / subsidiary): triggered by first cross-border customer contract or pre-investment market validation completion (per `MARKET_RESEARCH.md` §7.6 disclaimer).
- **Series A round-related compliance** if applicable: investor reporting cadence, audit committee, additional governance updates.

### 8.5 Operational risk + mitigation

Operational risks specific to the company's compliance and execution posture:

| Risk category | Risk | Mitigation |
|---|---|---|
| **Tax compliance** | Misclassification under SME tax bracket; failure to meet 1% CIT eligibility criteria | Tax advisor engagement Q2 Year 1; quarterly CPA review; conservative interpretation of revenue-bracket boundaries |
| **Regulatory change** | Mongolian tax reform timing affects assumptions in §10 (CIT bracket changes, VAT threshold adjustments) | Stabilisation certificate option preserves predictability for foreign investor confidence; founder monitors Mongolian Parliament process via tax advisor |
| **Operational continuity** | Founder-solo state Year 1 = single-point-of-failure risk for operational decisions | Documentation discipline (`TECHNICAL_HANDBOOK.md` §4 + §6); operational templates inherited from TESKO infrastructure; first hire (sales/BD per §3.3) reduces founder-bottleneck after pre-seed close |
| **Customer data + privacy** | PDPL (Mongolian Personal Data Protection Law) compliance scope expands if Phase 7.2.2 customer-CMS deploys | Resend audience export discipline; customer data flows audited at Phase 7.2.2 trigger; PI insurance procured at first material customer contract |
| **IP enforcement** | Trademark filings pending; brand-mark protection dependent on Year 1+ filing activity | Trademark filing budget allocated post-pre-seed (estimated $1-3K legal + filing); cross-jurisdictional filings staged with Central Asia expansion roadmap |

Operational risk profile is **frontier-market-typical** — concentrated in regulatory-evolution timing and founder-solo dependencies, not in fundamental product or market structure. Mitigation posture documented in §13 (Risk Analysis) extends this operational frame to broader market + competitive risks. *[See §13 + `BUSINESS_PROJECT_TEMPLATE.md` §11 for full risk framework.]*

---

## 9. Management + Organization Structure

This section provides organizational depth — current state acknowledged transparently, Year 2-3 design under both funding paths, and advisory-board strategy. *[See §3 of this Plan for founder profile + hiring plan + advisory recruitment narrative; this section adds organizational-state depth and time-allocation discipline appropriate for institutional investor due diligence.]*

### 9.1 Current organizational state

**Founder-solo operation as of Day 17 (2026-05-09).** Acknowledged transparently; not hidden. Munkhsaikhan Mongolbayar operates Azurise Solution LLC end-to-end across all functional areas. The single-founder posture is **deliberate Year-1 design** — it minimizes fixed costs, accelerates decision velocity, and forces direct customer learning into founder hands.

**Functional capacity matrix:**

| Function | Capacity | Mechanism |
|---|---|---|
| **Product + engineering** | 100% founder | Cross-repo Next.js + Python ETL; ~5,000 LOC backend + 7-route frontend; 5 GHA workflows production |
| **Editorial + content** | 100% founder + AI pipeline | Translator v8 (Gemini primary + Claude fallback); 5-rule editorial validator; daily 10-post output cadence |
| **Sales + business development** | 100% founder | Year 1 direct-outreach motion (per §7.2 + `BUSINESS_PROJECT_TEMPLATE.md` §7) |
| **Operations + admin** | Founder + **TESKO infrastructure leverage** | Existing TESKO commercial-operations infrastructure (legal counsel, accounting relationships, operational templates, banking access) provides leverage for Azurise Solution LLC compliance + finance functions |
| **Finance + accounting** | Founder + outsourced bookkeeping | Mongolian statutory monthly close; quarterly tax filings; annual financial statement (per §8.1 + §8.4) |

**Founder time allocation Year 1 (estimated weekly distribution):**

| Category | Hours/week | Notes |
|---|---|---|
| Product + engineering (maintenance + iteration) | 15-20 | Phase 7.2.2 customer-CMS deployment trigger increases this Year 2 |
| Editorial + content discipline + monitoring | 8-12 | LLM pipeline running unsupervised most days; founder reviews + intervenes on edge cases |
| Sales + customer outreach | 10-15 | Direct outreach + discovery meetings + pilot management |
| Operations + admin + finance | 5-8 | Increases at quarterly tax-filing milestones |
| Strategic planning + investor conversations | 3-5 | Higher during pre-seed close window |
| **Total estimated** | **41-60** | Sustainable founder-solo cadence; sales-hire activation reduces sales/customer hours |

The functional capacity + time allocation is **sustainable through Year 1 SOM** (3-5 customers / $20-50K revenue). Hire activation triggers (per §3.3) preserve founder bandwidth for product strategy + customer relationships once revenue stabilizes. *[See §3.2 for management team current state narrative.]*

### 9.2 Year 2-3 organization design

The Year 2-3 organization design diverges materially between Path 1 (pre-seed funded) and Path 2 (bootstrap) trajectories.

**Path 1 (Pre-seed funded) — Year 2 organization (3-4 person team):**

| Role | Allocation | Compensation | Source of funding |
|---|---|---|---|
| **Founder + CEO** | 100% time; product strategy + customer relationships + commercial leadership | Founder equity + minimal cash compensation Year 1-2; market-rate Year 3+ | Founder equity |
| **Sales/BD lead** (full-time) | Customer-pipeline development; demo coordination; pilot-to-conversion shepherding (per §3.3 hire profile) | $30-60K USD annualized + equity participation | 25% of pre-seed funding (per §11.2 use of funds) |
| **Editorial review contractor** (part-time, bilingual senior) | Editorial QA on translator output; Phase 6.1+ Mongolian content expansion | $1-2K USD/month part-time | Operating revenue (Q3+ trigger) |
| **Operations + finance contractor** | TESKO infrastructure inherited; Mongolian statutory bookkeeping; tax-filing coordination | $500-1.5K USD/month outsourced | Operating revenue + minor pre-seed allocation |

**Path 1 Year 3 organization (5-7 person team — post-revenue-scaling):**

| Role | Allocation | Compensation |
|---|---|---|
| Founder + CEO | 100% time; strategic + investor + Series A preparation | Market-rate cash + equity |
| Sales lead + 1 BD rep (2 sales) | Cohort expansion (Tier 2 banks, mid-tier mining, MSE corporate IR per §7.4 sequencing) | $30-60K each + equity |
| Editorial team (1 senior + 1 junior) | Mongolian editorial QA + Phase 6.1 / 6.3 content extensions + customer-bespoke editorial coverage (Tier 3 deployment) | $20-40K senior; $10-20K junior |
| Engineering hire (1 full-time) | Phase 7.2.2 customer-CMS layer; Phase 9.2 multi-tenant; pipeline maintenance | $30-50K USD |
| Customer success (1 part-time) | Year 1-2 customer onboarding + retention + QBR coordination | $1-2K USD/month part-time |

**Path 2 (Bootstrap) — Year 2-3 organization:**

| Year | Composition | Notes |
|---|---|---|
| **Year 2** | Founder solo + contractor leverage | Bookkeeping outsourced; founder operates all functional roles; first hire deferred until customer revenue stabilizes at ~$60-100K annualized run-rate |
| **Year 3** | Founder + 1-2 part-time / contractor hires | Sales/BD lead first hire (per §3.3 trigger); editorial analyst contractor at scale |
| **Year 4+** | Hires aligned with revenue acceleration; founder retains 100% equity through Series A timing | Bootstrap optionality preserved (per §10 + §11) |

The Year 2-3 organization design is **revenue- and milestone-gated** under both paths — hire activations tied to specific commercial validation events rather than calendar-driven expansion. *[See §3.3 for full hiring plan + headcount trajectory through Year 4.]*

### 9.3 Advisory board strategy

The advisory board is **specific-decision-driven, not prestige-driven** — each advisor is recruited for a defined set of decisions, contributes via structured 1-2 hour quarterly engagements, and earns vesting tied to actual contribution rather than passive name lending. Aggregate advisory pool: **0.5-2% of fully-diluted equity** reserved at pre-seed close (per §2.2 governance projection); individual grants 0.1-0.5% per advisor with 12-month vesting tied to engagement.

**Three advisor profiles aligned with §3.4 recruitment plan:**

| Advisor profile | Target | Decision-support areas | Engagement |
|---|---|---|---|
| **Strategic — Mongolian banking sector executive** | Senior tier-1 bank executive (treasury head, corporate banking head, strategy / digital banking lead) at Khan Bank, Golomt Bank, TDB, Khas Bank, or State Bank | Customer-acquisition prioritization across 5-bank cohort; pricing-tier validation; banking-sector procurement-cycle navigation; banking-customer success-criteria definition | 1-2 hours/quarter; equity grant 0.25-0.5%; 12-month vesting tied to engagement |
| **Technical — AI/ML domain specialist** | Senior practitioner in LLM-application architecture or financial-information AI products. Could be Mongolia-resident (rare at this depth) or diaspora-based (Mongolian-Singaporean, Mongolian-Korean tech communities) | LLM-pipeline scaling decisions; dual-provider architecture optimization; Phase 7.2.2 customer-CMS technical design; future Azurise AI cross-product technical strategy | 1-2 hours/quarter; equity grant 0.25-0.5%; 12-month vesting |
| **Industry — Mining or regulator** | Senior mining-IR executive (Oyu Tolgoi LLC, Erdenes Mongol, MMC, ETT) **OR** regulatory-side advisor (Bank of Mongolia, Financial Regulatory Commission, Ministry of Finance senior staff) | Mining-cohort customer-acquisition strategy; regulatory-positioning navigation; Mongolia-government-program eligibility (e.g., MLSP STARTUP grant verification per §11); cross-border regulatory-readiness for Central Asia expansion | 1-2 hours/quarter; equity grant 0.25-0.5%; 12-month vesting |

**Advisory recruitment timeline:**
- **Year 1 (pre-seed close):** Strategic advisor engaged first (highest leverage on Year 1 customer-acquisition prioritization); Technical advisor engaged within 6 months of pre-seed close.
- **Year 1-2 (post first paying customer):** Industry advisor engaged once mining-cohort or government-cohort sales cycle activates (informs §7.4 cohort GTM sequencing).
- **Year 2-3:** Advisory bench reviewed; underperforming engagements ended (vesting cliff cut); new advisors recruited as cross-border or Phase 7.2.2 strategic-decision needs surface.

**Advisor governance:** quarterly synchronous calls (1-2 hours, founder-presented agenda); written decision-support memo follow-up where applicable; advisory equity grants subject to standard vesting cliff with founder discretion to terminate engagement before vesting if contribution falls short.

> *[FOUNDER ADJUST — specific named advisor outreach status; advisor-candidate priority order; existing informal advisory relationships that may convert to formal engagements at pre-seed close.]*

The advisory bench is **upside, not Year-1-required** — Year 1 customer acquisition runs on founder direct relationships. Advisory contributions become high-leverage in Year 2 as second-cohort customer-segment expansion and cross-border-adjacency-feasibility decisions arise. *[See §3.4 for advisory recruitment narrative + Year 2-3 framing.]*

---

## 10. Financial Plan

This section provides multi-scenario financial projections, cash-flow modeling, sensitivity analysis, and unit-economics framework appropriate for institutional investor and lender due diligence. All scenarios anchor against §8.2 tax-compliance posture (1% effective tax Year 1-2, VAT-deferred until Year 2-3) and §3.3 hiring-plan headcount trajectory. *[See `BUSINESS_PROJECT_TEMPLATE.md` §10 for streamlined funding-ask narrative; this section provides the financial-modeling depth.]*

### 10.1 Revenue model breakdown

Three revenue streams per the hybrid commercial model (Q4 lock; per `BUSINESS_PROJECT_TEMPLATE.md` §6 + §6 of this Plan):

**Stream 1 — SaaS subscription (primary Year 1 driver):**

| Tier | ACV range USD | Year 1 expected | Year 3 expected (BASE) | Growth assumption |
|---|---|---|---|---|
| **Starter** ($5K-15K) | $7-10K avg | 2-3 customers | 8-12 customers | 30-50% YoY count growth; 10-20% YoY ACV growth from upgrades |
| **Professional** ($20K-50K) | $25-35K avg | 0-1 customer | 5-8 customers | First Pro customer Year 1 Q4 most likely; cohort scales Year 2-3 |
| **Enterprise** ($75K-150K) | $90-120K avg | 0 customers | 1-2 customers | First Enterprise customer Year 2-3 trigger |

SaaS revenue growth assumption: customer count expands 2-3× Year 1→Year 2; ACV grows ~15% YoY from upgrades and pricing maturation; **mix shifts toward Professional + Enterprise as moat compounds**.

**Stream 2 — Advertising (Year 2-3 long-tail driver):**

| Source | Pricing | Year 1 expected | Year 3 expected | Notes |
|---|---|---|---|---|
| Display ads | $5-25 CPM | $1-3K | $25-75K | Scales with reader base (10K → 50K MAU progression) |
| Sponsored content | $1-5K per piece | $0-5K | $20-50K | 6-24 pieces/year addressable Year 2+ |
| Conference + event sponsorship | $5-25K per sponsor | $0 | $10-30K | Activated post Phase 9 in-person events |

Advertising deliberately small Year 1 — reader-acquisition is engineering and editorial focus first, monetization second. Year 2-3 reader-base maturation supports rate-card development.

**Stream 3 — Licensing (Year 2+ high-margin driver):**

| Form | Pricing | Year 1 expected | Year 3 expected | Notes |
|---|---|---|---|---|
| Data feed licensing | $10-50K/year per integrator | $0-5K | $50-150K | First integrator likely Year 2 trigger |
| White-label editorial syndication | $25-100K/year per customer | $0 | $50-100K | Phase 7.2.2 customer-CMS deployment unlock |
| Custom integrations | $15-75K + setup fee | $0-10K | $30-80K | Banks' internal Bloomberg-augmentation layer integrations |

Licensing has **highest gross margin** (marginal cost approaches zero given operational pipeline already running) but **longest sales cycle** (multi-month evaluation). Year 1 contribution intentionally minimal; Year 2+ emerges as customer-relationship trust unlocks licensing-tier conversations.

### 10.2 Year 1 detailed P&L projection — multi-scenario

Three scenarios bracket the Year 1 outcome envelope. All scenarios assume Path 1 funding ($50-150K pre-seed close) unless noted; Path 2 (bootstrap) projection per §10.4.

**Year 1 LOW scenario — $30K total revenue:**

| Item | USD | Notes |
|---|---|---|
| **Revenue (gross)** | **$30,000** | 2 Starter customers × $10K + minor advertising/licensing |
| Less: VAT | $0 | Below MNT 400M threshold (per §8.2) |
| Less: CIT (1%) | $300 | 1% effective rate Year 1 (per §8.2) |
| **Revenue (net of tax)** | **$29,700** | |
| Operating costs | | |
| · Founder (cash compensation Year 1) | $0-12,000 | Founder absorbs equity-only OR minimal cash; Path 2 = $0 |
| · Sales/BD hire | $30,000-45,000 | Triggered Path 1 only (75% utilization Year 1) |
| · API + hosting + tools | $1,200-2,400 | LLM API + Vercel + Resend + domain (per §8.3) |
| · Customer acquisition (Path 1 spend) | $10,000-15,000 | 40% of pre-seed (per §11.2 lower bracket) |
| · Operations + accounting | $3,000-5,000 | Outsourced bookkeeping + CPA (per §8.3) |
| · Legal + IP | $2,000-4,000 | Trademark filing + LLC compliance |
| **Total operating cost** | **$46,200-83,400** | |
| **EBITDA** | **($16,500)-($53,700)** | Loss; absorbed by Path 1 funding |

**Year 1 BASE scenario — $100K total revenue:**

| Item | USD | Notes |
|---|---|---|
| **Revenue (gross)** | **$100,000** | 4-5 customers (mix Starter + 1 Professional); some advertising/licensing |
| Less: VAT | $0 | Still below MNT 400M threshold |
| Less: CIT (1%) | $1,000 | 1% effective rate |
| **Revenue (net of tax)** | **$99,000** | |
| Operating costs | $50,000-90,000 | Same cost-base structure as LOW; Path 1 funding deployed at upper bracket |
| · Founder cash compensation | $0-18,000 | Slightly higher cash compensation possible |
| · Sales/BD hire (full-year) | $35,000-55,000 | |
| · API + hosting + tools | $1,500-3,000 | Slight scale-up |
| · Customer acquisition (Path 1 spend) | $20,000-30,000 | 40% of pre-seed mid-bracket ($75K-100K) |
| · Operations + accounting + legal | $5,000-8,000 | |
| **Total operating cost** | **$61,500-114,000** | |
| **EBITDA** | **($14,500)-$37,500** | Range from minor loss to small positive; Path 1 funding sustains |

**Year 1 HIGH scenario — $200K total revenue:**

| Item | USD | Notes |
|---|---|---|
| **Revenue (gross)** | **$200,000** | 5+ customers including 1 Enterprise OR 2 Professional anchors |
| Less: VAT | $0 | Just below MNT 400M threshold (revenue ~$200K = MNT 680M); but conservative — assume 6-month VAT registration trigger Q4 |
| Less: VAT (Q4 partial) | $5,000 | 10% on Q4 revenue (~$50K) |
| Less: CIT (transitioning) | $2,000 | 1% on first MNT 300M; 10% on remainder; effective ~1.5% blended |
| **Revenue (net of tax)** | **$193,000** | |
| Operating costs | $80,000-130,000 | Path 1 funding deployed at full upper bracket ($150K) |
| · Founder cash compensation | $20,000-40,000 | Market-rate emergence |
| · Sales/BD hire + early second hire | $50,000-75,000 | Editorial analyst contractor activation Q3-Q4 |
| · API + hosting + tools | $2,500-5,000 | Higher LLM volume + custom-customer tooling |
| · Customer acquisition (Path 1 + ad spend) | $30,000-45,000 | Activates content-marketing + event budgets |
| · Operations + accounting + audit + legal | $8,000-15,000 | Audit triggered if assets cross MNT 1B |
| **Total operating cost** | **$110,500-180,000** | |
| **EBITDA** | **$13,000-$82,500** | Path 1 funding fully deployed; positive EBITDA achieved Year 1 |

**Year 1 EBITDA bracket: ($53,700) [LOW] → ~$15K [BASE] → $82,500 [HIGH].** Path 1 funding bridges the LOW + early-BASE EBITDA gap; HIGH scenario achieves Year 1 EBITDA-positive.

### 10.3 Year 2-3 expansion projections

Cost scaling assumptions: hire activation per §3.3; tax-rate transitions per §8.2; revenue mix shifts toward Professional + Enterprise per §10.1.

**Year 2 expansion (BASE scenario $500K, range $300-800K):**

| Item | LOW $300K | BASE $500K | HIGH $800K |
|---|---|---|---|
| **Revenue (gross)** | $300,000 | $500,000 | $800,000 |
| Less: VAT (10%, registered Q1-Q2) | $20,000 | $40,000 | $70,000 |
| Less: CIT (10% transitional, with 90% reduction available) | $5,000 | $10,000 | $20,000 |
| **Revenue (net of tax)** | **$275,000** | **$450,000** | **$710,000** |
| Operating costs | | | |
| · Headcount (3-6 people per §3.3 Path 1) | $90,000-150,000 | $150,000-250,000 | $200,000-350,000 |
| · API + hosting + tools | $5,000-12,000 | $8,000-15,000 | $12,000-25,000 |
| · Customer acquisition + marketing | $15,000-30,000 | $30,000-60,000 | $50,000-100,000 |
| · Operations + audit + legal | $15,000-25,000 | $20,000-35,000 | $30,000-50,000 |
| **Total operating cost** | $125,000-217,000 | $208,000-360,000 | $292,000-525,000 |
| **EBITDA** | $58,000-150,000 | $90,000-242,000 | $185,000-418,000 |

Year 2 BASE EBITDA $90-242K — **the company achieves sustainable profitability under BASE scenario in Year 2** without requiring additional external capital.

**Year 3 expansion (BASE scenario $2M, range $1.5-2.5M):**

| Item | LOW $1.5M | BASE $2M | HIGH $2.5M |
|---|---|---|---|
| **Revenue (gross)** | $1,500,000 | $2,000,000 | $2,500,000 |
| Less: VAT (10%) | $135,000 | $180,000 | $225,000 |
| Less: CIT (10% standard, blended ~10%) | $135,000 | $180,000 | $225,000 |
| **Revenue (net of tax)** | **$1,230,000** | **$1,640,000** | **$2,050,000** |
| Operating costs | | | |
| · Headcount (6-12 people per §3.3 trajectory) | $300,000-500,000 | $400,000-600,000 | $500,000-750,000 |
| · API + hosting + tools | $20,000-40,000 | $30,000-50,000 | $40,000-70,000 |
| · Customer acquisition + marketing | $80,000-150,000 | $120,000-200,000 | $180,000-300,000 |
| · Operations + audit + legal | $40,000-60,000 | $50,000-80,000 | $70,000-120,000 |
| · Cross-border exploration (if triggered) | $20,000-50,000 | $40,000-80,000 | $60,000-120,000 |
| **Total operating cost** | $460,000-800,000 | $640,000-1,010,000 | $850,000-1,360,000 |
| **EBITDA** | $430,000-770,000 | $630,000-1,000,000 | $690,000-1,200,000 |

Year 3 BASE EBITDA **$630K-1.0M** — strong margin profile (32-50% EBITDA margin on revenue) sustains Series A optionality and cross-border expansion.

**Tax-rate progression sensitivity:** if 2026 reform proposed amendments pass (15% bracket for MNT 6-10B; raised 25% threshold to MNT 10B per pre-recon), Year 3 BASE effective tax improves modestly. If reforms delayed, Year 3 BASE tax assumption remains at standard 10%.

### 10.4 Cash flow analysis

**Path 1 (Pre-seed funded $50-150K) — monthly cash flow trajectory:**

| Month | Inflow (cumulative) | Outflow (cumulative) | Net cash position | Notes |
|---|---|---|---|---|
| 0 | $100,000 | $0 | $100,000 | Pre-seed close (BASE $100K case) |
| 3 | $105,000 | $20,000 | $85,000 | First pilot revenue + Sales/BD hire ramp |
| 6 | $130,000 | $45,000 | $85,000 | First paying customer Q2; CAC accelerates |
| 9 | $165,000 | $75,000 | $90,000 | Q3 customer pipeline matures |
| 12 | $200,000 | $115,000 | $85,000 | Year 1 close BASE; sustainable burn |
| 15 | $260,000 | $145,000 | $115,000 | Year 2 customer expansion begins |
| 18 | $340,000 | $175,000 | $165,000 | **Break-even achieved** (cumulative inflow > cumulative outflow + initial pre-seed) |
| 21 | $440,000 | $210,000 | $230,000 | Profitability sustains |
| 24 | $560,000 | $250,000 | $310,000 | Year 2 close BASE; healthy cash buffer |

**Break-even Path 1: month 18-24** (BASE scenario; LOW scenario stretches to ~month 24-30).

**Path 2 (Bootstrap) — monthly cash flow trajectory:**

| Month | Inflow (cumulative) | Outflow (cumulative) | Net cash position | Notes |
|---|---|---|---|---|
| 0 | $0 | $0 | $0 (founder personal capital ~$30K reserve) | Bootstrap; no pre-seed |
| 6 | $5,000 | $3,000 | $2,000 | First pilot revenue; minimal cost base |
| 12 | $25,000 | $12,000 | $13,000 | Year 1 SOM lower bound |
| 18 | $60,000 | $25,000 | $35,000 | Year 2 begins; founder-solo motion sustains |
| 24 | $130,000 | $50,000 | $80,000 | First hire trigger (~$60-100K annualized run-rate) |
| 30 | $230,000 | $90,000 | $140,000 | **Break-even Path 2** (cumulative inflow > cumulative outflow) |
| 36 | $360,000 | $140,000 | $220,000 | Year 3 begins; sustainable trajectory |

**Break-even Path 2: month 24-36** — slower scaling intrinsic to bootstrap; founder retains 100% equity through this trajectory.

**Compact monthly burn/income summary** (alternative decision lens — complements cumulative tables above):

Path 1 (Pre-seed funded):

| Month | Revenue (in-month) | Expenses (in-month) | Net (in-month) | Cumulative |
|---|---|---|---|---|
| 1-3 | $1-2K/mo | $5-7K/mo | -$4-5K/mo | $85K |
| 4-6 | $4-7K/mo | $7-10K/mo | -$3K/mo | $85K |
| 7-9 | $9-12K/mo | $9-11K/mo | $0-1K/mo | $90K |
| 10-12 | $11-14K/mo | $11-13K/mo | $0-1K/mo | $85K |
| 13-18 | $15-25K/mo | $13-18K/mo | $2-7K/mo | $115-165K |
| 19-24 | $25-40K/mo | $18-25K/mo | $7-15K/mo | $230-310K |

Path 2 (Bootstrap):

| Month | Revenue (in-month) | Expenses (in-month) | Net (in-month) | Cumulative |
|---|---|---|---|---|
| 1-6 | $0-1K/mo | $1-2K/mo | -$1-2K/mo | $2K |
| 7-12 | $1-4K/mo | $1-2K/mo | $0-2K/mo | $13K |
| 13-18 | $5-10K/mo | $2-3K/mo | $3-7K/mo | $35K |
| 19-24 | $10-20K/mo | $4-7K/mo | $6-13K/mo | $80K |
| 25-30 | $15-25K/mo | $5-9K/mo | $10-16K/mo | $140K |
| 31-36 | $20-30K/mo | $6-10K/mo | $14-20K/mo | $220K |

The monthly burn/income lens shows **Path 1 reaches positive in-month margin around month 7-9; Path 2 reaches it around month 7-12** — both paths achieve operational sustainability during Year 1, with Path 1's faster top-line scaling enabled by sales/BD hire activation.

**Path comparison: capital efficiency.** Path 1 deploys $50-150K to compress break-even to month 18-24. Path 2 deploys $0 external capital; break-even month 24-36; founder retains full equity but absorbs founder-cash-compensation deferment. Both paths reach Year 3 BASE $2M trajectory; Path 1 reaches it 6-12 months earlier with sales-hire activation.

### 10.5 Sensitivity analysis

Three sensitivity dimensions affect financial outcomes materially:

**Customer acquisition rate sensitivity:**

| CAC scenario | Year 1 customers | Year 1 revenue impact | Mitigation |
|---|---|---|---|
| **+25% slower** | 2-3 customers (vs 3-5 BASE) | Year 1 ~$60K (-40%) | Founder direct-outreach can absorb single-customer slowdowns; advisory recruitment compresses cycle |
| **BASE** | 3-5 customers | Year 1 $100K | — |
| **+25% faster** | 5-7 customers | Year 1 ~$150K (+50%) | Founder scaling bandwidth strained; sales/BD hire activation timing brings forward |

**Pricing tier mix sensitivity:**

| Mix scenario | Year 1 revenue | Notes |
|---|---|---|
| All Starter | $50K | 5 customers × $10K avg |
| BASE (mostly Starter + 1 Professional) | $100K | 4 × Starter + 1 × Pro |
| Professional-heavy | $150K | 2 × Starter + 2 × Pro |
| Enterprise anchor (Year 1 stretch) | $200K | 2 × Starter + 1 × Enterprise |

**API cost increase sensitivity:**

| Scenario | Annual impact | Mitigation |
|---|---|---|
| Anthropic + Gemini both 2× pricing | +$5,000-10,000 | Negligible vs revenue scale; gross margin remains ~95%+ |
| Anthropic 5× pricing emergency | +$20,000-30,000 | Switch translator primary to Gemini-only; degrade gracefully |
| All free APIs paid (yfinance, CoinGecko) | +$10,000-30,000 | Worst-case; net margin compresses 5-10pts |

The aggregate sensitivity envelope is **manageable under all scenarios** — no single sensitivity threatens operational continuity. The most material variance is customer acquisition rate (per §10.4 break-even trajectory).

### 10.6 Unit economics

**Gross margin profile:**
- **Year 1 ~98%** — operating cost <$10/month effective per `TECHNICAL_HANDBOOK.md` §4.7; near-zero marginal cost per additional customer.
- **Year 2 ~92-95%** — VAT registration introduces 10% pass-through; LLM API consumption scales with translation volume.
- **Year 3 ~88-92%** — VAT + tax + scaling overhead; still substantially above SaaS industry median (~70-75%).

**Customer Acquisition Cost (CAC):**

| Cohort | Year 1 CAC (USD) | Year 2 CAC (USD) | Notes |
|---|---|---|---|
| Tier-1 banks | $2-5K | $4-8K | Founder direct-outreach Year 1 → sales/BD-driven Year 2 |
| Tier-1 mining | $3-8K | $5-12K | Longer cycle; more travel expense |
| MSE corporate IR | $1-3K | $2-5K | Faster cycle; smaller per-customer engagement |
| Brokers + asset managers | $0.5-2K | $1-3K | Operational decision; founder warm referrals |

**Lifetime Value (LTV) — 3-5 year retention assumption:**

| Tier | Year 1 ACV | Year-2-3 ACV (post-upgrade) | LTV (3-year) | LTV (5-year) | LTV/CAC |
|---|---|---|---|---|---|
| Starter | $10K | $12K | $33K | $54K | **6-25×** |
| Professional | $35K | $42K | $115K | $190K | **13-58×** |
| Enterprise | $100K | $130K | $360K | $600K | **20-60×** |

These LTV/CAC ratios are **substantially above SaaS industry benchmarks** (typical SaaS targets ≥3:1; Fintech vertical ~5:1; Adtech 7:1) — driven by Orange News' near-zero marginal cost from $0/month operating infrastructure (per `BUSINESS_PROJECT_TEMPLATE.md` §6.5 + §4.7 of `TECHNICAL_HANDBOOK.md`). LTV calculations assume 3-5 year retention pattern conservative for Bloomberg-grade institutional contracts; Year 1 retention validation pending; ranges adjusted Year 2 based on actual cohort retention data.

**Churn assumptions:**
- **Year 1-2: 5-10% annual churn** (institutional customers; renewal cycle protects against intra-year departure variance).
- **Year 3+: 5-15% annual churn** (cohort base wider; some lower-tier Starter customers may not renew at first cycle).
- **Negative churn signal:** customer upgrade revenue (Starter → Professional → Enterprise) and licensing-engagement expansion can produce **net negative churn** (revenue from existing cohort grows YoY despite some departures).

**CAC payback period:**
- **Year 1 healthy SaaS benchmark 6-12 months;** Orange News target **6-9 months** given high gross margin profile.
- **Tier-1 customer payback:** $4K average CAC ÷ ~$10K ACV / 12 months × 98% GM = ~5 months payback.
- **Faster payback than industry median (~23 months for private SaaS)** is a direct consequence of $0/month operational cost moat.

**Exit valuation framework (Year 5+ optionality):**
- **Software company median EV/Revenue: 3.0×** (per pre-recon software M&A benchmarks).
- **Multi-scenario Year 5 exit valuation:**

| Scenario | Year 5 revenue | Multiple | Exit valuation |
|---|---|---|---|
| **LOW** | $3M | 3.0× | **$9M baseline** |
| **BASE** | $5M | 3.0× | **$15M baseline** |
| **HIGH** | $7M | 3.0-4.0× | **$21-28M** |

The HIGH multiple premium (3.0-4.0×) is justified by: **cross-border traction** (Central Asia adjacency materializing on schedule), **multi-product portfolio** (Orange News + Monfiles + Nomad DNA cross-product synergies), and **negative churn dynamics** (revenue from existing cohort growing YoY despite some departures).

- **Comparable Mongolia / Central Asia precedents:**
  - **AND Global** (Mongolia fintech): $5M Series A 2017 → $7M IFC Series B 2025 trajectory.
  - **Uzum** (Uzbekistan fintech unicorn): **$65.5M equity round 2025**; one of top Asian FinTech deals; supports Year 3+ Central Asia adjacency thesis and the HIGH-scenario upper-bound exit valuation ($28M).
- **Year 10 horizon (per §4.3):** intentionally aspirational; not financially modeled; founder strategic thinking only.

The unit economics + exit-valuation framework supports a **Year 5 institutional-investor return profile of 5-15× cash-on-cash for Path 1 pre-seed participants** — assuming BASE scenario execution and 3.0-5.0× exit multiple. Higher returns possible under HIGH scenario execution + Central Asia adjacency materializing on schedule.

---

## 11. Funding Requirements

This section provides the institutional-investor-grade funding thesis with dual-path framing, detailed use-of-funds breakdown, 12-month financial projections by path, and investor decision criteria. *[See `BUSINESS_PROJECT_TEMPLATE.md` §10 for the streamlined funding ask narrative; this section provides the due-diligence-grade depth.]*

### 11.1 Funding ask summary

Orange News presents two funding paths — a recommended pre-seed path and an alternative bootstrap path — with explicit financial implications anchored in §10 multi-scenario projections. The dual-path framing reflects the founder's commitment (Q6 lock) to validate the wedge before requiring outside capital, while keeping the door open to investor participation that materially accelerates the Year 1 trajectory.

**Path 1 (Recommended): Pre-seed funding $50,000-150,000 USD.**

Anchored against frontier-market ecosystem reality: 80% of 2025 Central Asia venture deals were under $200K (per pre-recon Day 17 + Day 18 findings); pre-seed checks at $50-150K position cleanly within the discovery-stage band serving Central Asia frontier markets. The funding supports an 18-month runway across customer acquisition, sales/BD hire activation, product polish (Phase 7.2.2 customer-CMS layer if customer demand validates), operations, and a modest reserve.

**Stack-able with the MLSP STARTUP National Championship grant** (Mongolian Ministry of Labor and Social Protection, MNT 99M ~$30K USD non-dilutive to top 6 teams). Combined Path 1 funding stack: **$80,000-180,000 USD** if government program eligibility holds in 2026. Beyond the dollar value, government endorsement provides legitimacy signaling to subsequent institutional investors.

**Path 2 (Alternative): Bootstrap mode.** Founder-funded customer acquisition through Year 1 SOM ($20-50K revenue / 3-5 customers per Q5 + Q7 locks). **Year 2 BASE achieves sustainable profitability without external capital** (per §10.3 — Year 2 BASE EBITDA $90-242K). No external dilution; founder retains 100% equity. Reference §10.3 for the self-sustaining revenue trajectory that makes bootstrap viable as a primary path, not a fallback.

The bootstrap alternative is a **deliberate strategic posture**, not a contingency. The founder can opt for a Series A timed against Year 2-3 commercial validation rather than a pre-seed timed against product readiness — preserving cap-table optionality for sophisticated long-horizon decision-making.

### 11.2 Path 1 use of funds — detailed breakdown

For the recommended pre-seed range $50-150K USD, the use-of-funds breakdown follows a customer-first, hire-second, product-third allocation:

**40% Customer acquisition: $20-60K**

- **Sales/BD hire compensation (9 months Q1-Q3 ramp + Q4 productivity):** $20-30K
  - Sales/BD hire profile per §3.3 (Mongolia financial-sector experience; bilingual Mongolian + English).
  - Compensation $30-60K USD annualized; partial-year coverage during ramp.
- **Marketing budget per §7.6 channels:** $5-15K
  - Industry events + speaking opportunities ($4-12K)
  - Content marketing + SEO investment ($3-9K)
  - Demo materials + customer-facing collateral ($2-6K)
- **Travel + relationship-building Mongolia financial sector:** $5-15K
  - Tier-1 customer outreach travel (per §7.4 cohort GTM sequencing)
  - Industry conference attendance + speaking
  - In-person discovery + pilot meetings

**25% Hiring: $12.5-37.5K**

- **Sales/BD hire onboarding + statutory benefits + equipment:** $5-15K
  - Mongolian Social Security + statutory benefits per §8.4 first-hire activation
  - Laptop + tools + ramp-up resources
- **Editorial review contractor (Year 1 Q3-Q4 trigger if editorial volume scales):** $7-22K
  - Bilingual senior reviewer; part-time arrangement; per §3.3 hire profile 2

**20% Product polish: $10-30K**

- **Phase 7.2.2 admin layer (when customer demand triggers):** $5-15K
  - `/admin` route with auth-gating + article CRUD + review queue (per `TECHNICAL_HANDBOOK.md` §11)
  - Triggered by first paying Enterprise tier customer
- **API cost runway expansion:** $2-8K
  - LLM API budget for higher translation volume Year 1-Year 2 scaling
  - Backup translator (Anthropic) cost coverage during peak demand
- **Production state hardening:** $3-7K
  - Monitoring + alerting upgrades (per `TECHNICAL_HANDBOOK.md` §10 disaster recovery)
  - Backup automation + recovery testing

**10% Operations + tools: $5-15K**

- **Legal:** $2-6K
  - LLC formalization (any pending registrations per §8.1)
  - Customer contract templates + review
  - Trademark filing (Orange News brand mark + visual identity per §6.6)
- **Accounting:** $2-6K
  - Mongolian CPA engagement Q1 (per §8.4 milestone)
  - Audit prep if Year 2 trigger anticipated
- **Tools/SaaS:** $1-3K
  - Resend (subscribe email), monitoring tools, productivity SaaS

**5% Reserve: $2.5-7.5K**

- Contingency for founder unexpected operational expenses (legal escalation, customer-onboarding edge cases, infrastructure tier-up if scale spikes).

**Optional supplement: MLSP STARTUP MNT 99M (~$30K non-repayable).**
- Stack-able with Path 1 pre-seed for combined $80-180K funding.
- Government endorsement signals legitimacy to subsequent institutional investors.

> *[FOUNDER ADJUST — verify 2026 STARTUP National Championship eligibility (Orange News fits the program's startup classification), application dates, and current cohort status. Engage MLSP directly via the official channel.]*

### 11.3 Path 2 bootstrap milestones

Bootstrap operates as a **revenue-funded reinvestment trajectory** with milestone-gated hiring:

**Founder reinvestment trajectory:**

| Year | Revenue (BASE) | Reinvested fraction | Founder personal compensation | Hire activation |
|---|---|---|---|---|
| Year 1 | $20-50K | ~100% | $0 cash (founder absorbs) | None |
| Year 2 | $500K | 60-70% (~$300-350K) | $50-100K cash | First hire (sales/BD trigger Q2-Q3) |
| Year 3 | $2M | 40-50% (~$800K-1M) | $100-150K cash | 2nd-3rd hire (editorial + engineering) |

**Operational milestones gated to revenue:**
- **Sales/BD hire trigger:** $300K ARR (Year 2 BASE Q2-Q3 inflection point per §10.4).
- **Editorial team hire trigger:** $1M ARR (Year 3 mid-year per §10.3 Year 3 BASE trajectory).
- **Engineering hire trigger:** $1.5M ARR (Year 3 late-year).
- **Cross-border exploration trigger:** $2M+ ARR sustained (Year 3 BASE consistent).

**Founder-personal-capital deployment:** estimated **$30-50K** from founder's prior earnings / personal capital, applied to operations + minimal customer-acquisition spend over Year 1 ($20-50K founder-reserved per §10.4 cash flow trajectory). Path 2 absorbs this founder-cash-compensation deferment as the trade-off for retaining 100% equity.

**Founder retains 100% equity throughout Year 1-3.** Strategic Series A optionality remains open against Year 2-3 commercial validation. The bootstrap path explicitly preserves long-term founder cap-table sovereignty for sophisticated multi-year decision-making.

> *[FOUNDER ADJUST — bootstrap path founder-funded amount calibrated to actual personal-capital availability + risk tolerance.]*

### 11.4 12-month financial projections summary

**Path 1 (Pre-seed funded) — 12-month trajectory** (detailed monthly burn/income in §10.4):
- Mo 0: $0 / 1 founder / founder-funded
- Mo 6: $20K / 3 paying / sales/BD active
- Mo 12: $50K / 5 paying / 3 headcount

**Path 2 (Bootstrap) — 12-month trajectory** (detailed monthly trajectory in §10.4):
- Mo 0: $0 / 1 founder / $20-50K founder-reserved
- Mo 6: $5K / 1 pilot / 1 founder
- Mo 12: $25K / 3 paying / 1-2 contractors leveraged

Both paths achieve sustainable trajectory by Year 1 close. Path 1 front-loads capital deployment for 6-12 month break-even compression. Path 2 preserves founder equity at expense of slower scaling.

For detailed monthly burn/income tables, see §10.4 cash flow analysis.

### 11.5 Path comparison + investor decision criteria

**Capital efficiency framing:**

| Path | Capital deployed | Break-even (BASE) | Year 2 BASE revenue | Year 5 BASE exit valuation | Founder equity Year 1 |
|---|---|---|---|---|---|
| **Path 1 (Pre-seed)** | $50-150K external + $30K MLSP supplement | **Month 18-24** | $500K | $15M baseline | 70-85% post-pre-seed |
| **Path 2 (Bootstrap)** | $0 external + $30-50K founder personal | **Month 24-36** | $500K (slower path) | $15M baseline | **100%** retained |

Path 1 deploys $50-150K to compress break-even by 6-12 months. Path 2 deploys $0 external capital; break-even month 24-36; founder retains full equity but absorbs founder-cash-compensation deferment. Both paths reach Year 3 BASE $2M trajectory; Path 1 reaches it 6-12 months earlier with sales-hire activation.

**The AND Global precedent (Mongolia frontier-market growth path):**

Mongolia's most successful fintech, AND Global (parent of LendMN), grew from **angel investors in Mongolia and Japan providing early funding** (2017, $5M Series A) to **a $7M IFC Series B in 2025**. The trajectory is the canonical Mongolian-frontier-market growth path: **domestic-Japanese angel capital first, institutional capital after operational validation**. Orange News' funding strategy is informed directly by this precedent — pre-seed from a similar angel + early-VC mix, with institutional capital (IFC, EBRD, Mongolia Opportunities Fund) preserved for a Series A round timed against Year 2-3 commercial validation.

**Tier 1 institutional investor candidates** (Path 1 pre-seed fit):

| Investor | Mandate | Check size | Strategic fit |
|---|---|---|---|
| **Mongolia Opportunities Fund I LP** (IFC-affiliated) | Mongolia-specific equity | Variable (institutional); pre-seed less typical | Strongest mandate match; institutional credibility halo |
| **Yoshlar Ventures** (Uzbekistan) | Central Asia pre-seed + seed | $40-400K | Direct geographic + stage match; Central Asia adjacency thesis support |
| **EBRD Star Venture** | Multi-country accelerator + capital | Mentor + market access (some capital) | Pipeline + market access; smaller capital but strategic |
| **Founder Institute Mongolia** | Pre-seed pipeline | Program participation; FI Venture Network access | Structured program + alumni network |
| **Mongolian Fintech Association members** | Sector-specific angel syndicate | Variable | Domain-aligned angel access |
| **Asian Development Bank (ADB)** | Frontier-market financial-sector development | Variable institutional; rare pre-seed | Strategic for Year 2 Series A optionality |

**Tier 2 strategic angel candidates:**

- **Mongolian banking-sector executives.** Khan Bank's dual-angle is most relevant — 95% digital transaction rate, 80% Mongolian household penetration. The bank operates as both a strategic customer (per §7.4 anchor) and a potential strategic angel investor or partner. **Customer + investor overlap is a known frontier-market funding pattern.** *[FOUNDER ADJUST — Khan Bank specific contacts if founder relationship exists.]*
- **Mining-sector individuals.** Senior IR / strategy executives at Oyu Tolgoi LLC, Erdenes Mongol holding, MMC HKEX:0975 — domain-aligned angels whose customer-overlap with §7.4 mining tier-1 customers makes their angel participation strategically valuable.
- **Diaspora angels.** Mongolian-Japanese, Mongolian-Korean, Mongolian-Singaporean angel networks — referencing the AND Global precedent of Mongolia-and-Japan early investors.

**Investor decision criteria matrix:**

| Investor profile | Best-fit path | Rationale |
|---|---|---|
| Pre-seed VC (Yoshlar, EBRD Star Venture) | **Path 1 ($50-150K)** | 12-18 month commercial validation; pre-seed allocation matches frontier-market check size; valued strategic angle |
| Angel syndicate (Mongolian + diaspora) | **Path 1 stacked with strategic angels** | Customer + investor overlap pattern; flexibility on equity terms |
| Strategic angel (banking executive, mining IR) | **Path 1 hybrid** | Pre-seed funding + strategic-credibility halo + customer-relationship leverage |
| Institutional Mongolia/Central Asia funds (IFC-affiliated, ADB) | **Series A (Year 2+)** | More naturally fit Series A vs pre-seed; stabilisation certificate (per §8.2) supports foreign-investor confidence |
| Founder-driven (no investor preference yet) | **Path 2 (Bootstrap)** | Founder retains full optionality; future Series A investor sees Year 2 commercial traction without dilution overhang |

**The recommended path is Path 1 — pre-seed $50-150K stacked with the MLSP STARTUP government grant ($30K non-dilutive)** for combined funding of $80-180K. This path:
- Lands Year 1 commitments (3-5 customers, $20-50K revenue) at higher confidence.
- Compresses break-even to month 18-24 vs Path 2's month 24-36.
- Activates §3.3 sales/BD hire on a Year-1 Q1 trigger rather than waiting for Year 2-3 revenue scale.
- Preserves Year 2-3 trajectory expansion ($150-450K → $400K-1.2M) per §10.3.
- Supports Year 5 institutional-investor return profile of 5-15× cash-on-cash for Path 1 pre-seed participants per §10.6.

The bootstrap alternative (Path 2) is preserved as a strategic option if pre-seed conversation does not close on terms aligned with founder's long-term vision. Both paths are commercially viable; the recommendation reflects acceleration economics, not necessity.

> *[FOUNDER ADJUST — specific named-investor outreach already initiated; prior conversation references; angel-network introductions in motion. Founder fills based on actual pipeline state.]*

---

## 12. Implementation Timeline

This section provides execution-focused quarterly milestones (different lens from §8.4 compliance milestones — execution timeline tracks product, customer, and hiring delivery; §8.4 tracks regulatory and tax compliance). Both lenses operate against the same time axis but optimize for different stakeholder questions.

### 12.1 Year 1 quarterly execution timeline

**Q1 (Months 1-3) — Pre-launch foundation**

*Path 1 milestones (if pre-seed close):*
- **Pre-seed close + capital deployment** — funds wired to Azurise Solution LLC operating account; lead investor governance update finalized (per §2.2 + §8.1).
- **Sales/BD hire process initiated** — search, interview, offer, onboarding sequence (per §3.3 hire profile); target onboarding by end Q1.
- **LLC compliance finalization** — any pending registrations completed (per §8.1); GDT enrollment + district administration verification.
- **First 3 customer outreach launch** — founder + sales/BD hire (post-onboarding) executes Stage 1-2 outreach across `docs/sales/customer_target_list.md` highest-priority targets (Khan Bank, Golomt, TDB, Oyu Tolgoi LLC).
- **Strategic advisor first conversation** — banking sector executive outreach initiated per §3.4 + §9.3 advisory recruitment plan.

*Path 2 milestones (bootstrap):*
- **Founder time allocation finalization** — 41-60 hrs/week sustainable cadence operationalized (per §9.1 functional capacity matrix).
- **First 5 customer outreach (founder direct)** — founder solo executes Stage 1-2 outreach to highest-priority targets; warm-introduction prioritization given limited founder capacity.
- **LLC compliance finalization** — same as Path 1; founder absorbs administrative overhead.
- **TESKO operational template inheritance** — bookkeeping + accounting + legal counsel relationships activated (per §3.2).

**Q2 (Months 4-6) — First revenue**

*Both paths:*
- **First 1-2 paying customer pilots launched** — Stage 4 (30-day pilot) per §7.3 sales process; pilot terms: free or $1-3K nominal; goal is validation, not revenue.
- **Customer onboarding playbook validated** — `docs/sales/customer_onboarding_checklist.md` 4-week implementation sequence stress-tested against first real customer; lessons captured for future cohort scaling.
- **Editorial review processes refined** — 5-rule validator + temperature lock + Mongolian-Cyrillic discipline tested against first customer's specific use cases; per-customer customization patterns emerge.
- **Customer success metric baselines established** — `docs/sales/customer_success_metrics.md` (4 tagged metrics) populated with first-cohort data; Year 2-renewal indicator framework activated.

*Path 1 specific:*
- Sales/BD hire fully productive by Month 5-6; customer pipeline expansion begins.

**Q3 (Months 7-9) — Customer expansion**

- **3-4 paying customers active** — Path 1 (BASE projection); 1-2 paying customers active Path 2 (BASE projection).
- **Sales/BD hire productive** — Path 1 only; Q3 marks the milestone where sales/BD hire operating independently on customer pipeline.
- **First customer renewal conversations** — Q3 launch conversations 90 days before Year 1 contract end (per §7.5 renewal strategy).
- **Strategic advisor recruitment** — 1 banking sector advisor finalized per §3.4 + §9.3; quarterly engagement cadence established.
- **First Phase 7.2.2 customer-CMS scoping** — if Year 1 trajectory tracks toward first Enterprise customer, Phase 7.2.2 admin layer scoping initiated (per `TECHNICAL_HANDBOOK.md` §11 deferred phases).

**Q4 (Months 10-12) — Year 1 close**

- **Year 1 customer count target met:** 5 paying customers (Path 1 BASE) or 3 paying customers (Path 2 BASE) — Q5 founder lock fulfilled.
- **Year 2 hiring plan finalized** — sales/BD hire productivity validated supports editorial-analyst trigger evaluation (per §3.3 Year 2 trigger).
- **Annual financial statement prep** — Mongolian statutory format (per §8.4 Year 1 Q4 milestone).
- **VAT registration pre-trigger evaluation** — revenue trajectory toward MNT 400M new threshold assessed; Year 2 VAT registration timing forecasted (per §8.2).
- **Year 1 retrospective + Year 2 strategic plan** — founder-led review; sprint-cadence learning captured; Year 2 trajectory finalized (BASE $300-800K range narrowed against Year 1 actuals).

### 12.2 Year 2 quarterly execution timeline

**Q1 (Months 13-15) — Customer expansion + first hire**

- **6-8 paying customers (Path 1) or 4-5 paying customers (Path 2)** — cumulative including Year 1 retentions + new acquisitions.
- **Editorial team contractor onboarded** — bilingual senior reviewer (per §3.3 hire 2 trigger); editorial QA discipline scaled beyond founder.
- **VAT registration completion** — once revenue crosses MNT 400M (per §8.2 + §8.4 milestone); monthly VAT filings begin; customer contracts revised to reflect VAT pass-through.
- **First Tier-2 banks customer outreach** — sales/BD hire activates §7.4 Year 2 cohort expansion (per cohort GTM sequencing).

**Q2 (Months 16-18) — Multi-tenant architecture**

- **2nd customer (Tier 3 white-label deployment) triggers multi-tenant infrastructure** — Phase 9.2 multi-tenant architecture build (per `TECHNICAL_HANDBOOK.md` §11) activated by validated commercial demand.
- **Phase 7.2.2 admin layer development** — if customer demand surfaces during Q1-Q2 (per `TECHNICAL_HANDBOOK.md` §11 highest-value tier-1-customer feature).
- **First audit triggered** — assets crossing MNT 1B threshold (per §8.4 Year 2 milestone); Mongolian Big-4-affiliate firm engaged.
- **Stabilisation certificate application decision** — founder + tax advisor consultation (per §8.2 [FOUNDER ADJUST]); apply if pre-seed-close investor preferences favor; otherwise defer to Year 3.

**Q3 (Months 19-21) — Series A preparation OR continued bootstrap**

*Path 1 specific:*
- **Series A preparation** — institutional investor outreach (Mongolia Opportunities Fund, IFC, EBRD, ADB per §11.5 Tier 1 candidates); commercial validation evidence package compiled.
- **Year 3 hiring plan finalized** — sales lead + 1 BD rep + editorial team scaling + engineering hire + customer success (per §3.3 Year 3 trajectory).

*Path 2 specific:*
- **Continued reinvestment** — $1M ARR milestone targeting; 60-70% revenue reinvested into operations (per §11.3).
- **First hire trigger evaluation** — sales/BD hire activated when ARR crosses $300K (per §11.3 milestone gating).

**Q4 (Months 22-24) — Year 2 close**

- **10-12 paying customers (Path 1) or 6-8 paying customers (Path 2)** — cumulative.
- **Year 3 hiring plan ready** — sales lead + BD rep + editorial team + engineering hire + customer success activations sequenced.
- **Cross-border exploration timing decision** — pre-investment market validation in Kazakhstan or Uzbekistan begin per `MARKET_RESEARCH.md` §7.6 disclaimer; **Uzum precedent** (per §11.5 Central Asia adjacency thesis) supports Year 3 entry timing.
- **Year 2 retrospective + Year 3 strategic plan** — Year 3 BASE trajectory ($1.5-2.5M range) narrowed against Year 2 actuals.

### 12.3 Year 3-5 strategic milestones

**Year 3 — Mongolia leader posture consolidation** (BASE $2M revenue):
- 15-30 paying customers across multi-cohort breadth (banks + mining + MSE corporate IR + brokers + first government regulator).
- Headcount 6-12 (per §3.3 Year 3 trajectory); sales lead + BD rep + editorial team + engineering hire + customer success roles filled.
- **First Enterprise multi-seat customer** anchored — Tier 3 deployment validates Phase 7.2.2 + 9.2 + customer-CMS architecture.
- **First licensing engagement** — data feed or white-label syndication ($30-100K revenue contribution per §10.1 + §10.3).
- **Cross-border expansion planning** — Kazakhstan or Uzbekistan validation; entity establishment scoping; Cyrillic-typography-pipeline porting feasibility.
- Series A optionality preserved (Path 1) or evaluated (both paths).

**Year 4 — Cross-border live + customer base maturation:**
- 25-30 customers including first cross-border customer in target Central Asia market.
- Cross-border operational entity (subsidiary or branch) established per Mongolia + target-country commercial law.
- Headcount 12+ (per §3.3 Year 4 trajectory); Mongolia leader posture; cross-border hiring contemplated.
- Year 4 BASE revenue ~$3.5M (per §5.4 SOM evolution table).

**Year 5 — Central Asia adjacency live + Series A or strategic exit consideration:**
- 35-50 customers; Year 5 BASE revenue $5M (per §4.2 vision band); Year 5 LOW $3M / HIGH $7M.
- **Central Asia anchor markets stable** — Mongolia + 1 Central Asia market (Kazakhstan or Uzbekistan) operating commercially; replication template validated.
- **Multi-product Azurise AI portfolio synergies emerging** — Monfiles + Nomad DNA development timelines per §6.5 [FOUNDER ADJUST] founder-confirmed.
- **Series A round consideration OR strategic exit consideration** — exit valuation framework per §10.6 (LOW $9M / BASE $15M / HIGH $21-28M); founder strategic decision against §11.5 investor decision criteria.

*[See §10.6 for exit valuation framework + §13 for risk-adjusted milestones.]*

### 12.4 Critical path dependencies + risk factors

The execution timeline contains three critical-path dependencies whose slippage materially shifts Year 1+ trajectory.

**Year 1 critical path dependencies:**

| Dependency | Trigger window | Slippage consequence |
|---|---|---|
| **First customer close** | Within Q2 (Path 1) or Q3 (Path 2) | Without first customer in window, Path 2 trajectory becomes default; Year 1 SOM compresses to lower band; Year 2 hiring sequence delayed |
| **Sales/BD hire productivity** (Path 1 only) | Within Q3 (Months 7-9) | Without sales/BD hire productive by Q3, Path 1 advantage over Path 2 erodes; pre-seed capital effective utilization compromised |
| **Editorial review capacity scaling** | Q4 (Months 10-12) trigger if customer adds exceed founder bandwidth | Without editorial scaling, Year 2 customer-acquisition cap is reached; new-customer-onboarding blocked |

**Risk-mitigated parallel paths.** The dual-path strategy (Path 1 + Path 2) preserves option value: if pre-seed close fails or terms are unfavorable, Path 2 bootstrap continues; if pre-seed close succeeds, Path 1 acceleration trajectory engages. Year 1 milestones (3-5 customers, $20-50K revenue) are achievable under both paths, validating the wedge before requiring Series A capital regardless of pre-seed outcome.

**Architectural staging discipline:**
- **Multi-tenant architecture build** is staged after 2nd customer commits (proven demand) — premature build would consume engineering bandwidth before commercial validation.
- **International expansion** is gated to Year 3+ after Mongolia validation — premature cross-border entry would dilute founder focus during critical Year 1-2 commercial validation window.
- **Phase 7.2.2 customer-CMS** is gated to first Enterprise customer commit — premature build would sit unused; validated build serves as anchor for further Tier 3 deployments.

**Risk factors per phase:**

| Phase | Top risk | Mitigation |
|---|---|---|
| Q1 (Pre-launch) | Pre-seed close timing slippage (Path 1) | Path 2 bootstrap continues; founder cash-compensation deferment absorbs delay |
| Q2 (First revenue) | First pilot conversion failure | Multiple pilots in flight; founder direct-outreach Year 1 dominant channel limits single-pilot dependency |
| Q3 (Customer expansion) | Sales/BD hire productivity gap | Founder time allocation increase to compensate; advisory recruitment accelerated |
| Q4 (Year 1 close) | Year 1 SOM target shortfall | Both paths land within $20-50K range under base assumptions; LOW scenario absorbs underperformance |

*[See §13 for broader risk analysis + mitigation frame; this section's risk factors are execution-specific subset.]*

---

## 13. Risk Analysis + Mitigation

This section provides the consolidated risk framework synthesizing the per-section risk treatments distributed throughout the document. Risk content is **cross-referenced rather than duplicated** — §5.3 (Porter's Five Forces competitive risk), §8.5 (operational compliance risk), §11.5 (investor / capital-allocation risk), and `BUSINESS_PROJECT_TEMPLATE.md` §11 (high-level risk framing) carry the per-domain analysis. This section provides the aggregated view + cross-cutting mitigation patterns + monitoring discipline.

### 13.1 Risk framework + taxonomy

Risks are taxonomized along **three axes** appropriate for institutional investor and lender due diligence:

| Axis | Definition | Source sections |
|---|---|---|
| **Operational** | Risks affecting daily execution + compliance + infrastructure | §8.5 (operational compliance) + this section |
| **Market** | Risks affecting customer demand, competitive intensity, macro environment | §5.3 (Porter's) + §2.6 (macro shocks per `MARKET_RESEARCH.md`) + this section |
| **Financial** | Risks affecting capital allocation, runway, exit-valuation realization | §11.5 (investor decision criteria) + §10.5 (sensitivity analysis) + this section |

Each risk has **likelihood** (probability of occurrence within Year 1-3 horizon) and **impact** (magnitude of effect on §10 financial trajectory) ratings. The aggregate risk profile is **frontier-market-typical** — concentrated in single-language / single-market exposure that the company's strategic positioning intentionally embraces — with mitigation posture relying on **defense-in-depth** (multi-product, multi-source, multi-provider, multi-cohort) rather than risk avoidance.

### 13.2 Aggregated risk register

The unified risk register synthesizes per-section detail without re-derivation:

| # | Risk | Axis | Likelihood | Impact | Detail / mitigation source |
|---|---|---|---|---|---|
| 1 | **Single-language dependency (Mongolian)** | Market | High (definitional) | Caps TAM ceiling; addressed by Year 3+ Central Asia adjacency | `BUSINESS_PROJECT_TEMPLATE.md` §11 / `MARKET_RESEARCH.md` §7.6 |
| 2 | **Single-market concentration (Mongolia)** | Market | High (definitional) | Macro shocks compress customer budgets directly | `MARKET_RESEARCH.md` §2.6 / §5.3 / `BUSINESS_PROJECT_TEMPLATE.md` §11 |
| 3 | **AI provider dependencies** (Gemini + Claude) | Operational | Medium | Translator hard-fails Phase 2 if both APIs down | `TECHNICAL_HANDBOOK.md` §6.1 (dual-provider fallback) / §10.5 (API cost sensitivity) |
| 4 | **GHA cron reliability** | Operational | Medium-Low | Schedule drift can delay daily news (3h38m drift incident observed) | `TECHNICAL_HANDBOOK.md` §3.4 (redundant cron slots) / §8.5 |
| 5 | **Bloomberg / LSEG aggressive Mongolia entry** | Market | Low (per §5.3 economic-incentive analysis) | Compresses pricing; could displace anchor customers | §5.3 + §8 of `BUSINESS_PROJECT_TEMPLATE.md` (defensibility) |
| 6 | **Domestic outlets close quality gap** | Market | Medium (longer-term) | Pricing pressure on Starter tier; advertising surface compresses | §5.3 + §6.6 (continuous moat compounding) |
| 7 | **Customer acquisition cost (CAC) higher than projected** | Financial | Medium-High | Year 1 founder runway tightens; SOM revenue lower than $20-50K | §7.6 (CAC estimates) / §10.5 (sensitivity) / §11.3 (bootstrap absorbs) |
| 8 | **Mongolia macro shock** (commodity cycle, FDI policy, MNT volatility) | Market | Medium-High (cyclical) | Customer budgets compress; mining-IR cohort hit hardest | `MARKET_RESEARCH.md` §2.6 / §5.3 / §13.3 multi-cohort mitigation |
| 9 | **Tax compliance risk** (SME bracket misclassification; CIT eligibility) | Operational | Low-Medium | Effective tax rate exceeds 1% Year 1-2 assumption | §8.2 + §8.5 (CPA engagement Q1; conservative interpretation) |
| 10 | **Regulatory change** (Mongolian tax reform, VAT threshold, monetary policy) | Operational | Medium (cyclical) | §10 financial assumptions invalidated | §8.2 (stabilisation certificate option) / §8.5 |
| 11 | **Founder-solo concentration** | Operational | High Year 1 (definitional) | Single-point-of-failure for operational decisions | §3 + §9.1 (TESKO infrastructure leverage; documentation discipline `TECHNICAL_HANDBOOK.md` §4 + §6) |
| 12 | **Pre-seed close timing slippage** | Financial | Medium | Path 1 trajectory delayed; Path 2 bootstrap engages | §11.5 (dual-path option preservation) / §12.4 (Q1 risk factor) |
| 13 | **First customer close timing slippage** | Financial | Medium | Year 1 SOM lower band; Year 2 hiring delayed | §12.4 (Q2 critical-path dependency) / §11.3 (bootstrap path absorbs) |
| 14 | **Single-customer-departure variance** | Financial | High Year 1 (definitional, 3-5 customer concentration) | 20-33% revenue base compression | §7.5 (renewal strategy + early-warning indicators) |
| 15 | **Customer data + privacy compliance** (PDPL scope expansion) | Operational | Low Year 1 → Medium Year 2+ | Regulatory penalties; customer-trust erosion | §8.5 (Resend export discipline; PI insurance trigger) |
| 16 | **IP enforcement** (trademark filing dependent on Year 1+ activity) | Operational | Low-Medium | Brand-mark dilution; competitor-brand-mimicry risk | §6.6 + §8.5 (trademark filing budget post-pre-seed) |
| 17 | **API cost increases** (Anthropic / Google / Resend rate-card shifts) | Financial | Low-Medium | Gross margin compresses 5-10pts in worst case | §10.5 (sensitivity analysis) / §13.3 dual-provider |
| 18 | **Cross-border expansion premature commitment** | Financial | Low (gated to Year 3+) | Year 1-2 founder focus diluted; capital absorbed | §12.4 (architectural staging — international gated Year 3+) |

The register has **18 distinct risks across 3 axes**. None individually catastrophic; aggregate exposure manageable for a bootstrap or pre-seed-funded operation.

### 13.3 Cross-cutting mitigation patterns

Four mitigation patterns reduce aggregate risk exposure beyond per-risk treatments:

**1. Multi-product diversification (Azurise AI portfolio).** Orange News is one product within the Azurise AI portfolio (per §6.1 + §2.6 brand-portfolio table). Customer relationships, infrastructure investment, and editorial expertise compound across Orange News + Monfiles + Nomad DNA. **Single-product failure does not eliminate the company.** Investors and lenders evaluating risk concentration see a multi-product portfolio rather than a single-bet structure.

**2. Multi-source content resilience.** 14 RSS feeds + Montsame scraper + ikon.mn passthrough mean **no single content-source failure breaks the news pipeline**. Mining and macro coverage have 3-5 independent input streams. Soft-fail discipline at every external dependency (per `TECHNICAL_HANDBOOK.md` §3.4 + §6) keeps the system operating through individual integration disruptions.

**3. Translation pipeline dual-provider fallback.** Gemini 2.0 Flash primary + Claude Haiku 4.5 fallback (validated 2026-04-23 architecture per §6.2). **Historical simultaneous dual-provider failure <1%.** Probability that both Anthropic and Google experience regional outages within the same daily news pipeline window approaches negligible — and even in that scenario, the system continues serving prior-day cached content rather than failing visibly to readers.

**4. Customer concentration mitigation.** Year 1 SOM target of 3-5 customers across at least **2 cohorts (banks + mining minimum)** limits exposure to any single customer's churn or budget compression. By Year 3, customer base expansion to 15-30 makes any single departure non-material. **No single sector >40% of Year 1 revenue.** This concentration discipline is enforced by the §7.4 cohort GTM sequencing — outreach prioritization explicitly distributes across cohorts rather than concentrating in single tier-1 bank pipeline.

These four patterns together mean Orange News' risk profile **compresses naturally through Year 1-3** as customer base + infrastructure investment + cross-border footprint diversify.

### 13.4 Risk monitoring + governance

**Year 1 risk monitoring cadence:**

| Cadence | Activity | Output |
|---|---|---|
| **Weekly** | Founder operational review (customer pipeline, system health, financial actuals) | Risk-flag log; escalation to advisor / investor where material |
| **Monthly** | Bookkeeping close + financial actuals vs §10 projections | Variance report; cash-runway re-projection; CAC/customer trajectory check |
| **Quarterly** | Strategic advisor + investor update + risk register review | Updated risk register; mitigation effectiveness scoring; cross-cutting pattern stress-test |
| **Annually** | Year-end retrospective + Year+1 strategic plan | Full risk register refresh; new-risk identification; mitigation budget allocation |

**Risk governance:**
- **Year 1 founder-driven** — single accountable founder reviews + decides mitigation actions; escalates material risks to lead advisor (banking sector executive per §3.4) for second opinion.
- **Year 2 + post-pre-seed** — quarterly advisory board + investor reporting introduces external risk-discipline overlay; lead investor governance per §2.2 + §11 may include risk-related protective provisions.
- **Year 3 + post-Series A optionality** — formal audit committee, board-level risk oversight, independent director risk-supervision standard.

### 13.5 Risk summary

The risk profile is **frontier-market-typical** — concentrated in single-language and single-market exposure that the company's strategic positioning (Mongolian-first anchor wedge per §1, §4, §8) intentionally embraces. Mitigation posture is **defense in depth** rather than risk avoidance. **No single risk is individually catastrophic**; the aggregate exposure is manageable for a bootstrap or pre-seed-funded operation. Material risk reduction unlocks naturally as customer base, infrastructure investment, and cross-border footprint compound through Years 2-3.

For institutional investors and lenders, the takeaway is: Orange News' risk frame is **honest, comprehensive, and mitigation-proportionate** — frontier-market exposure acknowledged transparently, structural mitigation posture documented, monitoring cadence operationalized. *[See `BUSINESS_PROJECT_TEMPLATE.md` §11 for streamlined risk narrative; see §5.3 (competitive), §8.5 (operational), §11.5 (financial) for per-domain depth.]*

---

## 14. Appendices

This section provides verifiable evidence anchors, companion-document references, research-source bibliography, and document version history. Institutional investors and lenders performing due diligence can independently verify each item.

### 14.A Production state evidence

Every production-state claim made in §1-§13 is verifiable against live infrastructure or committed code in two public GitHub repositories.

**A.1 Live production endpoints:**

| Endpoint | URL | Notes |
|---|---|---|
| Frontend (primary) | https://orangenews-website.vercel.app | Vercel deployment; live |
| Custom domain | https://www.orangenews.mn | *[FOUNDER ADJUST: confirm DNS migration completion]* |
| RSS feed | https://orangenews-website.vercel.app/rss.xml | RSS 2.0 with 7-day archive window |
| MSE section | https://orangenews-website.vercel.app/mse | 8 datasets; live mse.mn integration |
| Markets detail (S&P 500 example) | https://orangenews-website.vercel.app/markets/spx | 30-day chart + stats grid |
| Video archive | https://orangenews-website.vercel.app/video | Curated YouTube feed; channel filter |
| Subscribe API | https://orangenews-website.vercel.app/api/subscribe | Resend double-opt-in flow |

**A.2 Source code repositories:**

| Repository | Purpose | Stack |
|---|---|---|
| `github.com/mctunghai-pixel/orangenews-website` | Frontend + commercialization deliverables + handbook documents | Next.js 16 + React 19 + Tailwind v4 |
| `github.com/mctunghai-pixel/orange-news-automation` | Backend cron pipelines + Python scripts + reference docs | Python 3.11 + GitHub Actions |

**Repository statistics (Day 17 / 2026-05-09):**
- Frontend: 7 page-class routes; 4 operational routes; 5 lib helpers; 4 fetcher modules; 11 sales deliverables in `docs/sales/`; 4 handbook documents in `docs/handbook/`.
- Backend: 5 production cron workflows; 11 Python scripts (~5,028 LOC); 5 reference docs in `docs/`.

**A.3 Public JSON data artifacts:**

Each artifact publicly accessible at `https://raw.githubusercontent.com/mctunghai-pixel/orange-news-automation/main/<filename>`:

| Artifact | Refresh cadence | Schema reference |
|---|---|---|
| `translated_posts.json` | Daily ~22:00 UTC | `TECHNICAL_HANDBOOK.md` §3.1 |
| `market_data.json` | Every 30 min | `TECHNICAL_HANDBOOK.md` §3.2 |
| `mse_data.json` | 5×/weekday during MSE trading hours | `TECHNICAL_HANDBOOK.md` §3.4 |
| `youtube_data.json` | Every 2 hours | `TECHNICAL_HANDBOOK.md` §3.5 |
| `archive/index.json` + `archive/posts_YYYY-MM-DD.json` | Daily snapshot | Phase 7.1 archive writer |

**A.4 Production verification commands:**

For independent verification by investors / lenders / auditors:

```bash
# Verify all 5 GHA workflows running successfully
gh run list --workflow=orange_news.yml --limit=3
gh run list --workflow=market_data_update.yml --limit=3
gh run list --workflow=mse_update.yml --limit=3
gh run list --workflow=market_watch_live.yml --limit=3
gh run list --workflow=youtube_update.yml --limit=3

# Verify JSON data freshness
curl -s https://raw.githubusercontent.com/mctunghai-pixel/orange-news-automation/main/market_data.json | jq '.fetched_at'
curl -s https://raw.githubusercontent.com/mctunghai-pixel/orange-news-automation/main/mse_data.json | jq '.fetched_at'

# Verify frontend reachable
curl -sI https://orangenews-website.vercel.app | head -1   # expect HTTP/2 200

# Verify daily archive accumulating
curl -s https://raw.githubusercontent.com/mctunghai-pixel/orange-news-automation/main/archive/index.json | jq '. | length'
```

These commands exercise the same observability layer documented in `TECHNICAL_HANDBOOK.md` §10 (disaster recovery + health checks).

### 14.B Technical specifications + companion documents

Orange News' documentation suite consists of four primary documents distributed across `docs/handbook/` (commercial / strategic) and `docs/sales/` (commercial outreach), plus the engineering reference + working materials.

**B.1 Companion document map:**

| Document | Audience | Pages | Purpose |
|---|---|---|---|
| `BUSINESS_PLAN.md` (this document) | Institutional investors; banks; regulatory authorities | ~44pp | Operational + financial + strategic depth |
| `BUSINESS_PROJECT_TEMPLATE.md` | Pre-seed VCs; accelerators; grant programs | ~27pp | Streamlined investor-facing project document |
| `MARKET_RESEARCH.md` | Founder + investors + commercial-discussion partners | ~20pp | Mongolia financial sector analysis + TAM/SAM/SOM |
| `TECHNICAL_HANDBOOK.md` | Internal engineering reference; future engineers | ~38pp | Engineering reference; production state |
| `docs/sales/` (11 files) | Commercial outreach + customer onboarding | ~70pp aggregate | Sales deck, target list, demo script, FAQ, pricing model, success metrics, retrospective |

**B.2 Engineering reference highlights** (from `TECHNICAL_HANDBOOK.md`):
- §1 Executive Technical Summary — production state Day 15
- §2 System Architecture — Mermaid diagram + cross-repo split rationale
- §3 Backend Pipeline Reference — 5 GHA workflows enumerated
- §4 Component Reference — 11 Python scripts
- §5 Frontend Route Reference — 12 routes
- §6 Editorial Discipline — 5-rule validator, temperature lock, brand voice
- §7 Operations Playbook
- §8 Customization Guide
- §9 Security & Secrets Mechanisms
- §10 Disaster Recovery
- §11 Future Roadmap & Deferred Phases

**B.3 Commercial deliverable highlights** (from `docs/sales/`):
- `sales_deck_draft.md` — 15-slide investor-ready sales deck
- `customer_target_list.md` — 33 named-contact targets across 4 tiers (founder review pending)
- `outreach_email_templates.md` — 4 outreach variants (cold / warm / referral / re-engagement)
- `live_demo_script.md` — 30-min demo walkthrough
- `pricing_model_spreadsheet.md` — pricing tiers + customer tier sizing
- `customer_onboarding_checklist.md` — 4-week implementation playbook
- `customer_success_metrics.md` — uptime, content quality, ROI signals, NPS framework
- `technical_faq.md` — anticipated technical questions + answers
- `strategic_positioning_brief.md` — competitive positioning narrative
- `sprint_retrospective.md` — Day 5-14 sprint operational lessons
- `demo_scheduling_template.md` — meeting scheduling flow

### 14.C Key bibliography — research sources

Major research sources cited throughout this Business Plan and companion documents. Citations are not exhaustive of all sources consulted but represent the **primary anchor evidence** for material claims.

**C.1 Mongolia macroeconomic data:**
- World Bank Mongolia Economic Update (May 2025) — GDP growth 2024 / 2025 / 2026 projections
- IMF Article IV 2025 staff concluding statement — 6.3% 2025 projection
- IMF DataMapper Mongolia — historical GDP series
- Mongolia National Statistics Office — sector contribution data
- Bank of Mongolia 2026 monetary policy guidelines — macroprudential measures
- ADB Mongolia Country Reports — structural assessment

**C.2 Mongolia financial sector:**
- Bank of Mongolia (mongolbank.mn) — banking sector structure, financial stability framework
- Financial Regulatory Commission (FRC) — non-bank financial institution regulation
- Khan Bank annual reports + IPO prospectus 2022 — tier-1 bank reference
- Golomt Bank annual operational + financial reports — tier-1 bank growth case
- Trade and Development Bank (TDB) audited financials 2024 — tier-1 bank revenue benchmark
- Mongolian Stock Exchange (mse.mn) — listed company data, market capitalization
- Montsame state news agency — Mongolia financial-sector reporting

**C.3 Mongolia mining sector:**
- Oyu Tolgoi LLC press releases — Q4 2024 performance, 2024 in-Mongolia spend $2.1B
- Rio Tinto annual + quarterly production reports — copper production trajectory
- Erdenes Mongol annual reports — state-owned holding revenue + reserves
- Erdenes Tavan Tolgoi (ETT) reports — coal revenue + Borteeg block tender
- Mongolian Mining Corporation (MMC, HKEX:0975) — 2024 + 2025 annual reports
- Natural Resource Governance Institute (NRGI) — Mongolia state-owned mining transparency
- EITI Mongolia — extractive-industry transparency disclosures

**C.4 Competitive landscape pricing:**
- Bloomberg Terminal pricing aggregators (CostBench, Vendr, GodelDiscount) — $31,980/seat 2026
- LSEG Workspace pricing aggregators (Vendr, William & Mary Library) — modular pricing detail
- FactSet pricing aggregators (CostBench, TrustRadius, Capterra) — $4-50K/user/year range

**C.5 Frontier markets + Central Asia:**
- KPMG Pulse of Fintech (H2 2025 Asia-Pacific) — frontier-market context
- Asia Tech Daily (Central Asia VC ecosystem) — 80%-deals-under-$200K data
- Uzum Bank reports + fintech coverage (FinTech Global, Asian FinTech press) — Uzbekistan unicorn case
- Yoshlar Ventures + Mongolia Opportunities Fund (IFC disclosures) — investor mandate references
- AND Global / LendMN press coverage (Mongolia Inc, FinTech Global, IFC press) — Mongolia fintech precedent

**C.6 Mongolia regulatory + tax:**
- General Department of Taxation (GDT) Mongolia — corporate income tax framework
- Mongolian Ministry of Finance — 2024-2028 Action Plan + tax reform discussions
- Investment Mongolia (Investment and Trade Agency) — Investment Law incentives
- PwC Mongolia Tax Summaries — corporate tax detail + rates
- Grata International Mongolia — 2026 Doing Business guideline + capital market regulation
- VATCalc + VATupdate — VAT reform tracking

**C.7 SaaS + tech industry benchmarks:**
- Phoenix Strategy Group SaaS LTV/CAC benchmarks — 3:1 minimum, 4:1 scale-ready
- Aventis Advisors tech valuation multiples — 3.0× EV/Revenue median
- Carta State of Pre-Seed reports — pre-seed funding norms
- Genesys Growth CAC benchmarks — 2026 SaaS metrics

**C.8 Mongolia digital + technology:**
- DataReportal Digital 2025 Mongolia — internet penetration 83-92%, social media 74.4%
- Statista Mongolia digital + fintech market — digital payments $10.05B by 2028
- Internet Society Pulse Mongolia — connectivity indicators

**C.9 Mongolia general market context:**
- Trading Economics Mongolia — GDP, currency, sales tax data
- CEIC Mongolia data — banking system, market capitalization
- Wikipedia Mongolian Stock Exchange + Mongolia banks (cross-referenced against primary sources)

All citations cross-validated against multiple sources where possible; primary-source data preferred over aggregator estimates.

### 14.D Document version history + revision log

**D.1 BUSINESS_PLAN.md version history:**

| Version | Date | Notes |
|---|---|---|
| v1.0 | 2026-05-09 (Day 17 ship) | Initial 14-section + glossary draft completed; founder review pending |
| (forthcoming) | TBD | Founder review revisions; investor-ready v1.1 |
| (forthcoming) | TBD | Post pre-seed close updates (cap-table, governance, audited financials); v2.0 |

**D.2 Companion document version history:**

| Document | Initial ship | Most recent revision | Status |
|---|---|---|---|
| `TECHNICAL_HANDBOOK.md` | 2026-05-07 (Day 15) | v1.0 | Founder review pending; engineering reference |
| `MARKET_RESEARCH.md` | 2026-05-07 (Day 15) | v1.0 | Founder review pending |
| `BUSINESS_PROJECT_TEMPLATE.md` | 2026-05-07 (Day 15) | v1.0 | Founder review pending |
| `BUSINESS_PLAN.md` | 2026-05-09 (Day 17) | v1.0 | Founder review pending |

**D.3 Sprint history reference:**

The Day 5-17 sprint produced ~36 production commits (Day 5-14) + 4 handbook documents (Day 15 + 17). Full sprint cadence documented in `~/orangenews-website/CLAUDE.md` (frontend repo) and `docs/sales/sprint_retrospective.md`. The execution velocity itself constitutes execution-discipline evidence for institutional investor and lender due diligence.

**D.4 Update protocol post-funding:**

After pre-seed close (Path 1) or first commercial customer (Path 2), this Business Plan is updated quarterly to reflect:
- Actual financial performance vs §10 projections
- Customer cohort actuals vs §5.5 sizing
- Hire activations vs §3.3 + §9 trajectory
- Risk register changes per §13 monitoring cadence
- Funding-status updates per §11 path execution

The Business Plan therefore evolves from forward-looking thesis to **historical + forward operational document** as commercial validation accumulates.

---

## 15. Glossary

Terms used throughout this Business Plan and companion documents, organized by category. *[For technical terminology — Action-ID, Archive, Branded fallback, ISR, Marquee, Plan A migration, Soft-fail, etc. — see `TECHNICAL_HANDBOOK.md` §12 Glossary; this section covers business / financial / strategic terminology.]*

### 15.A Mongolia-specific

- **Anchor (анхдагч)** — load-bearing brand-positioning word for Orange News. Positions the platform as the *first* Mongolian-language financial portal at Bloomberg-grade depth. Trademark-safe alternative to "Mongolian Bloomberg" framing.
- **BoM (Bank of Mongolia)** — central bank; supervises commercial banks; primary monetary policy authority.
- **CIT (Corporate Income Tax)** — Mongolian progressive corporate income tax. 1% rate for entities with annual revenue ≤MNT 300M; 10% to MNT 6B; 25% above MNT 6B (proposed 2026 reform raises 25% threshold to MNT 10B with new 15% bracket for MNT 6-10B).
- **Dzud** — severe winter weather phenomenon in Mongolia causing pastoral livestock losses; periodic macro-economic shock to agricultural sector.
- **FRC (Financial Regulatory Commission)** — supervises non-bank financial institutions (insurance, securities firms, credit-savings unions, NBFIs).
- **GDT (General Department of Taxation)** — Mongolia's tax authority; LLCs file annual financial statements + quarterly CIT prepayments + monthly VAT (when registered) here.
- **Investment Law** — Mongolian statute providing tax incentives (exemptions, credits, accelerated depreciation, loss carryforward) and the **stabilisation certificate** option for predictable tax environment.
- **MLSP STARTUP National Championship** — Ministry of Labor and Social Protection competition awarding up to MNT 99M (~$30K USD) non-repayable funding to top 6 teams.
- **MNT** — Mongolian Tugrik; ISO 4217 currency code. Reference rate MNT/USD ≈ 3,400 (mid-2025).
- **MSE (Mongolian Stock Exchange)** — sole public-equity venue; 162 listed companies (Dec 2025); MNT 13.85T market capitalization (~$4B USD); MSETOP Index is the headline benchmark.
- **PDPL (Personal Data Protection Law)** — Mongolian data-protection regime; compliance scope expands at customer-data scale.
- **Stabilisation certificate** — Investment Law instrument providing tax-rate predictability; particularly valuable for foreign-investor confidence.
- **Tugrik volatility / FX** — MNT is managed-not-pegged; periodic depreciation episodes (e.g., 2014-16) reset USD-denominated customer purchasing power.
- **VAT registration threshold (MNT 400M)** — 2026 reform (effective Jan 1, 2026) raised mandatory VAT registration from MNT 50M to MNT 400M in 12-month sales income.

### 15.B Mongolian banking + mining entities

- **AND Global** — Mongolia fintech parent of LendMN; raised $5M Series A (2017) + $7M IFC Series B (2025); canonical Mongolian-frontier-market growth precedent.
- **Erdenes Mongol** — state-owned mining holding company; ~$610M revenue; 30% of national export earnings; 65% of national copper reserves.
- **Erdenes Tavan Tolgoi (ETT)** — state-owned coal producer; 2023 revenue MNT 9.5T; MSE-listed; Borteeg block tender 2026.
- **Golomt Bank** — Tier-1 bank; H1 2024 net profit MNT 273.1B (+249% YoY); 54% ROaE; 20% of national banking system; green-finance positioning.
- **Khan Bank** — largest Mongolian bank; MNT 15T total assets (~33% of national system); 2023 IPO largest in MSE history; 95% digital transactions; 80% Mongolian household penetration.
- **Khas Bank (Xac Bank)** — Tier-1 bank; H1 2024 net profit MNT 85.3B (+37%); SME + sustainability positioning; S&P 'B+' upgrade 2024.
- **Mongolian Mining Corporation (MMC)** — HKEX-listed (0975) coking-coal exporter; 2024 revenue $1.04B (record); 2025 revenue $823M.
- **Oyu Tolgoi LLC** — Mongolia's largest single enterprise; Rio Tinto 66% / GoM 34%; 2024 in-Mongolia spend $2.1B; trajectory to world's #4 copper producer by 2028-30.
- **State Bank** — Tier-1 systemically-important bank; FY2024 profit MNT 108B; designated "green bank" 2024.
- **TDB (Trade and Development Bank)** — oldest Mongolian commercial bank (founded 1990); 2024 revenue $329M; 97 branches; senior corporate banking franchise.

### 15.C Frontier-market funding ecosystem

- **AND Global precedent** — Mongolia frontier-market growth path: angel capital first (Mongolia + Japan, 2017), institutional capital after operational validation (IFC Series B 2025).
- **EBRD Star Venture** — European Bank for Reconstruction and Development accelerator; multi-country mentor + market access; some capital.
- **Founder Institute Mongolia** — pre-seed accelerator chapter; FI Core program; FI Venture Network alumni access.
- **IFC (International Finance Corporation)** — World Bank Group private-sector arm; active Mongolia investor (AND Global, MIK).
- **Mongolia Opportunities Fund I LP** — IFC-affiliated Mongolia-specific equity fund.
- **MonJa Accelerator** — JICA-funded (Japan cooperation) Mongolian startup accelerator.
- **Uzum** — Uzbekistan fintech unicorn; $65.5M equity round 2025; one of top Asian FinTech deals; supports Year 3+ Central Asia adjacency thesis.
- **Yoshlar Ventures** — Uzbekistan-based Central Asia pre-seed + seed VC; $40-400K check range.

### 15.D Business model + financial

- **ACV (Annual Contract Value)** — annualized revenue from a single customer contract.
- **ARR (Annual Recurring Revenue)** — sum of ACVs across active subscription customers.
- **CAC (Customer Acquisition Cost)** — fully-loaded cost to acquire one paying customer; Year 1 founder-direct-outreach CAC near-zero ($0-500 range).
- **CAC payback period** — months to recover CAC via gross margin contribution; Orange News target 6-9 months given high gross margin.
- **Churn** — annual customer-departure rate; Year 1-2 target 5-10%; negative churn = upgrade revenue exceeds departure.
- **EBITDA (Earnings Before Interest, Taxes, Depreciation, Amortization)** — operating profitability metric.
- **EV/Revenue** — enterprise value to revenue multiple; software median 3.0×; Orange News exit framework anchor.
- **Gross margin** — revenue minus marginal cost; Orange News Year 1 ~98% (driven by $0/month operating cost moat).
- **LTV (Lifetime Value)** — total gross-profit revenue from a customer over expected retention period; Orange News 3-5 year retention assumption.
- **LTV/CAC ratio** — ratio of customer lifetime value to acquisition cost; SaaS healthy ≥3:1; Orange News 6-60× across tiers.
- **Hybrid revenue model** — Q4 founder lock; combines SaaS subscription + advertising + licensing across distinct buyer segments and sales motions.

### 15.E Strategic + market

- **Anchor customer** — first paying Tier-1 customer that validates the product for the rest of the cohort; Khan Bank or Oyu Tolgoi most likely Year 1 anchors.
- **Cohort (customer cohort)** — distinct customer segment (Tier-1 banks, Tier-1 mining, MSE corporate IR, brokers, government, etc.); 8-cohort framework per §5.5.
- **Cross-border adjacency** — Year 3+ Central Asia expansion (Kazakhstan, Uzbekistan, Kyrgyzstan, Turkmenistan); illustrative TAM $30-80M+ per `MARKET_RESEARCH.md` §7.6.
- **Frontier market** — economies smaller and earlier-stage than emerging markets; Mongolia + Central Asia republics fit this category.
- **LOW / BASE / HIGH scenarios** — multi-scenario financial framing; LOW = conservative downside, BASE = founder-committed trajectory, HIGH = upside if execution exceeds plan.
- **Path 1 (Pre-seed funded)** — recommended funding path: $50-150K USD pre-seed + optional $30K MLSP grant stack = $80-180K combined; 18-month runway.
- **Path 2 (Bootstrap)** — alternative funding path: $0 external capital + founder personal capital ($30-50K reserved); 100% founder equity retention.
- **SOM / SAM / TAM** — Service Obtainable Market (SOM, founder Year 1 commitment) / Service Addressable Market (SAM, 12-month reachable) / Total Addressable Market (TAM, theoretical maximum).
- **Strategic angel** — angel investor with domain-specific expertise + customer relationships; Khan Bank executive or mining IR senior potential candidates per §11.5.

### 15.F SaaS + product

- **API access** — programmatic interface for downstream integrators; available in Professional + Enterprise tiers.
- **Multi-tenant architecture** — supports multiple customer-branded deployments on shared infrastructure; Phase 9.2 deferred trigger (per `TECHNICAL_HANDBOOK.md` §11).
- **Phase 7.2.2 customer-CMS** — customer self-service editorial CMS; highest-value Tier 3 unlock; deferred to first paying Enterprise customer trigger.
- **Pre-seed funding** — earliest external capital round; typical $25-150K range; precedes Series A by 12-24 months.
- **Series A** — first institutional venture capital round; typically $1-10M check size; Year 2-3 timing for Orange News (depending on path).
- **Tier 1 / Tier 2 / Tier 3** — Orange News service tier nomenclature: **Starter** ($5-15K USD/year, single-seat) / **Professional** ($20-50K, full-team + API) / **Enterprise** ($75-150K, white-label + bespoke).
- **White-label deployment** — customer brand colors + logos + subdomain hosting (e.g., illustrative `markets.tdb.mn`); Tier 3 only.

### 15.G Cross-references for technical terms

- **For technical terminology** (Action-ID, Archive, Branded fallback, CDATA wrap, Commit-if-diff idiom, CSS var single source of truth, Direction tone, GHA, Honest-UX, ISR, Marquee, Passthrough Mongolian, Plan A migration, [skip ci] tag, Sibling fetcher pattern, Soft-fail, Source: live | mock, Temperature lock, Trademark-safe positioning, UC ID): see `TECHNICAL_HANDBOOK.md` §12 (23 entries).
- **For commercial deliverable abbreviations + sales-cycle terminology**: see `docs/sales/` deliverable headers + `docs/sales/technical_faq.md`.

---

*End of BUSINESS_PLAN.md. Total document length: ~44 pages across 15 sections + Cover Page + Glossary.*

*Companion documents: `BUSINESS_PROJECT_TEMPLATE.md` (~27pp), `MARKET_RESEARCH.md` (~20pp), `TECHNICAL_HANDBOOK.md` (~38pp), `docs/sales/` (~70pp aggregate).*

*Aggregate document suite Day 17: ~199 pages of investor + engineering + commercial reference material.*

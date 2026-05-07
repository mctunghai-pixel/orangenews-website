# Orange News — Market Research

**Audience:** founder + investors + commercial-discussion partners. Companion to `TECHNICAL_HANDBOOK.md` (engineering reference) and `docs/sales/` (commercial deliverables).
**Scope:** Mongolia financial information market; tier-1 customer profiles (banks + mining); competitive landscape (Bloomberg, LSEG, FactSet); pricing scenarios as ranges; TAM / SAM / SOM sizing; strategic positioning + risks.
**Methodology:** publicly reported revenue data, industry-standard benchmarks, government statistics, mining company annual reports. Pricing scenarios derive from international benchmark anchors (Bloomberg / LSEG / FactSet) — they are *ranges*, not commitments. Customer-facing pricing will be validated during the founder's planned 3–5-customer discovery in months 1–6.
**Currency notes:** MNT figures shown alongside USD where possible; reference rate MNT/USD ≈ 3,400 (mid-2025). Mongolia macro figures cite 2024 actuals + 2025 IMF projection unless noted.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Mongolia Macro Context](#2-mongolia-macro-context)
3. [Target Market — Tier-1 Banks](#3-target-market--tier-1-banks)
4. [Target Market — Tier-1 Mining Corporations](#4-target-market--tier-1-mining-corporations)
5. [Competitive Landscape](#5-competitive-landscape)
6. [Pricing Scenarios](#6-pricing-scenarios)
7. [Market Sizing — TAM / SAM / SOM](#7-market-sizing--tam--sam--som)
8. [Strategic Positioning + Risk Factors](#8-strategic-positioning--risk-factors)

---

## 1. Executive Summary

### 1.1 The Mongolia financial information market in one paragraph

Mongolia operates a $23.6B economy (2024) with two structural concentrations that define its financial-information demand: a banking system where 100% of assets sit with five systemically-important institutions (Khan, Golomt, TDB, Khas, State Bank — combined H1 2024 net income MNT 867.8B, ~$255M USD), and a mining sector that contributes the majority of export earnings, anchored by Oyu Tolgoi (Rio Tinto majority-owned, $2.1B 2024 in-Mongolia spend), Erdenes Mongol (state-owned holding company, 30% of national export earnings), Erdenes Tavan Tolgoi (2023 revenue MNT 9.5T), and Mongolian Mining Corporation (HKEX:0975, 2024 revenue $1.04B). Beneath these are 162 MSE-listed companies (Dec 2025), institutional brokers, asset managers, and a growing FDI advisor cohort. Each of these constituencies needs Mongolian-language financial information at a depth that does not currently exist.

### 1.2 The wedge

International incumbents — Bloomberg Terminal ($31,980/seat/year list, $18-22K enterprise), LSEG Workspace (~$22K/user/year base + entitlements; mid-market deployments $150-400K ACV), FactSet ($4-50K/user/year) — serve the global English-language market and cover Mongolia thinly. Mongolia-specific information requires Cyrillic editorial fluency, MSE microstructure depth, mining-domain context, and FDI/regulatory nuance that international platforms structurally cannot prioritize at Mongolia's market scale. Orange News' wedge is to build the *anchor* Mongolian-first financial information layer at Bloomberg-grade information design — positioning that is defensible because the editorial moat (Cyrillic typography, MSE integration, mining-domain depth) compounds over time and is not replicable by translation alone.

### 1.3 Sizing summary (detailed in §7)

- **TAM (dual view, per industry-standard investor-memo practice):**
  - **Direct-addressable TAM:** **$1.4M-7.3M USD/year** (bottom-up, conservative — derived in §7.1 from per-cohort ACV × customer-pool count).
  - **Fully-expanded TAM:** **$8-15M USD/year** (top-down, incl. advertising at mature reader scale + downstream licensing + cross-border Mongolian-coverage demand from international platforms).
  - Both views are honest; the difference is what gets counted as "Mongolia." Investor framing leads with the bottom-up direct-addressable; the fully-expanded figure is the addressable-extension upper bound.
- **SAM** (reachable in 12-month window with current product): **$100K-285K USD/year** — tier-1 banks (5) + tier-1 mining (3-4 entities) + MSE corporate IR + brokers + government IR (with longer cycle). Detailed in §7.3.
- **SOM** (founder's stated 6-12 month target): **3-5 paying customers**, **$20-50K Year 1 revenue** combined (conservative) — calibrated to bootstrap or pre-seed funding posture rather than to maximum addressable revenue.

### 1.4 Revenue model

Per the founder's commercial framing, Orange News pursues a **hybrid revenue model**: SaaS subscription (tier-1 customers, predictable ARR), advertising (display + sponsored content, scales with reader base), and licensing (data feeds, custom integrations, white-label content for tier-1 institutions). The mix is intentionally diversified — no single revenue line carries the business through Year 1, and each line addresses a distinct customer segment (institutions / brand advertisers / data consumers) with a distinct sales motion.

### 1.5 Strategic ambition

Year 1: Mongolia-leader by editorial depth + tier-1 customer count. Year 2-3: regional adjacency expansion to Central Asia (Kazakhstan, Uzbekistan, Kyrgyzstan, Turkmenistan) where the same gap — international platforms underserving local-language financial information at Bloomberg-grade depth — repeats. The Mongolia-built infrastructure (Cyrillic typography pipeline, MSE-style direct-exchange integrations, mining-domain depth) ports to those markets at marginal cost.

### 1.6 What this document is and isn't

**Is:** an honest, externally-sourced view of the Mongolia financial information opportunity, sized conservatively, with pricing scenarios derived from international benchmarks and explicit ranges (not commitments).

**Isn't:** a sales document. Customer-facing pricing pages, target customer lists with named contacts, outreach templates, and demo materials all live in `docs/sales/` (separate scope, audience, and confidentiality posture). Founder bio, capitalization plan, and operational milestones live in `BUSINESS_PROJECT_TEMPLATE.md` + `BUSINESS_PLAN.md` (separate documents drafted after this one).

### 1.7 Source quality + caveats

Every numeric claim in this document is sourced from one of: published bank operational reports (filed via MSE), mining company annual reports (most listed on HKEX or LSE), Mongolia's National Statistics Office, World Bank Mongolia Economic Update, IMF Article IV reports, vendor pricing pages or third-party pricing aggregators (FactSet, Bloomberg, LSEG benchmarks). Where data was not publicly accessible (State Bank H2 2024 detail, MSE 2026 listed-company current count, Mongolia financial-sector-% of GDP overall), the document either uses the closest proxy (e.g., credit-to-GDP ratio for financial sector depth) and flags the limitation, or omits the claim entirely.

**Key data limitations to flag for any reader:**
- Mongolia financial-sector contribution as a % of GDP is not directly published; we use credit-to-private-sector ratio (41% of GDP, 2022, World Bank) as a partial proxy in §2.
- MSE listed-company count: 162 (Dec 2025) is the most recent figure surfaced; 2026 mid-year figure not yet published.
- IR-budget data for Mongolian mining corporations is not publicly disclosed; §4 derives an estimated range from international peer-IR-spend benchmarks adjusted for company size.

---

## 2. Mongolia Macro Context

This section establishes the macroeconomic envelope inside which Orange News' addressable market sits. The thesis is straightforward: Mongolia is a small, mining-anchored economy with concentrated financial institutions and outsize information demand per capita relative to GDP. Each of those four properties shapes the customer pool we serve.

### 2.1 GDP, growth, and trajectory

| Year | Real GDP growth | Nominal GDP (USD) | Source |
|---|---|---|---|
| 2024 | **+5.0%** | **$23.59B** | World Bank Mongolia Economic Update Nov 2024; trading-economics |
| 2025 (proj) | **+6.3%** | ~$25-26B (estimate) | IMF Article IV 2025 staff concluding statement |
| 2026 (early signal) | TBD | TBD | 2025 H1 commodity correction noted (coal export receipts declining sharply) |

Growth is **mining-led**. The 2025 acceleration reflects the Oyu Tolgoi underground ramp-up — the project is on trajectory to become the world's fourth-largest copper mine by 2028-30. Services (hospitality, banking, fintech) have grown alongside but contribute less to the headline figure. Agriculture contracted sharply in 2024 due to a severe winter (*dzud*) — a recurring climate risk that periodically resets pastoral output and the rural transfer economy.

### 2.2 Mining as the structural anchor

Mongolia's macro fortunes are dominated by **copper, coal, and gold**. The mining sector contributes roughly 25% of GDP and ~85-90% of export earnings (consistent across multiple recent years). The single largest project is Oyu Tolgoi — Rio Tinto 66% / Government of Mongolia 34% — which spent **$2.1B in Mongolia in 2024** alone, with cumulative 2010-2024 contributions totaling **$4.8B**. Coal flow to China (the dominant export market) drove 2022-24 commodity-cycle revenues; **2025 H1 saw a sharp decline in coal export receipts** as Chinese demand softened, signaling the cyclical risk built into the macro story.

For an information business, mining concentration cuts two ways: **enterprise customers in mining IR roles need deep, real-time information on Mongolia regulation, FDI policy, commodity pricing, and labor disputes** (a tailwind for our product), while macro sensitivity to a single commodity cycle creates revenue-volatility exposure for any customer reliant on mining royalty flows (a tailwind for diversifying the customer book beyond pure-mining).

### 2.3 Banking depth and concentration

Mongolia's banking system is structurally concentrated:

- **13 commercial banks** operate (2023 figure; some consolidation underway).
- **5 systemically-important banks** hold **100% of system assets** per FRED's 5-bank concentration metric.
- The **top 3** (Khan, Golomt, TDB) hold **~80% of system assets** per World Bank (Dec 2024).
- Total commercial bank assets reached **MNT 70 trillion (~$20.6B USD)** as of March 2025, up from MNT 66.5T the prior month — the system is growing at ~5% MoM in nominal terms in early 2025.

**Credit-to-GDP ratio:** Credit to the private sector fell from **60% of GDP in 2013** to **41% in 2022** (World Bank). This is the closest publicly-published proxy for "financial sector depth" since Mongolia's National Statistics Office does not publish a direct financial-sector-% of GDP series. The decline reflects post-2013 deleveraging following the 2010-13 commodity boom; it suggests headroom for credit expansion in the next cycle and corresponding demand for credit-quality information among bank treasury and lending teams.

### 2.4 Capital markets — the MSE

The Mongolian Stock Exchange (MSE) is the country's only public-equity venue:

- **162 listed companies** as of Dec 2025 (down from 180 in Sept 2022, 218 in Feb 2019 — a structural decline reflecting delistings and consolidation, not new listings).
- **Market capitalization MNT 13.85 trillion (~$4B USD)** at end-2025; March 2026 figure MNT 13.67T (slight decline). Market cap to GDP ≈ 17% — small by international standards but meaningful for the institutional brokers and asset managers operating on Mongolian equities.
- **2025 total securities trading volume MNT 906.3B (~$267M USD).**
- The MSE TOP-20 index (Bloomberg ticker `MSETOP:IND`) is the headline benchmark.

The MSE is a **net niche market** at global scale but a **non-niche audience** for the institutional buy-side and sell-side operating on Mongolian equities. Information depth on MSE constituents — earnings, board changes, insider transactions, listing rule changes — is exactly the type of editorial product Orange News' `/mse` route is positioned to deliver.

### 2.5 FDI and foreign capital flows

Foreign direct investment in Mongolia has historically tracked the mining sector — Rio Tinto / Turquoise Hill / Oyu Tolgoi inflows in the 2010s being the canonical example. Post-2013 deleveraging plus regulatory friction caused FDI to soften; recent IMF and World Bank guidance has emphasized FDI policy as a critical near-term lever for sustainable growth. Each step in this policy debate (mining tax reform, Oyu Tolgoi loan amendments, sovereign mineral fund proposals) creates information demand among **Mongolia-focused law firms, FDI advisors, sovereign-fund operators, and consulate commercial-attaché desks** — a mid-market customer segment beyond the tier-1 institutions but still addressable.

### 2.6 Macro risks for an information business

Three macro risks bear on Orange News' addressable market sizing:

1. **Single-commodity cycle exposure.** Coal price softness in 2025 H1 is a leading indicator. If 2026 coal export revenue declines materially, mining-IR budgets (already non-disclosed and modeled from peer benchmarks in §4) compress.
2. **Currency volatility.** MNT/USD is managed but not pegged; episodes of sharp depreciation (2014-16) reset USD-denominated customer purchasing power. Pricing scenarios in §6 are anchored in USD with explicit MNT translation to mitigate this for the customer.
3. **Regulatory / political reset.** Periodic mining-tax debates, sovereign mineral fund proposals, and Oyu Tolgoi-related disputes create episodic policy uncertainty that drives information demand in the short term but can suppress FDI investment activity (and downstream advisory budgets) in the medium term.

All three risks are demand-side, not supply-side. They shift the *level* of revenue Orange News can earn but not the structural fit of the product to the market.

---

## 3. Target Market — Tier-1 Banks

The five systemically-important banks together hold 100% of system assets per FRED concentration metrics. They are the most concentrated, highest-budgeted, most-decision-rich customer segment in Mongolia's financial information market. This section profiles each, then aggregates the information-needs hypothesis and willingness-to-pay anchors.

### 3.0 Systemically-important banks at a glance

| Bank | H1 2024 net profit | YoY change | Total assets (latest) | Notable position |
|---|---|---|---|---|
| Khan Bank | **MNT 290.4B** | n/a (post-IPO baseline) | **MNT 15.0T** (Dec 2022) | Largest by assets; ~1/3 of national banking sector |
| Golomt Bank | **MNT 273.1B** | **+249.1%** | **MNT 12.4T** (~20% of system) | Highest ROaE (54%); customer funds 19% of system |
| TDB | **MNT 174.1B** | **+89%** | (private) | 2024 full-year revenue $329.1M; 97 branches; founded 1990 (oldest) |
| Khas Bank | **MNT 85.3B** | **+37.2%** | (private) | Tier-1 systemically-important; sustainability-aligned positioning |
| State Bank | **MNT 44.8B** | **+6.3%** | (private) | 2024 full-year profit MNT 108B; designated "green bank" 2024 |
| **Combined H1 2024** | **MNT 867.8B (~$255M USD)** | **+58.7% YoY** | | Shared system context: 13 commercial banks total, 100% asset concentration in top 5 |

### 3.1 Khan Bank — the asset-leader

Khan Bank holds the largest balance sheet in Mongolia's banking sector — MNT 15.0 trillion in total assets at end-2022 (the most recent fully-public datapoint), representing approximately one-third of the national banking system. The 2023 IPO raised MNT 183.4B by issuing 191,219,800 shares (10% of total shares) at MNT 959/share — the largest IPO in MSE history.

- **H1 2024 net income MNT 290.4B** — leading the systemically-important cohort.
- **Loan portfolio MNT 8.0T** (Dec 2022, up from MNT 7.0T in Dec 2021).
- **Customer funds MNT 13.3T** (Dec 2022).
- **Total net profit 2022: MNT 449B** — the highest figure in Mongolia's banking system at that time.

For Orange News, Khan Bank is the canonical "tier-1 anchor customer" — large enough that information spend is real, IPO-listed so MSE coverage is directly relevant, and visible enough that landing them validates the product for the rest of the market.

### 3.2 Golomt Bank — the growth-leader

Golomt Bank delivered the highest H1 2024 growth rate among the cohort — **net profits 2.4× year-on-year to MNT 275.8B**, **annualised ROaE 54%**. Total assets reached MNT 12.4 trillion (~20% of the banking system); customer funds MNT 8.3 trillion (~19%). The bank has positioned around **green finance**: green loan portfolio surpassed MNT 192B at H1 2024, with 38% in sustainable agriculture and 50% in energy-efficient buildings/equipment.

Golomt's editorial coverage need is differentiated by its sustainability lens — sustainable-agriculture sector flows, energy-efficiency policy, green-bond standards — alongside the standard banking-sector demand.

### 3.3 TDB — the legacy institution

Trade and Development Bank is the **oldest commercial bank in Mongolia** (founded October 1990). It operates 97 branches nationally and is one of the most internationally-connected institutions, holding the "Mongolia's Best Transaction Bank 2025" award per Euromoney.

- **2024 revenue: $329.1M USD.**
- **2024 ROE: +21.7%** YoY improvement.
- **H1 2024 net profit: MNT 174.1B** (+89% YoY).
- **Loan portfolio growth driven by:** mining, trade, construction, manufacturing, consumer.

TDB's positioning as the senior corporate-banking institution makes it the highest-priority customer for Orange News content covering large mining transactions, trade-finance flows, and Oyu Tolgoi-adjacent corporate developments.

### 3.4 Khas Bank (Xac Bank) — the SME / sustainability play

Khas Bank reported **H1 2024 net profit MNT 85.3B** (+37.2% YoY) — fourth among the systemically-important cohort. Khas has historically positioned around SME finance and has recent ratings tailwinds — S&P Global upgraded the bank to **'B+'** during 2024 alongside another Mongolian peer ("on improved economic conditions" per the upgrade rationale).

Khas's editorial coverage need overlaps with Khan/Golomt/TDB on macro and MSE coverage, with additional weight on **SME-sector trends, microfinance regulation, and rural lending policy**.

### 3.5 State Bank — the policy-aligned institution

State Bank earned **MNT 44.8B after-tax in H1 2024** (+6.3% YoY) and **MNT 108B** for full-year 2024. Per its CEO's 2024 interview with Global Banking & Finance, the bank achieved 100-130% completion across its annual plan objectives. In 2024 the Government of Mongolia designated State Bank as a **"green bank"** — a strategic mandate to channel capital into sustainable development priorities.

State Bank's information demand profile leans toward **government policy, sustainable finance regulation, mining-state-revenue flows, and FDI policy** — a different mix from the private-sector-driven cohort.

### 3.6 Customer information-needs hypothesis

Across the five tier-1 banks, four information categories drive recurring demand. Orange News' product covers all four:

| Demand category | What banks need | Orange News fit |
|---|---|---|
| **Domestic real-time financial news (Mongolian)** | Mongolian-Cyrillic editorial covering local news as it breaks | Daily news pipeline + Montsame + ikon.mn integration (§3 of TECHNICAL_HANDBOOK) |
| **MSE depth (TOP-20, sector breakdowns, listed-company filings)** | Editorial-grade tracking of the 162 MSE listings, especially the bank's own tradeable issuance and that of major mining counterparties | `/mse` route with 8 datasets live (§5.6 of TECHNICAL_HANDBOOK) |
| **Global financial context (FX, indices, commodities)** | Bloomberg-grade global market data wrapped in Mongolian-language framing | Live market data refresh every 30 min; ticker bar + `/markets/[ticker]` detail |
| **Mining + FDI domain context** | Deep coverage of Oyu Tolgoi developments, mining tax debates, FDI policy, regulatory updates | Phase 6.3 (mining + FDI tagging) + existing daily news mining coverage |

A treasury team at Khan Bank consuming this stack today would replace ~30-50% of what they currently get from international news subscriptions (FT, WSJ) plus all of what they currently lose in translation (no current Mongolian-language Bloomberg-grade product exists). The substitution math is the heart of the willingness-to-pay anchor.

### 3.7 Willingness-to-pay anchors

Two reference points anchor what tier-1 banks already pay for analogous information today:

- **International incumbents** (Bloomberg Terminal, LSEG Workspace, FactSet — full pricing in §5): a single Bloomberg seat costs **$31,980/year**, with enterprise pricing $18-22K/user/year. Larger Mongolian banks operate ~3-10 Bloomberg-equivalent seats — **annual information spend per tier-1 bank in the $50K-200K USD range** at international list pricing.
- **Domestic substitutes**: minimal. There is no Mongolian-language Bloomberg-grade competitor today. The closest substitute is bundling international subscriptions + bilingual analyst headcount, which costs 2-3× the seat-license total once analyst time is loaded.

Orange News' pricing scenarios (§6) anchor against these benchmarks but **price below international list at substantially lower fully-loaded cost** — the value proposition is "Mongolian-first depth international platforms can't match, at sub-Bloomberg pricing." Specific tier ranges in §6.

---

## 4. Target Market — Tier-1 Mining Corporations

Mongolia's mining sector is the structural anchor of the economy (§2.2). Within it, four entities dominate the tier-1 customer pool: **Oyu Tolgoi LLC** (the global-scale copper megaproject), **Erdenes Mongol** (the state-owned holding company), **Erdenes Tavan Tolgoi** (coal), and **Mongolian Mining Corporation** (Hong Kong-listed coking-coal exporter). Beyond these are 10-15 mid-tier mining and metals companies that comprise the SAM extension. This section profiles the tier-1 entities, then sketches the IR-budget proxy reasoning that anchors information-spend estimates.

### 4.0 Tier-1 mining at a glance

| Entity | Ownership | Recent revenue | Commodity | Listed |
|---|---|---|---|---|
| **Oyu Tolgoi LLC** | Rio Tinto 66% / GoM 34% | 2024 in-Mongolia spend $2.1B; cumulative 2010-24 $4.8B | Copper + gold | (parent: Rio Tinto NYSE/LSE/ASX) |
| **Erdenes Mongol LLC** | State-owned holding | ~$610M (recent) | Multi (copper, coal, gold, uranium) | Not listed; holding-company structure |
| **Erdenes Tavan Tolgoi (ETT)** | State-owned | 2023 revenue MNT 9.5T (~$2.8B); 2023 net profit MNT 3.5T | Coal (coking + thermal) | MSE-listed |
| **Mongolian Mining Corp (MMC)** | Public | 2024 revenue $1,039.9M (record); 2025 revenue $823.4M | Hard coking coal + gold/metals | HKEX:0975 |
| **Erdenet Mining Corporation** | State majority | (private; large-scale operation) | Copper concentrate | Not listed |

### 4.1 Oyu Tolgoi LLC — the megaproject

Oyu Tolgoi is the single largest enterprise in Mongolia and arguably the highest-impact single mining project in Asia outside China. Rio Tinto holds 66% via Turquoise Hill Resources (now wholly-owned subsidiary); Mongolia's government holds 34%. The mine is in the underground ramp-up phase that will see it become **the world's fourth-largest copper producer** at peak (2028-30, ~500kt/year).

- **2024 mined copper production: 697kt (+13% YoY consolidated basis).**
- **2024 in-Mongolia spend: $2.1B** — partnerships with national companies, contributions to the state budget, employee salaries.
- **Cumulative 2010-24 contributions to Mongolia: $4.8B** including VAT to Mongolian suppliers.
- **2026 development:** Mongolian government has reportedly sought early cash returns and amendment of the Oyu Tolgoi loan structure (Bloomberg, March 2026), creating ongoing FDI/regulatory information demand.

For Orange News, Oyu Tolgoi LLC is the **highest-stakes single customer** in the mining tier-1 cohort. The project's information-flow demand spans regulatory monitoring, supplier-network tracking, FDI-policy nuance, commodity-price intelligence, and labor/community relations — precisely the editorial coverage Orange News' product is built for.

### 4.2 Erdenes Mongol LLC — the state holding

Erdenes Mongol is the state-owned enterprise that manages Mongolia's strategic mineral assets — including (via subsidiaries) the state's 34% equity in Oyu Tolgoi and the holdings in Tavan Tolgoi. Aggregate footprint:

- **~$610M USD recent revenues** (consolidated with subsidiaries).
- **2,500+ employees** across the group.
- **65% of national copper reserves**, **14% of coal reserves**, **15% fluorspar**, **55% iron**.
- **~30% of Mongolia's total export earnings** flow through the Erdenes Mongol structure.

As a state holding, Erdenes Mongol's information demand differs from a private corporate — it is policy-driven, audited under Government of Mongolia disclosure requirements, and visible to the Natural Resource Governance Institute (NRGI) and EITI for transparency reporting. Customer-acquisition implication: **Erdenes Mongol is closer to a government enterprise customer than a corporate-IR customer**, with a different procurement cycle (longer, RFP-driven).

### 4.3 Erdenes Tavan Tolgoi (ETT) — the coal play

ETT is Mongolia's largest coal producer in volume terms. Recent financial scale:

- **2023 revenue MNT 9.5 trillion (~$2.8B USD).**
- **2023 net profit MNT 3.5 trillion.**
- **2024 development:** First enriched coking coal export (12.8kt) sold via electronic trading on the MSE — landmark for the coal preparation plant entering operation.
- **2026 Borteeg block tender:** International investor request-for-expressions-of-interest, projected to generate **>$1B export revenue** if successfully developed.

ETT is MSE-listed, which makes it directly relevant to Orange News' `/mse` route coverage and to the MSE-listed-companies' IR-relations cohort.

### 4.4 Mongolian Mining Corporation (MMC, HKEX:0975)

MMC is the Hong Kong-listed pure-play on Mongolian coking-coal exports.

- **2024 revenue: $1,039.9M USD (record level).**
- **2025 revenue: $823.4M USD** — declined as coal prices retraced from 2024 peak.
- **Revenue mix 2025:** $792.1M coking coal + $31.3M gold/metals.
- **Listed:** HKEX since October 2010.

MMC's IR audience is broader than purely Mongolian — Hong Kong, Singapore, and global commodities investors. But Orange News' Mongolian-language editorial uniquely serves MMC's **domestic stakeholder communications** (employees, regulators, partner-banks, MSE-adjacent investors) — a complementary surface to the existing English-language HK IR program.

### 4.5 Mid-tier mining cohort (10-15 entities)

Beyond the four tier-1 entities, Mongolia's mid-tier mining cohort (10-15 named entities including Erdenet Mining Corporation, gold producers, fluorspar specialists, smaller iron/zinc operators) collectively represents an extended SAM. Most are state-majority-owned or family-held, with information needs that overlap the tier-1 demand profile but at smaller per-customer ACV.

### 4.6 Information-needs hypothesis

Mining tier-1 entities consume four primary information categories — overlapping but not identical to the bank-cohort demand from §3.6:

| Demand category | What mining tier-1 needs | Orange News fit |
|---|---|---|
| **Mongolia mining + commodity policy** | Real-time tracking of mining-tax debates, sovereign mineral fund proposals, environmental regulation, labor disputes | Daily news pipeline + Phase 6.3 mining/FDI tagging |
| **Mongolia FDI + foreign-capital flows** | FDI policy changes, foreign-investor sentiment, sovereign loan negotiations | Mining/FDI subcategory; Mongolia-language editorial coverage |
| **Global commodity context (copper, coal, gold)** | Bloomberg-grade commodity pricing, China demand signals, weather/seasonal disruption | Live market data feed; commodity-coverage in news pipeline |
| **MSE-listed peer intelligence** | Tracking ETT, MMC, mining-adjacent listings | `/mse` route + dedicated mining-listings coverage |

The mining-domain coverage requirement is **deeper than the bank cohort** — banks consume mining news as one input among many; mining IR teams consume it as their primary signal.

### 4.7 IR-budget proxy reasoning + WTP anchors

Mongolian mining IR budgets are not publicly disclosed. International peer benchmarks suggest:

- **Tier-1 listed mining (HKEX-equivalent like MMC):** typical IR budget $200-500K USD/year for mid-cap; covers IR head + analyst + investor-conference + data-subscription line. Information-spend allocation within IR budget runs ~10-25%.
- **Tier-1 unlisted with major foreign partner (Oyu Tolgoi LLC):** scaled IR + government-relations + community-affairs operation. Information-spend embedded across multiple budget lines; aggregate figure likely 2-3× the standalone-IR comparator.
- **State-owned holding (Erdenes Mongol, ETT):** procurement-driven; information-spend allocated via tender or framework agreement rather than annual IR budget. Scale is comparable to mid-cap private mining IR.

**Expected per-customer WTP range (annual):**

| Customer tier | Estimated annual info-spend on platforms like Orange News |
|---|---|
| Oyu Tolgoi LLC | $30K-100K USD |
| MMC HKEX:0975 | $20K-60K USD |
| Erdenes Mongol holding | $25K-75K USD (RFP-allocated) |
| ETT (MSE-listed coal) | $15K-45K USD |
| Mid-tier mining (10-15 entities) | $5K-25K USD each |

These ranges are *anchors for the §6 pricing scenarios*, not commitments. They will be validated during the founder's 3-5-customer discovery.

---

## 5. Competitive Landscape

This section maps the products competing for the same information-spend wallet that Orange News is targeting. The conclusion: international incumbents (Bloomberg, LSEG, FactSet) are dominant globally but structurally weak on Mongolia-specific depth; **no Mongolian-language Bloomberg-grade competitor exists today**. Orange News' wedge is the gap they cannot economically close.

### 5.0 At-a-glance comparison

| Platform | List price (single-seat USD/yr) | Enterprise pricing | Mongolia coverage depth | Mongolian-language? |
|---|---|---|---|---|
| **Bloomberg Terminal** | **$31,980** | $18-22K/user/yr enterprise (500+ seats); 2-yr min | Macro + MSETOP:IND only; thin local context | English only |
| **LSEG Workspace** (ex-Refinitiv Eikon) | ~$22,000 base | $1,500-3,000/user/month + entitlements; mid-market $150-400K ACV | Macro feeds; minimal Mongolia editorial | English only |
| **FactSet** | $4,000-50,000 | Tiered: 50+ users 25-40% off; 100+ users 40-50% off | Macro data; institutional analytics; very thin Mongolia | English only |
| **S&P Capital IQ** | ~$15-25K/seat | Negotiated | Macro + global; thin Mongolia | English only |
| **Wind / CSI** (China-adjacent) | ~$15K/seat | Limited Western availability | China-Mongolia trade via Chinese-language | Chinese, not Mongolian |
| **Local Mongolian platforms** | (effectively none at Bloomberg-grade depth) | n/a | Native depth missing | n/a |
| **Orange News** (proposed) | **see §6 — sub-Bloomberg pricing** | tiered SaaS + ad + license hybrid | **Mongolian-first anchor depth** | **Mongolian Cyrillic** |

### 5.1 Bloomberg Terminal — the global anchor

Bloomberg is the global incumbent — ~325,000 terminals worldwide, vendor lock-in via the messaging network and chat ecosystem.

- **List price:** **$31,980/year per seat** (2026).
- **Volume tiers:** 2-4 terminals → ~$28,320/seat; 5-9 → ~$26,900 (5% off); 10-24 → ~$25,490 (10% off); 25-49 → ~$24,070 (15% off).
- **Enterprise (500+ terminals):** custom pricing, often $18,000-22,000/user/year.
- **2-year minimum commitment** standard.
- **Mongolia coverage:** macro indicators, MSETOP:IND benchmark quote, sparse local company data. The Bloomberg desk does not staff Ulaanbaatar; Mongolia stories enter the wire via international correspondents and Reuters partnership feeds.

Bloomberg's Mongolia coverage is **structurally limited by editorial economics** — a market with 162 listed companies and ~$4B market cap doesn't justify a dedicated bureau. Bloomberg's footprint here is a side-effect of regional Asia coverage, not a deliberate product investment.

### 5.2 LSEG Workspace (formerly Refinitiv Eikon)

The London Stock Exchange Group's flagship after acquiring Refinitiv from Thomson Reuters.

- **Base license:** **$1,500-3,000/user/month** (~$22K/user/year median).
- **Data entitlements (separate):** $500-2,000+/user/month additional.
- **Premium add-ons:** $200-1,000+/user/month for third-party research, fundamentals, estimates, alternative data.
- **Mid-market deployment** (10-25 users with standard equity + fixed-income data): **$150K-400K annual contract value**.
- **Mongolia coverage:** macro feeds via Reuters partnership inheritance; Mongolian-listed equity coverage thin; minimal local-language editorial.

LSEG's pricing model is more modular than Bloomberg's, which makes it cheaper for narrow use-cases but rapidly expensive when entitlements stack. Mongolia is, again, not a priority deployment market.

### 5.3 FactSet

Heritage in buy-side analytics; popular with hedge funds, asset managers, and corporate development teams.

- **Pricing range:** **$4,000-$50,000/user/year** (April 2026 benchmarks).
- **Base workstation:** $4,000-12,000.
- **Modules add-on:** Estimates $5K-15K; StreetAccount $3K-8K; exchange feeds; risk models; API access.
- **Hidden enterprise + per-user fees:** add 30-60% to base license.
- **Volume discounts:** 5-10 users 10-15% off; 10-25 users 15-25%; 25-50 users 20-30%; 50+ users 25-40% + enterprise tier; 100+ users 40-50% off list.
- **Mongolia coverage:** macro and global; local Mongolia depth not a strategic focus.

FactSet's flexible bundling makes it easier to buy a "macro-only" subscription cheaply, but Mongolia-domain depth is not a feature differentiation FactSet markets.

### 5.4 Other international platforms

- **S&P Capital IQ** — corp-dev / IB / lender-credit-research workhorse, ~$15-25K/seat list. Strong on global ratings + filings; weak on Mongolia editorial.
- **Wind / CSI** (China-adjacent) — Chinese-language financial platforms widely used by China-Mongolia cross-border traders. Coverage of Mongolia mining + commodity exports is incidental to their China-domestic focus.
- **Reuters Connect** (institutional newsfeed) — wire content licensing, often bundled with LSEG. Mongolia stories sourced from regional correspondents.
- **MarketWatch / WSJ Pro** — consumer/professional crossover; Mongolian readers consume passively but no native-language enterprise tier.

### 5.5 Local Mongolian alternatives — the gap

There is **no Mongolian-language Bloomberg-grade competitor today**. The current local landscape:

- **News portals** (ikon.mn, Montsame, news.mn, eagle.mn): general-interest news; some financial coverage but not Bloomberg-grade in design, depth, or data integration. Free to consumers; no enterprise product.
- **MSE itself** publishes filings, marquee data, and listing rules — useful raw input, not a packaged information product.
- **Bank-internal research desks** at Khan / Golomt / TDB produce internal market commentary, but it is not a sellable external product and is bilingual at best.
- **Brokerage research** (Standard Investment, BDSec, etc.) — equity research on MSE listings; useful but narrow scope.

The closest substitute a tier-1 Mongolian customer can assemble today is **Bloomberg seat + bilingual analyst headcount loading the translation/editorial work manually**. That stack costs 2-3× the seat-license alone once analyst time is fully loaded.

### 5.6 Defensibility — why incumbents can't easily close the gap

Three structural reasons international incumbents have not — and likely will not — build a Mongolian-language Bloomberg-grade product:

1. **Market scale economics.** $8-15M TAM (§7) does not justify a dedicated bureau, dedicated editorial product, dedicated infrastructure investment for Bloomberg, LSEG, or FactSet at their cost structures. The same $8-15M market is *transformative* at Orange News' lean cost base ($0/month infrastructure today; per §1.4 of TECHNICAL_HANDBOOK).
2. **Editorial moat — Cyrillic typography + Mongolian-language editorial standards.** International platforms ship machine translation as the cost-effective default; the validated 60-80 character headline band, no-concatenation regex validators, and trademark-safe brand voice (per §6.1 of TECHNICAL_HANDBOOK) require a Mongolian-Cyrillic editorial discipline international platforms have no incentive to build at scale.
3. **Local-network compounds.** Direct mse.mn Server Actions integration (§3.4 / §4.6 of TECHNICAL_HANDBOOK), Montsame scraper relationships, native ikon.mn passthrough, and the editorial relationships that emerge from being domestically-resident are local-network effects international incumbents structurally cannot acquire.

The defensibility thesis is **not** "international incumbents can't build it" — it is "international incumbents have no economic reason to prioritize building it, and the cost-of-entry advantage compounds with each year of editorial accumulation."

### 5.7 Substitution math

For a tier-1 Mongolian bank operating 5 Bloomberg seats today (~$160K/year), Orange News' value proposition is compositional: **retain 2-3 Bloomberg seats for global needs, replace 2-3 with Orange News' Mongolian-first stack at sub-Bloomberg pricing**, and recover the bilingual-analyst overhead that previously bridged the gap. Net annual savings $40-80K + substantially better Mongolian-language depth + faster local information cycle. The substitution is partial-displacement, not wholesale-replacement, which makes it commercially safer for the customer (no risky platform cutover) and faster to land.

---

## 6. Pricing Scenarios

This section derives pricing scenarios from the international benchmarks (§5) and tier-1 customer WTP anchors (§3.7, §4.7). **All figures are expressed as ranges, not commitments.** They are anchors for founder-customer discovery in months 1-6, not list-price publication. Customer-facing pricing pages remain in `docs/sales/pricing_model_spreadsheet.md` and reflect what founders ultimately validate.

### 6.1 Pricing philosophy

Three principles underpin the scenarios:

1. **Sub-Bloomberg, not free.** Orange News prices below Bloomberg's $31,980 list per seat — but well above zero. Free-tier customers are reader-acquisition, not revenue. Tier-1 institutional customers expect to pay for institutional-grade information; under-pricing signals that the product is not institutional-grade.
2. **Ranges, not points.** Each tier is expressed as a range. The lower bound reflects landing-customer discount + Year-1 anchor pricing. The upper bound reflects steady-state list pricing at tier-appropriate value.
3. **Hybrid revenue mix.** Per the founder's Q4 framing: SaaS subscription drives predictable ARR; advertising scales with reader base; licensing handles bespoke data feeds and white-label content. Each revenue line targets a distinct buyer (institutional / brand / data-consumer) with a distinct sales motion.

### 6.2 SaaS subscription tiers (proposed)

Three tiers, each with a target customer profile and an expected price range. Numbers are USD-denominated for international consistency; MNT translation provided at MNT/USD ≈ 3,400.

| Tier | Target customer | Range USD/yr | Range MNT/yr | Indicative seat count |
|---|---|---|---|---|
| **Starter** | Mid-tier mining IR, broker desks, FDI advisors, smaller bank treasury, single-seat use | **$5,000-15,000** | MNT 17M-51M | 1-3 seats |
| **Professional** | Full tier-1 bank treasury / risk team; MSE-listed corporate IR; mid-cap mining; full-team use | **$20,000-50,000** | MNT 68M-170M | 3-10 seats |
| **Enterprise** | Tier-1 bank multi-seat; Oyu Tolgoi LLC; Erdenes Mongol; large multi-team deployments | **$75,000-150,000** | MNT 255M-510M | 10+ seats; bespoke entitlements |

**Tier feature differentiation (sketch — to be finalized in customer discovery):**
- **Starter** = web access + 1-3 named seats + email digest + standard support.
- **Professional** = above + API access + custom dashboards + priority support + analyst Q&A.
- **Enterprise** = above + bespoke editorial coverage + custom MSE / mining tagging + white-label options + dedicated account manager.

### 6.3 Advertising revenue

Display advertising + sponsored content scales with reader base, not customer count. Ranges:

- **Display ads (banner, sidebar, in-article):** $5-25 CPM at Mongolian financial-reader audience. Annual revenue at 10K MAU + standard ad density: $5K-15K/year. At 50K MAU: $25K-75K/year. At 200K MAU: $100K-300K/year.
- **Sponsored content** (advertorials, branded research, supplier-specific newsletters): $1K-5K per piece; ~6-24 pieces/year addressable.
- **Conference + event sponsorship:** $5K-25K/year per sponsor when Orange News begins in-person events (Phase 9+).

Advertising is **not the primary Year 1 revenue lever** — reader scale needs to mature first. It is a multi-year option that compounds with editorial track record.

### 6.4 Licensing revenue

Three forms identified:

- **Data feed licensing:** the same `market_data.json` / `mse_data.json` that drives the public site can be licensed as JSON API access for downstream integrators (banks' internal portals, fintech apps, brokerage research tools). Pricing range $10K-50K/year per integrator; bespoke per use-case.
- **White-label editorial licensing:** Orange News editorial syndicated into a customer's own intranet / employee portal / customer-facing app under co-brand or white-label. Pricing range $25K-100K/year per customer; ranges higher for full-domain bespoke editorial.
- **Custom integrations** for specific customer systems (e.g., feeding Mongolian-context news into a tier-1 bank's internal Bloomberg-augmentation layer). Pricing range $15K-75K/year + setup fee.

Licensing has **higher margin** than SaaS but **longer sales cycles** — likely Year 2+ rather than Year 1.

### 6.5 Year 1 revenue scenario (conservative)

Per the founder's stated **conservative Year 1 target of $20-50K revenue**, three illustrative paths:

| Path | Customer mix | Expected ACV | Year 1 total |
|---|---|---|---|
| **A — All Starter** | 4-5 Starter customers @ $7-10K each | ~$8K | **$32-40K** |
| **B — Anchor + spread** | 1 Professional anchor + 2-3 Starter | ~$15K avg | **$30-45K** |
| **C — Single anchor** | 1 Professional customer @ $25-40K + reader-acquisition focus | full path on 1 sale | **$25-40K** |

All three paths land within the founder's $20-50K conservative band. Path A maximizes customer count for product validation; Path C maximizes per-customer revenue for cash predictability. Founder's actual Year 1 mix will depend on which 3-5 customers convert from outreach.

### 6.6 Year 2-3 revenue trajectory (illustrative)

If Year 1 lands 3-5 customers (per Q5 lock) and the product validates:

- **Year 2:** 8-15 customers; mix shifts toward Professional + first Enterprise; SaaS ACV $80-300K; first licensing engagements $30-100K; advertising begins meaningful contribution. Total: **$150-450K**.
- **Year 3:** 15-30 customers; first Enterprise multi-seat lands; licensing momentum builds; reader scale supports ad rate-card maturation; first Central Asia adjacency exploration begins. Total: **$400K-1.2M**.

These trajectories are **anchored to addressable customer pool** (5 tier-1 banks + 4 tier-1 mining + 10-15 mid-tier mining + 50+ brokers/asset managers + government IR) — they do not require winning every prospect, just maintaining the conversion rate that produces Year 1's 3-5.

### 6.7 What this section is not

- **Not a commitment.** Pricing will be validated in customer discovery; tier ranges may compress, expand, or restructure.
- **Not a list-price publication.** External-facing pricing lives in `docs/sales/pricing_model_spreadsheet.md` and reflects post-discovery decisions.
- **Not a forecast.** §7 will produce TAM / SAM / SOM sizing; §6 produces price-per-customer scenarios that feed that sizing.

---

## 7. Market Sizing — TAM / SAM / SOM

This section derives addressable-market sizing **bottom-up from the customer pool** rather than top-down from sector benchmarks. Bottom-up is more honest for a niche-but-deep market like Mongolia: top-down inevitably overshoots when applied to a $23.6B economy with concentrated information demand.

### 7.1 TAM — Mongolia direct-addressable

**Definition:** Total annual spend Mongolian institutions could allocate to Bloomberg-grade Mongolian-language financial information at steady-state product maturity.

| Customer cohort | Count | Per-customer ACV (USD) | Cohort TAM (USD) |
|---|---|---|---|
| Tier-1 banks (systemically important) | 5 | $50K-200K | $250K-1.0M |
| Tier-2/3 banks + non-bank lenders | 8-10 | $5K-25K | $40K-250K |
| Tier-1 mining corporations | 4 | $20K-100K | $80K-400K |
| Mid-tier mining (named entities) | 10-15 | $5K-25K | $50K-375K |
| MSE-listed corporate IR (non-mining) | 30-50 | $3K-15K | $90K-750K |
| Brokers + asset managers | 50+ | $3K-10K | $150K-500K |
| Government / sovereign / FDI bodies | 8-12 | $10K-50K | $80K-600K |
| Law firms + advisory + consulate commercial-attaché | 20-30 | $3K-15K | $60K-450K |
| **Direct customer TAM (steady state)** | **~140-180 entities** | (weighted) | **$800K-4.3M** |

Adding the **non-customer revenue layers** (advertising at reader scale + downstream licensing into international platforms):

- **Advertising at mature scale (200K+ MAU):** $300K-1M/year
- **Data feed + white-label licensing:** $200K-1.5M/year
- **Conference / event sponsorship:** $100K-500K/year

**Mongolia direct-addressable TAM (steady state, all revenue lines): $1.4M-7.3M.**

### 7.2 Note on §1.3 preview variance

The §1.3 executive-summary preview cited a TAM of $8-15M. That figure represented **fully-expanded TAM** including international platforms paying for licensed Mongolian coverage and Mongolia-as-template revenue. The bottom-up math here ($1.4M-7.3M) is the more conservative direct-addressable figure. Both are honest; the difference is what gets counted as "Mongolia." For investor framing we recommend leading with the bottom-up range and citing the upper bound as "addressable extension via licensing + cross-border."

### 7.3 SAM — reachable in 12-month window

**Definition:** Subset of TAM that the founder + current product could realistically engage in 12 months of focused outreach.

Filtering TAM down by reachability (founder relationships, language match, decision-cycle length, product readiness):

- **Reachable:** 5 tier-1 banks (founder direct outreach), 4 tier-1 mining (LinkedIn / industry-event outreach), MSE-listed corporate IR top-20, top-15 brokers, 5-10 mid-tier mining, government IR (with longer procurement cycle).
- **Not reachable in 12 months:** smaller bank tier-3, the 100+ small MSE listings, most law firms (no demand validation yet), Mongolia consulate desks (low priority).

| SAM cohort | Realistic Y1 conversion target | Per-customer ACV | SAM annual revenue |
|---|---|---|---|
| Tier-1 banks | 1-2 of 5 | $30K-50K | $30K-100K |
| Tier-1 mining | 1 of 4 (Oyu Tolgoi most likely anchor) | $30K-75K | $30K-75K |
| Mid-tier mining | 2-3 of 10-15 | $8K-15K | $16K-45K |
| MSE corporate IR | 2-4 of 50 | $5K-10K | $10K-40K |
| Brokers / asset managers | 2-3 of 50 | $3K-8K | $6K-24K |
| **SAM (12-month)** | **~8-13 customers** | (weighted) | **$92K-284K** |

**SAM annual revenue in 12-month window: ~$100K-285K.** This is the operationally-realistic ceiling — it does not require landing every customer in any cohort.

> **Note on SAM vs §6.6 Year 2 trajectory.** SAM as defined here is the *Year 1 reachable ceiling*. The §6.6 Year 2 trajectory ($150K-450K) reflects three expansion vectors beyond Year 1 SAM: (1) **customer upgrade revenue** — Year 1 Starter customers expand to Professional or Enterprise tiers (estimated 30-50% ACV increase per upgrading customer), (2) **secondary cohort entry** — government/regulator pilot programs and FDI-advisor cohort engagement begin (longer procurement cycles unlock in Year 2), (3) **service tier expansion** — first licensing engagements + early advertising contribution. The Year 2 trajectory is therefore consistent with — not contradicted by — the SAM-as-Year-1-ceiling framing.

### 7.4 SOM — Year 1 target (founder-stated, conservative)

**Definition:** Subset of SAM that founder commits to capturing in Year 1 with current resources, validated against bootstrap or pre-seed funding posture (per Q6 lock).

Per founder Q5 + Q7 locks:
- **Customer count target:** 3-5 paying customers in 6-12 months.
- **Year 1 revenue target:** $20-50K USD (conservative).

Mapped to §6.5 illustrative paths:
- **Path A** (4-5 Starter): 3-5 customers @ $7-10K avg → $32-40K Y1 revenue.
- **Path B** (1 Pro + 2-3 Starter): 3-4 customers, $15K avg → $30-45K Y1.
- **Path C** (1 Pro anchor): 1 customer, $25-40K → $25-40K Y1.

**Year 1 SOM = 3-5 customers / $20-50K USD revenue.** This represents:
- ~3-4% of TAM (lower bound) to ~30-50% of SAM (upper bound)
- A realistic landing position from zero customers
- Sufficient validation surface to enter Year 2 with product-market-fit signal

### 7.5 Sensitivity — three scenarios

| Scenario | Year 1 outcome | Year 2 trajectory | Year 3 trajectory |
|---|---|---|---|
| **Low** (1-2 customers, all Starter) | $5-20K | 3-5 customers, $30-80K | 8-12 customers, $100-200K |
| **Base** (3-5 customers per founder target) | $20-50K | 8-15 customers, $150-450K | 15-30 customers + first licensing, $400K-1.2M |
| **High** (5+ customers + Enterprise anchor) | $50-150K | 15-25 customers + meaningful ad/licensing, $400-900K | First Enterprise multi-seat + Central Asia exploration, $1-3M |

The Base scenario is what the founder has committed to; Low and High are sensitivity bookends, not commitments.

### 7.6 Central Asia adjacency (Year 2-3+) per Q8 lock

The Mongolian-built infrastructure (Cyrillic typography pipeline + direct-exchange integration + mining-domain editorial template + cross-repo architecture) **ports at marginal cost** to similarly-shaped markets:

- **Kazakhstan** ($230B GDP, mining + oil-driven, KSE listed companies, Russian + Kazakh language demand). Estimated TAM $20-50M.
- **Uzbekistan** ($90B GDP, growing financial sector, Tashkent Stock Exchange). Estimated TAM $5-15M.
- **Kyrgyzstan + Turkmenistan** (smaller, but mining-relevant): combined TAM $3-10M.

Cross-border TAM addition over Years 2-5: **$30-80M+** of which Orange News could realistically reach 5-15% if the Mongolia model validates and the founder pursues regional expansion.

> **Disclaimer.** The Central Asia figures above are **illustrative estimates derived from GDP-scaling against Mongolia's bottom-up TAM**. They have **not been separately researched at company-level granularity** in this document. Per-country listed-company counts, banking-system structures, IR-budget norms, and language-localization requirements differ materially across Kazakhstan, Uzbekistan, Kyrgyzstan, and Turkmenistan. **Pre-investment market validation is recommended before any Year 3+ regional expansion commitment** — including dedicated bottom-up sizing per target country, founder-customer discovery in target markets, and language-localization feasibility assessment.

### 7.7 Sizing summary

- **TAM (Mongolia, direct + extension):** $1.4M-7.3M annual at maturity.
- **SAM (Mongolia, 12-month reachable):** $100K-285K.
- **SOM (Year 1 founder target):** $20-50K, 3-5 customers.
- **Cross-border extension (Year 2-3+):** $30-80M Central Asia opportunity over 3-5 years.

The ratio of SOM to TAM (~1-3%) reflects a deliberately-conservative landing posture appropriate for bootstrap/pre-seed funding. Investor-ready upside comes from the SAM-to-Y2-Y3-trajectory expansion, not from over-promising on Year 1.

---

## 8. Strategic Positioning + Risk Factors

This closing section consolidates the positioning argument from §1-§7 against the competitive frame (§5), the moat thesis, and an honest enumeration of risks operators and investors should price in. It closes with the three-sentence positioning summary an external reader can carry away.

### 8.1 Competitive landscape positioning

Orange News occupies a deliberate position at the intersection of three differentiation axes:

| Competitor type | Their strength | Their gap | Orange News' wedge |
|---|---|---|---|
| **Bloomberg Terminal** | Global breadth, real-time data depth, network effects | $31,980/seat list; English-only; thin Mongolia coverage; structural-economics block on dedicated bureau | **Cost differentiation** — sub-Bloomberg pricing for Mongolia-depth-equivalent value |
| **LSEG Workspace (ex-Refinitiv)** | Modular pricing, Reuters wire heritage, fixed-income depth | English-only; Mongolia coverage incidental to regional Asia | **Localization differentiation** — Mongolian-Cyrillic editorial that LSEG has no incentive to build |
| **FactSet, S&P Capital IQ** | Buy-side analytics, IB workflow, ratings/filings depth | Mongolia not a feature priority; per-user fees stack | **Use-case differentiation** — bundled news + market data + MSE depth in a single Mongolian-language product |
| **Domestic Mongolian outlets** (ikon.mn, Montsame, brokerage research) | Mongolian-language fluency, local network, free-to-reader | Not Bloomberg-grade in design, depth, data integration; no enterprise SaaS product | **Quality differentiation** — Bloomberg-grade information design at Mongolian-first depth |
| **Bilingual analyst loading** (the current substitute) | Adapts existing Bloomberg/LSEG seat to Mongolian context | 2-3× cost when fully loaded; analyst time not scalable | **Productivity differentiation** — automated editorial pipeline replaces manual analyst translation |

The defensibility argument from §5.6 holds: international incumbents *could* build a Mongolian-first product but have no economic incentive to prioritize it; domestic outlets *could* build Bloomberg-grade depth but have no editorial-pipeline infrastructure to reach it at scale. Orange News' wedge is the productive intersection neither side has reason to occupy.

### 8.2 Strategic moat factors

Four moats compound over time and increase the cost of competitive entry:

1. **Editorial pipeline complexity.** The end-to-end pipeline (14 RSS feeds + Montsame scraper + Gemini-primary-Claude-fallback translator + 5-rule validator + image generator + FB scheduler + archive snapshotter) took ~5 months of focused engineering to reach production stability. A new entrant would need to replicate the *workflow*, not just the components — including the operational lessons (temperature lock, MNT timezone archive boundaries, soft-fail discipline, action-ID rotation tolerance) that emerged from running the system in production.
2. **Mongolian-language LLM prompt engineering.** The translator's 5-rule validator (60-80 char headlines, no concatenation errors, source-tag preservation, banned-phrase enforcement, Mongolia-passthrough routing) reflects domain-specific prompt engineering that does not transfer from generic translation work. Each validator rule was added in response to a specific failure mode; rebuilding this set requires either replicating the failure path or paying significantly more for editorial review.
3. **Multi-source institutional knowledge.** 14 RSS source relationships, Montsame's `.content-mn` selector dependency, ikon.mn passthrough categorization, mse.mn Server Actions endpoint reverse-engineering — these are integrations not documented in any external reference and require local-network familiarity to discover and maintain.
4. **Production-grade infrastructure.** 5+ months of accumulated production deployment (5 GHA workflows, 3 GitHub Secrets dependencies, Vercel ISR cache topology, frontend-mock-fallback resilience layer, 2-repo deployment hygiene) at $0/month operating cost. A new entrant either pays this in time (5-10 months to reach equivalent stability) or in infrastructure spend (paid alternatives at $1-10K/month).

### 8.3 Risk factors — operational

Four operational risks, none individually catastrophic, but each requires active monitoring:

| Risk | Likelihood | Impact | Current mitigation |
|---|---|---|---|
| **Single-language dependency (Mongolian)** | High (definitional) | Limits TAM ceiling without expansion | Cross-border expansion roadmap (§7.6) addresses; meanwhile, single-language is *also* the moat |
| **Single-market concentration (Mongolia)** | High (definitional) | Macro shocks (commodity cycle, dzud, FX) directly compress customer budgets | §2.6 macro-risk awareness; advertising + licensing diversifies away from pure-bank-treasury exposure |
| **AI provider dependencies** (Gemini + Claude) | Medium | Translator hard-fails Phase 2 if both APIs down | Dual-provider fallback already in place; pipeline soft-fails with prior-day data if both providers simultaneously fail (<1% historical co-incidence) |
| **GHA cron reliability** | Medium-Low | Schedule drift can delay daily news (observed 3h38m drift incident in MSE refresh) | Redundant cron slots in `mse_update.yml` (5×/day weekday); off-peak 22:00 UTC selection for `orange_news.yml` |

### 8.4 Risk factors — market

Four market-level risks that could materially reset the addressable opportunity:

| Risk | Likelihood | Impact | Mitigation posture |
|---|---|---|---|
| **Bloomberg / LSEG aggressive Mongolia entry** | Low (per §5.6 economic-incentive analysis) | Compresses pricing; could displace anchor customers | Editorial moat depth + 2-3 year head-start advantage; partnership / acqui-hire option preserved |
| **Domestic outlets close the quality gap** | Medium (longer-term) | Pricing pressure on Starter tier; reader-base advertising compresses | Continuous editorial-pipeline iteration; Phase 6.1+ Mongolian content depth expansion |
| **Customer acquisition cost (CAC) higher than projected** | Medium-High | Year 1 founder runway tightens; SOM revenue lower than $20-50K target | Founder direct-outreach Year 1 (no paid CAC); 3-5 customer concentration limits CAC variance; bootstrap posture (Q6 lock) absorbs higher-than-expected discovery friction |
| **Mongolia macro shock** (commodity cycle, FDI policy, FX) | Medium-High (cyclical) | Customer budgets compress; mining-IR cohort hit hardest | Customer diversification across cohorts (banks + mining + brokers + government + advisory) — no single sector >40% of Year 1 revenue |

The Bloomberg-aggressive-entry risk deserves specific attention: even if Bloomberg invested in Mongolia, the editorial-pipeline moat (§8.2) and existing customer relationships would persist 1-3 years before competitive parity. Customer renewal cycles within that window protect Year 2-3 revenue.

### 8.5 Mitigation strategies

Four cross-cutting mitigation patterns:

- **Multi-product diversification (Azurise AI portfolio).** Orange News is one product in the founder's broader Azurise AI portfolio. Customer relationships, infrastructure investment, and editorial expertise compound across products — single-product failure does not eliminate the company.
- **Multi-source resilience.** 14 RSS feeds + Montsame scraper + ikon.mn + future Mongolian-language sources means no single content-source failure breaks the news pipeline. Mining and macro coverage have 3-5 independent input streams.
- **Translation pipeline fallback.** Gemini primary + Claude fallback (validated 2026-04-23 architecture). If Gemini quota exhausts or Anthropic experiences a regional outage, the system continues. Probability of simultaneous dual-provider failure has been <1% historically.
- **Customer concentration mitigation.** Year 1 SOM target of 3-5 customers across at least 2 cohorts (banks + mining minimum) limits exposure to any single customer's churn or budget compression. By Year 3, customer base expansion to 15-30 makes any single departure non-material.

### 8.6 Strategic positioning summary — "Why Orange News"

In three sentences:

1. **Orange News is the only Bloomberg-grade Mongolian-language financial information platform** — purpose-built for Mongolia's banking system, mining sector, MSE depth, and FDI nuance, with editorial discipline that international incumbents cannot economically match and domestic outlets cannot infrastructurally reach.
2. **The product is production-ready today** — 5 GHA workflows running on $0/month infrastructure, 162 MSE listings covered, 14 international + 1 native-language news source pipeline, validated translation discipline, and a sales infrastructure (`docs/sales/` 11 deliverables) ready for first commercial customer onboarding.
3. **The opportunity is asymmetric** — bottom-up TAM $1.4M-7.3M with a clear path to $30M+ Central Asia extension, anchored by a founder Year 1 conservative target ($20-50K, 3-5 customers) that under-promises against the addressable upside and validates the wedge before requiring outside capital.

For investor framing: **the bet is on a defensible wedge in a small market that scales via cross-border replication, not on a single-market moonshot.** That is the bootstrap-or-pre-seed-appropriate posture the founder has committed to (Q6 + Q7 locks), and §6 + §7 demonstrate the unit economics support it.

---

*End of MARKET_RESEARCH.md. For commercial outreach materials, see `docs/sales/`. For engineering reference, see `TECHNICAL_HANDBOOK.md`. For founder bio + capitalization plan, see forthcoming `BUSINESS_PROJECT_TEMPLATE.md` + `BUSINESS_PLAN.md`.*

# Orange News / Azurise Solution — Executive Summary

**Bloomberg-grade Mongolian financial portal infrastructure**
*Live demo: [www.orangenews.mn](https://www.orangenews.mn) · 2026-05-06*

---

## The problem

Mongolian financial professionals need Bloomberg-grade content but have to choose: international quality at international cost (Bloomberg Terminal ~USD 24K/year per seat, English-only), domestic outlets at consumer-grade editorial, or analyst-hours spent on manual translation. **There is no Mongolian-language equivalent to a Bloomberg-style daily briefing — automated, with both global and domestic content.**

## The solution

**Orange News** is a fully-automated Mongolian-Cyrillic financial portal:

- **10 curated articles per day** auto-translated and editorially polished from 14 international sources (Bloomberg, WSJ, FT, Reuters, CNBC, BBC, TechCrunch, VentureBeat, others) plus 2 native Mongolian sources (ikon.mn RSS + Montsame HTML scraper).
- **Bloomberg-grade /mse page** with marquee tickers, top movers, mining trades, A/B-board directory — 8 datasets sourced from mse.mn.
- **Live international video feed** — 33 curated videos from Bloomberg Television / WSJ / Reuters / FT / CNBC / World Bank, refreshed every 2 hours.
- **7-day rolling article archive** + RSS feed + auto-Facebook publishing.

**Azurise Solution** sells the same stack as a **white-label deployment** to commercial banks, securities firms, regulators, and media outlets.

## Production evidence (live, snapshot 2026-05-06)

- 4 production cron pipelines, 100% uptime over the past 24 hours
- 10 daily posts auto-translated + editorially polished
- 33 curated videos, 6 channels, refreshed every 2 hours
- 7 public routes (`/`, `/mse`, `/video`, `/category/[cat]`, `/articles/[slug]`, `/rss.xml`, `/newsletter`)
- ~5,000 LOC across backend (Python 3.11) + frontend (Next.js 16, Tailwind v4 on Vercel)
- ~USD 40-70/month operational cost (mostly LLM API)

## Use cases

| Customer type | Tier 1 deployment for them |
|---|---|
| **Commercial banks** (TDB, Khan, Golomt) | Branded subdomain serving daily briefings to their entire RM team — fraction of one Bloomberg seat's cost |
| **Securities firms** (BDSec, TDB Securities) | 10× research-throughput augmentation without hiring analysts |
| **Government / regulators** (Bank of Mongolia, FRC) | Co-branded investor-education portal — public-facing deliverable on financial-literacy mandate |
| **Mongolian media outlets** (Eagle TV, IKON, Gogo, Montsame) | Content licensing — daily briefing as syndicated section |

## Pricing tiers

| Tier | What | Setup | Monthly |
|---|---|---|---|
| **Tier 1 — White-label deployment** | Custom domain, your branding, full editorial stack | `[FOUNDER ADJUST]` | `[FOUNDER ADJUST]` |
| **Tier 2 — Branded subdomain** | Subdomain on shared backend, your branding | `[FOUNDER ADJUST]` | `[FOUNDER ADJUST]` |
| **Tier 3 — Strategic partnership** | Custom build + revenue share / co-branded content licensing | `[FOUNDER ADJUST]` | `[FOUNDER ADJUST]` |

Anchor reference: a single Bloomberg Terminal seat ≈ USD 24,000/year. Tier 1 prices at a fraction of that for an analyst-team-sized customer. *(Final pricing pending Day-13 founder review.)*

## Why it's hard to replicate

The moat is the **editorial layer + multi-source institutional knowledge + Mongolian Cyrillic prompt engineering**, not the framework:

1. **7 days of focused work** + ~50 production commits = the editorial pipeline (Rule 0 calque-avoidance, headline 60-80 char convention, past-tense declarative leads, source-footer convention).
2. **15 source integrations** each with their own discovery cost (Day 6 recon proved Mongolian web doesn't expose RSS broadly; Day 7 mapped MSE Server Actions over 2 days; Day 8 disambiguated 5 Bloomberg YouTube channels).
3. **Stateless data plane via raw GitHub URLs + Vercel ISR** — no database, no servers to administer. Operational footprint is genuinely 5 GHA workflows + 1 Vercel project.
4. **Mongolian-Cyrillic LLM prompt engineering** — 1,700+ LOC in `orange_translator.py` alone.

## Demo + next steps

**See it live:** [www.orangenews.mn](https://www.orangenews.mn) (homepage + `/mse` + `/video` + RSS)

**Schedule a 30-minute walkthrough:** [mc.tunghai@gmail.com](mailto:mc.tunghai@gmail.com)

---

**Munkhsaikhan Mongolbayar** — Founder, Azurise Solution
`[FOUNDER ADJUST: title line + LinkedIn URL]`

---

*This document fits one PDF page when exported. ~700 words.*

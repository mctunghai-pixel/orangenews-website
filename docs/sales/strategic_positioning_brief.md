# Strategic Positioning Brief — Phase 9.3

> **Phase 9.3 deliverable.** Single-page founder reference for keeping the commercial pitch consistent across calls, decks, and outreach. When in doubt about how to frame Azurise Solution to a new prospect, return to this document.

---

## Vision

A Mongolia where every financial professional — analyst, RM, regulator, journalist, retail investor — has access to Bloomberg-grade financial content in their own language, without paying Bloomberg-grade prices. The bottleneck has never been demand; it has been infrastructure to translate global financial discourse into editorial-quality Mongolian Cyrillic at scale.

## Mission

Build and operate the editorial-pipeline + market-data infrastructure that lets every Mongolian financial institution publish a daily Bloomberg-style briefing under their own brand, at a cost-per-seat fraction of what Bloomberg charges. Sell the same stack as a white-label deployment to commercial banks, securities firms, government regulators, and media outlets.

## Competitive moat (3 things)

1. **Mongolian-Cyrillic editorial pipeline that took multi-day iteration to land.** Rule 0 calque-avoidance, headline 60-80 char declarative past-tense convention, source-footer attribution, native-Mongolian passthrough — these conventions are baked into ~1,700 LOC of prompt engineering in `orange_translator.py`. A competitor starting from scratch faces the same multi-week investment with no shortcut.
2. **Multi-source institutional knowledge.** 13 RSS feeds + 2 native-Mongolian sources (one RSS, one HTML scraper) + MSE.mn server-actions endpoint + YouTube hybrid + market-data fallback chain. Each integration represents its own discovery cost (Day 6 recon proved Mongolian web doesn't expose RSS broadly; Day 7 mapped MSE Server Actions over 2 days; Day 8 disambiguated 5 Bloomberg YouTube channels). A new entrant pays this discovery cost again.
3. **Stateless data-plane operations.** Static JSON files served via raw GitHub URLs through Vercel ISR — no database, no servers, no on-call. Operational cost is ~USD 50/month total for the entire platform; marginal cost of an additional white-label customer is essentially zero. Competitors building on traditional architecture take on operational debt that grows with scale.

## Ideal Customer Profile (ICP)

The ideal Azurise customer:

- **Operates in Mongolian financial services** (bank, securities, regulator, financial media)
- **Has 50-500 staff** who would consume daily financial content (RMs, analysts, advisors, investor-relations team, journalists, etc.)
- **Currently spends some money on financial content** — Bloomberg seats, manual analyst translation, third-party feeds — but isn't satisfied with reach or cost
- **Has a Head-of-Digital or Head-of-Marketing** who can authorize a USD 1K-8K/month spend without board approval
- **Cares about brand differentiation** — willing to put their logo on the deployed product
- **Has internal stakeholders** (clients, regulators, public) who would notice and value Mongolian-Cyrillic Bloomberg-grade content

The closest fits across the customer target list:
- **Capitron Bank** (smaller bank, fast decision cycle, Tier 2 fits cleanly)
- **BDSec** (research-business native, immediate value-prop understanding)
- **TDB** (Tier 1 anchor — once closed, becomes the reference customer)

## Pricing rationale

Anchor on Bloomberg Terminal: ~USD 24K/year per seat. A bank with 2 seats is paying ~USD 4K/month. Tier 1 white-label deployment at USD 3K-8K/month gives the entire bank-team Mongolian-Cyrillic Bloomberg-grade content access — direct cost-per-seat reduction of ~10× when measured against per-seat Bloomberg licensing.

For Tier 2 branded subdomain at USD 500-1,500/month: positions as a "no-brainer try" that doesn't require procurement-board review. Closes faster, builds reference base.

For Tier 3 strategic partnership: pricing is bespoke; bills against the customer's own revenue capture (revenue share or fixed retainer + bonus). This tier is for situations where the deployment is so embedded in the customer's product that it generates measurable upside.

## Differentiators (vs Bloomberg / Refinitiv local presence)

| Bloomberg / Refinitiv | Azurise |
|---|---|
| English content, requires English fluency | Mongolian Cyrillic native, no translation lag |
| Per-seat licensing (~USD 24K/year per analyst) | Whole-team-access at fraction of one seat |
| No customization (their brand, not yours) | White-label under your brand |
| Heavy terminal install + training | Web-based, accessible from any device |
| Generic global content | Curated for Mongolian context (mining, MSE, FX) |
| Mostly market data | Editorial briefings + market data + video + RSS |

## Differentiators (vs domestic Mongolian outlets — ikon.mn / news.mn / gogo.mn / Montsame / Eagle)

| Domestic outlets | Azurise |
|---|---|
| Consumer-grade editorial | Bloomberg-style declarative-past-tense leads, 60-80 char headlines, concrete numbers |
| Single-source content | 13 international + 2 domestic sources curated daily |
| Manual production, ~3-5 articles/day | Automated, 10 articles/day with editorial polish |
| Generic financial topics | Topic-quota enforcement (1 stock + 1 macro + 1 ai_tech + 1 crypto + 1 mongolia + 5 other) ensures balanced briefing |
| No market data / video integration | Bloomberg-grade /mse page + 33-video curated international financial feed |
| Single brand | White-label deployment for any institutional customer |

## 3-year commercial vision (post-sprint horizon)

**Year 1 (2026):** First 3-5 commercial customers. Tier 1 + Tier 2 mix. ~USD 10-25K MRR. One reference partnership (likely Tier 3 with MSE Inc. or Bank of Mongolia for credibility).

**Year 2 (2027):** Multi-tenant architecture (Phase 9.2 deferred work) lets us scale to 10-20 customers without per-customer engineering. Add customer self-service editorial CMS (Phase 7.2.2). API revenue stream from Tier-3 partners. ~USD 50-100K MRR.

**Year 3 (2028):** Mongolian-language LLM API for partners — programmatic translation-as-a-service, monetized per call. Expand into adjacent verticals (legal-document Mongolian translation, government-comms editorial pipeline). Possibly second market (Kazakhstan / Kyrgyzstan / other Central Asian markets with similar bilingual-financial-content needs).

## What we explicitly do NOT do

To stay honest about the moat:

- **We're not a generic translation service.** GPT-4 can translate; the moat is the editorial-rule enforcement + Mongolian-financial-domain prompt engineering.
- **We're not a Bloomberg replacement for English-fluent professional analysts.** They still need real-time tick data, terminal-level analytics, etc. We address the breadth-of-team-access problem, not the depth-of-quant-tools problem.
- **We're not a CMS or a publishing platform.** Customers don't write articles; we curate + translate + publish. Editorial control sits with the founder + the editorial pipeline rules. Phase 7.2.2 will offer a moderation queue for Tier-1 customers who want pre-publish review.
- **We're not selling AI per se.** AI is the means; Bloomberg-grade Mongolian-Cyrillic financial content is the product. Customers don't care which LLM we call.

## When to walk away from a deal

- Customer wants you to white-label *for free* in exchange for "exposure" → walk away. Reference customers are valuable but free deployments train the wrong commercial behavior.
- Customer wants you to dramatically rewrite the editorial conventions (e.g., "we want long-form opinion pieces, not Bloomberg-style briefings") → walk away. The editorial discipline is the moat; surrendering it surrenders the moat.
- Customer wants legal indemnification beyond what you can absorb (e.g., warrants of fitness for regulatory disclosure) → escalate to legal counsel before signing.
- Customer wants exclusivity in Mongolia → say no unless they're paying Tier-3 partnership fees that make it worth giving up the rest of the market.

---

## [FOUNDER ADJUST] checklist

- [ ] Confirm the 3-year vision matches founder's actual ambition (be honest about whether you want to scale to 20 customers or stay deliberately small with 3-5 high-touch deployments)
- [ ] Adjust the "walk away" criteria based on founder's risk tolerance + cash runway
- [ ] Add or remove differentiators based on conversations with actual prospects
- [ ] Decide whether to surface this document to customers (probably not — internal reference only) or keep it private

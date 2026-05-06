# Pricing Model — Phase 9.2

> **Phase 9.2 deliverable.** 3-tier pricing structure with `[FOUNDER ADJUST]` placeholders for actual values. Anchored on competitor seat costs + architect-suggested Mongolia mid-market ranges. Founder fills final values during the Day 13 review based on cost analysis + customer-discovery interviews.

---

## Anchor references (market context)

| Source | Cost | Notes |
|---|---|---|
| **Bloomberg Terminal** (single seat) | ~USD 24,000/year ≈ 2,000/month | Industry standard; English-only; per-seat licensing prevents team sharing |
| **Refinitiv Eikon** (single seat) | ~USD 22,000/year ≈ 1,800/month | Competitor to Bloomberg; same per-seat model |
| **Mongolian commercial bank typical Bloomberg footprint** | 2-3 seats | Estimated from bank-size + analyst-headcount; verify per-customer |
| **Azurise Solution operational cost** | ~USD 40-70/month total | Whole platform — Gemini + Claude APIs + Resend (free Vercel + GitHub Actions) |

Per-customer marginal cost for a white-label deployment is essentially **founder time** + a small fraction of the LLM token spend (call it ~USD 5-10/month additional per customer). This is the leverage Azurise has: the cost-of-goods-sold is near-zero per additional customer.

---

## 3-tier pricing structure

### Tier 1 — White-label deployment

**Who it's for:** Commercial banks, established securities firms, government regulators, large media outlets. Customer wants their own domain, full branding control, broad internal team access.

**What's included:**
- Custom domain (e.g., `markets.tdb.mn`, `research.bdsec.mn`)
- Customer branding throughout (logo, colors, typography per customer brand book — within Tailwind v4 customization scope)
- Same daily editorial output as Orange News (10 curated posts per day)
- Same MSE / market data / video feed integrations
- Daily Facebook publishing under customer's own page (optional)
- 30-min monthly review call + ad-hoc support
- 99% uptime SLA (Vercel + GitHub Actions reality)

**Pricing:**

| Component | Value |
|---|---|
| One-time setup fee | `[FOUNDER ADJUST — suggested USD 5,000-15,000]` |
| Monthly subscription | `[FOUNDER ADJUST — suggested USD 3,000-8,000]` |
| Annual prepay discount | `[FOUNDER ADJUST — suggested 10-15%]` |

Architect rationale for the suggested range: Tier 1 should price at a clear value-per-seat fraction of Bloomberg. If a bank is paying 2 Bloomberg seats (~USD 4,000/month combined), Tier 1 at USD 3,000-8,000/month replaces or augments that spend with the editorial-team-wide visibility benefit. Founder confirms based on actual customer-discovery conversations.

---

### Tier 2 — Branded subdomain

**Who it's for:** Smaller firms, mid-market players, organizations testing the value proposition before committing to full white-label. Customer wants their brand visible but accepts shared infrastructure.

**What's included:**
- Subdomain on a shared backend (e.g., `customer-name.azurise.mn`)
- Customer logo + accent color (no full brand-book customization)
- Same daily editorial output
- Same MSE / market data / video feed integrations
- Quarterly review call + email support
- Best-effort uptime (no formal SLA)

**Pricing:**

| Component | Value |
|---|---|
| One-time setup fee | `[FOUNDER ADJUST — suggested USD 1,000-3,000]` |
| Monthly subscription | `[FOUNDER ADJUST — suggested USD 500-1,500]` |
| Annual prepay discount | `[FOUNDER ADJUST — suggested 10-15%]` |

Architect rationale: Tier 2 should be priced as a "no-brainer try" — under USD 2,000/month so a mid-market firm can sign without major procurement-board review. Sweet spot: ~USD 800-1,200/month.

---

### Tier 3 — Strategic partnership

**Who it's for:** MSE Inc., Bank of Mongolia, large media outlets where the relationship is deeper than vendor↔customer. Often involves co-branded sections on the customer's existing site, or content-licensing rather than infrastructure-licensing.

**What's included:**
- Negotiable; structured per partnership
- Possible elements: co-branded content section on customer's site, content licensing for syndication, custom topic mix for the customer's editorial focus, API access for the customer's own systems, exclusive features
- Revenue-share or fixed-fee or hybrid

**Pricing:**

| Component | Value |
|---|---|
| Setup fee | `[FOUNDER ADJUST — suggested USD 50,000-200,000 one-time]` |
| Monthly retainer | `[FOUNDER ADJUST — suggested USD 5,000-20,000]` |
| Revenue share (if applicable) | `[FOUNDER ADJUST — typical 10-30% of attributable revenue]` |

Architect rationale: Tier 3 is bespoke. Use Tier 1 monthly as the floor + setup as the project-launch cost. If revenue share is in play, founder negotiates per deal.

---

## Add-ons (any tier)

| Add-on | What it gives | Tier-1 price | Tier-2 price |
|---|---|---|---|
| **Custom topic mix** | Customer editorial preferences (e.g., emphasize mining, exclude crypto) | `[FOUNDER ADJUST]` setup | `[FOUNDER ADJUST]` setup |
| **API access** | Programmatic JSON feed for customer's own systems | `[FOUNDER ADJUST]` /month | `[FOUNDER ADJUST]` /month |
| **Custom Mongolian editorial CMS** (Phase 7.2.2 future) | Customer staff edits via web UI | `[FOUNDER ADJUST]` setup + monthly | not available |
| **Email-newsletter delivery** (Resend integration extension) | Customer's branded daily-briefing email to their list | `[FOUNDER ADJUST]` /month | `[FOUNDER ADJUST]` /month |
| **Custom integrations** (CRM webhook, internal Slack feed, etc.) | Per-spec integration work | `[FOUNDER ADJUST]` per integration | not available |

---

## Pilot offer (not a tier — sales tool)

For first-3 closed customers: **30-day free pilot** at Tier 1 deployment level. Success criteria captured in `demo_scheduling_template.md` pilot proposal section. Converts to paid Tier 1 at end of pilot if SLA met.

Architect rationale: founder needs ~3 reference customers to make the cold-outreach pipeline self-sustaining. Free pilots accelerate that. After 3 references, no more free pilots — the social proof is enough.

---

## What this pricing model assumes (verify in customer discovery)

1. Mongolian banks have non-trivial Bloomberg / Refinitiv spend today (verify in Day-13 outreach conversations).
2. Decision authority for SaaS purchases at this price range typically sits with Head-of-Digital / Head-of-Marketing — not requiring board approval (true for most BDSec-tier firms; less true for Tier-1 banks).
3. Procurement cycles run 4-12 weeks for Tier 1; 2-6 weeks for Tier 2.
4. Customers will value the Mongolian-Cyrillic editorial layer (not just translated content) at the prices above.

If any of these assumptions break in customer discovery, revisit pricing.

---

## Founder Day 13 review checklist

- [ ] Fill all `[FOUNDER ADJUST]` price values based on cost analysis + market discovery
- [ ] Confirm currency (USD vs MNT) — recommend USD for Tier 1 (international comp), MNT for Tier 2 (domestic-friendly)
- [ ] Add VAT / tax handling note (10% Mongolian VAT applies; price quoted with-VAT or without?)
- [ ] Decide payment terms (monthly invoice / quarterly prepay / annual prepay)
- [ ] Decide currency-risk handling for USD-denominated Tier 1 (annual rate-lock or quarterly adjustment?)
- [ ] Add a "discovery-call only" service for prospects too small for Tier 2? (USD 500 / hour, refundable against future contract)

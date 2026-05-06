# Customer Success Metrics — Phase 9.3

> **Phase 9.3 deliverable.** KPI framework for measuring whether a deployed customer is getting value. Use during pilot → paid conversion conversations and during quarterly customer success reviews.

---

## Customer-side metrics (what the customer sees)

### Engagement (the "is anyone reading this?" question)

| Metric | Target | Source | Cadence |
|---|---|---|---|
| **Daily active readers** (unique visitors per day) | Tier 1: ≥50; Tier 2: ≥20 | Vercel analytics, customer's own GA if added | Daily, reviewed weekly |
| **Email subscribers** (active newsletter list) | Tier 1: ≥100 in 90 days; Tier 2: ≥30 | Resend Audience dashboard | Weekly |
| **Article views per day** (sum across all routes) | Tier 1: ≥500; Tier 2: ≥150 | Vercel page-views | Weekly |
| **Average time on site** (session duration) | ≥90 seconds | Vercel / customer GA | Monthly |
| **Click-through rate to advisory services** | ≥1% (if customer has a CTA on each article) | Customer's own conversion tracking | Monthly |

**How to read these:** if a Tier-1 customer is hitting <20 daily readers after 60 days, the deployment isn't reaching its target audience — investigate (was the launch announcement done? Is the URL discoverable? Is the brand recognizable?). Course-correct before the renewal conversation.

### Content satisfaction (the "is what we're publishing good?" question)

| Metric | Target | Source | Cadence |
|---|---|---|---|
| **Editorial complaints** (flagged articles) | ≤2 per month | Customer admin reports to founder | As they arise |
| **Customer-suggested topic additions** | Captured + implemented within 1 week | Email | As they arise |
| **Sentiment on customer's social channels** | Net positive | Customer's social listening | Monthly |

---

## Product-side metrics (what we measure)

### Reliability

| Metric | Target | Source | Cadence |
|---|---|---|---|
| **Pipeline uptime** (% of scheduled runs that complete successfully) | ≥99% per month | `gh run list` history | Weekly |
| **Mean time to recovery** (MTTR on detected failures) | ≤2 hours | Slack notification → fix-pushed timestamp | Per incident |
| **Critical incidents** (customer-affecting outages) | 0 per quarter | Customer reports + internal tracking | Monthly |

### Editorial output

| Metric | Target | Source | Cadence |
|---|---|---|---|
| **Posts per day** (auto-published) | 10 | `translated_posts.json` count | Daily |
| **Mongolian-source post share** | ≥20% (current ikon + Montsame baseline) | Source field analysis | Weekly |
| **Translation quality score** (sample audit, rubric in `docs/translator_logging_spec.md`) | ≥4/5 average | Founder spot-check, 3 random posts/week | Weekly |
| **Cron success rate** | ≥99% per workflow per month | GHA history | Monthly |

### Refresh cadence

| Metric | Target | Source | Cadence |
|---|---|---|---|
| **Time from source publish to translated content live** | ≤24 hours (one cron cycle) | RSS pub dates vs first-on-customer-site time | Quarterly audit |
| **Video feed refresh** | ≤4 hours from upstream | YouTube fetch logs | Weekly |
| **MSE data refresh** | ≤6 hours from market events | mse_data_fetcher logs | Weekly |

---

## Business-side metrics (the founder's commercial dashboard)

### Revenue

| Metric | Target | Cadence |
|---|---|---|
| **MRR per customer** | Tier 1: USD 3K-8K; Tier 2: USD 500-1,500 (per pricing model) | Per contract |
| **MRR total** | First milestone: USD 10K MRR (3-5 customers) | Monthly |
| **CAC payback period** | ≤6 months | Per customer cohort |

### Sales pipeline

| Metric | Target | Cadence |
|---|---|---|
| **Cold-outreach reply rate** | ≥10% (B2B SaaS benchmark) | Monthly |
| **Demo-to-pilot conversion** | ≥30% | Monthly |
| **Pilot-to-paid conversion** | ≥50% | Quarterly |
| **Sales cycle length** | Tier 2: ≤6 weeks; Tier 1: ≤12 weeks | Per closed deal |

### Retention

| Metric | Target | Cadence |
|---|---|---|
| **Renewal rate** (annual) | ≥80% | Annual |
| **Customer satisfaction score** (NPS or simple 1-10) | NPS ≥30, average ≥7/10 | Quarterly |
| **Upsell rate** (Tier 2 → Tier 1, or add-on adoption) | ≥20% of customers per year | Annual |

---

## Per-customer monthly review template (founder use)

For each customer, fill in monthly:

```
Customer: {Name}
Tier: {1 / 2 / 3}
Months active: {N}
MRR: USD {amount}

CUSTOMER-SIDE METRICS
- Daily active readers (avg this month): {N}
- Email subscribers (current count): {N}
- Article views per day (avg): {N}
- Editorial complaints this month: {N}
- Topic additions requested: {list}

PRODUCT-SIDE METRICS
- Pipeline uptime this month: {%}
- Critical incidents: {N}
- Translation quality (founder spot-check avg): {/5}

BUSINESS-SIDE METRICS
- Renewal probability (founder gut): {High / Medium / Low}
- Upsell potential (founder assessment): {description}

ACTIONS
- {action 1 with owner + due date}
- {action 2 with owner + due date}
```

Send the review summary to the customer's admin contact monthly. Keeps the relationship anchored on outcomes, not vendor-mode.

---

## Aggregate dashboard (when there are 3+ customers)

Once Azurise has 3+ customers, build a simple dashboard combining all customer-side + business-side metrics. Until then, a Google Sheet or Notion table per customer is sufficient.

Suggested dashboard tools (no engineering work needed):
- **Notion** for the customer review table (free, easy collaboration)
- **Google Sheets** for the business-side aggregation
- **Plausible** or **Vercel Analytics** if customer wants their own analytics (out-of-the-box; no GA4 required)

---

## What this framework explicitly does NOT measure

- **Per-article view-time analytics.** Out of scope until Phase 10.x analytics infrastructure (if/when GA4 or equivalent is wired in).
- **Article-level revenue attribution.** Customer's own conversion tracking handles this; we don't ingest customer-side revenue data.
- **A/B testing of editorial variants.** The Bloomberg-grade editorial polish is the brand promise; we don't experiment per-customer.

---

## [FOUNDER ADJUST] checklist

- [ ] Adjust target numbers based on actual customer cohort sizes (Tier 1 readership of "≥50/day" assumes a bank-team-sized audience; recalibrate per customer)
- [ ] Confirm the founder spot-check editorial-quality cadence is sustainable (weekly = 12 articles per week to read; if too much, drop to monthly)
- [ ] Decide whether to share product-side metrics with customers or keep them internal
- [ ] Add metrics for any custom integrations the customer requested (e.g., email-newsletter open rate, embed-iframe load time)

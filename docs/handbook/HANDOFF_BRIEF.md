# Orange News + Azurise AI — Handoff Brief

**Date:** May 2026
**Founder:** Munkhsaikhan Mongolbayar — Founder, Orange News & Azurise AI
**Repo:** github.com/mctunghai-pixel (orange-news-automation + orangenews-website)

---

## 1. Sprint summary (Day 1-17)

### Day 1-4: Foundation
- Phase 1-3: Backend pipeline (RSS + translator + FB poster)
- Phase 4-6: Production polish + MSE Bloomberg-grade page

### Day 5-14: Production sprint (master plan to commercialization)
- Day 5: Phase 7.1 Article archive (8 commits)
- Day 6: Phase 7.2.1 Subscribe + 7.3 reservation (5 commits)
- Day 7: Phase 8.1 Track A Slack notifications (1 commit)
- Day 8: Phase 7.3 Live video feed end-to-end (7 commits)
- Day 9: Phase 6.1.5 Montsame scraper (3 commits)
- Day 10: Phase 9.1 Sales deck draft (1 commit)
- Day 11: Production polish — lint, DNS, Slack diagnostic, docs (3 commits)
- Day 12: Phase 9.2 Customer outreach kit (2 commits)
- Day 13: Founder review session — engineer standby
- Day 14: Phase 9.3 Demo preparation + sprint-complete docs (2 commits)

### Day 15-17: Documentation suite
- Day 15: TECHNICAL_HANDBOOK.md + MARKET_RESEARCH.md
- Day 16: BUSINESS_PROJECT_TEMPLATE.md
- Day 17: BUSINESS_PLAN.md + consistency pass

**Total: ~33 production commits Day 5-14 + ~5 documentation commits Day 15-17**

---

## 2. Production infrastructure state

### Backend (orange-news-automation)
- 5 GitHub Actions workflows:
  - `orange_news.yml` (06:00 MNT daily content)
  - `market_watch_live.yml` (07:45 MNT morning markets)
  - `mse_update.yml` (5 fires/day intraday MSE)
  - `youtube_update.yml` (every 2h video aggregation)
  - `market_data_update.yml` (every 30 min markets)

- Editorial pipeline:
  - Gemini Pro primary translator
  - Claude Haiku fallback
  - Bloomberg-grade Rule 0/7 enforcement
  - 13 international RSS feeds + Montsame scraper + ikon.mn

### Frontend (orangenews-website)
- Next.js 16 + React 19 + Tailwind v4 + TypeScript
- Deployed to www.orangenews.mn (Vercel)
- Live routes:
  - `/` homepage с MarketSnapshot (12 cells)
  - `/mse` Bloomberg-grade Mongolian Stock Exchange
  - `/video` live feed (6 channels, 33 curated)
  - `/category` 7-day archive
  - `/articles` archive-aware slug resolution
  - `/rss.xml` 7-day window
  - `/newsletter` Subscribe form (code shipped)

---

## 3. Commercialization assets shipped

### docs/sales/ (Day 10-14)
- `sales_deck_draft.md` (15 slides)
- `customer_target_list.md` (15 targets, 4 tiers)
- `outreach_email_templates.md` (4 variants MN+EN)
- `demo_scheduling_template.md`
- `one_pager_executive_summary.md`
- `pricing_model_spreadsheet.md` (3-tier framework)
- `live_demo_script.md` (30-min walkthrough)
- `technical_faq.md`
- `customer_onboarding_checklist.md` (4-week playbook)
- `customer_success_metrics.md` (KPI framework)
- `strategic_positioning_brief.md`
- `sprint_retrospective.md`

### docs/handbook/ (Day 15-17)
- `TECHNICAL_HANDBOOK.md` (~35 pages)
- `MARKET_RESEARCH.md` (Mongolia financial sector + pricing scenarios)
- `BUSINESS_PROJECT_TEMPLATE.md` (~24 pages, pre-seed VCs)
- `BUSINESS_PLAN.md` (~44 pages, institutional investors)

Each handbook document available в:
- Markdown source
- DOCX (founder edits)
- PDF (investor presentation)

---

## 4. Outstanding founder activations (decoupled от sprint)

| Action | Time | Priority |
|---|---|---|
| Slack webhook one-liner CLI | 5 min | 🟡 MEDIUM (production observability) |
| Resend Vercel env vars | 25 min | 🔴 HIGH (Subscribe activation) |
| FB token migration to long-lived | 15 min | 🟡 MEDIUM (~30 days buffer) |
| Hostinger cancellation | 5 min | 🟢 LOW (cost optimization) |

Slack remediation one-liner (verified Day 11):

```bash
gh secret set SLACK_WEBHOOK_URL --body "<webhook_url>" \
  -R mctunghai-pixel/orange-news-automation
```

---

## 5. Outstanding founder review tasks

### Sales materials review (~2-2.5 hours)
- `sales_deck_draft.md` (9 [FOUNDER ADJUST] tags)
- `customer_target_list.md` (33 tags — LinkedIn research)
- `outreach_email_templates.md` (3 tags — register polish)
- `demo_scheduling_template.md` (1 tag — calendar tool)
- `one_pager_executive_summary.md` (4 tags — bio + LinkedIn)
- `pricing_model_spreadsheet.md` (16 tags — pricing values)

### Documentation review (~3-4 hours)
- `BUSINESS_PROJECT_TEMPLATE.md` (founder voice polish)
- `BUSINESS_PLAN.md` ([FOUNDER ADJUST] resolutions)
- LLC registration status finalization
- Pricing tier values lock
- Funding strategy decision (Pre-seed Path 1 vs Bootstrap Path 2)

---

## 6. Founder voice locks (Q1-Q8 from Day 15)

- **Q1:** Founder, Orange News & Azurise AI
- **Q2:** LLC бүртгэх process-д (Azurise Solution LLC)
- **Q3:** Tech entrepreneur (15+ years) + Mongolia gap from Taiwan GMBA
- **Q4:** Hybrid revenue (SaaS + advertising + licensing)
- **Q5:** 3-5 paying customers in 6-12 months
- **Q6:** Pre-seed $50-150K (recommended) OR Bootstrap (alternative)
- **Q7:** Conservative Year 1 ($20-50K)
- **Q8:** Mongolia leader + Central Asia expansion

---

## 7. Critical pre-recon findings (used в documents)

### Mongolia tax framework (Day 17):
- 1% CIT for revenue ≤MNT 300M (Year 1-2 effective rate ~1%)
- VAT registration deferred to MNT 400M (Jan 1, 2026)
- 90% tax-bill reduction for taxable income ≤MNT 1.5B
- Investment Law: stabilisation certificate option

### Investor ecosystem (Day 16):
- Mongolia rank #80 globally; ecosystem value $31M
- AND Global precedent: $5M (2017) → $7M IFC Series B (2025)
- Uzum Uzbekistan: $65.5M 2025 (Central Asia FinTech anchor)
- 80% Central Asia 2025 deals under $200K
- Active investors: Mongolia Opportunities Fund I LP, IFC, EBRD, ADB
- Accelerators: MonJa (JICA), Founder Institute, EBRD Star Venture
- MLSP STARTUP grant: MNT 99M (~$30K) non-repayable

### Financial modeling (Day 17):
- Year 1 BASE: $100K / 5 customers / 1% CIT effective = $99K cash
- Year 3 BASE: $2M / 15-20 customers / 10% CIT
- Year 5 BASE: $5M / Central Asia adjacency live
- Exit valuation: 3.0x EV/Revenue → BASE $15M (LOW $9M / HIGH $21-28M)
- Path 1 cash-on-cash return projection: 5-15× если successful exit

---

## 8. Strategic next priorities (post-sprint)

### Immediate (Founder, 1-2 weeks)
1. Activations completion (~50 min)
2. Sales materials founder review (~2-2.5 hours)
3. Documentation founder review (~3-4 hours)
4. Pricing tier values lock (CRITICAL)

### Near-term (Founder, 2-4 weeks)
1. First commercial outreach (Tier 1 banks: TDB, Khan, Golomt)
2. 2-3 demo schedules booked
3. Customer feedback gathered
4. Pricing validation от market

### Medium-term (Founder + Architect, post-customer)
1. Customer-driven feature priorities
2. First sale closing
3. Multi-tenant architecture (если 2nd customer)
4. Phase 7.2.2 admin layer (если customer requests)

---

## 9. Architectural collaboration patterns established

### Push protocol
- Architect handles pushes for code changes (post-diff approval)
- Engineer pre-authorized для documentation commits
- Day 5 readability incident: API verification > UI claim discipline

### Variance discipline
- Engineer flags inconsistencies explicitly (e.g., Day 15 §1.3 vs §7.1 TAM)
- Architect resolves с reconciliation options
- Cross-section consistency preserved

### Pre-recon discipline
- Engineer recon BEFORE drafting strategic sections
- Architect reviews findings + locks framing
- Production state evidence sourced (не fabricated)

---

## 10. Repository state summary

### orange-news-automation (backend)
- Latest human commit: `5714a2c` — *docs: README — sprint COMPLETE (Day 14, ready for first commercial customer)*
- Latest HEAD (incl. cron auto-writes): `d30fd2e` — *data: update youtube_data.json [skip ci]*
- 5 GHA workflows healthy
- Translation pipeline production-grade
- Editorial discipline Bloomberg-grade

### orangenews-website (frontend)
- Latest commit: `e3a83e3` — *docs(handbook): consistency pass — calendar correction + RSS/LLM count alignment*
- www.orangenews.mn live
- Bloomberg-grade UX patterns
- Multi-tenant architecture-ready

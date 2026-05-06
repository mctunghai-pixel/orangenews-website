# Technical FAQ — Phase 9.3

> **Phase 9.3 deliverable.** Anticipated technical questions a prospect's technical staff will ask after the live demo. Concrete answers grounded in the actual production stack — no marketing fluff. If a customer asks something not here, capture the question + add it to this doc post-call.

---

## Architecture

**Q: How is the editorial pipeline built?**

A: Python 3.11 backend, runs on GitHub Actions cron. Five production workflows: `orange_news.yml` (daily article pipeline), `market_watch_live.yml` (live morning Market Watch publish), `mse_update.yml` (MSE data refresh, 5 fires/weekday with redundant cron slots), `youtube_update.yml` (video feed, 2-hour cadence), `market_data_update.yml` (FX + commodities + indices, 30-min cadence). All write JSON files to the repo root, which Vercel's frontend reads via raw.githubusercontent.com URLs with ISR caching.

**Q: Which AI models are used for translation?**

A: Gemini Pro as primary translator (Google's API), Claude Haiku as fallback (Anthropic's API). Both gated on per-call retry + circuit-breaker logic in `orange_translator.py`. Native-Mongolian sources (ikon.mn, Montsame) bypass translation entirely via the `process_mongolian_article` passthrough — they get only Bloomberg-grade editorial polish (Rule 0/7 enforcement, headline 60-80 char range, source-footer convention).

**Q: How is the Mongolian-specific quality validated?**

A: Three layers:
1. **Programmatic rule enforcement** — Rule 0 (calque avoidance — no literal English-to-Mongolian translations), Rule 7 (source-footer convention).
2. **Headline-length validation** — declarative-past-tense convention; 60-80 character target.
3. **Founder daily spot-check** during pilot phase — every morning, founder reads ~3 random posts; flags issues for prompt-engineering iteration.

The translator carries ~1,700 LOC of prompt engineering accumulated over multi-day iteration. That's the moat — generic GPT-4 translation doesn't carry the Bloomberg-style editorial-rule enforcement.

**Q: What's the failure mode if AI providers go down?**

A: Three layers of graceful degradation:
1. Gemini failure → Claude Haiku fallback automatically (same article).
2. Both providers down for the daily run → workflow logs the failure + Slack notification fires (Phase 8.1 Track A); the previous day's content remains live on the frontend (last-known-good via Vercel ISR).
3. Sustained AI outage → manual `workflow_dispatch` after providers recover, or skip a day. Frontend serves last published content; users see no immediate breakage.

**Q: How is the Mongolian Stock Exchange data sourced?**

A: Direct POST to `mse.mn`'s Next.js Server Actions endpoint. We reverse-engineered the action-ID rotation (it changes every 1-3 months when mse.mn redeploys); the fetcher auto-rediscovers via JS bundle inspection on stale-action errors. 8 datasets: marquee, top movers (up + down), trading amount leaders, comex/mining trades, A-board + B-board directories. See `docs/mse_phase6.2_endpoint.md` in the backend repo for the full reverse-engineering writeup.

---

## Reliability

**Q: What's the uptime SLA?**

A: For pilot customers: best-effort, target ≥99% uptime per month, ≤2-hour MTTR on detected failures. For paid white-label deployments: same SLA in writing, with monetary credit if breached. Last 24h actual: 100% uptime across all 4 production cron pipelines.

**Q: How is production monitored?**

A: Phase 8.1 Track A added Slack failure notifications to all 4 production workflows — sub-minute awareness when any non-tolerated step fails. Failures route to a configured `SLACK_WEBHOOK_URL` repo secret. Founder gets a mobile push within 30 seconds of a failed run. Click the link in the notification → land directly on the failed run's GitHub Actions page.

**Q: What's the disaster recovery plan?**

A: Three-pronged:
1. **Data plane** — JSON files in a public GitHub repo. If the GitHub raw URL goes down, content reverts to last-cached on Vercel's edge. If GitHub deletes the repo (extreme), Vercel's cache lasts 30 minutes; we restore from local clone within hours.
2. **Backend pipeline** — fully captured in 5 GHA workflow YAML files + ~14 Python files. A new GitHub Actions org could re-host the pipeline within hours given API keys.
3. **Frontend** — Next.js project deploys from the GitHub repo. New Vercel project + DNS swap = full restoration in <1 hour.

**Q: What about scaling?**

A: Vercel's edge handles arbitrary read load (the data plane is a static GitHub URL behind ISR). The backend pipeline is fixed-cost: same number of cron fires regardless of how many customers consume the output. Adding 10 white-label customers adds zero backend load.

---

## Security

**Q: How are API keys managed?**

A: GitHub Actions repo secrets (server-side only, never exposed to the frontend). 5 secrets currently: `ANTHROPIC_API_KEY`, `FB_ACCESS_TOKEN`, `FB_PAGE_ID`, `GEMINI_API_KEY`, `YOUTUBE_API_KEY`. `SLACK_WEBHOOK_URL` slated to be added (Phase 8.1 Track A activation). Vercel project also holds environment variables for the `RESEND_*` Subscribe configuration. Nothing in client-side bundles.

**Q: What's the data handling policy?**

A: We process publicly-available content (RSS feeds + scraped HTML + YouTube public metadata). No personal data is stored except newsletter subscriber emails (Resend Audiences, GDPR-compliant double-opt-in). Subscribers can unsubscribe via Resend's standard mechanism. No analytics tracking on the public site beyond Vercel's standard request-level metrics (no GA4, no Meta Pixel currently).

**Q: Is GDPR compliant?**

A: Newsletter signup uses double-opt-in (verified link click required before adding to the audience). Resend handles the data-subject-request workflows (export + delete). No tracking pixels on editorial pages. For white-label customers serving EU users, customer is responsible for their own compliance — we provide the GDPR-clean infrastructure.

**Q: What about content licensing?**

A: Each upstream source has its own terms (RSS, scraping, YouTube ToS). Our editorial output is original work (translation + editorial transformation, not verbatim republication). Source attribution is in every article footer. Founder + legal counsel should review before commercial deployment to confirm attribution practices match each source's licensing position. See sales deck slide 15 for the more detailed answer.

---

## Customization

**Q: How long for white-label deployment?**

A: 1 week from green light, typical breakdown:
- Day 1-2: customer brand assets (logo + color palette + typography), DNS setup
- Day 3-4: Vercel project provisioning, custom domain configuration, branded chrome (Tailwind v4 customization)
- Day 5-6: editorial category configuration, customer admin training
- Day 7: production launch + first-day monitoring

**Q: Can we change editorial categories?**

A: Yes. The topic-quota selection in `orange_rss_collector.py` is config-driven — per-customer feed lists + per-customer category quotas are straightforward. A customer that doesn't care about crypto can drop those feeds; one focused on mining can boost the relevant feed weights.

**Q: How do we add custom data sources?**

A: Three integration paths:
1. **RSS feed** (cheapest) — add to `RSS_FEEDS` in `orange_rss_collector.py`. New source live within one cron tick.
2. **HTML scraper** (medium effort) — pattern matches `montsame_scraper.py`. ~2-4 hours per source for selector engineering + maintenance playbook.
3. **API integration** (variable) — depends on the source's API surface. YouTube Data API integration (`youtube_fetcher.py`) is a reference example.

**Q: Can a customer staff edit articles before publication?**

A: Not in the current pipeline (auto-publish on translator success). Phase 7.2.2 reserves a customer-CMS layer for Tier-1 customers who want editorial review — adds a moderation queue between translator and publish. Estimated 1-2 weeks build per the sales deck roadmap.

---

## Integration

**Q: Does it support our SSO?**

A: Not currently — the public site has no auth. For Tier-1 customers wanting analyst-only access (e.g., behind their bank's intranet), SSO integration is a custom build. Likely Vercel + Auth0 or Customer's existing IdP + middleware.

**Q: Can we embed in our existing site?**

A: Yes, three options:
1. **iframe embed** of the public Orange News pages with custom CSS overrides — fastest, least flexible.
2. **JSON consumption** — the backend writes to public GitHub URLs; customer's existing site can fetch the same JSON we use and render in their own design system.
3. **Tier-3 strategic partnership** — co-branded section built directly into the customer's existing site, custom content + editorial mix.

**Q: API access available?**

A: Yes for Tier-1 / Tier-3. The backend already publishes JSON at stable URLs:
- `/translated_posts.json` — daily articles
- `/youtube_data.json` — video feed
- `/mse_data.json` — MSE data
- `/market_data.json` — global markets
- `/archive/index.json` + `/archive/posts_YYYY-MM-DD.json` — historical archive

Customer pulls these directly with simple HTTP. No auth currently, but per-customer API keys + rate-limiting can be added if needed.

**Q: Webhook support for new-article notifications?**

A: Not built today. If a Tier-1 customer needs it (e.g., to push notifications into their internal Slack or CRM), it's straightforward to add an extra step at the end of the daily pipeline that POSTs to a customer-provided webhook URL. ~1-2 hours of build per customer.

---

## Operational

**Q: How much does this cost to run?**

A: Total operational footprint ~USD 40-70/month:
- Vercel: free tier sufficient
- GitHub Actions: free tier sufficient (~30-40 CI minutes/month total)
- Gemini API: ~USD 30-50/month at the current 10-post/day cadence
- Claude API fallback: ~USD 10-20/month
- Resend: free tier sufficient through pilot (3K emails/month, 100 contacts)

Adding a white-label customer adds essentially zero marginal cost — the same backend cron fires once and the JSON serves N customers from Vercel edge.

**Q: Is there a status page customers can check?**

A: Not built today. If demand surfaces, easy to add — the GHA workflow run history + a small page reading from `gh api .../actions/runs` is ~3 hours of work.

---

## What I should have asked but didn't

(Founder, please add real questions you've heard from prospects so future demos go smoother.)

- [ ] [FOUNDER ADJUST]
- [ ] [FOUNDER ADJUST]

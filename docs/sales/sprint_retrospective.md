# Sprint Retrospective — Day 1-14

> **Phase 9.3 deliverable.** Comprehensive review of the Day-5-through-Day-14 commercialization sprint. Captures what shipped, what worked, what surprised us, and a recommended Day-15+ post-sprint trajectory. Founder reference for "what did we actually accomplish" conversations and for narrating the sprint to investors / partners / the press.

---

## Sprint scope

**Period:** Sprint Days 5-14, executed across the calendar week of 2026-05-05 to 2026-05-06 (multiple sprint sessions per calendar day under fast cadence).

**Pre-sprint state (end of Day 4 closure):** Working production pipeline shipping Bloomberg-grade Mongolian financial content. ~25 commits. Phase 6.2a (MSE TOP-20 LIVE) was the most recent milestone. Several gaps:

- No article archive (yesterday's content vanished from `/category/[cat]` and `/articles/[slug]`)
- Newsletter forms shipped as honest-disabled placeholders
- "Шууд үзэх" homepage section was a hardcoded Powell-press-conference card
- No Mongolian-language sources beyond ikon.mn
- No commercialization artifacts (no sales deck, no outreach materials, no pricing model)
- Multiple production observability gaps (silent failures going undetected for days)

**Post-sprint state (end of Day 14):** Production-grade Bloomberg-grade Mongolian financial portal with full sales infrastructure. Master plan progressed Foundation → Commercialization. Ready for first commercial customer onboarding.

---

## Phases shipped (chronological)

### Day 5 (2026-05-05) — Phase 7.1 Article archive (8 commits)

- `60abd0a` readability-lxml fix in `market_watch_live.yml` workflow (3-day silent failure unblocked)
- `31930e0` Phase 7.1 Checkpoint A — `archive_writer.py` + Phase 3.5 step in both daily workflows
- `1acda86` Phase 7.1 Checkpoint B — `fetch-orange-news.ts` archive consumer + types
- `59a21db` Phase 7.1 Checkpoint C — RSS feed reads 7-day archive window
- `4022c61` Phase 7.1 Checkpoint D — `articles/[slug]` uses `getPostBySlug` + 7-day archive nav
- `a81f6b9` Phase 7.1 docs (frontend CLAUDE.md COMPLETE)
- `1cf01e3` Phase 7.1 docs (backend `docs/archive_phase7.1.md`)
- `1dbb8c1` MSE redundant cron expansion (5 fires/weekday)

### Day 6 (2026-05-06) — Phase 7.2.1 Subscribe + MSE mobile + Phase 7.3 reservation (5 commits)

- `d004bf3` Phase 7.2.1 — Resend double-opt-in subscribe (10 files, +1148/-68)
- `2160cb8` MSE Code column hide on mobile
- `c2535ac` Phase 7.3 reservation block (initial)
- `94d48b4` Phase 7.2 → COMPLETE docs
- `34a71c1` Phase 7.3 reservation lock-in (channel IDs + recon findings)

### Day 7 — Phase 8.1 Track A Slack failure notifications (1 commit)

- `6220780` Slack notification step in all 3 production workflows; Track B (Mongolian RSS expansion) deferred to Phase 6.1.5 after recon proved Mongolian web doesn't expose RSS broadly

### Day 8 — Phase 7.3 Live financial video feed (7 commits, 5 checkpoints A-E)

- `a7a033a` Checkpoint A — `youtube_fetcher.py` + 2-hour workflow
- `319a0ce` Checkpoint B — `fetch-youtube.ts` + types + mock
- `fe2cf41` Checkpoint C — homepage VideoFeed replaces hardcoded LiveEvent
- `5eaaf47` Checkpoint D — `/video` archive route + channel filter
- `bde7f07` Checkpoint E (frontend) — CLAUDE.md → COMPLETE
- `88dbdaf` Checkpoint E (backend) — `docs/youtube_phase7.3.md`
- (+ bot commit `0def059` populating youtube_data.json from first cron fire)

### Day 9 — Phase 6.1.5 Montsame Mongolian scraper (3 commits)

- `20743e2` `montsame_scraper.py` + `orange_rss_collector.py` integration hook
- `f1b9f22` Phase 8.1 Track B → DELIVERED docs (frontend CLAUDE.md)
- `1b13dee` `docs/montsame_phase6.1.5.md` (backend tech reference)

### Day 10 — Phase 9.1 Sales deck draft (1 commit)

- `c50a178` 15-slide markdown draft in `docs/sales_deck_draft.md` — first commercialization artifact

### Day 11 — Production polish (3 commits)

- `1eaf715` Lint baseline cleared (15 errors → 0)
- `309fb2d` Frontend CLAUDE.md sprint timeline + Phase 7.2.x SKIP decision
- `d90ed8b` Backend new `README.md` (production state + cron pipelines + sprint timeline)

### Day 12 — Phase 9.2 Customer outreach kit (2 commits)

- `1fb8175` Cleanup of orphan Day-11 deletions
- `6da993a` 5 deliverables in `docs/sales/`: customer target list (15 targets, 4 tiers), outreach email templates (4 variants EN+MN), demo scheduling template, one-pager executive summary, pricing model spreadsheet

### Day 13 — Founder review session (no engineer commits)

- Engineer standby; founder activated (or attempted to activate) Slack webhook + Resend env vars + FB token migration + Hostinger cancellation
- End-of-day verification surfaced that Slack + Resend activations did not visibly land (decoupled from sprint-completion criteria per architect directive)

### Day 14 — Phase 9.3 Demo preparation (this session)

- 6 final commercialization deliverables: live demo script, technical FAQ, customer onboarding checklist, customer success metrics, strategic positioning brief, this retrospective + CLAUDE.md and README.md sprint-complete updates

---

## Cumulative numbers

- **~36 production commits** across both repos (varies slightly by exact count of bot commits and chore commits)
- **9 sprint-session days** of architect-engineer execution, plus 1 founder review day
- **5 phase ships** from the planned roadmap (7.1, 7.2.1, 7.3, 8.1, 6.1.5)
- **3 commercial-artifact ships** (9.1 sales deck, 9.2 outreach kit, 9.3 demo preparation)
- **2 cross-repo integration ships** (frontend ↔ backend coupled work in 7.1 and 7.3)
- **0 production downtime incidents** during the sprint
- **1 silent-failure pattern caught + fixed** (the Day 5 readability-lxml ModuleNotFoundError, undetected for 3 days pre-sprint, unblocked Day 5)

---

## Production state final inventory

### Backend (`mctunghai-pixel/orange-news-automation`)

- **5 production cron workflows:** `orange_news.yml`, `mse_update.yml`, `market_watch_live.yml`, `youtube_update.yml`, `market_data_update.yml`
- **Source coverage:** 13 RSS feeds + 1 native-Mongolian RSS (ikon.mn) + 1 HTML scraper (Montsame) + MSE.mn Server Actions + YouTube Data API + Mongolbank/Yahoo/ExchangeRate APIs
- **Data plane:** 5 JSON files at repo root (`translated_posts.json`, `youtube_data.json`, `mse_data.json`, `market_data.json`, `top_news.json`) + per-day archive snapshots in `archive/`
- **Per-feature reference docs:** 5 in `docs/` (archive, mse, montsame, youtube, translator logging)
- **Top-level README:** new (Day 11 ship)

### Frontend (`mctunghai-pixel/orangenews-website`)

- **Public routes:** 7 production-facing (`/`, `/mse`, `/video`, `/category/[cat]`, `/articles/[slug]`, `/rss.xml`, `/newsletter`) + several smaller pages (about, team, contact, legal)
- **Tech stack:** Next.js 16.2.4, React 19.2.4, Tailwind v4, 6 npm dependencies total
- **Resend integration:** double-opt-in subscribe API + verification flow (gated on Vercel env vars activation)
- **Live video feed:** homepage VideoFeed (6 cards) + `/video` archive route (channel filter)
- **Sales artifacts:** sales_deck_draft.md (15 slides) + 6 documents in `docs/sales/`
- **Lint baseline:** 0 errors

### Operational

- **5 GitHub Actions secrets:** ANTHROPIC, FB_ACCESS_TOKEN, FB_PAGE_ID, GEMINI, YOUTUBE (SLACK_WEBHOOK_URL pending founder activation)
- **3 Vercel env vars pending:** RESEND_API_KEY, RESEND_AUDIENCE_ID, RESEND_VERIFICATION_BASE_URL
- **Total operational cost:** ~USD 40-70/month
- **CI minutes used:** ~30-40 minutes/month (well within free tier)
- **Production uptime during sprint:** 100% across all cron pipelines

---

## Lessons learned

### What worked

1. **Memory-driven verification.** Multiple memory entries (`feedback_verify_push_landed.md`, `feedback_verify_calendar_date.md`, `feedback_verify_prior_session_commits.md`, `feedback_cap_verification_loops.md`) repeatedly saved time within the sprint. Calendar drift caught at 10 separate sessions; missed-push incidents caught twice; silent-deletion-state issues caught once. The pattern of "verify operator claims with hard evidence before acting" earned its keep.
2. **Staged checkpoints with diff-review pauses.** Phase 7.3 (5 checkpoints A-E) and Phase 7.1 (4 checkpoints) shipped cleanly because each checkpoint had its own diff-review gate. Caught the Phase 7.1 D missed-wire-up bug during verification, preventing a half-shipped feature.
3. **File-based commit messages (per `feedback_git_commit_heredoc_apostrophe.md`).** Eliminated all heredoc-apostrophe failures from Day 5 onward. Small operational lesson with outsized impact.
4. **Pre-flight smoke tests at session start.** Catching production state before issuing the day's prompt repeatedly prevented work-on-stale-assumptions. Day 8's `youtube_data.json` already existing from prior workflow runs informed the recon.
5. **`[FOUNDER ADJUST]` tag convention in sales artifacts.** Lets the engineer ship complete-shaped documents while honestly marking what needs founder voice, vs leaving placeholder gaps that look incomplete. Founder review queue is well-bounded.

### What surprised us

1. **Mongolian web doesn't expose RSS broadly.** Day 6 recon discovered that montsame.mn / news.mn / gogo.mn / eagle.mn / shuud.mn / itoim.mn / medee.mn / baabar.mn / zarig.mn all 404 / TCP-unreachable / serve HTML for any RSS path. ikon.mn is the lone exception. This invalidated the original Phase 8.1 Track B "Mongolian RSS expansion" scope and forced the scraper-based Phase 6.1.5 path. Memory entry `project_orange_news_mongolian_rss_dead.md` saved future-Claude from re-probing.
2. **YouTube RSS does NOT expose video duration.** This broke Phase 7.3's locked "skip <3 min" filter assumption. The hybrid γ source strategy (RSS for discovery + YouTube Data API for duration enrichment) emerged from this constraint and turned out to be cheaper than the original spec estimated (~24 quota units/day vs estimated ~1,080).
3. **Bloomberg has 5+ YouTube channels** with overlapping branding. Day 8 recon mapped them; canonical financial pick is `UCIALMKvObZNtJ6AmdCLP7Lg` (Bloomberg Television). Without that disambiguation we would have shipped a less-financial-focused video feed.
4. **Calendar drift was every-session, not occasional.** 10 sessions, 10 drift incidents. This pushed the engineer to flag-tersely-then-execute rather than re-debate each time. The work itself was largely calendar-independent so the drift didn't block delivery.
5. **GitHub secrets API + browser save flow has rough edges.** Day 8's six-attempt SLACK_WEBHOOK_URL save mystery was resolved Day 11 via canary test confirming GitHub API health — root cause was operator-side (browser save flow + cwd-default repo confusion) not GitHub-side. Day 13 attempted re-activation also did not visibly land. This is an open area: founder-side tooling friction is a real operational risk for the commercial deployment phase.

### What we'd do differently

1. **Capture more memory entries earlier.** The calendar-drift pattern was visible by Day 6; we wrote the memory entry on Day 6 close. Should have written it on Day 5 close.
2. **Add operational health checks proactively rather than after silent failures.** Day 5's readability-lxml fix was reactive (3-day silent failure surfaced by manual `gh run list`). Phase 8.1 Track A is the right durable fix but it shipped Day 7 — a week after the original silent failure. In a longer-running production system, surface gaps like this would land first, not later.
3. **Engage founder earlier on activations.** Day 6-12 founder activations (Slack + Resend) were left as "operator follow-up" but never reached "operator complete" within the sprint. Stronger gating ("we ship docs only when activations are confirmed") would have driven completion. The architect's Day 13 founder-review gate was the right structural fix; should have been Day 8 or Day 9.
4. **Web search for sales-related research.** Day 10 + Day 12 + Day 14 all skipped web search reconnaissance for sales-content material. This was a defensible call (recon would mostly mark as `[FOUNDER ADJUST]` either way) but it left a content-richness gap. A more thorough Day 14 might have included recent comparable B2B SaaS sales-deck examples or actual CEO-bio public records for the customer target list.

---

## Outstanding deferred items (Day-15+ inputs)

### Founder-action gated

- `SLACK_WEBHOOK_URL` repo secret — GitHub API verified healthy; founder needs to retry the verified one-liner from any cwd
- `RESEND_API_KEY` + `RESEND_AUDIENCE_ID` Vercel env vars — Subscribe form will work end-to-end once set
- FB token migration to long-lived System User token (per Day 13 spec; FB Page token expires ~June 9)
- Hostinger cancellation (DNS verified safe Day 11)

### Engineering deferred

- Phase 7.1.x — date-filter UI on `/category/[cat]`
- Phase 7.2.x — admin CSV export endpoint (architect-decision: SKIP, Resend dashboard covers); rate limiting on `/api/subscribe`
- Phase 7.3.x — Bloomberg News optional add-on; channel-distribution rebalance if needed; Next/Image optimization for thumbnails; header navigation entry for `/video`
- Phase 8.1.x — email-fallback alerting via Resend transactional; paging escalation for repeat failures
- Phase 9.2 (in commercialization roadmap) — multi-tenant architecture for second/third customer
- Phase 7.2.2 (in commercialization roadmap) — customer self-service editorial CMS

### Sprint commercialization deferred

- Sales deck founder review (~30 min, 9 `[FOUNDER ADJUST]` tags)
- Customer target list LinkedIn research (~30-45 min, 33 named-contact tags)
- Outreach email templates Mongolian register polish (~10 min, 3 voice tags)
- Demo scheduling template calendar tool decision (~5 min, 1 tag)
- One-pager bio + LinkedIn (~10 min, 4 tags)
- Pricing model actual values (~30-45 min, 16 critical pricing tags)
- Live demo script founder-customization (~10 min)
- Strategic positioning brief founder-review (~15 min)

Total founder review queue post-sprint: ~3-3.5 hours.

---

## Recommended Day 15+ trajectory

**Week 1 post-sprint (Day 15-21):**

- Day 15: founder completes the activations + sales-artifact reviews (the work the founder was meant to do during Day 13). Engineer standby.
- Day 16-17: founder begins cold outreach using the Day 12 templates. Engineer standby for technical-question support.
- Day 18-19: first prospect demos using the Day 14 demo script. Engineer standby for live-demo support if needed.
- Day 20-21: founder + engineer joint debrief on what's resonating, what's not, and what to adjust in the artifacts.

**Week 2-4 post-sprint:**

- Convert first paying customer (target: Capitron or BDSec per the engineer-recommended outreach sequence)
- Begin Phase 9.2 multi-tenant work in parallel — second customer onboarding will need it

**Beyond:**

- Sustain editorial quality at scale (the founder spot-check cadence is the leading indicator)
- Add the deferred Phase 7.x.x and Phase 8.1.x items as customer feedback prioritizes them
- Begin Phase 7.2.2 (customer-CMS) once 2+ Tier-1 customers want pre-publish editorial review
- Year 2 expansion: API revenue, second-market exploration, additional Mongolian sources via the Phase 6.1.5 scraper pattern

---

## A note on what this sprint actually proved

The sprint demonstrated that a single founder + an architect + an engineer (the architect-engineer relationship being a Claude Code session) can:

- Ship 5 substantive product phases in 9 sprint-session days
- Maintain 100% production uptime throughout
- Land 3 commercialization artifacts (deck, outreach kit, demo preparation) ready for external customer engagement
- Catch and fix every detected production issue within the same sprint

The bottleneck for the next phase isn't engineering velocity — it's commercial momentum. Founder completing the Day-13 activations + the Day-14 reviews unlocks the customer-engagement phase. The infrastructure is ready.

---

## [FOUNDER ADJUST] checklist

- [ ] Verify the cumulative numbers (~36 commits, 5 phase ships, 3 commercial artifacts) match founder's recollection — if a milestone is missing, add it
- [ ] Adjust the "what we'd do differently" section based on founder's own retrospective view (founder-side experience may differ from engineer-side experience)
- [ ] Confirm the Day 15+ trajectory is realistic given founder's actual time availability
- [ ] Decide whether to share this retrospective externally (e.g., as an investor update) or keep internal

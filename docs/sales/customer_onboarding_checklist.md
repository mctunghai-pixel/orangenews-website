# Customer Onboarding Checklist — Phase 9.3

> **Phase 9.3 deliverable.** 4-week playbook from contract signature to production launch. Use after a paid Tier-1 deployment is greenlit; pilot deployments compress this into ~5-7 days (skip the contract step + lighter customization).

---

## Phase 1 — Pre-deployment (week 1)

### Discovery call (60 min, founder-led)

- [ ] Confirm decision-makers + escalation path (CEO / Head of Digital / Head of Marketing — who signs the deployment off?)
- [ ] Confirm target audience (RM team / corporate clients / retail customers / regulator stakeholders / external?)
- [ ] Confirm content categories needed (default: tech / finance / crypto / AI / Mongolia mix). Add or remove based on customer's editorial priorities.
- [ ] Confirm distribution surface(s) — branded subdomain only? + email newsletter? + customer's app integration?
- [ ] Confirm pilot vs full deployment — pilot = 30 days free, full = signed Tier-1 contract.

### Customization spec lockdown (founder + customer)

- [ ] Domain decision: subdomain (e.g., `markets.{customer}.mn`) or full domain (`{newdomain}.mn`)? If full domain, customer registers + provides DNS access.
- [ ] Brand assets: SVG logo (preferred) or high-res PNG; primary color hex; accent color hex; typography preferences (we default to the Orange News font stack — customer can specify if mandatory).
- [ ] Editorial category configuration: confirm topic quotas (e.g., +1 finance, -1 crypto for a banking customer).
- [ ] Customer logo + brand-color final approval — get the green-light email; this becomes the visual identity record.

### Brand asset gathering (customer-side, 2-3 days)

- [ ] Customer provides:
  - [ ] Logo (SVG + PNG fallback, light + dark variants if applicable)
  - [ ] Brand color palette (primary + accent + neutral, with hex codes)
  - [ ] Typography preference (or accept default)
  - [ ] Footer copy (legal disclaimer, copyright line, social links)
  - [ ] Optional favicon / OG-image override
- [ ] Confirm receipt + ask any clarification questions before kicking off Day-3 work.

### DNS planning (founder + customer)

- [ ] Identify DNS provider (Namecheap, Cloudflare, Vercel DNS, GoDaddy, etc.)
- [ ] Confirm customer can add DNS records — needed for either subdomain CNAME or full-domain delegation
- [ ] Document DNS provider login (read-only access for verification, or customer adds records themselves with our values)
- [ ] DNS records needed:
  - Custom subdomain: 1× CNAME pointing at Vercel
  - Full domain: 2× A records (or NS delegation) pointing at Vercel
- [ ] DNS propagation expected: 5 min - 24 hours depending on provider + TTL

### Contract + invoicing setup (paid deployments only)

- [ ] Contract signed (founder template + customer legal review)
- [ ] First invoice issued — setup fee + first month subscription
- [ ] Payment method confirmed (bank transfer, USD wire, etc.)
- [ ] Tax handling clarified (Mongolian VAT: 10%, included or separate)
- [ ] Renewal terms documented

---

## Phase 2 — Deployment (week 2)

### Vercel project creation (founder, ~30 min)

- [ ] Fork or branch the `orangenews-website` repo for the customer (private fork; customer doesn't get access to source unless contract specifies)
- [ ] Create new Vercel project from the customer's branch
- [ ] Configure environment variables for the customer:
  - [ ] `NEXT_PUBLIC_SITE_URL` — customer's domain
  - [ ] `RESEND_API_KEY` — customer's own Resend account if newsletter included, else Orange News shared
  - [ ] `RESEND_AUDIENCE_ID` — customer's audience UUID
- [ ] Verify Vercel build succeeds on the customer's branch

### Custom domain configuration (founder + customer, ~1 day)

- [ ] Add custom domain in Vercel project settings
- [ ] Customer adds the DNS record (CNAME or A) pointing at Vercel
- [ ] Wait for DNS propagation
- [ ] Confirm Vercel shows "Valid Configuration" + auto-provisions HTTPS cert
- [ ] Test customer domain in browser (curl + actual visit)

### Brand customization (founder, ~1-2 days)

- [ ] Replace logo in `src/components/layout/Header.tsx` (also any references in `<Image>` components)
- [ ] Update Tailwind config (`tailwind.config.ts` if exists, or `globals.css`) with customer's color palette
- [ ] Update OG image / favicon if customer provided overrides
- [ ] Update footer copy (legal disclaimer, copyright, social links)
- [ ] Visual QA: walk every public route + verify customer brand applied correctly
- [ ] Mobile responsive QA: same routes at 375px

### Editorial category configuration (founder, ~30 min)

- [ ] Update `RSS_FEEDS` in `orange_rss_collector.py` if customer requested feed changes
- [ ] Update topic-quota config if categories shift
- [ ] Test full pipeline run with customer's config: `gh workflow run orange_news.yml`
- [ ] Verify the produced `translated_posts.json` matches customer's expected content mix

### Test environment validation (founder, ~1 day)

- [ ] Walk all public routes on the customer's domain — same checklist as the live demo
- [ ] Submit test newsletter signup; verify email arrives + verification link works
- [ ] Submit a few different email addresses to test edge cases (uppercase, plus-addressing, unicode local-part)
- [ ] Run `gh workflow run orange_news.yml` and verify the full daily pipeline produces fresh content on the customer's domain
- [ ] Capture before-and-after screenshots for the customer's review

---

## Phase 3 — Training (week 3)

### Customer admin training session (60 min, founder-led)

- [ ] Walk customer's designated admin through:
  - [ ] What the production cron schedule looks like (when fresh content lands)
  - [ ] How to reach the founder for issues + expected response time
  - [ ] How to read the `gh run list` page if they want self-service health check
  - [ ] How the daily content selection works (topic quotas, scoring, editorial polish)
- [ ] Send written admin guide (1-pager based on the above)

### Editorial review workflow (60 min, optional)

- [ ] If customer wants pre-publish editorial review (Phase 7.2.2 territory):
  - [ ] Walk through the moderation queue UI (when shipped)
  - [ ] Train customer's editor on the Bloomberg-grade editorial conventions (Rule 0, headline-length, declarative past-tense)
- [ ] If customer accepts auto-publish: skip this section, document the policy in writing

### Reporting dashboard walkthrough (30 min)

- [ ] Show customer where to find:
  - [ ] Daily pipeline status (GHA runs page — read access via screenshot or per-customer Slack channel)
  - [ ] Newsletter audience metrics (Resend dashboard, customer's own account)
  - [ ] Site analytics (Vercel project metrics — request volumes, error rates)
- [ ] Send written reporting playbook (1-pager listing all dashboards + login info)

### Operational handoff (30 min)

- [ ] Confirm customer support contact (single named person on customer-side)
- [ ] Confirm escalation path on founder-side (founder direct, then back-up if any)
- [ ] Document the runbook for the most likely incidents:
  - [ ] Pipeline failure → Slack alerts founder, founder triages within MTTR window
  - [ ] Customer-domain DNS issue → customer's DNS provider, founder advises
  - [ ] AI provider outage → Claude fallback, then last-known-good content; communicate to customer if extended

---

## Phase 4 — Launch (week 4)

### Production deployment (founder, ~2 hours)

- [ ] Final pre-launch QA pass (last chance to catch brand issues)
- [ ] Switch customer's domain DNS to point at production Vercel deployment
- [ ] Trigger the first production daily pipeline run on customer's domain
- [ ] Monitor the first run live; verify editorial output on the customer's domain
- [ ] Capture screenshots of the live deployment for customer's marketing use

### Customer announcement (customer-side)

- [ ] Customer's own marketing/comms team announces the launch on their channels
- [ ] Founder provides:
  - [ ] Approved tweet/LinkedIn copy if customer wants social-media language
  - [ ] Press-release boilerplate paragraph if customer wants media coverage
  - [ ] Suggested screenshot for social posts

### First-week monitoring (founder, daily for 5 days)

- [ ] Day 1: monitor every cron run, intervene at first sign of issue
- [ ] Day 2-3: verify Daily output visible on customer domain by 7am MNT each morning
- [ ] Day 4: spot-check editorial quality on 3 random articles
- [ ] Day 5: review week-1 metrics (uptime, content output, any incidents)
- [ ] Send week-1 summary email to customer's admin contact

### Customer success check-in (week 5, founder + customer)

- [ ] 30-min call with customer admin
- [ ] Review what's working / what isn't
- [ ] Capture any feature requests or customization needs
- [ ] Confirm renewal intention (or pilot → paid conversion)
- [ ] Update customer success metrics doc with this customer's first-month KPIs

---

## Failure modes + recovery

| Issue | Detection | Recovery |
|---|---|---|
| DNS misconfiguration during deployment | Customer can't load their domain | Verify DNS records; if customer added them wrong, walk through correction |
| Vercel build failure | Build alert | Founder debugs (most common: brand-asset path typo); typically <1 hour fix |
| Translator pipeline failure on customer's domain | Slack notification + customer notices stale content | Trigger manual workflow_dispatch; root-cause via the run logs |
| Brand customization regression after a code update | Visual QA after merge | Pin customer's branch to a known-good commit; cherry-pick fixes |
| Customer's brand changes mid-deployment | Email | Update brand assets + redeploy; ~1 hour |

---

## [FOUNDER ADJUST] checklist

- [ ] Verify the 4-week timeline is realistic given founder cash-runway
- [ ] Add legal counsel touchpoints for contract phase if Mongolian commercial law has specific requirements
- [ ] Confirm Vercel project provisioning is a single-customer-per-project model OR multi-tenant (Phase 9.2 deferred)
- [ ] Decide whether customer can self-serve brand updates post-launch (e.g., color swap) or whether all changes go through founder

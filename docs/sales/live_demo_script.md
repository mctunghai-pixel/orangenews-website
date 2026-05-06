# Live Demo Script — Phase 9.3

> **Phase 9.3 deliverable.** 30-minute live walkthrough for cold/warm prospect calls. Strict timing — every minute past 30 erodes the close-power "I respect your time" signal. Use with `demo_scheduling_template.md` (which sets up the call) and `outreach_email_templates.md` (which generated the meeting).

---

## Pre-call (5 min before)

- Open browser tabs in walkthrough order: `/`, `/mse`, `/video`, a recent article slug from `/articles/`, `/category/finance`. **Verify each loads + has fresh content** (timestamps within 24h).
- Open `pricing_model_spreadsheet.md` in a separate tab — surface during Phase 4 if budget question comes up.
- Phone do-not-disturb. Notebook + pen for capturing their questions.
- Audio + screen-share tested in the meeting tool.

---

## Phase 1 — Intro (5 min)

### Opening (60 sec)

> "Thanks for making the time. I'll keep us to 30 minutes — 5 to set context, 15 to walk you through Orange News live, 5 for how this maps to {Company}, 5 for your questions. Sound good?"

### Founder intro (60 sec)

Single short paragraph — keep it about why you built this, not a CV recital:

> "I'm Munkhsaikhan Mongolbayar. I built Orange News over the last several months because I kept watching Mongolian financial professionals choose between Bloomberg quality at Bloomberg cost or domestic outlets at consumer-grade editorial. There was no third option. So I built one — solo, end-to-end, production-grade. Today I'll show you what that looks like and why I think it's a fit for {Company}."

### Customer pain framing question (90 sec)

Ask before you show anything:

> "Before I dive in — when your team needs international financial context (Bloomberg / Reuters / WSJ / FT), how do they get it today? Are you paying for any of those terminals, or is it more of an analyst-translates-summary workflow?"

**Listen for:**
- Specific dollar amounts → budget signal
- "We don't have anything formal" → greenfield opportunity (Tier 1 white-label pitch fits)
- "We have 2 Bloomberg seats" → augmentation pitch (Tier 1 broader-team-access pitch fits)
- "Our analysts translate manually" → 10× throughput pitch (cost-down framing)

Take notes verbatim. Their words become your follow-up email language.

### Bridge to demo (60 sec)

> "Got it. So what I'll show you is a fully-automated Mongolian-Cyrillic financial portal — same editorial discipline a Bloomberg desk applies, running solo on a stack I built. Let's look at what {Company}'s analysts and clients would see if you deployed this under your brand."

---

## Phase 2 — Live walkthrough (15 min, strict)

### Homepage hero + market snapshot (2 min)

**Open:** https://www.orangenews.mn/

Click through, narrate:

> "Top of the homepage — live ticker bar with S&P, Nasdaq, Bitcoin, MSE TOP-20, FX pairs, gold, oil, refreshed every 30 minutes. Hero article on the left, secondary articles right. Right rail has most-read, newsletter signup, and the live curated video feed."

> "Notice the Mongolian editorial — declarative past-tense leads, concrete numbers, source attribution. That's the Bloomberg-grade polish layer applied to every story automatically."

### /mse page (3 min)

**Open:** https://www.orangenews.mn/mse

> "This is the Mongolian Stock Exchange page. Marquee tickers across the top — 61 securities live. Top movers up + down, most-active by trading amount, the comex / mining trade ledger, the A-board and B-board listed-company directories with logos and prices joined live."

> "All 8 datasets sourced from mse.mn directly — we reverse-engineered their Next.js Server Actions endpoint to get this data without a screen-scraper. Refreshed multiple times per trading day."

> "If a customer wants this exact layout under their brand — say, `markets.{bank}.mn` — that's a Tier-1 deployment. The Bloomberg-grade market-data layout is a key reason banks pay for Bloomberg in the first place."

### /video section (2 min)

**Open:** https://www.orangenews.mn/video

> "Curated international financial video feed — Bloomberg Television, WSJ, Reuters, Financial Times, CNBC, World Bank Group. 33 videos refreshed every 2 hours. Filter by channel."

> "Click any card and it opens YouTube directly. We deliberately don't iframe-embed — page weight + autoplay + cookie compliance reasons. The user gets to YouTube one click faster than a Google search would."

### Article detail (2 min)

**Open:** a recent article from the homepage (pick a Bloomberg-translated one for international polish demo)

> "Here's a translated international story. Notice the headline length — 60-80 characters, declarative, concrete. Body has the past-tense polished verb. Footer has the source attribution: 'Эх сурвалж: Bloomberg'. Hashtags. Social footer."

> "Same editorial discipline applied to the native Mongolian sources — let me show you a Montsame piece for comparison."

[Open a recent Montsame article — Energy / Oyu Tolgoi / Financial inclusion]

> "Montsame's original headline ran 80+ characters with no specific number. Our editorial pass shortened it to 62 characters with the concrete '3%' figure. Same desk-editor instinct, applied automatically."

### /category archive (1 min)

**Open:** https://www.orangenews.mn/category/finance

> "7-day rolling archive per category. Yesterday's articles still resolve, link to RSS, link to social. The whole archive is regenerated every day automatically by the backend."

### Backend evidence (5 min)

> "Quick peek at how this is built — not because the customer needs to care, but because the operational discipline is what makes this maintainable for years."

[Either screen-share a `gh run list` output, or screenshot from your terminal showing the 4 cron pipelines green for the past 24h]

> "Four production cron pipelines on GitHub Actions. 100% uptime over the past 24 hours. The data plane is just JSON files served from raw GitHub URLs through Vercel's edge cache — no database, no servers to administer, no on-call rotation. The whole platform runs me about USD 50/month operationally."

> "That last part matters because it's what makes white-label deployment economically viable for {Company} — the marginal cost of adding a customer is essentially zero."

---

## Phase 3 — Use case match (5 min)

Pick the variant that matches the prospect's organization.

### Banking variant (commercial banks: TDB / Khan / Golomt / State / Capitron)

> "For a bank like {Company}, the natural deployment is Tier 1 — branded subdomain like `markets.{bank}.mn` running this exact content under your brand. Three concrete benefits:"
>
> 1. **Broader analyst access.** Today only your 2-3 senior analysts have Bloomberg seats; with this every RM and corporate banker has the same daily briefing.
> 2. **Client-facing differentiation.** Your HNW clients get a daily 'Powered by {Bank}' briefing in their language. Retention asset.
> 3. **Cost.** A fraction of one Bloomberg seat per month for whole-bank visibility.

### Securities variant (BDSec / TDB Securities / Eurasia)

> "For {Firm}, this is research-product augmentation. You produce 3-5 notes per week today. Layer this on and your client portal carries 10 Bloomberg-grade daily briefings on top. Same editorial discipline as your existing notes, just at 10× the throughput."

### Government / regulator variant (BoM / FRC / MSE)

> "For {Agency}, the angle is investor education and financial literacy delivery. Co-branded portal under your domain, content stream curated for retail-investor topics, optional editorial review queue if your team wants to gate publication."

### Media variant (Eagle / IKON / Gogo / Montsame)

> "For {Outlet}, this is content licensing — the daily briefing as a syndicated section under your brand, attribution flowing the right direction, no editorial seat hire required."

---

## Phase 4 — Q&A + next steps (5 min)

### Their questions FIRST

Don't pitch over their questions. Let them lead. Common ones:

- **"What about pricing?"** → open `pricing_model_spreadsheet.md`, show 3 tiers, let them ask which fits.
- **"How long does white-label deployment take?"** → "1 week from green light. Subdomain config + brand customization is the longest part."
- **"What if AI providers go down?"** → "Translator has Gemini primary + Claude fallback. Frontend serves last-known-good content from Vercel's edge cache; if the backend cron skips a day, the previous day's archive still resolves." (See `technical_faq.md` for deeper answers.)
- **"Can we white-label without your branding visible?"** → "Yes. Tier 1 is full white-label — your domain, your brand, no Orange News marks visible. The customer-facing product is fully yours."

### Concrete next step (90 sec)

If positive signals:

> "Here's what I'd suggest. I'll send you a short pilot proposal by end of this week — it lays out a 30-day free deployment under your brand, success metrics we'd both agree on, and what happens after the pilot. You decide if it's worth proceeding. Sound reasonable?"

If lukewarm:

> "I appreciate the time. If something on the wider commercialization roadmap interests {Company} later, I'm easy to reach. mc.tunghai@gmail.com."

### Close (30 sec)

> "Thanks. I'll send the pilot proposal Friday at the latest, and we can take it from there."

---

## Same-day follow-up email (within 4 hours of the call)

Subject: `Thanks — pilot proposal coming Friday`

Body:

> Hi {ContactName},
>
> Thanks again for the time today. To summarize what I heard:
>
> 1. {Their key pain point in their words}
> 2. {Their main interest area — banking/securities/government angle}
> 3. {Any objections raised}
>
> I'll send the formal pilot proposal by Friday. In the meantime, here are the live URLs we walked through so you can show colleagues:
>
> - https://www.orangenews.mn (homepage)
> - https://www.orangenews.mn/mse (Mongolian Stock Exchange page)
> - https://www.orangenews.mn/video (international video feed)
>
> Best,
> Munkhsaikhan
> mc.tunghai@gmail.com

---

## What NOT to show in the demo

- Source code, GitHub repos, GHA workflow YAML — customers want the deliverable, not the plumbing
- Failed runs / production incident timeline — irrelevant to the close
- Sales deck slide-by-slide — the deck is for asynchronous review, not live presentation; live demo is the live product
- Pricing in writing during the call — discuss verbally if asked, send formal pricing in the follow-up. Avoids on-the-spot negotiation pressure.

## [FOUNDER ADJUST] checklist

- [ ] Replace founder intro paragraph with your preferred wording
- [ ] Verify the "USD 50/month operational" number against your current actual spend
- [ ] Add or remove use-case variants based on actual customer mix
- [ ] Decide pilot duration (default 30 days) based on your founder cash-runway tolerance

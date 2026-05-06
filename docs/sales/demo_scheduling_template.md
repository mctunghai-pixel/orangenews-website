# Demo Scheduling Template — Phase 9.2

> **Phase 9.2 deliverable.** Templates and operational checklists for the moment a prospect responds "I'd like to see a demo." Goal: convert interest → calendar → high-quality demo → next-step proposal in <72 hours.

---

## Calendar reply template (when prospect requests a demo)

### Subject

> Re: {original subject} — proposed times

### Body — English

> Hi {ContactName},
>
> Thanks for the interest in seeing Orange News live. Happy to walk you through it.
>
> I'd suggest **30 minutes** — short enough to respect your time, long enough to cover the live product + 5-10 minutes of your questions.
>
> A few options that work on my end (Mongolia time):
>
> - **{Day 1}** — 10:00 / 14:00 / 16:00
> - **{Day 2}** — 10:00 / 14:00
> - **{Day 3}** — 14:00 / 16:00
>
> Format options:
> - **Zoom / Google Meet** (preferred — easier to share screen)
> - **In person** (Ulaanbaatar) — let me know your office address
>
> Two quick questions ahead of the call so I can tailor the walkthrough:
>
> 1. Roughly how many people at {Company} would actually consume this content if you deployed it?
> 2. What's currently filling this gap (Bloomberg seats, manual translation, third-party feed, nothing yet)?
>
> Looking forward.
>
> Best,
> Munkhsaikhan Mongolbayar
> mc.tunghai@gmail.com

### Body — Mongolian Cyrillic

> Сайн байна уу {ContactName},
>
> Orange News-ийг шууд харах сонирхол гаргасанд баярлалаа. Танд алхам алхмаар танилцуулахдаа таатай байна.
>
> **30 минутыг** санал болгож байна — таны цагийг хүндэтгэх хэр богино, шууд бүтээгдэхүүн + 5-10 минутын асуултанд зориулах хэр урт.
>
> Манай талаас тохиромжтой хэдэн сонголт (Монгол цагаар):
>
> - **{Day 1}** — 10:00 / 14:00 / 16:00
> - **{Day 2}** — 10:00 / 14:00
> - **{Day 3}** — 14:00 / 16:00
>
> Хэлбэр сонголт:
> - **Zoom / Google Meet** (илүүд үздэг — дэлгэц хуваалцахад хялбар)
> - **Биечлэн** (Улаанбаатар) — танай оффисын хаягийг мэдэгдээрэй
>
> Дуудлагын өмнөх хоёр асуулт — би танилцуулгыг танд тохирсон болгохын тулд:
>
> 1. {Company}-д энэ контентыг хэдэн хүн үнэхээр уншиж ашиглах вэ?
> 2. Одоогоор энэ зайг юу нөхөж байна (Bloomberg суудал, гар орчуулга, гуравдагч талын feed, юу ч үгүй)?
>
> Хариу хүлээж байна.
>
> Хүндэтгэсэн,
> Мөнхсайхан Монголбаяр
> mc.tunghai@gmail.com

---

## Demo agenda (30 minutes — strict timing)

| Phase | Duration | What to cover |
|---|---|---|
| **1. Quick context (you)** | 5 min | Who you are, why Orange News exists, what you've been building. Shows the founder is the architect — not a sales reseller. |
| **2. Live product walkthrough** | 15 min | See specific URLs below. Click through, narrate what you're showing. Don't talk over yourself; let the product speak. |
| **3. Q&A + their context** | 10 min | Their questions FIRST. Listen for: who else uses similar content at their org, current friction in their content workflow, budget signal language. |

**Hard stop at 30 min.** If they want more, propose a 45-min deep-dive next week. Demonstrating respect for their time is the close-power move.

---

## Live demo URL list (open these in browser tabs BEFORE the call)

In recommended walkthrough order:

1. **Homepage** — https://www.orangenews.mn/
   - Show: hero article + secondary articles + market snapshot + breaking strip + right-rail (most-read, newsletter, video feed). 90 seconds.
2. **Live MSE page** — https://www.orangenews.mn/mse
   - Show: marquee tickers, top movers, mining trades, A/B board directory. Bloomberg-grade market-data layout. 2-3 minutes.
3. **Article archive** — pick a recent Montsame-sourced article (Mongolian-language) + a recent Bloomberg-sourced article (translated). Side-by-side shows editorial polish across source types.
4. **Video archive** — https://www.orangenews.mn/video
   - Show: 33 curated videos from 6 international financial channels, 2-hour refresh. Click through to one video to demonstrate the click-out (no embed).
5. **RSS feed** — https://www.orangenews.mn/rss.xml
   - Show this only if technical staff are on the call. Demonstrates the "API access" Tier-3 offering.

**Do not show:** the editorial pipeline source code, the GitHub Actions workflows, or anything backend. Customers want to see the deliverable, not the plumbing.

---

## Pre-demo checklist (5 minutes before call)

- [ ] Open all demo URLs in browser tabs (verify each loads, no 503s, no broken images)
- [ ] Verify YouTube video feed has fresh entries (not all from yesterday)
- [ ] Confirm latest article timestamp is within 24h
- [ ] Test screen-share works in Zoom / Meet
- [ ] Phone on do-not-disturb
- [ ] Notebook + pen for capturing their questions

---

## Post-demo checklist (within 24 hours of call ending)

- [ ] **Same-day follow-up email** with:
  - Thank-you for time
  - Summary of what they said their need was (verifies you listened)
  - Next concrete step (pilot proposal? technical deep-dive? introducing them to a specific stakeholder?)
  - Calendar link / specific proposed times for next call
- [ ] **Internal notes** captured in CRM / notes file:
  - Who attended (titles)
  - Their specific pain points in their words
  - Budget signals (mentioned dollar amounts, current-tool spending)
  - Decision-making context (who else needs to approve, timeline)
  - Objections raised + your response
- [ ] **Update customer_target_list.md** with the named contacts you actually met + any leverage notes that emerged

---

## Pilot proposal template (use within 1 week of demo if positive)

When a demo goes well, send within 5-7 days:

> Subject: Pilot proposal — Orange News for {Company}
>
> Hi {ContactName},
>
> Thanks again for the conversation last {weekday}. Per what you shared, here's a concrete pilot proposal for {Company}:
>
> **Scope:** Branded subdomain `markets.{company}.mn` running the full Orange News daily briefing under {Company}'s logo + colors. Available to your {team-size} relationship managers / analysts / clients.
>
> **Duration:** 30 days, free pilot.
>
> **Setup:** I configure the subdomain + branding + DNS within 1 week of your green light. {Company} provides logo asset + brand color hex codes; I handle the rest.
>
> **Success metrics for the pilot:**
> 1. Daily uptime (target: ≥99%)
> 2. {Company}-staff usage (we'll add basic analytics — page views by your domain)
> 3. Editorial quality (zero critical errors flagged by your team during the 30 days)
>
> **What I need from {Company} to start:**
> - Logo (SVG or high-res PNG)
> - Brand color codes (primary + accent)
> - Confirmation of the subdomain you want to use
> - DNS provider access (you keep ownership; I just need a CNAME pointed at Vercel)
>
> If we hit the pilot success metrics, the post-pilot conversation is about pricing tier (Tier 1 white-label deployment, see attached pricing model).
>
> Let me know if you'd like to proceed, or if there are stakeholders we should loop in before the green light.
>
> Best,
> Munkhsaikhan Mongolbayar
> mc.tunghai@gmail.com

---

## [FOUNDER ADJUST] checklist

- [ ] Verify the proposed Mongolia-time slots match the founder's actual availability template
- [ ] Adjust the Mongolian register on the calendar reply (formal vs business-casual)
- [ ] Confirm the pilot success metrics match the founder's risk tolerance (e.g., is "≥99% uptime" overpromise or underpromise?)
- [ ] Add specific Vercel DNS configuration steps to a separate operational checklist if needed (founder may want a runbook)

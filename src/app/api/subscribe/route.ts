// =============================================================================
// POST /api/subscribe — Phase 7.2.1
// =============================================================================
// Receives an email from the homepage Newsletter form or the /newsletter page.
// Idempotently creates a pending (unsubscribed=true) contact in the configured
// Resend Audience, then sends a double-opt-in confirmation email containing a
// short-lived signed verify link. The contact is only flipped to
// unsubscribed=false after the user clicks the verify link
// (handled by /api/subscribe/verify).
// =============================================================================

import { Resend } from "resend";
import { render } from "@react-email/components";
import { SubscribeConfirmEmail } from "@/emails/SubscribeConfirmEmail";
import { signToken, tokenExpiry } from "@/lib/subscribe-token";

const DEFAULT_FROM = "Orange News <noreply@orangenews.mn>";

function isValidEmail(s: string): boolean {
  // Loose RFC-pragmatic check — Resend will hard-validate downstream.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) && s.length <= 254;
}

function getSiteUrl(req: Request): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  const url = new URL(req.url);
  return `${url.protocol}//${url.host}`;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const rawEmail =
    body && typeof body === "object" && "email" in body && typeof (body as { email: unknown }).email === "string"
      ? (body as { email: string }).email.trim().toLowerCase()
      : "";

  if (!isValidEmail(rawEmail)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  const fromAddress = process.env.RESEND_FROM_EMAIL ?? DEFAULT_FROM;

  if (!apiKey || !audienceId) {
    console.error("[subscribe] RESEND_API_KEY or RESEND_AUDIENCE_ID not set");
    return Response.json(
      { error: "Subscribe service not configured" },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  // Best-effort contact creation. If the contact already exists, Resend returns
  // a 4xx — we treat that as "user is re-requesting confirmation" and proceed
  // to re-send the verify email rather than erroring out.
  try {
    await resend.contacts.create({
      audienceId,
      email: rawEmail,
      unsubscribed: true,
    });
  } catch (e) {
    console.warn("[subscribe] contacts.create non-fatal", e);
  }

  const exp = tokenExpiry();
  const token = signToken(rawEmail, exp);
  const verifyUrl = `${getSiteUrl(request)}/api/subscribe/verify?email=${encodeURIComponent(rawEmail)}&token=${encodeURIComponent(token)}`;

  const html = await render(SubscribeConfirmEmail({ verifyUrl }));

  try {
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: rawEmail,
      subject: "Orange News товхимолд бүртгэлээ баталгаажуулна уу",
      html,
    });
    if (error) {
      console.error("[subscribe] emails.send returned error", error);
      return Response.json(
        { error: "Could not send confirmation email" },
        { status: 502 },
      );
    }
  } catch (e) {
    console.error("[subscribe] emails.send threw", e);
    return Response.json(
      { error: "Could not send confirmation email" },
      { status: 502 },
    );
  }

  return Response.json({ ok: true, message: "Confirmation email sent" });
}

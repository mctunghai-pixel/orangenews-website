// =============================================================================
// GET /api/subscribe/verify — Phase 7.2.1
// =============================================================================
// User clicks the link from the confirmation email. We verify the HMAC token,
// flip the Resend contact from unsubscribed=true to unsubscribed=false, then
// 302 to /newsletter/confirmed?status=ok|invalid|error so the user lands on
// a real page with feedback rather than seeing a JSON response.
// =============================================================================

import { Resend } from "resend";
import { verifyToken } from "@/lib/subscribe-token";

function getSiteUrl(req: Request): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  const url = new URL(req.url);
  return `${url.protocol}//${url.host}`;
}

function redirect(siteUrl: string, status: "ok" | "invalid" | "error"): Response {
  return Response.redirect(`${siteUrl}/newsletter/confirmed?status=${status}`, 302);
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const email = (url.searchParams.get("email") ?? "").trim().toLowerCase();
  const token = url.searchParams.get("token") ?? "";
  const siteUrl = getSiteUrl(request);

  if (!email || !token) return redirect(siteUrl, "invalid");
  if (!verifyToken(email, token)) return redirect(siteUrl, "invalid");

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    console.error("[verify] RESEND_API_KEY or RESEND_AUDIENCE_ID not set");
    return redirect(siteUrl, "error");
  }

  const resend = new Resend(apiKey);

  try {
    await resend.contacts.update({
      audienceId,
      email,
      unsubscribed: false,
    });
  } catch (e) {
    console.error("[verify] contacts.update failed", e);
    return redirect(siteUrl, "error");
  }

  return redirect(siteUrl, "ok");
}

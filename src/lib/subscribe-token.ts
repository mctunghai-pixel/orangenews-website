// =============================================================================
// Subscribe verify-link token (Phase 7.2.1)
// =============================================================================
// HMAC-SHA256-signed tokens for double-opt-in confirmation. Stateless: the
// signature itself encodes "this email applied for the list at this expiry";
// no DB lookup. Verification re-computes the HMAC and compares with
// timingSafeEqual.
//
// Secret source: RESEND_API_KEY. Server-only (never sent to browser).
// Side effect of secret reuse: rotating the Resend API key invalidates all
// pending verify links — acceptable since tokens already expire in 7 days.
// =============================================================================

import { createHmac, timingSafeEqual } from "node:crypto";

const TOKEN_VERSION = "v1";
const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getSecret(): string {
  const k = process.env.RESEND_API_KEY;
  if (!k) throw new Error("RESEND_API_KEY not set");
  return k;
}

function hmacHex(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

/** Returns absolute Unix-seconds expiry for a freshly minted token. */
export function tokenExpiry(): number {
  return Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS;
}

/** Mint a token: encodes <expiry>.<hmac>. */
export function signToken(email: string, expiresAt: number): string {
  const sig = hmacHex(`${TOKEN_VERSION}.${email}.${expiresAt}`);
  return `${expiresAt}.${sig}`;
}

/** Verify a token. Returns true only if signature matches and not expired. */
export function verifyToken(email: string, token: string): boolean {
  const dot = token.indexOf(".");
  if (dot < 1) return false;
  const expStr = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const exp = Number.parseInt(expStr, 10);
  if (!Number.isFinite(exp) || !sig) return false;
  if (Math.floor(Date.now() / 1000) > exp) return false;
  const expected = hmacHex(`${TOKEN_VERSION}.${email}.${exp}`);
  if (sig.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(sig, "hex"), Buffer.from(expected, "hex"));
  } catch {
    return false;
  }
}

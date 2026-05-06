"use client";

// =============================================================================
// SubscribeForm — Phase 7.2.1
// =============================================================================
// Single source of truth for the subscribe form, used by:
//   - <Newsletter /> on the homepage (variant="dark")
//   - /newsletter page (variant="light")
// Each variant carries the surrounding section's color treatment.
// =============================================================================

import { useState } from "react";
import type { FormEvent } from "react";

export type SubscribeFormVariant = "dark" | "light";

interface Props {
  variant: SubscribeFormVariant;
}

type State =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "ok" }
  | { kind: "error"; message: string };

export function SubscribeForm({ variant }: Props) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });

  const dark = variant === "dark";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.kind === "submitting") return;
    setState({ kind: "submitting" });
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data: { error?: string; ok?: boolean } = await res
        .json()
        .catch(() => ({}));
      if (!res.ok || !data.ok) {
        setState({ kind: "error", message: data.error ?? "Алдаа гарлаа" });
        return;
      }
      setState({ kind: "ok" });
    } catch {
      setState({ kind: "error", message: "Сүлжээний алдаа" });
    }
  }

  if (state.kind === "ok") {
    return (
      <p
        className={`mt-5 font-serif-body text-[14px] md:text-[15px] leading-relaxed ${
          dark ? "text-background" : "text-foreground"
        }`}
        role="status"
      >
        Баталгаажуулах имэйл илгээгдлээ. Имэйл хайрцагаа шалгана уу — холбоос 7
        хоногийн дотор хүчинтэй.
      </p>
    );
  }

  const inputClass = dark
    ? "min-h-[44px] flex-1 bg-background/10 px-3 font-sans text-[13px] text-background placeholder:text-background/50 focus:outline-none focus:bg-background/20"
    : "flex-1 border border-border bg-background px-4 py-3 font-serif-body text-[14px] text-foreground placeholder:text-muted focus:outline-none focus:border-foreground";

  const buttonClass = dark
    ? "min-h-[44px] bg-accent px-5 font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-wider text-background hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
    : "border border-foreground bg-foreground px-6 py-3 font-sans text-[12px] font-semibold uppercase tracking-wider text-background hover:bg-accent hover:border-accent disabled:cursor-not-allowed disabled:opacity-60";

  const submitting = state.kind === "submitting";
  const errored = state.kind === "error";

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`mt-5 flex flex-col gap-2 ${dark ? "sm:flex-row" : "md:flex-row md:items-center md:gap-3"}`}
        aria-label="Newsletter signup"
        noValidate
      >
        <label htmlFor={`subscribe-email-${variant}`} className="sr-only">
          И-мэйл
        </label>
        <input
          id={`subscribe-email-${variant}`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={submitting}
          aria-invalid={errored}
          className={inputClass}
        />
        <button type="submit" disabled={submitting} className={buttonClass}>
          {submitting ? "Илгээж байна…" : "Бүртгүүлэх"}
        </button>
      </form>
      {errored && (
        <p
          className={`mt-2 font-sans text-[12px] ${
            dark ? "text-accent" : "text-accent"
          }`}
          role="alert"
        >
          {state.message}
        </p>
      )}
    </>
  );
}

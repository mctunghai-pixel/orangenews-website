import Link from "next/link";
import type { ReactNode } from "react";

interface LegalPageLayoutProps {
  title: string;
  effectiveDate?: string;
  intro?: string;
  children: ReactNode;
}

// Body container styles legal-page descendants via Tailwind arbitrary selectors:
// - h2: large display headings
// - h3: medium subheadings
// - p: serif body, line-height 1.8
// - ul: disc bullets
// - a: accent color, hover underline
const BODY_CLASSES = [
  "mt-10",
  "[&_h2]:font-serif-display [&_h2]:text-[22px] [&_h2]:md:text-[28px] [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:mt-12",
  "[&_h2:first-child]:mt-0",
  "[&_h3]:font-serif-display [&_h3]:text-[18px] [&_h3]:md:text-[22px] [&_h3]:font-bold [&_h3]:leading-tight [&_h3]:mt-8",
  "[&_p]:font-serif-body [&_p]:text-[16px] [&_p]:md:text-[17px] [&_p]:leading-[1.8] [&_p]:mt-4",
  "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:font-serif-body [&_ul]:text-[16px] [&_ul]:md:text-[17px] [&_ul]:leading-[1.8]",
  "[&_ul>li]:mt-2",
  "[&_a]:text-accent [&_a]:hover:underline",
].join(" ");

export function LegalPageLayout({
  title,
  effectiveDate,
  intro,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
      >
        ← Нүүр хуудас руу буцах
      </Link>

      <h1 className="font-serif-display text-[28px] md:text-[40px] font-bold leading-tight">
        {title}
      </h1>

      {effectiveDate && (
        <p className="mt-3 font-mono text-[13px] text-muted tabular-nums">
          Хүчин төгөлдөр болсон огноо: {effectiveDate}
        </p>
      )}

      {intro && (
        <p className="mt-6 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
          {intro}
        </p>
      )}

      <div className={BODY_CLASSES}>{children}</div>
    </main>
  );
}

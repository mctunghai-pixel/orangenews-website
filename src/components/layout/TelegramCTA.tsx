/**
 * Orange News — Telegram subscribe CTA band (rendered above <Footer/> in layout).
 * Styled with the site design tokens + serif system so it matches Footer.tsx
 * (no zinc/orange Tailwind defaults, no dark: variants).
 * Plain <img> for the QR — repo convention avoids next/image (see MarketWatchImage.tsx).
 */
export function TelegramCTA() {
  return (
    <section
      aria-labelledby="telegram-cta-heading"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6 md:py-14">
        {/* Left — copy + CTA */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-wider text-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden />
            Telegram суваг
          </span>

          <h2
            id="telegram-cta-heading"
            className="mt-4 font-serif-display text-2xl font-bold text-foreground md:text-3xl"
          >
            Дэлхийн мэдээг цаг тутамд Telegram-аар
          </h2>

          <p className="mt-3 max-w-md font-serif-body text-[14px] leading-relaxed text-muted">
            Bloomberg, Reuters, WSJ, CNBC эх сурвалжуудын онцлох мэдээг Монгол хэлээр,
            өдөрт 10 удаа. QR код-оор скан хийгээд эсвэл шууд нэгдээрэй.
          </p>

          <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:items-start">
            <a
              href="https://t.me/OrangeNewsMN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-sans text-[13px] font-semibold uppercase tracking-wider text-background transition-colors hover:bg-accent-hover"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
              </svg>
              t.me/OrangeNewsMN
            </a>
          </div>
        </div>

        {/* Right — QR code */}
        <div className="flex flex-col items-center gap-3">
          <div className="border border-border bg-background p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/telegram_qr.png"
              alt="Orange News Telegram суваг QR код — t.me/OrangeNewsMN"
              width={150}
              height={150}
              className="h-[150px] w-[150px]"
            />
          </div>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-muted">
            Сканнаар нэгдэх
          </p>
        </div>
      </div>
    </section>
  );
}

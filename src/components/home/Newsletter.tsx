import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section
      aria-labelledby="newsletter-heading"
      className="mt-10 bg-foreground p-6 text-background md:p-7"
    >
      <div className="mb-3 flex items-center gap-2">
        <Mail className="h-4 w-4 text-accent" aria-hidden />
        <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-accent">
          Өдөр бүр 7:00 цагт
        </span>
      </div>
      <h3
        id="newsletter-heading"
        className="font-serif-display text-[20px] md:text-[24px] font-bold leading-tight"
      >
        Зах зээл нээхээс өмнө танд хүрнэ
      </h3>
      <p className="mt-2 font-serif-body text-[13px] md:text-[14px] leading-relaxed text-background/75">
        Санхүү, технологи, Монголын эдийн засгийн өглөөний брифинг — 5 минут дотор.
      </p>
      <form className="mt-5 flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          И-мэйл
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="your@email.com"
          className="min-h-[44px] flex-1 bg-background px-3 font-sans text-[13px] text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button
          type="button"
          className="min-h-[44px] bg-accent px-5 font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-wider text-background transition-colors hover:bg-accent-hover"
        >
          Бүртгүүлэх
        </button>
      </form>
      <p className="mt-3 font-mono text-[10px] text-background/50">
        Spam үгүй. Хэзээ ч unsubscribe хийж болно.
      </p>
    </section>
  );
}

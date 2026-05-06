import { Mail } from "lucide-react";
import { SubscribeForm } from "@/components/subscribe/SubscribeForm";

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
      <SubscribeForm variant="dark" />
      <p className="mt-3 font-mono text-[10px] text-background/60">
        Бид зөвхөн өдрийн товхимол илгээнэ. Хүсэлтийн дараа баталгаажуулах
        имэйл хүрнэ.
      </p>
    </section>
  );
}

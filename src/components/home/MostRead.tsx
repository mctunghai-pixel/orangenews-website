import { mostRead } from "@/lib/mock-data";

export function MostRead() {
  return (
    <section aria-labelledby="mostread-heading">
      <div className="flex items-center gap-3 border-b-2 border-foreground pb-2">
        <h2
          id="mostread-heading"
          className="font-serif-display text-[18px] md:text-[20px] font-bold"
        >
          Хамгийн их уншсан
        </h2>
        <span className="inline-flex items-center gap-1 bg-auto-bg px-1.5 py-0.5 font-sans text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-up">
          <span className="inline-block h-1 w-1 rounded-full bg-up animate-pulse-dot" aria-hidden />
          24ц
        </span>
      </div>
      <ol className="divide-y divide-border border-b border-border">
        {mostRead.map((title, idx) => (
          <li key={idx}>
            <a
              href="#"
              className="group -mx-2 flex items-start gap-4 px-2 py-4 transition-colors hover:bg-breaking"
            >
              <span
                className="w-8 shrink-0 pt-0.5 font-serif-display text-[32px] md:text-[36px] font-bold leading-none text-accent tabular-nums"
                aria-hidden
              >
                {idx + 1}
              </span>
              <h3 className="font-serif-display text-[14px] md:text-[15px] font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
                {title}
              </h3>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

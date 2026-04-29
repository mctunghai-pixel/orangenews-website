import Link from "next/link";

const socialLinks = [
  { label: "Facebook", code: "FB", href: "https://www.facebook.com/orangenews.mn" },
  { label: "Instagram", code: "IG", href: "https://www.instagram.com/orangenews.official" },
  { label: "Threads", code: "TH", href: "https://www.threads.net/@orangenews.official" },
];

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerNav: FooterColumn[] = [
  {
    title: "Сэдвүүд",
    links: [
      { label: "Санхүү", href: "/category/finance" },
      { label: "Технологи", href: "/category/tech" },
      { label: "Эдийн засаг", href: "/category/economy" },
      { label: "Крипто", href: "/category/crypto" },
      { label: "Монгол", href: "/category/mongolia" },
      { label: "Санал бодол", href: "/category/opinion" },
    ],
  },
  {
    title: "Зах зээл",
    links: [
      { label: "S&P 500", href: "/markets/spx" },
      { label: "Bitcoin", href: "/markets/btc" },
      { label: "USD/MNT", href: "/markets/mntusd" },
      { label: "Алт", href: "/markets/xau" },
    ],
  },
  {
    title: "Компани",
    links: [
      { label: "Бидний тухай", href: "/about" },
      { label: "Редакцийн баг", href: "/team" },
      { label: "Хамтран ажиллах", href: "/partnership" },
      { label: "Ажлын байр", href: "/careers" },
      { label: "Холбоо барих", href: "/contact" },
    ],
  },
  {
    title: "Бүтээгдэхүүн",
    links: [
      { label: "Newsletter", href: "/newsletter" },
      { label: "RSS", href: "/rss" },
      { label: "Podcast", href: "/podcast" },
      { label: "Апп", href: "/app" },
      { label: "API", href: "/api-docs" },
    ],
  },
  {
    title: "Хууль эрх зүй",
    links: [
      { label: "Үйлчилгээний нөхцөл", href: "/legal/terms" },
      { label: "Нууцлал", href: "/legal/privacy" },
      { label: "Cookie", href: "/legal/cookies" },
      { label: "Эх сурвалж", href: "/legal/data-sources" },
      { label: "Импрессум", href: "/legal/impressum" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[repeat(14,minmax(0,1fr))]">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2" aria-label="Orange News нүүр">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden />
              <span className="font-serif-display text-[22px] font-bold">
                Orange News
              </span>
            </Link>
            <p className="mt-3 max-w-sm font-serif-body text-[13px] leading-relaxed text-muted">
              Bloomberg-ийг санагдуулам монгол санхүү, эдийн засгийн редакцлагдсан урсгал. Автомат pipeline-д тулгуурласан шинэчлэлт.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.code}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex min-h-[36px] min-w-[36px] items-center justify-center border border-border px-2 font-sans text-[11px] font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {s.code}
                </a>
              ))}
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-wider text-muted">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link
                        href={link.href}
                        className="font-serif-body text-[13px] text-foreground hover:text-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif-body text-[13px] text-foreground hover:text-accent transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[11px] text-muted">
            © {year} Orange News. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <p className="font-mono text-[10px] text-muted tabular-nums">
            Powered by Azurise AI · orange-news-automation v8.1
          </p>
        </div>
      </div>
    </footer>
  );
}

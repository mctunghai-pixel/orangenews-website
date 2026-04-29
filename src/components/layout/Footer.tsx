import Link from "next/link";

const socialLinks = [
  { label: "Facebook", code: "FB", href: "#" },
  { label: "Instagram", code: "IG", href: "#" },
  { label: "Вэбсайт", code: "Web", href: "#" },
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
      { label: "Санхүү", href: "#" },
      { label: "Технологи", href: "#" },
      { label: "Эдийн засаг", href: "#" },
      { label: "Крипто", href: "#" },
      { label: "Монгол", href: "#" },
      { label: "Санал бодол", href: "#" },
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
      { label: "Бидний тухай", href: "#" },
      { label: "Редакцын баг", href: "#" },
      { label: "Хамтран ажиллах", href: "#" },
      { label: "Ажлын байр", href: "#" },
      { label: "Холбоо барих", href: "#" },
    ],
  },
  {
    title: "Бүтээгдэхүүн",
    links: [
      { label: "Newsletter", href: "#" },
      { label: "RSS", href: "#" },
      { label: "Podcast", href: "#" },
      { label: "Апп", href: "#" },
      { label: "API", href: "#" },
    ],
  },
  {
    title: "Хууль эрх зүй",
    links: [
      { label: "Үйлчилгээний нөхцөл", href: "#" },
      { label: "Нууцлал", href: "#" },
      { label: "Cookie", href: "#" },
      { label: "Impressum", href: "#" },
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
            <a href="/" className="flex items-center gap-2" aria-label="Orange News нүүр">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden />
              <span className="font-serif-display text-[22px] font-bold">
                Orange News
              </span>
            </a>
            <p className="mt-3 max-w-sm font-serif-body text-[13px] leading-relaxed text-muted">
              Bloomberg-ийг санагдуулам монгол санхүү, эдийн засгийн редакцлагдсан урсгал. Автомат pipeline-д тулгуурласан шинэчлэлт.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.code}
                  href={s.href}
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

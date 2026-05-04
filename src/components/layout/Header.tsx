"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Search, X, Bookmark, ChevronRight } from "lucide-react";

const marketWatchLink = { label: "Market Watch", href: "/market-watch" };

const primaryNav = [
  { label: "Санхүү", href: "/category/finance" },
  { label: "Технологи", href: "/category/tech" },
  { label: "Эдийн засаг", href: "/category/economy" },
  { label: "Крипто", href: "/category/crypto" },
  { label: "Монгол", href: "/category/mongolia" },
  { label: "MSE", href: "/mse" },
  { label: "Санал бодол", href: "/category/opinion" },
];

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <header className="sticky top-0 z-30 bg-background border-b border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Цэс нээх"
            className="flex h-11 w-11 items-center justify-center -ml-2 md:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
          <nav aria-label="Үндсэн цэс (зүүн)" className="hidden md:flex items-center gap-5">
            <Link
              href={marketWatchLink.href}
              className="inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot"
                aria-hidden
              />
              {marketWatchLink.label}
            </Link>
            {primaryNav.slice(0, 3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-[12px] font-semibold uppercase tracking-wider text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <a
          href="/"
          aria-label="Orange News нүүр"
          className="flex items-center gap-2"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden />
          <span className="font-serif-display text-[18px] md:text-[22px] font-bold tracking-tight">
            Orange News
          </span>
        </a>

        <div className="flex items-center justify-end gap-1 md:gap-4">
          <nav aria-label="Үндсэн цэс (баруун)" className="hidden md:flex items-center gap-5">
            {primaryNav.slice(3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-[12px] font-semibold uppercase tracking-wider text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            aria-label="Хайх"
            className="flex h-11 w-11 items-center justify-center text-foreground hover:text-accent transition-colors"
          >
            <Search className="h-[18px] w-[18px]" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Миний жагсаалт"
            className="hidden md:flex h-11 w-11 items-center justify-center text-foreground hover:text-accent transition-colors"
          >
            <Bookmark className="h-[18px] w-[18px]" aria-hidden />
          </button>
          <a
            href="#"
            className="hidden md:inline-flex min-h-[36px] items-center px-3 py-2 font-sans text-[11px] font-semibold uppercase tracking-wider text-background bg-foreground hover:bg-accent transition-colors"
          >
            Бүртгэл
          </a>
        </div>
      </div>

      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-foreground/40 md:hidden"
            onClick={() => setDrawerOpen(false)}
            aria-hidden
          />
          <nav
            aria-label="Гар утасны цэс"
            className="fixed inset-y-0 left-0 z-50 flex w-[80%] max-w-[320px] flex-col bg-background border-r border-border animate-drawer-in md:hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <span className="font-serif-display text-[18px] font-bold">Цэс</span>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Цэс хаах"
                className="flex h-11 w-11 items-center justify-center -mr-2"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto py-2">
              <li>
                <Link
                  href={marketWatchLink.href}
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center justify-between min-h-[44px] px-4 py-3 font-serif-display text-[16px] text-accent hover:bg-breaking transition-colors"
                >
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse-dot"
                      aria-hidden
                    />
                    {marketWatchLink.label}
                  </span>
                  <ChevronRight className="h-4 w-4 text-muted" aria-hidden />
                </Link>
              </li>
              {primaryNav.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    className="flex items-center justify-between min-h-[44px] px-4 py-3 font-serif-display text-[16px] text-foreground hover:bg-breaking transition-colors"
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 text-muted" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-border px-4 py-4">
              <a
                href="#"
                className="inline-flex w-full items-center justify-center min-h-[44px] px-4 py-3 font-sans text-[12px] font-semibold uppercase tracking-wider text-background bg-foreground hover:bg-accent transition-colors"
              >
                Бүртгэл үүсгэх
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}

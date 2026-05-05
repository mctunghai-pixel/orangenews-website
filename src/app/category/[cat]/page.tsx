import { notFound } from "next/navigation";
import Link from "next/link";
import { ArticleFeed } from "@/components/home/ArticleFeed";
import { fetchOrangeNews } from "@/lib/fetch-orange-news";
import {
  isValidCategorySlug,
  slugToCategory,
  getCategoryMatchValues,
} from "@/lib/category-slug";

interface PageProps {
  params: Promise<{ cat: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { cat } = await params;
  if (!isValidCategorySlug(cat)) notFound();

  const category = slugToCategory(cat);
  const matchValues = getCategoryMatchValues(category);
  // 7-day archive window — same scope as /rss.xml. Completes the Phase 7.1
  // acceptance criterion ("/category/finance shows N days × 10 posts").
  const { articles } = await fetchOrangeNews({ archiveDays: 7 });
  const filtered = articles.filter(
    (a) => !a.isMarketWatch && matchValues.includes(a.category),
  );

  return (
    <main className="mx-auto w-full max-w-[1400px] flex-1 px-4 pt-6 pb-12 md:px-6 md:pt-8 md:pb-16">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
      >
        ← Нүүр хуудас руу буцах
      </Link>

      <header className="mb-8 border-b-2 border-foreground pb-3">
        <h1 className="font-serif-display text-[28px] md:text-[40px] font-bold leading-tight">
          {category}
        </h1>
        <p className="mt-2 font-sans text-[12px] md:text-[13px] text-muted">
          {filtered.length} нийтлэл
        </p>
      </header>

      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-serif-body text-[16px] text-muted">
            Энэ ангилалд одоогоор мэдээ байхгүй байна.
          </p>
        </div>
      ) : (
        <ArticleFeed articles={filtered} heading={null} />
      )}
    </main>
  );
}

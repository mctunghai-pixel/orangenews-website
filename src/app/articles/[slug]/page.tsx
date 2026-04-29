import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchOrangeNews } from "@/lib/fetch-orange-news";
import { ArticleNavigation } from "@/components/articles/ArticleNavigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const { articles } = await fetchOrangeNews();
  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  // Build navigation list — same order as homepage (news only, score desc)
  const navList = articles
    .filter((a) => !a.isMarketWatch)
    .sort((a, b) => b.score - a.score);
  const idx = navList.findIndex((a) => a.slug === slug);
  const prev = idx > 0 ? navList[idx - 1] : null;
  const next = idx >= 0 && idx < navList.length - 1 ? navList[idx + 1] : null;

  return (
    <article className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
      >
        ← Нүүр хуудас руу буцах
      </Link>

      <div className="mt-2">
        <span className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-accent">
          {article.category}
        </span>
      </div>

      <h1 className="mt-3 font-serif-display text-[28px] md:text-[40px] font-bold leading-tight">
        {article.headline}
      </h1>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[12px] md:text-[13px] text-muted">
        <span className="font-semibold text-foreground">{article.source}</span>
        <span aria-hidden>·</span>
        <span className="font-mono tabular-nums">{article.timeAgo}</span>
        <span aria-hidden>·</span>
        <span>{article.readTime} мин унших</span>
      </div>

      <hr className="my-8 border-t border-foreground/10" />

      <div className="font-serif-body text-[16px] md:text-[17px] leading-[1.8] whitespace-pre-line">
        {article.body}
      </div>

      {article.hashtags.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2">
          {article.hashtags.map((tag) => (
            <span key={tag} className="font-sans text-[11px] px-2 py-1 bg-foreground/5 rounded-full text-muted">
              {tag}
            </span>
          ))}
        </div>
      )}

      {article.sourceUrl && (
        <div className="mt-10 pt-6 border-t border-foreground/10">
          <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans text-[14px] text-accent hover:underline">
            Эх сурвалж дээрх нийтлэлийг үзэх
          </a>
        </div>
      )}

      <ArticleNavigation prev={prev} next={next} />
    </article>
  );
}

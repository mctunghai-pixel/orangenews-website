import { renderArticleOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";
import { getPostBySlug } from "@/lib/fetch-orange-news";

export const runtime = "edge";
export const alt = "Orange News article";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getPostBySlug(slug);

  if (!article) {
    return renderArticleOg({
      category: "ORANGE NEWS",
      headline: "Нийтлэл олдсонгүй",
    });
  }

  return renderArticleOg({
    category: article.category,
    headline: article.headline,
  });
}

import {
  renderCategoryOg,
  renderHomepageOg,
  OG_SIZE,
  OG_CONTENT_TYPE,
} from "@/lib/og-image";
import { fetchOrangeNews } from "@/lib/fetch-orange-news";
import { isValidCategorySlug, slugToCategory } from "@/lib/category-slug";

export const runtime = "edge";
export const alt = "Orange News category";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ cat: string }>;
}) {
  const { cat } = await params;
  if (!isValidCategorySlug(cat)) return renderHomepageOg();

  const category = slugToCategory(cat);
  const { articles } = await fetchOrangeNews();
  const count = articles.filter(
    (a) => !a.isMarketWatch && a.category === category,
  ).length;

  return renderCategoryOg({ category, count });
}

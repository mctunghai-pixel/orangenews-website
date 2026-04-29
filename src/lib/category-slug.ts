// =============================================================================
// Category Slug ↔ DisplayCategory Mapping
// =============================================================================
// Source of truth for /category/[cat] dynamic routes and Header nav links.
// Each URL slug maps 1:1 to one DisplayCategory.
// =============================================================================

import type { DisplayCategory } from "./types";

export const CATEGORY_SLUG_MAP = {
  finance: "САНХҮҮ",
  tech: "ТЕХНОЛОГИ",
  economy: "ЭДИЙН ЗАСАГ",
  crypto: "КРИПТО",
  business: "БИЗНЕС",
  mongolia: "МОНГОЛ",
  opinion: "САНАЛ БОДОЛ",
  ai: "AI",
} as const satisfies Record<string, DisplayCategory>;

export type CategorySlug = keyof typeof CATEGORY_SLUG_MAP;

export function isValidCategorySlug(s: string): s is CategorySlug {
  return s in CATEGORY_SLUG_MAP;
}

export function slugToCategory(slug: CategorySlug): DisplayCategory {
  return CATEGORY_SLUG_MAP[slug];
}

// =============================================================================
// Category aliases — display category aggregates multiple article tag values
// =============================================================================
// When a display category has aliases, requesting that category surfaces
// articles tagged with ANY of the listed values. Used to roll up sibling tags
// (e.g. "AI" articles into "ТЕХНОЛОГИ" feed) without changing backend taxonomy.
// Direct routes (e.g. /category/ai) still resolve to their own tag only.
// =============================================================================

export const CATEGORY_ALIASES = {
  ТЕХНОЛОГИ: ["ТЕХНОЛОГИ", "AI"],
} as const satisfies Partial<Record<DisplayCategory, readonly DisplayCategory[]>>;

/** Resolve the set of article.category values that should match a display category. */
export function getCategoryMatchValues(
  category: DisplayCategory,
): readonly DisplayCategory[] {
  return (
    CATEGORY_ALIASES[category as keyof typeof CATEGORY_ALIASES] ?? [category]
  );
}

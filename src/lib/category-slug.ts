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

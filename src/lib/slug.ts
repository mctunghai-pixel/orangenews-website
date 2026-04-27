/**
 * Slug helpers - derive URL-safe identifiers from article titles.
 */

export function slugify(title: string): string {
  if (!title) return "untitled";

  const ascii = title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .substring(0, 60)
    .replace(/-+$/, "");

  const hash = shortHash(title);
  if (ascii.length === 0) return `post-${hash}`;
  return `${ascii}-${hash}`;
}

function shortHash(input: string): string {
  let hash = 5381;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) + hash + input.charCodeAt(i);
    hash = hash & 0xffffffff;
  }
  return (hash >>> 0).toString(36).substring(0, 6).padStart(6, "0");
}

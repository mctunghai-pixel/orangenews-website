#!/usr/bin/env bash
# =============================================================================
# Noto Sans → Cyrillic+Latin subset for Orange News OG image generation
# =============================================================================
# Downloads upstream Noto Sans (Bold + Regular), subsets to Latin Basic +
# Cyrillic, outputs to src/lib/fonts/. Idempotent — safe to re-run.
#
# Usage:  bash scripts/subset-fonts.sh
# Deps:   pyftsubset (pip3 install --user fonttools brotli)
# =============================================================================
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$REPO_ROOT/src/lib/fonts"
WORK_DIR="$(mktemp -d)"
trap 'rm -rf "$WORK_DIR"' EXIT

# Unicode coverage:
#   U+0020-007E   Basic Latin (printable ASCII)
#   U+00A0-00FF   Latin-1 Supplement (typographic punct, ©, °)
#   U+0400-04FF   Cyrillic
#   U+2010-2027   General punct (en/em dash, ellipsis, quotes)
#   U+2030,U+2032 ‰, ′
UNICODES="U+0020-007E,U+00A0-00FF,U+0400-04FF,U+2010-2027,U+2030,U+2032"

# Upstream source: notofonts/notosans (canonical Google Noto repo)
# Path verified: fonts/ttf/hinted/instance_ttf/ (post-2024 repo restructure)
NOTO_BASE="https://github.com/notofonts/notosans/raw/main/fonts/ttf/hinted/instance_ttf"

mkdir -p "$OUT_DIR"

download_and_subset() {
  local weight="$1"
  local src="$WORK_DIR/NotoSans-${weight}.ttf"
  local out="$OUT_DIR/NotoSans-${weight}.subset.ttf"

  echo "→ Downloading NotoSans-${weight}.ttf..."
  curl -fsSL -o "$src" "$NOTO_BASE/NotoSans-${weight}.ttf"

  echo "→ Subsetting to ${out}..."
  pyftsubset "$src" \
    --unicodes="$UNICODES" \
    --output-file="$out" \
    --layout-features='kern,liga,calt' \
    --no-hinting \
    --desubroutinize

  local size_kb=$(du -k "$out" | cut -f1)
  echo "  ✓ ${weight}: ${size_kb}KB"
}

download_and_subset "Bold"
download_and_subset "Regular"

echo ""
echo "Output:"
ls -lh "$OUT_DIR"

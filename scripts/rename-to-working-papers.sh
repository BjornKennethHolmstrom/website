#!/bin/bash
# rename-to-working-papers.sh
# Renames all references from "whitepapers" to "working-papers" across the codebase.
# Run from the project root: bash scripts/rename-to-working-papers.sh
# A dry-run mode is available: bash scripts/rename-to-working-papers.sh --dry-run

set -e

DRY_RUN=false
if [[ "$1" == "--dry-run" ]]; then
  DRY_RUN=true
  echo "=== DRY RUN MODE — no files will be changed ==="
fi

ROOT="$(pwd)"
SRC="$ROOT/src"
STATIC="$ROOT/static"

echo ""
echo "=== Step 1: Text replacements in source files ==="
echo "(routes, components, i18n, data, scripts, markdown content)"
echo ""

# File extensions to search for text replacements
EXTENSIONS=("svelte" "ts" "js" "md" "json" "html" "css")

# Build the find command for all relevant extensions
FIND_ARGS=()
for ext in "${EXTENSIONS[@]}"; do
  FIND_ARGS+=(-o -name "*.$ext")
done
# Remove leading -o
FIND_ARGS=("${FIND_ARGS[@]:1}")

# Find all matching files and do replacements
while IFS= read -r file; do
  if grep -q "whitepaper" "$file" 2>/dev/null; then
    if $DRY_RUN; then
      echo "[DRY RUN] Would update: $file"
      grep -n "whitepaper" "$file" | head -5
    else
      # Order matters: do more specific patterns first
      sed -i \
        -e 's|/whitepapers/|/working-papers/|g' \
        -e 's|route.*whitepapers|route: working-papers|g' \
        -e 's|href="whitepapers|href="working-papers|g' \
        -e 's|href='"'"'whitepapers|href='"'"'working-papers|g' \
        -e 's|path.*whitepapers|path: working-papers|g' \
        -e 's|"whitepapers"|"working-papers"|g' \
        -e 's|'"'"'whitepapers'"'"'|'"'"'working-papers'"'"'|g' \
        -e 's|\bwhitepapers\b|working-papers|g' \
        "$file"
      echo "Updated: $file"
    fi
  fi
done < <(find "$SRC" -type f \( "${FIND_ARGS[@]}" \))

# Also check scripts directory
while IFS= read -r file; do
  if grep -q "whitepaper" "$file" 2>/dev/null; then
    if $DRY_RUN; then
      echo "[DRY RUN] Would update script: $file"
    else
      sed -i \
        -e 's|/whitepapers/|/working-papers/|g' \
        -e 's|"whitepapers"|"working-papers"|g' \
        -e 's|'"'"'whitepapers'"'"'|'"'"'working-papers'"'"'|g' \
        "$file"
      echo "Updated script: $file"
    fi
  fi
done < <(find "$ROOT/scripts" -type f -name "*.js" 2>/dev/null)

echo ""
echo "=== Step 2: Rename i18n translation file ==="
echo ""

I18N_OLD="$SRC/lib/i18n/translations/whitepapers.ts"
I18N_NEW="$SRC/lib/i18n/translations/working-papers.ts"

if [ -f "$I18N_OLD" ]; then
  if $DRY_RUN; then
    echo "[DRY RUN] Would rename: $I18N_OLD -> $I18N_NEW"
  else
    mv "$I18N_OLD" "$I18N_NEW"
    echo "Renamed: $I18N_OLD -> $I18N_NEW"
  fi
else
  echo "Skipped (not found): $I18N_OLD"
fi

echo ""
echo "=== Step 3: Rename data file ==="
echo ""

DATA_OLD="$SRC/lib/data/whitepapers.ts"
DATA_NEW="$SRC/lib/data/working-papers.ts"

if [ -f "$DATA_OLD" ]; then
  if $DRY_RUN; then
    echo "[DRY RUN] Would rename: $DATA_OLD -> $DATA_NEW"
  else
    mv "$DATA_OLD" "$DATA_NEW"
    echo "Renamed: $DATA_OLD -> $DATA_NEW"
  fi
else
  echo "Skipped (not found): $DATA_OLD"
fi

echo ""
echo "=== Step 4: Rename lib/whitepapers directory ==="
echo ""

LIB_WP_OLD="$SRC/lib/whitepapers"
LIB_WP_NEW="$SRC/lib/working-papers"

if [ -d "$LIB_WP_OLD" ]; then
  if $DRY_RUN; then
    echo "[DRY RUN] Would rename: $LIB_WP_OLD -> $LIB_WP_NEW"
  else
    mv "$LIB_WP_OLD" "$LIB_WP_NEW"
    echo "Renamed: $LIB_WP_OLD -> $LIB_WP_NEW"
  fi
else
  echo "Skipped (not found): $LIB_WP_OLD"
fi

echo ""
echo "=== Step 5: Rename routes/whitepapers directory ==="
echo ""

ROUTE_OLD="$SRC/routes/whitepapers"
ROUTE_NEW="$SRC/routes/working-papers"

if [ -d "$ROUTE_OLD" ]; then
  if $DRY_RUN; then
    echo "[DRY RUN] Would rename: $ROUTE_OLD -> $ROUTE_NEW"
  else
    mv "$ROUTE_OLD" "$ROUTE_NEW"
    echo "Renamed: $ROUTE_OLD -> $ROUTE_NEW"
  fi
else
  echo "Skipped (not found): $ROUTE_OLD"
fi

echo ""
echo "=== Step 6: Fix any import paths broken by file renames ==="
echo ""

# After renaming files, update any imports that reference the old filenames
while IFS= read -r file; do
  if grep -q "from.*whitepapers\|import.*whitepapers" "$file" 2>/dev/null; then
    if $DRY_RUN; then
      echo "[DRY RUN] Would fix imports in: $file"
    else
      sed -i \
        -e "s|from '\(.*\)whitepapers\(.*\)'|from '\1working-papers\2'|g" \
        -e 's|from "\(.*\)whitepapers\(.*\)"|from "\1working-papers\2"|g' \
        "$file"
      echo "Fixed imports in: $file"
    fi
  fi
done < <(find "$SRC" -type f \( -name "*.ts" -o -name "*.svelte" -o -name "*.js" \))

echo ""
echo "=== Step 7: Rename static/whitepapers directory ==="
echo ""

STATIC_OLD="$STATIC/whitepapers"
STATIC_NEW="$STATIC/working-papers"

if [ -d "$STATIC_OLD" ]; then
  if $DRY_RUN; then
    echo "[DRY RUN] Would rename: $STATIC_OLD -> $STATIC_NEW"
    echo "          (contains PDFs and images served at /whitepapers/...)"
  else
    mv "$STATIC_OLD" "$STATIC_NEW"
    echo "Renamed: $STATIC_OLD -> $STATIC_NEW"
  fi
else
  echo "Skipped (not found): $STATIC_OLD"
fi

echo ""
echo "=== Step 8: Update any hardcoded static paths in source files ==="
echo "(catches references like src='/whitepapers/images/...' or href='/whitepapers/...')"
echo ""

while IFS= read -r file; do
  if grep -q "whitepapers" "$file" 2>/dev/null; then
    if $DRY_RUN; then
      echo "[DRY RUN] Would update static paths in: $file"
      grep -n "whitepapers" "$file" | head -5
    else
      sed -i \
        -e 's|/whitepapers/|/working-papers/|g' \
        -e 's|"whitepapers/|"working-papers/|g' \
        -e "s|'whitepapers/|'working-papers/|g" \
        "$file"
      echo "Updated static paths in: $file"
    fi
  fi
done < <(find "$SRC" "$ROOT/scripts" -type f \( -name "*.svelte" -o -name "*.ts" -o -name "*.js" -o -name "*.md" \) 2>/dev/null)

echo ""
echo "=== Done ==="
if $DRY_RUN; then
  echo ""
  echo "Dry run complete. Run without --dry-run to apply changes."
else
  echo ""
  echo "All done! Next steps:"
  echo "  1. Run: npm run dev  (check for broken imports or build errors)"
  echo "  2. Visit /working-papers in your browser"
  echo "  3. Check navigation links in Header.svelte"
  echo "  4. Regenerate PDFs — the generate-*.js scripts reference /whitepapers/"
  echo "     in their output paths; re-run them so PDFs land in static/working-papers/"
  echo "  5. If you use a sitemap, regenerate it"
  echo "  6. Add a redirect: /whitepapers -> /working-papers"
  echo "     (SvelteKit: add a +page.ts in routes/whitepapers/ that redirects)"
fi

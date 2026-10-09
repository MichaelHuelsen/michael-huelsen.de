#!/bin/bash

# Find posts that exist in one language but are missing in the other.
#
# Usage: scripts/find-missing-posts.sh
# Exit code: 0 if all posts are present in every language, 1 otherwise.

cd "$(dirname "$0")/.." || exit 1

YEARS=("2025" "2026")
LANGS=("de" "en")

# List post slugs for a language/year. Supports single files (slug.md)
# and page bundles (slug/index.md); ignores backups and other files.
list_posts() {
    local dir="content/$1/posts/$2"
    [ -d "$dir" ] || return 0
    for f in "$dir"/*; do
        local name
        name=$(basename "$f")
        if [ -f "$f" ] && [[ "$name" == *.md ]]; then
            echo "${name%.md}"
        elif [ -d "$f" ] && { [ -f "$f/index.md" ] || ls "$f"/index.*.md >/dev/null 2>&1; }; then
            echo "$name"
        fi
    done | sort -u
}

missing=0

for y in "${YEARS[@]}"; do
    echo "== $y =="
    for l in "${LANGS[@]}"; do
        for other in "${LANGS[@]}"; do
            [ "$l" = "$other" ] && continue
            # posts present in $l but not in $other
            while IFS= read -r slug; do
                echo "missing in $other: $y/$slug (exists in $l)"
                missing=$((missing + 1))
            done < <(comm -23 <(list_posts "$l" "$y") <(list_posts "$other" "$y"))
        done
    done
done

if [ "$missing" -eq 0 ]; then
    echo "All posts available in: ${LANGS[*]}"
    exit 0
fi

echo "$missing missing post(s)"
exit 1

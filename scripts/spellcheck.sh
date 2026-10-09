#!/bin/bash

# Interactive aspell check of all posts.
#
# Usage: scripts/spellcheck.sh [lang ...]   (default: de en)

cd "$(dirname "$0")/.." || exit 1

YEARS=("2025" "2026")
LANGS=("$@")
[ $# -eq 0 ] && LANGS=(de en)

for l in "${LANGS[@]}"; do
    echo "== $l =="
    for y in "${YEARS[@]}"; do
        for p in content/$l/posts/$y/*.md; do
            [ -f "$p" ] || continue
            aspell -l "$l" check "$p"
        done
    done
done

#!/bin/bash

# Run all pre-release checks, then build the site if every check passes.
#
# Usage: scripts/release-build.sh

cd "$(dirname "$0")/.." || exit 1

CHECKS=(
    scripts/find-missing-posts.sh
    scripts/check-drafts.sh
    scripts/spellcheck.sh
)

for check in "${CHECKS[@]}"; do
    echo ">> $check"
    if ! "$check"; then
        echo "Check failed: $check. Build aborted."
        exit 1
    fi
done

hugo --gc --minify

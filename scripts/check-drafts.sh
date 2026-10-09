#!/bin/bash

# List content files that still have draft = true (TOML) or draft: true (YAML).
#
# Usage: scripts/check-drafts.sh
# Exit code: 0 if no drafts, 1 otherwise.

cd "$(dirname "$0")/.." || exit 1

drafts=$(grep -rEil --include='*.md' '^[[:space:]]*draft[[:space:]]*[=:][[:space:]]*true' content | sort)

if [ -z "$drafts" ]; then
    echo "No drafts found."
    exit 0
fi

echo "Drafts:"
echo "$drafts"
exit 1

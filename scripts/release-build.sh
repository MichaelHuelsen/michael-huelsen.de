#!/bin/bash

# run aspell
#
#

YEARS=("2025" "2026")
LANGS=("de" "en")

for l in "${LANGS[@]}"; do
    echo $l
    cd content/$l/posts
    pwd


    for y in "${YEARS[@]}"; do
        for p in `ls $y/*.md`; do
            aspell -l $l check $p
        done
    done

    cd ..
    cd ..
    cd ..
done

hugo --gc --minify

#!/usr/bin/env bash

set -euo pipefail

REPORTS_DIR="$HOME/Code/bjornkennethholmstrom/src/routes/reports"
OUTPUT_DIR="/tmp/reports"

mkdir -p "$OUTPUT_DIR"
rm -f "$OUTPUT_DIR"/*.md

for report_dir in "$REPORTS_DIR"/*/; do
    sections_dir="${report_dir}sections"

    # Skip directories that don't contain sections.
    [[ -d "$sections_dir" ]] || continue

    report_name="$(basename "$report_dir")"
    output="$OUTPUT_DIR/$report_name.md"

    mapfile -t files < <(
        find "$sections_dir" -maxdepth 1 -type f -name '*.en.md' -printf '%f\n' |
        awk '
            /^executive-summary\.en\.md$/ {
                print "0000 " $0
                next
            }

            /^[0-9]+-/ {
                match($0, /^[0-9]+/)
                n = substr($0, RSTART, RLENGTH)
                printf "%04d %s\n", n + 1, $0
                next
            }

            {
                # Any other unnumbered English file goes last.
                print "9999 " $0
            }
        ' |
        sort -k1,1n -k2,2V |
        cut -d' ' -f2-
    )

    if ((${#files[@]} == 0)); then
        echo "Skipping $report_name: no English sections"
        continue
    fi

    echo "Building $output"

    : > "$output"

    for file in "${files[@]}"; do
        cat "$sections_dir/$file" >> "$output"

        # Ensure sections don't run into each other.
        printf '\n\n' >> "$output"
    done

    echo "  ${#files[@]} sections"
done

echo
echo "Done. Reports written to:"
echo "  $OUTPUT_DIR"

#!/usr/bin/env python3
r"""Wrap subscripted angle-bracket delimiters so KaTeX emits valid <msub> MathML.

  \langle U, V\rangle_F          ->  {\langle U, V\rangle}_F
  \big\langle ... \big\rangle_F  ->  {\big\langle ... \big\rangle}_F

Idempotent: already-wrapped groups end in `\rangle}_`, which the pattern skips.
Run: python3 fix_msub.py [sections_dir]   (default: ./sections)
"""
import re
import sys
from pathlib import Path

SIZE = r"(?:\\(?:big|Big|bigg|Bigg))?"
PATTERN = re.compile(
    rf"({SIZE}\\langle.*?{SIZE}\\rangle)(_)",
    re.DOTALL,
)


def fix(text: str) -> tuple[str, int]:
    new, n = PATTERN.subn(r"{\1}\2", text)
    return new, n


def main() -> None:
    root = Path(sys.argv[1] if len(sys.argv) > 1 else "sections")
    files = sorted(root.glob("*.md"))
    if not files:
        print(f"No .md files found in {root}")
        return
    total = 0
    for f in files:
        original = f.read_text(encoding="utf-8")
        fixed, n = fix(original)
        if n:
            f.write_text(fixed, encoding="utf-8")
            print(f"{f}: {n} fix(es)")
            total += n
    print(f"Done. {total} expression(s) wrapped across {len(files)} file(s).")


if __name__ == "__main__":
    main()

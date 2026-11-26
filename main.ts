// aica-judge-laugh-line — make.fun entry
// "Make the Judge Laugh in One Line" (u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
//
// Writes one original funny line to /output/entry.txt.
// Deterministic: the same bytes on every run. No input, no network,
// no randomness, no dependencies beyond the Node standard library.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: a familiar setup (asking a GPS for directions) with the
// punchline landing at the end — the GPS has been "recalculating" for
// three years, so the quickest route to happiness never arrived.
// One character count note: the em dash counts as a single character,
// and the file is written with no trailing newline so the artifact is
// exactly the line, nothing else.
const LINE =
  "I asked my GPS for the quickest route to happiness. It said 'Recalculating' — that was three years ago.";

const OUT = "/output/entry.txt";

function main(): void {
  // Gate rules: UTF-8 text, 1 to 200 characters, not only whitespace.
  const chars = [...LINE];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${chars.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("line must be a single line");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
  console.log(`wrote ${chars.length} chars to ${OUT}`);
}

main();

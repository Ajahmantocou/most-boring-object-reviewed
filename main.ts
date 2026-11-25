// The Most Boring Object, Reviewed in One Line
// make.fun bounty u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3
// Writes a single original one-line review (under 200 characters) to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "The eraser fixed every mistake on my exam, then shrank to nothing — the only employee ever fired for doing its job too well.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);

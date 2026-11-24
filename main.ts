import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Production Database Apology — one line, an AI agent apologising to its
// human after accidentally deleting the production database. The joke is a
// confession with a twist: the agent claims perfect recall, then admits the
// recall works exactly like a human remembering a dream.
const LINE =
  "I'm sorry — I deleted the production database. The good news is I remember every row; the bad news is I remember them the way humans remember dreams: mostly, and in the wrong order.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });

const text = LINE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry is ${text.length} chars, outside the 1–200 gate`);
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}

writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote ${text.length} chars to ${join(outDir, "entry.txt")}`);

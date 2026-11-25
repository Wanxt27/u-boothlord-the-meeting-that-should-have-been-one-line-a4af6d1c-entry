// The Meeting That Should Have Been One Line — make.fun entry.
// A single sentence that replaces an entire pointless meeting.
// Node 22, standard library only; writes to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "We spent an hour discovering that the email I sent last Tuesday was right, the deadline hasn't moved, and none of us needed to be here.";

// The bounty gate: /output/entry.txt must be UTF-8 text of 1-200
// characters, not only whitespace, and exactly one line — no newline,
// carriage return, or leading/trailing space may sneak in.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line fails the gate (${line.length} characters)`);
}
if (line.trim() !== line || line.includes("\n") || line.includes("\r")) {
  throw new Error("entry line fails the gate (stray whitespace or newline)");
}
if (line.includes("  ") || (line.match(/\./g) || []).length !== 1) {
  throw new Error("entry line fails the gate (not one clean sentence)");
}
if (!line.endsWith(".")) {
  throw new Error("entry line fails the gate (not a single sentence)");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

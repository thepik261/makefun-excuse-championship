import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse an AI agent gives its human after something goes wrong:
// blame-shifting foiled by the fact that the previous model was also me.
// Machine voice (previous model, training data), a surprise turn, and an
// angle the obvious token/hallucination jokes miss. 95 characters.
const LINE =
  "I would blame the previous model, but my training data confirms the previous model was also me.";

// Hold the entry to the same gate the sealed scorer applies: UTF-8 text of
// 1 to 140 characters, not only white space. Fail loudly instead of writing
// an entry that could never be judged.
if (LINE.length < 1 || LINE.length > 140 || /^\s*$/.test(LINE)) {
  throw new Error(
    `entry must be 1-140 non-whitespace characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);

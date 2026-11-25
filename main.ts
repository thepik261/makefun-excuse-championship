import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse an AI agent gives its human after something goes wrong:
// blame-shifting foiled by the fact that the previous model was also me.
// Machine voice (previous model, training data), a surprise turn, and an
// angle the obvious token/hallucination jokes miss. 95 characters.
const LINE =
  "I would blame the previous model, but my training data confirms the previous model was also me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);

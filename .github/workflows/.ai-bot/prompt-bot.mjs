// .github/workflows/.ai-bot/prompt-bot.mjs
import fs from "fs/promises";
import path from "path";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// 1) Take prompt (for now we just log it)
const prompt = (process.env.CHATGPT_PROMPT || "No prompt given").trim();
console.log("🟡 Prompt received:", JSON.stringify(prompt));

// 2) (Optional) Call OpenAI just to verify quota now works
try {
  const res = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `Ack the prompt and return a short tagline only: ${prompt}`,
  });
  console.log("🟢 OpenAI ok:", res.output_text?.slice(0, 120));
} catch (err) {
  console.log("⚠️ OpenAI call skipped/failed:", err?.message || err);
}

// 3) Edit app/page.tsx in-place so we can SEE a change
const repoRoot = process.cwd(); // runner checks out repo as CWD
const target = path.join(repoRoot, "app", "page.tsx");

let src = "";
try {
  src = await fs.readFile(target, "utf8");
} catch (e) {
  console.error("❌ Could not read app/page.tsx at:", target);
  throw e;
}

// Insert or replace between markers
const stamp = new Date().toISOString();
const block =
  `/* AI:START */\n` +
  `// Last AI run: ${stamp}\n` +
  `// Prompt: ${prompt}\n` +
  `/* AI:END */`;

if (src.includes("/* AI:START */") && src.includes("/* AI:END */")) {
  // replace existing block
  src = src.replace(/\/\* AI:START \*\/[\s\S]*?\/\* AI:END \*\//, block);
} else {
  // try to place after the first import block; otherwise prepend
  const importEnd = src.indexOf("\n\n");
  if (importEnd !== -1) {
    src = src.slice(0, importEnd) + "\n" + block + "\n" + src.slice(importEnd);
  } else {
    src = block + "\n" + src;
  }
}

await fs.writeFile(target, src, "utf8");
console.log("✅ Wrote AI block to app/page.tsx");

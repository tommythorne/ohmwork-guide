import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const prompt = (process.env.CHATGPT_PROMPT || "").trim() || "No prompt provided.";

(async () => {
  try {
    console.log("🛠 Running AI Prompt Bot");
    console.log("📨 Prompt:", JSON.stringify(prompt));

    const res = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt
    });

    const out = res.output_text ?? "(no text output)";
    console.log("🤖 AI Response:\n" + out);
  } catch (err) {
    console.error("❌ Bot error:", err?.message || err);
    process.exit(1);
  }
})();

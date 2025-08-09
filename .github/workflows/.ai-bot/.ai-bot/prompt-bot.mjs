import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import OpenAI from 'openai';

const repoRoot = process.env.GH_REPO_ROOT || process.cwd();
const base = process.env.DEFAULT_BASE_BRANCH || 'main';
const mode = (process.env.MODE || 'build').trim();
const userPrompt = (process.env.PROMPT || '').trim();
const model = process.env.AI_MODEL || 'gpt-4.1-mini';

if (!process.env.OPENAI_API_KEY) { console.error('Missing OPENAI_API_KEY'); process.exit(1); }
if (!userPrompt) { console.error('Missing PROMPT'); process.exit(1); }

function snapshot(max=150000){
  const files = execSync('git ls-files', { cwd: repoRoot }).toString().trim().split('\n').filter(Boolean);
  const keep = files.filter(x => /^(package.json|next\.config\.(m?js|ts)|tsconfig\.json|app\/|pages\/|src\/|styles\/|public\/|README\.md)/i.test(x));
  let s = `Repo files (${keep.length}/${files.length}):\n` + keep.join('\n') + '\n\n';
  for (const x of keep.slice(0,200)) {
    try {
      const c = fs.readFileSync(path.join(repoRoot, x), 'utf8');
      const h = `--- FILE: ${x} ---\n`;
      if ((s + h).length < max) { s += h + c.slice(0,5000) + '\n\n'; if (s.length > max) break; }
    } catch {}
  }
  return s.slice(0, max);
}

const system = `You are a repo-coding agent. Output JSON ONLY with:
{"base":"main","branch":"ai/task","commit":"msg","files":[{"path":"p","content":"c"}],"delete":[]}
Rules:
- JSON only.
- Full-file writes (no patches).
- Ensure buildable project. If none, scaffold Next.js App Router + TypeScript + Tailwind.
- Wire routes into nav; document env vars in README.
- Avoid CLS (pre-size media, preload fonts).`;

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const messages = [
  { role: 'system', content: system },
  { role: 'user', content: `MODE: ${mode}\nPROMPT: ${userPrompt}\n\nSNAPSHOT:\n${snapshot()}` }
];

const resp = await openai.chat.completions.create({ model, messages, temperature: 0.2 });
let plan;
try { plan = JSON.parse(resp.choices[0].message.content); }
catch (e) {
  console.error('Model did not return valid JSON:\n' + resp.choices[0].message.content);
  process.exit(1);
}

// Write files
if (Array.isArray(plan.files)) {
  for (const f of plan.files) {
    const p = path.join(repoRoot, f.path);
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, f.content, 'utf8');
  }
}

// Delete files
if (Array.isArray(plan.delete)) {
  for (const d of plan.delete) {
    const p = path.join(repoRoot, d);
    if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
  }
}

// Best-effort local build
try {
  if (fs.existsSync(path.join(repoRoot, 'package.json'))) {
    try { execSync(`npm ci --ignore-scripts --prefer-offline || npm install`, { cwd: repoRoot, stdio: 'inherit' }); } catch {}
    execSync(`npm run build`, { cwd: repoRoot, stdio: 'inherit' });
  }
} catch (e) {
  console.warn('Build failed locally; PR will still be opened so you can see diffs.');
}

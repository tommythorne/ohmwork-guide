/**
 * Bridges quiz.ts -> content.ts for all modules (module-01 .. module-99).
 * - Creates quiz-bridge.ts that exports the first array found in quiz.ts
 * - Injects into content.ts: import quiz from "./quiz-bridge"; (content as any).quiz = quiz;
 * - Idempotent: can be run repeatedly; it cleans prior attempts.
 */
const fs = require('fs');
const path = require('path');

const modulesRoot = path.join('app', 'modules');
if (!fs.existsSync(modulesRoot)) {
  console.error('❌ Missing app/modules directory');
  process.exit(1);
}

const dirs = fs.readdirSync(modulesRoot).filter(d => /^module-\d+$/i.test(d));
let changed = 0, skipped = 0;

for (const dir of dirs) {
  const modDir = path.join(modulesRoot, dir);
  const quizTs = path.join(modDir, 'quiz.ts');
  const contentTs = path.join(modDir, 'content.ts');
  const bridgeTs = path.join(modDir, 'quiz-bridge.ts');

  if (!fs.existsSync(quizTs)) {
    // No quiz file present -> skip (module may be template-only right now)
    skipped++;
    continue;
  }
  if (!fs.existsSync(contentTs)) {
    console.warn(`⚠️  ${dir}: no content.ts found; skipping`);
    skipped++;
    continue;
  }

  // 1) Ensure quiz-bridge.ts
  const bridge = `// @ts-nocheck
import * as quizMod from "./quiz";
const candidates = Object.values(quizMod);
const found = candidates.find((v) => Array.isArray(v)) || [];
export default found as any[];
`;
  fs.writeFileSync(bridgeTs, bridge);

  // 2) Patch content.ts
  let s = fs.readFileSync(contentTs, 'utf8');

  // ts-nocheck at top
  if (!s.startsWith('// @ts-nocheck')) s = '// @ts-nocheck\n' + s;

  // Clean older wiring/imports
  s = s
    .replace(/import\s+.*from\s+["']\.\/quiz(?:-bridge)?["'];?\n?/g, '')
    .replace(/\(content as any\)\.quiz\s*=\s*.*;\n?/g, '')
    .replace(/\/\/ QUIZ WIRE MARKER[\s\S]*?export default content;\s*$/m, 'export default content;');

  // Ensure we can target an export default; if not, append one
  if (!/export default content;\s*$/m.test(s)) {
    if (!/export default content;/.test(s)) s += '\nexport default content;\n';
  }

  // Inject our import + attach immediately before the final export
  s = s.replace(
    /export default content;\s*$/m,
    'import quiz from "./quiz-bridge";\n(content as any).quiz = quiz;\nexport default content;\n'
  );

  fs.writeFileSync(contentTs, s);
  changed++;
  console.log(`✅ Patched ${dir}`);
}

console.log(`\nDone. Patched: ${changed}, Skipped: ${skipped}`);

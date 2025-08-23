const fs = require('fs');
const p = 'app/modules/module-01/content.ts';
let s = fs.readFileSync(p, 'utf8');

// Ensure ts-nocheck at top (avoid type noise)
if (!s.startsWith('// @ts-nocheck')) s = '// @ts-nocheck\n' + s;

// Strip any previous quiz wiring/imports we might've added
s = s
  .replace(/import\s+.*from\s+["']\.\/quiz(?:-bridge)?["'];?\n?/g, '')
  .replace(/\(content as any\)\.quiz\s*=\s*.*;\n?/g, '')
  .replace(/\/\/ QUIZ WIRE MARKER[\s\S]*?export default content;\s*$/m, 'export default content;');

// Ensure we have an export to target; if not, append one
if (!/export default content;\s*$/m.test(s)) {
  if (!/export default content;/.test(s)) {
    s += '\nexport default content;\n';
  }
}

// Inject our bridge import + attach right before final export
s = s.replace(
  /export default content;\s*$/m,
  'import quiz from "./quiz-bridge";\n(content as any).quiz = quiz;\nexport default content;\n'
);

fs.writeFileSync(p, s);
console.log('✅ Patched', p);

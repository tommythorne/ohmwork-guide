import fs from 'fs';

const p = 'app/components/ModuleTemplate.tsx';
let s = fs.readFileSync(p, 'utf8');

// A) Replace the OUTER top-nav wrapper classes (remove bg/border/sticky/blur)
s = s.replace(
  'className="bg-slate-900/70 border-b border-white/10 sticky top-0 z-20 backdrop-blur"',
  'className="max-w-5xl mx-auto px-5 pt-4"'
);

// B) Replace the INNER top-nav wrapper (the one with FooterNav) to be layout-neutral
//    Only change the FIRST occurrence of this exact wrapper near the top nav.
let replacedOnce = false;
s = s.replace(/className="max-w-5xl mx-auto px-5 py-3"/, (m) => {
  if (replacedOnce) return m;
  replacedOnce = true;
  return 'className="contents"';
});

fs.writeFileSync(p, s);
console.log('✓ Patched top nav: now thin, static, borderless (matches bottom style)');

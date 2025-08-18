import fs from "fs";
import path from "path";

const exts = new Set([".tsx",".ts",".js",".jsx",".mdx",".md",".html",".css"]);
const root = "app";

let changed = 0;
function walk(dir){
  for (const name of fs.readdirSync(dir,{withFileTypes:true})) {
    const p = path.join(dir,name.name);
    if (name.isDirectory()) walk(p);
    else if (exts.has(path.extname(p))) {
      let s = fs.readFileSync(p,"utf8");
      const next = s
        // Normalize any /images/Module-02/ to /images/module-02/
        .replaceAll("/images/Module-02/","/images/module-02/")
        // Also catch rare backslash or mixed-case variants
        .replaceAll("/images/module-02\\","/images/module-02/")
        .replaceAll("/Images/Module-02/","/images/module-02/");
      if (next !== s) {
        fs.writeFileSync(p,next,"utf8");
        changed++;
        console.log("fixed:", p);
      }
    }
  }
}
if (fs.existsSync(root)) walk(root);
console.log(`\n✅ Done. Files changed: ${changed}`);

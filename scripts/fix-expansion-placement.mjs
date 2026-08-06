import fs from "fs";
import path from "path";

const blogDir = path.join(process.cwd(), "src/pages/blog");
let fixed = 0;

for (const file of fs.readdirSync(blogDir).filter((f) => f.endsWith(".tsx"))) {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, "utf8");

  // Expansion blocks wrongly placed after prose </div> — move inside prose
  const badPattern =
    /(\s*)<\/div>\s*\n(\s*)\{\/\* data-expanded-depth[^*]*\*\/\}([\s\S]*?)(\n\s*<BlogFAQ|\n\s*<RelatedArticles)/;

  if (!badPattern.test(content)) continue;

  content = content.replace(badPattern, (_, indent, _expIndent, expansion, next) => {
    return `${expansion}\n${indent}</div>${next}`;
  });

  // Same for depth-2 and depth-3 outside prose
  for (const tag of ["data-expanded-depth-2", "data-expanded-depth-3"]) {
    const re = new RegExp(
      `(\\s*)<\\/div>\\s*\\n(\\s*)\\{\\/\\* ${tag}[^*]*\\*\\/\\}([\\s\\S]*?)(\\n\\s*<BlogFAQ|\\n\\s*<RelatedArticles)`
    );
    if (re.test(content)) {
      content = content.replace(re, (_, indent, _e, expansion, next) => `${expansion}\n${indent}</div>${next}`);
    }
  }

  fs.writeFileSync(filePath, content);
  fixed++;
  console.log("Fixed placement:", file);
}

console.log("Done:", fixed, "files");

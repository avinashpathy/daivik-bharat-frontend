// Writes public/sitemap.xml from the Markdown content, so new articles are picked up automatically.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { topics } from "../src/content/data/site.js";

const SITE = "https://www.daivikbharat.in";
const staticPaths = ["/", "/read", "/topics", "/texts", "/books", "/gallery", "/about", "/contact"];
const slugOf = (file) => readFileSync(file, "utf8").match(/^slug:\s*(.+)$/m)?.[1].trim();

const paths = [...staticPaths];
for (const f of readdirSync("src/content/articles")) paths.push(`/read/${slugOf(`src/content/articles/${f}`)}`);
for (const f of readdirSync("src/content/stotras")) paths.push(`/texts/${slugOf(`src/content/stotras/${f}`)}`);

for (const t of topics) paths.push(`/topics/${t.slug}`);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join("\n")}
</urlset>
`;
writeFileSync("public/sitemap.xml", xml);
console.log(`sitemap.xml: ${paths.length} URLs`);

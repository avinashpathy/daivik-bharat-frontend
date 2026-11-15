// Writes public/sitemap.xml from the Markdown content, so new articles are picked up automatically.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";

const SITE = "https://www.daivikbharat.in";
const staticPaths = ["/", "/explainers", "/scriptures", "/history", "/books", "/gallery", "/event-in-context", "/about", "/contact"];
const slugOf = (file) => readFileSync(file, "utf8").match(/^slug:\s*(.+)$/m)?.[1].trim();
const sectionOf = (file) => readFileSync(file, "utf8").match(/^section:\s*(.+)$/m)?.[1].trim();

const paths = [...staticPaths];
for (const f of readdirSync("src/content/articles")) {
  const file = `src/content/articles/${f}`;
  paths.push(`/${sectionOf(file)}/${slugOf(file)}`);
}
for (const f of readdirSync("src/content/stotras")) paths.push(`/scriptures/${slugOf(`src/content/stotras/${f}`)}`);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join("\n")}
</urlset>
`;
writeFileSync("public/sitemap.xml", xml);
console.log(`sitemap.xml: ${paths.length} URLs`);

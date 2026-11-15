// Loads Markdown content at build time. Add a new .md file to src/content/... and it appears on the site.
import { marked } from "marked";

const articleFiles = import.meta.glob("../content/articles/*.md", { query: "?raw", import: "default", eager: true });
const stotraFiles = import.meta.glob("../content/stotras/*.md", { query: "?raw", import: "default", eager: true });

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (!m) continue;
    let value = m[2].trim();
    if (/^".*"$/.test(value)) value = value.slice(1, -1);
    if (value === "true") value = true;
    else if (value === "false") value = false;
    data[m[1]] = value;
  }
  return { data, body: match[2] };
}

function readingMinutes(text) {
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

marked.use({
  breaks: true,
  renderer: {
    link({ href, tokens }) {
      const text = this.parser.parseInline(tokens);
      const external = /^https?:/.test(href);
      return `<a href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${text}</a>`;
    },
  },
});

export const articles = Object.values(articleFiles)
  .map((raw) => {
    const { data, body } = parseFrontmatter(raw);
    const topics = String(data.topics || "").split(",").map((t) => t.trim()).filter(Boolean);
    return { ...data, topics, html: marked.parse(body), minutes: readingMinutes(body) };
  })
  .sort((a, b) => String(b.date).localeCompare(String(a.date)));

export function articlesWithTopic(topic) {
  return articles.filter((a) => a.topics.includes(topic));
}

export function articlesWithFormat(format) {
  return articles.filter((a) => a.format === format);
}

export function findArticle(slug) {
  return articles.find((a) => a.slug === slug);
}

// Stotra bodies: "## Heading" starts a part, blank lines separate verses,
// and a line starting with "! " is the closing colophon.
function parseStotra(body) {
  const parts = [];
  let colophon = null;
  let current = { heading: null, verses: [] };
  for (const block of body.trim().split(/\n\s*\n/)) {
    const lines = block.split("\n");
    if (lines[0].startsWith("## ")) {
      if (current.heading || current.verses.length) parts.push(current);
      current = { heading: lines[0].slice(3).trim(), verses: [] };
      lines.shift();
    }
    if (lines.length && lines[0].startsWith("! ")) {
      colophon = lines.join(" ").slice(2).trim();
      continue;
    }
    if (lines.length) current.verses.push(lines.map((l) => l.trim()));
  }
  if (current.heading || current.verses.length) parts.push(current);
  return { parts, colophon };
}

export const stotras = Object.values(stotraFiles)
  .map((raw) => {
    const { data, body } = parseFrontmatter(raw);
    return { ...data, ...parseStotra(body) };
  })
  .sort((a, b) => a.titleEn.localeCompare(b.titleEn));

export function findStotra(slug) {
  return stotras.find((s) => s.slug === slug);
}

# Daivik Bharat

Website for [Daivik Bharat](https://www.daivikbharat.in): learning about Bharat, out loud.

Built with Vite and React, hosted on Firebase. Pushing to `master` deploys automatically through GitHub Actions.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in build/
```

## Adding content

All content lives in `src/content/`. You don't need to touch any React code to publish.

| What | Where | Shows up at |
| --- | --- | --- |
| Explainer or myth-check | `src/content/articles/*.md` with `section: explainers` (set `kind: Myth-check` for myth-checks) | `/explainers/<slug>` |
| Heritage story | `src/content/articles/*.md` with `section: history` | `/history/<slug>` |
| Stotra | `src/content/stotras/*.md` | `/scriptures/<slug>` |
| Books, gallery, events | `src/content/data/*.js` | `/books`, `/gallery`, `/event-in-context` |

An article starts with frontmatter:

```md
---
slug: my-topic
section: explainers
kind: Explainer
title: We tried to understand my topic
glyph: प्रश्न        # Devanagari word for the cover
tone: green          # maroon | saffron | green | haldi
date: 2026-11-20
featured: true       # optional: shows it first on the home page
summary: One or two sentences.
---
```

Then write normal Markdown, and end with a `## Sources` list.

Stotras use `## Heading` for parts (दोहा, चौपाई…), a blank line between verses, and `! text` for the closing line.

`npm run build` also regenerates `public/sitemap.xml` from the content.

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
| Explainer, myth-check or story | `src/content/articles/*.md` | `/read/<slug>`, and under each of its topics |
| Primary text (stotra, document) | `src/content/stotras/*.md` | `/texts/<slug>` |
| Topics | `src/content/data/site.js` | `/topics/<slug>` |
| Reading list, photos | `src/content/data/*.js` | `/books`, `/gallery` |

An article starts with frontmatter:

```md
---
slug: my-topic
format: explainer        # explainer | myth-check | story
topics: history, geography  # slugs from src/content/data/site.js; the first sets the colour
title: A plain question people actually ask
glyph: प्रश्न            # word for the cover
date: 2026-11-20
featured: true           # optional: shows it first on the home page
summary: One or two sentences.
---
```

Explainers follow the same four parts, as `##` headings: **The question**, **What the sources say**, **How people see it today**,
**What's still unclear**, then **Sources**. Describe each side the way its own supporters would.

Texts use `## Heading` for parts (दोहा, चौपाई…), a blank line between verses, and `! text` for the closing line.

`npm run build` also regenerates `public/sitemap.xml` from the content.

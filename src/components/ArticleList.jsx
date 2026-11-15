import { Link } from "react-router-dom";
import Cover from "./Cover";
import { images } from "../content/data/gallery";
import { formats, topicBySlug } from "../content/data/site";

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export function ArticleMeta({ article }) {
  return (
    <p className="meta">
      {formats[article.format]?.name} in {article.topics.map((t) => topicBySlug(t)?.name).filter(Boolean).join(", ")}. {article.minutes} min read.
    </p>
  );
}

export default function ArticleList({ items }) {
  return (
    <ul className="article-list">
      {items.map((a) => (
        <li key={a.slug}>
          <Link to={`/read/${a.slug}`} className="article-row">
            <Cover glyph={a.glyph} tone={a.tone} image={images[a.image]} size="sm" />
            <div>
              <h3>{a.title}</h3>
              <p className="article-row__summary">{a.summary}</p>
              <ArticleMeta article={a} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

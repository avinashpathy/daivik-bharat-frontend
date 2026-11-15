import { Link } from "react-router-dom";
import Cover from "./Cover";
import { images } from "../content/data/gallery";

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function ArticleList({ items, base }) {
  return (
    <ul className="article-list">
      {items.map((a) => (
        <li key={a.slug}>
          <Link to={`${base}/${a.slug}`} className="article-row">
            <Cover glyph={a.glyph} tone={a.tone} image={images[a.image]} size="sm" />
            <div>
              <p className="article-row__kind">{a.kind}</p>
              <h3>{a.title}</h3>
              <p className="article-row__summary">{a.summary}</p>
              <p className="meta">{a.minutes} min read</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import Cover from "../components/Cover";
import NotFound from "./NotFound";
import { findArticle } from "../lib/content";
import { images } from "../content/data/gallery";
import { formatDate } from "../components/ArticleList";
import { site, formats, topicBySlug } from "../content/data/site";

export default function Article() {
  const { slug } = useParams();
  const article = findArticle(slug);
  if (!article) return <NotFound />;
  const image = images[article.image];

  return (
    <article className="article">
      <Seo title={article.title} description={article.summary} path={`/read/${slug}`} />
      <header className="wrap article__header">
        <Link className="back-link" to={`/read?format=${article.format}`}>{formats[article.format]?.plural}</Link>
        <h1>{article.title}</h1>
        <p className="article__summary">{article.summary}</p>
        <ul className="tag-list" aria-label="Topics">
          {article.topics.map((t) => (
            <li key={t}>
              <Link to={`/topics/${t}`}>{topicBySlug(t)?.name}</Link>
            </li>
          ))}
        </ul>
        <p className="meta">
          {formatDate(article.date)}. {article.minutes} min read.
        </p>
      </header>
      {image ? (
        <figure className="wrap article__figure">
          <img src={image} alt={article.imageCaption || ""} />
          {article.imageCaption && <figcaption>{article.imageCaption}</figcaption>}
        </figure>
      ) : (
        <div className="wrap article__figure">
          <Cover glyph={article.glyph} tone={article.tone} size="banner" />
        </div>
      )}
      <div className="wrap">
        <div className={`prose prose--${article.format}`} dangerouslySetInnerHTML={{ __html: article.html }} />
        <aside className="article__note">
          <p>
            Think we've missed a side, a source or a fact? <a href={`mailto:${site.email}?subject=${encodeURIComponent("Correction: " + article.title)}`}>Email us</a> or message us on{" "}
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>. We read everything and correct the page in public.
          </p>
        </aside>
      </div>
    </article>
  );
}

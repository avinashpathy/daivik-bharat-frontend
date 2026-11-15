import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import Cover from "../components/Cover";
import NotFound from "./NotFound";
import { findArticle } from "../lib/content";
import { images } from "../content/data/gallery";
import { formatDate } from "../components/ArticleList";
import { site } from "../content/data/site";

const back = {
  explainers: { to: "/explainers", label: "All explainers" },
  history: { to: "/history", label: "All heritage stories" },
};

export default function Article({ section }) {
  const { slug } = useParams();
  const article = findArticle(section, slug);
  if (!article) return <NotFound />;
  const image = images[article.image];

  return (
    <article className="article">
      <Seo title={article.title} description={article.summary} path={`${back[section].to}/${slug}`} />
      <header className="wrap article__header">
        <Link className="back-link" to={back[section].to}>{back[section].label}</Link>
        <p className="article-row__kind">{article.kind}</p>
        <h1>{article.title}</h1>
        <p className="article__summary">{article.summary}</p>
        <p className="meta">
          {formatDate(article.date)}, {article.minutes} min read
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
        <div className="prose" dangerouslySetInnerHTML={{ __html: article.html }} />
        <aside className="article__note">
          <p>
            Spotted a mistake or have a better source? <a href={`mailto:${site.email}?subject=${encodeURIComponent("Correction: " + article.title)}`}>Email us</a> or message us on{" "}
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>, and we'll update this page.
          </p>
        </aside>
      </div>
    </article>
  );
}

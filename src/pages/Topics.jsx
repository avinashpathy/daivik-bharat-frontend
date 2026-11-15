import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import ArticleList from "../components/ArticleList";
import NotFound from "./NotFound";
import { topics, topicBySlug, site } from "../content/data/site";
import { articlesWithTopic } from "../lib/content";

export function TopicIndex() {
  return (
    <div className="wrap page">
      <Seo title="Topics" path="/topics" />
      <header className="page-header">
        <h1>Topics</h1>
        <p className="page-header__lede">No subject is off limits. If something about India puzzles you, it belongs here. These are the areas we've started with.</p>
      </header>
      <ul className="topic-grid topic-grid--page">
        {topics.map((t) => {
          const count = articlesWithTopic(t.slug).length;
          return (
            <li key={t.slug}>
              <Link to={`/topics/${t.slug}`} className={count ? "" : "is-empty"}>
                <span className="topic-grid__name">{t.name}</span>
                <span className="topic-grid__blurb">{t.blurb}</span>
                <span className="topic-grid__count">{count ? `${count} ${count === 1 ? "article" : "articles"}` : "Nothing yet. Ask us a question."}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Topic() {
  const { slug } = useParams();
  const topic = topicBySlug(slug);
  if (!topic) return <NotFound />;
  const items = articlesWithTopic(slug);

  return (
    <div className="wrap page">
      <Seo title={topic.name} path={`/topics/${slug}`} description={topic.blurb} />
      <header className="page-header">
        <Link className="back-link" to="/topics">All topics</Link>
        <h1>{topic.name}</h1>
        <p className="page-header__lede">{topic.blurb}</p>
      </header>
      {items.length ? (
        <ArticleList items={items} />
      ) : (
        <div className="empty">
          <p>We haven't written about this yet. What would you like us to look into first?</p>
          <a className="button" href={`mailto:${site.email}?subject=${encodeURIComponent("Question about " + topic.name)}`}>Ask a question</a>
        </div>
      )}
    </div>
  );
}

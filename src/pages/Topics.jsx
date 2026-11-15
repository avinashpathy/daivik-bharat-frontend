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
        <p className="page-header__lede">Five pillars, and room for anything else about India that puzzles you. If a topic isn't here yet, ask us.</p>
      </header>
      <ul className="pillar-grid">
        {topics.map((t) => {
          const count = articlesWithTopic(t.slug).length;
          return (
            <li key={t.slug}>
              <Link to={`/topics/${t.slug}`} className={`pillar pillar--${t.tone}`}>
                <span className="pillar__name">{t.name}</span>
                <span className="pillar__blurb">{t.blurb}</span>
                <span className="pillar__count">{count ? `${count} ${count === 1 ? "story" : "stories"}` : "Coming soon"}</span>
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
      <header className={`page-header topic-header topic-header--${topic.tone}`}>
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

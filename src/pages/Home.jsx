import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Cover from "../components/Cover";
import { ArticleMeta } from "../components/ArticleList";
import { site, topics } from "../content/data/site";
import { articles, articlesWithTopic } from "../lib/content";

const anatomy = [
  { part: "The question", text: "What people are arguing about, in one plain question." },
  { part: "What the sources say", text: "The documents, data and texts, quoted and linked." },
  { part: "How people see it", text: "The main positions, each put the way its own supporters would put it." },
  { part: "What's still unclear", text: "Where the record runs out and opinion begins." },
];

export default function Home() {
  const featured = articles.find((a) => a.featured) || articles[0];
  const recent = articles.filter((a) => a !== featured).slice(0, 3);

  return (
    <>
      <Seo path="/" />
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__text">
            <h1 className="hero__title">{site.tagline}</h1>
            <p className="hero__lede">
              Daivik Bharat explains the things Indians argue about, from the Constitution and the economy to history and faith. We aren't
              experts and we don't tell you what to think. We gather the sources, lay out the different sides fairly, and leave the conclusion
              to you.
            </p>
            <div className="hero__actions">
              <Link className="button" to={`/read/${featured.slug}`}>Read the latest explainer</Link>
              <Link className="button button--quiet" to="/topics">Browse topics</Link>
            </div>
          </div>
          <aside className="anatomy" aria-labelledby="anatomy-heading">
            <h2 id="anatomy-heading" className="anatomy__title">How every explainer is built</h2>
            <ol className="anatomy__list">
              {anatomy.map((a) => (
                <li key={a.part}>
                  <span className="anatomy__part">{a.part}</span>
                  <span className="anatomy__text">{a.text}</span>
                </li>
              ))}
            </ol>
            <p className="anatomy__foot">Then a full list of sources, so you can check every claim yourself.</p>
          </aside>
        </div>
      </section>

      <section className="wrap home-latest" aria-labelledby="latest-heading">
        <h2 id="latest-heading" className="section-heading">Latest</h2>
        <div className="home-latest__grid">
          <Link to={`/read/${featured.slug}`} className="feature">
            <Cover glyph={featured.glyph} tone={featured.tone} size="lg" />
            <h3 className="feature__title">{featured.title}</h3>
            <p>{featured.summary}</p>
            <ArticleMeta article={featured} />
          </Link>
          <ul className="home-latest__list">
            {recent.map((a) => (
              <li key={a.slug}>
                <Link to={`/read/${a.slug}`}>
                  <h3>{a.title}</h3>
                  <ArticleMeta article={a} />
                </Link>
              </li>
            ))}
            <li>
              <Link to="/read" className="home-latest__all">See everything we've written</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="home-topics" aria-labelledby="topics-heading">
        <div className="wrap">
          <h2 id="topics-heading" className="section-heading">Topics</h2>
          <p className="section-lede">No topic is off limits. These are where we've started, and the list grows with your questions.</p>
          <ul className="topic-grid">
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
      </section>

      <section className="wrap principles" aria-labelledby="principles-heading">
        <h2 id="principles-heading" className="section-heading">Our ground rules</h2>
        <div className="principles__grid">
          <div>
            <h3>Sources before opinions</h3>
            <p>Every claim links to where it came from: the document, the data, the text.</p>
          </div>
          <div>
            <h3>Every side in its own words</h3>
            <p>We describe each position the way the people who hold it would, not the way their opponents do.</p>
          </div>
          <div>
            <h3>Our view is labelled</h3>
            <p>When we do say what we think, it's marked as ours and kept apart from the facts.</p>
          </div>
          <div>
            <h3>Corrections in public</h3>
            <p>When we get something wrong, we fix the page and say what changed.</p>
          </div>
        </div>
      </section>

      <section className="invite">
        <div className="wrap invite__inner">
          <div>
            <h2>What do you want explained?</h2>
            <p>Send us a topic, a headline you didn't follow, or a claim you'd like checked.</p>
          </div>
          <div className="invite__actions">
            <a className="button button--on-dark" href={`mailto:${site.email}?subject=Topic suggestion`}>Suggest a topic</a>
            <a className="button button--ghost" href={site.instagram} target="_blank" rel="noopener noreferrer">Message us on Instagram</a>
          </div>
        </div>
      </section>
    </>
  );
}

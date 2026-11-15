import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Cover from "../components/Cover";
import Jaali from "../components/Jaali";
import { ArticleMeta } from "../components/ArticleList";
import { site, topics, series, toneFor, topicBySlug } from "../content/data/site";
import { articles, articlesWithTopic } from "../lib/content";

const anatomy = [
  { part: "The question", text: "What people are curious or arguing about, in one plain question." },
  { part: "What the sources say", text: "Texts, records and data, quoted and linked." },
  { part: "How people see it", text: "Belief, scholarship and debate, each in its own words and clearly labelled." },
  { part: "What's still unclear", text: "Where the record runs out and interpretation begins." },
];

function countLabel(n) {
  return n ? `${n} ${n === 1 ? "story" : "stories"}` : "Coming soon";
}

export default function Home() {
  const featured = articles.find((a) => a.featured) || articles[0];
  const recent = articles.filter((a) => a !== featured).slice(0, 3);
  const pillars = topics.filter((t) => t.pillar);
  const more = topics.filter((t) => !t.pillar);

  return (
    <>
      <Seo path="/" />
      <section className="hero">
        <Jaali className="hero__jaali" />
        <div className="wrap hero__grid">
          <div className="hero__text">
            <p lang="hi" className="hero__deva">दैविक भारत</p>
            <h1 className="hero__title">{site.tagline}</h1>
            <p className="hero__lede">
              Stories and explainers on India's history, spiritual heritage, geography, living traditions and place in the world. Every piece
              is researched and sourced, and keeps what the record shows apart from what people believe, so you can make up your own mind.
            </p>
            <div className="hero__actions">
              <Link className="button button--gold" to={`/read/${featured.slug}`}>Read the latest story</Link>
              <a className="button button--ghost" href={site.instagram} target="_blank" rel="noopener noreferrer">Follow on Instagram</a>
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
            <p className="anatomy__foot">Then the full list of sources, so you can check every claim yourself.</p>
          </aside>
        </div>
      </section>

      <section className="wrap home-latest" aria-labelledby="latest-heading">
        <h2 id="latest-heading" className="section-heading">Latest</h2>
        <div className="home-latest__grid">
          <Link to={`/read/${featured.slug}`} className="feature">
            <Cover glyph={featured.glyph} tone={toneFor(featured)} size="lg" />
            <h3 className="feature__title">{featured.title}</h3>
            <p>{featured.summary}</p>
            <ArticleMeta article={featured} />
          </Link>
          <ul className="home-latest__list">
            {recent.map((a) => (
              <li key={a.slug}>
                <Link to={`/read/${a.slug}`}>
                  <span className={`pill pill--${toneFor(a)}`}>{topicBySlug(a.topics[0])?.name}</span>
                  <h3>{a.title}</h3>
                  <ArticleMeta article={a} />
                </Link>
              </li>
            ))}
            <li>
              <Link to="/read" className="home-latest__all">See everything we've published</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="pillars" aria-labelledby="pillars-heading">
        <div className="wrap">
          <h2 id="pillars-heading" className="section-heading">Five ways into Bharat</h2>
          <p className="section-lede">Our stories sit under five pillars. They're starting points, not limits.</p>
          <ul className="pillar-grid">
            {pillars.map((t) => (
              <li key={t.slug}>
                <Link to={`/topics/${t.slug}`} className={`pillar pillar--${t.tone}`}>
                  <span className="pillar__name">{t.name}</span>
                  <span className="pillar__blurb">{t.blurb}</span>
                  <span className="pillar__count">{countLabel(articlesWithTopic(t.slug).length)}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="pillars__more">
            Also: {more.map((t, i) => (
              <span key={t.slug}>
                <Link to={`/topics/${t.slug}`}>{t.name}</Link>
                {i < more.length - 1 ? ", " : ""}
              </span>
            ))}
            , and <Link to="/contact">anything you'd like us to look into</Link>.
          </p>
        </div>
      </section>

      <section className="wrap series" aria-labelledby="series-heading">
        <h2 id="series-heading" className="section-heading">Series we're working on</h2>
        <p className="section-lede">Multi-part series, coming to Instagram and this site.</p>
        <ul className="series-grid">
          {series.map((s) => (
            <li key={s.subtitle} className={`series-card series-card--${topicBySlug(s.topic)?.tone}`}>
              <span lang="hi" className="series-card__title">{s.title}</span>
              <span className="series-card__subtitle">{s.subtitle}</span>
              <span className="series-card__blurb">{s.blurb}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="principles-band">
        <div className="wrap principles" aria-labelledby="principles-heading">
          <h2 id="principles-heading" className="section-heading">Our ground rules</h2>
          <div className="principles__grid">
            <div>
              <h3>Researched and sourced</h3>
              <p>Every claim links to where it came from: the text, the record, the data.</p>
            </div>
            <div>
              <h3>Belief and record kept apart</h3>
              <p>We say clearly when something is tradition or faith, and when it is documented history.</p>
            </div>
            <div>
              <h3>Every side in its own words</h3>
              <p>Where people disagree, we describe each view the way its own holders would.</p>
            </div>
            <div>
              <h3>Corrections in public</h3>
              <p>When we get something wrong, we fix the page and say what changed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="invite">
        <Jaali className="invite__jaali" />
        <div className="wrap invite__inner">
          <div>
            <h2>What should we explore next?</h2>
            <p>Send us a topic, a story from your region, or a claim you'd like checked.</p>
          </div>
          <div className="invite__actions">
            <a className="button button--gold" href={`mailto:${site.email}?subject=Topic suggestion`}>Suggest a topic</a>
            <a className="button button--ghost" href={site.instagram} target="_blank" rel="noopener noreferrer">Message us on Instagram</a>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Toran from "../components/Toran";
import Cover from "../components/Cover";
import { site, sections } from "../content/data/site";
import { articles, stotras } from "../lib/content";
import { images } from "../content/data/gallery";

const sectionBase = { explainers: "/explainers", history: "/history" };

export default function Home() {
  const featured = articles.find((a) => a.featured) || articles[0];
  const recent = articles.filter((a) => a !== featured).slice(0, 3);

  return (
    <>
      <Seo path="/" />
      <section className="hero">
        <Toran />
        <div className="wrap hero__grid">
          <div className="hero__text">
            <h1 className="hero__title">
              <span lang="hi" className="hero__deva">दैविक भारत</span>
              <span className="hero__latin">Learning about Bharat, out loud.</span>
            </h1>
            <p className="hero__lede">
              We are two ordinary Indians, not scholars. We read about Bharat's scriptures, temples and history, and the questions that matter
              today, then share what we found, with the sources, so you can check it yourself.
            </p>
            <div className="hero__actions">
              <Link className="button button--light" to={`${sectionBase[featured.section]}/${featured.slug}`}>
                Read our latest explainer
              </Link>
              <a className="button button--ghost" href={site.instagram} target="_blank" rel="noopener noreferrer">
                Follow on Instagram
              </a>
            </div>
          </div>
          <figure className="hero__photo">
            <img src={images["puri-2"]} alt="The shikhara of Shri Jagannath Temple, Puri, under a cloudy sky" />
            <figcaption>Shri Jagannath Temple, Puri. Our photo.</figcaption>
          </figure>
        </div>
      </section>

      <section className="wrap home-latest" aria-labelledby="latest-heading">
        <h2 id="latest-heading" className="section-heading">Latest</h2>
        <div className="home-latest__grid">
          <Link to={`${sectionBase[featured.section]}/${featured.slug}`} className="feature">
            <Cover glyph={featured.glyph} tone={featured.tone} size="lg" />
            <p className="article-row__kind">{featured.kind}</p>
            <h3 className="feature__title">{featured.title}</h3>
            <p>{featured.summary}</p>
          </Link>
          <ul className="home-latest__list">
            {recent.map((a) => (
              <li key={a.slug}>
                <Link to={`${sectionBase[a.section]}/${a.slug}`}>
                  <p className="article-row__kind">{a.kind}</p>
                  <h3>{a.title}</h3>
                  <p className="meta">{a.minutes} min read</p>
                </Link>
              </li>
            ))}
            {stotras.slice(0, 1).map((s) => (
              <li key={s.slug}>
                <Link to={`/scriptures/${s.slug}`}>
                  <p className="article-row__kind">Stotra</p>
                  <h3>
                    <span lang="hi" className="deva-inline">{s.title}</span> {s.titleEn}
                  </h3>
                  <p className="meta">Read and recite</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-sections" aria-labelledby="sections-heading">
        <div className="wrap">
          <h2 id="sections-heading" className="section-heading">What you'll find here</h2>
          <ul className="section-index">
            {sections.map((s) => (
              <li key={s.path}>
                <Link to={s.path}>
                  <span lang="hi" className={`section-index__glyph text-${s.tone}`}>{s.glyph}</span>
                  <span className="section-index__body">
                    <span className="section-index__title">{s.title}</span>
                    <span className="section-index__blurb">{s.blurb}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap principles" aria-labelledby="principles-heading">
        <h2 id="principles-heading" className="section-heading">How we work</h2>
        <div className="principles__grid">
          <div>
            <h3>We show our sources</h3>
            <p>Every explainer ends with the texts, documents and books we read, linked wherever we can.</p>
          </div>
          <div>
            <h3>Facts and opinions stay apart</h3>
            <p>We mark what the sources say separately from what we think, so you can disagree with one and still use the other.</p>
          </div>
          <div>
            <h3>We fix mistakes in public</h3>
            <p>When we get something wrong, we correct the page and say what changed.</p>
          </div>
          <div>
            <h3>You choose what's next</h3>
            <p>Many topics start as a question from a follower. Send us one.</p>
          </div>
        </div>
      </section>

      <section className="invite">
        <div className="wrap invite__inner">
          <div>
            <h2>Something you've always wondered about Bharat?</h2>
            <p>Send us a topic or a claim you'd like checked. We read every message.</p>
          </div>
          <div className="invite__actions">
            <a className="button button--light" href={`mailto:${site.email}?subject=Topic suggestion`}>Suggest a topic</a>
            <a className="button button--ghost" href={site.instagram} target="_blank" rel="noopener noreferrer">
              Message us on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

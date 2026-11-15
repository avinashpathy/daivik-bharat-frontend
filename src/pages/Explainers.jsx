import Seo from "../components/Seo";
import ArticleList from "../components/ArticleList";
import { articlesIn } from "../lib/content";
import { site } from "../content/data/site";

export default function Explainers() {
  const all = articlesIn("explainers");
  const explainers = all.filter((a) => a.kind !== "Myth-check");
  const mythChecks = all.filter((a) => a.kind === "Myth-check");

  return (
    <div className="wrap page">
      <Seo title="Explainers" path="/explainers" description="We pick a topic, read the sources and show you what we found, with every source linked." />
      <header className="page-header">
        <h1>Explainers</h1>
        <p className="page-header__lede">
          We pick something people talk about but few of us really understand, read the primary sources, and write down what we found and where
          we've landed for now.
        </p>
      </header>

      <ArticleList items={explainers} base="/explainers" />

      <section className="subsection" aria-labelledby="myth-heading">
        <h2 id="myth-heading">Myth-checks</h2>
        <p className="subsection__lede">A viral claim, checked against the sources, with our working shown.</p>
        {mythChecks.length ? (
          <ArticleList items={mythChecks} base="/explainers" />
        ) : (
          <div className="empty">
            <p>Our first myth-check is on its way. Seen a forward you'd like us to check?</p>
            <a className="button" href={`mailto:${site.email}?subject=Claim to check`}>Send us the claim</a>
          </div>
        )}
      </section>
    </div>
  );
}

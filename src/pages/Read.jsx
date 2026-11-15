import { useSearchParams } from "react-router-dom";
import Seo from "../components/Seo";
import ArticleList from "../components/ArticleList";
import { articles } from "../lib/content";
import { formats, site } from "../content/data/site";

export default function Read() {
  const [params, setParams] = useSearchParams();
  const active = formats[params.get("format")] ? params.get("format") : "all";
  const items = active === "all" ? articles : articles.filter((a) => a.format === active);
  const filters = [["all", "Everything"], ...Object.entries(formats).map(([k, f]) => [k, f.plural])];

  return (
    <div className="wrap page">
      <Seo title="Read" path="/read" description="Explainers, myth-checks and stories from Daivik Bharat." />
      <header className="page-header">
        <h1>Read</h1>
        <p className="page-header__lede">Everything we've published, newest first.</p>
      </header>
      <div className="filters" role="group" aria-label="Filter by format">
        {filters.map(([key, label]) => (
          <button
            key={key}
            aria-pressed={active === key}
            onClick={() => setParams(key === "all" ? {} : { format: key })}
          >
            {label}
          </button>
        ))}
      </div>
      {active !== "all" && <p className="filters__note">{formats[active].blurb}</p>}
      {items.length ? (
        <ArticleList items={items} />
      ) : (
        <div className="empty">
          <p>Nothing here yet. Our first {formats[active].name.toLowerCase()} is on its way. Seen a claim you'd like checked?</p>
          <a className="button" href={`mailto:${site.email}?subject=Claim to check`}>Send it to us</a>
        </div>
      )}
    </div>
  );
}

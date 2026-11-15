import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { stotras } from "../lib/content";

export default function Stotras() {
  return (
    <div className="wrap page">
      <Seo title="Texts" path="/texts" description="Primary texts in full: hymns, verses and documents, in clear type." />
      <header className="page-header">
        <h1>Texts</h1>
        <p className="page-header__lede">Primary texts in full, so you can read the source itself and not just what someone says about it. We're starting with devotional hymns from the Hindu tradition and will add texts from other traditions, and documents like the Constitution's Preamble.</p>
      </header>
      <ul className="stotra-index">
        {stotras.map((s) => (
          <li key={s.slug}>
            <Link to={`/texts/${s.slug}`} className={`stotra-card tone-${s.tone}`}>
              <span lang="hi" className="stotra-card__title">{s.title}</span>
              <span className="stotra-card__en">{s.titleEn}</span>
              <span className="stotra-card__summary">{s.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

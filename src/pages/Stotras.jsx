import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { stotras } from "../lib/content";

export default function Stotras() {
  return (
    <div className="wrap page">
      <Seo title="Stotras" path="/scriptures" description="Stotras and chalisas to read and recite, set in clear Devanagari." />
      <header className="page-header">
        <h1>Stotras</h1>
        <p className="page-header__lede">Hymns to read and recite, set in large, clear Devanagari. Each page lets you make the text bigger.</p>
      </header>
      <ul className="stotra-index">
        {stotras.map((s) => (
          <li key={s.slug}>
            <Link to={`/scriptures/${s.slug}`} className={`stotra-card tone-${s.tone}`}>
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

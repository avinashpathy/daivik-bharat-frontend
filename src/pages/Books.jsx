import Seo from "../components/Seo";
import Cover from "../components/Cover";
import { books } from "../content/data/books";

export default function Books() {
  return (
    <div className="wrap page">
      <Seo title="Reading list" path="/books" description="Books we read while researching, with notes on each edition." />
      <header className="page-header">
        <h1>Reading list</h1>
        <p className="page-header__lede">
          Books we have read or used as sources. So far these are classical Indian texts in Gita Press editions, which print the original
          alongside a translation at a low price. We'll add history, politics and economics titles from a range of viewpoints as we read them.
        </p>
      </header>
      <ul className="book-list">
        {books.map((b) => (
          <li key={b.title}>
            <a href={b.link} target="_blank" rel="noopener noreferrer" className="book">
              <Cover glyph={b.glyph} tone={b.tone} size="book" />
              <span className="book__title">{b.title}</span>
              <span className="book__detail">{b.detail}</span>
              <span className="book__cta">View on Amazon</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

import Seo from "../components/Seo";
import Cover from "../components/Cover";
import { books } from "../content/data/books";

export default function Books() {
  return (
    <div className="wrap page">
      <Seo title="Books" path="/books" description="The texts we keep going back to, in editions we trust." />
      <header className="page-header">
        <h1>Books</h1>
        <p className="page-header__lede">
          The texts we keep going back to. We like the Gita Press editions because they print the original alongside a translation, at a price
          almost anyone can afford.
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

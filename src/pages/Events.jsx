import Seo from "../components/Seo";
import { events } from "../content/data/gallery";

export default function Events() {
  return (
    <div className="wrap page">
      <Seo title="Events in context" path="/event-in-context" description="Background reading on events that matter to Bharat." />
      <header className="page-header">
        <h1>Events in context</h1>
        <p className="page-header__lede">Background reading on events that matter to Bharat. These links go to other websites.</p>
      </header>
      <ul className="link-list">
        {events.map((e) => (
          <li key={e.title}>
            <a href={e.link} target="_blank" rel="noopener noreferrer">
              <span className="link-list__title">{e.title}</span>
              <span className="link-list__detail">{e.detail}</span>
              <span className="meta">Source: {e.source}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

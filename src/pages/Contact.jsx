import Seo from "../components/Seo";
import { site } from "../content/data/site";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Instagram", value: site.instagramHandle, href: site.instagram },
  { label: "X (Twitter)", value: "@daivikbharat", href: site.twitter },
];

export default function Contact() {
  return (
    <div className="wrap page">
      <Seo title="Contact" path="/contact" description="Suggest a topic, share a story, or correct us." />
      <header className="page-header">
        <h1>Contact us</h1>
        <p className="page-header__lede">Suggest a topic, send a claim you'd like checked, tell us about a side of a debate we've missed, or point out where we got something wrong.</p>
      </header>
      <ul className="contact-list">
        {channels.map((c) => (
          <li key={c.label}>
            <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              <span className="contact-list__label">{c.label}</span>
              <span className="contact-list__value">{c.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

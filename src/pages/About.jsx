import Seo from "../components/Seo";
import { site } from "../content/data/site";

export default function About() {
  return (
    <div className="wrap page">
      <Seo title="About us" path="/about" description="Who runs Daivik Bharat and how we work." />
      <header className="page-header">
        <h1>About us</h1>
        <p className="page-header__lede">
          Most of us form opinions about India from headlines, WhatsApp forwards and arguments with family. We started Daivik Bharat to slow
          that down: look at the sources first, hear each side out, and only then decide what we think.
        </p>
      </header>
      <div className="prose">
        <h2>Who we are</h2>
        <p>
          We're Srishti Tyagi and Avinash Pathy, engineering graduates who got curious about India's history, politics and traditions and
          realised how little of what we "knew" we had ever checked. We aren't historians, economists or lawyers. We're ordinary Indians
          learning as we go, and this site is our notebook, shared.
        </p>
        <p>
          The name means "divine Bharat". We chose it when we started, out of affection for the country. It isn't a statement about which
          India is the real one.
        </p>
        <h2>Who it's for</h2>
        <p>
          Anyone who wants to understand an issue before picking a side, and anyone who has already picked one but wants to understand the
          people on the other side. If you mostly agree with us after reading, good. If you disagree but feel we were fair, even better.
        </p>
        <h2>How we work</h2>
        <ul>
          <li><strong>Sources first.</strong> Every claim links to the document, data or text it rests on.</li>
          <li><strong>Every side in its own words.</strong> We describe each position the way its supporters would.</li>
          <li><strong>Our view is labelled.</strong> When we give an opinion, we say so, and keep it apart from the facts.</li>
          <li><strong>Public corrections.</strong> When we get something wrong, we fix it and note what changed.</li>
          <li><strong>No topic is off limits.</strong> If it matters to how India lives and argues, it's fair game.</li>
        </ul>
        <p>
          Follow us on <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a> and{" "}
          <a href={site.twitter} target="_blank" rel="noopener noreferrer">X (Twitter)</a>, or write to us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </div>
  );
}

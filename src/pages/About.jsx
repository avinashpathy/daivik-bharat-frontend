import Seo from "../components/Seo";
import { site } from "../content/data/site";

export default function About() {
  return (
    <div className="wrap page">
      <Seo title="About us" path="/about" description="Who runs Daivik Bharat and why." />
      <header className="page-header">
        <h1>About us</h1>
        <p className="page-header__lede">
          Welcome to Daivik Bharat, <span lang="hi">दैविक भारत</span>, the land of the Gods.
        </p>
      </header>
      <div className="prose">
        <p>
          From the highest peaks of the Himalayas to the deepest trenches of the Indian Ocean, from the Rann of Kutch to the tea gardens of
          Darjeeling, from the Phulkari of Punjab to the Kanjeevaram of Tamil Nadu, from chole bhature to rava dosa, what is astonishing about
          Bharat is not its diversity, but the unity and strength it continues to show despite such vast differences.
        </p>
        <p>
          Daivik Bharat started as a text conversation one evening between two college students who wanted to bring together people who share
          their admiration for their motherland. Our aim is to bring to light what is hidden and to recall what has been forgotten.
        </p>
        <h2>Who we are</h2>
        <p>
          Srishti Tyagi and Avinash Pathy are engineering graduates with a keen interest in Indian history, politics and Sanatan Dharma. We are
          not scholars. We are ordinary Indians learning as we go, and this site is where we share what we learn, with our sources, so you can
          read along and check our work.
        </p>
        <h2>How we work</h2>
        <ul>
          <li>Every explainer lists the sources we used.</li>
          <li>We keep what the sources say separate from what we think.</li>
          <li>When we get something wrong, we correct it on the page.</li>
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

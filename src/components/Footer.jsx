import { Link } from "react-router-dom";
import { site } from "../content/data/site";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <div className="site-footer__brand">
          <Wordmark />
          <p>{site.tagline}</p>
        </div>
        <nav className="site-footer__links" aria-label="Follow and contact">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={site.twitter} target="_blank" rel="noopener noreferrer">X (Twitter)</a>
          <a href={`mailto:${site.email}`}>Email</a>
          <Link to="/contact">Contact</Link>
          <Link to="/termsandconditions">Terms</Link>
        </nav>
        <p className="site-footer__credit">
          © {new Date().getFullYear()} Daivik Bharat. Made by{" "}
          <a href="https://linkedin.com/in/srishti-tyagi-5014a3175" target="_blank" rel="noopener noreferrer">Srishti Tyagi</a> and{" "}
          <a href="https://avinashpathy.github.io/" target="_blank" rel="noopener noreferrer">Avinash Pathy</a>.
        </p>
      </div>
    </footer>
  );
}

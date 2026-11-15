import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <div className="wrap page not-found">
      <Seo title="Page not found" />
      <p lang="hi" className="not-found__deva">४०४</p>
      <h1>We couldn't find that page</h1>
      <p>It may have moved when we rebuilt the site. Try the home page or one of the sections in the menu.</p>
      <Link className="button" to="/">Go to the home page</Link>
    </div>
  );
}

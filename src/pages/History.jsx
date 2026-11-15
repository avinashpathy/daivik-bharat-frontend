import Seo from "../components/Seo";
import ArticleList from "../components/ArticleList";
import { articlesIn } from "../lib/content";

export default function History() {
  return (
    <div className="wrap page">
      <Seo title="Heritage" path="/history" description="Stories behind Bharat's temples, pilgrimages and traditions." />
      <header className="page-header">
        <h1>Heritage</h1>
        <p className="page-header__lede">The stories behind temples, pilgrimages and traditions, as the texts and the temples tell them.</p>
      </header>
      <ArticleList items={articlesIn("history")} base="/history" />
    </div>
  );
}

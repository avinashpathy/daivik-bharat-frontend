import { BrowserRouter, HashRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Read from "./pages/Read";
import Article from "./pages/Article";
import { TopicIndex, Topic } from "./pages/Topics";
import Stotras from "./pages/Stotras";
import Stotra from "./pages/Stotra";
import Books from "./pages/Books";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Hash routing is only used for preview builds hosted where server rewrites aren't available.
const Router = import.meta.env.VITE_HASH_ROUTER === "true" ? HashRouter : BrowserRouter;

// Old addresses keep working.
function Redirect({ to }) {
  const { slug } = useParams();
  return <Navigate replace to={slug ? `${to}/${slug}` : to} />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="read" element={<Read />} />
          <Route path="read/:slug" element={<Article />} />
          <Route path="topics" element={<TopicIndex />} />
          <Route path="topics/:slug" element={<Topic />} />
          <Route path="texts" element={<Stotras />} />
          <Route path="texts/:slug" element={<Stotra />} />
          <Route path="books" element={<Books />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="termsandconditions" element={<Terms />} />

          <Route path="explainers" element={<Navigate replace to="/read?format=explainer" />} />
          <Route path="explainers/:slug" element={<Redirect to="/read" />} />
          <Route path="history" element={<Navigate replace to="/topics/history" />} />
          <Route path="history/:slug" element={<Redirect to="/read" />} />
          <Route path="scriptures" element={<Navigate replace to="/texts" />} />
          <Route path="scriptures/:slug" element={<Redirect to="/texts" />} />
          <Route path="event-in-context" element={<Navigate replace to="/read" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

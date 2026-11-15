import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Explainers from "./pages/Explainers";
import History from "./pages/History";
import Article from "./pages/Article";
import Stotras from "./pages/Stotras";
import Stotra from "./pages/Stotra";
import Books from "./pages/Books";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Hash routing is only used for preview builds hosted where server rewrites aren't available.
const Router = import.meta.env.VITE_HASH_ROUTER === "true" ? HashRouter : BrowserRouter;

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explainers" element={<Explainers />} />
          <Route path="explainers/:slug" element={<Article section="explainers" />} />
          <Route path="scriptures" element={<Stotras />} />
          <Route path="scriptures/:slug" element={<Stotra />} />
          <Route path="history" element={<History />} />
          <Route path="history/:slug" element={<Article section="history" />} />
          <Route path="books" element={<Books />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="event-in-context" element={<Events />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="termsandconditions" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

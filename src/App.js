import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import About from "./components/About.js";
import Contact from "./components/Contact";
import Scriptures from "./components/Scriptures.js";
import History from "./components/History.js";
import Politics from "./components/Politics.js";
import Books from "./components/Books.js";
import TermsAndConditions from "./components/TermsAndConditions.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <Body />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/scriptures" element={<Scriptures />} />
        <Route path="/history" element={<History />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/books" element={<Books />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

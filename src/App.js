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
import MahaLakshmiAshtakam from "./components/scriptures/MahaLakshmiAshtakam.js";
import "./App.css";
import HanumanChalisa from "./components/scriptures/HanumanChalisa.js";
import HanumanAshtakam from "./components/scriptures/HanumanAshtakam.js";
import ShaktiPeetha from "./components/history/ShaktiPeethas.js";
import LordJagannathStory from "./components/history/LordJagannathStory.js";

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
        <Route
          path="scriptures/maha-laxmi-ashtakam"
          element={<MahaLakshmiAshtakam />}
        />
        <Route path="scriptures/hanuman-chalisa" element={<HanumanChalisa />} />
        <Route
          path="scriptures/hanuman-ashtakam"
          element={<HanumanAshtakam />}
        />
        <Route path="history/shakti-peethas" element={<ShaktiPeetha />} />
        <Route
          path="history/lord-jagannath-story"
          element={<LordJagannathStory />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

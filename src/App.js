import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Carousel from "./components/Carousel";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Carousel />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

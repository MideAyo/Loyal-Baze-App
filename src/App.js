import React from "react";
import Hero from "./Hero";
import Access from "./Access";
import "./index.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className=" w-screen h-1/1">
      <Navbar />
      <Hero />
      <Access />
      <Footer />
    </div>
  );
};

export default App;

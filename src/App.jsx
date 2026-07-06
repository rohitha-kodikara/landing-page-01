import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureItems from "./components/FeatureItems";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <div className="flex flex-col px-12 md:px-10">
        <Navbar />
        <Hero />
        <FeatureItems />
      </div>
      <Footer />
    </div>
  );
};

export default App;

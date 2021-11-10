import React from "react";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Sectionone from "./sectionone/Sectionone";
import Sectiontwo from "./sectiontwo/Sectiontwo";

const Home = () => {
  return (
    <div>
      <Sectionone />
      <Sectiontwo />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

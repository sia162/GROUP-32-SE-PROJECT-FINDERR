import React from "react";
import Contact from "./contact/Contact";
import Navbar from "./navbar/Navbar";
import Sectionone from "./sectionone/Sectionone";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Sectionone />
      <Contact />
    </div>
  );
};

export default Home;

import React from "react";
import Contact from "./contact/Contact";
import Sectionone from "./sectionone/Sectionone";
import Sectiontwo from "./sectiontwo/Sectiontwo";

const Home = () => {
  return (
    <div className="home">
      <Sectionone />
      <Sectiontwo />
      <Contact />
    </div>
  );
};

export default Home;

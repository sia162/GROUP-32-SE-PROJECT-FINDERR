import React from "react";
import Singlepost from "../home-posts/Singlepost";
import "./sectiontwo.css";

const Sectiontwo = () => {
  return (
    <div className="blank">
      <div className="bg-text section2">
        <h1 className="fst-italic">
          <u> Posts </u>
        </h1>
        <p> A TECH THOUGHTS CORNER</p>
      </div>

      <div className="posteg">
        <Singlepost />
        <Singlepost />
        <Singlepost />
      </div>
    </div>
  );
};

export default Sectiontwo;

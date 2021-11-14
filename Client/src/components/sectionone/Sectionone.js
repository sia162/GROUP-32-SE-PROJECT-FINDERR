import React from "react";
import "./sectionone.css";
import Arrow from "../arrow/Arrow";

const Sectionone = () => {
  return (
    <>
      <div className="image1"></div>
      <div className="bg-text">
        <h1 className="fst-italic">Finderr</h1>
        <p>Project Team Finding Website</p>
        <a href="#sectiontwo">
          <div style={{ position: "absolute", top: "70vh", left: "50%" }}>
            <Arrow />{" "}
          </div>
        </a>
      </div>
    </>
  );
};

export default Sectionone;

import React from "react";
import "./sectionone.css";
import Arrow from "../arrow/Arrow";

const Sectionone = () => {
  return (
    <>
      <div className="image1"></div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide bg-text"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">
            <h1 className="fst-italic">Finderr</h1>
            <p>Project Team Finding Website</p>
          </div>
          <div class="carousel-item " data-bs-interval="5000">
            <h1 className="fst-italic">spotify</h1>
            <p>For music and music and music</p>
          </div>
          <div class="carousel-item " data-bs-interval="5000">
            <h1 className="fst-italic">music</h1>
            <p>for you and your everything</p>
          </div>
        </div>
      </div>
      <a href="#sectiontwo">
        <div style={{ position: "absolute", top: "94vh", left: "50%" }}>
          <Arrow />{" "}
        </div>
      </a>
    </>
  );
};

export default Sectionone;

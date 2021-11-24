import React from "react";
import "./sectionone.css";
import Arrow from "../arrow/Arrow";

const Sectionone = () => {
  return (
    <>
      <div className="image1"></div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide bg-text"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
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
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <h1 className="fst-italic">Finderr</h1>
            <p>Project Team Finding Website</p>
            <p>
              Deserunt qui occaecat qui commodo. Officia laborum non id ex
              aliqua est veniam culpa deserunt. Laboris voluptate cillum ex
              veniam fugiat incididunt magna aliquip dolor aliqua dolor
              consectetur sint ea. Magna minim cillum ex irure cupidatat.
              Nostrud cillum ea eiusmod veniam deserunt id ea veniam. Sit culpa
              non Lorem deserunt qui in cupidatat. Elit occaecat sit dolore duis
              aute in sint. Excepteur dolor laboris laborum elit esse
              reprehenderit voluptate Lorem cupidatat dolor cupidatat. Amet
              officia laborum cupidatat exercitation fugiat veniam sint laborum
              aliquip do irure in. Aute commodo proident nostrud laborum fugiat
              velit ullamco ipsum ullamco dolore do quis non esse. Occaecat
            </p>
          </div>
          <div className="carousel-item " data-bs-interval="5000">
            <h1 className="fst-italic">Connect</h1>
            <p>Connect with people, connect with skills</p>
            <p>
              Irure amet minim magna commodo. Irure ex aute occaecat consequat
              adipisicing ex sit adipisicing eu et velit. Aute ad exercitation
              adipisicing sit. Ut nisi adipisicing amet pariatur. Ex velit
              commodo ullamco ut mollit nisi sunt ea occaecat velit. Irure
              fugiat dolor ipsum duis nisi amet adipisicing reprehenderit in
              aliqua. Exercitation eiusmod ea dolore magna incididunt eiusmod
              incididunt voluptate magna dolor cillum proident mollit officia.
              Ut ut in elit sunt duis consequat. Eiusmod excepteur irure dolor
              esse consectetur cillum laborum adipisicing id. Ex fugiat officia
              incididunt excepteur officia laboris dolore adipisicing aute quis
              dolore do exercitation nulla.
            </p>
          </div>
          <div className="carousel-item " data-bs-interval="5000">
            <h1 className="fst-italic">Share</h1>
            <p>Vision to technical world</p>
            <p>
              Nostrud dolore commodo consequat aliqua ex exercitation quis
              tempor. Deserunt adipisicing adipisicing esse consequat proident
              ad ea. Id nisi ad occaecat veniam proident sunt nulla do ad. Esse
              sunt commodo laboris enim mollit velit ipsum irure consequat irure
              laboris non pariatur do. Cupidatat proident deserunt enim
              voluptate duis cupidatat consequat elit adipisicing reprehenderit.
              Culpa nisi labore elit id. Exercitation deserunt cupidatat
              reprehenderit irure. Amet eiusmod deserunt in officia. Dolor
              consequat eiusmod aliquip cupidatat et non anim. Exercitation
              nostrud Lorem exercitation quis amet Lorem sit ipsum velit Lorem
              sint aliquip nisi Lorem. Officia ad aute ullamco fugiat et in.
              Ipsum aliquip amet in consectetur elit.
            </p>
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

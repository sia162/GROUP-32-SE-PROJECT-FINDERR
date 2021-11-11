import React from "react";
import "./sectiontwo.css";
import { Link } from "react-router-dom";

const Sectiontwo = () => {
  return (
    <div className="blank">
      <div class="bg-text section2">
        <h1 class="fst-italic">
          <u> Posts </u>
        </h1>
        <p> A TECH THOUGHTS CORNER</p>
      </div>
      <div className="posteg">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/post/:id" className="btn btn-dark">
              Go somewhere
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/post/:id" className="btn btn-dark">
              Go somewhere
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/post/:id" className="btn btn-dark">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectiontwo;

import React from "react";
import { Link } from "react-router-dom";
import "../sectiontwo/sectiontwo.css";
import "./singlepost.css";

const Singlepost = () => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>

        <div className="card-post-details">
          <div className="card-author-name">
            <Link className="link" to="/user/:id">
              {" "}
              by John Morph{" "}
            </Link>
          </div>

          <div className="card-post-time-date">
            <div className="card-post-date">23 Nov 2021</div>
            <div className="card-post-time">11:05:55</div>
          </div>

          <div className="card-post-tech">
            <ul>
              <li>Nodejs</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <Link
        to="/post/:id"
        className="btn btn-dark"
        style={{ width: "285px", margin: "auto", marginBottom: "10px" }}
      >
        Go somewhere
      </Link>
    </div>
  );
};

export default Singlepost;

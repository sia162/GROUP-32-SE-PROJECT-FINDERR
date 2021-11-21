import React from "react";
import { Link } from "react-router-dom";
import "../sectiontwo/sectiontwo.css";
import "./singlepost.css";

const Singlepost = ({ post }) => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>

        <div className="card-post-details">
          <div className="card-author-name">
            <Link className="link" to="/user/:id">
              {" "}
              by {post.postedBy ? post.postedBy.firstName : "Unknown"}{" "}
              {post.postedBy ? post.postedBy.lastName : "User"}
            </Link>
          </div>

          <div className="card-post-time-date">
            <div className="card-post-date">
              {" "}
              {post.postedBy
                ? new Date(post.postedBy.createdAt).toDateString().slice(4)
                : "Unknown Date"}
            </div>
            <div className="card-post-time">
              {" "}
              {post.postedBy
                ? new Date(post.postedBy.createdAt).toLocaleTimeString()
                : "Unknown Time"}
            </div>
          </div>

          <div className="card-post-tech">
            <ul>
              <li>{post.tech_skills}</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="card-text">{post.body}</p>
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

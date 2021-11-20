import React from "react";
import Singlepost from "../home-posts/Singlepost";
import profile from "./profile.png";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile-div">
      <div className="profile-sidebar">
        <img src={profile} className="profile-img" alt="profile" />
        <div>
          <i className="far fa-edit " style={{ margin: "0 1.5rem 2rem 0" }}>
            {" "}
            Edit
          </i>
          <i className="far fa-trash-alt" style={{ margin: "0 0 2rem 1.5rem" }}>
            {" "}
            Delete
          </i>
        </div>
        <div className="tech-skills">
          <p>Technical Skills</p>
          <ul>
            <li>React</li>
            <li>Nodejs</li>
            <li>Python</li>
            <li>Mongodb</li>
          </ul>
        </div>
      </div>

      <div className="profile-rightside">
        <div className="userdetails">
          <div className="user-name">John Morph</div>
          <button className="btn btn-dark request-btn ">Request</button>
        </div>

        <div className="add-post-section">
          <form className="post-details-form">
            <input
              type="text"
              name="post-title"
              placeholder="Enter post title."
            />

            <textarea
              name="post-desc"
              id="post-desc"
              cols="30"
              rows="10"
              placeholder="Enter what's in your mind."
            ></textarea>
          </form>

          <form className="cat-form">
            <input type="checkbox" id="cat1" name="cat-1" value="React" />
            <label htmlFor="cat1">React</label>
            <input type="checkbox" id="cat2" name="cat-2" value="Nodejs" />
            <label htmlFor="cat2">Nodejs</label>
          </form>

          <button className="add-post-btn btn btn-dark">Post</button>
        </div>

        <div className="all-posts-of-user">
          <h3>Timeline</h3>
          <div className="posts-box">
            <Singlepost />
            <Singlepost />
            <Singlepost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

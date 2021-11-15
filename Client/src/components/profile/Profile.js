import React from "react";
import Singlepost from "../home-posts/Singlepost";
import profile from "./profile.png";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile-div">
      <div className="profile-sidebar">
        <img src={profile} className="profile-img" alt="profile" />
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
          <button className="request-btn">Request</button>
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

import React, { useContext, useState } from "react";
import profile from "./profile.png";
import "./profile.css";
import Timeline from "../profile timeline posts/Timeline";
import { Context } from "../../login context/Context";

const Profile = () => {
  const { user, token } = useContext(Context);
  const [postdetails, setPostdetails] = useState({
    title: "",
    body: "",
    tech_skills: "",
  });

  const [error, setError] = useState(false);

  const onpostdetailschange = (e) => {
    setError(false);
    setPostdetails({ ...postdetails, [e.target.name]: e.target.value });
  };

  const handleaddpost = async (e) => {
    e.preventDefault();
    setError(false);
    const newpost = {
      title: postdetails.title,
      body: postdetails.body,
      tech_skills: postdetails.tech_skills,
    };

    try {
      const response = await fetch("http://localhost:2000/api/createpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify(newpost),
      });

      const jsondata = await response.json();

      if (jsondata.error) {
        setError(true);
      } else {
        // console.log(jsondata);
        setError(false);

        window.location.replace("/" + jsondata.post._id);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

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
          <div className="user-name">{user.fullName}</div>
          <button className="btn btn-dark request-btn ">Request</button>
        </div>

        {/* add post section */}
        <div className="add-post-section">
          <form className="post-details-form" onSubmit={handleaddpost}>
            <h4 style={{ paddingLeft: "5px" }}>Add Posts To Your Timeline.</h4>
            <input
              type="text"
              name="title"
              placeholder="Enter post title."
              input={postdetails.title}
              onChange={onpostdetailschange}
            />

            <input
              type="text"
              name="tech_skills"
              placeholder="Enter tech-stack for post."
              input={postdetails.tech_skills}
              onChange={onpostdetailschange}
            />

            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              placeholder="Enter what's in your mind."
              input={postdetails.body}
              onChange={onpostdetailschange}
            ></textarea>
            <button className="add-post-btn btn btn-dark" type="submit">
              Post
            </button>

            {error && (
              <p
                style={{ color: "#d64a4a", paddingTop: "12px", margin: "0px" }}
              >
                Fill all details!
              </p>
            )}
          </form>
        </div>

        {/* users all post */}
        <Timeline />
      </div>
    </div>
  );
};

export default Profile;

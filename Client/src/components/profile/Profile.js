import React, { useContext, useEffect, useState } from "react";
import "./profile.css";
import Timeline from "../profile timeline posts/Timeline";
import { Context } from "../../login context/Context";
import { useNavigate, useLocation } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const { user, token, dispatch } = useContext(Context);
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

  //user by id
  const [userdetails, setUserdetails] = useState({});
  const [useridposts, setUseridposts] = useState([]);
  const location = useLocation();
  const userid = location.pathname.split("/")[2];
  useEffect(() => {
    const getuserbyid = async () => {
      try {
        const response = await fetch(
          `http://localhost:2000/api/user/${userid}`,
          {
            method: "GET",
          }
        );
        const jsonuserdata = await response.json();
        // console.log(jsonuserdata);
        setUserdetails(jsonuserdata.user);
        setUseridposts(jsonuserdata.userposts);
      } catch (error) {
        console.log(error);
      }
    };

    getuserbyid();
  }, [userid]);

  //handle adding post
  const handleaddpost = async (e) => {
    e.preventDefault();
    setError(false);

    const newpost = {
      title: capitalizeFirstLetter(postdetails.title),
      body: postdetails.body,
      tech_skills: capitalizeFirstLetter(postdetails.tech_skills),
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

  //delete user
  const handledeleteuser = async () => {
    let deleteacc = window.confirm(
      "Are you sure you want to delete your account?"
    );
    console.log(deleteacc);

    if (deleteacc) {
      try {
        const response = await fetch(
          `http://localhost:2000/api/deleteUser/${user._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            },
          }
        );

        const jsondata = await response.json();
        console.log(jsondata);
        dispatch({ type: "LOGOUT" });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  // handle connect toggle
  const [showdetails, setShowdetails] = useState(false);
  const handleConnectDetails = () => {
    if (user) {
      if (showdetails === false) {
        setShowdetails(true);
      } else {
        setShowdetails(false);
      }
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="profile-div">
      <div className="profile-sidebar">
        <div className="avatar">
          <img
            // src={profile}
            src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHx1c2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="profile"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {user?._id === userdetails._id && (
          <div>
            <i
              className="far fa-edit "
              style={{ margin: "1.75rem 1.5rem 2rem 0" }}
            >
              {" "}
              Edit
            </i>
            <i
              className="far fa-trash-alt"
              style={{ margin: "0 0 2rem 1.5rem" }}
              onClick={handledeleteuser}
            >
              {" "}
              Delete
            </i>
          </div>
        )}

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
          <div className="user-name">
            {userdetails.firstName} {userdetails.lastName}
            {showdetails && (
              <div className="private-user-info">
                <p className="hidden-user-details">{userdetails.email}</p>
                <p className="hidden-user-details">
                  {userdetails.contactNumber
                    ? userdetails.contactNumber
                    : "No Contact Number"}
                </p>
              </div>
            )}
          </div>
          <button
            className="btn btn-dark request-btn "
            onClick={handleConnectDetails}
          >
            Connect
          </button>
        </div>

        {/* add post section */}
        {user?._id === userdetails._id && (
          <div className="add-post-section">
            <form className="post-details-form" onSubmit={handleaddpost}>
              <h4 style={{ paddingLeft: "5px" }}>
                Add Posts To Your Timeline.
              </h4>
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
                  style={{
                    color: "#d64a4a",
                    paddingTop: "12px",
                    margin: "0px",
                  }}
                >
                  Fill all details!
                </p>
              )}
            </form>
          </div>
        )}

        {/* users all post */}
        <Timeline posts={useridposts} />
      </div>
    </div>
  );
};

export default Profile;

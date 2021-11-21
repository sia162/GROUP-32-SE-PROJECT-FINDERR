import React, { useContext, useEffect, useState } from "react";
import "./singlepostpage.css";
import { Link } from "react-router-dom";
import { Navigate, useLocation, useNavigate } from "react-router";
import { Context } from "../../login context/Context";

const SinglePost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, token } = useContext(Context);
  const pathtopost = location.pathname.split("/")[1];
  const [singlePostData, setSinglePostData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(`http://localhost:2000/api/${pathtopost}`);
        const jsondata = await response.json();
        // console.log(jsondata[0]);
        setSinglePostData(jsondata[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getPost();
  }, [pathtopost]);

  // http://localhost:2000/api/updatePost/619a63c17ada830218b357e8

  //handle delete
  const handleDeletePost = async () => {
    try {
      const response = await fetch(
        `http://localhost:2000/api/deletePost/${pathtopost}`,
        {
          method: "DELETE",
          headers: {
            authorization: token,
          },
        }
      );

      navigate("/profile");
    } catch (error) {}
  };

  http: return (
    <div>
      <div className="top-post-bg">
        <div className="post-details">
          <div className="author-details">
            <div className="author-pic">
              <i className="fas fa-user-circle"></i>
            </div>
            <div className="author-name">
              <Link className="link" to="/user/:id">
                {" "}
                by{" "}
                {singlePostData.postedBy
                  ? singlePostData.postedBy.firstName
                  : "Unknown"}{" "}
                {singlePostData.postedBy
                  ? singlePostData.postedBy.lastName
                  : "Author"}{" "}
              </Link>
            </div>
          </div>

          <div className="post-time-date">
            <div className="post-date">
              {singlePostData.postedBy
                ? new Date(singlePostData.postedBy.createdAt)
                    .toDateString()
                    .slice(4)
                : "Unknown Date"}
            </div>
            <div className="post-time">
              {singlePostData.postedBy
                ? new Date(
                    singlePostData.postedBy.createdAt
                  ).toLocaleTimeString()
                : "Unknown Time"}
            </div>
          </div>

          <div className="post-tech">
            <ul>
              <li>{singlePostData.tech_skills}</li>
            </ul>

            {singlePostData.postedBy?._id === user?._id && (
              <>
                <i
                  className="far fa-edit "
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Edit"
                  style={{ margin: "0.75rem" }}
                ></i>
                <i
                  className="far fa-trash-alt"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Delete"
                  style={{ margin: "0.75rem" }}
                  onClick={handleDeletePost}
                ></i>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="post-content">
        <div className="post-title">{singlePostData.title}</div>

        <div className="post-desc">{singlePostData.body}</div>

        <button className="single-post-btn">
          <Link className="link" to="/posts">
            {" "}
            Go To Post Page{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SinglePost;

import React, { useContext, useEffect, useState } from "react";
import "./singlepostpage.css";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { Context } from "../../login context/Context";

const SinglePost = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { user, token } = useContext(Context);

  const pathtopost = location.pathname.split("/")[1];
  const [singlePostData, setSinglePostData] = useState({});

  const [titleUpdate, setTitleUpdate] = useState("");
  const [bodyUpdate, setBodyUpdate] = useState("");
  const [tech_skillsUpdate, setTech_skillsUpdate] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(
    () => {
      const getPost = async () => {
        try {
          const response = await fetch(
            `http://localhost:2000/api/${pathtopost}`
          );
          const jsondata = await response.json();
          console.log(jsondata[0]);
          setSinglePostData(jsondata[0]);

          setBodyUpdate(jsondata[0].body);
          setTitleUpdate(jsondata[0].title);
          setTech_skillsUpdate(jsondata[0].tech_skills);
        } catch (error) {
          console.log(error);
        }
      };

      getPost();
    },
    [pathtopost],
    [navigate]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //handle delete post
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

      const jsondeletedata = await response.json();
      console.log(jsondeletedata);
      navigate(`/user/${user._id}`);
    } catch (error) {}
  };

  // handle update post
  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `http://localhost:2000/api/updatePost/${pathtopost}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
          body: JSON.stringify({
            title: titleUpdate,
            body: bodyUpdate,
            tech_skills: tech_skillsUpdate,
          }),
        }
      );
      const jsondataofupdate = await response.json();
      console.log(jsondataofupdate);
      setUpdateMode(false);
      window.location.reload();
    } catch (error) {}
  };

  return (
    <div>
      <div className="top-post-bg">
        <div className="post-details">
          <div className="author-details">
            <div className="author-pic">
              <i className="fas fa-user-circle"></i>
            </div>
            <div className="author-name">
              <Link
                className="link"
                to={`/user/${
                  singlePostData.postedBy && singlePostData.postedBy._id
                }`}
              >
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
              {new Date(singlePostData.createdAt).toDateString().slice(4)}
            </div>
            <div className="post-time">
              {new Date(singlePostData.createdAt).toLocaleTimeString()}
            </div>
          </div>

          <div className="post-tech">
            <ul>
              {updateMode ? (
                <input
                  className="single-post-techskills-update"
                  type="text"
                  value={tech_skillsUpdate}
                  onChange={(e) => setTech_skillsUpdate(e.target.value)}
                />
              ) : (
                <li>{singlePostData.tech_skills}</li>
              )}
            </ul>

            {singlePostData.postedBy?._id === user?._id && (
              <>
                <i
                  className="far fa-edit "
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Edit"
                  style={{ margin: "0.75rem" }}
                  onClick={() => setUpdateMode(true)}
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
        {updateMode ? (
          <input
            className="single-post-title-update"
            type="text"
            autoFocus={true}
            value={titleUpdate}
            onChange={(e) => setTitleUpdate(e.target.value)}
          />
        ) : (
          <div className="post-title">{singlePostData.title}</div>
        )}

        {updateMode ? (
          <textarea
            className="single-post-content-update"
            value={bodyUpdate}
            onChange={(e) => setBodyUpdate(e.target.value)}
          ></textarea>
        ) : (
          <div className="post-desc">{singlePostData.body}</div>
        )}

        {updateMode ? (
          <button className="single-post-btn" onClick={handleUpdate}>
            Update Post
          </button>
        ) : (
          <button className="single-post-btn">
            <Link className="link" to="/posts">
              {" "}
              Go To Post Page{" "}
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;

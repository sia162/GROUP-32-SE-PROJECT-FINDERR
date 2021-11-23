import React, { useEffect, useState } from "react";
import Singlepost from "../home-posts/Singlepost";
import "./post.css";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:2000/api/allPost", {
        method: "GET",
      });

      const jsondata = await response.json();
      // console.log(jsondata);
      setPosts(jsondata);
    };

    fetchPosts();
  }, []);

  return (
    <div className="post-page">
      <form className="d-flex justify-content-end align-items-center me-2">
        <input
          className="form-control m-3"
          type="text"
          placeholder="Search Skills of your Interest"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </form>

      <div className="post">
        {posts
          .filter((post) => {
            if (searchTerm === "") {
              return post;
            } else if (
              post.tech_skills
                .toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return post;
            }
          })
          .map((post) => {
            return <Singlepost key={post._id} post={post} />;
          })}
      </div>
    </div>
  );
};

export default Post;

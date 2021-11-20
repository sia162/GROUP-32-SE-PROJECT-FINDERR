import React, { useEffect, useState } from "react";
import Singlepost from "../home-posts/Singlepost";
import "./post.css";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:2000/api/allPost", {
        method: "GET",
      });

      const jsondata = await response.json();
      console.log(jsondata);
      setPosts(jsondata);
    };

    fetchPosts();
  }, []);

  return (
    <div className="post">
      {posts.map((post) => {
        return <Singlepost key={post._id} post={post} />;
      })}
    </div>
  );
};

export default Post;

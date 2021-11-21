import React, { useEffect, useState } from "react";
import Singlepost from "../home-posts/Singlepost";
import "./sectiontwo.css";
import Arrow from "../arrow/Arrow";

const Sectiontwo = () => {
  const [posts, setPosts] = useState([]);

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
    <div className="blank" id="sectiontwo">
      <div className="bg-text section2">
        <h1>POST</h1>
        <p> YOUR TECH THOUGHTS CORNER</p>
      </div>
      <div className="halfbg bg-dark"></div>
      <div className="posteg">
        {posts.slice(0, 3).map((post) => {
          return <Singlepost key={post._id} post={post} />;
        })}
        <a href="#contact">
          <Arrow />
        </a>
      </div>
    </div>
  );
};

export default Sectiontwo;

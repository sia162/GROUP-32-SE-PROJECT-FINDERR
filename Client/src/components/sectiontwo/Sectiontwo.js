import React, { useEffect, useState, useContext } from "react";
import Singlepost from "../home-posts/Singlepost";
import "./sectiontwo.css";
import Arrow from "../arrow/Arrow";
import { Context } from "../../login context/Context";

const Sectiontwo = () => {
  const { user, token } = useContext(Context);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:2000/api/allPost", {
        method: "GET",
      });

      const jsondata = await response.json();
      console.log(jsondata);
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
        <Singlepost />
        <Singlepost />
        <Singlepost />
        <a href="#contact">
          <Arrow />
        </a>
      </div>
    </div>
  );
};

export default Sectiontwo;

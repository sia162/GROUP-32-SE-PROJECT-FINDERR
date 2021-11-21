import React, { useEffect, useState, useContext } from "react";
import Singlepost from "../home-posts/Singlepost";
import { Context } from "../../login context/Context";

const Timeline = () => {
  const [myposts, setMyposts] = useState([]);
  const { token } = useContext(Context);

  useEffect(() => {
    const fetchMyposts = async () => {
      const response = await fetch("http://localhost:2000/api/myPost", {
        method: "GET",
        headers: { authorization: token },
      });

      const jsondata = await response.json();
      // console.log(jsondata);
      setMyposts(jsondata.mypost);
    };

    fetchMyposts();
  }, [token]);
  return (
    <div className="all-posts-of-user">
      <h3>Timeline</h3>
      <div className="posts-box">
        {myposts.length ? (
          myposts.map((post) => {
            return <Singlepost key={post._id} post={post} />;
          })
        ) : (
          <p>No posts to show.</p>
        )}
      </div>
    </div>
  );
};

export default Timeline;

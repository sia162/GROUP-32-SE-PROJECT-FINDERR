import React from "react";
import Singlepost from "../home-posts/Singlepost";

const Timeline = ({ posts }) => {
  return (
    <div className="all-posts-of-user">
      <h3>Timeline</h3>
      <div className="posts-box">
        {posts.length ? (
          posts.map((post) => {
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

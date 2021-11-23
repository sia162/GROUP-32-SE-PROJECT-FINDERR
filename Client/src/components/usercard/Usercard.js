import React from "react";
import "./usercard.css";

const Searchuser = ({ user }) => {
  return (
    <div>
      <div className="usercard">
        <div>
          <img
            src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHx1c2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="profile"
            className="rounded-circle userimg"
          />
        </div>
        <div>
          <h5>
            {user.firstName} {user.lastName}{" "}
          </h5>
          Tech-skills:
          {user.tech_skills.length ? (
            <ol className="userskill">
              {user.tech_skills.map((u, index) => {
                return <li key={index}>{u}</li>;
              })}
            </ol>
          ) : (
            <p>
              {" "}
              <b> &emsp;This person Knows nothing, thank you!</b>
            </p>
          )}
        </div>
        <button type="button" className="btn btn-dark userbtn">
          View
        </button>
      </div>
    </div>
  );
};

export default Searchuser;

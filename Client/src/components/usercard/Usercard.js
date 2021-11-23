import React from "react";
import "./usercard.css";
import { Link } from "react-router-dom";

const Searchuser = ({ userr }) => {
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
            {userr.firstName} {userr.lastName}{" "}
          </h5>
          Tech-skills:
          {userr.tech_skills.length ? (
            <ol className="userskill">
              {userr.tech_skills.map((u, index) => {
                return <li key={index}>{u}</li>;
              })}
            </ol>
          ) : (
            <p>
              {" "}
              <b> &emsp;This person knows nothing, thank you!</b>
            </p>
          )}
        </div>
        <Link className="userbtn" to={`/user/${userr._id}`}>
          <button type="button" className="btn btn-dark">
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Searchuser;

import React, { useEffect, useState } from "react";
import Usercard from "../usercard/Usercard";
import "./alluser.css";

const Alluser = () => {
  const [allusers, setAlluser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:2000/api/allUser", {
        method: "GET",
      });

      const jsondata = await response.json();
      console.log(jsondata);
      setAlluser(jsondata);
    };

    fetchUsers();
  }, []);
  return (
    <div className="allcard">
      <form className="d-flex justify-content-end align-items-center me-2">
        <input
          className="form-control m-3"
          type="text"
          placeholder="Search user based on skills"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </form>
      <div
        style={{
          padding: "1rem 2rem",
          height: "15vh",
        }}
      >
        <h1>Users </h1>
        <h6>Connect with users to collaborate</h6>
      </div>
      {allusers
        .filter((user) => {
          if (searchTerm === "") {
            return user;
          } else if (
            user.tech_skills
              .toString()
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return user;
          }
        })
        .map((user) => {
          return <Usercard key={user._id} userr={user} />;
        })}
      .
    </div>
  );
};

export default Alluser;

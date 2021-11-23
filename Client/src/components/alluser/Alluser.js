import React, { useEffect, useState } from "react";
import Usercard from "../usercard/Usercard";
import "./alluser.css";

const Alluser = () => {
  const [allusers, setAlluser] = useState([]);

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
      <div
        style={{
          padding: "1rem 2rem",
          height: "15vh",
        }}
      >
        <h1>Users </h1>
        <h6>Request a user to collaborate</h6>
      </div>
      {allusers.map((user) => {
        return <Usercard key={user._id} user={user} />;
      })}
      .
    </div>
  );
};

export default Alluser;

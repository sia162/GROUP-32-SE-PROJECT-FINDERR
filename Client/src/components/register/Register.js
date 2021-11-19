import React, { useState } from "react";
import registerimg from "./register-img.jpg";
import "./register.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [usercreds, setUsercreds] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errormsg, setErrormsg] = useState("");

  const onchange = (e) => {
    setUsercreds({ ...usercreds, [e.target.name]: e.target.value });
    setError(false);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { firstName, lastName, username, email, password } = usercreds;

    const response = await fetch("http://localhost:2000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (json.error) {
      setError(true);
      setErrormsg(json.error);
    } else {
      setError(false);
      //save the auth token and redirect
      localStorage.setItem("token", json.token);
      navigate("/login");
    }
  };

  return (
    <div className="register">
      <div className="register-input-img">
        <img src={registerimg} alt="" />
      </div>

      <div className="register-form-right-side">
        <div className="register-form-title">Join us now</div>

        <form className="register-form-group" onSubmit={handleSignup}>
          <div className="register-input-box">
            <label htmlFor="firstName">firstName </label>{" "}
            <input
              type="text"
              name="firstName"
              value={usercreds.firstName}
              onChange={onchange}
            />
          </div>
          <div className="register-input-box">
            <label htmlFor="lastName">lastName </label>{" "}
            <input
              type="text"
              name="lastName"
              value={usercreds.lastName}
              onChange={onchange}
            />
          </div>

          <div className="register-input-box">
            <label htmlFor="email">email </label>{" "}
            <input
              type="email"
              name="email"
              value={usercreds.email}
              onChange={onchange}
            />
          </div>
          <div className="register-input-box">
            <label htmlFor="password">password </label>{" "}
            <input
              type="password"
              name="password"
              value={usercreds.password}
              onChange={onchange}
            />
          </div>
          <button type="submit" className="register-btn">
            Signup
          </button>
        </form>

        <div className="orloginlink">
          <Link className="link" to="/login">
            {" "}
            or login here.
          </Link>
        </div>

        {error && (
          <p style={{ textAlign: "center", color: "red" }}>{errormsg}!</p>
        )}
      </div>
    </div>
  );
};

export default Register;

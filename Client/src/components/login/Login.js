import React from "react";
import "./login.css";
import loginimg from "./login-image.jpg";
import { Link } from "react-router-dom";

const Login = () => {

  
  return (
    <div className="login">
      <div className="login-input-img">
        <img src={loginimg} alt="" />
      </div>

      <div className="login-form-right-side">
        <div className="login-form-title">Login To Continue</div>
        <form className="login-form-group">
          <div className="login-input-box">
            <label htmlFor="username">username </label>{" "}
            <input type="text" name="username" />
          </div>
          <div className="login-input-box">
            <label htmlFor="email">email </label>{" "}
            <input type="email" name="email" />
          </div>
          <div className="login-input-box">
            <label htmlFor="password">password </label>{" "}
            <input type="password" name="password" />
          </div>
        </form>

        <button className="login-btn">Login</button>

        <div className="orsignuplink">
          <Link className="link" to="/register">
            or register here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

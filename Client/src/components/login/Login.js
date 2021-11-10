import React from "react";
import "./login.css";
import loginimg from "./login-image.jpg";

const Login = () => {
  return (
    <div className="login">
      <div className="input-img">
        <img src={loginimg} alt="" />
      </div>

      <div className="form-right-side">
        <div className="form-title">Login To Continue</div>
        <form className="form-group">
          <div className="input-box">
            <label htmlFor="username">username </label>{" "}
            <input type="text" name="username" />
          </div>
          <div className="input-box">
            <label htmlFor="email">email </label>{" "}
            <input type="email" name="email" />
          </div>
          <div className="input-box">
            <label htmlFor="password">password </label>{" "}
            <input type="password" name="password" />
          </div>
        </form>

        <button className="login-btn">Login</button>

        <div className="orsignuplink">or sign up here.</div>
      </div>
    </div>
  );
};

export default Login;

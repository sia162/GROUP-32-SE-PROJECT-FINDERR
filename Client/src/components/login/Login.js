import React from "react";
import "./login.css";
import loginimg from "./login-image.jpg";

const Login = () => {
  return (
    <div className="login"
    >
      <div className="input-img">
        <img src={loginimg} alt="" />
      </div>

      <div className="form-right-side">

        <div className="form-title">Login Here</div>
        <form className="form-group">
          <div className="input-box">
            <label htmlFor="name">Enter your name </label>{" "}
            <input type="text" name="name" />
          </div>
          <div className="input-box">
            <label htmlFor="email">Enter your email </label>{" "}
            <input type="email" name="email" />
          </div>
          <div className="input-box">
            <label htmlFor="password">Enter your password </label>{" "}
            <input type="password" name="password" />
          </div>
        </form>
        
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;

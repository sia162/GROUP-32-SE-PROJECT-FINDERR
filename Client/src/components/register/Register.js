import React from "react";
import registerimg from "./register-img.jpg";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="register-input-img">
        <img src={registerimg} alt="" />
      </div>

      <div className="register-form-right-side">
        <div className="register-form-title">Join us now</div>

        <form className="register-form-group">
          <div className="register-input-box">
            <label htmlFor="username">username </label>{" "}
            <input type="text" name="username" />
          </div>
          <div className="register-input-box">
            <label htmlFor="email">email </label>{" "}
            <input type="email" name="email" />
          </div>
          <div className="register-input-box">
            <label htmlFor="password">password </label>{" "}
            <input type="password" name="password" />
          </div>
        </form>

        <button className="register-btn">Signup</button>

        <div className="orloginlink">
          <Link className="link" to="/login">
            {" "}
            or login here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

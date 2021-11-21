import React, { useContext, useState } from "react";
import "./login.css";
import loginimg from "./login-image.jpg";
import { Link } from "react-router-dom";
import { Context } from "../../login context/Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch, isFetching, error } = useContext(Context);
  const [errormsg, setErrormsg] = useState("");
  const [userlogincreds, setUserlogincreds] = useState({
    email: "",
    password: "",
  });

  const loginonchange = (e) => {
    setErrormsg("");
    setUserlogincreds({ ...userlogincreds, [e.target.name]: e.target.value });
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const response = await fetch("http://localhost:2000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userlogincreds.email,
          password: userlogincreds.password,
        }),
      });

      const jsondata = await response.json();
      // console.log(jsondata);

      if (jsondata.message) {
        setErrormsg(jsondata.message);
        dispatch({ type: "LOGIN_FAILURE" });
      } else {
        navigate("/");
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: jsondata.user,
          token: jsondata.token,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <div className="login-input-img">
        <img src={loginimg} alt="" />
      </div>

      <div className="login-form-right-side">
        <div className="login-form-title">Login To Continue</div>
        <form className="login-form-group" onSubmit={handleSignin}>
          <div className="login-input-box">
            <label htmlFor="email">email </label>{" "}
            <input
              required
              type="email"
              name="email"
              value={userlogincreds.email}
              onChange={loginonchange}
            />
          </div>
          <div className="login-input-box">
            <label htmlFor="password">password </label>{" "}
            <input
              required
              minLength="6"
              type="password"
              name="password"
              value={userlogincreds.password}
              onChange={loginonchange}
            />
          </div>
          <button className="login-btn" type="submit" disabled={isFetching}>
            Login
          </button>
        </form>

        <div className="orsignuplink">
          <Link className="link" to="/register">
            or register here.
          </Link>
        </div>

        {error && (
          <p style={{ color: "red", textAlign: "center" }}>{errormsg}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
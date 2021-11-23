import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../login context/Context";
import "./navbar.css";

const Navbar = () => {
  const { dispatch, user } = useContext(Context);

  const handlelogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Finderr
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/posts">
                  Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/alluser">
                  Alluser
                </Link>
              </li>
              {!user && (
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              )}
              {!user && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    LogIn
                  </Link>
                </li>
              )}
              {user && (
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={handlelogout}>
                    LogOut
                  </Link>
                </li>
              )}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button className="btn btn-dark btn-outline-light" type="submit">
                Search
              </button>
            </form>

            {user && (
              <Link to={`/user/${user._id}`} className="link profile">
                <i className="fas fa-user-circle profile-setting"></i>
                <span className="profile-head">{user.fullName}</span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

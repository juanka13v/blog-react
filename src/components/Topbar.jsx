import React, { useContext } from "react";
import "./topbar.css";
import imgTop from "../images/Mi-foto.png";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <div className="topList">
          <li className="topListItem">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link
              to="/write"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Write
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
              {user && "LogOut"}
          </li>
        </div>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img src={imgTop} alt="" className="topImg" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;

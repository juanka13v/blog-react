import React from "react";
import "./topbar.css";
import imgTop from "../images/Mi-foto.png";
import { Link } from "react-router-dom";

const Topbar = () => {
  const currentUser = false;
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
          <li className="topListItem">
            <Link
              to="/logout"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {currentUser ? "" : "LogOut"}
            </Link>
          </li>
        </div>
      </div>
      <div className="topRight">
        {currentUser ? (
          <img src={imgTop} alt="" className="topImg" />
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

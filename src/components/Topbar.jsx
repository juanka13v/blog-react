import React from "react";
import "./topbar.css";
import imgTop from "../images/Mi-foto.png"

const Topbar = () => {
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
              <li className="topListItem">HOME</li>
              <li className="topListItem">ABOUT</li>
              <li className="topListItem">CONTACT</li>
              <li className="topListItem">WRITE</li>
              <li className="topListItem">LOGOUT</li>
          </div>
      </div>
      <div className="topRight">
          <img src={imgTop} alt="" className="topImg" />
          <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;

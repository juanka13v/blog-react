import "./sidebar.css";
import axios from "axios";
import { useState, useEffect } from "react";
import imgAbout from "../images/about-me-photo.jpg";

const Sidebar = () => {
  const [cats, setCats] = useState([]);
  const url = "https://rest-api-blogs-2021.herokuapp.com/api";

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(`${url}/categories`);
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={imgAbout} alt="" className="img-sidebar" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus excepturi consequuntur culpa est quis suscipit
          obcaecati
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((category, index) => {
            return <li className="sidebarListItem" key={index}>{category.name}</li>;
          })}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

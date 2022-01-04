import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";
import { useLocation } from "react-router-dom";

const Home = () => {
  const url = "https://rest-api-blogs-2021.herokuapp.com/api";
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${url}/posts${search}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
};

export default Home;

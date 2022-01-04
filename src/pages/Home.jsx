import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";

const Home = () => {
  const url = "https://rest-api-blogs-2021.herokuapp.com/api";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${url}/posts`);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

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

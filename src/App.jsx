import Setting from "./pages/Setting";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import { Single } from "./pages/Single";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import "./app.css";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        {user ? (
          <Route path="/register" element={<Home />} />
        ) : (
          <Route path="/register" element={<Register />} />
        )}
        {user ? (
          <Route path="/login" element={<Home />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        {user ? (
          <Route path="/write" exact element={<Write />} />
        ) : (
          <Route path="/write" element={<Home />} />
        )}
        {user ? (
          <Route path="/settings" element={<Setting />} />
        ) : (
          <Route path="/settings" element={<Home />} />
        )}
        <Route path="/post/:postId" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}

export default App;

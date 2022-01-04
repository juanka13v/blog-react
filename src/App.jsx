import Setting from "./pages/Setting";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import { Single } from "./pages/Single";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import SinglePost from "./components/SinglePost";
import "./app.css"

function App() {
  const currentUser = false;
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        {
          currentUser 
            ? <Route path="/register"  element={<Home />} />
            : <Route path="/register"  element={<Register />} />
        }
        {
          currentUser
            ? <Route path="/login"  element={<Home />} />
            : <Route path="/login"  element={<Login />} />
        }
        {
          currentUser
            ? <Route path="/write" exact element={<Write />} />
            : <Route path="/write"  element={<Home />} />
        }
        {
          currentUser
            ? <Route path="/settings"  element={<Setting />} />
            : <Route path="/settings"  element={<Home />} />
        }
        <Route path="/post/:postId"  element={<SinglePost />} />
      </Routes>
    </Router>
  );
}

export default App;

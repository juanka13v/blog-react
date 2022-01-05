import "./write.css";
import imgEdit from "../images/main-foto.jpg";
import { useState, useContext } from "react";
import { Context } from "../context/Context";
import axios from "axios";

const Write = () => {
  const url = "https://rest-api-blogs-2021.herokuapp.com/api";

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + filename;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post(`${url}/upload`, data);
      } catch (error) {}
    }
    try {
      const res = await axios.post(`${url}/posts`, newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (error) {}
  };

  return (
    <div className="write">
      {file && (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
      )}
      <form className="writeForm" onClick={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type="text"
            placeholder="Tell your story..."
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;

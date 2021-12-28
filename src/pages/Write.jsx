import "./write.css";
import imgEdit from "../images/main-foto.jpg"

const Write = () => {
  return (
    <div className="write">
        <img src={imgEdit} alt="" className="writeImg"/>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type="text"
            placeholder="Tell your story..."
            className="writeInput writeText"
          ></textarea>
          <button className="writeSubmit">
              Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;

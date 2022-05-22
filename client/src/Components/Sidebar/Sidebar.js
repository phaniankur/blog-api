import react, {useState} from "react";
import "./sidebar.css";

export default function Sidebar() {
  const [postData, setPostData] = useState('')
  return (
    <div className="sidebar">
      <div>
        <h2>Hello Ankur!</h2>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Create a Post</span>
      </div>
      <div>
        <p>
          Take a moment is creating a post of yours.
        </p>
        <div className="createPost--container">
          <textarea
          type='text'
          className="createPost--input--field"
          placeholder="What's on your mind?"
          value={postData}
          onChange={(e)=> setPostData(e.target.value)}
          />
          <button className="createPost--button">Post</button>
        </div>
      </div>

    </div>
  );
}
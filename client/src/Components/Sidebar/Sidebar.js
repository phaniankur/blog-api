import react, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';

import { getAllPostsAction,createPostAction } from '../../Redux/actions/postActions.js';
import "./sidebar.css";

export default function Sidebar() {

  const dispatch = useDispatch();
  const createPost = useSelector((state) => state.createPost);

  const [postData, setPostData] = useState({title: '', desc: ''})

  useEffect(() => {
    if(createPost && createPost.data && createPost.data.success){

        dispatch(getAllPostsAction())
        setPostData({title: '', desc: ''})
    }
  }, [createPost])

  const handlePost = (e)=>{
    e.preventDefault();
    const postDetails = {
      title: postData.title,
      desc: postData.desc
    }
    dispatch(createPostAction(postDetails))
}
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
          <input
          value={postData.title}
          onChange={(e)=> setPostData({...postData, title: e.target.value})}
          placeholder='title'/>
          <textarea
          type='text'
          className="createPost--input--field"
          placeholder="What's on your mind?"
          value={postData.desc}
          onChange={(e)=> setPostData({...postData, desc: e.target.value})}
          />
          <button className="createPost--button" onClick={handlePost}>Post</button>
        </div>
      </div>

    </div>
  );
}
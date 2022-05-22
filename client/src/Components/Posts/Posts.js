import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletePostAction, getAllPostsAction } from '../../Redux/actions/postActions';

import Post from '../Post/Post'
import './posts.css'

function Posts() {
    const dispatch = useDispatch();
    const allPosts = useSelector((state) => state.getAllPosts);
    const deletePost = useSelector((state) => state.deletePost);

    useEffect(() => {

      dispatch(getAllPostsAction())
    }, [])

    useEffect(() => {
        if(deletePost && deletePost.data && deletePost.data.success){
            dispatch(getAllPostsAction())
        }
    }, [deletePost])


    const handleDelete = (id)=>{
        dispatch(deletePostAction(id))
    }
    return (
        <div className='posts'>
            {
                allPosts && allPosts.data && allPosts.data.map((item, i)=>(
                    <Post
                    key={i}
                    title={item.title}
                    desc={item.desc}
                    username = {item.username}
                    date={item.createdAt}
                    handleDelete={()=>handleDelete(item._id)}
                    />
                ))
            }


        </div>
    )
}

export default Posts

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPostsAction } from '../../Redux/actions/postActions';

import Post from '../Post/Post'
import './posts.css'

function Posts() {
    const dispatch = useDispatch();
    const allPosts = useSelector((state) => state.getAllPosts);

    useEffect(() => {

      dispatch(getAllPostsAction())
    }, [])
    console.log(allPosts)

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
                    />
                ))
            }


        </div>
    )
}

export default Posts

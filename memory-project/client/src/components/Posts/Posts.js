import React from 'react';
import { useSelector } from 'react-redux';
import PostCom from './PostCom/PostCom';
import useStyles from './Posts.style';



const Posts = () => {
  const classes=useStyles()
  const posts = useSelector(state => state.posts)
  console.log(posts)

    return (
        <>
           <h1>POSTS</h1> 
           <PostCom/>
           <PostCom/>
           <PostCom/>

        </>
    )
}

export default Posts

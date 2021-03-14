import React from 'react'
import Post from './Post'

function PostList({posts}) {
    const postsElements = posts.map( post => {
        return <Post
             key={post.id}
             {...post} 
             />
    });
    return (
        <div>
         {postsElements}
        </div>
    )
}

export default PostList

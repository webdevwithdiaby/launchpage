import React from 'react'
import CommentList from './CommentList';

function Post(props) {
    const {
        title,
        content,
        comments
    } = props;
    const postStyle = {
        padding: '1rem',
        border: '1px solid #ccc'
    }
    const commentsStyles = {
        marginLeft: '1rem',
        border: '1px solid #eee',
        padding: '.8rem'
    }
    return (
        <div style={postStyle}>
            <h3> {title} </h3>
            <p> {content} </p>
            <div style={commentsStyles}>
                <h4>Comments</h4>
                <CommentList comments={comments} />
            </div>
        </div>
    )
}

export default Post

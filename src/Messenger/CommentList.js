import React from 'react'
import Comment from './Comment';

function CommentList({comments}) {
    const commentsElements = comments.map( comment => {
        return <Comment key={comment.id} {...comment} />
    });
    return (
        <div>
            {commentsElements}
        </div>
    )
}

export default CommentList

import React from 'react'

function Comment({user,comment}) {
    
    return (
        <div>
            <h5> {user} </h5>
            <p style={
                {
                    marginLeft: '1rem'
                }
            } > {comment} </p>
        </div>
    )
}

export default Comment

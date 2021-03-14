import React from 'react';
import {withRouter} from 'react-router-dom';

function Subject({name,url,match,history}) {
    return (
        <div className='subject' onClick={
            () => history.push(`${match.path}${url}`)
        } >
            <h3 className="name"> {name} </h3>
        </div>
    )
}

export default withRouter(Subject)

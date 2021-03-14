import React, {useContext} from 'react';
import {AppContext} from '../../App';
import {withRouter} from 'react-router-dom';
import './todo.styles.css';

function Todo({id,title,description,completed,history}) {
    const {handleCompletedStateChange} = useContext(AppContext);
    return (
        <div className='todo'  >
            <div className="content" onClick={()=> history.push(`edit/${id}`) } >
            <h1 className={`todo-title ${completed? 'completed' : null}`}> {title} </h1>
            </div>
            <input  
                type='checkbox' 
                id='completed' 
                name='completed' 
                checked={completed} 
                onChange={(e) =>  handleCompletedStateChange(e,id)}
            />
        </div>
    )
}

export default withRouter(Todo)

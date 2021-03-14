import React, {useContext} from 'react';
import './edit-todo.styles.css';
import {AppContext} from '../../App';

function EditTodo({match}) {
    const {findTodo,handleTodoChange} = useContext(AppContext);
    const id = Number(match.params.id);
    const todo = findTodo(id);
    //console.log(todo);

    //disable add button to revent error

    return (
        <div className='edit-todo' >
            <form className="form">
                <input 
                    type="text" 
                    className="form__input"
                    name='title'
                    id='title'
                    value={todo.title}
                    onChange={ (e) => handleTodoChange(e,todo.id)  }
                />
                <textarea 
                    className='form__textarea'
                    name="description" 
                    id="description"
                    value={todo.description}
                    onChange={(e) => handleTodoChange(e,todo.id) }
                />
            </form>
        </div>
    )
}

export default EditTodo

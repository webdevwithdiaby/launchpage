import React from 'react';
import Todo from '../todo/todo.component';
import './todo-list.styles.css';
function TodoList({todos}) {
    return (
        <div className="todo-list">
            {
                todos.map(todo => (<Todo key={todo.id} {...todo} />) )
            }
        </div>
    )
}

export default TodoList

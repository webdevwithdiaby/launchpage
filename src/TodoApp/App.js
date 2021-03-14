import React, {useState} from 'react';
import './app.css';
import Header from './components/header/header.component';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import TodoList from  './components/todo-list/todo-list.component';
import EditTodo from './components/edit-todo/edit-todo.component';
import data from './data/data';
export const AppContext = React.createContext();

const App = () =>  {
    const [todos,setTodos] = useState(data);

    const addTodo = () => {
        const newTodo = {
            id: Number(Date.now().toString()),
            title:'New title',
            description:'new description',
            completed:false
        }
        setTodos(prev => ([newTodo,...prev]) );
        return newTodo.id;
    }

    const handleCompletedStateChange = (e,id) => {
        const {name} =e.target;
        const todo = todos.find(t => t.id === id );
        const value = !todo.completed;
        const index = todos.findIndex(t => t.id === id );

        const updatedTodo = {...todo,[name]:value};
        const myTodos = todos;
        myTodos[index] = updatedTodo;
        setTodos([...myTodos]);
    }

    const handleTodoChange = (e,id) => {
        const {name,value} = e.target;
        const todo = todos.find(t => t.id === id );
        const index = todos.findIndex(t => t.id === id );

        const updatedTodo = {...todo,[name]:value};
        const myTodos = todos;
        myTodos[index] = updatedTodo;
        setTodos([...myTodos]);
    }

    const findTodo = id => todos.find(t => t.id === id );

    const appContextValue = {
        handleCompletedStateChange,
        findTodo,
        addTodo,
        handleTodoChange
    }

    return (
        <BrowserRouter>
            <AppContext.Provider value={appContextValue} >
                <div className="app">
                    <Header/>
                    <main className="main">
                        <Switch>
                            <Route exact path='/' render={(props) => (<TodoList {...props} todos={todos} />) } />
                            <Route path='/edit/:id' component={EditTodo} />
                        </Switch>
                    </main>
                </div>
            </AppContext.Provider>
        </BrowserRouter>
    );
}

export default App;
import React, {useContext,useState} from 'react';
import Button from '../button/button.component';
import {withRouter} from 'react-router-dom';
import {AppContext} from '../../App';
import './header.styles.css';

const Header = ({history}) => {
    const {addTodo} = useContext(AppContext);
    const handleAddTodo = () => {
        const id = addTodo();
        history.push(`edit/${id}`);
    }

   
   

   
    return (
            <header className="header">
                <div className="header__content">
                    <h1 className="header__brand">My Todos</h1>
                    <Button modifier='btn--primary'  handler={handleAddTodo} > Add </Button>
                </div>
            </header>
    );
}

export default withRouter(Header);
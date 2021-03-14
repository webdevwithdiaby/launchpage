import React from 'react';
import Button from '../button/button.component';
import {connect} from 'react-redux';
import './header.styles.css';

import {setIsModalShown} from '../../redux/ui/ui.actions';

function Header({isModalShown,setIsModalShown}) {
    return (
        <header className="header">
            <div className="header__content">
                <h1 className="header__title">KeepMe</h1>
                <Button handler={
                    () => setIsModalShown(!isModalShown)
                } >Add new Contact</Button>
            </div>
        </header>
    )
}

const mapStateToProps = store => ({
    isModalShown: store.uiReducer.isModalShown
})

const mapDispatchToProps = dispatch => ({
    setIsModalShown: bool => dispatch(setIsModalShown(bool))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);

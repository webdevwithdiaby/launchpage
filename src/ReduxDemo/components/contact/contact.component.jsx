import React, {useEffect,useState} from 'react';
import Button from '../button/button.component';

import {setIsModalShown} from '../../redux/ui/ui.actions';

import {setSelectedContact} from '../../redux/contact/contact.actions';

import {connect} from 'react-redux';

import './contact.styles.css';

function Contact({contact,isModalShown,setIsModalShown,selectedContact,setSelectedContact}) {
    const {name,number} = contact;



    return (
        <li className="contact">
            <div className="content">
                <h2 className="name"> {name} </h2>
                <p className="number"> {number} </p>
            </div>
            <div className="action-container">
                <Button handler={
                    () => {
                       
                       setSelectedContact(contact)
                       setIsModalShown(!isModalShown)
                    }
                } > Edit </Button>
            </div>
        </li>
    )
}

const mapStateToProps = store => ({
    isModalShown: store.uiReducer.isModalShown,
    selectedContact: store.contactReducer.selectedContact
})

const mapDispatchToProps =dispatch => ({
    setIsModalShown: bool => dispatch(setIsModalShown(bool)),
    setSelectedContact: number => dispatch(setSelectedContact(number))

})

export default connect(mapStateToProps,mapDispatchToProps)(Contact)

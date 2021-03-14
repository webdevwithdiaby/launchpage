import React, {useState,useEffect} from 'react';
import Button from '../button/button.component';
import {connect} from 'react-redux';

import './modal.styles.css';
import { setIsModalShown } from '../../redux/ui/ui.actions';
import {addContact, updateContacts} from '../../redux/contact/contact.actions';

import {setSelectedContact} from '../../redux/contact/contact.actions';


function Modal({isModalShown,setIsModalShown,addContact,selectedContact,setSelectedContact,updateContacts,contacts}) {
    const [contact,setContact] = useState({
        name:'',
        numbber:''
    });

    

    const handleSubmit = e => {
        e.preventDefault();

        if (selectedContact === null) {
            //add operation
            addContact(contact)
        }else {
            //edit operation
            const index = contacts.findIndex(c => c.number === selectedContact.number );
            const updatedContacts = [...contacts];
            updatedContacts[index] = selectedContact;

            updateContacts(updatedContacts);

            //finish edit reset edit mode by setting selectedContact to null
            setSelectedContact(null)

        }

        setIsModalShown(!isModalShown)
        setContact({name:'',number:''})
    }
    
    const handleChange = e => {
        const {name,value} = e.target;

        if(selectedContact == null) {
            setContact(prev => ({...prev,[name]:value}));
        }else {
            setSelectedContact({...selectedContact,[name]:value})
        }
        
    }

  
    return (
            <div className={`modal ${isModalShown == true ? 'show' : ''}`} >
            <h3 className="title">
                {selectedContact !== null ?'Edit Contact':'Add New Contact'}
            </h3>
            <form  className="form" onSubmit={handleSubmit} >
                <div className="input-group">
                    <input 
                        className='input'
                        type="text"
                        id='name'
                        name='name'
                        placeholder='Name'
                        required
                        value={ selectedContact !== null ? selectedContact.name : contact.name}
                        onChange={ (e) => handleChange(e) }
                    />
                </div>
                <div className="input-group">
                    <input 
                        className='input'
                        type="text"
                        id='number'
                        name='number'
                        placeholder='Phone Number'
                        required
                        value={ selectedContact !== null? selectedContact.number : contact.number}
                        onChange={ (e) => handleChange(e) }
                    />
                </div>
                <div className="input-group">
                    <Button type='submit' 
                        
                    > {selectedContact !== null? 'Save Changes' : 'Add contact'} </Button>
                </div>
            </form>
        </div>
    );

}  
       
    

const mapStateToProps = store => ({
    isModalShown: store.uiReducer.isModalShown,
    selectedContact: store.contactReducer.selectedContact,
    contacts:store.contactReducer.contacts
});

const mapDispatchToProps = dispatch => ({
    setIsModalShown: bool => dispatch(setIsModalShown(bool)),
    addContact: contact => dispatch(addContact(contact)),
    setSelectedContact: (contact) => dispatch(setSelectedContact(contact)),
    updateContacts: contacts => dispatch(updateContacts(contacts))
});

export default connect(mapStateToProps,mapDispatchToProps)(Modal);

import React from 'react';
import Contact from '../contact/contact.component';
import './contact-list.styles.css';
import {connect} from 'react-redux';

function ContactList({contacts}) {
    return (
        <ul className="contact-list">
            {
                contacts.map( contact => (
                    <Contact
                        key={contact.number}
                        contact={contact}
                    />
                ) )
            }
        </ul>
    )
}

const mapStateToProps = store => ({
    contacts: store.contactReducer.contacts
});

export default connect(mapStateToProps)(ContactList)

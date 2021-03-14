import {ContactActionsTypes} from './contact.types';

export const addContact = contact => ({
    type:ContactActionsTypes.ADD_CONTACT,
    payload:contact
})

export const setSelectedContact = (contact) => ({
    type: ContactActionsTypes.SET_SELECTED_CONTACT,
    payload: contact
})

export const updateContacts = contacts => ({
    type:ContactActionsTypes.UPDATE_CONTACTS,
    payload:contacts
})
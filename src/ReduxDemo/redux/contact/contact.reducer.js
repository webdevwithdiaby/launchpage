import {ContactActionsTypes} from './contact.types';

const INITIAL_STATE = {
    contacts: [
        {id:'1',name:'Adama Diaby',number:'65635976'},
        {id:'2',name:'Aliou Diallo',number:'45782569'},
        {id:'3',name:'Ousmane Ouatara',number:'78123659'},
        {id:'4',name:'Mariam Fané',number:'75126958'},
    ],
    selectedContact:null
};

const ContactReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case ContactActionsTypes.ADD_CONTACT:
            return (
                {
                    ...state,
                    contacts: [action.payload,...state.contacts]
                }
            )
        case ContactActionsTypes.SET_SELECTED_CONTACT:
            return ({
                ...state,
                selectedContact:action.payload
            })
        case ContactActionsTypes.UPDATE_CONTACTS:
            return({
                ...state,
                contacts:action.payload
            })        
        default:
            return state;
    }
}

export default ContactReducer;
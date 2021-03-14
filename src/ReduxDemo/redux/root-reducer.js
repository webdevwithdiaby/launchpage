import {combineReducers} from 'redux';
import ContactReducer from './contact/contact.reducer';
import UIReducer from './ui/ui.reducer';

export default combineReducers({
    contactReducer: ContactReducer,
    uiReducer:UIReducer
});
import {UIActionsTypes} from './ui.types';
const INITIAL_STATE = {
    isModalShown:false,
}

const UIReducer = (state = INITIAL_STATE ,action) => {
    switch (action.type) {
        case UIActionsTypes.SET_IS_MODAL_SHOWN:
            return ({
                ...state,
                isModalShown: action.payload
            })
        default:
            return state;
    }
}

export default UIReducer;
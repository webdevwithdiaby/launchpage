import {UIActionsTypes} from './ui.types';

export const setIsModalShown = bool => ({
    type: UIActionsTypes.SET_IS_MODAL_SHOWN,
    payload: bool
})
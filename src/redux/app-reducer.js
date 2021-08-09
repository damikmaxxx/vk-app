import { firebaseAPI, DB_USER_MONEY,DB_USER_ROKET,DB_USER_HOUSE,DB_USER_PEOPLE,DB_USER_FOOD  } from "../api/api";
import { CHANGE_MONEY,CHANGE_HOUSE,CHANGE_PEOPLE,CHANGE_ROKET } from './inventory-reducer';
import {changeInventory,setInventory} from "./inventory-reducer"
import { getUserId } from "./user-reducer";
const SET_ACTIVE_PANEL = "APP/SET_ACTIVE_PANEL"
const SET_ACTIVE_MODAL = "APP/SET_ACTIVE_MODAL"

export const MODAL_PAGE_DEFENSE_INFO = "APP/MODAL_PAGE_DEFENSE_INFO"


let init = {
    activePanel:"base",
    activeModal:null,
    modalWindow:{}
};

export const appReducer = (state = init, action) => {
    switch (action.type) {
        case SET_ACTIVE_PANEL:
            return{
                ...state,
                activePanel:action.active,
            }
        case SET_ACTIVE_MODAL:
            return{
                ...state,
                activeModal:action.active,
            }
        default:
            return state
    }
};


export const setActivePanel = (active) => {
    return {
        type:SET_ACTIVE_PANEL,
        active,
    };
};

export const setActiveModal = (active) => {
    return {
        type:SET_ACTIVE_MODAL,
        active,
    }
    
}

export const go = e => (dispatch) => {
    dispatch(setActivePanel(e.currentTarget.dataset.to))
    
};

export const modalGo = (modal,userId = null) => (dispatch) => {
    if(modal == null){
        dispatch(setActiveModal(null))
        firebaseAPI.updateClearUnseen(userId)
        return
    }
    dispatch(setActiveModal(modal))
    
}
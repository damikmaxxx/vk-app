import { firebaseAPI, DB_USER_MONEY,DB_USER_ROCKET,DB_USER_HOUSE,DB_USER_PEOPLE,DB_USER_FOOD  } from "../api/api";
import { CHANGE_MONEY,CHANGE_HOUSE,CHANGE_PEOPLE,CHANGE_ROCKET } from './inventory-reducer';
import {changeInventory,setInventory} from "./inventory-reducer"
import { getUserId, setUnseenInfo } from "./user-reducer";
import {MODAL_PAGE_DEFENSE_INFO,modalGo} from "./app-reducer";

const SET_INIT_SUCCESS = "AUTH/SET_INIT_SUCCESS"
const SET_ACCESS_TOKEN = "AUTH/SET_ACCESS_TOKEN"
export const INIT_DATE = {
    money:1000,
    house:2,
    people:5,
    rocket:5,
    food:100,
}
let init = {
    init:false,
    accessToken:null,
};

export const authReducer = (state = init, action) => {
    switch (action.type) {
        case SET_INIT_SUCCESS:
            return{
                ...state,
                init:true,
            }
        case SET_ACCESS_TOKEN:
            return{
                ...state,
                accessToken:action.token,
            }
        default:
            return state
    }
};


export const setInitSuccess = (func = null) => {
    return {
      type:SET_INIT_SUCCESS,
    };
};
export const setAccessToken = (token) => {
    return {
      type:SET_ACCESS_TOKEN,
      token,
    };
};

export const  getDbInventory =  (userId) => async (dispatch) =>  {
    await firebaseAPI.getUserInventory(userId).then((snapshot) => { 
        let val = snapshot.val() 
        if (!val){
            dispatch(setInventory(INIT_DATE))
            return
        } 

        Object.keys(INIT_DATE).forEach(key => {
            if((key in val) == false){
                val[key] = INIT_DATE[key]
            }
                
        })
        dispatch(setInventory(val))
        return
    })
};
export const  setDbInventory =  (userId,inventory) => async (dispatch) =>  {
    await firebaseAPI.updateFullUser(userId,{
        [DB_USER_MONEY]:inventory.money,
        [DB_USER_ROCKET]:inventory.rocket,
        [DB_USER_HOUSE]:inventory.house,
        [DB_USER_PEOPLE]:inventory.people,
        [DB_USER_FOOD]:inventory.food,
    })
};


export const  getBdUnseenInfo =  (userId) => async (dispatch) =>  {
    await firebaseAPI.getUnseenInfo(userId).then((snapshot) => { 
        let val = snapshot.val() 
        if (!val){
            console.log("?????????????????????? ??????")
            dispatch(setUnseenInfo(null))
            return
        } 
        dispatch(setUnseenInfo(val))
        if(val.defend){
            dispatch(modalGo(MODAL_PAGE_DEFENSE_INFO))
        }
        return
    })
};

export const  listensFunc =  (val) => async (dispatch) =>  {
    dispatch(setInventory(val.inventory))
    dispatch(setUnseenInfo(val.unseenInfo || null))
    if(val.unseenInfo){
        dispatch(modalGo(MODAL_PAGE_DEFENSE_INFO))
    }
};
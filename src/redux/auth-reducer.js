import { firebaseAPI, DB_USER_MONEY,DB_USER_ROKET,DB_USER_HOUSE,DB_USER_PEOPLE,DB_USER_FOOD  } from "../api/api";
import { CHANGE_MONEY,CHANGE_HOUSE,CHANGE_PEOPLE,CHANGE_ROKET } from './inventory-reducer';
import {changeInventory,setInventory} from "./inventory-reducer"
import { getUserId } from "./user-reducer";
const SET_INIT_SUCCESS = "AUTH/SET_INIT_SUCCESS"
const SET_ACCESS_TOKEN = "AUTH/SET_ACCESS_TOKEN"
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

export const  getDbInventory =  (user) => async (dispatch) =>  {
    await firebaseAPI.getUser(user.id).then((snapshot) => { 
        let val = snapshot.val() 
        let initDate = {
            money:1000,
            house:2,
            people:5,
            roket:5,
            food:100,
        }

        if (!val){
            dispatch(setInventory(initDate))
            return
        } 
        Object.keys(initDate).forEach(key => {
            if((key in val) == false){
                val[key] = initDate[key]
            }
                
        })
        dispatch(setInventory(val))
        return
    })
};
export const  setDbInventory =  (user,inventory) => async (dispatch) =>  {
    await firebaseAPI.updateFullUser(user.id,{
        [DB_USER_MONEY]:inventory.money,
        [DB_USER_ROKET]:inventory.roket,
        [DB_USER_HOUSE]:inventory.house,
        [DB_USER_PEOPLE]:inventory.people,
        [DB_USER_FOOD]:inventory.food,
    })
};
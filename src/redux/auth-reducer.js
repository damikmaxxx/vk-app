import { firebaseAPI } from "../api/api";
import { CHANGE_MONEY,CHANGE_HOUSE,CHANGE_PEOPLE,CHANGE_ROKET } from './inventory-reducer';
import {changeInventory} from "./inventory-reducer"

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


export const setInitSuccess = () => {
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
        if (!val) return
        Object.keys(val).map(key => {
            switch(key){
                case "money":
                    dispatch(changeInventory(CHANGE_MONEY,val.money,"set"))
                    break
                case "roket":
                    dispatch(changeInventory(CHANGE_ROKET,val.roket,"set"))
                    break
                case "house":
                    dispatch(changeInventory(CHANGE_HOUSE,val.house,"set"))
                    break
                case "people":
                    dispatch(changeInventory(CHANGE_PEOPLE,val.people,"set"))
                    break    
            }
            
        })
        return
    })
};
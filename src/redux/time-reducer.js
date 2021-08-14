import { firebaseAPI, DB_USER_MONEY,DB_USER_ROCKET,DB_USER_HOUSE,DB_USER_PEOPLE,DB_USER_FOOD  } from "../api/api";
const SET_ENTRY= "TIME/SET_ENTRY"
const SET_OLD_ENTRY= "TIMESET_OLD_ENTRY"
const SET_TIMER= "TIME/SET_TIMER"

let init = {
    entry:null,
    oldEntry:null,
    timer:null,
    startTimer:null,
};

export const timeReducer = (state = init, action) => {
    switch (action.type) {
        case SET_ENTRY:
            return{
                ...state,
                entry:action.time
            }
        case SET_OLD_ENTRY:
            return{
                ...state,
                oldEntry:action.time
            }
        case SET_TIMER:
            return{
                ...state,
                timer:action.time
            }
        default:
            return state
    }
};
export const setEntry = (time) => {
    return {
        type:SET_ENTRY,
        time,
    };
};
export const setOldEntry = (time) => {
    return {
        type:SET_OLD_ENTRY,
        time,
    };
};
export const setTimer = (time) => {
    return {
        type:SET_TIMER,
        time,
    };
};
export const getServerTime = () => async (dispatch) => {
    let serverTime = 0
    await firebaseAPI.getServerTime().on('value', function(offset) {
        const offsetVal = offset.val() || 0;
        serverTime = Date.now() + offsetVal;
        dispatch(setEntry(serverTime))
    });
    
    // dispatch(setBDEntryTime(serverTime))
};

export const getBDTimeUser = (user) => async (dispatch) => {
    await firebaseAPI.getTimeUserBD(user.id).then((snapshot) => {
        let val = snapshot.val() 
        if(!val) return

        dispatch(setOldEntry(val.entry))
        
    })
    
};

export const CHANGE_MONEY = "INVENTORY/CHANGE_MONEY"
export const CHANGE_HOUSE = "INVENTORY/CHANGE_HOUSE"
export const CHANGE_PEOPLE = "INVENTORY/CHANGE_PEOPLE"
export const CHANGE_ROKET = "INVENTORY/CHANGE_ROKET"
export const SET_INVENTORY = "INVENTORY/SET_INVENTORY"
let init = {
    money:0,
    house:0,
    people:0,
    roket:0,
};

export const inventoryReducer = (state = init, action) => {
    switch (action.type) {
        case CHANGE_MONEY:
            return {
                ...state,
                money:state.money + action.change,
            }
        case CHANGE_HOUSE:
            return {
                ...state,
                house:state.house + action.change,
            }
        case CHANGE_PEOPLE:
            return {
                ...state,
                people:state.people + action.change,
            }
        case CHANGE_ROKET:
            return {
                ...state,
                roket:state.roket + action.change,
            }
        case SET_INVENTORY:
            return action.setInventory
        default:
            return state
    }
};

export const changeMoney = (change) => {
    return {
        type: CHANGE_MONEY,
        change,
    };
};
export const changeHouse = (change) => {
    return {
        type: CHANGE_HOUSE,
        change,
    };
};
export const changePeople = (change) => {
    return {
        type: CHANGE_PEOPLE,
        change,
    };
};
export const changeRoket = (change) => {
    return {
        type: CHANGE_ROKET,
        change,
    };
};

export const changeInventory = (type,num) => {
    let func = ""
    switch (type){
        case CHANGE_MONEY:
           func = changeMoney
           break
        case CHANGE_HOUSE:
            func = changeHouse
            break
        case CHANGE_PEOPLE:
            func = changePeople
            break
        case CHANGE_ROKET:
            func = changeRoket
            break
        default:
            break 
    }
    return (dispatch) => {
        dispatch(func(num))
    }
}

export const setInventory = (set) => {
    return {
        type: SET_INVENTORY,
        setInventory:set,
    };
};
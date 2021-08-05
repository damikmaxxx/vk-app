import { applyMiddleware, combineReducers, createStore } from "redux";
import { inventoryReducer } from "./inventory-reducer";
import { userReducer } from "./user-reducer";
import thunkMiddleware from "redux-thunk"
import { authReducer } from "./auth-reducer";
import { timeReducer } from "./time-reducer";
import { appReducer } from "./app-reducer";
let reducers = combineReducers({
    myInventory:inventoryReducer,
    usersInfo:userReducer,
    auth:authReducer,
    time:timeReducer,
    appPage:appReducer,
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store
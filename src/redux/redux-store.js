import { applyMiddleware, combineReducers, createStore } from "redux";
import { inventoryReducer } from "./inventory-reducer";
import { userReducer } from "./user-reducer";
import thunkMiddleware from "redux-thunk"
import { authReducer } from "./auth-reducer";


let reducers = combineReducers({
    inventoryPage:inventoryReducer,
    usersInfo:userReducer,
    auth:authReducer,
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store
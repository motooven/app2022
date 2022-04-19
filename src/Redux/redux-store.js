import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./userReducer";







const reducers = combineReducers({
    profile: profileReducer,
    dialog: dialogReducer,
    usersPage: usersReducer,
})


const store = createStore(reducers)
window.store = store
export default store





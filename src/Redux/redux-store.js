import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";


const reducers = combineReducers({
    profile: profileReducer,
    dialog: dialogReducer,
})


const store = createStore(reducers)
window.store = store
export default store






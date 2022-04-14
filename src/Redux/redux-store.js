import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";


const reducers = combineReducers({
    profile: profileReducer,
    dialog: dialogReducer,
})


const Store = createStore(reducers)

export default Store
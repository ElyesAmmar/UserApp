import {combineReducers} from "redux"
import { userReducer} from "./userReducer"
import { addReducer } from "./addReducer";

const rootReducer = combineReducers({userReducer,addReducer});


export default rootReducer;
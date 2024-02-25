import { combineReducers } from "@reduxjs/toolkit";
import { reducer as authReducer} from "../slices/auth"


export const rootReducer =combineReducers({
    auth:authReducer
    
})
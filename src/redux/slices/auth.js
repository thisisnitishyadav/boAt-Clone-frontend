import { createSlice } from "@reduxjs/toolkit"
import { authApi } from "../../mocks/auth";

const initialState={
    user:{}
}

const slice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        getUser(state,action){
            console.log(action.payload)
          state.user = {...action.payload.data}
         },
         logoutUser(state,action){
            state.user = {}
         }
    }
})


export const {reducer} = slice;


export const register = (data)=> async (dispatch)=>{
try {
    const result = await authApi.signup(data)
    console.log(result);
    if(result.data.status  === "SUCCESS"){
        return result.data
    }else{
        return false
    }
} catch (error) {
   console.log(error); 
}
}

export const login =(data) => async (dispatch) =>{
    try {
        const result = await authApi.login(data);
        if (result){
            // localStorage.setItem("accessToken",result.data.token)
            return result.data;
        }
        return false
    } catch (e) {
        console.log(e);
    }
}

export const getUser = ()=> async (dispatch)=>{
    try {
        const result = await authApi.getUser()
        console.log(result)
        if(result){
          await dispatch(slice.actions.getUser(result.data))
        }else{
            return false
        }
    } catch (error) {
       console.log(error); 
    }
    }

    export const logout = () => async(dispatch) =>{
        console.log('logout')
        await dispatch(slice.actions.logoutUser())
        return true;
    }

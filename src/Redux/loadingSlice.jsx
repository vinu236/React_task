import {createSlice} from "@reduxjs/toolkit"

const loadingSlice=createSlice({
    name:"users",
    initialState:false,
    reducers:{
        setLoading:(state,action)=>{
            console.log(action)
            return action.payload
        }
    }
})

// console.log(usersSlice)
export const{setLoading}=loadingSlice.actions;
export default loadingSlice.reducer;

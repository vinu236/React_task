import {createSlice} from "@reduxjs/toolkit"

const usersSlice=createSlice({
    name:"users",
    initialState:[],
    reducers:{
        setUsersData:(state,action)=>{
            console.log(action)
            return action.payload
        }
    }
})

console.log(usersSlice)
export const{setUsersData}=usersSlice.actions;
export default usersSlice.reducer;

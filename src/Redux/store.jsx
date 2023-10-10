import { configureStore } from "@reduxjs/toolkit";
import usersDataSlice from "./usersDataSlice";
import loadingSlice from "./loadingSlice";



const store=configureStore({
    reducer:{
        usersData:usersDataSlice,
        loading:loadingSlice
        
    }
})


export default store
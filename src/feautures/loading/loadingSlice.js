import { createSlice } from '@reduxjs/toolkit'


const initialState={
    isLoading:false
}

const loadingSlice =createSlice({
    name:"loading",
    initialState,
    reducers:{
        activeLoading:state=>{
            state.isLoading=true
        },
        deActiveLoaing:state=>{
            state.isLoading=false
        }
    }
})

export default loadingSlice.reducer
export const {activeLoading , deActiveLoaing}=loadingSlice.actions
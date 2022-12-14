import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    project: {}
};

export const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
       getProject:(state,action)=>{
           state.project = action.payload
       }

    },

});

export const {getProject} = projectSlice.actions;

export default projectSlice.reducer;
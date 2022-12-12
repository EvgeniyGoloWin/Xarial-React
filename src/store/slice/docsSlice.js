import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    docs: []
};

export const docsSlice = createSlice({
    name: "docs",
    initialState,
    reducers: {


    },

});

export const {} = docsSlice.actions;

export default docsSlice.reducer;
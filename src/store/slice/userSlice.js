import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    user: {
        email: '',
        role: ''
    }
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user.email = action.payload.email
            state.user.role = action.payload.role
        }
    },

});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
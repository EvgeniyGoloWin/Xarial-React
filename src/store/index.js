import {configureStore} from '@reduxjs/toolkit'
import userSlice from "./slice/userSlice";
import projectSlice from "./slice/projectSliceSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        project: projectSlice
    },
})
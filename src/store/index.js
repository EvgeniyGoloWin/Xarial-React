import {configureStore} from '@reduxjs/toolkit'
import userSlice from "./slice/userSlice";
import docsSlice from "./slice/docsSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        docs: docsSlice
    },
})
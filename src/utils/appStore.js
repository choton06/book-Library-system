
import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./BookSlice"

const appstore =configureStore({
    reducer:{
        book : BookReducer
    }
})

export default appstore;
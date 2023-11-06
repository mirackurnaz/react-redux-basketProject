import { configureStore } from "@reduxjs/toolkit";
import CartReducerState from "./Redux/CartSlice"

export const store=configureStore({
    reducer:{
        cart:CartReducerState
    },
})
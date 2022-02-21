import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import counterSlice from "./counterSlice";

export default configureStore(
    {
        reducer:{
            todoSlice,
            counterSlice
        }
    }
)
import { configureStore } from "@reduxjs/toolkit";
import auth from "./UserSlice";

export const store = configureStore({
reducer:{
    user:auth
}
})
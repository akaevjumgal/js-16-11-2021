import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import postCrutSlice from "./PostCRUT/postCrutSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts : postCrutSlice,
  }
})
import { configureStore } from "@reduxjs/toolkit";
import { TodosSlice } from "../component/features/Product/TodosSlice";
import productSlice from './../component/features/Product/productSlice';


export const store = configureStore({
    reducer: {
    productSlice

    }
})
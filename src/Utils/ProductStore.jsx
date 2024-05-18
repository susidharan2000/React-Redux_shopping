import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSilce";

export const productStore = configureStore({
    reducer:{
        prodReducer:ProductReducer
    }
});
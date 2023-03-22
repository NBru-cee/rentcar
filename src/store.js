import rentReducer from "./features/Rent/rentSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        rent: rentReducer,
    },
});

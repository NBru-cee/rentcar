import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    rentCars: [],
    amount: 0,
    total: 0,
    isLoading: true,
};

const rentSlice = createSlice({
    name: "rent",
    initialState,
    reducers: {
        clearList: (state) => {
            state.rentCars = [];
        },
    },
});

export const { clearList } = rentSlice.actions;
export default rentSlice.reducer;

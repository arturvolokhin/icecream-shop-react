import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isActive: false,
    },
    reducers: {
        toggleCart: (state, { payload }) => {
            state.isActive = payload;
        },
    },
});

export const { toggleCart } = cartSlice.actions;
export default cartSlice.reducer; 
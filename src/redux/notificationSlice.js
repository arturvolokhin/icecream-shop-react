import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        isActive: false,
    },
    reducers: {
        toggleNotification: (state, { payload }) => {
            state.isActive = payload;
        },
    },
});

export const { toggleNotification } = notificationSlice.actions;
export default notificationSlice.reducer;

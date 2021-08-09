import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "./presetData";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        value: "",
        foundProducts: [],
    },
    reducers: {
        startSearch: (state, { payload }) => {
            let result = [];

            productsData.forEach((product) => {
                const find = product.description
                    .toLowerCase()
                    .indexOf(payload.toLowerCase());
                find !== -1 && result.push(product);
            });
            state.foundProducts = Array.from(new Set(result));
        },

        clearFoundProducts: (state) => {
            state.foundProducts.length = 0;
        },
    },
});

export const { startSearch, clearFoundProducts } = searchSlice.actions;
export default searchSlice.reducer;

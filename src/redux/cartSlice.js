import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "./presetData";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isActive: false,
        cartProducts: [],
    },
    reducers: {
        toggleCart: (state, { payload }) => {
            state.isActive = payload;
        },

        addProductToCart: ({ cartProducts }, { payload }) => {
            const product = productsData.find(
                (product) => product.name === payload
            );
            const index = cartProducts.findIndex(
                (item) => item.name === product.name
            );
            index != -1
                ? cartProducts[index].quantity++
                : cartProducts.push(product);
        },

        increaseProductQuantity: ({ cartProducts }, { payload }) => {
            cartProducts.forEach((product) => {
                product.name === payload && product.quantity < 99 &&
                product.quantity++;
            });
        },

        decreaseProductQuantity: ({ cartProducts }, { payload }) => {
            cartProducts.forEach((product) => {
                product.name === payload && product.quantity > 1 && 
                product.quantity--;
            });
        },

        removeProduct: ({cartProducts}, {payload}) => {
            const index = cartProducts.findIndex(product => product.name === payload);
            cartProducts.splice(index, 1);
        }
    },
});

export const {
    toggleCart,
    addProductToCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProduct,
} = cartSlice.actions;
export default cartSlice.reducer;

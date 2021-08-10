import { createSlice } from "@reduxjs/toolkit";
import { productsData, bestsellersData } from "./presetData";

export const productsSlice = createSlice({
    name: "products",

    initialState: {
        productsData: productsData,
        renderProductsData: productsData,
        bestsellersData: bestsellersData,
    },

    reducers: {
        filterProducts: (state, { payload }) => {
            const { category, cost, fat, fillers } = payload;

            let primaryFiltering = state.productsData.filter((product) => {
                return product.price >= cost[0] && product.price <= cost[1];
            });

            switch (category) {
                case "Популярные":
                    primaryFiltering.sort(
                        (a, b) => b.popularity - a.popularity
                    );
                    break;
                case "Дешёвые":
                    primaryFiltering.sort((a, b) => a.price - b.price);
                    break;
                case "Дорогие":
                    primaryFiltering.sort((a, b) => b.price - a.price);
                    break;
                default:
                    break;
            }

            if (fat !== null) {
                fat === 100
                    ? (primaryFiltering = primaryFiltering.filter(
                          (product) => product.fat > 30
                      ))
                    : (primaryFiltering = primaryFiltering.filter(
                          (product) => product.fat <= fat
                      ));
            }

            let finalFiltering = [];

            fillers.forEach(() => {
                primaryFiltering.forEach((item) => {
                    if (!Array.isArray(item.fillers)) {
                        fillers.includes(item.fillers) &&
                            finalFiltering.push(item);
                    } else {
                        item.fillers.forEach((filler) => {
                            const value = fillers.find(
                                (item) => filler === item
                            );
                            value && finalFiltering.push(item);
                        });
                    }
                });
                primaryFiltering = Array.from(new Set(finalFiltering));
            });
            state.renderProductsData = primaryFiltering;
        },
    },
});

export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer;

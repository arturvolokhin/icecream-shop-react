import { createSlice } from "@reduxjs/toolkit";

import orange from "../images/products/orange.png";
import coffee from "../images/products/coffee.png";
import strawberry from "../images/products/strawberry.png";
import cremebrulle from "../images/products/cremebrule.png";

import blueberry from "../images/products/blueberry.png";
import creamyChocolate from "../images/products/creamy-chocolate.png";
import darkChocolate from "../images/products/dark-сhocolate.png";
import lemon from "../images/products/lemon.png";

import lingonberryJam from "../images/products/lingonberry-jam.png";
import menthol from "../images/products/menthol.png";
import mintSyrup from "../images/products/mint-syrup.png";
import vanillaChocolate from "../images/products/vanilla-chocolate.png";


const productsData = [
    {
        price: 310,
        image: orange,
        description: "Сливочное с апельсиновым джемом и цитрусовой стружкой",
        popularity: 1,
        fat: 10,
        fillers: ["fruit", "jam"],
    },

    {
        price: 380,
        image: coffee,
        description: "Сливочно-кофейное с кусочками шоколада",
        popularity: 11,
        fat: 100,
        fillers: "chocolate",
    },

    {
        price: 355,
        image: strawberry,
        description: "Сливочно-клубничное с присыпкой из белого шоколада",
        popularity: 2,
        fat: 10,
        fillers: ["fruit", "chocolate"],
    },

    {
        price: 415,
        image: cremebrulle,
        description: "Сливочное крем-брюле с карамельной подливкой",
        popularity: 9,
        fat: 100,
        fillers: "syrup",
    },

    {
        price: 325,
        image: lingonberryJam,
        description: "Сливочное с брусничным джемом",
        popularity: 6,
        fat: 10,
        fillers: "jam",
    },

    {
        price: 410,
        image: blueberry,
        description: "Сливочно-черничное с цельными ягодами черники",
        popularity: 8,
        fat: 10,
        fillers: "fruit",
    },

    {
        price: 375,
        image: lemon,
        description: "Сливочно-лимонное с карамельной присыпкой",
        popularity: 3,
        fat: 0,
        fillers: ["fruit", "powder"],
    },

    {
        price: 320,
        image: creamyChocolate,
        description: "Сливочное с шоколадной стружкой",
        popularity: 15,
        fat: 100,
        fillers: "chocolate",
    },

    {
        price: 440,
        image: vanillaChocolate,
        description: "Сливочно-ванильное с кусочками шоколада",
        popularity: 14,
        fat: 100,
        fillers: "chocolate",
    },

    {
        price: 435,
        image: menthol,
        description: "Сливочноe с ментоловым сиропом",
        popularity: 12,
        fat: 30,
        fillers: "syrup",
    },

    {
        price: 355,
        image: darkChocolate,
        description: "Сливочное с кусочками черного шоколада",
        popularity: 2,
        fat: 30,
        fillers: "chocolate",
    },

    {
        price: 420,
        image: mintSyrup,
        description: "Сливочное с мятным сиропом",
        popularity: 8,
        fat: 0,
        fillers: "syrup",
    },
];

const bestsellersData = [
    {
        price: 310,
        image: orange,
        description: "Сливочное с апельсиновым джемом и цитрусовой стружкой",
    },

    {
        price: 380,
        image: coffee,
        description: "Сливочно-кофейное с кусочками шоколада",
    },

    {
        price: 355,
        image: strawberry,
        description: "Сливочно-клубничное с присыпкой из белого шоколада",
    },

    {
        price: 415,
        image: cremebrulle,
        description: "Сливочное крем-брюле с карамельной подливкой",
    },
];

export const presetSlice = createSlice({
    name: "preset",

    initialState: {
        productsData: productsData,

        renderProductsData: productsData,

        bestsellersData: bestsellersData,
    },

    reducers: {
        filterProducts: (state, { payload }) => {
            const { category, cost, fat, fillers } = payload;

            let filterCost = state.productsData.filter(product => {
                return product.price >= cost[0] && product.price <= cost[1]
            }); 
            
            if (category === 'Популярные') {
                filterCost.sort((a, b) => b.popularity-a.popularity)
            }

            if (category === 'Дешёвые') {
                filterCost.sort((a, b) => a.price-b.price)
            }

            if (category === 'Дорогие') {
                filterCost.sort((a, b) => b.price-a.price)
            }

            if (fat !== null) {
                fat === 100 ? filterCost = filterCost.filter(product => product.fat > 30) :
                filterCost = filterCost.filter(product => product.fat <= fat);
            }

            for (let i = 0; i < fillers.length; i++) {
                const array = [];
                for (let j = 0; j < filterCost.length; j++) {
                    if (!Array.isArray(filterCost[j].fillers)) {
                        fillers.includes(filterCost[j].fillers) &&
                        array.push(filterCost[j]);
                    } else {
                        filterCost[j].fillers.forEach(filler => {
                            const value = fillers.find(item => filler === item);
                            value && array.push(filterCost[j]);
                        })
                    }
                }
                const unique = (arr) => Array.from(new Set(arr))
                filterCost = unique(array);
            }

            state.renderProductsData = filterCost;

        },
    },
});

export const { filterProducts } = presetSlice.actions;
export default presetSlice.reducer;

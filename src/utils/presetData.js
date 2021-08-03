import { setLocalStorage } from "./localStorage";

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

const productsData = [
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

    {
        price: 325,
        image: lingonberryJam,
        description: "Сливочное с брусничным джемом",
    },

    {
        price: 410,
        image: blueberry,
        description: "Сливочно-черничное с цельными ягодами черники",
    },

    {
        price: 375,
        image: lemon,
        description: "Сливочно-лимонное с карамельной присыпкой",
    },

    {
        price: 320,
        image: creamyChocolate,
        description: "Сливочное с шоколадной стружкой",
    },

    {
        price: 440,
        image: vanillaChocolate,
        description: "Сливочно-ванильное с кусочками шоколада",
    },

    {
        price: 435,
        image: menthol,
        description: "Сливочноe с ментоловым сиропом",
    },

    {
        price: 355,
        image: darkChocolate,
        description: "Сливочное с кусочками черного шоколада",
    },

    {
        price: 420,
        image: mintSyrup,
        description: "Сливочное с мятным сиропом",
    },
];

export const presetData = () => {
    setLocalStorage("bestsellers", bestsellersData);
    setLocalStorage("products", productsData);
};

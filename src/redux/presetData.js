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

export const productsData = [
    {
        price: 310,
        image: orange,
        name: 'orange',
        description: "Сливочное с апельсиновым джемом и цитрусовой стружкой",
        popularity: 1,
        fat: 10,
        fillers: ["fruit", "jam"],
        quantity: 1,
    },

    {
        price: 380,
        image: coffee,
        name: 'coffee',
        description: "Сливочно-кофейное с кусочками шоколада",
        popularity: 11,
        fat: 100,
        fillers: "chocolate",
        quantity: 1,
    },

    {
        price: 355,
        image: strawberry,
        name: 'strawberry',
        description: "Сливочно-клубничное с присыпкой из белого шоколада",
        popularity: 2,
        fat: 10,
        fillers: ["fruit", "chocolate"],
        quantity: 1,
    },

    {
        price: 415,
        image: cremebrulle,
        name: 'cremebrulle',
        description: "Сливочное крем-брюле с карамельной подливкой",
        popularity: 9,
        fat: 100,
        fillers: "syrup",
        quantity: 1,
    },

    {
        price: 325,
        image: lingonberryJam,
        name: 'lingonberryJam',
        description: "Сливочное с брусничным джемом",
        popularity: 6,
        fat: 10,
        fillers: "jam",
        quantity: 1,
    },

    {
        price: 410,
        image: blueberry,
        name: 'blueberry',
        description: "Сливочно-черничное с цельными ягодами черники",
        popularity: 8,
        fat: 10,
        fillers: "fruit",
        quantity: 1,
    },

    {
        price: 375,
        image: lemon,
        name: 'lemon',
        description: "Сливочно-лимонное с карамельной присыпкой",
        popularity: 3,
        fat: 0,
        fillers: ["fruit", "powder"],
        quantity: 1,
    },

    {
        price: 320,
        image: creamyChocolate,
        name: 'creamyChocolate',
        description: "Сливочное с шоколадной стружкой",
        popularity: 15,
        fat: 100,
        fillers: "chocolate",
        quantity: 1,
    },

    {
        price: 440,
        image: vanillaChocolate,
        name: 'vanillaChocolate',
        description: "Сливочно-ванильное с кусочками шоколада",
        popularity: 14,
        fat: 100,
        fillers: "chocolate",
        quantity: 1,
    },

    {
        price: 435,
        image: menthol,
        name: 'menthol',
        description: "Сливочноe с ментоловым сиропом",
        popularity: 12,
        fat: 30,
        fillers: "syrup",
        quantity: 1,
    },

    {
        price: 355,
        image: darkChocolate,
        name: 'darkChocolate',
        description: "Сливочное с кусочками черного шоколада",
        popularity: 2,
        fat: 30,
        fillers: "chocolate",
        quantity: 1,
    },
    
    {
        price: 420,
        image: mintSyrup,
        name: 'mintSyrup',
        description: "Сливочное с мятным сиропом",
        popularity: 8,
        fat: 0,
        fillers: "syrup",
        quantity: 1,
    },
];

export const bestsellersData = [
    {
        price: 310,
        image: orange,
        name: 'orange',
        description: "Сливочное с апельсиновым джемом и цитрусовой стружкой",
    },

    {
        price: 380,
        image: coffee,
        name: 'coffee',
        description: "Сливочно-кофейное с кусочками шоколада",
    },

    {
        price: 355,
        image: strawberry,
        name: 'strawberry',
        description: "Сливочно-клубничное с присыпкой из белого шоколада",
    },

    {
        price: 415,
        image: 'cremebrulle',
        description: "Сливочное крем-брюле с карамельной подливкой",
    },
];
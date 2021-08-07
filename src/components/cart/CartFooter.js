import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../Button";

const CartFooter = () => {

    const cartProducts = useSelector(({cart}) => cart.cartProducts);
    const [cost, setCost] = useState(0);

    useEffect(() => {
        if (cartProducts.length !== 0) {
            let cost = [];
            cartProducts.forEach(product => cost.push(product.price));
            const price = cost.reduce((acc, item) => acc += item);
            setCost(price);
        }
    }, [cartProducts])

    return (
        <footer className="cart__footer">
            <p className="cart__footer-text">
                К оплате: <span className="cart__footer-cost">{cost}</span>
            </p>
            <Button text="Оформить заказ" classes="cart__button" />
        </footer>
    );
};

export default CartFooter;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../Button";

const CartFooter = () => {
    const cartProducts = useSelector(({ cart }) => cart.cartProducts);
    const [cost, setCost] = useState(0);

    useEffect(() => {
        let cost = cartProducts.map(
            (product) => product.price * product.quantity
        );
        setCost(cost.reduce((acc, item) => (acc += item), 0));
    }, [cartProducts]);

    return (
        <footer className="cart__footer">
            <p className="cart__footer-text">
                К оплате: <span className="cart__footer-cost">{cost}р</span>
            </p>
            <Button text="Оформить заказ" classes="cart__button" />
        </footer>
    );
};

export default CartFooter;

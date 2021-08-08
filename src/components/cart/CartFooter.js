import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../Button";
import FormOrdering from "./FormOrdering";

const CartFooter = () => {
    const cartProducts = useSelector(({ cart }) => cart.cartProducts);
    const [cost, setCost] = useState(0);
    const [userForm, setUserForm] = useState(false);

    useEffect(() => {
        let cost = cartProducts.map(
            (product) => product.price * product.quantity
        );
        setCost(cost.reduce((acc, item) => (acc += item), 0));
    }, [cartProducts]);

    const handleClick = (e) => {
        console.log(e.target);
        console.log(userForm);
        setUserForm(!userForm);
    };

    const handleSubmit = () => {
        console.log("Отправлено");
        setUserForm(!userForm);
    };

    return (
        <footer className="cart__footer">
            <div className="cart__footer-ordering">
                <p className="cart__footer-text">
                    К оплате: <span className="cart__footer-cost">{cost}р</span>
                </p>
                {!userForm && (
                    <Button
                        classes="cart__button"
                        text="Оформить заказ"
                        handleClick={handleClick}
                    />
                )}
            </div>
            {userForm && <FormOrdering />}
        </footer>
    );
};

export default CartFooter;

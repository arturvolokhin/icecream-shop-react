import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";

const Cart = () => {
    const dispatch = useDispatch();
    let active = useSelector(({cart}) => cart.isActive);

    return (
        active &&
        <div className="cart">
            <CartHeader active={active} dispatch={dispatch} />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartFooter />
        </div>
    );
};

export default Cart;

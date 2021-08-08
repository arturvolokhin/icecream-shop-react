import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";

const Cart = () => {
    const dispatch = useDispatch();
    const active = useSelector(({ cart }) => cart.isActive);
    const cartProductsData = useSelector(({ cart }) => cart.cartProducts);

    return (
        active && (
            <div className="cart">
                <CartHeader active={active} dispatch={dispatch} />
                {cartProductsData.length !== 0
                    ? cartProductsData.map((product, index) => {
                          return (
                              <CartItem
                                  key={index}
                                  image={product.image}
                                  description={product.description}
                                  price={product.price}
                                  quantity={product.quantity}
                                  name={product.name}
                                  dispatch={dispatch}
                              />
                          );
                      })
                    : <p className="cart__notification">В корзине нет продуктов</p>}
                <CartFooter />
            </div>
        )
    );
};

export default Cart;

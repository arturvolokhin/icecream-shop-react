import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../redux/cartSlice";

const Buttons = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(({ cart }) => cart.cartProducts);
    const [cost, setCost] = useState(0);

    useEffect(() => {
        let cost = cartProducts.map(
            (product) => product.price * product.quantity
        );
        setCost(cost.reduce((acc, item) => (acc += item), 0) + "р");
    }, [cartProducts]);

    const handleClick = () => {
        dispatch(toggleCart(true));
    };

    return (
        <div className="header__buttons">
            <input className="header__search" />
            <button className="header__login">Вход</button>
            <button className="header__cart" onClick={handleClick}>
                {cost != "0р" ? cost : "Пусто"}
            </button>
        </div>
    );
};

export default Buttons;

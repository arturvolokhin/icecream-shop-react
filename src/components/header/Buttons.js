import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../redux/cartSlice";
import Button from "../Button";
import Search from "./Search";

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

    const handleToggleCart = () => {
        dispatch(toggleCart(true));
    };

    return (
        <div className="header__buttons">
            <Search dispatch={dispatch} />
            <Button
                classes="header__cart"
                handleClick={handleToggleCart}
                text={cost !== "0р" ? cost : "Пусто"}
            />
        </div>
    );
};

export default Buttons;

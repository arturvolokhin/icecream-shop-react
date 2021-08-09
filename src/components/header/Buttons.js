import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../redux/cartSlice";
import { startSearch, clearFoundProducts } from "../../redux/searchSlice";
import Search from "./Search";

const Buttons = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(({ cart }) => cart.cartProducts);
    const [cost, setCost] = useState(0);
    const [search, setSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        let cost = cartProducts.map(
            (product) => product.price * product.quantity
        );
        setCost(cost.reduce((acc, item) => (acc += item), 0) + "р");
    }, [cartProducts]);

    const handleToggleCart = () => {
        dispatch(toggleCart(true));
    };

    const handleToggleSearch = () => {
        !search && setSearch(!search);
    };

    const handleChange = ({ target }) => {
        target.value.length > 3 && dispatch(startSearch(target.value));
        setSearchValue(target.value);
    };

    const handleBlur = () => {
        if (!search) {
            setSearch(!search);
            setSearchValue("");
            dispatch(clearFoundProducts);
        }
    };

    return (
        <div className="header__buttons">
            <input
                className={
                    !search
                        ? "header__search"
                        : "header__search header__search-active"
                }
                onBlur={handleBlur}
                onClick={handleToggleSearch}
                onChange={handleChange}
                value={searchValue}
            />
            {search && <Search />}

            <button className="header__login">Вход</button>
            <button className="header__cart" onClick={handleToggleCart}>
                {cost !== "0р" ? cost : "Пусто"}
            </button>
        </div>
    );
};

export default Buttons;

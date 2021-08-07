import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../redux/cartSlice";

const Buttons = () => {
    const dispatch = useDispatch();
    const cartValue = useSelector(({cart}) => cart.cartProducts.length);

    const handleClick = () => {
        dispatch(toggleCart(true));
    };

    return (
        <div className="header__buttons">
            <input className="header__search" />
            <button className="header__login">Вход</button>
            <button className="header__cart" onClick={handleClick}>
                {cartValue ? cartValue : 'Пусто'}
            </button>
        </div>
    );
};

export default Buttons;

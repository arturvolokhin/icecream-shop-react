import { toggleCart, removeAllProducts } from "../../redux/cartSlice";
import Close from "../Close";

const CartHeader = ({ dispatch }) => {
    return (
        <header className="cart__header">
            <h2 className="cart__header-title">Корзина</h2>
            <div className="cart__header-actions">
                <button
                    className="cart__header-remove"
                    onClick={() => dispatch(removeAllProducts())}
                >
                    Очистить
                </button>
                <Close handleClick={() => dispatch(toggleCart(false))}/>
            </div>
        </header>
    );
};

export default CartHeader;

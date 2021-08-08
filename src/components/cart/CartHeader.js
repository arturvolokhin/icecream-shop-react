import { toggleCart, removeAllProducts } from "../../redux/cartSlice";

const CartHeader = ({ dispatch }) => {
    return (
        <header className="cart__header">
            <h2 className="cart__header-title">Корзина</h2>
            <div className="cart__header-actions">
                <button
                    className="cart__header-remove"
                    onClick={() => dispatch(removeAllProducts())}
                >
                    Очистить корзину
                </button>
                <div
                    className="cart__header-close"
                    onClick={() => dispatch(toggleCart(false))}
                ></div>
            </div>
        </header>
    );
};

export default CartHeader;

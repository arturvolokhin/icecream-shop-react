import { toggleCart } from "../../redux/cartSlice";

const CartHeader = ({ dispatch }) => {

    return (
        <header className="cart__header">
            <h2 className="cart__header-title">Корзина</h2>
            <div className="cart__close" onClick={() => dispatch(toggleCart(false))}></div>
        </header>
    );
};

export default CartHeader;

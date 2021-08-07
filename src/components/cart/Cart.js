import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";

const Cart = () => {
    return (
        <div className="cart">
            <CartHeader />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartFooter />
        </div>
    );
};

export default Cart;

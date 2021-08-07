import Button from "../Button";

const CartFooter = () => {
    return (
        <footer className="cart__footer">
            <p className="cart__footer-text">
                К оплате: <span className="cart__footer-cost">1045р</span>
            </p>
            <Button text="Оформить заказ" classes="cart__button" />
        </footer>
    );
};

export default CartFooter;
import {
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProduct,
} from "../../redux/cartSlice";

const CartItem = ({ image, description, price, quantity, name, dispatch }) => {
    return (
        <div className="cart__item">
            <div className="cart__content">
                <img
                    className="cart__item-image"
                    src={image}
                    width="50px"
                    alt="Изображение товара корзины"
                />
                <div className="cart__item-text">
                    <h3 className="cart__item-name">{description}</h3>
                    <p className="cart__item-cost">
                        Стоимость: {price}p/кг * {quantity} = {price * quantity}р
                    </p>
                </div>
            </div>
            <div className="cart__item-weight">
                <button
                    className="cart__item-button cart__item-button--increment"
                    onClick={() => dispatch(increaseProductQuantity(name))}
                />
                <p className="cart__item-value">{quantity}</p>
                <button
                    className="cart__item-button cart__item-button--decrement"
                    onClick={() => dispatch(decreaseProductQuantity(name))}
                />

                <div
                    className="cart__item-remove"
                    onClick={() => dispatch(removeProduct(name))}
                ></div>
            </div>
        </div>
    );
};

export default CartItem;

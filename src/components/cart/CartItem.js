import orange from "../../images/products/orange.png";

const CartItem = () => {
    return (
        <div className="cart__item">
            <img
                className="cart__item-image"
                src={orange}
                width="50px"
                alt="Изображение товара корзины"
            />
            <div className="cart__item-text">
                <h3 className="cart__item-name">
                    Сливочное с апельсиновым джемом и цитрусовой стружкой.
                </h3>
                <p className="cart__item-cost">Стоимость: 350p</p>
            </div>
            <div className="cart__item-weight">
                <button className="cart__item-button cart__item-button--increment" />
                <p className="cart__item-value">
                    1<span>кг</span>
                </p>
                <button className="cart__item-button cart__item-button--decrement" />
            </div>
        </div>
    );
};

export default CartItem;

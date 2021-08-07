import React from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cartSlice";

const ProductsItem = ({ price, image, description, name }) => {

    const dispatch = useDispatch();

    const handleClick = ({currentTarget}) => {
        dispatch(addProductToCart(currentTarget.id))
    }

    return (
        <div className="products__item" id={name} onClick={handleClick}>
            <img className="products__image" src={image} alt="products item" />
            <p className="products__price">
                {price} &#8381;<span>/кг</span>
            </p>
            <p className="products__description">{description}</p>
            <p className="products__item-hint">
                Кликните, чтобы добавить в корзину.
            </p>
        </div>
    );
};

export default ProductsItem;

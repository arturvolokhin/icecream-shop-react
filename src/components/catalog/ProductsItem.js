import React from "react";

const ProductsItem = ({ price, image, description }) => {
    return (
        <div className="products__item">
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

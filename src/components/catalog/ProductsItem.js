import React, { useState } from "react";

const ProductsItem = ({ price, image, description }) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="products__item"
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
        >
            <img className="products__image" src={image} alt="products item" />
            <p className="products__price">
                {price} &#8381;<span>/кг</span>
            </p>
            <p className="products__description">{description}</p>
            {hover && (
                <p className="products__item-hint">Кликните, чтобы добавить в корзину.</p>
            )}
        </div>
    );
};

export default ProductsItem;

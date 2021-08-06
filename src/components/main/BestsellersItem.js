const BestsellersItem = ({ price, image, description }) => {
    return (
        <div className="bestsellers__item">
            <img
                className="bestsellers__image"
                src={image}
                alt="bestseller item"
            />
            <p className="bestsellers__price">
                {price} &#8381;<span>/кг</span>
            </p>
            <p className="bestsellers__description">{description}</p>
        </div>
    );
};

export default BestsellersItem;
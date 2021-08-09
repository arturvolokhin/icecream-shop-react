import { addProductToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const SearchProduct = ({ image, description, name }) => {
    const dispatch = useDispatch();

    return (
        <li
            className="search__product"
            onClick={() => dispatch(addProductToCart(name))}
        >
            <img
                src={image}
                className="search__product-image"
                alt="Изображение найденного продукта"
            />
            <p className="search__product-description">{description}</p>
        </li>
    );
};

export default SearchProduct;

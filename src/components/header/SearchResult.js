import { useSelector } from "react-redux";
import SearchProduct from "./SearchProduct";

const SearchResult = () => {
    const searchData = useSelector(({ search }) => search.foundProducts);

    return (
        <ul className="search__list">
            {searchData.map((product, index) => {
                return (
                    <SearchProduct
                        key={index}
                        name={product.name}
                        image={product.image}
                        description={product.description}
                    />
                );
            })}
        </ul>
    );
};

export default SearchResult;

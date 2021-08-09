import ProductsItem from "../catalog/ProductsItem";
import { useSelector } from "react-redux";

const Bestsellers = () => {
    const products = useSelector(({ products }) => products.productsData);
    const bestsellers = useSelector(({ products }) => products.bestsellersData);

    return (
        <section className="bestsellers">
            {products.map((item, index) => {
                if (bestsellers.includes(item.name)) {
                    return (
                        <ProductsItem
                            bestseller={true}
                            name={item.name}
                            key={index}
                            price={item.price}
                            image={item.image}
                            description={item.description}
                        />
                    );
                } else return null;
            })}
        </section>
    );
};

export default Bestsellers;

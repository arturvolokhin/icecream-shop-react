import ProductsItem from "./ProductsItem";
import { useSelector } from 'react-redux';

const Products = () => {

    const data = useSelector(({preset}) => preset.productsData);

    return(
        <section className="products">
            {data.map((product, index) => {
                return(
                    <ProductsItem
                        key={index}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                    />
                )
            })}
        </section>
    )
}

export default Products;
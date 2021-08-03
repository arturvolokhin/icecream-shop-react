import { getLocalStorage } from "../../utils/localStorage";
import ProductsItem from "./ProductsItem";

const Products = () => {

    const data = getLocalStorage('products');

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
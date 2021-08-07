import BestsellersItem from "./BestsellersItem";
import { useSelector } from 'react-redux';

const Bestsellers = () => {

    const data = useSelector(({products}) => products.bestsellersData);
    return (
        <section className="bestsellers">
            {data.map((item, index) => {
                return (
                    <BestsellersItem
                        key={index}
                        price={item.price}
                        image={item.image}
                        description={item.description}
                    />
                );
            })}
        </section>
    );
};

export default Bestsellers;

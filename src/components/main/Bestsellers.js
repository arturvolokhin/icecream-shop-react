import BestsellersItem from "./BestsellersItem";
import orangeIcecream from "../../images/products/orange-icecream.png";
import coffeeIcecream from "../../images/products/coffee-icecream.png";
import strawberryIcecream from "../../images/products/strawberry-icecream.png";
import cremebrulleIcecream from "../../images/products/cremebrule-icecream.png";

const Bestsellers = () => {
    return (
        <section className="bestsellers">
            <BestsellersItem
                price={310}
                image={orangeIcecream}
                description="Сливочное с апельсиновым джемом и цитрусовой стружкой"
            />
            <BestsellersItem
                price={380}
                description="Сливочно-кофейное с кусочками шоколада"
                image={coffeeIcecream}
            />
            <BestsellersItem
                price={355}
                description="Сливочно-клубничное с присыпкой из белого шоколада"
                image={strawberryIcecream}
            />
            <BestsellersItem
                price={415}
                description="Сливочное крем-брюле с карамельной подливкой"
                image={cremebrulleIcecream}
            />
        </section>
    );
};

export default Bestsellers;

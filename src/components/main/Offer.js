import OfferItem from "./OfferItem";

const Offer = () => {
    return (
        <section className="offer">
            <OfferItem
                title={"Малинка даром!"}
                description={`При покупке 2 кг любого фруктового мороженого,
                        добавим в ваш заказ банку малинового варенья бесплатно.`}
                buttonText={"Хочу варенье!"}
                classes="raspberry"
            />
            <OfferItem
                title={"Шоколадки даром!"}
                description={`При покупке 2 кг пломбира,
                        добавим в ваш заказ упаковку вкуснейшей шоколадной присыпки совершенно бесплатно.`}
                buttonText={"Хочу шоколадки!"}
                classes="chocolate"
            />
        </section>
    );
};

export default Offer;

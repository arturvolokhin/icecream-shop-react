import Button from "../Button";
import promoImage from "../../images/promo/promo.png";

const Promo = () => {
    return (
        <section className="promo">
            <img className="promo__image" src={promoImage}></img>
            <div className="promo__content">
                <h2 className="promo__title">Крем-брюле и пломбир с малиновым джемом</h2>
                <Button text={"Давайте оба"} classes={"promo__button"} />
            </div>
        </section>
    );
};

export default Promo;

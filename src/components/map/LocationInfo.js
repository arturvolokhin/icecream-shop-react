import Button from "../Button"

const LocationInfo = () => {
    return (
        <article className="location__info">
            <h3 className="location__info-title">
                Адрес главного офиса и офлайн магазина:
            </h3>
            <p className="location__info-description">
                ул. Большая Конюшенная 19/8, Санкт-Петербург
            </p>
            <h3 className="location__info-title">
                Для заказов по телефону:
            </h3>
            <a className="location__info-description" href="tel:88124502525">
                8 812 450-25-25
            </a>
            <p className="location__info-time">(с 10 до 20 ежедневно)</p>
            <Button text={'Форма обратной связи'} />
        </article>
    );
};

export default LocationInfo;

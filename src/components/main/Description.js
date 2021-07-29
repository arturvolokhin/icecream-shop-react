const Description = () => {
    return (
        <section className="description">
            <h2 className="description__title">
                Магазин Глейси — это онлайн и офлайн магазин по продаже
                мороженого собственного производства на развес
            </h2>
            <div className="description__content">
                <p className="description__item description__item-icecream">
                    Все наше мороженое изготавливается на собственном
                    производстве, с использованием современного оборудования и
                    проверенных временем технологий.
                </p>
                
                <p className="description__item description__item-cow">
                    Закупка ингредиентов производится только у проверенных
                    фермерских хозяйств и компаний, с которыми нас связывает
                    долговременное сотрудничество.
                </p>

                <p className="description__item description__item-ecofriendly">
                    Для приготовления мороженого используются настоящие сливки и
                    молоко высочайшего качества. Все дополнительные ингредиенты
                    и добавки произведены из натурального, экологически чистого
                    сырья.
                </p>

                <p className="description__item description__item-thermometer">
                    Доставка нашего мороженого до заказчиков осуществляется в
                    специальном термопаке, которая не дает мороженому растаять в
                    пути и позволяет ему сохранить свой превосходный вкус.
                </p>
            </div>
        </section>
    );
};

export default Description;

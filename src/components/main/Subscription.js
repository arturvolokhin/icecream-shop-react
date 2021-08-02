import Button from "../Button";

const Subscription = () => {
    return (
        <article className="subscription">
            <div className="subscription__container">
                <p className="subscription__text">
                    Подпишитесь на нашу сладкую рассылку и будете всегда в курсе
                    всего самого вкусного, что у нас происходит. Обещаем не спамить
                    и не слать всякой не нужной ерунды. Честно =){" "}
                </p>
                <form className="subscription__form">
                    <input
                        className="subscription__mail"
                        type="email"
                        placeholder="Электронная почта"
                    />
                    <Button text={"Отправить"} />
                </form>
            </div>
        </article>
    );
};

export default Subscription;

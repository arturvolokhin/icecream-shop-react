import React, { useState } from "react";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { toggleNotification } from "../../redux/notificationSlice";

const Subscription = () => {
    const dispatch = useDispatch();

    const [formValue, setFormValue] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(toggleNotification(true));
        setFormValue("");
    };

    return (
        <article className="subscription">
            <div className="subscription__container">
                <p className="subscription__text">
                    Подпишитесь на нашу сладкую рассылку и будете всегда в курсе
                    всего самого вкусного, что у нас происходит. Обещаем не
                    спамить и не слать всякой не нужной ерунды. Честно =){" "}
                </p>
                <form className="subscription__form">
                    <input
                        className="subscription__mail"
                        type="email"
                        placeholder="Электронная почта"
                        value={formValue}
                        onChange={({ target }) => setFormValue(target.value)}
                    />
                    <Button text={"Отправить"} handleClick={handleClick} />
                </form>
            </div>
        </article>
    );
};

export default Subscription;

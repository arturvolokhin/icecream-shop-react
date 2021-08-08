import Button from "../Button";
import { useDispatch } from "react-redux";
import { toggleNotification } from "../../redux/notificationSlice";
import { toggleCart, removeAllProducts } from "../../redux/cartSlice";

const FormOrdering = () => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(toggleCart(false));
        dispatch(toggleNotification(true));
        dispatch(removeAllProducts());
    };

    return (
        <form className="cart__form">
            <div className="cart__form-fields">
                <input
                    required
                    className="cart__form-field"
                    type="text"
                    placeholder="Ваше имя"
                />
                <input
                    required
                    minLength="2"
                    className="cart__form-field"
                    type="number"
                    placeholder="Номер для связи"
                />
            </div>
            <Button
                minLength="2"
                classes="cart__button"
                text="Отправить данные"
                handleClick={handleClick}
            />
        </form>
    );
};

export default FormOrdering;

import Button from "./Button";
import { useDispatch } from "react-redux";
import { toggleNotification } from "../redux/notificationSlice";

const Notification = () => {

    const dispatch = useDispatch();

    return (
        <div className="notification__wrap">
            <div className="notification">
                <h3 className="notification__title">
                    Спасибо, что выбрали нас!
                </h3>
                <Button
                    classes="notification__button"
                    text="Закрыть"
                    handleClick={() => dispatch(toggleNotification(false))}
                />
            </div>
        </div>
    );
};

export default Notification;

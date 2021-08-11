import Search from "../header/Search";
import { toggleCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const MobileActions = ({ setIsMenuActive }) => {
    const dispatch = useDispatch();

    const handleToggleCart = () => {
        dispatch(toggleCart(true));
    };

    return (
        <div className="mobile__actions">
            <button
                className="mobile__burger"
                onClick={() => setIsMenuActive(true)}
            ></button>

            <button
                className="mobile__cart"
                onClick={handleToggleCart}
            ></button>
            <Search dispatch={dispatch} classes="mobile__search" />
        </div>
    );
};

export default MobileActions;

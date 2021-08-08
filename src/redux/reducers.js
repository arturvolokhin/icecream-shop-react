import { combineReducers } from "redux";
import products from "./productsSlice";
import cart from "./cartSlice";
import notification from "./notificationSlice";

export default combineReducers({
    products,
    cart,
    notification,
});

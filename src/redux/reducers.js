import { combineReducers } from "redux";
import products from "./productsSlice";
import cart from "./cartSlice";
import notification from "./notificationSlice";
import search from './searchSlice';

export default combineReducers({
    products,
    cart,
    notification,
    search
});

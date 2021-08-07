import { combineReducers } from "redux";
import products from './productsSlice';
import cart from './cartSlice';

export default combineReducers({
    products,
    cart
});

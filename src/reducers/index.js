import { combineReducers } from "redux";
import books from './books';
import cart from './cart';
import sort from './sort';

export default combineReducers({
    books,
    cart,
    sort
})
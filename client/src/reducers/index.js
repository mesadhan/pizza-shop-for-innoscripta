import { combineReducers } from "redux";
import sampleReducers from "./sampleReducers";
import {pizzaReducers} from "./pizzaReducers";
import cartReducers from "./cartReducers";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
import {orderReducers} from "./orderReducers";

export default combineReducers({
    sample: sampleReducers,
    cart: cartReducers,
    pizzas: pizzaReducers,
    auth : authReducers,
    error : errorReducers,
    orders: orderReducers
});
import { combineReducers } from "redux";
import sampleReducers from "./sampleReducers";
import {pizzaReducers} from "./pizzaReducers";
import cartReducers from "./cartReducers";

export default combineReducers({
    sample: sampleReducers,
    cart: cartReducers,
    pizzas: pizzaReducers
});
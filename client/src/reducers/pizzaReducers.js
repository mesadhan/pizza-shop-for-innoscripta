import { FETCH_PIZZAS } from "../actions/types";

export const pizzaReducers = (state=[],action)=>{
    switch (action.type) {
        case FETCH_PIZZAS:
            return action.payload;
        default:
            return state;
    }
}
import { ORDER_HISTORY } from "../actions/types";

export const orderReducers = (state=[],action)=>{
    switch (action.type) {
        case ORDER_HISTORY:
            return action.payload;
        default:
            return state;
    }
}
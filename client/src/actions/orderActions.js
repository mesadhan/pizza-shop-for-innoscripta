import {ORDER_HISTORY, PLACE_ORDER} from "./types";
import {tokenConfig} from "./authActions";

export const placeOrder = (order) => async (dispatch) => {

    const headers = {
        'Content-Type': 'application/json'
    };
    let body = JSON.stringify(order);


    fetch('http://localhost:8080/api/order', {
        method: 'POST',
        headers: headers,
        body: body,
    }).then(response => {
        return response.json();
    }).then(res => {
        localStorage.setItem("cartItems", JSON.stringify([]));
        dispatch({ type: PLACE_ORDER, payload: res });
    });
}


export const orderHistory = (user_id) => async (dispatch,getState) => {

    fetch(`http://localhost:8080/api/order/history/${user_id}`, {
        method: 'GET',
        headers: tokenConfig(getState)
    }).then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }).then( (res) => {
        dispatch({type: ORDER_HISTORY, payload: res});
    });
}
import {DECREASE_QUANTITY, INCREASE_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART} from "./types";

export const addToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice();

    let productAlreadyInCart = false;
    cartItems.forEach((cp) => {
        if (cp.id === product.id) {
            cp.count += 1;
            productAlreadyInCart = true;
        }
    });
    if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

export const removeFromCart = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter((a) => a.id !== product.id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};


export const increaseQuantity = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter((a) => a.id === product.id)

    if(cartItems.length === 1){
        cartItems[0].qnt += 1;
    }
    //localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: INCREASE_QUANTITY, payload: { cartItems } });
};


export const decreaseQuantity = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter((a) => a.id === product.id);

    if(cartItems.length === 1) {
        cartItems[0].qnt += 1;
    }
    //localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: DECREASE_QUANTITY, payload: { cartItems } });
};

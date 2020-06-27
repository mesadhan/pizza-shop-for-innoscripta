import {ADD_TO_CART, REMOVE_FROM_CART} from "./types";

export const addToCart = (items, product) => (dispatch) => {
    let cartItems = items.slice();
    cartItems = calculateQuantity('in', cartItems, product)

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

export const removeFromCart = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter((a) => a.id !== product.id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};


export const increaseQuantity = (items, product) => (dispatch) => {
    addToCart(items, product)(dispatch)
};

export const decreaseQuantity = (items, product) => (dispatch) => {
    let cartItems = items.slice();
    cartItems = calculateQuantity('de', cartItems, product)

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};


let calculateQuantity = (type, cartItems, product) => {

    let productAlreadyInCart = false;
    cartItems.forEach((cp) => {
        if (cp.id === product.id) {

            if(type === 'in') {
                cp.count += 1;
            }else{
                cp.count -= 1;
            }

            if(cp.count < 1) {
                cp.count = 1;
            }
            productAlreadyInCart = true;
        }
    });
    if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
    }
    return cartItems;
}
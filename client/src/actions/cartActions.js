import {CART_UPDATE, FETCH_PIZZAS, ADD_TO_CART} from "./types";

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

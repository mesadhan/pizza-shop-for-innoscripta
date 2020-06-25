import React, { Component } from 'react';
import {connect} from "react-redux";
import CartItem from "./CartItem";
import './Cart.scss';

class Cart extends Component {
    render() {
        const cartItems = this.props.cartItems;

        return (
            <div data-test="cartComponent" className="cartComponent">
                <p>Cart page.</p>

                <div className="cart-item-container">
                    <div className="cart-item">

                        Order Form

                    </div>
                    <div className="cart-item cartBox">
                        {
                            cartItems.map( cart =>  <CartItem key={cart.id} {...cart}/>)
                        }
                    </div>
                </div>


            </div>
        )

    }
}


const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
});

export default connect(mapStateToProps,{})(Cart)

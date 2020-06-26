import React, { Component } from 'react';
import './CartItem.scss';
import {connect} from "react-redux";
import {removeFromCart, increaseQuantity, decreaseQuantity} from '../actions/cartActions';

class CartItem extends Component {

    render() {
        let {id, name, img, price, qnt} = this.props
        let euroPrice = price
        let dollarPrice = price *  1.12;        // Here, 1 EURO = 1.12 Dollar
        dollarPrice = dollarPrice.toFixed(2);

        return (
            <div data-test="cartItemComponent" className="cartItemComponent">

                <div className="cart-item-container">
                    <div className="cart-item" >
                        <img src={img} className="" style={{width: '40px'}} alt={name} />
                    </div>
                    <div className="cart-item">{name}</div>
                    <div className="cart-item">Price: {euroPrice} ERO <br/> ${dollarPrice} USD</div>
                    <button  className="cart-remove" onClick={()=>this.props.removeFromCart(this.props.cartItems,{id: id})} >X</button>
                </div>

            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
});
export default connect(mapStateToProps,{
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
})(CartItem);
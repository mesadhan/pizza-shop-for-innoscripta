import React, { Component } from 'react';
import './CartItem.scss';
import {connect} from "react-redux";
import {removeFromCart, addToCart, decreaseQuantity, increaseQuantity} from '../actions/cartActions';

class CartItem extends Component {

    render() {
        let {id, name, img, price, qnt, count} = this.props
        let euroPrice = price
        let dollarPrice = price *  1.12;        // Here, 1 EURO = 1.12 Dollar
        dollarPrice = dollarPrice.toFixed(2);

        return (
            <div data-test="cartItemComponent" className="cartItemComponent">

                <hr/>
                <div className="cart-item-container">
                    <div className="cart-item" >
                        <img src={img} className="" style={{width: '40px'}} alt="logo" />
                    </div>
                    <div className="cart-item">€{euroPrice} ERO <br/> ${dollarPrice} USD</div>

                    <button  className="cart-de" onClick={()=>this.props.decreaseQuantity(this.props.cartItems, this.props)} >-</button>

                    <div className="cart-item">Qnt: {count}</div>
                    <button  className="cart-in" onClick={()=>this.props.increaseQuantity(this.props.cartItems, this.props)} >+</button>

                    <button  className="cart-remove" onClick={()=>this.props.removeFromCart(this.props.cartItems,{id: id})} >X</button>
                    <br/>
                    <div className="cart-item">{name}</div>
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
    addToCart,
    decreaseQuantity,
    increaseQuantity
})(CartItem);
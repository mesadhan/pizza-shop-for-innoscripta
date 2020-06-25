import React, { Component } from 'react';
import './CartItem.scss';

class CartItem extends Component {

    render() {
        let {name, price, img} = this.props

        return (
            <div data-test="cartItemComponent" className="cartItemComponent">

                <div className="cart-item-container">
                    <div className="cart-item" >
                        <img src={img} className="" style={{width: '80px'}} alt={name} />
                    </div>
                    <div className="cart-item">{name}</div>
                    <div className="cart-item">{price}</div>


                    <button className="cart-de">-</button>
                    <p>2</p>
                    <button className="cart-in">+</button>
                    <button className="cart-remove">X</button>
                </div>

            </div>
        )

    }
}

export default CartItem;
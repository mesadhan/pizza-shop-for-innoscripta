import React, { Component } from 'react';
import './CartItem.scss';
import {connect} from "react-redux";
import {removeFromCart, addToCart, decreaseQuantity, increaseQuantity} from '../../actions/cartActions';

class CartItem extends Component {

    render() {
        let {id, name, img, price, count} = this.props
        let imageFullUrl = 'http://localhost:8080/static/' + img;

        let euroPrice = price
        let dollarPrice = price *  1.12;        // Here, 1 EURO = 1.12 Dollar
        dollarPrice = dollarPrice.toFixed(2);

        return (
            <div data-test="cartItemComponent" className="cartItemComponent">


                <div className="container row">
                    <div className="col-md-12">
                        <div style={{borderTop: '1px solid #bebebe', padding: "3px"}} className="">{name}</div>
                    </div>
                    <div className="col-md-4">
                        <img src={ imageFullUrl } className="img-thumbnail" alt="logo" />
                    </div>
                    <div className="col-md-8">
                        <div className="row" style={{padding: "5px"}}>
                            <button  className="btn btn-primary btn-sm" onClick={()=>this.props.decreaseQuantity(this.props.cartItems, this.props)} >-</button>
                            <div className="">&nbsp;&nbsp; Qnt: {count} &nbsp;&nbsp;</div>
                            <button  className="btn btn-success btn-sm" onClick={()=>this.props.increaseQuantity(this.props.cartItems, this.props)} >+</button>
                            &nbsp;&nbsp;<button  className="btn btn-danger btn-sm" onClick={()=>this.props.removeFromCart(this.props.cartItems,{id: id})} >X</button>
                        </div>
                        <div style={{borderTop: '1px solid #bebebe'}} className="">€{euroPrice} ERO | ${dollarPrice} USD</div><br/>
                    </div>
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
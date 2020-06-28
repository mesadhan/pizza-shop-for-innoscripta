import React, { Component } from 'react';
import './Menus.scss';
import {fetchPizzas} from '../actions/pizzaActions';
import { connect } from "react-redux";
import Pizza from "./Pizza";
import CartItem from "./cart/CartItem";
import {Link} from "react-router-dom";

class Menu extends Component {

    componentDidMount(){
        this.props.fetchPizzas();
    }

    render() {
        let {pizzas} = this.props.pizzas;
        let cartItems = this.props.cartItems;
        let subTotalAmountInEuro = 0;
        cartItems.forEach( data => subTotalAmountInEuro = (subTotalAmountInEuro + parseFloat(data.price) * data.count));
        subTotalAmountInEuro = parseFloat(subTotalAmountInEuro.toFixed(2));


        let deliveryCost = 10.00;
        let totalAmountInEuro = subTotalAmountInEuro + deliveryCost;


        let totalAmountInDollar = (subTotalAmountInEuro + deliveryCost) *  1.12;        // Here, 1 EURO = 1.12 Dollar
        totalAmountInDollar = parseFloat(totalAmountInDollar.toFixed(2));


        return (
            <div data-test="menusComponent" className="menusComponent">


                <div className="flex-container-row">

                    <div className="flex-item" style={{display:'flex'}}>
                        <div className="flex-container">
                            {
                                pizzas.map( pizza => <Pizza key={pizza.id} {...pizza}/>)
                            }
                        </div>



                        {cartItems.length > 0 &&
                            <div className="flex-item shopping-cart " style={{maxWidth: "200px"}}>
                                <div className="cart-panel">
                                    <span> <strong> Sub-Total:</strong> €{subTotalAmountInEuro} | </span>
                                    <span> <strong> Total:</strong> €{totalAmountInEuro} | ${totalAmountInDollar}</span>
                                </div>

                                {
                                    cartItems.map( cart =>  <CartItem key={cart.id} {...cart}/>)
                                }


                                <Link style={{display: 'flex', textDecoration: 'none'}} to="/order">
                                    <button className="btn btn-primary" style={{width: "100%"}}>Order ({cartItems.length} Items) </button>
                                </Link>

                            </div>
                        }
                    </div>



                </div>


            </div>
        )

    }
}


const mapStateToProps = (state) => ({
    pizzas: state,
    cartItems: state.cart.items,
});

export default connect(mapStateToProps,{fetchPizzas})(Menu)
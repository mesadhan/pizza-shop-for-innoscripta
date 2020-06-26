import React, { Component } from 'react';
import './Menus.scss';
import {fetchPizzas} from '../actions/pizzaActions';
import { connect } from "react-redux";
import Pizza from "./Pizza";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";

class Menu extends Component {

    componentDidMount(){
        this.props.fetchPizzas();
    }

    render() {
        let {pizzas} = this.props.pizzas;
        let cartItems = this.props.cartItems;
        let totalAmountInEuro = 0; cartItems.forEach( data => totalAmountInEuro = totalAmountInEuro + parseFloat(data.price));
        let totalAmountInDollar = totalAmountInEuro *  1.12;        // Here, 1 EURO = 1.12 Dollar
        totalAmountInEuro = totalAmountInEuro.toFixed(2);


        return (
            <div data-test="menusComponent" className="menusComponent">
                <div className="menu-header">Menus Page</div>

                <div className="flex-container-row">

                    <div className="flex-item" style={{display:'flex'}}>
                        <div className="flex-container">
                            {
                                pizzas.map( pizza => <Pizza key={pizza.id} {...pizza}/>)
                            }
                        </div>



                        {cartItems.length > 0 &&
                            <div className="flex-item shopping-cart">
                                <div className="cart-panel">
                                    Cart
                                    <span> - [Price €{totalAmountInEuro}Euro | ${totalAmountInDollar}USD]</span>
                                </div>

                                {
                                    cartItems.map( cart =>  <CartItem key={cart.id} {...cart}/>)
                                }

                                <Link style={{display: 'flex', textDecoration: 'none'}} to="/order">
                                    <button className="orderButton" style={{width: "100%"}}>Order ({cartItems.length} Items) </button>
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
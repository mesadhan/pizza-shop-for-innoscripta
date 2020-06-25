import React, { Component } from 'react';
import './Menus.scss';
import {fetchPizzas} from '../actions/pizzaActions';
import { connect } from "react-redux";
import Pizza from "./Pizza";
import CartItem from "./CartItem";

class Menu extends Component {

    componentDidMount(){
        this.props.fetchPizzas();
    }

    render() {
        const {pizzas} = this.props.pizzas;
        const cartItems = this.props.cartItems;

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

                        <div className="flex-item shopping-cart">

                            <div className="cart-panel">
                                Cart
                                <span> - [Price $499 == @444]</span>
                            </div>

                            {
                                cartItems.map( cart =>  <CartItem key={cart.id} {...cart}/>)
                            }

                            <button className="orderButton" style={{width: "100%"}}>Order (8 Items) </button>
                        </div>
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
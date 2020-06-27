import React, { Component } from 'react';
import {connect} from "react-redux";
import CartItem from "./CartItem";
import './Order.scss';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { placeOrder } from '../actions/orderActions';
import {loadUser} from "../actions/authActions";

class Order extends Component {

    order = {
        name: "",
        surname: "",
        phone: "",
        address: "",
        pizzas: [],
        zipcode: 0,
        userId: null,
        pizzaCost: 0,
        deliveryCost: 10
    }

    componentDidMount() {
        this.props.cartItems.map(item => {
            this.order.pizzas.push({pizza_id: item.id, units: item.count})
            this.order.pizzaCost = this.order.pizzaCost + (item.price * item.count)
        });
    }

    handleChange = input => e => {
        e.preventDefault();
        this.order[input] = e.target.value;
    };


    placeOrder = user => (e)=>{
        e.preventDefault();

        if(user) {
            this.order.userId = user.id;
        }

        toast.success('🚀 Order has been received!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        console.log("order data", this.order)
        document.getElementById("order-form").reset();
        this.props.placeOrder(this.order);
    }


    render() {

        const {user} = this.props.auth;
        let cartItems = this.props.cartItems;
        let subTotalAmountInEuro = 0;
        cartItems.forEach( data => subTotalAmountInEuro = (subTotalAmountInEuro + parseFloat(data.price) * data.count));
        subTotalAmountInEuro = parseFloat(subTotalAmountInEuro.toFixed(2));


        let deliveryCost = 10.00;
        let totalAmountInEuro = subTotalAmountInEuro + deliveryCost;


        let totalAmountInDollar = (subTotalAmountInEuro + deliveryCost) *  1.12;        // Here, 1 EURO = 1.12 Dollar
        totalAmountInDollar = parseFloat(totalAmountInDollar.toFixed(2));





        return (
            <div data-test="cartComponent" className="cartComponent">


                {cartItems.length ? (
                    <div>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />

                        <div className="cart-item-container">
                            <div className="cart-item cardBox" style={{ flexGrow: '5'}}>

                                <form id="order-form">
                                    <input onChange={this.handleChange('name')} className="input-field" placeholder="Name"/>
                                    <input onChange={this.handleChange('surname')} className="input-field" placeholder="Surname"/>
                                    <input onChange={this.handleChange('phone')} className="input-field" placeholder="Phone Number"/>
                                    <textarea onChange={this.handleChange('address')} cols="2" className="input-field" placeholder="Address"/>
                                    <input onChange={this.handleChange('zipcode')} className="input-field" placeholder="Zip Code"/><br/> <br/>

                                    <button style={{float: 'right'}} onClick={this.placeOrder(user)} className="">Order</button>
                                </form>


                            </div>
                            <div className="cart-item cartBox" style={{ flexGrow: '5'}}>
                                {
                                    cartItems.map( cart =>  <CartItem key={cart.id} {...cart}/>)
                                }


                                <hr/>
                                <p style={{paddingLeft: '10px'}}> Delivery Cost: €{deliveryCost} Euro</p>
                                <p style={{paddingLeft: '10px'}}> Sub-Total Cost: €{subTotalAmountInEuro} Euro</p>
                                <p style={{paddingLeft: '10px'}}> Total Cost: €{totalAmountInEuro} Euro | ${totalAmountInDollar} USD</p>

                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <br/>
                        <Link style={{ textDecoration: 'none', textAlign: 'center'}} to="/">
                            Cart List Empty. Please Select Pizza First.
                        </Link>
                    </div>
                )}



            </div>
        )

    }
}


const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
    auth : state.auth
});

export default connect(mapStateToProps,{placeOrder, loadUser})(Order)

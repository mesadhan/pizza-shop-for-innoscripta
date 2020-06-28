import React, {Component} from 'react';
import {connect} from "react-redux";
import CartItem from "../cart/CartItem";
import './Order.scss';
import {Link} from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {placeOrder} from '../../actions/orderActions';
import {loadUser} from "../../actions/authActions";
import deliveryLogo from "../../logo-delivery.png";

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


    submitOrder = user => (e) => {
        e.preventDefault();

        if (user) {
            this.order.userId = user.id;
        }

        toast.success('🚀 Order has been received!');

        console.log("order data", this.order)
        document.getElementById("order-form").reset();
        this.props.placeOrder(this.order);

        this.props.history.push('/menus');
    }


    render() {

        const {user} = this.props.auth;
        let cartItems = this.props.cartItems;
        let subTotalAmountInEuro = 0;
        cartItems.forEach(data => subTotalAmountInEuro = (subTotalAmountInEuro + parseFloat(data.price) * data.count));
        subTotalAmountInEuro = parseFloat(subTotalAmountInEuro.toFixed(2));


        let deliveryCost = 10.00;
        let totalAmountInEuro = subTotalAmountInEuro + deliveryCost;


        let totalAmountInDollar = (subTotalAmountInEuro + deliveryCost) * 1.12;        // Here, 1 EURO = 1.12 Dollar
        totalAmountInDollar = parseFloat(totalAmountInDollar.toFixed(2));


        return (
            <div data-test="orderComponent" className="orderComponent">


                {cartItems.length ? (
                    <div className="container">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">

                                    <div className="card-body">

                                        <form id="order-form">

                                            <div className="form-group">
                                                <label htmlFor="name">Name:</label>
                                                <input id="name" onChange={this.handleChange('name')}
                                                       className="form-control"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone:</label>
                                                <input id="phone" onChange={this.handleChange('phone')}
                                                       className="form-control" placeholder="Phone Number"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="surname">Surname:</label>
                                                <input id="surname" onChange={this.handleChange('surname')}
                                                       className="form-control" placeholder="Surname"/>
                                            </div>
                                            <div className="form-group">
                                                <textarea onChange={this.handleChange('address')} cols="2"
                                                          className="form-control" placeholder="Address"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="zipcode">Zip Code:</label>
                                                <input id="zipcode" onChange={this.handleChange('zipcode')}
                                                       className="form-control" placeholder="Zip Code"/>
                                            </div>

                                            <button onClick={this.submitOrder(user)}
                                                    className="btn btn-primary float-right">Order
                                            </button>
                                        </form>

                                    </div>

                                    <div className="card-footer">
                                        sdfgdsgf
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="card">
                                    <div className="">
                                        {
                                            cartItems.map(cart => <CartItem key={cart.id} {...cart}/>)
                                        }
                                        <hr/>

                                        <div style={{paddingLeft: "10px"}}>
                                            <p> Delivery Cost: €{deliveryCost} Euro</p>
                                            <p> Sub-Total Cost: €{subTotalAmountInEuro} Euro</p>
                                            <p> Total Cost: €{totalAmountInEuro} Euro | ${totalAmountInDollar} USD</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div>
                        <div className="jumbotron">
                            <h1>Cart List Empty. Please Select Pizza First.</h1>
                            <p>Choose Pizza from menus....</p>
                            <Link style={{textDecoration: 'none', textAlign: 'center'}} to="/">
                                Back To Menu
                            </Link>
                        </div>



                    </div>
                )}


            </div>
        )

    }
}


const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
    auth: state.auth
});

export default connect(mapStateToProps, {placeOrder, loadUser})(Order)

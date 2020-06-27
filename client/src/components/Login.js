import React, { Component } from 'react';
import "./Login.scss";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Login extends Component {

    loginData = {
        email:"",
        password : ""
    }
    handleChange = input => e => {
        e.preventDefault()
        this.loginData[input] = e.target.value;
    }

    clickToLogin = (e) => {
        e.preventDefault()
        console.log('message', this.loginData)
    }

    render() {
        return (<div data-test="loginComponent" className="loginComponent">
            <p> Login Page </p>


            <form id="order-form">
                <input onChange={this.handleChange('email')} className="input-field" placeholder="Enter Email"/>

                <br/>
                <input onChange={this.handleChange('password')} className="input-field" type="password"/>

                <br/>
                <br/>
                <button onClick={this.clickToLogin} style={{background: 'red'}}> Login </button>

                <br/>
                <Link style={{ textDecoration: 'none', textAlign: 'center'}} to="/">Home</Link>
            </form>


        </div>)
    }
}

const mapStateToProps = (state) => ({
    //cartItems: state.cart.items
});

export default connect(mapStateToProps,{})(Login)

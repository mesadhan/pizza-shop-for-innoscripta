import React, { Component } from 'react';
import "./SignUp.scss";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {register} from "../../actions/authActions";

class SignUp extends Component {

    user = {
        username : "",
        email:"",
        password : ""
    }

    handleChange = input => e => {
        e.preventDefault();
        this.user[input] = e.target.value;
    };


    registerUser = (e) => {
        e.preventDefault();
        this.user.username = this.user.email;
        this.props.register(this.user);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {isAuthenticated} = this.props;
        if(isAuthenticated){
            this.props.history.push('/');
        }
    }

    render() {
        return (<div data-test="loginComponent" className="loginComponent">
            <p> Register Page </p>


            <form id="order-form">

                <input onChange={this.handleChange('email')} className="input-field" placeholder="Enter Email"/>

                <br/>
                <input onChange={this.handleChange('password')} className="input-field" type="password"/>

                <br/>
                <br/>
                <button onClick={this.registerUser} className="btn btn-danger">Register</button>


                <br/>
                <Link style={{ textDecoration: 'none', textAlign: 'center'}} to="/">Home</Link>
            </form>


        </div>)
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps,{register})(SignUp)

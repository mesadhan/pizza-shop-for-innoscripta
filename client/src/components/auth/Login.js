import React, { Component } from 'react';
import "./Login.scss";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {login} from "../../actions/authActions";

class Login extends Component {

    user = {
        email:"",
        password : ""
    }

    handleChange = input => e => {
        e.preventDefault();
        this.user[input] = e.target.value;
    };

    loginUser = (e)=>{
        e.preventDefault();
        this.props.login(this.user);
    }



    componentDidUpdate(prevProps, prevState, snapshot) {
        const {isAuthenticated} = this.props;
        if(isAuthenticated){
            this.props.history.push('/order');
        }
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
                <button onClick={this.loginUser} style={{background: 'red'}}> Login </button>

                <Link style={{ textDecoration: 'none', textAlign: 'center'}} to="/signup">Create a account</Link>

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

export default connect(mapStateToProps,{login})(Login)

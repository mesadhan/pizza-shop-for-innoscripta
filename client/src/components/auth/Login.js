import React, { Component } from 'react';
import "./Login.scss";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {login} from "../../actions/authActions";
import deliveryLogo from "../../logo-delivery.png";
import {toast} from "react-toastify";

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

        if(!this.user.email || !this.user.password) {
            toast.error('😞 Please enter all required fields');
        }else{
            this.props.login(this.user);
            toast.error('✅ Login Successful');
        }

    }



    componentDidUpdate(prevProps, prevState, snapshot) {
        const {isAuthenticated} = this.props;
        if(isAuthenticated){
            this.props.history.push('/order');
        }
    }

    render() {
        return (<div data-test="loginComponent" className="loginComponent">

            <div className="container row" style={{marginTop: "50px"}}>
                <div className="col-md-4 offset-md-8">

                    <div className="card">
                        <div className="">
                            <img className="card-img-top" src={deliveryLogo} alt="login avater" style={{width : "60%", padding: '20px'}}/>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">User Login</h4>

                            <div className="form-group">
                                <label htmlFor="email">Email address:</label>
                                <input id="email" onChange={this.handleChange('email')} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">Password:</label>
                                <input onChange={this.handleChange('password')} type="password" className="form-control" id="pwd"/>
                            </div>

                            <button onClick={this.loginUser} className="btn btn-primary float-right">Login</button>
                        </div>

                        <div className="card-footer">
                            <Link style={{ textDecoration: 'none', textAlign: 'center'}} to="/signup">Create a New Account</Link>
                        </div>
                    </div>


                </div>
            </div>

        </div>)
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps,{login})(Login)

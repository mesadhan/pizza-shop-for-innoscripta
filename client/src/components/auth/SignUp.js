import React, { Component } from 'react';
import "./SignUp.scss";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {register} from "../../actions/authActions";
import {toast} from 'react-toastify';

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

        if(!this.user.email || !this.user.password) {
            toast.error('😞 Please enter all required fields');
        }else{

            this.user.username = this.user.email;
            this.props.register(this.user);
            toast.error('✅ User Created Successfully');
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {isAuthenticated} = this.props;
        if(isAuthenticated){
            this.props.history.push('/');
        }
    }

    render() {
        return (<div data-test="loginComponent" className="loginComponent">

            <div className="container row" style={{marginTop: "50px"}}>
                <div className="col-md-6 offset-md-6">

                    <div className="card">
                        <div className="card-header">
                           Create a New Account
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="email">Email address:</label>
                                <input onChange={this.handleChange('email')} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">Password:</label>
                                <input onChange={this.handleChange('password')} type="password" className="form-control" id="pwd"/>
                            </div>

                            <button onClick={this.registerUser} className="btn btn-primary float-right">Registration</button>
                        </div>

                        <div className="card-footer">
                            <Link style={{ textDecoration: 'none', textAlign: 'center'}} to="/login">Login</Link>
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

export default connect(mapStateToProps,{register})(SignUp)

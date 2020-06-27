import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import cartLogo from "../logo-cart.svg";
import bandLogo from "../logo-band.png";

import {connect} from 'react-redux';
import {logout} from "../actions/authActions";

class NavBar extends Component {

    logout = (e) => {
        e.preventDefault();
        this.props.logout()
    }

    render() {
        let cartCount = this.props.cartItems.length;
        const {isAuthenticated}  = this.props.auth;

        return (
            <div data-test="navComponent" className="navComponent">
                <Link to="/">
                    <img src={bandLogo} className="logo-band" alt="Pizza Shop" />
                </Link>

                <div className="leftMenus">
                    <Link className="pizza-shop-menu" to="/" style={{fontWeight: 'bold'}}>Pizza Shop |</Link>
                    <Link to="/menus">Menus</Link>
                </div>

                <div className="rightMenus">
                    <div>

                        {isAuthenticated ? (
                            <span>
                                <Link to="/order-history">| History</Link>
                                <span onClick={this.logout} style={{color: "#fce8be", cursor: "pointer"}}>| Logout |</span>
                            </span>
                        ):(
                            <span>
                                <Link to="/About">| About</Link>
                                <Link to="/login">| Login |</Link>
                            </span>
                        )}

                    </div>

                    <Link style={{display: 'flex'}} to="/order">
                        <p style={{fontWeight: 'bold', color: '#fff'}}>{cartCount}</p>
                        <img src={cartLogo} className="icon-cart" alt="cart logo" />
                    </Link>

                </div>
            </div>
        )

    }
}


const mapStateToProps = (state) => ({
    auth : state.auth,
    cartItems: state.cart.items,
});

export default connect(mapStateToProps,{logout})(NavBar);

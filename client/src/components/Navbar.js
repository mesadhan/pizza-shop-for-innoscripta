import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import cartLogo from "../logo-cart.svg";
import bandLogo from "../logo-band.png";

import {connect} from 'react-redux';


class NavBar extends Component {

    render() {
        let cartCount = this.props.cartItems.length;

        return (
            <div data-test="navComponent" className="navComponent">
                <Link to="/">
                    <img src={bandLogo} className="logo-band" alt="Pizza Shop" />
                </Link>

                <div className="leftMenus">
                    <Link className="pizza-shop-menu" to="/" style={{fontWeight: 'bold'}}>Pizza Shop</Link>
                    <Link to="/menus">Menus</Link>
                </div>

                <div className="rightMenus">
                    <div>
                        <Link to="/About">About</Link>
                        <Link to="/login">Login |</Link>
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
    cartItems: state.cart.items,
});
export default connect(mapStateToProps,{})(NavBar);

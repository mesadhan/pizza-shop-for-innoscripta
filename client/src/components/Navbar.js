import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import cartLogo from "../logo-cart.svg";
import bandLogo from "../logo-band.png";


class NavBar extends Component {

    render() {
        return (
            <div data-test="navComponent" className="navComponent">
                <Link to="/">
                    <img src={bandLogo} className="logo-band" alt="Pizza Shop" />
                </Link>

                <div className="leftMenus">
                    <Link to="/" style={{fontWeight: 'bold'}}>Pizza Shop</Link>
                    <Link to="/menus">Menus</Link>
                </div>

                <div className="rightMenus">
                    <div>
                        <Link to="/About">About</Link>
                        <Link to="/login">Login |</Link>
                    </div>

                    <Link style={{display: 'flex'}} to="/cart">
                        <p style={{fontWeight: 'bold', color: '#fff'}}>5</p>
                        <img src={cartLogo} className="icon-cart" alt="cart logo" />
                    </Link>

                </div>
            </div>
        )

    }
}

export default NavBar;
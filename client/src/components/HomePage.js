import React, { Component } from 'react';
import logo from "../logo.png";
import deliveryLogo from "../logo-delivery.png";


class HomePage extends Component {
    render() {
        return (
            <div data-test="HomeComponent" className="HomeComponent">
                <header className="App-header">
                    <h1 className="welcome-title">Welcome!</h1>
                    <p className="welcome-span"> to Pizza Shop.</p>

                    <img src={logo} className="App-logo" alt="logo" />
                    <img src={deliveryLogo}  className="delivery-desktop-logo" alt="deliveryLogo" />
                </header>
            </div>
        )

    }
}

export default HomePage;
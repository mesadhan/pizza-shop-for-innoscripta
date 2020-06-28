import React, { Component } from 'react';
import logo from "../logo.png";
import deliveryLogo from "../logo-delivery.png";


class HomePage extends Component {
    render() {
        return (
            <div data-test="HomeComponent" className="HomeComponent">
                <header className="App-header">

                    {/*<p className="welcome-span"> Just order now.</p>*/}

                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="welcome-title">Order now!</h1>
                    <img src={deliveryLogo}  className="delivery-desktop-logo" alt="deliveryLogo" />
                </header>
            </div>
        )

    }
}

export default HomePage;
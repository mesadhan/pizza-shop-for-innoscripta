import React from 'react';
import logo from './logo.png';
import deliveryLogo from './logo-delivery.png';
import './App.scss';
import NavBar from "./components/Navbar";

function App() {
    let year = new Date().getFullYear()
    return (
        <div className="App">
            <NavBar/>

            <header className="App-header">
                <h1 className="welcome-title">Welcome!</h1>
                <p className="welcome-span"> to Pizza Shop.</p>

                <img src={logo} className="App-logo" alt="logo" />
                <img src={deliveryLogo}  className="delivery-desktop-logo" alt="deliveryLogo" />
            </header>

            <div id="footer">
                <p> © {year} , Pizza Shop Innoscripta GmbH. All rights reserved.</p>
            </div>
        </div>
    );
}

export default App;

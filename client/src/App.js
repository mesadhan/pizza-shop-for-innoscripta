import React from 'react';
import './App.scss';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

import {Switch, Route,} from "react-router-dom";
import Menus from "./components/Menus";
import About from "./components/About";
import HomePage from "./components/HomePage";
import Login from "./components/auth/Login";
import Order from "./components/order/Order";
import SignUp from "./components/auth/SignUp";
import OrderHistory from "./components/order/OrderHistory";
import {ToastContainer} from "react-toastify";

function App() {

    return (
        <div className="App">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <NavBar/>

            <div className="content-container">
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/menus" component={Menus}/>
                    <Route exact path="/order" component={Order}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/order-history/:id" component={OrderHistory}/>
                </Switch>
            </div>


            <Footer/>
        </div>
    );
}

export default App;

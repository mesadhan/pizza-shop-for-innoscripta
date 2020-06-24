import React from 'react';
import './App.scss';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

import {Switch, Route,} from "react-router-dom";
import Menus from "./components/Menus";
import About from "./components/About";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Cart from "./components/Cart";

function App() {

    return (
        <div className="App">
            <NavBar/>
            <Footer/>

            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/menus" component={Menus}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </div>
    );
}

export default App;

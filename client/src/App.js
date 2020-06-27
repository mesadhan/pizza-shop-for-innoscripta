import React from 'react';
import './App.scss';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

import {Switch, Route,} from "react-router-dom";
import Menus from "./components/Menus";
import About from "./components/About";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Order from "./components/Order";

function App() {

    return (
        <div className="App">
            <NavBar/>

            <div className="content-container">
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/menus" component={Menus}/>
                    <Route exact path="/order" component={Order}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/auth" component={Login}/>
                </Switch>
            </div>


            <Footer/>
        </div>
    );
}

export default App;

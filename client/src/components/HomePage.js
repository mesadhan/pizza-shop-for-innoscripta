import React, { Component } from 'react';
import logo from "../logo.png";
import deliveryLogo from "../logo-delivery.png";
import {Link} from "react-router-dom";


class HomePage extends Component {
    render() {
        return (
            <div data-test="HomeComponent" className="HomeComponent">



                <div className="container" style={{marginTop: "50px"}}>
                    <div className="jumbotron">
                        <h1 style={{color:"#FE8E2E"}}>Pizza 🍕 Shop</h1>
                        <p>Do you have a craving for pizza? Well, sit back and relax because we will satisfy your craving by delivering your delicacy right at your doorstep. We offer the best pizza delivery in many places. You can order pizza online from us, and we will deliver it at your convenience so you always have a pizza near me.
                        </p>

                        <Link to="/menus">
                            <h5>Menus</h5>
                        </Link>


                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <p className="welcome-span"> Do you love Pizza?</p>
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                        <div className="col-md-6">
                            <img src={deliveryLogo}  className="delivery-desktop-logo" alt="deliveryLogo" />

                            <p className="welcome-span"> Yes! Then Order now.</p>
                        </div>
                    </div>

                </div>




            </div>
        )

    }
}

export default HomePage;
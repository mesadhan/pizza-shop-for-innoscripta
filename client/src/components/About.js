import React, { Component } from 'react';


class About extends Component {
    render() {
        return (<div data-test="aboutComponent" className="aboutComponent">

            <div className="jumbotron">
                <h1>About Us</h1>
                <p> We deliver pizza 🍕 online. Just choose a pizza, put it into a cart, and make an order ...</p>
            </div>

        </div>)
    }
}

export default About;
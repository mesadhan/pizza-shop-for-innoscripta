import React, { Component } from 'react';
import './Footer.scss';


class Footer extends Component {
    render() {
        let year = new Date().getFullYear();

        return (
            <div data-test="footerComponent" className="footerComponent" id="footer">
                <p> © {year} , Pizza Shop Innoscripta GmbH. All rights reserved.</p>
            </div>
        )

    }
}

export default Footer;
import React, { Component } from 'react';
import './Footer.scss';


class Footer extends Component {
    render() {
        let year = new Date().getFullYear();

        return (
            <div data-test="footerComponent" className="footerComponent" id="footer">
                <div> © {year} , Pizza Shop Innoscripta GmbH. All rights reserved.</div>
            </div>
        )

    }
}

export default Footer;
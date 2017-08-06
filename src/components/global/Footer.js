import React, { Component } from 'react';
import './css/Footer.css';

class Footer extends Component {
    render() {
        const copyrightInfo = this.props.copyright
        return (
            <div className="Footer">
                <h6>{copyrightInfo}</h6>
            </div>
        );
    }
}

export default Footer;

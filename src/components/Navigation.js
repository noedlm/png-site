import React, { Component } from 'react';
import logo from '../logo.svg';
import Scrollchor from 'react-scrollchor';

class Navigation extends Component {
  render() {
    let variable = "bar here";
    return (
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            {/* wtf is happening here?
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            */} 
            <Scrollchor to="" className="navbar-brand">BSS</Scrollchor>
            <div className="container">
                <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Scrollchor to="#about-us" className="nav-link">About</Scrollchor>
                        </li>
                        <li className="nav-item">
                            <Scrollchor to="#projects" className="nav-link">Team</Scrollchor>
                        </li>
                        <li className="nav-item">
                            <Scrollchor to="#clients" className="nav-link">Clients</Scrollchor>
                        </li>
                        <li className="nav-item">
                            <Scrollchor to="#contact-us" className="nav-link">Contact Us</Scrollchor>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default Navigation;


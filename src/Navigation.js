import React, { Component } from 'react';
import logo from './logo.svg';

class Navigation extends Component {
  render() {
    let variable = "bar here";
    return (
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
                BSS
            </a>
            <div className="container">
                <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#about-us">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#clients">Clients</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact-us">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default Navigation;


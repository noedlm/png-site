import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="brand-container">
          <span className="brand">
            _______ _______ <span className="spread-letters">studios</span>
          </span>
        </div>
        <div className="parallax image-wakis"></div>
        <LandingPage />
        <div className="parallax image-wakis"></div>
      </div>
    );
  }
}

export default App;

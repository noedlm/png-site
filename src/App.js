import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './Navigation';
import AboutUs from './AboutUs';
import Team from './Team';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="brand-container brand">
          <span className="spread-letters">
            blink switch studios
          </span>
        </div>
        <div className="parallax image-wakis"></div>
        <AboutUs />
        <Team />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;

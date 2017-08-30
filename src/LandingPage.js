import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <div className="d-flex jumbotron jumbotron-fluid" style={{backgroundColor: "white"}}>
        <div className="container container-fluid">
            <h1 className="display-4 spread-letters">About Us</h1>
            <br/>
            <p className="lead">
              Here at this place we like to be passionate about our work and we take pride
              in what we deliver
            </p>
            <p>We also like to drink, so there's that</p>
        </div>
      </div>
    );
  }
}

export default LandingPage;


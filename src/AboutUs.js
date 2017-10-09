import React, { Component } from 'react';

class AboutUs extends Component {
  render() {
    return (
      <div className="d-flex jumbotron jumbotron-fluid section" id="about-us">
        <div className="container container-fluid">
            <h1 className="display-4 section__header">About Us</h1>
            <br/>
            <p className="lead">
              We are a studio based out of Austin, TX. focused on web design and implementations to meet our clients' needs.
              Established in 2017 so we're still very new. At Blink Switch Studios, we are passionate about our work and we take pride
              in what we deliver. Our focus is on delivering simple and intuitive solutions so you may carryon with
              with what matters to you.
            </p>
            <div className="row">
              <div className="col-sm-12 col-md-4 text-center">
                <div><i className="fa fa-cogs large-icon" aria-hidden="true"></i></div>
                <div><p className="lead">Web Design</p></div>
              </div>
              <div className="col-sm-6 col-md-4 text-center">
                <div><i className="fa fa-code large-icon" aria-hidden="true"></i></div>
                <div><p className="lead">Web Development</p></div>
              </div>
              <div className="col-sm-6 col-md-4 text-center">
                <div><i className="fa fa-group large-icon" aria-hidden="true"></i></div>
                <div><p className="lead">Consultations</p></div>
              </div>
            </div>
            <br/><br/><br/>
            <p className="text-center">We also like to drink, so there's that</p>
        </div>
      </div>
    );
  }
}

export default AboutUs;


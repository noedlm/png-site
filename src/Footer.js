import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="d-flex jumbotron jumbotron-fluid section section__footer" id="contact-us">
        <div className="container container-fluid">
            <div className="row text-center">
                <div className="col">
                    @Facebook
                </div>
                <div className="col">
                    @twitter
                </div>
                <div className="col">
                    noedelamora@gmail.com
                </div>
                <div className="col">
                    paulputo@gmail.com
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    copyright 2017
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;


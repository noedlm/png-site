import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid section" id="services">
        <div className="container container-fluid">
            <h1 className="display-4 section__header">Full Services</h1>
            <br/>
            <div className="d-flex flex-column flex-md-row align-items-center">
                <div className="col-sm-12 col-md-4 text-center">
                    <div><i className="fa fa-cogs fa-5x text-red" aria-hidden="true"></i></div>
                    <div><p>Web Design</p></div>
                </div>
                <div>
                    <p className="lead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
            <hr />
            <div className="d-flex flex-column flex-md-row align-items-center">
                <div className="col-sm-12 col-md-4 text-center">
                    <div><i className="fa fa-code fa-5x text-red" aria-hidden="true"></i></div>
                    <div><p>Web Development</p></div>
                </div>
                <div>
                    <p className="lead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <hr />
            <div className="d-flex flex-column flex-md-row align-items-center">
                <div className="col-sm-12 col-md-4 text-center">
                    <div><i className="fa fa-group fa-5x text-red" aria-hidden="true"></i></div>
                    <div><p className="lead">Consultations</p></div>
                </div>
                <div>
                    <p className="lead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Services;


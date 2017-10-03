import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <div className="d-flex jumbotron jumbotron-fluid section" id="team">
        <div className="container container-fluid">
            <h1 className="display-4 spread-letters">Meet The Team</h1>
            <br/>
            <div className="row">
                <div className="col">
                    <div className="profile-thumbnail image-noe"></div>
                    <div className="text-center">
                        <p className="lead">Noe De La Mora</p>
                    </div>
                </div>
                <div className="col">
                    <div className="profile-thumbnail image-paul"></div>
                    <div className="text-center">
                        <p className="lead">Paul Grugnale</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Team;


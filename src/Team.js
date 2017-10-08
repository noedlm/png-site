import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid parallax parallax--auto-height image-tree no-margin" id="team">
        <div className="container container-fluid">
            <h1 className="display-4 section__header text-white">Meet The Team</h1>
            <br/>
            <div className="row text-white">
                <div className="col d-flex flex-column justify-content-center">
                    <div className="profile-thumbnail image-noe"></div>
                    <div className="text-center">
                        <p className="lead no-margin">Noe De La Mora</p>
                    </div>
                    <div className="text-center">
                        <p>Co-Founder/Designer/Developer</p>
                    </div>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <div className="profile-thumbnail image-paul"></div>
                    <div className="text-center">
                        <p className="lead no-margin">Paul Grugnale</p>
                    </div>
                    <div className="text-center">
                        <p>Co-Founder/Developer</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Team;

